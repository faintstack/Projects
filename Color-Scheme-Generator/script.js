// const paymentCard = document.getElementById('payment-card')
// const completeOrderBtn = document.getElementById('complete-order-btn')

// completeOrderBtn.addEventListener('click', function() {
//     console.log('button clicked!')
//     paymentCard.style.display = 'flex'
// })



document.addEventListener("DOMContentLoaded", function() {
    const paymentCard = document.getElementById('payment-card')
    const completeOrderBtn = document.getElementById('complete-order-btn')

    completeOrderBtn.addEventListener('click', function() {
        paymentCard.style.display = 'flex'
    })
})
