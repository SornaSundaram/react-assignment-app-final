import React, { useState, useEffect,useRef } from 'react';
import { Layout,Pagination } from 'antd';
import SearchBar from './SearchPanel';
import axios from '../ApiJobData';
import JobResults from './JobResults';

const { Content } = Layout;

const Contentpanel = () => {

    console.log('data loading');
    const [data, setData] = useState([]);
    const [pageIndex,setPageIndex] = useState({minValue:0, maxValue: 5});
    const [filter, setFilter] = useState( {state: { jobType: null, location: null}});
    const [apiUrl, setApiUrl] = useState({query: {value : '/'}});
    const [keyword, setKeyword] = useState('');
    

    const updateLocation = (locationval) => {
        console.log('reached');
        
        // queryObject.location = locationval[0];
        console.log(filter);
        setFilter(prevObj => ({
            state :{
                ...prevObj.state,
                location : locationval[0] 
            }
            
                        
        }));
        console.log(filter.state.location)
        
        console.log('called');
        console.log(apiUrl);
       
    }

    const updateJobType = (jobTypeVal) => {
        
        setFilter(prevObj => ({
            state :{
                ...prevObj.state,
                jobType : jobTypeVal 
            },
                        
        }));
       
       
    }

    useEffect(() => {
     
        console.log('dataeffect');
        console.log(apiUrl.query.value);
        async function fetchData() {   

            
            const result = await axios(
                   apiUrl.query.value,
              );
              console.log(result.data);
              setData(result.data);
              
             
           
        }

        fetchData();
        
      }, [apiUrl]);

      useEffect(() => {
          console.log('urleffect');
          urlchange();
      }, [filter, keyword]);

      const urlchange = () => {
          console.log('calling first hook');
          setApiUrl(prevUrl => ({
            query :{
                ...prevUrl.query,
                value : '/search?location='+ filter.state.location 
            },
                        
        }));
      }
      const onIndexChange = (index) => {

        if (index <= 1)
        {
            setPageIndex({minValue:0, maxValue: 5});
        }
        else
        {
            setPageIndex({minValue:pageIndex.maxValue, maxValue: 5 * index});
            console.log(pageIndex);
        }
      }

      const onSearchKeywordChange = (keyword) => {
         setKeyword(keyword);
      }

      
     


  console.log(data);
  
    
    return (
        <Content>
                    <div className="container">
                        <SearchBar></SearchBar>
                    </div>
                    <div className="container">
                        <JobResults 
                        updateJobType = {updateJobType} 
                        updateLocation = {updateLocation}
                        filterObject = {filter} 
                        total = {data.length} 
                        jobdata = {data.length > 0 ? data.slice(pageIndex.minValue, pageIndex.maxValue) : data}
                        >                            
                        </JobResults>
                    </div>
                    <div>
                    <Pagination Current={1} defaultpageSize = {data.length % 5} total={(data.length / 5) * 10} onChange = {onIndexChange} />
                    </div>
                </Content>
    );
};

export default Contentpanel;