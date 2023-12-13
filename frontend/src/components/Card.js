import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card ({ card, onCardClick, onCardLike, onCardDelete }) {
    const currentUser = React.useContext(CurrentUserContext);
    const isOwn = card.owner === currentUser._id;
    const isLiked = card.likes.some(id => id === currentUser._id);
    const cardLikeButtonClassName = ( 
        `button element__like-button${isLiked ? ' element__like-button_active' : ''}` 
      );

    function handleClick() {
        onCardClick(card);
    };

    function handleLikeClick() {
        onCardLike(card);
    }

    function handleDeleteClick() {
        onCardDelete(card);
    }

    return (
        <li  className="element">
            <img src={ card.link } alt={`Фотография ${ card.name }`} className="element__photo" onClick={ handleClick }/>
            <div className="element__description">
                <p className="element__name">{ card.name }</p>
                <div className="element__like-container">
                    <button className={cardLikeButtonClassName} type="button" onClick={ handleLikeClick }></button>
                    <p className="element__like-counter">{ card.likes && card.likes.length ? card.likes.length : ''}</p>
                </div>
            </div>
            {isOwn && <button type="button" aria-label="Удалить" className="button element__delete-button" onClick={ handleDeleteClick }></button>}
        </li>
    )
}

export default Card;