import './darkMode.css'


const DarkMode = () => {
	const setDarkTheme = () => {
		document.body.setAttribute('data-theme', 'dark')
	}
	const setLightTheme = () => {
		document.body.setAttribute('data-theme', 'light')
	}

	const toggleTheme = (e) => {
		e.target.checked ? setDarkTheme() : setLightTheme()
	}



	return (
		<div>
			<input type="checkbox" className="checkbox" id='checkbox' onChange={toggleTheme} />
			<label className="label" htmlFor='checkbox'>
				<img src='/src/icons/modsIcons/sun.png' alt='#'></img>
				<img src='/src/icons/modsIcons/moon.png' alt='#'></img>
				<div className="point">
				</div>
			</label>
		</div>
	)

}
export default DarkMode;