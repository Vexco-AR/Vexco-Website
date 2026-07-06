import { db } from './firebase-init.js';
import { collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

const form = document.getElementById('dispatchForm');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    try {
        await addDoc(collection(db, "dispatches"), {
            name: document.getElementById('name').value,
            location: document.getElementById('location').value,
            issue: document.getElementById('issue').value,
            timestamp: serverTimestamp()
        });
        alert("Dispatch Sent! I'll be there shortly.");
        form.reset();
    } catch (e) {
        alert("Error: " + e.message);
    }
});