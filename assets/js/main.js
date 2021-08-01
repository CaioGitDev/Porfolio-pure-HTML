// SEEDS
const seedQuaficationsList= [
  {
    title: "Profissional Técnico de Multimédia",
    subtitle: "Portugal - Salvaterra de Magos",
    date: "2012 - 2014",
    type: "education",
  },
  {
    title: "Diploma Técnico grau 5 -Técnico Profissional de Sistemas de Informação",
    subtitle: "Portugal - Santarem",
    date: "2015 - 2017",
    type: "education",
  },
]

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

  // ############ MENU SHOW / HIDE ###########################



});




