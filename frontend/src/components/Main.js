import React from "react";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick, onCardLike, cards, onCardDelete }) {
    const currentUser = React.useContext(CurrentUserContext);
    

    return (
        <main className="main">
            <section className="profile">
                <div className="profile__main">
                    <img src={ currentUser.avatar } alt="Аватар пользователя" className="profile__avatar"/>
                    <div className="profile__avatar-overlay" onClick={ onEditAvatar }></div>
                    <div className="profile__info">
                        <div className="profile__name-wrapper">
                            <h1 className="profile__name">{ currentUser.name }</h1>
                            <button className="button button_type_edit" aria-label="Редактировать" type="button" onClick={ onEditProfile }></button>
                        </div>
                        <p className="profile__additional">{ currentUser.about }</p>
                    </div>
                </div>
                <button className="button button_type_add" aria-label="Добавить" type="button" onClick={ onAddPlace }></button>
            </section>

            <section className="elements">
                <ul className="element-list">
                    {cards.map((item) => 
                        (
                        <Card
                            card = { item }
                            key = { item._id }
                            onCardClick={ onCardClick }
                            onCardLike={ onCardLike }
                            onCardDelete={ onCardDelete }
                        />
                        )
                    )}
                    
                </ul>
            </section>
        </main>
    );
}

export default Main;