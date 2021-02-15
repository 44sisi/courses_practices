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