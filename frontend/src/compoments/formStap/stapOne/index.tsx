import React, { FC, useState } from "react";
import { InfoCircleOutlined } from '@ant-design/icons';
import { 
     Upload,
     Button as _Button,
     Form as _form
 } from 'antd';
import { UploadOutlined, StarOutlined } from '@ant-design/icons';
import ImgCrop from 'antd-img-crop';

import 'antd/dist/antd.css'


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

import { FooterButton } from "../../footerButton";

interface IProps{
    feildData:any
}

export const StapOne:React.FC<IProps>=({ children, feildData })=>{
    return(
     
        <Main>
        <Title>
            <div>
                01
            </div>
            <h1>Adicione uma cidade</h1>
        </Title>

       <Form 
            ref={feildData.formRef}
            name="StapOne"
            initialValues={{ remember: true }}
            onFinish={feildData.onFinish}
            autoComplete="off" 
       
       onSubmit={feildData.hendleSubimit}>
            <Label><h1>Dados da cidade</h1></Label>
         
            <DivItem >
                <_form.Item
                
                     label="Nome da cidade"
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: 'Porfavor digite o nome da cidade!',
                        }
                    ]}
                >
                    <div style={{width:"700px"}}>

                      <Input  />
                    </div>
                </_form.Item>
              
            </DivItem>

          
            <DivItem>
                <_form.Item
                     label="Ficheiro"
                    name="avatar"
                    rules={[
                        {
                            required: true,
                            message: 'Porfavor digite o Ficheiro!',
                        }
                    ]}
                >
                   
                 <DopZone style={{width:"700px"}}>
                <ImgCrop rotate >
                         <input type="file" onChange={feildData.getFileFromInput}/>
                    </ImgCrop> 
              </DopZone>

                 </_form.Item>

             
            </DivItem>

           <DivItem>
            <_form.Item
               name="description"
               label="descrição da cidade"
               rules={[
                   {
                       required: true,
                       message: 'Porfavor digite a descrição da cidade!',
                   }
               ]}
            >
          
                 <Textarea  style={{width:"700px"}} />
           
                 </_form.Item>
            </DivItem>
            
           
            <_form.Item >
            
               <FooterButton color='#115D8C' buttonDescription="Próximo"  htmlType="submit" onClick={() =>function(){}}>
                <InfoCircleOutlined /> Preencha todos os dados com cuidado.
            </FooterButton>
            </_form.Item>
             

        </Form> 
    </Main>

)
}