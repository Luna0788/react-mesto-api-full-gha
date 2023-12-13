function ImagePopup({ card, onClose }) {
    return (
        <div className={`popup popup_type_image${card ? ' popup_opened' : ''}`}>
            <div className="popup__container popup__container_type_image">
                <img src={card ? card.link : '#'} alt={`Фотография ${card ? card.name : '.'}`} className="popup__image"/>
                <h2 className='popup__heading popup__heading_type_image'>{card ? card.name : '#'}</h2>
                <button type="button" aria-label="Закрыть" className="button popup__toggle" onClick={ onClose }></button>
            </div>
        </div>
    );
}

export default ImagePopup;