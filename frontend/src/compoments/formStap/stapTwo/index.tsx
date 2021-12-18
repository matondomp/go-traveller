import React, { FC, useState } from "react";
import { InfoCircleOutlined } from '@ant-design/icons';
import ImgCrop from 'antd-img-crop';

import { 
     Upload,
     Button as _Button,
     Form as _form
 } from 'antd';
import { UploadOutlined, StarOutlined } from '@ant-design/icons';

import 'antd/dist/antd.css'

import { AddressForm } from "../../address";
import { Cards } from "../../category/card";
import { FooterButton } from "../../footerButton";


import {
  
    Main,
    Form,
    Input,
    DopZone,
    Label,
    Title,
    DivItem,
    Main_,
    Textarea

} from "./style";

interface IProps{
    feildData:any
}

export const StapTwo:React.FC<IProps>=({ children, feildData })=>{
    return(
        <Main>
        <Title>
            <div>
                01
            </div>
            <h1>Adicione um local</h1>
        </Title>

           <Form 
                ref={feildData.formRef}
                 name="StapTwo"
                initialValues={{ remember: true }}
                onFinish={feildData.onFinish}
                autoComplete="off" 
                onSubmit={feildData.hendleSubimit}
                >
            <Label><h1>Dados da local</h1></Label>


            <DivItem>
            <_form.Item
               label="Nome do local"
               name="name"
                rules={[
                    {
                      required: true,
                      message: 'Porfavor digite o nome do local!',
                    }
                ]}
            >
                  <div style={{width:"700px"}}>
                  <Input />
                  </div>
            </_form.Item>
              
            </DivItem>

            <DivItem>
            <_form.Item
                label="Imagem"
                name="avatar"
                rules={[
                    {
                      required: true,
                      message: 'Porfavor escolhe uma imagem!',
                    }
                ]}
            >
                <DopZone  style={{width:"700px"}}>
                     <ImgCrop rotate>
                         <input type="file" onChange={feildData.getFileFromInput}/>
                    </ImgCrop> 
                </DopZone>
                </_form.Item>
            </DivItem>

            <DivItem>
                 <_form.Item
                     label="Descrição"
                     name="description"
                    rules={[
                        {
                            required: true,
                            message: 'Porfavor digite a descrição do local!',
                        }
                    ]}
                 >
                     <Textarea placeholder="" style={{width:"700px"}} name="description" />
                 </_form.Item>
           </DivItem>

            <Cards />

            <AddressForm />
            
            <_form.Item >
                   
                <FooterButton color='#51B853' buttonDescription="Concluir cadastro"  htmlType="submit" onClick={() =>function(){}} >
                   <InfoCircleOutlined /> Preencha todos os dados com cuidado.
                </FooterButton>  
            </_form.Item>
          

        </Form>



    </Main>

    )
}