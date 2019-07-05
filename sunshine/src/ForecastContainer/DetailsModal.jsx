import React from 'react';

export const countTemp =(data)=> {
    return Math.round(((data - 273.15) * 10) / 10);
}

export const countDetails =(data)=> {
    return Math.round(((data) * 10) / 10);
}

const DetailsModal =(props)=> {
    return(
      <div className={props.showHideClassname}>
        <section className="modal-main">
          <button onClick={props.handleClose}> X </button>
            <div className="container detailsPage">
              <div className="tilesWrapper">
                <h1>Weather's details for <strong>{props.selectedDay}</strong></h1>
                  <div className="conditionIcon"> <img src={('./../icons/' + props.dayData.weather[0].main + '.png')} alt="weather condition" /> </div>
                    <div className="detailsTile">
                    <h3>Conditions</h3>
                    <br></br>
                    <h5>Day: <strong>{countTemp(props.dayData.main.temp)}°C</strong></h5>
                    <br></br>
                    <h5>Pressure: <strong>{countDetails(props.dayData.main.pressure) + ' hPA'}</strong></h5>
                    <h5>Humidity: <strong>{countDetails(props.dayData.main.humidity) + ' %'}</strong></h5>
                    <br></br>
                    <h5>Ground level: <strong>{props.dayData.main.grnd_level + ' m'}</strong></h5>
                    <h5>Sea level: <strong>{props.dayData.main.sea_level + ' m'}</strong></h5>
                  </div>
             </div>
          </div>
        </section>
      </div>
    )
}

export default DetailsModal;