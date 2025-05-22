const mainProduct = document.querySelector('.product-1');
const imgs = document.querySelectorAll('.products-img');

const cartIcon = document.querySelector('.cart-icon');
const cartStorage = document.querySelector('.cart-storage');
const container = document.querySelector('.container')

cartIcon.addEventListener('click', function() {
    if ( cartStorage.style.display === 'none') {
        cartStorage.style.display = 'block';
        container.innerHTML = `
            <p class='empty'>Your cart is empty</p>
        `;
        container.querySelector('.empty').style.fontWeight = '700';
        container.querySelector('.empty').style.textAlign = 'center';
        container.querySelector('.empty').style.padding = '30px 0px'
    } else {
        cartStorage.style.display = 'none'
    }
})

let counter = 0;

const countMinus = document.querySelector('.counter-minus');
const countPlus = document.querySelector('.counter-plus');
const countNum = document.querySelector('.counter-num');
const cartCounterMini = document.querySelector('.cart-counter-mini');

countMinus.addEventListener('click', function() {
    counter --;
    countNum.textContent = counter;
    cartCounterMini.textContent = counter ;
    if ( cartStorage.style.display === 'none') {
        cartStorage.style.display = 'block';
        container.innerHTML = `
            <div class="cart-style" style="display: flex; flex-direction: row; align-items:center; justify-content: space-evenly;">
                <img src="${mainProduct.src}" alt="" style="width: 50px; height: 50px; border-radius: 10px;">
                <div>
                <p style='margin: 0; color: hsl(219, 9%, 45%);'>Fall Limited Edition Sneakers</p>
                <span style='color: hsl(219, 9%, 45%);'>$125.00 x ${counter} <span style='font-weight: 700; color: black;'>$${125 * counter}.00</span></span>
                </div>
                <img src="./images/icon-delete.svg" alt="" style="width: 20px; height: 30px;" class="delete-btn">
            </div>
            <button style='width: 300px; margin-top: 20px; height: 40px; background-color: hsl(26, 100%, 55%); border-radius: 10px; color: black; font-weight: 700; '>Checkout</button>
        `;
        
    } else {
        cartStorage.style.display = 'none'
    }

    
    let deleteBtn = container.querySelector('.delete-btn').addEventListener('click',function() {
        container.innerHTML = ``;
        container.innerHTML = `
            <p class='empty'>Your cart is empty</p>
        `;
        container.querySelector('.empty').style.fontWeight = '700';
        container.querySelector('.empty').style.textAlign = 'center';
        container.querySelector('.empty').style.padding = '30px 0px';
        countNum.textContent = 0;
        counter = 0
    })


    if( counter === 0 ){
        container.innerHTML = ``;
        container.innerHTML = `
            <p class='empty'>Your cart is empty</p>
        `;
        container.querySelector('.empty').style.fontWeight = '700';
        container.querySelector('.empty').style.textAlign = 'center';
        container.querySelector('.empty').style.padding = '30px 0px';
        countNum.textContent = 0;
    }
})

countPlus.addEventListener('click', function() {
    counter ++;
    countNum.textContent = counter;
    cartCounterMini.textContent = counter ;
    if ( cartStorage.style.display === 'none') {
        cartStorage.style.display = 'block';
        container.innerHTML = `
            <div class="cart-style" style="display: flex; flex-direction: row; align-items:center; justify-content: space-evenly;">
                <img src="${mainProduct.src}" alt="" style="width: 50px; height: 50px; border-radius: 10px;">
                <div>
                <p style='margin: 0; color: hsl(219, 9%, 45%);'>Fall Limited Edition Sneakers</p>
                <span style='color: hsl(219, 9%, 45%);'>$125.00 x ${counter} <span style='font-weight: 700; color: black;'>$${125 * counter}.00</span></span>
                </div>
                <img src="./images/icon-delete.svg" alt="" style="width: 20px; height: 30px;" class="delete-btn">
            </div>
            <button style='width: 300px; margin-top: 20px; height: 40px; background-color: hsl(26, 100%, 55%); border-radius: 10px; color: black; font-weight: 700; '>Checkout</button>
        `;
        
    } else {
        cartStorage.style.display = 'none'
    }

    
    let deleteBtn = container.querySelector('.delete-btn').addEventListener('click',function() {
        container.innerHTML = ``;
        container.innerHTML = `
            <p class='empty'>Your cart is empty</p>
        `;
        container.querySelector('.empty').style.fontWeight = '700';
        container.querySelector('.empty').style.textAlign = 'center';
        container.querySelector('.empty').style.padding = '30px 0px';
        countNum.textContent = 0;
        counter = 0
    })


    if( counter === 0 ){
        container.innerHTML = ``;
        container.innerHTML = `
            <p class='empty'>Your cart is empty</p>
        `;
        container.querySelector('.empty').style.fontWeight = '700';
        container.querySelector('.empty').style.textAlign = 'center';
        container.querySelector('.empty').style.padding = '30px 0px';
        countNum.textContent = 0;
    }
})

imgs.forEach(img => {
    img.addEventListener('click', function() {
        mainProduct.src = img.src;
    })
});


document.querySelector('.add-btn').addEventListener('click', function() {
    if ( cartStorage.style.display === 'none') {
        cartStorage.style.display = 'block';
        container.innerHTML = `
            <div class="cart-style" style="display: flex; flex-direction: row; align-items:center; justify-content: space-evenly;">
                <img src="${mainProduct.src}" alt="" style="width: 50px; height: 50px; border-radius: 10px;">
                <div>
                <p style='margin: 0; color: hsl(219, 9%, 45%);'>Fall Limited Edition Sneakers</p>
                <span style='color: hsl(219, 9%, 45%);'>$125.00 x ${counter} <span style='font-weight: 700; color: black;'>$${125 * counter}.00</span></span>
                </div>
                <img src="./images/icon-delete.svg" alt="" style="width: 20px; height: 30px;" class="delete-btn">
            </div>
            <button style='width: 300px; margin-top: 20px; height: 40px; background-color: hsl(26, 100%, 55%); border-radius: 10px; color: black; font-weight: 700; '>Checkout</button>
        `;
        
    } else {
        cartStorage.style.display = 'none'
    }

    
    let deleteBtn = container.querySelector('.delete-btn').addEventListener('click',function() {
        container.innerHTML = ``;
        container.innerHTML = `
            <p class='empty'>Your cart is empty</p>
        `;
        container.querySelector('.empty').style.fontWeight = '700';
        container.querySelector('.empty').style.textAlign = 'center';
        container.querySelector('.empty').style.padding = '30px 0px';
        countNum.textContent = 0;
        counter = 0
    })


    if( counter === 0 ){
        container.innerHTML = ``;
        container.innerHTML = `
            <p class='empty'>Your cart is empty</p>
        `;
        container.querySelector('.empty').style.fontWeight = '700';
        container.querySelector('.empty').style.textAlign = 'center';
        container.querySelector('.empty').style.padding = '30px 0px';
        countNum.textContent = 0;
    }

});

const burger = document.querySelector('.burger');
const menu2 = document.querySelector('.menu2');
const closeBtn = document.querySelector('.close-btn')
burger.addEventListener('click', function() {
    menu2.classList.add('show')
})
closeBtn.addEventListener('click', function() {
    menu2.classList.remove('show')
})