import React from 'react'
import 'font-awesome/css/font-awesome.min.css';
import "./Main.css"
import Chart from "../Charts/Charts";
import welcome from "../Assets/welcome.jpg";

const Main = () => {
    return (
        <main>
            <div className="main_container">
                <div className="main_title">
                    <img src={welcome} alt="User"/>
                    <div className="main_greeting">
                        <h1>Hello there!</h1>
                        <p>Welcome to your admin dashboard</p>
                    </div>
                </div>

                <div className="main_cards">

                    <div className="card" id="card1">
                        <i className="fa fa-archive fa-2x"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Total Assets</p>
                            <span className="font-bold text-title">550</span>
                        </div>
                    </div>


                    <div className="card" id="card2">
                        <i className="fa fa-calendar fa-2x"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Total Assigned Assets</p>
                            <span className="font-bold text-title">350</span>
                        </div>
                    </div>
                    

                    <div className="card" id="card3">
                        <i className="fa fa-building fa-2x"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Assets Available in Store</p>
                            <span className="font-bold text-title">200</span>
                        </div>
                    </div>


                    <div className="card" id="card4">
                        <i className="fa fa-ambulance fa-2x"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Faulty Assets</p>
                            <span className="font-bold text-title">10</span>
                        </div>
                    </div>

                </div>

                <div className="charts">
                    <div className="charts_left">
                        <div className="charts_left_title">
                            <div>
                                <h1>Daily Reports</h1>
                            </div>
                            <i className="fa fa-thumbtack"></i>
                        </div>
                        <Chart/>
                    </div>

                    
                   
                    <div className="charts_right">
                        <div className="charts_right_title">
                            <div>
                                <h1>Stats Reports</h1>
                            </div>
                            <i className="fa fa-thumbtack"></i>
                        </div>

                        <div className="charts_right_cards">
                            <div className="card1">
                                <h1>GIZ Assets</h1>
                                <p>200</p>
                            </div>

                            <div className="card2">
                                <h1>Service Center </h1>
                                <p>100</p>
                            </div>

                            <div className="card3">
                                <h1>Accra Office</h1>
                                <p>50</p>
                            </div>

                            <div className="card4">
                                <h1>Training Center</h1>
                                <p>150</p>
                            </div>
                        </div>
                    </div>

                    
                </div>


            </div>
        </main>
    )
}

export default Main
