import React from 'react';
import UserDataForm from "./UserDataForm";

function Login({ onLogin }) {
    const [formValue, setFormValue] = React.useState({
        email: '',
        password: ''
    });

    function onChange(e) {
        const {name, value} = e.target;

        setFormValue({
            ...formValue,
            [name]: value
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (!formValue.email || !formValue.password) return;
        onLogin(formValue.email, formValue.password);
    }

    return (
         <UserDataForm 
            title={"Вход"}
            formName={"signin"}
            buttonText={"Войти"}
            formValue={formValue}
            onChange={onChange}
            onSubmit={handleSubmit}
         />
    )
}

export default Login;