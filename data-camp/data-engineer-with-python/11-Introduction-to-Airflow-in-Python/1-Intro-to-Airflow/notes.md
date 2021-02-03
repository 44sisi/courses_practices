- Running a simple airflow task

    `airflow run <dag_id> <task_id> <start_date>`

- Get sub-commands for airflow

    `airflow`

- descriptions

    `airflow -h`

- description of specific sub-command

    `airflow <sub-command> -h`

- start webserver on port 9090

    `airflow webserver -p 9090`

- show recognized dags

    `airflow list_dags`

- A sample dag

    ```Python
    # Import the DAG object
    from airflow.models import DAG
    from datetime import datetime

    # Define the default_args dictionary
    default_arguments = {
        'owner': 'jdoe',
        'email': 'jdoe@datacamp.com',
        'startdate': datetime(2020, 1, 20),
        'retries': 2
    }

    # Instantiate the DAG object
        # dag_id: etl_workflow
        # variable name etl_dag doesn't appear in airflow interface
    etl_dag = DAG(dag_id = 'etl_workflow', default_args = default_arguments)
    ```
