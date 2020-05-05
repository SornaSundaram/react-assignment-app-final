import React from 'react';
import { Layout,Pagination } from 'antd';
import SearchBar from './SearchPanel';
import axios from '../ApiJobData';
import JobResults from './JobResults';

const { Content } = Layout;

const contentpanel = () => {

    console.log('data loading');
    axios.get('/').then(response => console.log(response));
    return (
        <div>
                <Content>
                    <div>
                        <SearchBar></SearchBar>
                    </div>
                    <div>
                        <JobResults></JobResults>
                    </div>
                    <div>
                        <Pagination></Pagination>
                    </div>
                </Content>
            </div>
    );
};

export default contentpanel;