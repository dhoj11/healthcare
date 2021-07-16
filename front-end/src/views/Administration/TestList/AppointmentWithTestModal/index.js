import styles from "./AppointmentWithTestModal.module.css";
import {Modal} from "react-bootstrap";
import Calendar from "../../../Appointment/Calendar"
import {useState, useEffect} from "react";
import { useSelector } from "react-redux";
import {CountbyAppointment,addNewAppointment, appointmentTestList, changeTestStateToAppointment} from "../../../../apis/administration";
import moment from "moment";
import TimeSelector from "./TimeSelector";

function AppointmentWithTestModal(props) {
  
  const {dayAppointment, setSelectedTestCodes, setRerenderer, testCodes, isOpen, close} = props;
  const hospital_code = useSelector(state => state.authReducer.hospital_code);

  const [startDate, setStartDate] = useState(new Date());   //calendar에 전해줄 상태
  const [appointmentDate, setAppointmentDate] = useState(moment().format("YYYY-MM-DD"));
  const [appointmentTime, setAppointmentTime] = useState("");
  const [timeAndCount, setTimeAndCount] = useState();
  const [appointment, setAppointment] = useState({
    appointment_date: moment().format("YYYY-MM-DD"),
    staff_id: "",
    patient_id: "",
    appointment_kind: "검사"
  });
  const [testList, setTestList] = useState({
    patient_id: "",
    test_list_id: "",
    test_list_date: "",
    test_list_time: "",
    appointment_id: "",
    treatment_id: ""
  });

  useEffect(() => {
    if(testCodes.length !== 0) {
      setStartDate(new Date());
      setAppointmentDate(moment().format("YYYY-MM-DD"));
      setAppointment({
        appointment_date: moment().format("YYYY-MM-DD"),
        staff_id: testCodes[0].staff_id,
        patient_id: testCodes[0].patient_id,
        appointment_kind: "검사"
      });
    }
    console.log("testCodes",testCodes);
  },[isOpen]);

  useEffect(() => {
    if(moment().diff(appointmentDate) >= 0) {
      console.log("이전날짜");
    }
    console.log(appointmentDate);
    const work = async() => {
      try{
        const response = await CountbyAppointment(hospital_code, appointmentDate);
        setTimeAndCount(response.data);
        console.log(response.data);
      }catch(error) {
        console.log(error.message);
      }
    }
    work();
  },[appointmentDate]);

  const changeDate = (date) => {
    const fmt = moment(date).format("YYYY-MM-DD");
    setStartDate(date);
    setAppointmentDate(fmt);
    setTestList({
      patient_id: testCodes[0].patient_id,
      test_list_id: moment(appointmentDate).format("YYMMDD") + testCodes[0].treatment_id ,
      test_list_date: appointmentDate,
      test_list_time: appointmentTime,
      appointment_id: "",
      treatment_id: testCodes[0].treatment_id
    })
  }

  const changeTime = (time) => {
    setAppointmentTime(time);
    setTestList({
      patient_id: testCodes[0].patient_id,
      test_list_id: moment(appointmentDate).format("YYMMDD") + testCodes[0].treatment_id ,
      test_list_date: appointmentDate,
      test_list_time: time,
      appointment_id: "",
      treatment_id: testCodes[0].treatment_id
    })
  }

  const newTestAppointment = async() => {
    //appointment추가, test_list_id,test_list_date,appointment_id update
    const newAppointment = {...appointment, appointment_date: appointmentDate, appointment_time: appointmentTime}
    const newTestList = {testList: [testList], testCodes: testCodes};
    try{
      await addNewAppointment(newAppointment);
      await appointmentTestList(newTestList);
      //await changeTestStateToAppointment({test_list_id: testCodes[0].test_list_id, reception_id: testCodes[0].reception_id}); //reception_state 바꿔줌
      await changeTestStateToAppointment(testCodes[0].reception_id); //reception_state 바꿔줌
      setSelectedTestCodes([]);
      setRerenderer({reception_id:testCodes[0].reception_id, date: new Date()});
      dayAppointment(new Date());
    }catch(error) {
      console.log(error.message);
    }
    close();
  }

  return (
    <>
    {isOpen ? (
      testCodes.length !== 0 ? (
        <Modal show={isOpen} onHide={close} size="lg" centered="true" className="modal">
        <Modal.Header closeButton>
          <Modal.Title>검사 예약</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div>
            <div className={styles.register_form_row}>
              <div className={`${styles.border_title} border`} >환자 이름</div>
              {testCodes[0].patient_name}
            </div>
            <div className={styles.register_form_row}>
              <div className={`${styles.border_title} border`}>검사 종류</div>
              <div className="d-flex">
                {testCodes.map((testCode,index)=>(
                  <div key={index}>
                    <input className="mr-2" type="checkbox" checked readOnly /><span className="mr-3">{testCode.test_code}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="d-flex">
              <div><Calendar startDate={startDate} changeDate={changeDate}></Calendar></div>
              <div>
                <TimeSelector appointmentDate={appointmentDate} timeAndCount={timeAndCount} changeTime={changeTime}/>
              </div>
            </div>
            <span className={styles.information_letter}>(예약 시간의 우측은 해당 예약 시간의 예약 건수를 보여줍니다!)</span>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button className={styles.cancel_btn} onClick={close}>
            취소
          </button>
          <button className={styles.appoint_btn} onClick={newTestAppointment}>
            확인
          </button>
        </Modal.Footer>
      </Modal>
      ):(
        <Modal show={isOpen} onHide={close} centered="true" className="modal">
        <Modal.Header closeButton>
          <Modal.Title>검사 예약</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div>
            환자와 검사 목록을 선택해주세요.
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button className={styles.appoint_btn} onClick={close}>
            확인
          </button>
        </Modal.Footer>
      </Modal>
      ) 
    ) : null}
    </>
  );
    }

export default AppointmentWithTestModal;