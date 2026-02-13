// document.addEventListener('DOMContentLoaded', function() {
//     console.log('DOM loaded!');
    
//     const paymentCard = document.getElementById('payment-card');
//     const completeOrderBtn = document.getElementById('complete-order-btn');
    
//     console.log('Payment card:', paymentCard);
//     console.log('Complete order button:', completeOrderBtn);
    
//     if (completeOrderBtn) {
//         completeOrderBtn.addEventListener('click', function() {
//             console.log('Button clicked!');
//             paymentCard.style.display = 'flex';
//         });
//     } else {
//         console.log('Button not found!');
//     }
// });


// document.addEventListener("DOMContentLoaded", function() {
    
// })


const paymentCard = document.getElementById('payment-card')
const completeOrderBtn = document.getElementById('complete-order-btn')

completeOrderBtn.addEventListener('click', function() {
    paymentCard.style.display = 'flex'
})