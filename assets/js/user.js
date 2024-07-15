import { mostrarJsonEnHtml, enviarFormulario } from "./request.js";
import { mostrarModalEditarUsuario } from "./modal.js";

const token = sessionStorage.getItem('token');
if (!token) {
    window.location.href = './index.html';
}
if (sessionStorage.getItem('profile') !== 'user') {
    window.location.href = './index.html';
}
const nameUser = sessionStorage.getItem('nameUser');

document.getElementById('user').innerHTML = `Bienvenido ${nameUser}`;
const botonPeliculas = document.getElementById('traer-peliculas');
const botonDirectores = document.getElementById('traer-directores');
const botonUsuarios = document.getElementById('traer-usuarios');
const botonComentarios = document.getElementById('traer-comentarios');
const formComment = document.getElementById('form-comment');
const method = document.getElementById('method');
const requestId = document.getElementById('requestId');
const comment = document.getElementById('comment');
const rating = document.getElementById('rating');

method.addEventListener('change', () => {
    requestId.placeholder = `Id de ${method.value === 'PUT' ? 'comentario' : 'pelicula'}`;
});

formComment.addEventListener('submit', async (e) => {
    e.preventDefault();
    let url = '/comments';
    const body = {
        comment: comment.value,
        rating: rating.value
    }
    if (method.value === 'PUT') {
        url += `/${requestId.value}`
    } else {
        body.movie_id = requestId.value;
    }
    const bodyString = JSON.stringify(body);
    const data = await enviarFormulario( bodyString, url, token, method.value);
    if (data.error) {
        alert(data.error);
        return;
    } 
    formComment.reset();
    mostrarJsonEnHtml('/comments', token);
});

const botonEditarUsuario = document.getElementById('boton-editar-usuario');

botonPeliculas.addEventListener('click', () => mostrarJsonEnHtml('/movies', token));
botonDirectores.addEventListener('click',() => mostrarJsonEnHtml('/directors', token));
botonUsuarios.addEventListener('click',() => mostrarJsonEnHtml('/users', token));
botonComentarios.addEventListener('click',() => mostrarJsonEnHtml('/comments', token));
botonEditarUsuario.addEventListener('click',() =>  mostrarModalEditarUsuario(token));