import Card from "./card.js";


class newPostModal {
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

  createModal() {
    this.form.addEventListener('submit', (event) => {

      event.preventDefault()

      const input = document.querySelectorAll('input')

      fetch(`https://ajax.test-danit.com/api/json/posts`, {
        method: 'POST',
        body: JSON.stringify({

          body: input[1].value,
          id: 1,
          title: input[0].value,
          userId: 1,

        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => response.json())
        .then(json => console.log(json))


      const card = document.querySelector('.card')
      const newCardName = card.children[0].innerHTML;
      const newCardEmail = card.children[2].innerHTML;



      new Card(1, 1, input[0].value, newCardName, '', newCardEmail, input[1].value).renderNewCard('div')


    })




  }


  createElements() {
    this._closeButton.classList.add('modal__close');

    this._submitButton.type = 'submit'
    this._closeButton.innerHTML = 'close';
    this._submitButton.value = 'submit';
    this._closeButton.addEventListener('click', this.closeModal.bind(this));
    this._mainContainer.append(this.form)
    this.form.insertAdjacentHTML('beforeend', '<label for="title">Title:</label> <input type="text" id="title" value=""><label for="text">Text:</label> <input type="text" id="text" value="">')
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
  render() {
    this.createElements();
    const container = document.querySelector('.container')
    container.append(this._modalElement);

  }
}
export default newPostModal