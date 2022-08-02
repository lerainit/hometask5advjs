import Card from "./card.js"


export const showCards = () => {

    fetch('https://ajax.test-danit.com/api/json/posts',{method:'GET'} ).then(response => response.json()).then(result => {

        result.forEach(({ id, userId, title, body }) => {

            new Card(userId, id, title, '', '', '', body).render('div')

        }).catch(err => console.log(err))

        fetch('https://ajax.test-danit.com/api/json/users',{method:'GET'}).then(response => response.json()).then(result => {

            const cards = document.querySelectorAll('.card')


            cards.forEach(card => {

                result.forEach(({ id, name, email }) => {
                    if (id === +card.id) {

                        card.children[0].innerHTML = name
                    }
                    if (id === +card.id) {

                        card.children[2].innerHTML = email

                    }
                })

            })

        })

    }).catch(err => console.log(err))
}

showCards()

