import React, { useState, useEffect} from 'react';
import { Layout, Pagination, Col } from 'antd';
import SearchBar from './SearchPanel';
import axios from '../ApiJobData';
import JobResults from './JobResults';

const { Content } = Layout;

const Contentpanel = () => {
	console.log('data loading');
	const [ data, setData ] = useState([]);
	const [ pageIndex, setPageIndex ] = useState({ minValue: 0, maxValue: 5, currentValue: 1 });
	const [ filter, setFilter ] = useState({ state: { job_type: null, location: null, query: null } });
	const [ apiUrl, setApiUrl ] = useState({ query: { value: '/' } });

	const updateLocation = (locationval) => {
		console.log('reached');

		// queryObject.location = locationval[0];
		console.log(filter);
		setFilter((prevObj) => ({
			state: {
				...prevObj.state,
				location: locationval[0]
			}
		}));
		console.log(filter.state.location);

		console.log('called');
		console.log(apiUrl);
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
			console.log('dataeffect');
			console.log(apiUrl);
			async function fetchData() {
				const result = await axios(apiUrl.query.value);
				console.log(result.data);
				setData(result.data);
			}

			fetchData();
		},
		[ apiUrl ]
	);

	useEffect(
		() => {
			console.log('urleffect');

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

			console.log(typeof queryString);
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

	const onIndexChange = (index) => {
		console.log(index);
		if (index <= 1) {
			setPageIndex({ minValue: 0, maxValue: 5, currentValue: 1 });
		} else {
			console.log(index);
			setPageIndex({ minValue: pageIndex.maxValue, maxValue: pageIndex.maxValue + 5, currentValue: index });
		}
	};

	const updateKeyword = (keyword) => {
		console.log('keyword', keyword);
		setFilter((prevObj) => ({
			state: {
				...prevObj.state,
				query: keyword
			}
		}));
	};

	console.log(data);

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
					jobdata={data.length > 0 ? data.slice(pageIndex.minValue, pageIndex.maxValue) : data}
				/>
			</div>

			<Col span={13} offset={5}>
				<Pagination
					defaultCurrent={1}
					current={pageIndex.currentValue}
					defaultpageSize={data.length % 5}
					total={data.length / 5 * 10}
					onChange={onIndexChange}
				/>
			</Col>
		</Content>
	);
};

export default Contentpanel;
