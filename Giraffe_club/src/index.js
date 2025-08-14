import './styles.scss';
document.querySelector('.callback-btn').addEventListener('click', ()=>{
    
    document.querySelector('.callback').style.visibility = 'visible'
})
document.querySelector('.callback-exit').addEventListener('click', ()=>{
    
    document.querySelector('.callback').style.visibility = 'hidden'
})