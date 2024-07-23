import React from 'react';
import { Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import '../style/sidebar.scss';

const items = [
    {
        key: 'sub1',
        icon: <UserOutlined className="ant-menu-item-customers-icon" />,
        label: <span className="ant-menu-item-customers">Customers</span>,
    },
];

const Sidebar = () => (
    <aside className="sidebar">
        <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            className="sidebar-menu"
            items={items}
        />
    </aside>
);

export default Sidebar;
