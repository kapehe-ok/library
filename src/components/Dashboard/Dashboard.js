import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import { connect } from 'react-redux';
import { getProperties } from './../ducks/reducer';

class Dashboard extends Component {

    render() {
        return (
            <div className="Dashboard">
            <Nav/>
            <div className="contentHolder">    
            <div className="content">
                        {/* <div className="blue" onClick={()=> getProperties()}></div> */}
                       <br/> 
            
                       <Link to="/step1"><button className="addPropBtn"> Add new property</button></Link>
                    </div>
                </div>    
            </div>    
        )
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps)(Dashboard);