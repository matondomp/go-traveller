
import React, { useCallback } from "react";

import {  useNavigate } from 'react-router-dom'
import { useToast } from "../../hooks/toast"


import {
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
import { api } from "../../service/api";

export const SignUp:React.FC=()=>{
    const navegate = useNavigate()
    const { addToast } = useToast()



    const hendleSubmit = useCallback(async (data: any) => {
       
        try {
             if(data.email){
                 await api.post('/user',{name: data.name, email: data.email, password: data.password }) 
              }
              addToast({ 
                type:"success",
                title:"cadastrado com sucesso!", 
                desciption:"Cadastrado com sucesso !"
            })
            navegate("/detail")
        } catch (error) {

            addToast({
                type: "error",
                title: "Erro na autenticação",
                desciption: "Ocorreu um erro ao fazer login ,check as credencias"
            })
        }
    }, [])

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
                        label="Username"
                        name="name"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input  placeholder="E-mail" prefix={<FiMail />}/>
                    </Form.Item>

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
                   <InfoCircleOutlined /> Acesso restrito à sócios e moderadores
                </footer>

               
            </Content>

        </Container>
    )
}