'use strict';
const posts = document.querySelectorAll(".post-items");
const searchButton = document.querySelector(".search-btn");
const inputField = document.querySelector(".search-input");
const postBody = document.querySelector(".post-body");
const secretMessage = document.querySelector(".search-message");

//addpost buttons
const addPost = document.querySelector(".add-posts");

//post titles
const secretTitles =document.querySelector(".post-items");


function handleSearch() {
        const searchTerm = inputField.value.trim().toLowerCase();
    
        posts.forEach(post => {
        const postTitle = post.querySelector('h6').innerText.trim().toLowerCase();
    
        if (postTitle.includes(searchTerm)) {
            post.style.display = 'block';
        } else {
            post.style.display = 'none';
        }
        });
    
        postBody.style.display = 'none';
        secretMessage.classList.remove("hidden-items");
}
inputField.addEventListener('keydown',handleSearch);


addPost.addEventListener('click', function () {
    
})