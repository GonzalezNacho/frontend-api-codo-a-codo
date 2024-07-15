import { mostrarJsonEnHtml, enviarFormulario } from "./request.js";

const botonPeliculas = document.getElementById('traer-peliculas');
const botonDirectores = document.getElementById('traer-directores');
const formUser = document.getElementById('form-user');
const email = document.getElementById('email');
const password = document.getElementById('password');
const name = document.getElementById('name');
const lastname = document.getElementById('lastname');

botonPeliculas.addEventListener('click', () => mostrarJsonEnHtml('/movies'));
botonDirectores.addEventListener('click',() => mostrarJsonEnHtml('/directors'));

formUser.addEventListener('submit', async (e) => {
    e.preventDefault();
    const body = JSON.stringify({
        name: name.value,
        lastname: lastname.value,
        email: email.value,
        password: password.value
    });
    const data = await enviarFormulario( body, '/users');
});