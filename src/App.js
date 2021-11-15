import './App.css';
import Topbar from './components/Topbar'
import Sidebar from './components/Sidebar'
import Home from './components/pages/home/Homepage'

function App() {
  return (
    <div>
     <Topbar/>
     <div className="container">
     <Sidebar/>
      <Home/>
     </div>
    </div>
  );
}

export default App;
