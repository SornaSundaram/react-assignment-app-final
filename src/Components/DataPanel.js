import React from 'react';
import { Tag } from 'antd';

const dataPanel = (props) => {

    return (

        <div className="main-details">
                <div>
                    <span className="name margin-right-10">{props.data.title}</span>
                    <Tag>{props.data.jobType}</Tag>
                    <div className="content-pay-rate">$44/hr</div>
                </div>
                <div className="job-company">
                    <div style={{float:'left',clear:'left'}}>
                        <a className="is-inline-block job-agency margin-right-20" target="" href="http://tutortroops.com"><i className="hi hi-agency" title="Client"></i> Tutor Tropps</a>
                        <span className="location text-success margin-right-20">
                            <i class="hi hi-pin" title="From"></i>
                            {props.data.location}
                        </span>
                    </div>
                </div>
                <div style={{ fontWeight: 500,float:'left',clear:'left' }}>
                    Reply rate: 82%
                </div>
                <div className="profil-bio push-bottom-10">
                    {props.data.desciption}
                </div>
                <div className="list-inline push-bottom-20">
                {
                    props.data.requiredSkills && props.data.requiredSkills.split(',').map((skill) =>
                    <li><Tag style={{ marginTop: '20px' }}><a href="/">{skill.trim()}</a></Tag></li>
                )
                }
                </div>
            </div>
    );
};

export default dataPanel;