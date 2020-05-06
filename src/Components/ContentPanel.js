import React, { useState, useEffect } from 'react';
import { Layout,Pagination } from 'antd';
import SearchBar from './SearchPanel';
import axios from '../ApiJobData';
import JobResults from './JobResults';

const { Content } = Layout;

const Contentpanel = () => {

    console.log('data loading');
    const [data, setData] = useState([]);
    const [pageIndex,setPageIndex] = useState({minValue:0, maxValue: 5});
    const [queryObject, setQueryObject] = useState({});

    useEffect(() => {
       
        async function fetchData() {

            const result = await axios(
                '/',
              );
            setData(result.data);  
        }
     
        fetchData();
      }, []);

      const onIndexChange = (index) => {

        if (index <= 1)
        {
            setPageIndex({minValue:0, maxValue: 5});
        }
        else
        {
            setPageIndex({minValue:pageIndex.maxValue, maxValue: 5 * index});
        }
      }
     


  console.log(data);
  
    
    return (
        <Content>
                    <div className="container">
                        <SearchBar></SearchBar>
                    </div>
                    <div className="container">
                        <JobResults total = {data.length} jobdata = {data.length > 0 ? data.slice(pageIndex.minValue, pageIndex.maxValue) : data}></JobResults>
                    </div>
                    <div>
                    <Pagination Current={1} defaultpageSize = {data.length % 5} total={40} onChange = {onIndexChange} />
                    </div>
                </Content>
    );
};

export default Contentpanel;