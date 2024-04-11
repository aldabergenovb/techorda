import { Form, Input, Button } from 'antd';


function LoginForm({ login }) {
    const onFinish = (values) => {
        console.log('values:', values);
        login(values);
    };
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Form name="loginForm" onFinish={onFinish} style={{ width: 350, padding: 20, border: '1px solid #d9d9d9', borderRadius: 5 }}>
                <h1 style={{ textAlign: 'center' }}>Вход на портал</h1>
                <Form.Item
                    name="email"
                    label="Email"
                    rules={[
                        {
                            required: true,
                            message: 'Введите логин',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="password"
                    label="Пароль"
                    rules={[
                        {
                            required: true,
                            message: 'Введите пароль',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                        Войти
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default LoginForm;