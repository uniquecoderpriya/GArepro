import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Button, Input, Layout } from 'antd';
import { fetchStudents } from '../action'; 
import 'tailwindcss/tailwind.css';
import '../style/mainlayout.scss';

const { Content } = Layout;
const { Search } = Input;

const columns = [
    {
        title: 'Student Name',
        dataIndex: 'name',
        key: 'name',
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
        render: (address) => `${address.street}, ${address.city}, ${address.zip}, ${address.country}`,
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
        render: (courses) => courses.join(', '),
    },
    {
        title: 'GPA',
        dataIndex: 'gpa',
        key: 'gpa',
    },
];

const Mainlayout = ({ colorBgContainer, borderRadiusLG }) => {
    const dispatch = useDispatch();
    const students = useSelector((state) => state.students);
    const loading = useSelector((state) => state.loading);
    const error = useSelector((state) => state.error);
    const [searchText, setSearchText] = useState('');
    const [filteredStudents, setFilteredStudents] = useState([]);

    useEffect(() => {
        dispatch(fetchStudents());
    }, [dispatch]);

    useEffect(() => {
        // Filter students based on search text
        const filtered = students.filter(student =>
            student.name.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredStudents(filtered);
    }, [searchText, students]);

    const handleSearch = (value) => {
        setSearchText(value);
    };

    return (
        <Layout className="main-layout">
            <div className="search-container" style={{ background: colorBgContainer }}>
                <Search
                    placeholder="Search by name"
                    enterButton
                    onSearch={handleSearch}
                    className="search-input"
                />
                <Button className="add-customer-btn">
                    + Add Student
                </Button>
            </div>
            <Content className="content" style={{ background: colorBgContainer, borderRadius: borderRadiusLG }}>
                {loading ? (
                    <p>Loading...</p>
                ) : error ? (
                    <p>Error: {error}</p>
                ) : (
                    <Table
                        columns={columns}
                        dataSource={filteredStudents}
                        rowKey="id"
                        pagination={{ position: ['bottomCenter'] }}
                        className="table"
                        sticky
                        // scroll={{ y: 'calc(100vh - 256px)' }}
                    />
                )}
            </Content>
        </Layout>
    );
};

export default Mainlayout;
