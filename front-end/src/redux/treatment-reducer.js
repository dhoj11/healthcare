const initialState = {
  work: "",
  patient: "",
  treatment: "",
  curRecord:"",
  curComment:"",
  curDiagnoses:{},
  curPrescriptions:{},
  curTests:{},
  
  listState:"all",
  editBlock:true
}

const SET_WORK = "work/SetWork";                // 진료기록 -> 검사결과 or 검사결과 -> 진료기록 탭 할 때마다 현재 선택된 환자의 진료/검사내용을 각각 컴포넌트에 뿌려주어야함
const SET_PATIENT = "patient/SetPatient";
const SET_TREATMENT = "treatment/SetTreatment";
const SET_CURRECORD = "record/SetCurRecord";
const SET_CURCOMMENT ="record/SetCurComment";
const SET_CURDIAGNOSES ="record/SetCurDiagnoses";
const SET_CURPRESCRIPTIONS ="record/SetCurPrescriptions";
const SET_CURPTESTS ="record/SetCurTests";
const SET_LISTSTATE ="treatment/SetListState";
const SET_EDITBLOCK ="treatment/SetEditBlock";

export const createSetWorkActoin = (work) => {
  return {type:SET_WORK, work};
};

export const createSetPatientAction = (patient) => {
  return {type:SET_PATIENT, patient};
};

export const createSetTreatmentAction = (treatment) => {
  return {type:SET_TREATMENT, treatment};
};

export const createSetCurRecordActoin = (curRecord) => {
  return {type:SET_CURRECORD, curRecord};
};

export const createSetCurCommentActoin = (curComment) => {
  return {type:SET_CURCOMMENT, curComment};
};

export const createSetCurDiagnosesActoin = (curDiagnoses) => {
  return {type:SET_CURDIAGNOSES, curDiagnoses};
};

export const createSetCurPrescriptionsActoin = (curPrescriptions) => {
  return {type:SET_CURPRESCRIPTIONS, curPrescriptions};
};

export const createSetCurTestsActoin = (curTests) => {
  return {type:SET_CURPTESTS, curTests};
};

export const createSetListStateActoin = (listState) => {
  return {type:SET_LISTSTATE, listState};
};

export const createSetEditBlockActoin = (editBlock) => {
  return {type:SET_EDITBLOCK, editBlock};
};

export const treatmentReducer = (state=initialState, action) => {

  switch (action.type){
    case SET_WORK :
      return {...state, work: action.work};
    case SET_PATIENT :
      return {...state, patient: action.patient};
    case SET_TREATMENT :
      return {...state, treatment: action.treatment};
    case SET_CURRECORD :
      return {...state, curRecord: action.curRecord};
    case SET_CURCOMMENT :
      return {...state, curComment: action.curComment}
    case SET_CURDIAGNOSES :
      return {...state, curDiagnoses: action.curDiagnoses}
    case SET_CURPRESCRIPTIONS :
      return {...state, curPrescriptions: action.curPrescriptions}       
    case SET_CURPTESTS :
      return {...state, curTests: action.curTests}  
    case SET_LISTSTATE :
        return {...state, listState: action.listState}        
    case SET_EDITBLOCK :
      return { ...state, editBlock: action.editBlock}   
    default :
      return state;
  }

};

export default treatmentReducer;