import React from 'react';
import { Layout } from 'antd';
import NavigationPanel from './Navigation';
import ContentPanel from '../Containers/ContentPanel';
import FooterPanel from './FooterPanel';

const home = () => {
	return (
		<div>
			<Layout className="parentLayout">
				<NavigationPanel />
				<div style={{ display: 'flex', flexDirection: 'column' }}>
					<ContentPanel />
					<FooterPanel />
				</div>
			</Layout>
		</div>
	);
};

export default home;
