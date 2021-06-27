import './App.css';
import './reset.css';
import AppMenu from "./AppMenu";
import AppRoute from "./AppRoute";
import AppHeader from './AppHeader';

function App() {
  return (
    <div className="main">
        <div className="header">
          <AppHeader/>
        </div>
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
