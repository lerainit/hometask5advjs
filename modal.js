class Modal {
    constructor() {
        this._modalElement = document.createElement('div');
        this._backgroundContainer = document.createElement('div');
        this._mainContainer = document.createElement('div');
        this._contentContainer = document.createElement('div');
        this._buttonContainer = document.createElement('div');
        this._closeButton = document.createElement('div');
        this._submitButton = document.createElement('input')
        this.form = document.createElement('form')
    }
    closeModal() {
        this._modalElement.remove();
    }

    submitModal(postId, firstinput, secondinput) {
        this.form.addEventListener('submit', (event) => {

            event.preventDefault()

            const input = document.querySelectorAll('input')


            firstinput.innerHTML = input[0].value
            secondinput.innerHTML = input[1].value;
            fetch(`https://ajax.test-danit.com/api/json/posts/${postId}`, {
                method: 'PUT',
                body: JSON.stringify({
                    body: input[0].value,
                    id: 1,
                    title: input[1].value,
                    userId: 1
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(response => response.json())
                .then(json => console.log(json))
        })


    }

    createElements() {
        this._closeButton.classList.add('modal__close');
        this._submitButton.type = 'submit'
        this._closeButton.innerHTML = 'close';
        this._submitButton.value = 'submit';
        this._closeButton.addEventListener('click', this.closeModal.bind(this));
        this._mainContainer.append(this.form)
        this.form.insertAdjacentHTML('beforeend', ' <label for="title">Title:</label> <input type="text" id="title" value=""><label for="text">Text:</label> <input type="text" id="text" value="">')
        this.form.append(this._submitButton);
        this._backgroundContainer.classList.add('modal__background');
        this._backgroundContainer.addEventListener('click', this.closeModal.bind(this));
        this._contentContainer.classList.add('modal__content-wrapper');
        this._buttonContainer.classList.add('modal__button-wrapper');
        this._mainContainer.classList.add('modal__main-container');
        this._mainContainer.append(this._contentContainer);
        this._mainContainer.append(this._buttonContainer);
        this._mainContainer.append(this._closeButton);
        this._modalElement.classList.add('modal');
        this._modalElement.append(this._backgroundContainer);
        this._modalElement.append(this._mainContainer);
    }
    render(selector) {
        this.createElements();

        document.querySelector(selector).append(this._modalElement);

    }
}
export default Modal;