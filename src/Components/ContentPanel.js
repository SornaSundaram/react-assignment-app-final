import React from 'react';
import { Layout,Pagination } from 'antd';
import SearchBar from './SearchPanel';

const { Content } = Layout;

const contentpanel = () => {

    return (
        <div>
                <Content>
                    <div>
                        <SearchBar></SearchBar>
                    </div>
                    <div>
                        <Pagination></Pagination>
                    </div>
                </Content>
            </div>
    );
};

export default contentpanel;