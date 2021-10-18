import './App.css';
import FLogin from './Components/FLogin';
import Login from './Components/Login';

function App() {
  return (
    <div className="App">
      <div className="g-signin">
        <Login />
        <FLogin />
      </div>
    </div>
  );
}

export default App;
