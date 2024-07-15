const botonLogout = document.getElementById('logout');
botonLogout.addEventListener('click', () => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('nameUser');
    sessionStorage.removeItem('profile');
    window.location.href = './index.html';
})