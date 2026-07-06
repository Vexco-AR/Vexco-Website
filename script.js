import { db } from './firebase-init.js';

const form = document.getElementById('dispatchForm');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    db.collection("dispatches").add({
        name: document.getElementById('name').value,
        location: document.getElementById('location').value,
        issue: document.getElementById('issue').value,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    .then(() => {
        alert("Dispatch Sent!");
        form.reset();
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
        alert("Error: " + error.message);
    });
});