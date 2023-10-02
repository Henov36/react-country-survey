import { DateTime } from "luxon";
import { useEffect, useState } from "react";

const CountriesTime = ({ value }) => {

	const [time, setTime] = useState()

	useEffect(() => {
		const currentTime = () => {
			const now = DateTime.now().setZone(value)
			const formatTime = now.toFormat('HH:mm:ss')
			setTime(formatTime)
		};
		const timer = setInterval(currentTime, 1000)
		return () => {
			clearTimeout(timer)
		}
	}, [value])

	return (
		<div>
			{time}
		</div>
	)
}

export default CountriesTime