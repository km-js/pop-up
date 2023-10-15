const submitButton = document.querySelector('.submit-button');
// console.log(submitButton);
const okButton = document.querySelector('.ok-button')
const modal = document.querySelector('.modal')
// console.log(modal);

submitButton.addEventListener('click', function(){
modal.classList.add('slide-in')    
})

okButton.addEventListener('click', function(){
    modal.classList.remove('slide-in') 
})