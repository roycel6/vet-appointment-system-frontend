

export const getJwtToken = () => {
    const token = localStorage.getItem("token");
    if(token === null) {
        window.alert("Token cannot be found in local storage, please login again!");
    }
    return token;
}

export const getJwtPayload = () => {
    const token = getJwtToken();
    if(token === null) {
        return null;
    }
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
}
