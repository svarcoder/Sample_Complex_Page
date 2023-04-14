import "./Style.css";

const SearchBar = () => {
	return (
		<div className='search_wrap'>
			<input type='text' placeholder='Search...' />
			<i className='bi bi-search search__icon' />
		</div>
	);
};

export default SearchBar;
