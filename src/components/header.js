import { COUNTRY_INFO_API } from '../api';
import Search from './search';
import './header.css'
import DarkMode from './darkMode';

const Header = ({ onDataFromSearch }) => {



	const handleOnSearchChange = (searchData) => {
		const countryCode = searchData.value

		fetch(`${COUNTRY_INFO_API}/alpha/${countryCode}`)
			.then(res => res.json())
			.then(data => {
				onDataFromSearch(data[0])
			})
	}

	return (
		<header className='header'>
			<Search onSearchChange={handleOnSearchChange}/>
			<div className='header-options'>
				<DarkMode />
			</div>
		</header>
	)
}

export default Header;