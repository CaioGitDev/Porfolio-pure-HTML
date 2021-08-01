//async operations
document.addEventListener('DOMContentLoaded', async function () {
  const {
    getElementById,
    getAllElementsByClass,
    elementAddClassList,
    elementRemoveClassList } = await import('../components/reusable-functions.js');


  // ############ MENU SHOW / HIDE ###########################
  const navMenu = getElementById('nav-menu'),
    navToggle = getElementById('nav-toggle'),
    navClose = getElementById('nav-close');

  // menu show
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      elementAddClassList(navMenu, 'show-menu');
    })
  }

  //menu hide
  if (navClose) {
    navClose.addEventListener('click', () => {
      elementRemoveClassList(navMenu, 'show-menu');
    });
  }

  // ############ remove menu mobile ###########################
  const navLinkList = getAllElementsByClass('.nav__link');
  const linkAction = () => {
    const navMenu = getElementById('nav-menu');
    //remove the show menu class
    elementRemoveClassList(navMenu, 'show-menu')
  }
  navLinkList.forEach(x => x.addEventListener('click', linkAction))
  // ############ MENU SHOW / HIDE ###########################


});



// ############ ADD SKILLS PERCENTAGE WIDTH #########################
const elements = document.querySelectorAll('.skills__data');
elements.forEach(element => {
  var percentage = element.children[0].children[1].innerHTML;
  element.children[1].children[0].style.width = percentage;
});

// ############ ACCORDION SKILLS ###########################
const skillsContent = document.getElementsByClassName('skills__content'),
skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills() {
console.log(this)
let itemClass = this.parentNode.className
for (let i = 0; i < skillsContent.length; i++) {
  skillsContent[i].className = 'skills__content skills__close';

}
if (itemClass === 'skills__content skills__close') {
  this.parentNode.className = 'skills__content skills__open'
}
}
skillsHeader.forEach((el) => {
el.addEventListener('click', toggleSkills)
})
