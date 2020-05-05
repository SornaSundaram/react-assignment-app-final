import React from 'react';
import { Col } from 'antd';
import timeTrackerLogo from '../images/time_track_logo.png';


const rightSidePanel = () => {

    return (
               
        <div className="filters-sidebar-inner">
                    <div className="signUpArea">
                        <img src={timeTrackerLogo} className='timetrackerlogo' alt='timetracker_logoImage'/>
                        <h4 style={{fontSize: '18px'}}>Track time on Hubstaff</h4>
                        <div className="hs-lead">Pay only for the hours worked</div>
                        <a className="btn btn-primary btn-130" href="https://talent.hubstaff.com/signup?message="
                           target="">Sign Up</a>
                        <a className="textInSignUp" href="/" target="">Learn more...</a>
                    </div>
                    <div className="sidebar-section">
                        <h5 className="section-subtitle-right from-sidebar">
                            <span className="pull-left">Top jobs</span>
                        </h5>
                        <ul className="list-unstyled">
                            <li className="sidebar-job">
                                <div className="row">
                                    <div className="col-sm-8">
                                        <a className="name" href="/">Senior Ruby on Rails Engineer</a>
                                    </div>
                                    <div className="col-sm-4 text-right">
                                        <div className="pay-rate">60$/hr</div>
                                    </div>
                                </div>
                                <div className="description">
                                   Description:Hubstaff makes managing teams and remote work easy. We are a rapidly gr...
                                </div>
                            </li>
                            <li className="sidebar-job">
                                <div className="row">
                                    <div className="col-sm-8">
                                        <a className="name" href="/">Senior Product Designer </a>
                                    </div>
                                    <div className="col-sm-4 text-right">
                                        <div className="pay-rate">45$/hr</div>
                                    </div>
                                </div>
                                <div className="description">
                                   Description:Hubstaff makes managing teams and remote work easy. We are a rapidly gr...
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="sidebar-section">
                        <h5 className="section-subtitle-right from-sidebar">
                            <span className="pull-left">Most Viewed this Week</span>
                        </h5>
                        <ul className="list-unstyled">
                            <li className="sidebar-job">
                                <div className="row">
                                    <div className="col-sm-8">
                                        <a className="name" href="/">Senior Ruby on Rails Engineer</a>
                                    </div>
                                    <div className="col-sm-4 text-right">
                                        <div className="pay-rate">60$/hr</div>
                                    </div>
                                </div>
                                <div className="description">
                                   Description:Hubstaff makes managing teams and remote work easy. We are a rapidly gr...
                                </div>
                            </li>
                            <li className="sidebar-job">
                                <div className="row">
                                    <div className="col-sm-8">
                                        <a className="name" href="/">Senior Product Designer </a>
                                    </div>
                                    <div className="col-sm-4 text-right">
                                        <div className="pay-rate">45$/hr</div>
                                    </div>
                                </div>
                                <div className="description">
                                   Description:Hubstaff makes managing teams and remote work easy. We are a rapidly gr...
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

    );
};

export default rightSidePanel;