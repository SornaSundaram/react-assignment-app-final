import React from 'react';
import { Input } from 'antd';

const Search = Input.Search;

const searchbar = (props) => {
	return (
		<div style={{ width: '100%', marginTop: '20px' }}>
			<Search
				placeholder="Search by keywords(PHP,.NET,graphic design,etc.)"
				enterButton="Search"
				size="large"
				onSearch={(value) => props.updateKeyword(value)}
				className="searchBar"
			/>
		</div>
	);
};

export default searchbar;
