
import Modal from "./modal.js";

class Card {
    constructor(userId, postId, title, name, surname, email, text) {
        this.postId = postId;
        this.title = title;
        this.name = name;
        this.email = email;
        this.surname = surname;
        this.text = text;
        this.userId = userId;
        this.container = document.createElement('div');
        this.containerTitle = document.createElement('h2')
        this.containerText = document.createElement('p')
        this.nameHtml = document.createElement('h3')
        this.surnameHtml = document.createElement('h3')
        this.emailHtml = document.createElement('h3')
        this.deleteButton = document.createElement('button');
        this.editPost = document.createElement('button')
        this.btnContainer = document.createElement('div')

    }

    createElements() {
        this.container.className = 'card';
        this.container.id = this.userId;
        this.btnContainer.className = 'btn_container'


        this.nameHtml.className = 'name';
        this.nameHtml.innerHTML = this.name;
        this.container.append(this.nameHtml)

        this.surnameHtml.className = 'surname';
        this.surnameHtml.innerHTML = this.surname;
        this.container.append(this.surnameHtml)

        this.emailHtml.className = 'email';
        this.emailHtml.innerHTML = this.email;
        this.container.append(this.emailHtml)


        this.containerTitle.className = 'title';
        this.containerTitle.innerHTML = this.title;
        this.container.append(this.containerTitle)

        this.containerText.className = 'text';
        this.containerText.innerHTML = this.text;
        this.container.append(this.containerText)
        this.container.append(this.btnContainer)

        this.deleteButton.className = 'delete_btn'
        this.deleteButton.innerHTML = 'Delete';

        this.btnContainer.append(this.deleteButton);

        this.editPost.className = 'edit_btn'
        this.editPost.innerHTML = 'Edit';

        this.btnContainer.append(this.editPost);

        this.deleteButton.addEventListener('click', () => {

            fetch(`https://ajax.test-danit.com/api/json/posts/${this.postId}`, {
                method: 'DELETE',
            })
                .then(response => console.log(response))



            this.container.remove()
        })

        this.editPost.addEventListener('click', () => {
            const modal = new Modal()
            modal.render('.container')
            modal.submitModal(this.postId, this.containerTitle, this.containerText)


        })



    }

    renderNewCard(selector) {
        this.createElements();
        document.querySelector(selector).prepend(this.container);
    }

    render(selector) {
        this.createElements();
        document.querySelector(selector).append(this.container);
    }
}

export default Card;