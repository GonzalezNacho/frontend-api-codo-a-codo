export const link ='https://api-codo-a-codo.onrender.com';

export async function mostrarJsonEnHtml(query, token = null, method = 'GET') {
    const Authorization = token ? `Bearer ${token}` : '';
    const response = await fetch(`${link}${query}`, {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            Authorization
        },
    });
    const data = await response.json();
    results.innerHTML = JSON.stringify(data,null,2);
}

export async function enviarFormulario( body, url, token = null, method = 'POST') {
    const Authorization = token ? `Bearer ${token}` : '';
    const config = {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            Authorization
        },
        body,
    }
    console.log(typeof(body));
    const response = await fetch(`${link}${url}`, config);
    const data = await response.json();
    return data;
}