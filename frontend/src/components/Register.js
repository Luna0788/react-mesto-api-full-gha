import React from 'react';
import { Link } from "react-router-dom";
import UserDataForm from "./UserDataForm";


function Register({ onRegister }) {
    
    const [formValue, setFormValue] = React.useState({
        email: '',
        password: ''
    });

    function handleChange(e) {
        const {name, value} = e.target;

        setFormValue({
            ...formValue,
            [name]: value
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        onRegister(formValue.email, formValue.password);
    }

    return (
        <UserDataForm 
            title={"Регистрация"}
            formName={"signup"}
            buttonText={"Зарегистрироваться"}
            formValue={formValue}
            onChange={handleChange}
            onSubmit={handleSubmit}
        >
            <Link to="/sign-in" className="link link_type_register">
                Уже зарегистрированы? Войти
            </Link>
        </UserDataForm>
    )
}

export default Register;