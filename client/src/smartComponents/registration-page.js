import React from 'react';
import { connect } from 'react-redux';
import Nav from './Nav';
import './RegistrationForm.css'
import RegistrationForm from './RegistrationForm';
import {Link, Redirect} from 'react-router-dom';

class RegistrationPage extends React.Component {
    // If we are logged in (which happens automatically when registration
    // is successful) redirect to the user's dashboard
    render(){
        if (this.props.loggedIn) {
            return <Redirect to="/dashboard" />;
        }

        return (
            <div className="home">
                <Nav /> 
                <center><h2> Register for App {this.props.loggedIn}</h2></center>
                <RegistrationForm />
                <div className="bottom-mrg">
                <center>
                    <Link to="/login">Login</Link>
                </center>
                </div>
            </div>    
        );
    } 
}

const mapStateToProps = state => {
    // console.log('This is the state on Reg page',state)
    return {
        loggedIn: state.auth.currentUser !== null
    }
};

export default connect(mapStateToProps)(RegistrationPage);