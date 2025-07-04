import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";
import { auth } from "./firebase.js";
const sesionForm = document.querySelector("#sesionform");

sesionForm.addEventListener("submit", async e => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    try {
        const user = await signInWithEmailAndPassword(auth, email, password);
        console.log(user);
        const iniciomodal = document.querySelector('#iniciomodal');
        if (document.activeElement) document.activeElement.blur();
        requestAnimationFrame(() => {
            let modal = bootstrap.Modal.getInstance(iniciomodal);
            if (modal) {
                modal.hide();
            } else {
                const closeBtn = iniciomodal.querySelector('[data-bs-dismiss="modal"]');
                if (closeBtn) closeBtn.click();
            }
            
            const exitoModal = new bootstrap.Modal(document.getElementById('exitoModal'));
            exitoModal.show();
            document.getElementById('btnAceptarExito').onclick = () => {
                exitoModal.hide();
                window.location.href ="y/app/pag2.html";
            };
        });
    } catch (error) {
        console.log(error.message);
        console.log(error.code);
        if (error.code === 'auth/user-not-found') {
            alert("El usuario no existe. Por favor, verifica tu correo.");
        } else if (error.code === 'auth/wrong-password') {
            alert("Contrasena incorrecta. Por favor, intenta nuevamente.");
        } else if (error.code === 'auth/invalid-email') {
            alert("El correo electronico ingresado no es valido. Por favor, verifica tu correo.");
        } else if (error.code === 'auth/invalid-credential') {
            alert("Credenciales invalidas. Por favor, verifica tu correo y contrasena.");
            
        }
    }
});