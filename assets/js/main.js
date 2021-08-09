// SEEDS


const qualificationTemplateLeft = () => {
  return {
    "<>": "div", "class": "qualification__data", "html": [
      {
        "<>": "div", "html": [
          { "<>": "h3", "class": "qualification__title", "html": "${title}" },
          { "<>": "span", "class": "qualification__subtitle", "html": "${subtitle}" },
          {
            "<>": "div", "class": "qualification__calendar", "html": [
              { "<>": "i", "class": "uil uil-calendar-alt", "html": "" },
              { "<>": "span", "html": "${calendar}" }
            ]
          }
        ]
      },
      {
        "<>": "div", "html": [
          { "<>": "span", "class": "qualification__rounder", "html": "" },
          { "<>": "span", "class": "qualification__line", "html": "" }
        ]
      }
    ]
  }
}

const qualificationTemplateRight = () => {
  return {
    "<>": "div", "class": "qualification__data", "html": [
      { "<>": "div", "html": "" },
      {
        "<>": "div", "html": [
          { "<>": "span", "class": "qualification__rounder", "html": "" },
          { "<>": "span", "class": "qualification__line", "html": "" }
        ]
      },
      {
        "<>": "div", "html": [
          { "<>": "h3", "class": "qualification__title", "html": "${title}\n                " },
          { "<>": "span", "class": "qualification__subtitle", "html": "${subtitle}" },
          {
            "<>": "div", "class": "qualification__calendar", "html": [
              { "<>": "i", "class": "uil uil-calendar-alt", "html": "" },
              { "<>": "span", "html": "${calendar}" }
            ]
          }
        ]
      }
    ]
  }
}

const setQualificationsLists = () => {
  let educationData = "";
  let workData = [];
  let educationContent = document.getElementById("educationContent")
  let workContent = document.getElementById("workContent")

  //define the position of qualification true=left false = right
  let dataPositionEducation = true;
  let dataPositionWork = true;
  const buildQualificationContent = (position, qualification) => {
    if (position) {
      return json2html.render(qualification, qualificationTemplateLeft())
    } else {
      return json2html.render(qualification, qualificationTemplateRight())
    }
  }
  const removeClassLastChild = element => {
    element.querySelectorAll("div span")[1].classList.remove("qualification__line")
    element.querySelectorAll("div span")[3].classList.remove("qualification__line")
  }
  seedQuaficationsList.forEach(qualification => {
    switch (qualification.type) {
      case "education":
        educationData += buildQualificationContent(dataPositionEducation, qualification)
        dataPositionEducation = (dataPositionEducation) ? false : true;
        break;
      case "work":
        workData += buildQualificationContent(dataPositionWork, qualification)
        dataPositionWork = (dataPositionWork) ? false : true;
        break;
      default:
        break;
    }

  })
  educationContent.innerHTML = educationData
  workContent.innerHTML = workData
  let educationLastChild = educationContent.lastChild
  let workLastChild = workContent.lastChild
  removeClassLastChild(educationLastChild)
  removeClassLastChild(workLastChild)
}

import('../components/reusable-functions.js').then(({ getElementById,
  getAllElementsByClass,
  elementAddClassList,
  elementRemoveClassList,
  getSelectorAll,
  getElementsByClassName }) => {

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

  // ############ ADD SKILLS PERCENTAGE WIDTH #########################
  const elements = getSelectorAll('.skills__data');
  elements.forEach(element => {
    var percentage = element.children[0].children[1].innerHTML;
    element.children[1].children[0].style.width = percentage;
  });

  // ############ ACCORDION SKILLS ###########################
  const skillsContent = getElementsByClassName('skills__content'),
    skillsHeader = getSelectorAll('.skills__header')

  function toggleSkills() {
    const classNameOpen = 'skills__content skills__open'
    const classNameClose = 'skills__content skills__close'
    let itemClass = this.parentNode.className

    for (let i = 0; i < skillsContent.length; i++) {
      skillsContent[i].className = classNameClose;
    }
    if (itemClass === classNameClose) {
      this.parentNode.className = classNameOpen
    }
  }
  skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)
  })

  // ############ QUALIFICATIONS TABS ###########################
  const tabs = getSelectorAll('[data-target]'),
    tabContents = getSelectorAll('[data-content]'),
    qualificationActiveClass = 'qualification__active'

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = document.querySelector(tab.dataset.target)

      tabContents.forEach(tabContent => {
        elementRemoveClassList(tabContent, qualificationActiveClass)
      })
      elementAddClassList(target, qualificationActiveClass)

      tabs.forEach(tab => {
        elementRemoveClassList(tab, qualificationActiveClass)
      })
      elementAddClassList(tab, qualificationActiveClass)
    })
  })

  // ############ qualification set lists ###########################
  setQualificationsLists();


  // ############ SERVICES MODAL ###########################
  const modalViews = getSelectorAll('.services__modal'),
    modalBtns = getSelectorAll('.services__button'),
    modalCloses = getSelectorAll('.services__modal-close')

  let modal = function (modalClick) {
    modalViews[modalClick].classList.add('active-modal')
  }

  modalBtns.forEach((modalBtn, index) => {
    modalBtn.addEventListener('click', () => {
      modal(index)
    })
  })

  modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
      modalViews.forEach((modalView) => {
        modalView.classList.remove('active-modal')
      })
    })
  })

});

// PORTFOLIO SWIPER
let swiperPortfolio = new Swiper('.portifolio__container', {
  cssMode: true,
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
})

// TESTIMONIAL SWIPER
let swiperTestimonial = new Swiper('.testimonial__container', {
  loop: true,
  grabCursor: true,
  spaceBetween: 48,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },
  breakpoints: {
    568: {
      slidesPerView: 2
    }
  }
})

// SCROLL SECTIONS ACTIVE LINK
const sections = document.querySelectorAll('section[id]')
console.log(sections)
function scrollActive() {
  const scrollY = window.pageYOffset

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 50
    const sectionId = current.getAttribute('id')

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      const elm = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
      if (elm) {
        elm.classList.add('active-link')
      }

    } else {
      const elm = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
      if (elm) {
        elm.classList.remove('active-link')
      }

    }
  })
}

window.addEventListener('scroll', scrollActive)


// add nav bar header box shadow
function scrollHeader() {
  const nav = document.getElementById('header')

  if (this.scrollY >= 80)
    nav.classList.add('scroll-header')
  else
    nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

// show scroll to top
function scrollToTop() {
  const scrollTop = document.getElementById('scroll-up')

  if(this.scrollY >= 80)
    scrollTop.classList.add('show-scroll')
  else
  scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollToTop)