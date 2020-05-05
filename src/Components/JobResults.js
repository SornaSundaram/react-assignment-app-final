import React from 'react';
import { Row, Col } from 'antd';
import RightSidePanel from './RightSidePanel';
import FilterPanel from './FilterPanel';
import DataSortPanel from './DataSortPanel';

const jobResults = (props) => {

    return (
        <div>
            <Row>
                <Col span={ 4 }><FilterPanel></FilterPanel></Col>
                <Col span={ 16 }><DataSortPanel items = {props.jobdata}></DataSortPanel></Col>
                <Col span={ 4 }><RightSidePanel></RightSidePanel></Col>
            </Row>
        </div>
    );
};

export default jobResults;