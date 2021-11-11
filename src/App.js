import './App.css';
import Topbar from './components/Topbar'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div>
     <Topbar/>
     <div className="container">
     <Sidebar/>
      <div className="others"><b>Overview</b></div>
     </div>
    </div>
  );
}

export default App;
