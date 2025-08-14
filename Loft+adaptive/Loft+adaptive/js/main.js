const burgerMenu = document.querySelector('.burger-menu');
const navMenu = document.querySelector('.container-grid nav');
burgerMenu.addEventListener('click',()=>{
    if (navMenu.style.left ==='0%'){
        
        navMenu.style.left = '100%'
    }
    else{
        navMenu.style.left = '0%'
    }
    // navMenu.style.left = '100%'? '0%': '100%'
    
    
})