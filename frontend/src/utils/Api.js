const apiOptions = {
  baseUrl: "http://localhost:3001",
  // credentials: 'include',
  headers: {
  //   authorization: "eeea63f2-ab02-4294-9d67-84220d1763e5",
    "Content-Type": "application/json",
    "Accept":"application/json",
  },
};


class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
    // this._credentials = options.credentials;
  }

  //проверка наличия ошибок, возвращает json если ОК и сообщение об ошибке, если не ОК
  _checkStatus(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  }

  //Загрузка информации о пользователе с сервера
  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: this._headers,
      credentials: "include",
    })
    .then((res) => this._checkStatus(res));
  }

  //Загрузка карточек
  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      method: "GET",
      headers: this._headers,
      credentials: "include",
    })
    .then((res) => this._checkStatus(res));
  }

  //редактирование профиля
  patchUserInfo( name, about ) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      credentials: "include",
      body: JSON.stringify({ name, about }),
    })
    .then((res) => this._checkStatus(res));
  }

  //Добавление новой карточки
  postNewCard({ name, link }) {
    return fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: this._headers,
      credentials: "include",
      body: JSON.stringify({ name, link }),
    })
    .then((res) => this._checkStatus(res));
  }

  //Удаление карточки
  deleteCard(cardID) {
    return fetch(`${this._baseUrl}/cards/${cardID}`, {
      method: 'DELETE',
      headers: this._headers,
      credentials: "include",
    })
    .then((res) => this._checkStatus(res));
  }

  //Постановка лайка
  putLikes(cardID) {
    return fetch(`${this._baseUrl}/cards/${cardID}/likes`, {
      method: 'PUT',
      headers: this._headers,
      credentials: "include",
    })
    .then((res) => this._checkStatus(res));
  }

  //удаление лайка
  deleteLikes(cardID) {
    return fetch(`${this._baseUrl}/cards/${cardID}/likes`, {
      method: 'DELETE',
      headers: this._headers,
      credentials: "include",
    })
    .then((res) => this._checkStatus(res));
  }

  //изменение статуса лайка
  changeLikeCardStatus(cardID, isLiked) {
    if (isLiked) {
      return fetch(`${this._baseUrl}/cards/${cardID}/likes`, {
        method: 'DELETE',
        headers: this._headers,
        credentials: "include",
      })
      .then((res) => this._checkStatus(res));
    }
    else {
      return fetch(`${this._baseUrl}/cards/${cardID}/likes`, {
        method: 'PUT',
        headers: this._headers,
        credentials: "include",
      })
      .then((res) => this._checkStatus(res));
    }
  }

  //обновление аватара
  patchAvatar({ avatar }) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      credentials: "include",
      body: JSON.stringify({ avatar }),
    })
    .then((res) => this._checkStatus(res));
  }
}

const api = new Api(apiOptions);
export default api;
