import React, {useState, useEffect} from 'react';
import { Menu, Col, Select, Checkbox, Dropdown, Button, Slider, InputNumber } from 'antd';
import Icon from '@ant-design/icons';

const FilterPanel = (props) => {

    const [filterValue, setFilterValue] = useState(props.filterObject.state);
    console.log('loading');
    console.log(props);
    const menu = (
        <Menu>
            <Menu.Item key="full-time">
            Three years
            </Menu.Item>
            <Menu.Item key="part-time">
                Part Time
            </Menu.Item>
            <Menu.Item key="hourly">Hourly</Menu.Item>
        </Menu>
    );

    

    useEffect(() => {
        console.log('filtering');
        console.log(props.filterObject.state);
        setFilterValue(props.filterObject.state);
        
    }, [props]);

    const onLocationsChange = (loc) => {
        console.log('working');
        props.updateLocation(loc);
    }

    const onJobTypeChange = (type) => {
        console.log('jobchanged');
        
        props.updateJobType(type);
    }

    const clearJobType = () => {
        props.updateJobType(null);        
    }

    const clearLocation = () => {
        props.updateLocation(null);
    }

    const Option = Select.Option;

        const locationsList= [];
        ['California', 'Chennai', 'Dallas', 'Bangalore', 'New York', 'Texas', 'Hyderabad', 'Philliphines', 'Singapore'].map((skill) => {
            locationsList.push(<Option key={skill}>{skill}</Option>);
        });;

        const skillsList = [];
        ['npm','react','webpack','html','js.css','java','spring','kafka','hadoop','spark','scala','oracle','mysql','nginx'].map((skill) => {
            skillsList.push(<Option key={skill}>{skill}</Option>);
        });;;

        const job_TypeDefaultValue = filterValue.job_Type === null ? '' : filterValue.job_Type;
        

        return (

            <div className="filters-sidebar">
                    <div>
                        <h5 className='section-subtitle from-sidebar'><span className="pull-left">FILTERS</span><a href="/" className="clear-link">Clear all filters</a></h5>
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
                                size={"large"}
                                placeholder="Please select"
                                defaultValue={[]}
                                style={{ width: '100%' }}>
                                {skillsList.map(skill => <Option key={skill}></Option>)}
                            </Select>
                        </div>
                    </div>
                    <div className="form-group">
                        <div>
                            <label className="label ">
                                <span className="labelName">Availabilty <Icon type="exclamation-circle" /></span>
                                <span className="clear-link clearAction">Clear</span>
                            </label>
                        </div>
                        <div>
                            <div style={{ float: 'left' }}><Checkbox >Hourly</Checkbox></div>
                            <div style={{ float: 'left' }}><Checkbox >Part-time(20 hrs/wk)</Checkbox></div>
                            <div style={{ float: 'left' }}><Checkbox >Full-time(40 hrs/wk)</Checkbox></div>
                        </div>
                    </div>
                    <div className="form-group">
                        <div>
                            <label className="label ">
                                <span className="labelName">Job type <Icon type="exclamation-circle" /></span>
                                <span className="clear-link clearAction" onClick = {clearJobType}>Clear</span>
                            </label>
                        </div>
                        <div>
                            {/* <Dropdown overlay={menu} trigger={['click']} onChange = {onJobTypeChange}>
                                <Button>
                                    Select a Job Type <Icon type="down" />
                                </Button>
                            </Dropdown> */}
                            <Select
                             style = {{width: '220px'}}
                             defaultValue = ''
                             placeholder="Select your Experience level"
                             onChange = {onJobTypeChange}
                            >
                                <Option key= "Full Time" value = "Full Time">Full Time</Option>
                                <Option key = "Part Time" value = "Part Time">Part Time</Option>
                                <Option key = "Hourly" value = "Hourly">Hourly</Option>
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
                        <div className= "payRateInputBoxes"><InputNumber
                            min={1}
                            max={100}
                            className="minInputBox"
                           
                           
                        /> <span>-</span>
                            <InputNumber
                                min={1}
                                max={100}
                                
                                
                            /></div>
                        <div>
                            <Slider
                                min={1}
                                max={100}
                                className="maxInputBox"
                                
                               
                                
                            />
                        </div>
                        <div style={{ position: 'relative' }}>
                            <div style={{ position: 'absolute', left: '7px', fontWeight: '500' }}>1</div>
                            <div style={{ float: 'right', fontWeight: '500' }}>100</div>
                        </div>
                        <div style={{ float: 'left' }}><Checkbox className="slideText">Include profiles without pay rates</Checkbox></div>
                    </div>
                    <div className="form-group">
                        <div>
                            <label className="label">
                                <span className="labelName">Experience level</span>
                                <span className="clear-link clearAction">Clear</span>
                            </label>
                        </div>
                        <div>
                            <Dropdown overlay={menu} trigger={['click']}>
                                <Button>
                                    Select your Experience level <Icon type="down" />
                                </Button>
                            </Dropdown>
                            
                        </div>
                    </div>
                    <div className="form-group">
                        <div>
                            <label className="label">
                                <span className="labelName">Countries</span>
                                <span className="clear-link clearAction" onClick={clearLocation}>Clear</span>
                            </label>
                        </div>
                        <div>
                            <Select
                                
                                onChange = {onLocationsChange}
                                mode="multiple"
                                size={"large"}
                                placeholder="Enter state,province or country"
                                
                                style={{ width: '100%' }}>
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
                            <Select
                                mode="multiple"
                                size={"large"}
                                defaultValue={[]}
                                style={{ width: '100%' }}>
                                {skillsList}
                            </Select>
                        </div>
                    </div>
            </div>
        );
};

export default FilterPanel;