import { useEffect, useState } from 'react'
import CurrentWeather from './components/CurrentWeather'
import NavBar from './components/NavBar';
import Search from './components/Search';
import "./style.css"

function App() {

  const [city, setCity] = useState('Goiânia');
  const [cityData,setCityData] = useState({})

  console.log(cityData);

  async function getCityData() {
    const response = await fetch(`http://localhost:1000/city/${city}`);
    const dataCity = await response.json();
    setCityData(dataCity);
  }

  useEffect(()=>{
    getCityData()
  },[city])


  function handleChange(ev) {
    const { value } = ev.target;
    setCity(value);
  }

  return (
    <div className='container'>
      <NavBar />
      <div className='main-container'>
      <Search handleChange = {handleChange} city={city}/>
      {cityData.main ? <CurrentWeather cityData={cityData} /> : ""}
      </div>
      
    </div>

  )
}

export default App
