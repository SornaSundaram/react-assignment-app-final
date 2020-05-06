import React from 'react';
import { Col, Select } from 'antd';
import DataPanel from './DataPanel';

const Option = Select.Option;
const dataSortPanel = (props) => {

    console.log('afterprops');
    console.log(props.items);
    console.log(props.items.map(item => console.log('working')));

    return (

        <div>
                <Col span={12} >
                    <div className="content-section">
                        <div className="col-sm-12">
                            <div className="section-subtitle no-margin pull-left">Results({props.total})</div>
                            <div className="sort_by">
                                <span className="labelclass">Sort by</span>
                                <div className="custom-select-wrapper sort-results-select">
                                    <Select defaultValue="Relevance" style={{ width: 130 }}>
                                        <Option key="Relevance" value="Relevance">Relevance</Option>
                                        <Option key="Budget" value="Budget">Budget</Option>
                                        <Option key="Pay" value="Pay rate">Pay rate</Option>
                                        <Option key="Date" value="Date added">Date added</Option>
                                    </Select>
                                </div>
                            </div>
                        </div>
                        <div className="search-result">
                        {
                            props.items.map((item) =><DataPanel key={item.title + item.jobType + item.location} data={item} />)
                            
                        }
                        </div>
                    </div>
                </Col>
            </div>
    );
};

export default dataSortPanel;