import React from 'react';
import Layout from '../../components/Layout/Layouts';
import { IoPartlySunnyOutline } from "react-icons/io5";
import './Dashboard.css';
import { Col, Row } from 'antd';

import DateObject from "react-date-object";
const Dashboard = () => {
    var date = new DateObject();

    return (
        <Layout>
            <Row>
                <Col span={12} className='dashboard'>
                    <IoPartlySunnyOutline className='icon'/>
                    <h2> Guten Tag </h2>
                    <h2> Admin </h2>
                    <h2> {date.format("YYYY/MM/DD hh:mm:ss.SSS a")} </h2>
                </Col>
            </Row>
        </Layout>
    )

}

export default Dashboard;