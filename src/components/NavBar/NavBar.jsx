import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import userService from '../../utils/userService';

class NavBar extends Component {

    render() {
        return (
            <div className='NavBar'>
                {userService.getUser() ? 
                    <>
                        <Link to='/logout' onClick={this.props.handleLogout} >LOG OUT</Link>
                        {userService.getUser().name ? `WELCOME, ${userService.getUser().name.toUpperCase()}` : ''}
                        &nbsp;&nbsp;&nbsp;&nbsp;
                    </>
                    :
                    <>
                        <Link to='/login' className='NavBar-link'>LOG IN</Link>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <Link to='/signup' className='NavBar-link'>SIGN UP</Link>
                    </>
                }
            </div>
        );
    }

};

export default NavBar;