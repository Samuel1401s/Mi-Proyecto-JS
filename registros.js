import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";
import { auth } from "./firebase.js";


const regisform = document.querySelector("#regisform");

regisform.addEventListener("submit", async (e) => {
    e.preventDefault();
    const correo = document.getElementById("correoR").value;
    const contraseña = document.getElementById("contraseñaR").value;
    const confirmcontraseña = document.getElementById("confirmcontraseña").value;
    let nombre = document.getElementById("idnombre").value;
    console.log(nombre);
    
    
    
    if (nombre === "") {
        nombre = "Usuario";
    }
    
    try {
        const usercomplete = await createUserWithEmailAndPassword(auth, correo, contraseña);
        console.log(usercomplete);
                 (contraseña !== confirmcontraseña) 
        if (contraseña !== confirmcontraseña) {
            alert("Las contraseñas no coinciden. Por favor, verifica e intenta nuevamente.");
            return;
        }
        const registmodal = document.querySelector('#registmodal');
        if (document.activeElement) document.activeElement.blur();
        requestAnimationFrame(() => {
            let modal = bootstrap.Modal.getInstance(registmodal);
            if (modal) {
                modal.hide();
            } else {
                const closeBtn = registmodal.querySelector('[data-bs-dismiss="modal"]');
                if (closeBtn) closeBtn.click();
            }
        });

        const singupm = new bootstrap.Modal(document.getElementById('singupm'));
            singupm.show();
            document.getElementById('aceptar').onclick = () => {
                singupm.hide();
                window.location.href = "/y/index.html";}
    } catch (error) {
        console.log(error.message);
        console.log(error.code); 
        if (error.code === 'auth/email-already-in-use') {
            alert("El correo ya está en uso. Por favor, utiliza otro correo.");
        } else if (error.code === 'auth/missing-password') {
            alert("Por favor, ingresa una contraseña.");
        } else if (error.code === 'auth/weak-password') {
            alert("La contraseña es demasiado débil. Por favor, utiliza una contraseña más fuerte.");
        } else if (error.code === 'auth/invalid-email') {
            alert("El correo electrónico ingresado no es válido. Por favor, verifica tu correo.");
        }
    }
}
);

