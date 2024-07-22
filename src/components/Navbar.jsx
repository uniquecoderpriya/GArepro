import React from 'react';
import { Avatar, Menu } from 'antd';
import { BellOutlined } from '@ant-design/icons';
import 'tailwindcss/tailwind.css';
import '../style/Nav.scss';

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
    <header className="navbar bg-blue-500">
        <div className="navbar-left flex items-center">
            <div className="demo-logo" />
            <Menu
                mode="horizontal"
                defaultSelectedKeys={['2']}
                items={items}
                className="navbar-menu"
            />
        </div>
        <div className="flex items-center">
            <BellOutlined className="text-white mr-4" style={{ fontSize: '20px' }} />
            <Avatar className="navbar-avatar">U</Avatar>
            <span className="text-white ml-2">Rohit Supervisor</span>
        </div>
    </header>
);

export default Navbar;
