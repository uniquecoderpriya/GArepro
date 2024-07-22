
import React from 'react';
import { Layout, theme } from 'antd';
import 'tailwindcss/tailwind.css';
import './style/App.scss';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Mainlayout from './components/Mainlayout';

const App = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Layout className="app">
            <Navbar />
            <Layout className="app-content">
                <Sidebar colorBgContainer={colorBgContainer} />
                <Mainlayout colorBgContainer={colorBgContainer} borderRadiusLG={borderRadiusLG} />
            </Layout>
        </Layout>
    );
};

export default App;
