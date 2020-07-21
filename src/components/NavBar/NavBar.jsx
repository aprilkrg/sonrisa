import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import userService from '../../utils/userService';

class NavBar extends Component {

    render() {
        return (
            <>
            <div className='NavBar'>
                {userService.getUser() ? 
                    <>
                        <Link to='/logout' onClick={this.props.handleLogout} className='NavBar-link'>LOG OUT</Link>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <Link to='/resources' className='NavBar-link'>RESOURCES</Link>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <Link to='/services' className='NavBar-link'>SERVICES</Link>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <Link to='/contact' className='NavBar-link'>CONTACT</Link>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <Link to='/about' className='NavBar-link'>ABOUT</Link>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <Link to='/' className='NavBar-link'>HOME</Link>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <div className='NavBar-welcome'>{userService.getUser().name ? `WELCOME, ${userService.getUser().name.toUpperCase()}` : ''}</div>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                    </>
                    :
                    <>
                        <Link to='/login' className='NavBar-link'>LOG IN</Link>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <Link to='/signup' className='NavBar-link'>SIGN UP</Link>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <Link to='/contact' className='NavBar-link'>CONTACT</Link>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <Link to='/services' className='NavBar-link'>SERVICES</Link>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <Link to='/about' className='NavBar-link'>ABOUT</Link>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                    </>
                }
            </div> <br/>&nbsp;&nbsp;&nbsp;&nbsp;<br/>
            <div className='NavBar-admin'>
                {userService.isAdmin() ?
                <>
                    <Link to='/add' className='NavBar-link'>ADD</Link>
                    &nbsp;&nbsp;|&nbsp;&nbsp;
                    <Link to='/contacts' className='NavBar-link'>CONTACTS</Link>
                </>
                :
                <>
                </>
                }
            </div>
            </>
        );
    }

};

export default NavBar;