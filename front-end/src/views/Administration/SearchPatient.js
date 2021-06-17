import "./SearchPatient.css";

function SearchPatient(props) {
  return (
    <div className="search-patient">
      <div className="search-first-content row">
        <div className="search-second-content">
          <div className="col-3"><p className="search-text ">환자검색</p></div>
          <div className="input-group col-7">
            <input type="text" className="form-control" placeholder="patient name" />
            <div>
              <button className="btn btn-outline-secondary">Button</button>
            </div>
          </div>
          <div className="search-button col-2">
            <button className="btn btn-outline-secondary">button</button>
          </div>
        </div>
      </div>
      <div >
        <table></table>
      </div>
    </div>
  );
}

export default SearchPatient;