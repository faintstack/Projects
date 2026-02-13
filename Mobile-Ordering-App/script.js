const paymentCard = document.getElementById('payment-card')
const completeOrderBtn = document.getElementById('complete-order-btn')
const paymentBtn = document.getElementById('payment-btn')
const forRtNow = document.getElementById('load')
const paymentForm = document.getElementById('payment-form')

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