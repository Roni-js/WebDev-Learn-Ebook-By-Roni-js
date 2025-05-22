// Nav Btns:

const htmlBtn = document.getElementById('html-btn')
const htmlBtn2 = document.getElementById('html-btn2')
const cssBtn = document.getElementById('css-btn')
const jsBtn = document.getElementById('js-btn')
const abtBtn = document.getElementById('about-btn')
const jsNxtBtn = document.getElementById('js-next-btn')
const htmlNxtBtn = document.getElementById('html-next-btn')
const cssNxtBtn = document.getElementById('css-next-btn')
const htmlPrevBtn = document.getElementById('html-prev-btn')
const cssPrevBtn = document.getElementById('css-prev-btn')
const jsPrevBtn = document.getElementById('js-prev-btn')
const mcqBtn = document.getElementById('mcq-btn')

// Sections:

const htmlSec = document.getElementById('html-section')
const cssSec = document.getElementById('css-section')
const jsSec = document.getElementById('js-section')
const desSec = document.getElementById('description-section')
const conSec = document.getElementById('contact-section')
const welSec = document.getElementById('welcome-page')




htmlBtn.addEventListener('click', () => {
    welSec.style.display = "none"
    htmlSec.style.display = "block"
    console.log('html btn clicked');
})
htmlBtn2.addEventListener('click', () => {
    welSec.style.display = "none"
    htmlSec.style.display = "block"
    console.log('html btn clicked');
})

cssBtn.addEventListener('click', () => {
    welSec.style.display = "none"
    cssSec.style.display = "block"
    console.log('css btn clicked');
})

jsBtn.addEventListener('click', () => {
    welSec.style.display = "none"
    jsSec.style.display = "block"
    console.log('js btn clicked');
})

abtBtn.addEventListener('click', () => {
    welSec.style.display = "none"
    desSec.style.display = "block"
    console.log('about btn clicked');
})

window.addEventListener('mouseleave', (e) => {
  console.log('e.key:', e.key);
})
 document.getElementById('navLogo').addEventListener('click', function() {
      location.reload(); 
    });
    htmlNxtBtn.addEventListener('click', () => {
        htmlSec.style.display = "none"
        cssSec.style.display = "block"
        console.log('html next btn clicked');
    })
    cssNxtBtn.addEventListener('click', () => {
        cssSec.style.display = "none"
        jsSec.style.display = "block"
        console.log('css next btn clicked');
    })
    jsPrevBtn.addEventListener('click', () => {
        jsSec.style.display = "none"
        cssSec.style.display = "block"
        console.log('js prev btn clicked');
    })
    cssPrevBtn.addEventListener('click', () => {
        cssSec.style.display = "none"
        htmlSec.style.display = "block"
        console.log('css prev btn clicked');
    })
    mcqBtn.addEventListener('click', () => {
        alert('This Feature is Coming Soon!')
    })