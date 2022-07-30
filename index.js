
import newPostModal from "./addPostModal.js";
import {showCards} from "./showCards.js";


let addNewPostBtn = document.createElement('button')
addNewPostBtn.className = 'addpost_btn'
addNewPostBtn.innerHTML = 'Add new post';
const container = document.querySelector('.container')
document.body.prepend(addNewPostBtn)

addNewPostBtn.addEventListener('click', () => {

    const addModal = new newPostModal();
    addModal.render()
    addModal.createModal()
})
