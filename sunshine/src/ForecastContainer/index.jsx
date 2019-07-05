import React from "react";
import { ApiClient } from "./../Api/ApiClient";
import Day from "./Day";
import DetailsModal from "./DetailsModal";

class ForecastContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherData: null,
      show: false,
      currentModalData: null,
      selectedDay: ''
    };
    this.showModal = this.showModal.bind(this);
  }

  componentDidMount() {
    ApiClient.getWeather().then(data => {
        this.setState({weatherData: this.groupByDateIntoArrays(data)});
    });
  }

  showModal =(day, dayName)=> {
      this.setState({ currentModalData: day,
                      selectedDay: dayName,
                      show: true })
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  groupByDateIntoArrays =(data)=> {
    let tempData;
    let day = [];
    let week = [];
    tempData = data.list[0].dt_txt.slice(0, 10);
      for (let i = 0; i < data.list.length; i++) {
        if (data.list[i].dt_txt.slice(0, 10) === tempData) {
          day.push(data.list[i]);
        } else {
          week.push(day);
          day = [];
          day.push(data.list[i]);
          tempData = data.list[i].dt_txt.slice(0, 10);
        }
      }
    return week;
  }

  findHighestTemp =(day)=> {
    let maxTemp = Math.max.apply(Math,day.map(x => {return x.main.temp}));
    return day.find(x => {return x.main.temp === maxTemp})
  }

  render() {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    let date = new Date();
    return (
      <div className="container">
        <div className="tilesWrapper">
          <h1>
          <strong>Sunshine</strong> - by Arkadiusz Łysakowski
          </h1>
          {this.state.weatherData
            ? this.state.weatherData.map((day, index) => {
                let obj = this.findHighestTemp(day);
                let dayName = days[(date.getDay() + index) % 7];
                return (
                <>
                  <div onClick={()=>this.showModal(obj, dayName)}>
                    <Day dayName={dayName} obj={obj} index/>  
                  </div>
                </>
                );
              })
              : null}
          {this.state.show && this.state.currentModalData ? 
          <DetailsModal 
            handleClose={()=>this.hideModal()} 
            dayData={this.state.currentModalData} 
            selectedDay={this.state.selectedDay}/> 
          : null}
        </div>
      </div>
    );
  }
}
export default ForecastContainer;
