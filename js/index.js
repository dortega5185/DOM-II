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


// #1 click
const h1Tag = document.querySelector('h1')

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

//#2 mouseover
const aTags = document.querySelectorAll('.nav-link')

aTags.forEach(atag => atag.addEventListener('mouseover', function() {
    aTags.forEach(item => {
      item.style.color = "blue";
    });
    
}))

//#3 copy
const toCopy = document.querySelector('.intro p')

toCopy.addEventListener('copy', function() {
    toCopy.style.backgroundColor = 'green';
})

//#4 dblclick
const doubleClk = document.querySelector('h2')

doubleClk.addEventListener('dblclick', function() {
    doubleClk.style.fontSize = '4rem';
})

//#5 mouseup
const grabP = document.querySelectorAll('.text-content p')

grabP.forEach(grab =>
  grab.addEventListener('mouseup', function() {
    grabP.forEach(item => {
      item.style.display = "none";
    });
  })
);

//#6 resize
window.addEventListener('resize', function() {
    document.querySelector('.text-content h2').innerHTML = `Mobile Bus Let's Go!`
})

//#7 mouseout
const signBtns = document.querySelectorAll('.destination .btn')
signBtns.forEach(sign =>
sign.addEventListener('mouseout', function() {
    signBtns.forEach(item => {
        item.style.color = 'purple';
    })
}))

//#8 load 
const loadOne = document.querySelector('.intro img')
loadOne.addEventListener('load', function(e) {
    loadOne.style.display = 'none';
    e.preventDefault();
})

//#9 mousemove
const move = document.querySelector('.content-destination img')
console.log(move);
move.addEventListener('mousemove', function() {
    move.style.width = '40%';
})

//#10 
const aFocus = document.querySelector("a");
aFocus.addEventListener("focus", function() {
  aFocus.style.marginRight = "20px";
});
