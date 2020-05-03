import React from 'react';
import { Col } from 'antd';


const rightSidePanel = () => {

    return (
        <div>
            <Col span={6}>
                <div >
                    <div >
                        
                        <h4 style={{ fontSize: '18px' }}>Track time on Hubstaff</h4>
                        <div >Pay only for the hours worked</div>
                        <a href="https://talent.hubstaff.com/signup?message=" target="">Sign Up</a>
                        <a href="/" target="">Learn more...</a>
                    </div>
                    <div >
                        <h5 >
                            <span >Top jobs</span>
                        </h5>
                        <ul >
                            <li >
                                <div >
                                    <div >
                                        <a  href="/">Senior Ruby on Rails Engineer</a>
                                    </div>
                                    <div >
                                        <div >60$/hr</div>
                                    </div>
                                </div>
                                <div >
                                    content coming
                                                        </div>
                            </li>
                            <li>
                                <div >
                                    <div >
                                        <a href="/">Senior Product Designer </a>
                                    </div>
                                    <div >
                                        <div >45$/hr</div>
                                    </div>
                                </div>
                                <div >
                                    content coming
                                                        </div>
                            </li>
                        </ul>
                    </div>
                    <div >
                        <h5 >
                            <span >Most Viewed this Week</span>
                        </h5>
                        <ul >
                            <li >
                                <div >
                                    <div >
                                        <a href="/">Senior Ruby on Rails Engineer</a>
                                    </div>
                                    <div >
                                        <div >60$/hr</div>
                                    </div>
                                </div>
                                <div >
                                    content coming
                                                        </div>
                            </li>
                            <li >
                                <div >
                                    <div >
                                        <a >Senior Product Designer </a>
                                    </div>
                                    <div >
                                        <div >45$/hr</div>
                                    </div>
                                </div>
                                <div >
                                    content coming
                                                        </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </Col>
        </div>
    );
};

export default rightSidePanel;