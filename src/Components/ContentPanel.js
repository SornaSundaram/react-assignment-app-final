import React, { useState, useEffect } from 'react';
import { Layout, Pagination, Col } from 'antd';
import SearchBar from './SearchPanel';
import axios from '../ApiJobData';
import JobResults from './JobResults';

const { Content } = Layout;

const Contentpanel = () => {
	const [ data, setData ] = useState([]);
	const [ pageIndex, setPageIndex ] = useState({ minValue: 1, maxValue: 5, currentValue: 1 });
	const [ filter, setFilter ] = useState({ state: { job_type: null, location: null, query: null } });
	const [ apiUrl, setApiUrl ] = useState({ query: { value: '/' } });
	const [ paginatedData, setPagination ] = useState([]);

	const updateLocation = (locationval) => {
		setFilter((prevObj) => ({
			state: {
				...prevObj.state,
				location: locationval[0]
			}
		}));
	};

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
				const result = await axios.get(apiUrl.query.value);
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
			}, []);

			let queryString = keysListval.reduce(
				(acc, cur) => {
					return acc + cur + '=' + filter.state[cur] + '&';
				},
				[ 'search?' ]
			);

			queryString = String(queryString).substring(0, queryString.length - 1);
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

	const updateKeyword = (keyword) => {
		setFilter((prevObj) => ({
			state: {
				...prevObj.state,
				query: keyword !== '' ? keyword : null
			}
		}));
	};

	const pagination = (page) => {
		page = page || 1;
		let per_page = 5;
		let offset = (page - 1) * per_page;
		let total_pages = Math.ceil(data.length / 5);
		let paginatedItems = data.slice(offset).slice(0, per_page);
		setPageIndex({ minValue: 1, maxValue: total_pages, currentValue: page });
		setPagination(paginatedItems);
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
