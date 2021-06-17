import {CanvasJSChart} from 'canvasjs-react-charts'

function Chart(props) {
  const options = {
    animationEnabled: true,	
    title:{
      text: "시간별 예약 환자"
    },
    axisY : {
      title: "Number of Customers"
    },
    toolTip: {
      shared: true
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

          <CanvasJSChart options = {options} 
            /* onRef={ref => this.chart = ref} */
          />
  );
}
export default Chart;