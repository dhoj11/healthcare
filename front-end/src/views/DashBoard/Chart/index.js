import {CanvasJSChart} from 'canvasjs-react-charts'
import { getAppointNum } from '../data';
import styles from "./index.module.css";
function Chart(props) {
  
  const options = {
    animationEnabled: true,	
    width:900,//in pixels
    height:341,//in pixels
    title:{
      text: "시간별 예약 환자",
      fontSize: 20,
    },


    data: [{
      type: "spline",
      name: "2016",
      showInLegend: true,
      dataPoints: [
        { y: 155, label: "Jan" },
        { y: 150, label: "Feb" },
        { y: 152, label: "Mar" },
        { y: 148, label: "Apr" },
        { y: 142, label: "May" },
        { y: 150, label: "Jun" },
        { y: 146, label: "Jul" },
        { y: 149, label: "Aug" },
        { y: 153, label: "Sept" },
        { y: 158, label: "Oct" },
        { y: 154, label: "Nov" },
        { y: 150, label: "Dec" }
      ]
    }]
  }
  

  
  return(
    <>
      <div className={styles.today}>당일예약환자 </div>
      <CanvasJSChart options = {options}/>
    </>
  );
}
export default Chart;