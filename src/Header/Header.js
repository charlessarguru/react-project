import React from 'react';
import Menu from './Menu/Menu';
import './Header.css';
import Logo from './Logo';
import Title from './Title';

const Header = (props) => {

    
    return (
        <div className='header'>
            <Logo/>
            <Title></Title> 
            <Menu/>
        </div>
    );
};

export default Header;
