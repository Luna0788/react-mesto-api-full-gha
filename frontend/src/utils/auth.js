export const BASE_URL = 'http://localhost:3001';
// export  { register, authorize, checkToken };
export  { register, authorize, signout, checkToken };

function checkResult(res) {
    if (res.ok) {
        return res.json();
    }
    else {
        return Promise.reject(`Ошибка: ${res.status}`);
    }
}

function register (email, password) {
    return fetch(`${BASE_URL}/signup`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password }),
    })
    .then((res) => checkResult(res))
}

function authorize (email, password) {
    return fetch(`${BASE_URL}/signin`, {
        method: "POST",
        credentials: "include",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password }),
    })
    .then((res) => checkResult(res))
}

function signout () {
    return fetch(`${BASE_URL}/signout`, {
        method: "GET",
        credentials: "include",
        headers: {
            "Content-Type": "application/json"
        },
    })
    .then((res) => checkResult(res))
}

function checkToken() {
    return fetch(`${BASE_URL}/users/me`, {
        method: "GET",
        credentials: "include",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            // "Authorization" : `Bearer ${token}`
        },
    })
    .then((res) => checkResult(res))
}
