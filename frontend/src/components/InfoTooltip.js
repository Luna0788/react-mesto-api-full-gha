function InfoTooltip({ isOpen, onClose, isSuccess }) {
    return (
        <div className={`popup${isOpen ? ' popup_opened' : ''}`}>
            <div className="popup__container popup__container_type_tooltip">
                <div 
                    className={`popup__tooltip-image ${isSuccess ? `popup__tooltip-image_type_ok` : `popup__tooltip-image_type_fail`}`}
                ></div>
                <h2 className='popup__heading popup__heading_type_tooltip'>
                    {isSuccess ? "Вы успешно зарегистрировались!" : "Что-то пошло не так! Попробуйте ещё раз."}
                </h2>
                <button type="button" aria-label="Закрыть" className="button popup__toggle" onClick={ onClose }></button>
            </div>
        </div>
    );
}
export default InfoTooltip;