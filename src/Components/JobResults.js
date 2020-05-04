import React from 'react';
import { Row, Col } from 'antd';
import RightSidePanel from './RightSidePanel';
import FilterPanel from './FilterPanel';

const jobResults = () => {

    return (
        <div>
            <Row>
                <Col span={ 4 }><FilterPanel></FilterPanel></Col>
                <Col span={ 16 }></Col>
                <Col span={ 4 }><RightSidePanel></RightSidePanel></Col>
            </Row>
        </div>
    );
};

export default jobResults;