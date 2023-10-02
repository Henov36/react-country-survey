import './gSevenTime.css'
import CountriesTime from '../countryCard/countriesTimer';


const gSevenCountries = [
	{
		name: 'Washington',
		country: 'United States of America',
		id: 0,
		region: 'America/New_York',
		svg: "https://flagcdn.com/us.svg",

	},
	{
		name: 'Ottawa',
		country: 'Canada',
		id: 1,
		region: 'America/Montreal',
		svg: "https://flagcdn.com/ca.svg",
	},
	{
		name: 'London',
		country: 'United Kingdom',
		id: 2,
		region: 'Europe/London',
		svg: "https://flagcdn.com/gb.svg",
	},
	{
		name: 'Paris',
		country: 'France',
		id: 3,
		region: 'Europe/Paris',
		svg: "https://flagcdn.com/fr.svg",
	},
	{
		name: 'Rome',
		country: 'Italy',
		id: 4,
		region: 'Europe/Rome',
		svg: "https://flagcdn.com/it.svg",
	},
	{
		name: 'Berlin',
		country: 'Germany',
		id: 5,
		region: 'Europe/Berlin',
		svg: "https://flagcdn.com/de.svg",
	},
	{
		name: 'Tokyo',
		country: 'Japan',
		id: 6,
		region: 'Asia/Tokyo',
		svg: "https://flagcdn.com/jp.svg",
	},
	{
		name: 'Kyiv',
		country: 'Ukraine',
		id: 7,
		region: 'Europe/Kyiv',
		svg: "https://flagcdn.com/ua.svg",
	},
	{
		name: 'Lisbon',
		country: 'Portugal',
		id: 8,
		region: 'Europe/Lisbon',
		svg: "https://flagcdn.com/pt.svg",
	},
	{
		name: 'Oslo',
		country: 'Norway',
		id: 9,
		region: 'Europe/Oslo',
		svg: "https://flagcdn.com/no.svg",
	},
	{
		name: 'Canberra',
		country: 'Australia',
		id: 10,
		region: 'Australia/Canberra',
		svg: "https://flagcdn.com/au.svg",
	},
	{
		name: 'Ankara',
		country: 'Turkey',
		id: 11,
		region: 'Europe/Istanbul',
		svg: "https://flagcdn.com/tr.svg",
	},


]

const GSevenTime = ({ countryClickHandle }) => {

	const enterCountry = (clickData) => {
		let correctCountryName;

		if (clickData.target.classList.length === 3) {
			correctCountryName = 'United Kingdom'
		} else if (clickData.target.classList.length === 5) {
			correctCountryName = 'United States of America'
		} else {
			correctCountryName = clickData.target.classList[1]
		}

		console.log(clickData.target.classList);
		countryClickHandle(correctCountryName)
	}

	return (
		<div className='g-seven'>
			<div className='g-seven-title'>
				<h1>World Clock</h1>
			</div>
			<div className='g-seven-countries'>
				{gSevenCountries.map((item) => (
					<div key={item.id} className={`country-row ${item.country}`} onClick={enterCountry}>
						<div className='name-and-flag'>
							<img src={item.svg} alt='wrong'>
							</img>
							<div className='country-row-name'>
								{item.name}
							</div>
						</div>
						<div className='time'>
							<CountriesTime value={item.region} />
						</div>
					</div>
				))}
			</div>
		</div>

	)
}

export default GSevenTime;