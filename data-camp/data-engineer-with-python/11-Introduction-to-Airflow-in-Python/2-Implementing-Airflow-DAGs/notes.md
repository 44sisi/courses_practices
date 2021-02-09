# Airflow tasks
- within airflow tools, tasks are referred to by task_id
- within Python code, tasks are referred to by variable name

## Task dependencies
- Referred to as *upstream* or *downstream* tasks
- *bitshift* operator (since v1.8)
    - \>> upstream operator
    - << downstream operator

```python
task1 = BashOperator()
task2 = BashOperator()
task3 = BashOperator()

# task1 to run before task2
task1 >> task2  # or task2 << task1

# multiple dependencies
task1 >> task2 << task3

# same as above
task1 >> task2
task3 >> task2
```

<p>&nbsp;</p>

# Airflow operators 

## Dummny operator
- can represent task for trouble shooting or task not yet implemented

```python
task = DummyOperator(
    task_id = 'example', 
    dag = dag
)
```

## Bash operator
- executes given command or script
- may need to use environmental variables extensively (e.g. ~ for home directory is not set up in airflow, aws credentials, database connectivity, etc)

```python
from airflow.operators.bash_operator import BashOperator

example_task_1 = BashOperator(
    task_id = 'bash_example',
    bash_command = 'echo "Example!"',
    dag = dag
)

example_task_2 = BashOperator(
    task_id = 'bash_example',
    bash_command = 'cat sample.txt | awk "NF == 10" > cleaned.txt',
    dag = dag
)

example_task_3 = BashOperator(
    task_id = 'bash_example',
    bash_command = 'runcleanup.sh',
    dag = dag
)
```

## Python operator

- simple python operator

```python
from airflow.operators.python_operator import PythonOperator

def printme():
    print('This goes into the logs!')

python_task = PythonOperator(
    task_id = 'simple_print',
    python_callable = printme,
    dag = example_dag
)
```

- op_kwarg example

```python
from airflow.operators.python_operator import PythonOperator

def sleep(length_of_time):
    time.sleep(length_of_time)

sleep_task = PythonOperator(
    task_id = 'sleep',
    python_callable = sleep,
    op_kwargs = {'length_of_time': 5}
    dag = example_dag
)
```

## Email operator
```python
from airflow.operators.email_operator import EmailOperator

email_task = EmailOperator(
    task_id = 'email_sales_report',
    to = 'sales_manager@example.com',
    subject = 'Automated Sales Report',
    html_content = 'Attached is the latest report',
    files = 'latest_sales.xlsx',
    dag = example_dag
)
```

<p>&nbsp;</p>

# Airflow scheduling
- Each dag maintains a state for itself and the tasks within
    - `running`
    - `success`
    - `failed`

- Attributes when scheduling a dag
    - `start_date`
        - the data/time to initially schedule the DAG run
        - typically defined with a python datetime object
    - `end_date`
        - optional attribute for when to stop running new DAG instances
    - `max_tries`
        - how many attempts to make
    - `schedule_interval`
        - how often to run
        - `0 12 * * *` : run daily at noon
        - `* * 25 2 *` : run onces per minute only on 25th Feb
        - `0, 15, 30, 45 * * * *` : run every 15 mins
        - `@hourly` : `0 * * * *`
        - `@daily` : `0 0 * * *`
        - `@weekly` : `0 0 * * 0`
        - `@monthly`
        - `None` : don't schedule ever, used for manually triggered DAGs
        - `@once` : schedule only once
    - Airflow behaviour
        - use the `start_date` as the earliest possible value
        - schedule the task at `start_date` + `schedule_interval`
        ```python
        'start_date': datetime(2020, 2, 25),
        'schedule_interval': @daily

         # earliest starting time to run DAG is 26th Feb 2020
        ```

- Example
```python
default_args = {
  'owner': 'Engineering',
  'start_date': datetime(2019, 11, 1),
  'email': ['airflowresults@datacamp.com'],
  'email_on_failure': False,
  'email_on_retry': False,
  'retries': 3,
  'retry_delay': timedelta(minutes=20)
}

dag = DAG('update_dataflows', default_args=default_args, schedule_interval='30 12 * * 3')
```