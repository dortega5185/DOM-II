// function clickEventHandler(event) {
//   console.log(event.type + '!!!!!!!!!!!!!!!!!!!!!!!!!!!')
//   console.log(event.target)
// }
// document.querySelector('a').addEventListener('click', clickEventHandler)
// document.querySelector('nav').addEventListener('click', clickEventHandler)
// document.querySelector('header').addEventListener('click', clickEventHandler)
// document.body.addEventListener('click', clickEventHandler)
// document.addEventListener('click', clickEventHandler)
// window.addEventListener('click', clickEventHandler)

// homeLink.addEventListener(
//     'click', //string with the name of the event
//     () => {
//         //things we want happening when this
//         //link gets clicked
//         console.log('the link got clicked')
//     }
// )

// document.querySelectorAll('a').addEventListener('mouseenter', function( event ) {
//     event.target.style.color = 'purple';
//     setTimeout(function() {
//         event.target.style.color = '';
// }, 500);
// }, false);


// #1
const h1Tag = document.querySelector('h1')

// function clickFunction(e) {
//   e.preventDefault();
//   h1Tag.style.backgroundColor = 'yellow';
// }

// function changeContent() {
//   h1Tag.innerHTML = 'Welcome!'
// }

h1Tag.addEventListener('click', function(e){
    e.preventDefault();
    h1Tag.style.backgroundColor = 'yellow';
    setTimeout(function() {
    h1Tag.style.backgroundColor = "";
  }, 1000);
}, false);

h1Tag.addEventListener('click', function(){
    h1Tag.innerHTML = 'Welcome!';
    setTimeout(function() {
    h1Tag.innerHTML = "Fun Bus";
  }, 1000);
}, false);

//#2 
const aTags = document.querySelectorAll('.nav-link')

aTags.forEach(atag => atag.addEventListener('mouseover', function() {
    aTags.forEach(item => {
      item.style.color = "blue";
    });
    
}))


// aTags.addEventListener('hover', function() {
    
    // e.preventDefault();
    // hover.aTags.style.color = 'blue';
    // setTimeout(function() {
    // aTags.style.color = 'black';
    // }, 1000);
// })
// , false);
