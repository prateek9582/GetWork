import React, { Component } from 'react';
// import Companies from './Companies';
// import Offered from './Offered';
import Dell from './dell.jpg';
import Sales from './mcd.png';
class Home extends Component {
    state = {  }
    render() { 
        let dell = ["Dell Incorporation","Dell Incorporation","Dell Incorporation","Dell Incorporation"];
        let sales = ["Sales Manager","Sales Manager","Sales Manager"];
        return (
            <React.Fragment>
                <div className="home-full">
                    <div className="bar">
                <h2>Home</h2>
                <div className="icon">
                <i className="far fa-comment-alt icon"></i>
                <i className="far fa-bell icon"></i>
                <i className="far fa-user-circle icon"></i>
                </div>
                </div>
                <div className="overall">
                    <div className = "mark">
                        <p className="university">Universities with complete profile are noticed more by Companies. <b>Keep your profile upto date.</b></p>
                        <a href="">Update Profile</a>
                        <i class="fas fa-sign-in-alt"></i>
                    </div>
                    <div className = "mark1">
                        <i class="fas fa-clipboard-list icon"></i>
                        <p className="generate">Generate <b>MHRD</b> Reports</p>
                    </div>
                </div>
                <div className="grid">

                    <div className="front">
                        <div className="invite">
                            <h3 className="heading">Invite Companies</h3>
                            {dell.map((invitation)=>{
                                return <div class="invitation">
                                <img className="invite-logo" src={Dell} alt = "invite"></img>
                                <span className="dell">Dell Incorporation</span>
                            </div>
                            })}
                            <div className="all"><b>View all Companies -></b></div>               
                        </div>
                        <div className="new-jobs">
                            <h3 className="heading">New Jobs</h3>
                                {sales.map((invitation)=>{
                                    return <div class="invitation">
                                    <img className="sales-logo" src={Sales} alt = "sales"></img>
                                    <div className="sales-span">
                                        <span><b>Sales Manager</b></span>
                                        <span>Mc. Donalds</span>
                                        <span>Delhi</span>
                                    </div>
                                </div>
                                })}
                            <div className="salesall"><b>View all New Jobs -></b></div>
                        </div>
                        <div className="ctc">
                        CTC Offered
                        </div>
                    </div>

                    <div className="center">
                        <div className="registered">
                        <i className="fas fa-graduation-cap graduate"></i>
                        <h2>75000</h2>
                        <div className="student">
                            <span>Students</span>
                            <b>Registered</b>
                        </div>
                        </div>
                        <div className="visited">
                        <i className="fas fa-users visit"></i>
                        <h2>500</h2>
                        <div className="student">
                            <span>Visited</span>
                            <b>Companies</b>
                        </div>
                        </div>
                        <div className="circles">
                            <div className="para-circle">Most popular <br></br>Skills your<br></br>Students<br></br>have</div>
                            <div className="components">
                            <div className="circle-component">
                                <span><b>AWS</b></span>
                                <div className="flex-wrapper">
                                <div className="single-chart">
                                    <svg viewBox="0 0 36 36" className="circular-chart purple">
                                    <path className="circle-bg"
                                        d="M18 2.0845
                                        a 15.9155 15.9155 0 0 1 0 31.831
                                        a 15.9155 15.9155 0 0 1 0 -31.831"
                                    />
                                    <path className="circle"
                                        stroke-dasharray="80, 100"
                                        d="M18 2.0845
                                        a 15.9155 15.9155 0 0 1 0 31.831
                                        a 15.9155 15.9155 0 0 1 0 -31.831"
                                    />
                                    <text x="18" y="20.35" className="percentage">80%</text>
                                    </svg>
                                </div>
                                </div>
                            </div>
                            <div className="circle-component">
                                <span><b>Node.js</b></span>
                                <div className="flex-wrapper">
                                <div className="single-chart">
                                    <svg viewBox="0 0 36 36" className="circular-chart yellow">
                                    <path className="circle-bg"
                                        d="M18 2.0845
                                        a 15.9155 15.9155 0 0 1 0 31.831
                                        a 15.9155 15.9155 0 0 1 0 -31.831"
                                    />
                                    <path className="circle"
                                        stroke-dasharray="80, 100"
                                        d="M18 2.0845
                                        a 15.9155 15.9155 0 0 1 0 31.831
                                        a 15.9155 15.9155 0 0 1 0 -31.831"
                                    />
                                    <text x="18" y="20.35" className="percentage">80%</text>
                                    </svg>
                                </div>
                                </div>
                            </div>
                            <div className="circle-component">
                                <span><b>Javascript</b></span>
                                <div className="flex-wrapper">
                                <div className="single-chart">
                                    <svg viewBox="0 0 36 36" className="circular-chart orange">
                                    <path className="circle-bg"
                                        d="M18 2.0845
                                        a 15.9155 15.9155 0 0 1 0 31.831
                                        a 15.9155 15.9155 0 0 1 0 -31.831"
                                    />
                                    <path className="circle"
                                        stroke-dasharray="80, 100"
                                        d="M18 2.0845
                                        a 15.9155 15.9155 0 0 1 0 31.831
                                        a 15.9155 15.9155 0 0 1 0 -31.831"
                                    />
                                    <text x="18" y="20.35" className="percentage">80%</text>
                                    </svg>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>

                    <div className="back">
                        <div className="calender">
                        Calender
                        </div>
                        <div className="stud-placed">
                        Students Placed
                        </div>
                        <div className="notifications">
                                <div><b>Recent notifications</b></div>
                        </div>
                    </div>



                 </div>
                </div>
            </React.Fragment>
          );
    }
}
 
export default Home;