"use strict";

// Espera a que la página se cargue completamente
document.addEventListener('DOMContentLoaded', function () {
    // Agrega un observador para detectar cambios en el estado de la autenticación
    firebase.auth().onAuthStateChanged(function (user) {
        // Verifica si el usuario está autenticado
        if (user) {
            // Actualiza el DOM con la información del usuario
            const nombreOutput = document.getElementById('nombreOutput');
            const emailOutput = document.getElementById('emailOutput');
            const avatarImg = document.getElementById('avatar'); 

            nombreOutput.textContent = user.displayName;
            emailOutput.textContent = user.email;

            // Verifica si el proveedor de autenticación es Google o Facebook y si hay una URL de avatar disponible
            if ((user.providerData[0].providerId === 'google.com' || user.providerData[0].providerId === 'facebook.com') && user.photoURL) {
                // Si es Google o Facebook, utiliza la URL de avatar de Google o Facebook
                avatarImg.src = user.photoURL;
            } 

            // Agrega un evento al botón de cerrar sesión
            const cerrarSesionBtn = document.getElementsByName('terminarSesión')[0];
            cerrarSesionBtn.addEventListener('click', function () {
                // Cierra la sesión y redirige a la página de inicio de sesión
                firebase.auth().signOut().then(function () {
                    window.location.href = 'https://patinoroblerojulioashley.github.io/Evaluacion3JAPR.github.io/login.html';
                }).catch(function (error) {
                    console.error('Error al cerrar sesión:', error);
                });
            });
        } else {
            // Si el usuario no está autenticado, redirige al inicio de sesión
            window.location.href = 'https://patinoroblerojulioashley.github.io/Evaluacion3JAPR.github.io/login.html';
        }
    });
});

