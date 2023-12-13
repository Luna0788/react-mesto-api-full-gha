import React from "react";
import PopupWithForm from "./PopupWithForm";

export default function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
    const avatarRef = React.useRef();

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateAvatar({
            avatar: avatarRef.current.value,
          });
    }

    return (
        <PopupWithForm
            title = {'Обновить аватар'}
            formName = {'avatar-edit'}
            buttonText = {'Сохранить'}
            isOpen={ isOpen }
            onClose={ onClose }
            onSubmit={ handleSubmit }
            >
            <label className="popup__field">
                <input type="url" ref={avatarRef} id="avatar-ref-input" className="popup__input popup__input_type_avatar-ref" name="avatar-ref" placeholder="Ссылка на картинку" required/>
                <span className="popup__input-error avatar-ref-input-error"></span>
            </label>
        </PopupWithForm>
    )
}