import './App.css';
import './reset.css';
import AppMenu from "./AppMenu";
import AppRoute from "./AppRoute";

function App() {
  return (
    <div className="main">
        <div className="sidebar">
          <AppMenu/>
        </div>
        <div className="content item">
          <AppRoute/>
        </div>
    </div>
  );
}

export default App;
