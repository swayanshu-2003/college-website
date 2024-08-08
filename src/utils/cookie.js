export const setCookie = (name, value, days) => {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
};

export const getTokenFromCookie = (name) => {
    const cookies = document.cookie.split(';');
    let token = null;
    cookies.forEach(cookie => {
        const [cookieName, value] = cookie.trim().split('=');
        if (cookieName === name) {
            token = value;
        }
    });
    return token;
};

export const deleteCookie = (name) => {
    document.cookie = name + '=; path=/; expires=' + new Date(0).toUTCString();
};


