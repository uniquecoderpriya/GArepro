
import React from 'react';
import { Layout, theme } from 'antd';
import 'tailwindcss/tailwind.css';
import './style/App.scss';
import Navbar from './components/navbars.jsx';
import Sidebar from './components/sidebar.jsx';
import Mainlayout from './components/mainlayout.jsx';

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
