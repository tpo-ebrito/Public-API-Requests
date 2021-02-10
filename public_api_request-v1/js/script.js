'use strict'

function loadData() {
  return window
    .fetch('https://randomuser.me/api/?nat=us&results=12')
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      data.results.forEach((entry) => {
        console.log('a')
        const card = `<div class="card">
            <div class="card-img-container">
                <img class="card-img" src="${entry.picture.medium}" alt="profile picture">
            </div>
            <div class="card-info-container"></div>
        </div>`

        document.querySelector('#gallery').insertAdjacentHTML('beforeend', card)
      }) // 12
    // console.log(data.results[0].picture.medium)
    })
}
