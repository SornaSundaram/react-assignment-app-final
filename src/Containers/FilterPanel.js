import React, { useState, useEffect } from 'react';
import { Select, Checkbox, Slider, InputNumber } from 'antd';
import Icon from '@ant-design/icons';

const FilterPanel = (props) => {
	const [ filterValue, setFilterValue ] = useState(props.filterObject.state); //props from content panel gets tored here
	const [ payRate, setPayRate ] = useState({state: { minValue: 40, maxValue: 70 }}); //state for payrate

	useEffect(
		() => {
			setFilterValue(props.filterObject.state);
		},
		[ props ]
	);

	const onLocationsChange = (loc) => {
		props.updateLocation(loc);
	};

	const onJobTypeChange = (type) => {
		props.updateJobType(type);
	};

	const clearJobType = () => {
		props.updateJobType(null);
	};

	const clearLocation = () => {
		props.updateLocation(null);
	};

	const changeMinPayRate = (minVal) => {
		setPayRate((prevUrl) => ({
			state: {
				...prevUrl.state,
				minValue: minVal
			}
		}));
	};

	const changeMaxPayRate = (maxVal) => {
		setPayRate((prevUrl) => ({
			state: {
				...prevUrl.state,
				maxValue: maxVal
			}
		}));
	};

	const Option = Select.Option;

	const locationsList = [];
	[
		'California',
		'Chennai',
		'Dallas',
		'Bangalore',
		'New York',
		'Texas',
		'Hyderabad',
		'Philliphines',
		'Singapore'
	].map((loc) => {
		locationsList.push(<Option key={loc}>{loc}</Option>);
		return locationsList;
	});

	const skillsList = [];
	[
		'npm',
		'react',
		'webpack',
		'html',
		'js.css',
		'java',
		'spring',
		'kafka',
		'hadoop',
		'spark',
		'scala',
		'oracle',
		'mysql',
		'nginx'
	].map((skill) => {
		skillsList.push(<Option key={skill}>{skill}</Option>);
		return skillsList;
	});

	return (
		<div className="filters-sidebar">
			<div>
				<h5 className="section-subtitle from-sidebar">
					<span className="pull-left">FILTERS</span>
					<a href="/" className="clear-link">
						Clear all filters
					</a>
				</h5>
			</div>
			<div className="form-group">
				<div>
					<label className="label">
						<span className="labelName">Skills</span>
						<span className="clear-link clearAction">Clear</span>
					</label>
				</div>
				<div>
					<Select
						mode="multiple"
						size={'large'}
						placeholder="Please select"
						defaultValue={[]}
						style={{ width: '100%' }}
					>
						{skillsList}
					</Select>
				</div>
			</div>
			<div className="form-group">
				<div>
					<label className="label ">
						<span className="labelName">
							Availabilty <Icon type="exclamation-circle" />
						</span>
						<span className="clear-link clearAction">Clear</span>
					</label>
				</div>
				<div>
					<div style={{ float: 'left' }}>
						<Checkbox>Hourly</Checkbox>
					</div>
					<div style={{ float: 'left' }}>
						<Checkbox>Part-time(20 hrs/wk)</Checkbox>
					</div>
					<div style={{ float: 'left' }}>
						<Checkbox>Full-time(40 hrs/wk)</Checkbox>
					</div>
				</div>
			</div>
			<div className="form-group">
				<div>
					<label className="label ">
						<span className="labelName">
							Job type <Icon type="exclamation-circle" />
						</span>
						<span className="clear-link clearAction" onClick={clearJobType}>
							Clear
						</span>
					</label>
				</div>
				<div>
					<Select
						style={{ width: '220px' }}
						defaultValue={filterValue.job_Type}
						placeholder="Select a Job Type"
						onChange={onJobTypeChange}
					>
						<Option key="Full Time" value="Full Time">
							Full Time
						</Option>
						<Option key="Part Time" value="Part Time">
							Part Time
						</Option>
						<Option key="Hourly" value="Hourly">
							Hourly
						</Option>
					</Select>
				</div>
			</div>
			<div className="form-group">
				<div>
					<label className="label">
						<span className="labelName">Pay rate/hr($)</span>
						<span className="clear-link clearAction">Clear</span>
					</label>
				</div>
				<div className="payRateInputBoxes">
					<InputNumber min={1} max={100} value={payRate.state.minValue} className="minInputBox" onChange = {changeMinPayRate} />
					<span>-</span>
					<InputNumber min={1} max={100} value={payRate.state.maxValue} className="maxInputBox" onChange = {changeMaxPayRate} />
				</div>
				<div>
					<Slider min={1} max={100} range defaultValue={[ payRate.state.minValue, payRate.state.maxValue ]} value = {[ payRate.state.minValue, payRate.state.maxValue ]} />
				</div>
				<div style={{ position: 'relative' }}>
					<div style={{ position: 'absolute', left: '7px', fontWeight: '500' }}>1</div>
					<div style={{ float: 'right', fontWeight: '500' }}>100</div>
				</div>
				<div style={{ float: 'left' }}>
					<Checkbox className="slideText">Include profiles without pay rates</Checkbox>
				</div>
			</div>
			<div className="form-group">
				<div>
					<label className="label">
						<span className="labelName">Experience level</span>
						<span className="clear-link clearAction">Clear</span>
					</label>
				</div>
				<div>
					<Select style={{ width: '220px' }} defaultValue="" placeholder="Select Your Experience Level">
						<Option key="Junior" value="0 - 3 years">
							0 - 3 years
						</Option>
						<Option key="Senior" value="3 - 6 years">
							3 - 6 years
						</Option>
						<Option key="Lead" value="More than 6 Years">
							More than 6 Years
						</Option>
					</Select>
				</div>
			</div>
			<div className="form-group">
				<div>
					<label className="label">
						<span className="labelName">Countries</span>
						<span className="clear-link clearAction" onClick={clearLocation}>
							Clear
						</span>
					</label>
				</div>
				<div>
					<Select
						onChange={onLocationsChange}
						mode="multiple"
						size={'large'}
						placeholder="Enter state,province or country"
						style={{ width: '100%' }}
					>
						{locationsList}
					</Select>
				</div>
			</div>
			<div className="form-group">
				<div>
					<label className="label">
						<span className="labelName">Languages</span>
						<span className="clear-link clearAction">Clear</span>
					</label>
				</div>
				<div>
					<Select mode="multiple" size={'large'} defaultValue={[]} style={{ width: '100%' }}>
						{skillsList}
					</Select>
				</div>
			</div>
		</div>
	);
};

export default FilterPanel;
