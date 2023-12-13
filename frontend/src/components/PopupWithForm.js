function PopupWithForm({ title, formName, buttonText, children, isOpen, onClose, onSubmit }) {
    return (
        <div className={`popup popup_type_${formName}${isOpen ? ' popup_opened' : ''}`}>
            <div className={`popup__container popup__container_type_${formName}`}>
                <h2 className='popup__heading'>{ title }</h2>
                <form name={`${formName}-form`} className={`popup__${formName}-form popup__edit-form`} onSubmit={ onSubmit } noValidate>
                    <fieldset className="popup__input-container">
                        { children }
                        <button className={`button popup__button button_type_save`} type="submit">{ buttonText }</button>
                    </fieldset>
                </form>
                <button type="button" aria-label="Закрыть" className="button popup__toggle" onClick={ onClose }></button>
            </div>
        </div>
    );
}

export default PopupWithForm;