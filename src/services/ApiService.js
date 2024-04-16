
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
