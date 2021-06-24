import './App.css';
import './reset.css';
import AppMenu from "./AppMenu";
import AppRoute from "./AppRoute";

function App() {
  return (
    <div className="main">
        <div className="header"></div>
        <div className="body">
          <div className="sidebar">
            <AppMenu/>
          </div>
          <div className="content">
            <AppRoute/>
          </div>
        </div>    
        
    </div>
  );
}

export default App;
