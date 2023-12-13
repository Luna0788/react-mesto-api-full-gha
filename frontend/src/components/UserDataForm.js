function UserDataForm({ title, formName, buttonText, children, formValue, onChange, onSubmit }) {
    return (
        <div className="user-data-form__container">
            <h2 className='user-data-form__heading'>{ title }</h2>
            <form 
                name={`${formName}-form`} 
                className={`user-data-form user-data-form_type_${formName}`} 
                noValidate
                onSubmit={ onSubmit }
            >
                <fieldset className="user-data-form__input-container">
                    <label className="user-data-form__field">
                        <input 
                            type="email"
                            value={formValue.email}
                            onChange={onChange} 
                            id="email-input" 
                            className="user-data-form__input" 
                            name="email" 
                            placeholder="Email" 
                            required 
                        />
                        <span className="popup__input-error name-input-error"></span>
                    </label>
                    <label className="user-data-form__field">
                        <input 
                            type="password"
                            value={formValue.password}
                            onChange={onChange}  
                            id="password-input" 
                            className="user-data-form__input" 
                            name="password" 
                            placeholder="Пароль" 
                            required 
                        />
                        <span className="popup__input-error about-input-error"></span>
                    </label>
                </fieldset>
                <button className="button user-data-form__button" type="submit">{ buttonText }</button>
            </form>
            { children }
        </div>
    )
}
export default UserDataForm;