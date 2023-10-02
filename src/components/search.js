import './search.css'
import { AsyncPaginate } from "react-select-async-paginate";
import { useState } from 'react';
import { GEO_API, GEO_API_OPTIONS } from "../api";




const Search = ({ onSearchChange }) => {

	const [search, setSearch] = useState(null)

	async function loadOptions(inputValue) {

		const response = await fetch(`${GEO_API}/countries?namePrefix=${inputValue}&namePrefixDefaultLangResults=true`, GEO_API_OPTIONS);
		const responseJSON = await response.json();
		return {
			options: responseJSON.data.map((count) => {
				return {
					value: count.code,
					label: `${count.name}`
				}
			})
		}
	}

	const handleOnChange = (searchData) => {
		setSearch(searchData);
		onSearchChange(searchData)
	}


	return (
		<div className='search-container'>
			<AsyncPaginate
				placeholder='Search the country'
				debounceTimeout={1000}
				value={search}
				onChange={handleOnChange}
				loadOptions={loadOptions}
			/>
		</div>

	)

}
export default Search;