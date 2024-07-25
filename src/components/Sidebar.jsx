import React from 'react';
import { Menu, Button } from 'antd';
import { UserOutlined, LogoutOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import '../style/sidebar.scss';

const items = [
    {
        key: 'sub1',
        icon: <UserOutlined className="ant-menu-item-customers-icon" />,
        label: <span className="ant-menu-item-customers">Customers</span>,
    },
];

const Sidebar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/');
    };

    return (
        <aside className="sidebar">
            <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                className="sidebar-menu"
                items={items}
            />
            <Button
                type="text"
                icon={<LogoutOutlined />}
                className="logout-button"
                onClick={handleLogout}
            >
                Logout
            </Button>
        </aside>
    );
};

export default Sidebar;
