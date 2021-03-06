import React from 'react';
import { connect } from 'react-redux';
import Nav from './Nav';
import ChatComp from './ChatComp';
import {Redirect} from 'react-router-dom';

class MapPage extends React.Component {
    render() {
        if(!this.props.loggedIn) {
            return <Redirect to="/login" />;
        }
        return (
            <div>
                <Nav />
                <ChatComp />
            </div>    
        );
    }
}

const mapStateToProps = state => {
    return {
   loggedIn: state.auth.currentUser !== null
    }
};

export default connect(mapStateToProps)(MapPage);