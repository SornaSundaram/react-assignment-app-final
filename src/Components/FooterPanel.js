import React from 'react';
import { Layout,Col } from 'antd';

const { Footer } = Layout;

const footer = () => {
	return (
		<Footer>
			<Col span={6}>Hubstaff Talent</Col>
				<Col span={4}>TALENT</Col>
				<Col span={4}>HUBSTAFF</Col>
				<Col span={4}>SUPPORT</Col>
				<Col span={6}>SOCIAL</Col>
		</Footer>
	);
};

export default footer;
