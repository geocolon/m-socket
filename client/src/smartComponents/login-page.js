import React from 'react';
import { connect } from 'react-redux';
import Nav from './Nav';
import Login from './Login';
import {Link, Redirect} from 'react-router-dom';
import './RegistrationForm.css'
import '../index.css';

class LoginPage extends React.Component {
    // If we are logged in (which happens automatically when Login
    // is successful) redirect to the user's dashboard
    render(){
        if (this.props.loggedIn) {
            return <Redirect to="/dashboard" />;
        }

        return (
            <div>
                <Nav /> 
                    <center><h2> <br/></h2></center>
                    <div className="container">
                        <center>
                            <Link id="signup" to="/signup">Not registered? Sign up.</Link>
                        </center>
                    </div>
                <Login /><br/>
            </div>    
        );
    } 
}

const mapStateToProps = state => {
    return {
   loggedIn: state.auth.currentUser !== null
    }
};

export default connect(mapStateToProps)(LoginPage);