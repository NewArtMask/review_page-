import {
    Form,
    Drawer,
    Input,
    Button,
    Rate
} from 'antd';
import { useState } from "react";
import { Link } from 'react-router-dom';
import emailInputPick from '../InputPicks/email.svg';
import phoneInputPick from '../InputPicks/phone-call.svg';
import userInputPick from '../InputPicks/user.svg';
import '../../node_modules/antd/dist/antd.css';
import si from './ReviewPage.module.css';
// import './ReviewPage.css';

const ReviewPage = () => {
    // const [isModalVisible, setIsModalVisible] = useState(false);

    // const showModal = () => {
    //     setIsModalVisible(true);
    // };

    // const handleOk = () => {
    //     setIsModalVisible(false);
    // };

    // const handleCancel = () => {
    //     setIsModalVisible(false);
    // };

    const [componentSize, setComponentSize] = useState('large');

    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };

    return (
        // <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        // <Modal visible={true}>
        <div className={si.form}>
            <Drawer
                // className={`${si.itemCenter} ${si.h1}`}
                title="Залишити коментар"
                width={720}
                // onClose={this.onClose}
                // visible={this.state.visible}
                visible={true}
            // bodyStyle={{ paddingBottom: 80 }}
            // footer={
            //     <div
            //         style={{
            //             textAlign: 'right',
            //         }}
            //     >
            //         <Button onClick={this.onClose} style={{ marginRight: 8 }}>
            //             Cancel
            //         </Button>
            //         <Button onClick={this.onClose} type="primary">
            //             Submit
            //         </Button>
            //     </div>
            // }
            >
                <Form
                    labelCol={{
                        span: 6,
                    }}
                    wrapperCol={{
                        span: 15,
                    }}
                    layout="horizontal"
                    initialValues={{
                        size: 'large',
                    }}
                    // onValuesChange={onFormLayoutChange}
                    size={'large'}
                >
                    {/* <h1 className={`${si.itemCenter} ${si.h1}`}>Залишити коментар</h1> */}
                    <p className={si.itemCenter}>
                        <Link to="/" className={`${si.link}`}>Коментар</Link>
                        <Link className={`${si.link}`}>Скарга</Link>
                    </p>
                    <p className={`${si.itemCenter} ${si.clubTitle}`}>Назва гуртка</p>
                    <Form.Item
                        label="Ім'я"
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your name!',
                            }
                        ]}
                    >
                        <Input placeholder="Юра Март"
                            className={si.inputPick}
                            style={{ "background-image": `url(${userInputPick})` }}
                        />
                    </Form.Item>
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            {
                                type: 'email',
                                message: 'The input is not valid e-mail!',
                            },
                            {
                                required: true,
                                message: 'Please input your e-mail!',
                            }
                        ]}
                    >
                        <Input placeholder="YuraMart@gmail.com"
                            className={si.inputPick}
                            style={{ "background-image": `url(${emailInputPick})` }}
                        />
                    </Form.Item>
                    <Form.Item
                        label="Телефон"
                        name="phone"
                        rules={[
                            {
                                pattern: /^[+]?[0-9]{2}[ ]?[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/,
                                message: 'The input is not valid phone number!',
                            },
                            {
                                required: true,
                                message: 'Please input your phone number!',
                            }
                        ]}
                    >
                        <Input placeholder="+38 (095) 123 45 67"
                            className={si.inputPick}
                            style={{ "background-image": `url(${phoneInputPick})` }}
                        />
                    </Form.Item>
                    <Form.Item name="rate" label="Оцінка">
                        <Rate />
                    </Form.Item>
                    <Form.Item name={['user', 'introduction']} label="Опис">
                        <Input.TextArea className={si.textArea} placeholder="Додайте опис" />
                    </Form.Item>
                    <Form.Item>
                        <Button className={`${si.btn} ${si.btnDisabled}`} type="primary" htmlType="submit">Надіслати</Button>
                    </Form.Item>
                </Form>

                {/* <Button type="primary" onClick={showModal}>
                Open Modal
            </Button> */}
                {/* <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}> */}
                {/* <Modal visible={true}>
                <h1>Залишити коментар</h1>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal> */}
            </Drawer>
        </div>
        // </Modal>
    );
}

export default ReviewPage;