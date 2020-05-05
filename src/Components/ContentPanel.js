import React, { useState, useEffect } from 'react';
import { Layout,Pagination } from 'antd';
import SearchBar from './SearchPanel';
import axios from '../ApiJobData';
import JobResults from './JobResults';

const { Content } = Layout;

const Contentpanel = () => {

    console.log('data loading');
    const [data, setData] = useState([]);

    useEffect(() => {
       
        async function fetchData() {

            const result = await axios(
                '/',
              );
            setData(result.data);  
        }
     
        fetchData();
      }, []);
     


  console.log(data);
  
    
    return (
        <Content>
                    <div className="container">
                        <SearchBar></SearchBar>
                    </div>
                    <div className="container">
                        <JobResults jobdata = {data}></JobResults>
                    </div>
                    <div className="pagination-container">
                    <Pagination defaultCurrent={1} total={50} />
                    </div>
                </Content>
    );
};

export default Contentpanel;