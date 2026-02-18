import { menuArray } from './data.js'

const paymentCard = document.getElementById('payment-card')
const completeOrderBtn = document.getElementById('complete-order-btn')
const paymentBtn = document.getElementById('payment-btn')
const forRtNow = document.getElementById('load')
const paymentForm = document.getElementById('payment-form')

let order = []

document.addEventListener('click', function(e){
    if(e.target.dataset.add) {
        order.push(renderMenu.target.dataset.add)
        renderOrder()
    }
})

function renderOrder(){
    for(let item of order){
        const hh = menuArray.find(u => u.id === item)
        orderHtml += ``
    }
    document.getElementById('order').innerHTML = orderHtml
}

function getMenuHtml(){
    let menuHtml = ``
    
    menuArray.forEach(function(item){
        menuHtml += `
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
                        <button class="add-btn" id="addbtn"
                        aria-label="the button represents add label"
                        data-add="${item.id}">+</button>
                    </section>
                </article>

                <div class="divider"></div>
            `
    })
    return menuHtml
}

function renderMenu(){
    document.getElementById('menu').innerHTML = getMenuHtml()
}

renderMenu()

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