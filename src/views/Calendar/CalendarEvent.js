import { Col, Row, Calendar, Alert, Typography } from 'antd';
import React from 'react';
import Layouts from '../../components/Layout/Layouts';
import moment from 'moment';
import './Calendar.css';

const { Title } = Typography;

const CalendarEvent = () => {

    return (
        <Layouts>
            
            <Row>
                <Col span={24}>
                    <Title level={2}> Calendar </Title>
                </Col>
                <Col span={14} className='calendar-container'>

                <Calendar />

                </Col>
            </Row>

        </Layouts>
    )

}

export default CalendarEvent;