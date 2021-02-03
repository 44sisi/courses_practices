- dummny operator: can represent task for trouble shooting or task not yet implemented

    ```python
    task = DummyOperator(
        task_id = 'example', 
        dag = dag
    )
    ```

- bash operator

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