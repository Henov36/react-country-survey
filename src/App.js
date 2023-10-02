import { React, useState } from 'react';
import './App.css';
import CountryCard from './components/countryCard/countryCard';
import { COUNTRY_INFO_API } from './api';
import GSevenTime from './components/worldTime/gSevenTime';
import Header from './components/header';


function App() {

  const [dataSearch, setDataSearch] = useState(null)

  const handleSearchData = (data) => {
    setDataSearch(data)
  }

  const handleOnCountryClick = (clickData) => {
    fetch(
      `${COUNTRY_INFO_API}/name/${clickData}`
    ).then(res => res.json())
      .then(data => {
        setDataSearch(data[0])
      })
  }

  return (
    <div className='app-container'>
      <Header onDataFromSearch={handleSearchData} />
      <div className='flex template'>
        {dataSearch !== null ? <CountryCard data={dataSearch} className='col' /> :
          <div className='start-text'>
            <p>
              Hello! <br />This app was developed specifically for searching information about any country in the world! You can find the language, capital, location on the map and much more about the country what you will want to look for.
            </p>
            <p>
              If this list does not contain the сountry you are interested, use the search at the top of the page.
            </p>
          </div>}
        <GSevenTime countryClickHandle={handleOnCountryClick} />
      </div>
    </div >

  )
}

export default App;
