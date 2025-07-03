
import { logcheck } from "./app/logcheck.js";
import "./app/registros.js";
import "./app/afuera.js ";
import "./app/logcheck.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";
import { auth } from "./app/firebase.js";


onAuthStateChanged(auth, async (user) => {
    logcheck(user)
});
