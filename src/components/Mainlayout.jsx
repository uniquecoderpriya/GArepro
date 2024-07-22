
import React, { useState } from 'react';
import { Breadcrumb, Button, Input, Layout, Space, Table } from 'antd';
import 'tailwindcss/tailwind.css';
import '../style/Mainlayout.scss';
import customers from '../config';

const { Content } = Layout;
const { Search } = Input;

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

const Mainlayout = ({ colorBgContainer, borderRadiusLG }) => {
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
        <Layout className="main-layout">
            <div className="search-container" style={{ background: colorBgContainer }}>
                <Search
                    placeholder="Search"
                    enterButton
                    value={searchText}
                    onChange={(e) => handleSearch(e.target.value)}
                    className="search-input"
                />
                <Button className="add-customer-btn">
                    + Add Customer
                </Button>
            </div>
            <Content className="content" style={{ background: colorBgContainer, borderRadius: borderRadiusLG }}>
                <Table
                    columns={columns}
                    dataSource={filteredData}
                    rowKey="customer_name"
                    pagination={{ position: ['bottomCenter'] }}
                    className="table"
                    sticky
                    scroll={{ y: 'calc(100vh - 256px)' }}
                />
            </Content>
        </Layout>
    );
};

export default Mainlayout;
