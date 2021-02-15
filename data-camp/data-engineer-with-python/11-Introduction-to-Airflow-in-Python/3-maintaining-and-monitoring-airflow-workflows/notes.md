# Sensors
- an operator that waits for a certain condition to be true
- are assigned to tasks
- imported from `airflow.sensors.base_sensor_operator` 
- key arguments
    - `mode`: how to check for the condition  
        - `mode = 'poke'`: default, run repeatedly until condition is true
        - `mode = 'reschedule'`: give up task slot and try again later
    - `poke_interval`: how often to wait between checks
    - `timeout`: how long to wait before failing task, make sure it's significantly shorter than schedule_interval
- also includes normal operator attributes

## File sensor
- checks for the existence of a file at a certain location
- check if any files exist within a directory

```python
from airflow.contrib.sensors.file_sensors import FileSensor

file_sensor_task = FileSensor(
    task_id = 'file_sense',
    filepath = 'salesdata.csv',
    poke_interval = 300,
    dag = sales_report_dag
)

init_sales_cleanup >> file_sensor_task >> generate_report
```

## Other sensors
- `ExternalTaskSensor`: wait for a task in another DAG to complete
- `HttpSensor`: request a web URL and check for content
- `SqlSensor`: runs a SQL query to check for content
- many others in `airflow.sensors` and `airflow.contrib.sensors` libraries

## Use sensors when
- uncertain when it'll be true
- if failure not immediately desired
- to add task repetition without loops

# Executors

## SequentialExecutor
- default airflow executor
- runs one task at a time, meaning having multiple workflows scheduled around the same timeframe may cause things to take longer than expected
- useful for debugging as it's simple
- not recommended for prod due to limitation of resources

## LocalExecutor
- runs on a single system
- treats each task as a process on the local system
- able to start as many concurrent tasks as desired, requested and permitted by the system resources, e.g. cpu, memory, etc.
- *parallelism* defined by the user
- can utilise all resources of a given host system
- good for a single production airflow system

## CeleryExecutor
- general queueing system written in python that allows multiple systems to communicate as a basic cluster
- multiple airflow systems can be configured as workers for a given set of workflows or tasks
- can add extra systems at anytime to better balance workflows
- requires a working celery configuration prior to airflow
- requires some methods to share dags between the systems, e.g. a git server, Network File System, etc
- a powerful choice for anyone working with a large number of DAGs and / or expects their processing needs to grow

## Know the executor being used
- look at the appropriate `airflow.cfg` file
    - `airflow.cfg` file is where most of the configuration and settings for the Airflow instance are defined
    - search for `executor=` line
    - e.g.
    ```
    cat airflow/airflow.cfg | grep "executor = "
    ```
    - output:
    ```
    executor = SequentialExecutor
    ```

- command: `airflow list_dags`
    - e.g. output:
    ```
    INFO - Using executor SequentialExecutor
    ```