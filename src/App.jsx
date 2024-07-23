import React from 'react';
import { Layout } from 'antd';
import './style/app.scss';
import Navbar from './components/navbars';
import Sidebar from './components/sidebar';
import Mainlayout from './components/mainlayout';

const App = () => {
    return (
        <Layout className="app">
            <Navbar />
            <Layout className="app-content">
                <Sidebar />
                <Mainlayout />
            </Layout>
        </Layout>
    );
};

export default App;
