"use strict;"
const GoogleBtn=document.querySelector('#btn-google');
GoogleBtn.addEventListener('click', e =>{
    const provider= new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
        .then(result=>{
            console.log('Logeo exitoso')
        })
        .catch(err=>{
            console.log('Logeo erroneo')
            console.log('Código de error:', err.code);
            console.log('Mensaje de error:', err.message);
        })
})
const FacebookBtn=document.querySelector('#btn-Facebook');
FacebookBtn.addEventListener('click', e =>{
    e.preventDefault();
    const provider= new firebase.auth.FacebookAuthProvider();
    auth.signInWithPopup(provider)
        .then(result=>{
            console.log('Logeo exitoso')
        })
        .catch(err=>{
            console.log('Logeo erroneo')
            console.log('Código de error:', err.code);
            console.log('Mensaje de error:', err.message);
        })
})
