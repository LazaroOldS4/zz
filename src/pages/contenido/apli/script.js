// Variables de usuario
let currentUser = null;
const users = [];
const posts = [];

// Elementos del DOM
const app = document.getElementById("app");
const dashboard = document.getElementById("dashboard");
const loginButton = document.getElementById("login");
const signupButton = document.getElementById("signup");
const uploadInput = document.getElementById("upload");
const postsContainer = document.getElementById("posts");

// Función para iniciar sesión
loginButton.addEventListener("click", () => {
    const username = prompt("Nombre de usuario:");
    if (username) {
        currentUser = username;
        app.style.display = "none";
        dashboard.style.display = "block";
        displayPosts();
    }
});

// Función para registrarse
signupButton.addEventListener("click", () => {
    const username = prompt("Elije un nombre de usuario:");
    if (username) {
        users.push(username);
        currentUser = username;
        app.style.display = "none";
        dashboard.style.display = "block";
        displayPosts();
    }
});

// Función para subir una foto
uploadInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (file) {
        const post = {
            user: currentUser,
            image: URL.createObjectURL(file),
            reactions: 0,
            comments: [],
        };
        posts.push(post);
        displayPosts();
    }
});

// Función para mostrar publicaciones
function displayPosts() {
    postsContainer.innerHTML = "";
    posts.forEach((post, index) => {
        const postElement = document.createElement("div");
        postElement.innerHTML = `
            <img src="${post.image}" alt="Imagen">
            <button class="react" data-index="${index}">Reaccionar (${post.reactions})</button>
            <button class="comment" data-index="${index}">Comentar</button>
        `;
        postElement.querySelector(".react").addEventListener("click", reactToPost);
        postElement.querySelector(".comment").addEventListener("click", commentOnPost);
        postsContainer.appendChild(postElement);
    });
}

// Función para reaccionar a una publicación
function reactToPost(e) {
    const index = e.target.getAttribute("data-index");
    if (index !== null) {
        posts[index].reactions++;
        displayPosts();
    }
}

// Función para comentar en una publicación
function commentOnPost(e) {
    const index = e.target.getAttribute("data-index");
    if (index !== null) {
        const comment = prompt("Escribe un comentario:");
        if (comment) {
            posts[index].comments.push({ user: currentUser, text: comment });
            displayPosts();
        }
    }
}
