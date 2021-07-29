export function getElementById (elementId)  {
  return document.getElementById(elementId);
}
export function getAllElementsByClass (classList)  {
  return document.querySelectorAll(classList);
}
export function elementAddClassList (element, classLists) {
  element.classList.add(classLists);
}
export function elementRemoveClassList (element, classLists) {
  element.classList.remove(classLists);
}