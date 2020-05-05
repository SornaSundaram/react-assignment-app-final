import React from 'react';
import { Layout } from 'antd';
import NavigationPanel from '../Components/Navigation';
import ContentPanel from '../Components/ContentPanel';
import FooterPanel from '../Components/FooterPanel';

const home = () => {

    return (
        <div>
            <Layout className="parentLayout">
            <NavigationPanel></NavigationPanel>
            <div style={{display: "flex", flexDirection: "column"}}>
            <ContentPanel></ContentPanel>
            <FooterPanel></FooterPanel>
            </div>
            
            </Layout>
            
        </div>
    )
};

export default home;