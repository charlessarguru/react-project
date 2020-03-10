import React from 'react';
import './Menu.css';
import MenuItem from './MenuItem';

const Menu =(props) =>{


    //Manage state here for selecting the menu 
    return (<div className='menu'>
        <MenuItem text="Home" />
        <MenuItem text="Contact" />
        <MenuItem text="Events"/>


    </div>);
};

export default Menu;
