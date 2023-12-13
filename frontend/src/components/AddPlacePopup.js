import PopupWithForm from "./PopupWithForm";
import React from "react";


export default function AddPlacePopup({ isOpen, onClose, onAddPlace}) {
    const [placeName, setPlaceName] = React.useState('');
    const [link, setLink] = React.useState('');

    React.useEffect(() => {
        setPlaceName('');
        setLink('');
    }, [isOpen])

    function handleSubmit(e) {
        e.preventDefault();
        onAddPlace({
            name: placeName,
            link,
        })
    }

    return (
        <PopupWithForm
        title = {'Новое место'}
        formName = {'new-place'}
        buttonText = {'Создать'}
        isOpen={ isOpen }
        onClose={ onClose }
        onSubmit={ handleSubmit }
        >
          <label className="popup__field">
              <input type="text" value={placeName} onChange={e => setPlaceName(e.target.value)} id="place-name-input" className="popup__input popup__input_type_place-name" name="place-name" placeholder="Название" required minLength="2" maxLength="30"/>
              <span className="popup__input-error place-name-input-error"></span>
            </label>
            <label className="popup__field">
              <input type="url" value={link} onChange={e => setLink(e.target.value)} id="picture-ref-input" className="popup__input popup__input_type_picture-ref" name="picture-ref" placeholder="Ссылка на картинку" required/>
              <span className="popup__input-error picture-ref-input-error"></span>
            </label>
        </PopupWithForm>
    );
}