import { enviarFormulario } from "./request.js";

const formUser = document.getElementById('form-user');
const email = document.getElementById('email');
const password = document.getElementById('password');

formUser.addEventListener('submit', async (e) => {
    e.preventDefault();
    const body = JSON.stringify({
        email: email.value,
        password: password.value
    });
    const data = await enviarFormulario( body, '/login');
    if (data.error) {
        alert(data.error);
        return;
    } 
    sessionStorage.setItem('token', data.token);
    sessionStorage.setItem('nameUser', data.name);
    sessionStorage.setItem('profile', data.profile);
    redirect(data.profile);
})

const redirect = (profile) => {
    if (profile === 'admin') {
        window.location.href = './admin.html';
        return;
    }
    window.location.href = './user.html';
}