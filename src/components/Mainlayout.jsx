import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Button, Input, Layout } from 'antd';
import { fetchStudents } from '../action'; 
import { useNavigate } from 'react-router-dom';
import '../style/mainlayout.scss';

const { Content } = Layout;
const { Search } = Input;

const Mainlayout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { students, loading, error } = useSelector((state) => state) || {};
    const [search, setSearch] = useState('');

    useEffect(() => {
        dispatch(fetchStudents());
    }, [dispatch]);

    const columns = [
        {
            title: 'Student Name',
            dataIndex: 'name',
            key: 'name',
            filteredValue: [search],
            onFilter: (value, record) => record.name.toLowerCase().includes(value.toLowerCase()),
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Gender',
            dataIndex: 'gender',
            key: 'gender',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
            render: (address) => `${address?.street || ''}, ${address?.city || ''}, ${address?.zip || ''}, ${address?.country || ''}`,
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: 'Courses',
            dataIndex: 'courses',
            key: 'courses',
            render: (courses) => courses?.join(', ') || '',
        },
        {
            title: 'GPA',
            dataIndex: 'gpa',
            key: 'gpa',
        },
    ];


    const handleAddStudent = () => {
        navigate('/add-student'); 
    };

    return (
        <Layout className="main-layout">
            <div className="search-container">
                <Search
                    placeholder="Search by name"
                    enterButton
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                    className="search-input"
                />
                 <Button className="add-customer-btn" onClick={handleAddStudent}>
                    + Add Student
                </Button>
            </div>
            <Content className="content">
                {error ? (
                    <p>Error: {error}</p>
                ) : (
                    <Table
                        columns={columns}
                        dataSource={students}
                        rowKey="id"
                        pagination={{ position: ['bottomCenter'] }}
                        className="table"
                        sticky
                        loading={loading} 
                    />
                )}
            </Content>
        </Layout>
    );
};

export default Mainlayout;
