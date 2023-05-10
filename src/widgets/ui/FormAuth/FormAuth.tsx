import {Button, Form, Input} from "antd";
import {IFormAuthType, IFormDate} from "./FormAuth.type";

import './style.scss'


export const FormAuth = ({handleUserDate}: IFormAuthType) => {

    const handleSubmit = (values: IFormDate) => {
        handleUserDate(values)
    }

    return (
        <div className='form_auth'>
            <Form
                name="wrap"
                labelCol={{flex: '110px'}}
                labelAlign="left"
                labelWrap
                wrapperCol={{flex: 1}}
                colon={false}
                style={{maxWidth: 600}}
                onFinish={handleSubmit}
            >
                <Form.Item
                    label='Login'
                    name='login'
                    rules={[{required: true, message: 'Пустое поле!'}]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    label='Password'
                    name='password'
                    rules={[{required: true, message: 'Пустое поле!'}]}
                >
                    <Input.Password/>
                </Form.Item>
                <Form.Item wrapperCol={{offset: 8, span: 16}}>
                    <Button htmlType="submit">
                        Войти
                    </Button>
                </Form.Item>
            </Form>
        </div>

    );
};