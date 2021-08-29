import React from 'react';
import {  Menu } from 'antd';
import { Link } from 'react-router-dom';

const LeftMenu = () => {

    return (
        <Menu>
            <Menu.Item key={1}><Link to="/calendar">Calendar</Link></Menu.Item>
            <Menu.Item key={2}><Link to="/treatments">Treatments</Link></Menu.Item>
            <Menu.Item key={3}><Link to="/recipes">Recipes</Link></Menu.Item>
            <Menu.Item key={4}><Link to="/patient">Patient</Link></Menu.Item>
            <Menu.Item key={5}><Link to="/employees">Employees</Link></Menu.Item>
            <Menu.Item key={6}><Link to="/settings">Settings</Link></Menu.Item>
        </Menu>
    )

}

export default LeftMenu;