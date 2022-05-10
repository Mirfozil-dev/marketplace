import React, { useState } from 'react';
import './Analytics.css';
import rainyIcon from '../../images/rainyIcon.svg';
import cloudySunIcon from '../../images/cloudySunIcon.svg';
import cloudyIcon from '../../images/cloudyIcon.svg';
import activityImg from '../../images/ActivityImg.png';
import Calculator from '../../components/Calculator/Calculator.jsx';
import ColumnChart from '../../components/ColumnChart/ColumnChart.jsx';
import Chart from 'react-apexcharts';
import TimeLineChart from '../../components/TimeLineChart/TimeLineChart.jsx';
import ProgressBar from '../../components/ProgressBar/ProgressBar.jsx';
import dog from '../../images/dog.png';
import SchedulerCalendar from '../../components/SchedulerCalendar/SchedulerCalendar.jsx';

function Analytics() {
  const [options, setOptions] = useState({
    chart: {
      type: 'area',
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
    },
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    legend: {
      position: 'top',
    },
    title: {
      text: 'Product View',
      style: {
        fontSize: '12px',
        fontWeight: '650',
        color: '#00313D',
      },
    },

  });
  const [series, setSeries] = useState([
    {
      name: 'series1',
      data: [31, 40, 28, 51, 42, 109, 100, 31, 40, 28, 51, 42],
    },
    {
      name: 'series2',
      data: [11, 32, 45, 32, 34, 52, 41, 11, 32, 45, 32, 34],
    },
  ]);
  let [task, setTask] = useState('');
  let [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Eat banana',
      completed: false,
    },
  ]);

  function handleChange(e) {
    setTask(e.target.value);
    console.log(task);
  }

  function addTask() {
    if (task !== '') {
      const taskData = {
        id: Math.floor(Math.random() * 1000),
        title: task,
        completed: false,
      };

      setTasks([...tasks, taskData]);

      let taskInput = document.querySelectorAll('.add_task_dropdown input')[0];
      taskInput.value = '';

      let dropdown = document.querySelectorAll('.add_task_dropdown')[0];
      dropdown.classList.remove('active');
    }
  }

  function setTaskCompleted(id) {
    const element = tasks.findIndex(elem => elem.id === id);

    const tasksCopy = [...tasks];

    tasksCopy[element] = {
      ...tasksCopy[element],
      completed: !tasksCopy[element].completed,
    };

    setTasks(tasksCopy);
    console.log(element);
  }

  function showTaskDropdown() {
    let dropdown = document.querySelectorAll('.add_task_dropdown')[0];
    dropdown.classList.toggle('active');
  }


  return (
    <div className="analytics_page_wrapper w-100 h-100">
      <div className="analytics_page w-100 h-100 d-flex justify-content-between">
        <div className="analytics_page_content">
          <div className="analytics_header w-100 d-flex justify-content-between">
            <div className="d-flex flex-column h-100 justify-content-between">
              <h5 className="analytics_my_country text-white">Uzbekistan</h5>
              <div className="d-flex align-items-end">
                <h5 className="analytics_day text-white">
                  3rd
                  <span>
                    , thu
                  </span>
                </h5>
              </div>
            </div>
            <div className="d-flex">
              <div className="analytics_weather_degree d-flex flex-column align-items-center justify-content-center">
                <h5 className="text-white">+25</h5>
                <div>
                  <p>
                    partially
                    cloudy
                  </p>
                </div>
              </div>
              <div className="analytics_weather d-flex flex-column justify-content-around">
                <div className="weather_yesterday d-flex">
                  <img src={rainyIcon} alt="" />
                  <p>Yesterday</p>
                </div>
                <div className="weather_today d-flex">
                  <img src={cloudySunIcon} alt="" />
                  <p className="text-white">Today</p>
                </div>
                <div className="weather_tomorrow d-flex">
                  <img src={cloudyIcon} alt="" />
                  <p>Tomorrow</p>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <div className="activity_card">
              <div className="analytics_card_header w-100 d-flex align-items-center justify-content-between">
                <h5 className="m-0">Activity</h5>
                <div className="activities_count d-flex align-items-center">222</div>
              </div>
              <div className="activity_card_body w-100 d-flex flex-column">
                <div className="analytics_activity_item d-flex">
                  <img src={activityImg} alt="" />
                  <div>
                    <h5>VooDoo Val</h5>
                    <p>11:22 pm 10 January 2020</p>
                  </div>
                </div>
                <div className="analytics_activity_item d-flex">
                  <img src={activityImg} alt="" />
                  <div>
                    <h5>VooDoo Val</h5>
                    <p>11:22 pm 10 January 2020</p>
                  </div>
                </div>
                <div className="analytics_activity_item d-flex">
                  <img src={activityImg} alt="" />
                  <div>
                    <h5>VooDoo Val</h5>
                    <p>11:22 pm 10 January 2020</p>
                  </div>
                </div>
                <div className="analytics_activity_item d-flex">
                  <img src={activityImg} alt="" />
                  <div>
                    <h5>VooDoo Val</h5>
                    <p>11:22 pm 10 January 2020</p>
                  </div>
                </div>
                <button className="activities_show_all_btn mx-auto">Show All</button>
              </div>
            </div>
            <div className="tasks_card d-flex flex-column">
              <div className="analytics_card_header w-100 d-flex align-items-center justify-content-between">
                <h5 className="m-0">Tasks</h5>
                <button onClick={showTaskDropdown} className="add_task_btn">
                  <i className="fas fa-plus" />
                </button>
              </div>
              <div className="add_task_dropdown d-flex flex-column">
                <h5>Add Task</h5>
                <input
                  onKeyDown={(e) => e.code === 'Enter' && addTask()}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  className="w-100" placeholder="Task..." type="text" />
                <button onClick={addTask} className="d-flex align-items-center justify-content-center">Add
                </button>
              </div>
              <div className="tasks_card_body w-100">
                {
                  tasks.map((item) => {
                    return (
                      <div
                        onClick={() => {
                          setTaskCompleted(item.id);
                        }}
                        key={item.id}
                        className={
                          item.completed ? 'task_item d-flex align-items-center completed' :
                            'task_item d-flex align-items-center'
                        }>
                        <span className="task_status" />
                        <p>{item.title}</p>
                      </div>
                    );
                  })
                }
              </div>
            </div>
            <div className="website_view_card">
              <div className="analytics_card_header w-100 d-flex align-items-center">
                <h5 className="m-0">Website View</h5>
              </div>
              <div className="website_view_card_body w-100">
                {/* Enter label from greatest to lowest */}
                <ColumnChart
                  className="column_chart_wrapper w-100 h-100"
                  labels={[
                    4000, 3000, 2000, 1000, 0,
                  ]}
                  data={[
                    {
                      title: 'Sat',
                      number: 2000,
                    },
                    {
                      title: 'Sun',
                      number: 2500,
                    },
                    {
                      title: 'Mon',
                      number: 500,
                    },
                    {
                      title: 'Tue',
                      number: 1800,
                    },
                    {
                      title: 'Wed',
                      number: 3500,
                    },
                    {
                      title: 'Thu',
                      number: 2100,
                    },
                    {
                      title: 'Fri',
                      number: 1000,
                    },
                  ]}
                />
              </div>
            </div>
            <div className="product_view_card">
              <div className="analytics_card_header w-100 d-flex align-items-center">
                <h5 className="m-0">Product View</h5>
              </div>
              <div className="product_view_card_body d-flex flex-wrap justify-content-between align-items-center">
                <div className="product_view_item purple d-flex align-items-center">
                  <span className="h-100" />
                  <div>
                    <p>Total Products</p>
                    <h6>3392522</h6>
                  </div>
                </div>
                <div className="product_view_item rose d-flex align-items-center">
                  <span className="h-100" />
                  <div>
                    <p>Women’s Wear</p>
                    <h6>2212</h6>
                  </div>
                </div>
                <div className="product_view_item green d-flex align-items-center">
                  <span className="h-100" />
                  <div>
                    <p>Baby’s Wear</p>
                    <h6>222</h6>
                  </div>
                </div>
                <div className="product_view_item gold d-flex align-items-center">
                  <span className="h-100" />
                  <div>
                    <p>Men’s wear</p>
                    <h6>1911</h6>
                  </div>
                </div>
                <div className="w-100 d-flex justify-content-center">
                  <div className="product_view_show_all_btn d-flex align-items-center justify-content-center">
                    Show All
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <div className="product_view_graph">
              <Chart
                height="100%"
                width="100%"
                options={options}
                series={series}
                type="area"
              />
            </div>
            <div className="responses_for_quotes">
              <h5>Response For Quotes</h5>
              <TimeLineChart className="w-100 h-100" />
            </div>
          </div>
        </div>
        <div className="analytics_sidebar">
          <div className="analytics_calendar w-100">
            <SchedulerCalendar className="w-100" />
          </div>
          <Calculator className="calculator_wrapper w-100" />
          <div className="analytics_my_all_products">
            <h5>My All Products</h5>
            <div className="analytics_my_all_products_card">
              <div className="analytics_my_all_products_card_skewed" />
              <span className="d-flex flex-column align-items-center">
                <h5>Total </h5>
                <p>57 222 111</p>
                <ProgressBar progress={50} color="#00D86C" className="analytics_progress_bar_wrapper" />
                <img src={dog} alt="" />
              </span>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analytics;