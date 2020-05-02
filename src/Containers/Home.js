import React from 'react';
import { Layout } from 'antd';
import Navigation from '../Components/Navigation';
import ContentPanel from '../Components/ContentPanel';

const home = () => {

    return (
        <div>
            
            <Navigation></Navigation>
            <ContentPanel></ContentPanel>
        </div>
    )
};

export default home;