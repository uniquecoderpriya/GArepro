import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Layout } from 'antd';
import './style/app.scss';
import Navbar from './components/navbars';
import Sidebar from './components/sidebar';
import Mainlayout from './components/mainlayout';
import AddStudentForm from './pages/form '; 

const App = () => {
    return (
        <Router>
            <Layout className="app">
                <Navbar />
                <Layout className="app-content">
                    <Sidebar />
                    <Routes>
                        <Route path="/" element={<Mainlayout />} />
                        <Route path="/add-student" element={<AddStudentForm />} />
                    </Routes>
                </Layout>
            </Layout>
        </Router>
    );
};

export default App;
