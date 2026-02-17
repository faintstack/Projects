import { menuArray } from './data.js'

const paymentCard = document.getElementById('payment-card')
const completeOrderBtn = document.getElementById('complete-order-btn')
const paymentBtn = document.getElementById('payment-btn')
const forRtNow = document.getElementById('load')
const paymentForm = document.getElementById('payment-form')

function getFeedHtml(){
    let feedHtml = ``
    
    menuArray.forEach(function(item){
        feedHtml += `
        <section class="order-items">
                <article class="food-container">
                    <section class="left">
                        <img src="${item.emoji}" class="food-img">
                        <div class="info-food">
                            <h3 class="food-name">${item.name}</h3>
                            <p class="food-desc">${item.ingredients}</p>
                            <h4 class="food-price">$${item.price}</h4>
                        </div>
                    </section>

                    <section class="right">
                        <button class="add-btn" aria-label="the button represents add label">+</button>
                    </section>
                </article>

                <div class="divider"></div>
            `
    })

    return feedHtml
}

function render(){
    document.getElementById('feed').innerHTML = getFeedHtml()
}

render()

completeOrderBtn.addEventListener('click', function() {
    paymentCard.style.display = 'flex'
})

paymentForm.addEventListener('submit', function(e) {
    e.preventDefault()

    const paymentFormData = new FormData(paymentForm)
    const fullName = paymentFormData.get('fullName')

    paymentCard.style.display = 'none'

    forRtNow.innerHTML = `
    <div id="thanks-box">
        <p id="thanks-text">Thanks, ${fullName}! Your order is on its way!</p>
    </div>`
})