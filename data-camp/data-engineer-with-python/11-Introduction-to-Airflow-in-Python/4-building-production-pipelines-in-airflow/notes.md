# Templates
- created using `jinja` templating language

## example: non-templated BashOperator
```python
t1 = BashOperator(
    task_id = "first_task",
    bash_command = 'echo "Reading file1.txt"',
    dag = dag
)

t2 = BashOperator(
    task_id = "second_task",
    bash_command = 'echo "Reading file2.txt"',
    dag = dag
)
```

## example: tamplated BashOperator
```python
tamplated_command = """
    echo "Reading {{ params.filename }}"
"""

t1 = BashOperator(
    task_id = "template_task",
    bash_command = templated_command,
    params = {'filename': 'file1.txt'}
    dag = example_dag
)

t2 = BashOperator(
    task_id = "template_task",
    bash_command = templated_command,
    params = {'filename': 'file2.txt'}
    dag = example_dag
)
```

## example: more advanced tamplated BashOperator
```python
tamplated_command = """
    {% for filename in params.filenames %}
        echo "Reading {{ filename }}"
    {% endfor %}
"""

t1 = BashOperator(
    task_id = "template_task",
    bash_command = templated_command,
    params = {'filenames': ['file1.txt', 'file2.txt']}
    dag = example_dag
)
```

## check if a field can use template
- Open python3 interpreter  
    `python3`
- Import necessary libraries, e.g.  
    `from airflow.operators.bash_operator import BashOperator`
- Run help(<Airflow object>), e.g.  
    `help(BashOperator)`
- In the output, look for a line that references *template_fields*. This will specify any of the arguments that can use templates. e.g. for `BashOperator`  
    `template_field = ('bash_command', 'env')`

<p>&nbsp;</p>

# Variables and marcos
- https://airflow.apache.org/docs/apache-airflow/1.10.3/macros.html

## default variables
- examples
    - `{{ ds }}`: execution date as string in YYYY-MM-DD format
    - `{{ ds_nodash }}`: execution date as string in YYYYMMDD format
    - `{{ prev_ds }}`: date of previous dag run in YYYY-MM-DD
    - `{{ prev_ds_nodash }}`: date of previous dag run in YYYYMMDD
    - `{{ dag }}`: the full DAG object
    - `{{ conf }}`: current airflow configuration within code

## macros
- examples
    - `{{ macros.datetime }}`: the `datetime.datetime` object
    - `{{ macros.timedeltas }}`: the `timedelta` object
    - `{{ macros.uuid }}`: Python's `uuid` object
    - `{{ macros.ds_add('2020-04-15', 5) }}`: modify days from a date, this example returns 2020-04-20

<p>&nbsp;</p>

# Branching
- provides conditional logic, meaning tasks can be selectively executed or skipped depending on result of an operator
- can use `BranchPythonOperator` and other operators
    ```python
    from airflow.operators.python_operator import BranchPythonOperator

    def branch_test(**kwargs):
        if int(kwargs['ds_nodash']) % 2 == 0:
            return 'even_day_task'
        else:
            return 'odd_day_task'
    
    branch_task = BranchPythonOperator(
        task_id = "branch_task",
        dag = dag,
        provide_context = True,          # tells airflow to provide access to the runtime variables and macros to the function
        python_callable = branch_test
    )

    start_task >> branch_task >> even_day_task >> even_day_task2
    branch_task >> odd_day_task >> odd_day_task2
    ```