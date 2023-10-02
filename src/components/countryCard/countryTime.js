import './countryTime.css'

import { useEffect, useState } from "react";
import { DateTime } from 'luxon';

const CountryTime = ({ data }) => {

	const [time, setTime] = useState(null)


	let region;

	if (data.region === 'Americas') {
		region = 'America'
	} else {
		region = data.region
	}

	let capitalCity;
	if (data.capital[0] === "Washington, D.C.") {
		capitalCity = 'New_York'
	} else if (data.capital[0] === "Ottawa") {
		capitalCity = 'Montreal'
	} else if (data.capital[0] === "Tirana") {
		capitalCity = 'Warsaw'
	} else if (data.capital[0] === "Andorra la Vella") {
		capitalCity = 'Paris'
	} else if (data.capital[0] === "Bandar Seri Begawan") {
		capitalCity = 'Kuching'
	} else if (data.capital[0] === "Saint John's") {
		capitalCity = 'Dominica'
	} else if (data.capital[0] === "Abu Dhabi") {
		capitalCity = 'Dubai'
	} else if (data.capital[0] === "Yaoundé") {
		capitalCity = 'Douala'
	} else if (data.capital[0] === "Pretoria") {
		capitalCity = 'Johannesburg'
	} else if (data.capital[0] === "Guatemala City") {
		capitalCity = 'Guatemala'
	} else if (data.capital[0] === "Quito") {
		capitalCity = 'Guatemala'
	} else if (data.capital[0] === "Canberra") {
		region = 'Australia'
		capitalCity = 'Canberra'
	} else if (data.capital[0] === "Ankara") {
		region = 'Europe'
		capitalCity = 'Istanbul'
	} else if (data.capital[0] === "Kingston") {
		capitalCity = 'Jamaica'
	} else if (data.capital[0] === "Brasília") {
		capitalCity = 'Sao Paulo'
	} else if (data.capital[0] === "Vatican City") {
		capitalCity = 'Rome'
	} else if (data.capital[0] === "New Delhi") {
		capitalCity = 'Kolkata'
	} else if (data.capital[0] === "Beijing") {
		capitalCity = 'Shanghai'
	} else if (data.capital[0] === "Wellington") {
		region = 'Pacific'
		capitalCity = 'Auckland'
	} else {
		capitalCity = data.capital[0]
	}

	const underslashCapital = capitalCity.replace(/\s+/, "_");



	useEffect(() => {
		const currentTime = () => {
			const now = DateTime.now().setZone(`${region}/${underslashCapital}`)
			const formatTime = now.toFormat('HH:mm:ss')
			let invalid;
			if (formatTime === 'Invalid DateTime') {
				invalid = '';
				setTime(invalid)
			} else {
				setTime(formatTime)
			}

		}
		const timer = setInterval(currentTime, 1000)
		return () => {
			clearTimeout(timer)
		}

	}, [region, underslashCapital])



	return (
		<div className="country-time">
			{time}
		</div>
	)
}


export default CountryTime;