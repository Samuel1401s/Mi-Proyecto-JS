import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";
import { auth } from "./firebase.js";

const regisform = document.querySelector("#regisform");


regisform.addEventListener("submit", async (e) => {
    e.preventDefault();
    const correo = document.getElementById("correoR").value
    const contraseña = document.getElementById("contraseñaR").value

    try {
        const usercomplete = await createUserWithEmailAndPassword(auth, correo, contraseña)
        console.log(usercomplete)


        const registmodal = document.querySelector('#registmodal')
        const modal = bootstrap.Modal.getInstance(registmodal)
    
        modal.hide();

         const backdrop = document.querySelector('.modal-backdrop');
        if (backdrop) {
            backdrop.parentNode.removeChild(backdrop);
        }

        document.activeElement.blur();
    } catch (error) {
        console.log(error.mensage);
        console.log(error.code);
        if (error.code === 'auth/email-already-in-use') {
            alert("El correo ya está en uso. Por favor, utiliza otro correo.");
            if (error.code === 'auth/missing-password') {
                alert("Por favor, ingresa una contraseña.");
                if (error.code === 'auth/weak-password') {
                    alert("La contraseña es demasiado débil. Por favor, utiliza una contraseña más fuerte.");
                    if (error.code === 'auth/invalid-email') {
                        alert("El correo electrónico ingresado no es válido. Por favor, verifica tu correo.");
                        if (error.code) {
                            alert("Algo salió mal. Por favor, intenta nuevamente más tarde.");
                        }
                    }
                }
            }



        }





    }
});