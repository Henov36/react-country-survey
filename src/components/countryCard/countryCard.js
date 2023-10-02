import './countryCard.css'
import { WEATHER_API_KEY, WEATHER_API_URL } from '../../api';
import Map from '../Map/map';
import { useJsApiLoader } from '@react-google-maps/api';
import CountryTime from './countryTime';
import { useEffect, useState } from 'react';


const apiKey = process.env.REACT_APP_API_KEY;


console.log(apiKey);

const CountryCard = ({ data }) => {

	const [curentWeather, setCurentWeather] = useState(null)

	const [lat, lon] = data.capitalInfo.latlng


	//weather fetch
	useEffect(() => {
		fetch(
			`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&units=metric&appid=${WEATHER_API_KEY}`
		).then(res => res.json())
			.then(weather => {
				setCurentWeather(weather)
			})
	}, [lat, lon])


	const language = () => {
		for (const keys in data.languages) {
			const value = data.languages[keys]
			return value
		}
	}

	const currency = () => {
		for (const key in data.currencies) {
			const currenciesValue = data.currencies[key]
			return currenciesValue
		}
	}
	const countryCerrencyCode = currency();
	const currencyName = countryCerrencyCode.name


	//google map
	const { isLoaded } = useJsApiLoader({
		id: 'google-map-script',
		googleMapsApiKey: apiKey
	})


	const defaultCenter = {
		lat: data.latlng[0],
		lng: data.latlng[1]
	};

	return (
		<div className='country-card'>
			<div className='country-card__header'>
				<div className='country-region'>
					<div className='country-name'>
						{data.name.common}
					</div>
					<div className='country-continents'>
						{data.subregion}
					</div>
				</div>
				<div className='country-symbols'>
					<div className='country-flag'>
						<img src={data.flags.svg} alt='something wrong' />
					</div>
					<div className='country-coat'>
						<img src={data.coatOfArms.svg} alt='something wrong' />
					</div>
				</div>

				<CountryTime data={data} />
			</div>
			{curentWeather &&
				<div className='weather-container'>
					<div className='weather-icon'>
						<img alt='WR' src={`icons/${curentWeather.weather[0].icon}.png`}></img>
					</div>
					<div className='weather-flex'>
						<div className='weather-temp weather-description'>
							<p>Temp:</p>
							{Math.trunc(curentWeather.main.temp)}°C
						</div>
						<div className='weather-pres weather-description'>
							<p>Pressure:</p>
							{String((curentWeather.main.pressure) * 750).slice(0, -3)} mmHg
						</div>
						<div className='weather-pres weather-description'>
							<p>Humidity:</p>
							{curentWeather.main.humidity} %
						</div>

						<div className='weather-wind weather-description'>
							<p>Wind Speed:</p>
							{curentWeather.wind.speed} m/s
						</div>
					</div>

				</div>
			}
			<div className='country-card__main'>
				<div className='left-side'>
					<div className='country-capital country-description'>
						<h2>Capital:</h2>
						{data.capital[0]}
					</div>
					<div className='country-language country-description'>
						<h2>
							Language:
						</h2>
						{language()}
					</div>
					<div className='country-carrency country-description'>
						<h2>
							Currency:
						</h2>
						<div>
							{currencyName}
						</div>

					</div>
					<div className='country-population country-description'>
						<h2>
							Population:
						</h2>
						{(data.population)} pls
					</div>
					<div className='country-area country-description'>
						<h2>
							Area:
						</h2>
						{(data.area)} km2
					</div>
					<div className='country-phone country-description'>
						<h2>
							Phone code:
						</h2>
						{data.idd.root}{data.idd.suffixes[0]}
					</div>
					<div className='country-start-day country-description'>
						<h2>
							Start the week:
						</h2>
						{(data.startOfWeek).charAt(0).toUpperCase() + (data.startOfWeek).slice(1)}
					</div>
					<div className='country-drive-side country-description'>
						<h2>
							Drive side:
						</h2>
						{(data.car.side).charAt(0).toUpperCase() + (data.car.side).slice(1)}
					</div>
				</div>
				<div className='right-side'>
					<div className='map'>
						{isLoaded && <Map center={defaultCenter}></Map>}
					</div>
				</div>
			</div>



		</div>
	)
}

export default CountryCard;
