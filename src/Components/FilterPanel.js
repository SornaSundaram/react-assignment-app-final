import React from 'react';
import { Menu, Col, Select, Checkbox, Dropdown, Button, Slider, InputNumber } from 'antd';
import Icon from '@ant-design/icons';

const filterPanel = () => {

    const menu = (
        <Menu>
            <Menu.Item key="full-time">
                <a href="/">Full Time</a>
            </Menu.Item>
            <Menu.Item key="part-time">
                <a href="/">Part Time</a>
            </Menu.Item>
            <Menu.Item key="hourly">Hourly</Menu.Item>
        </Menu>
    );

    const Option = Select.Option;

        const children = [];
        ['npm','react','webpack','html','js.css','java','spring','kafka','hadoop','spark','scala','oracle','mysql','nginx'].map((skill) => {
            children.push(<Option key={skill}>{skill}</Option>);
        });

        return (

            <div>
                <div className="filters-sidebar">
                    <Col span={6}>
                        <div className="filters-sidebar-inner">
                            <h5 className='section-subtitle from-sidebar'><span className="pull-left">FILTERS</span><a href="/" className="clear-link">Clear all filters</a></h5>
                            <div className="form-group">
                                <label className="label">
                                    <span className="labelName">Skills</span>
                                    <span className="clear-link clearAction">Clear</span>
                                </label>
                                <Select
                                    mode="multiple"
                                    size={"large"}
                                    placeholder="Please select"
                                    defaultValue={[]}
                                    style={{ width: '100%' }}>
                                    {children}
                                </Select>
                            </div>

                            <div className="form-group">
                                <label className="label ">
                                    <span className="labelName">Availabilty <Icon type="exclamation-circle" /></span>
                                    <span className="clear-link clearAction">Clear</span>
                                </label>
                                <div style={{ float: 'left' }}><Checkbox >Hourly</Checkbox></div>
                                <div style={{ float: 'left' }}><Checkbox >Part-time(20 hrs/wk)</Checkbox></div>
                                <div style={{ float: 'left' }}><Checkbox >Full-time(40 hrs/wk)</Checkbox></div>
                            </div>
                            <div className="form-group">
                                <label className="label ">
                                    <span className="labelName">Job type <Icon type="exclamation-circle" /></span>
                                    <span className="clear-link clearAction">Clear</span>
                                </label>
                                <Dropdown overlay={menu} trigger={['click']}>
                                    <Button>
                                        Select a Job Type <Icon type="down" />
                                    </Button>
                                </Dropdown>
                            </div>
                            <div className="form-group">
                                <label className="label">
                                    <span className="labelName">Pay rate/hr($)</span>
                                    <span className="clear-link clearAction">Clear</span>
                                </label>
                                <div><InputNumber
                                    min={1}
                                    max={100}
                                    className="minInputBox"
                                /> <span className="limitter">-</span>
                                    <InputNumber
                                        min={1}
                                        max={100}
                                    /></div>
                                <Slider
                                    min={1}
                                    max={100}
                                    className="maxInputBox"
                                />
                                <div style={{ position: 'relative' }}>
                                    <div style={{ position: 'absolute', left: '7px', fontWeight: '500' }}>1</div>
                                    <div style={{ float: 'right', fontWeight: '500' }}>100</div>
                                </div>
                                <div style={{ float: 'left' }}><Checkbox className="slideText">Include profiles without pay rates</Checkbox></div>
                            </div>
                            <div className="form-group">
                                <label className="label">
                                    <span className="labelName">Experience level</span>
                                    <span className="clear-link clearAction">Clear</span>
                                </label>
                                <Dropdown overlay={menu} trigger={['click']}>
                                    <Button>
                                        Select your Experience level <Icon type="down" />
                                    </Button>
                                </Dropdown>
                            </div>
                            <div className="form-group">
                                <label className="label">
                                    <span className="labelName">Countries</span>
                                    <span className="clear-link clearAction">Clear</span>
                                </label>
                                <Select
                                    mode="multiple"
                                    size={"large"}
                                    placeholder="Enter state,province or country"
                                    defaultValue={[]}
                                    style={{ width: '100%' }}>
                                    {children}
                                </Select>
                            </div>
                            <div className="form-group">
                                <label className="label">
                                    <span className="labelName">Languages</span>
                                    <span className="clear-link clearAction">Clear</span>
                                </label>
                                <Select
                                    mode="multiple"
                                    size={"large"}
                                    defaultValue={[]}
                                    style={{ width: '100%' }}>
                                    {children}
                                </Select>
                            </div>
                        </div>
                    </Col>
                </div>
            </div>
        );
}