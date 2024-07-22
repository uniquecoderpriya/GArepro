import React, { useState } from 'react';
import { Avatar, Breadcrumb, Button, Input, Layout, Menu, theme, Table, Space } from 'antd';
import { UserOutlined, BellOutlined } from '@ant-design/icons';
import 'tailwindcss/tailwind.css';
import '../style/Nav.css';
import customers from '../config';

const { Header, Content, Sider } = Layout;
const { Search } = Input;

const items1 = [
    {
        key: '1',
        label: (
            <img
                src="/GA.png"
                alt="GA Logo"
                style={{ height: '40px' }}
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

const items2 = [
    {
        key: 'sub1',
        icon: <UserOutlined className="ant-menu-item-customers-icon" />,
        label: <span className="ant-menu-item-customers">customers</span>,
    },
];

const columns = [
    {
        title: 'Customer Name',
        dataIndex: 'customer_name',
        key: 'customer_name',
    },
    {
        title: 'Customer Type',
        dataIndex: 'customer_type',
        key: 'customer_type',
    },
    {
        title: 'Created Date',
        dataIndex: 'created_date',
        key: 'created_date',
    },
    {
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <Button onClick={() => handleManage(record)}>Manage</Button>
            </Space>
        ),
    },
];

const handleManage = (record) => {
    console.log('Manage button clicked for:', record);
};

const App = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const [searchText, setSearchText] = useState('');
    const [filteredData, setFilteredData] = useState(customers);

    const handleSearch = (value) => {
        setSearchText(value);
        const filtered = customers.filter(customer =>
            customer.customer_name.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredData(filtered);
    };

    return (
        <Layout style={{ height: '100vh' }}>
            <Header
                className="bg-blue-500 relative"
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    height: '64px',
                    position: 'fixed',
                    width: '100%',
                    top: 0,
                    zIndex: 1,
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div className="demo-logo" />
                    <Menu
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        items={items1}
                        style={{ flex: 1, minWidth: 0 }}
                    />
                </div>
                <div className="flex items-center">
                    <BellOutlined className="text-white mr-4" style={{ fontSize: '20px' }} />
                    <Avatar
                        style={{
                            backgroundColor: '#fde3cf',
                            color: '#f56a00',
                        }}
                    >
                        U
                    </Avatar>
                    <span className="text-white ml-2">Rohit Supervisor</span>
                </div>
            </Header>

            <Layout style={{ marginTop: '64px' }}>
                <Sider
                    width={200}
                    style={{
                        background: colorBgContainer,
                        position: 'fixed',
                        height: 'calc(100vh - 64px)',
                        top: '64px',
                        left: 0,
                        overflow: 'auto',  // Ensure only Sider scrolls
                    }}
                >
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0 }}
                        items={items2}
                    />
                </Sider>

                <Layout
                    style={{
                        marginLeft: '200px',
                        padding: '0 24px',
                        height: 'calc(100vh - 64px)',
                        overflow: 'hidden',  // Prevent double scrollbars
                    }}
                >
                    <div
                        style={{
                            position: 'fixed',
                            top: '64px',
                            right: '24px',
                            zIndex: 1,
                            background: colorBgContainer,
                            padding: '16px',
                            // width: 'calc(100% - 240px)', 
                        }}
                    >
                        <Search
                            placeholder="Search by customer name"
                            enterButton
                            value={searchText}
                            onChange={(e) => handleSearch(e.target.value)}
                            style={{ width: 300 }}
                        />
                        <span
                            style={{
                                marginTop: '72px',
                                marginLeft: '690px',
                                textAlign: 'right',
                                position: 'relative',
                                zIndex: 1,
                            }}
                        >
                            <Button
                                type="primary"
                                style={{
                                    borderRadius: '4px',
                                }}
                            >
                                + Add Customer
                            </Button>
                        </span>
                        <Breadcrumb
                            style={{ marginTop: '16px' }}
                        />
                    </div>
                    <Content
                        className="custom-content"
                        style={{
                            padding: '72px 24px 24px',
                            margin: 0,
                            minHeight: 280,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                            overflow: 'auto', // Ensure only Content scrolls
                        }}
                    >
                        <Table
                            columns={columns}
                            dataSource={filteredData}
                            rowKey="customer_name"
                            pagination={{
                                position: ['bottomCenter'],
                            }}
                            style={{ width: '100%' }}
                            sticky
                            scroll={{ y: 'calc(100vh - 256px)' }} // Adjust table height
                        />
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
};

export default App;
