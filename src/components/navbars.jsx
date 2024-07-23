import React from 'react';
import { Avatar, Menu } from 'antd';
import { BellOutlined } from '@ant-design/icons';
import '../style/nav.scss';

const items = [
    {
        key: '1',
        label: (
            <img
                src="/ga.png"
                alt="GA Logo"
                className="ga-logo"
            />
        ),
    },
    {
        key: '2',
        label: (
            <span className="text-white">GA Planner</span>
        ),
    },
];

const Navbar = () => (
    <header className="navbar">
        <div className="navbar-left">
            <div className="demo-logo" />
            <Menu
                mode="horizontal"
                defaultSelectedKeys={['2']}
                items={items}
                className="navbar-menu"
            />
        </div>
        <div className="flex items-center">
            <BellOutlined className="text-white mr-4" />
            <Avatar className="navbar-avatar">U</Avatar>
            <span className="text-white ml-2">Rohit Supervisor</span>
        </div>
    </header>
);

export default Navbar;
