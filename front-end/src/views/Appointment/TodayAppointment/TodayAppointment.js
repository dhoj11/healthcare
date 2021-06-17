import { AutoSizer, List } from "react-virtualized";
import "./TodayAppointment.css";
function TodayAppointment(props) {
  let appointmentList = [
    {"no":"1","time":"10:30","patient_name":"아무개","staff_name":"김의사"},
    {"no":"2","time":"10:30","patient_name":"아무개","staff_name":"김의사"},
    {"no":"3","time":"10:30","patient_name":"아무개","staff_name":"김의사"},
    {"no":"4","time":"10:30","patient_name":"아무개","staff_name":"김의사"},
    {"no":"5","time":"10:30","patient_name":"아무개","staff_name":"김의사"},
    {"no":"6","time":"10:30","patient_name":"아무개","staff_name":"김의사"},
    {"no":"7","time":"10:30","patient_name":"아무개","staff_name":"김의사"},
    {"no":"8","time":"10:30","patient_name":"아무개","staff_name":"김의사"},
    {"no":"9","time":"10:30","patient_name":"아무개","staff_name":"김의사"},
    {"no":"10","time":"10:30","patient_name":"아무개","staff_name":"김의사"},
    {"no":"11","time":"10:30","patient_name":"아무개","staff_name":"김의사"},
    {"no":"12","time":"10:30","patient_name":"아무개","staff_name":"김의사"},
    {"no":"13","time":"10:30","patient_name":"아무개","staff_name":"김의사"},
    {"no":"14","time":"10:30","patient_name":"아무개","staff_name":"김의사"},
    {"no":"15","time":"10:30","patient_name":"아무개","staff_name":"김의사"},
    {"no":"16","time":"10:30","patient_name":"아무개","staff_name":"김의사"},
    {"no":"17","time":"10:30","patient_name":"아무개","staff_name":"김의사"},
    {"no":"18","time":"10:30","patient_name":"아무개","staff_name":"김의사"},
    {"no":"19","time":"10:30","patient_name":"아무개","staff_name":"김의사"},
    
  ];

 
  return(
    <div className="TodayAppointment_contain">
      <div className="TodayAppointment_title">오늘의 예약</div>
      <div className="table_t">
      <table>
          <thead>
            <tr>
              <th>순서</th>
              <th>예약 시간</th>
              <th>이름</th>
              <th>담당의</th>
            </tr>
          </thead>
          <tbody>          
            {appointmentList.map(data => {
              return (
                <tr key={data.no}>
                <td>{data.no}</td>
                <td>{data.time}</td> 
                <td>{data.patient_name}</td> 
                <td>{data.staff_name}</td> 
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
        
    </div>
  );
}
export default TodayAppointment;