import React from 'react';
import { Row, Col } from 'antd';
import RightSidePanel from './RightSidePanel';
import FilterPanel from './FilterPanel';
import DataSortPanel from './DataSortPanel';

const jobResults = (props) => {
	return (
		<div>
			<Row>
				<Col span={4}>
					<FilterPanel
						filterObject={props.filterObject}
						updateJobType={props.updateJobType}
						updateLocation={props.updateLocation}
					/>
				</Col>
				<Col span={16}>
					<DataSortPanel total={props.total} items={props.jobdata} />
				</Col>
				<Col span={4}>
					<RightSidePanel />
				</Col>
			</Row>
		</div>
	);
};

export default jobResults;
