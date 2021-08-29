import React, { useState } from 'react';

import { Col, Layout, Button, Row, Drawer } from 'antd';
import { CgMenuLeftAlt } from 'react-icons/cg';
import { FiLogOut } from "react-icons/fi";
import { Link } from 'react-router-dom';
import './Layout.css';

import LeftMenu from '../Menu/LeftMenu';

const { Header, Content } = Layout;


const Layouts = (props) => {


    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    }

    const onClose = () => {
        setVisible(false);
    }


    return (
        <>

            <Header className='header'>
                <Row>
                    <Col span={7}>
                        <Button className='menu-btn' onClick={showDrawer}>
                            <CgMenuLeftAlt />
                        </Button> 
                    </Col>
                    <Col span={8} offset={8} className='nav-right'> 
                        <Link to='/login'> Logout <FiLogOut  /> </Link> 
                    </Col>
                </Row>
            </Header>

            <Drawer 
                title="ERGO"
                placement="left"
                closable={false}
                onClose={onClose}
                visible={visible}>

                <LeftMenu />

            </Drawer>


            <Content>{props.children}</Content>

        </>
    )
}
export default Layouts;