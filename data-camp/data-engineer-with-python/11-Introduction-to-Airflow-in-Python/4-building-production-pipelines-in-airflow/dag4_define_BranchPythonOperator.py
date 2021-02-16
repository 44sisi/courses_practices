# Create a function to determine if years are different
from airflow.models import DAG
from airflow.operators.python_operator import BranchPythonOperator
from airflow.operators.bash_operator import BashOperator
from datetime import datetime

def year_check(**kwargs):
    current_year = int(kwargs['ds_nodash'][0:4])
    previous_year = int(kwargs['prev_ds_nodash'][0:4])
    if current_year == previous_year:
        return 'current_year_task'
    else:
        return 'new_year_task'

default_args = {
  'start_date': datetime(2020, 4, 15)
}

branch_dag = DAG(
    dag_id = 'branch_dag', 
    default_args = default_args
)

# Define the BranchPythonOperator
branch_task = BranchPythonOperator(
    task_id='branch_task', 
    dag=branch_dag,
    python_callable=year_check, 
    provide_context=True
)

current_year_task = BashOperator(
    task_id = 'bash_example',
    bash_command = 'echo "current year"',
    dag = branch_dag
)

new_year_task = BashOperator(
    task_id = 'bash_example',
    bash_command = 'echo "new year"',
    dag = branch_dag
)

# Define the dependencies
branch_task >> current_year_task
branch_task >> new_year_task