import logo from './logo.svg';
import './App.scss';

import CustomSelect from './components/customSelect/CustomSelect';

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <div className="main-color"></div>
        <div className="light-grayish-blue"></div>
        <div className="secondary-color"></div>
      </div>
      <button className='btn-primary'>Choose a drone</button>
      <div className='separator'></div>
      <button className='btn-secondary' >Buy now</button>
      <div className='separator'></div>
      <input type="radio" className='radio-checkbox-btn'/>
      <div className='separator'></div>
      <input type="checkbox" className='radio-checkbox-btn'/>
      <div className='separator'></div>
      <CustomSelect/>
    </div>
  );
}

export default App;
