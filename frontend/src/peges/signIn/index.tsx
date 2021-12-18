
import React, { useRef, useCallback } from "react";
import { FormHandles } from "@unform/core"
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from "../../hooks/auth"
import { useToast } from "../../hooks/toast"


import {
    UserOutlined,
    InfoCircleOutlined,
} from '@ant-design/icons';

import {
    FiMail,
    FiLock
} from 'react-icons/fi'
import {  Checkbox } from "antd";

import {
    Container,
    Background,
    Form, 
    CheckBoxDiv,
    Input,
    Content,
    Button
} from './style'

//import { Input } from '../../compoments/input/index'
//import { Button } from '../../compoments/buttom/index'

interface AuthTypes {
    email: string
    password: string
}

export const SignIn: React.FC = () => {
    const formRef = useRef<FormHandles>(null)
    const navegate = useNavigate()
    const { signIn, user } = useAuth()
    const { addToast } = useToast()
    console.log(user)



    const hendleSubmit = useCallback(async (data: any) => {
       
        try {
             if(data.email){
                 await signIn({ email: data.email, password: data.password })
              }
            navegate("/detail")
        } catch (error) {

            addToast({
                type: "error",
                title: "Erro na autenticação",
                desciption: "Ocorreu um erro ao fazer login ,check as credencias"
            })
        }
    }, [signIn])

    const onFinish = (values: any) => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
      };

    return (
        <Container>
            <Background />
            <Content>

                <h1>Fazer Login</h1>
                <Form
                    name="basic"
                    layout="vertical"
                    initialValues={{ remember: true }}
                    onFinish={hendleSubmit}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="E-mail"
                        name="email"
                        rules={[{ required: true, message: 'Please input your E-mail!' }]}
                    >
                        <Input  placeholder="E-mail" prefix={<FiMail />}/>
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input type="password" placeholder="Password" prefix={<FiLock />} />
                    </Form.Item>

                   <Button htmlType="submit">Acessar plataforma</Button>
                </Form>
                <footer>
                   <div><InfoCircleOutlined /> Acesso restrito à sócios e moderadores</div>
                   <div><span><Link to='/create'>Cria já sua conta</Link></span></div>
                </footer>

               
            </Content>

        </Container>
    )
}