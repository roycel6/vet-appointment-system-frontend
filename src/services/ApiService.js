import { getJwtToken } from './JwtService.js';
// For handling very generic API requests

export const sendPostRequest = async (route, body) => {
    const response = await fetch(route, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: body
    }).then(response => {
      const data = response.json().then(data => {
        return data;
      });
      return data;
    }).catch(err => {
      console.log(err);
      return null;
    });
    return response;
}

export const sendPostRequestWithToken = async (route, body) => {
    const token = getJwtToken();
    if(token === null) {
        return null;
    }
    const response = await fetch(route, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + token
      },
      body: body
    }).then(response => {
      const data = response.json().then(data => {
        return data;
      });
      return data;
    }).catch(err => {
      console.log(err);
      return null;
    });
    return response;
}

export const getRequestWithToken = async (route) => {
    const token = getJwtToken();
    if(token === null) {
        return null;
    }
    const response = await fetch(route, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + token
      }
    }).then(response => {
      const data = response.json().then(data => {
        return data;
      });
      return data;
    }).catch(err => {
      console.log(err);
      return null;
    });
    return response;

    
}
