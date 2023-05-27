import './App.scss';
import Header from './components/header/Header';
import DroneImage from './components/header/drone-spraying-section/DroneImage';
import DroneSprayingSection from './components/header/drone-spraying-section/DroneSprayingSection';
import Main from './components/main/Main';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      {/* <AppDescription/>
      <div className='caja'></div> */}
      
      {/* <div className='caja'></div>
      <div className='caja2'></div> */}
      {/* <button className='btn-primary'>Choose a drone</button>
      <div className='separator'></div>
      <button className='btn-secondary' >Buy now</button>
      <div className='separator'></div>
      <input type="radio" className='radio-checkbox-btn'/>
      <div className='separator'></div>
      <input type="checkbox" className='radio-checkbox-btn'/>
      <div className='separator'></div>
      <CustomSelect/> */}
    </div>
  );
}

export default App;
