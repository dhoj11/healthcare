import Error403 from "./Error403";
import Error404 from "./Error404";

function Error(props){
  return(
    <div className="error">
      <Error403/>
      {/* <Error404/> */}
    </div>
  );
}

export default Error;