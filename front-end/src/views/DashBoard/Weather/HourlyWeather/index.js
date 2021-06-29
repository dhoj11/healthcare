// import styles from "./index.module.css";
// import { Line } from 'react-chartjs-2';

// function HourlyWeather(props) {
//   const {hourlyWeather}=props;

//   let data=null;
 
  
//   if(hourlyWeather!==null){
//     let timeLabel =new Array();
//     let temperature = new Array();
//     for(let i=0; i<6;i++){
//       timeLabel.push(hourlyWeather[i].dt_txt.substr(12,2)+"시")
//       temperature.push(Math.round(hourlyWeather[i].main.temp));
//     }
//     data = {
    
//       labels: timeLabel,
//       datasets: [
//         {
//           data: temperature,
//           backgroundColor: 'white',
//           borderColor: 'gray',
//         },
//       ],
//     };
//   }
  
  
//   const options = {

//     plugins: {
//       legend: {
//         display: false
//       }
//     },
//     scales : {
//       x : {
//         grid:{
//           display: false
//         }
        
//       },
//       y : {
        
//       },
//     },

//     tooltips: {
//       enabled: false
//       },
//     hover: {
//       animationDuration: 0
//       },
//     cubicInterpolationMode:'monotone',
//     maintainAspectRatio: false,
//     randing: true, // false로 설정 시 사용자 정의 크기에 따라 그래프 크기가 결정됨.
//   };
//   return(
//     <>
//     <div className={styles.header}>시간대별 날씨</div>
//       <div className={styles.weather_chart}>
//         {
//           hourlyWeather!== null && <Line data={data} options={options} />
//         }
//       </div>
//         {
//           hourlyWeather !== null && (
//             <div>
//               {hourlyWeather.map((data,index) => {
//                 if(index<6){
//                   return (
//                     <img key={index} src={data.weather[0].icon} className={styles.imgs}/>
//                     )
//                 }
                
//               })}
//             </div>
//           )
//         }
//       </>
//   );
// }
// export default HourlyWeather;


import styles from "./index.module.css";
import { Line } from 'react-chartjs-2';
import {CanvasJSChart} from 'canvasjs-react-charts';
function HourlyWeather(props) {

  const {hourlyWeather}=props;
  let dataPoints = new Array();
  
  if(hourlyWeather!==null){
    for(let i=0; i<6;i++){
      var jsonData = new Object(); 
      jsonData.y = Math.round(hourlyWeather[i].main.temp);
      jsonData.label = hourlyWeather[i].dt_txt.substr(12,2)+"시";
      jsonData.indexLabel = Math.round(hourlyWeather[i].main.temp) +'°';
      dataPoints.push(jsonData);
    }
    console.log(dataPoints);
  }

  const options = {
    height:"100",
    width:"470",
    animationEnabled: true,
    indexLabelOrientation: "horizontal",
    data: [{
      indexLabelFontSize: 15,
      indexLabelPlacement: "inside",
      type: "spline",
      dataPoints: dataPoints
    }],
    axisY:{
      gridColor: "white",
      minimum: -20,
      lineThickness: 0,
      labelFontColor: "white",
      tickThickness: 0,
   },
   axisX:{
    gridColor: "white",
    lineThickness: 0,
    tickThickness: 0,
    labelFontSize: 15,
    labelFontWeight: "bold"
 },
}

  return(
    <>
        <div className={styles.header}>시간대별 날씨</div>
          <div className={styles.weather_chart}>
            {
              hourlyWeather!== null && <div className={styles.chart}><CanvasJSChart options = {options} /></div>
            }
          </div>
            {
              hourlyWeather !== null && (
                <div className={styles.imgs}>
                  {hourlyWeather.map((data,index) => {
                    if(index<6){
                      return (
                        <img key={index} src={data.weather[0].icon} className={styles.imgs} height="40px"/>
                        )
                    }
                    
                  })}
                </div>
              )
            }
          </>
      );
}
export default HourlyWeather;
