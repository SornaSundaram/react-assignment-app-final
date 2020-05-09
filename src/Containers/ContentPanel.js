import React, { useState, useEffect } from 'react';
import { Layout, Pagination, Col } from 'antd';
import axios from '../ApiJobData';
import JobResults from '../Components/JobResults';
import SearchBar from '../Components/SearchPanel'

const { Content } = Layout;

const Contentpanel = () => {
	const [ data, setData ] = useState([]); //api data will be stored here
	const [ pageIndex, setPageIndex ] = useState({ minValue: 1, maxValue: 5, currentValue: 1 }); //it stores page index used in pagination
	const [ filter, setFilter ] = useState({ state: { job_type: null, location: null, query: null } }); //this store the query parameters for filtering
	const [ apiUrl, setApiUrl ] = useState({ query: { value: '/' } }); // this stores api query string for dynamic calling
	const [ paginatedData, setPagination ] = useState([]); // this stores the paginated api data for a page

	//updating the location parameter in filter store
	const updateLocation = (locationval) => {
		setFilter((prevObj) => ({
			state: {
				...prevObj.state,
				location: locationval[0]
			}
		}));
	};

	//updating the job type parameter in filter store
	const updateJobType = (job_typeVal) => {
		setFilter((prevObj) => ({
			state: {
				...prevObj.state,
				job_type: job_typeVal
			}
		}));
	};

	useEffect(
		() => {
			async function fetchData() {
				const result = await axios.get(apiUrl.query.value); //api call request . base url is imported froma apijobdata
				setData(result.data);
			}

			fetchData();

			return () => {
				console.log('componentWillUnmount');
			};
		},
		[ apiUrl ]
	);

	useEffect(
		() => {
			pagination();
		},
		// following way can be improved instead of disabling it -> low level priority for now
		// eslint-disable-next-line react-hooks/exhaustive-deps 
		[ data ]
	);

	useEffect(
		() => {
			let keysListval = Object.keys(filter.state).reduce((val, key) => {
				if (filter.state[key] != null) {
					val.push(key);
				}
				return val;
			}, []); //this returns the parameteres which have been given inputs from the filter, search section . sample output ['job_type', 'location']

			let queryString = keysListval.reduce(
				(acc, cur) => {
					return acc + cur + '=' + filter.state[cur] + '&'; //this generates the api query string from above parameters
				},
				[ 'search?' ]
			);

			queryString = String(queryString).substring(0, queryString.length - 1); //for removing additional '&' sign from last
			console.log(queryString);
			setApiUrl((prevUrl) => ({
				query: {
					...prevUrl.query,
					value: queryString
				}
			}));
		},
		[ filter ]
	);

	// update keyword parameter from search bar
	const updateKeyword = (keyword) => {
		setFilter((prevObj) => ({
			state: {
				...prevObj.state,
				query: keyword !== '' ? keyword : null
			}
		}));
	};

	// this function accepts current page index as input and gives the corresponding paginated items
	const pagination = (page) => {
		page = page || 1;
		let per_page = 5;
		let offset = (page - 1) * per_page;
		let total_pages = Math.ceil(data.length / 5);
		let paginatedItems = data.slice(offset).slice(0, per_page);
		setPageIndex({ minValue: 1, maxValue: total_pages, currentValue: page });
		setPagination(paginatedItems);
		console.log(paginatedItems);
	};

	return (
		<Content>
			<div className="container">
				<SearchBar updateKeyword={updateKeyword} />
			</div>
			<div className="container">
				<JobResults
					updateJobType={updateJobType}
					updateLocation={updateLocation}
					filterObject={filter}
					total={data.length}
					jobdata={paginatedData}
				/>
			</div>

			<Col span={13} offset={5}>
				<Pagination
					defaultCurrent={1}
					current={pageIndex.currentValue}
					defaultpageSize={data.length % 5}
					total={data.length / 5 * 10}
					onChange={pagination}
				/>
			</Col>
		</Content>
	);
};

export default Contentpanel;
