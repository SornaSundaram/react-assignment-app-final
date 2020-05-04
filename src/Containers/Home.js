import React from 'react';
import { Layout } from 'antd';
import NavigationPanel from '../Components/Navigation';
import ContentPanel from '../Components/ContentPanel';
import FooterPanel from '../Components/FooterPanel';

const home = () => {

    return (
        <div>
            
            <NavigationPanel></NavigationPanel>
            <ContentPanel></ContentPanel>
            <FooterPanel></FooterPanel>
        </div>
    )
};

export default home;