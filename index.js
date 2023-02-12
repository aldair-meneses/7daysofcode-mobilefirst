// const blurSection = function(element){
//     element.style.height = 100 + "%";
//     console.log('hello')
// }

// const unblurSection = function(element){
//     element.style.height = null;
// }

// const extraSection = document.querySelector('.extra');
// const extraButton = document.querySelector('#toggle-button');
// const body = document.querySelector('body');
// body.setAttribute('blur', 'off');

// extraButton.addEventListener('click', ()=> {
//     const isBlurred  = body.getAttribute('blur') === 'on';
//     if(!isBlurred){
//         blurSection(body);
//         body.setAttribute('blur', 'on');
//     }
//     if(isBlurred){
//         unblurSection(body);
//         body.setAttribute('blur', 'off');
//     }
// })

const extraButton = document.querySelector('#toggle-button');
const body = document.querySelector('body');

extraButton.addEventListener('click', ()=> {
     body.classList.toggle('extra--blur');
})