import axios from 'axios';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import '../style/login.css'


const Login = () => {


    const { handleSubmit, register, reset } = useForm()

    const [mensaje, setMensaje] = useState('')

    const navigate = useNavigate()

    const submit = (data) => {
        axios.post('https://e-commerce-api-v2.academlo.tech/api/v1/users/login', data)
            .then(res => {
                navigate('/')
                /*console.log(res.data.token)*/
                localStorage.setItem('token',res.data.token)
            })
                
            .catch(error =>{
                if (error.response.status===401) {
                    setMensaje('Credencial incorecto')
                    alert('Credencial incorecto')
                }
                console.log(error);
            })
    }

    return (
        <div className='conatiner-form-Login '>

            <Form className='form-card' onSubmit={handleSubmit(submit)}>
                <h1>Login</h1>

                <div className="container-user">
                    <h6>Email <br /> harvey@hotmail.com <br />Password <br />987654321</h6>
                </div>
                <Form.Group className='mb-3' controlId='email'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" {...register('email')} />
                </Form.Group>

                <Form.Group className='mb-3' controlId='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" {...register('password')} />
                </Form.Group>

                <Button className='button' variant='primary ' type='submit'>Submit</Button>

               { /*<h4>{mensaje}</h4>*/}

            </Form>

        </div>
    );
};

export default Login;