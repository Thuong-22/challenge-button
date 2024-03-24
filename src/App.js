import logo from './logo.svg';
import './App.css';
import SlideBar from './components/Slidebar';
import MyButton from './components/Button';
import GroupButtons from './components/GroupButtons'; 


 

 function App() {
  return (
    <div className="App">
      <SlideBar/>
      <div className='main'>
        <h1>Buttons</h1>
        <GroupButtons/>
      </div>
    </div>
  );
}

export default App;
