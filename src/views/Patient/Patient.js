import { PageHeader, Button, Table, Space, Modal, Input, Form  } from 'antd';

import React, {useState} from 'react';
import Layouts  from '../../components/Layout/Layouts';

import {
    SearchOutlined, 
    UserAddOutlined,
    DeleteOutlined,
    EditOutlined,
    UserOutlined
} from '@ant-design/icons';

const { Search } = Input;

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
        <Space size="middle">
            <a><UserOutlined /> </a>
            <a><EditOutlined /> </a>
            <a><DeleteOutlined /> </a>
        </Space>
        ),
    },
];

const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
];


const Patient = () => {
    
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setConfirmLoading(true);
        setTimeout(() => {
            setConfirmLoading(false);
          }, 2000);

    };
    
    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <Layouts>
         
            <PageHeader
                title='Patient'
                extra={[
                    <Search placeholder="search" size="large" style={{ width: 200 }} />,
                    <Button 
                    size="large" 
                    onClick={showModal} 
                    icon={<UserAddOutlined />}
                    >Add Patient</Button>]
                }
            > 
            </PageHeader>

            <Modal title="Add Patient" 
            visible={isModalVisible} 
            confirmLoading={confirmLoading}
            onOk={handleOk} 
            onCancel={handleCancel}>
                <Form
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 14 }}
                onOk={handleOk}
                >
                    <Form.Item
                        label="Name"
                        name="Name"
                        rules={[{ required: true, message: 'Please input your Name!' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="LastName"
                        name="LastName"
                        rules={[{ required: true, message: 'Please input your Lastname!' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Address"
                        name="Address"
                        rules={[{ required: true, message: 'Please input your Address!' }]}>
                        <Input />
                    </Form.Item>
                </Form>
            </Modal>

            <Table className='table' columns={columns} dataSource={data} />
              

        </Layouts>
    )

}

export default Patient;