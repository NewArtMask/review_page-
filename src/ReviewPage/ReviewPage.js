import {
    Form,
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
        <div>
            <Form
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 14,
                }}
                layout="horizontal"
                initialValues={{
                    size: 'large',
                }}
                // onValuesChange={onFormLayoutChange}
                size={'large'}
            >
                <h1>Залишити коментар</h1>
                <Link>Коментар</Link>
                <Link>Скарга</Link>
                <p>Назва гуртка</p>
                <Form.Item label="Ім'я">
                    <Input placeholder="Юра Март" />
                    <img src={userInputPick} alt="userPick" style={{ width: "25px" }} />
                </Form.Item>
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            type: 'email',
                            message: 'The input is not valid E-mail!',
                        },
                        {
                            required: true,
                            message: 'Please input your E-mail!',
                        },
                    ]}>
                    <Input placeholder="YuraMart@gmail.com" />
                    <img src={emailInputPick} alt="emailPick" style={{ width: "30px" }} />
                </Form.Item>
                <Form.Item label="Телефон">
                    <Input placeholder="+38 (095) 123 45 67" />
                    <img src={phoneInputPick} alt="phonePick" style={{ width: "25px" }} />
                </Form.Item>
                <Form.Item name="rate" label="Оцінка">
                    <Rate />
                </Form.Item>
                <Form.Item name={['user', 'introduction']} label="Опис">
                    <Input.TextArea placeholder="Додайте опис" />
                </Form.Item>
                <Form.Item label="">
                    <Button type="primary" htmlType="submit">Надіслати</Button>
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
        </div >
    );
}

export default ReviewPage;