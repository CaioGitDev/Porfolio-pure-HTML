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

  // ############ MENU SHOW / HIDE ###########################

  // ############ MENU SHOW / HIDE ###########################


});