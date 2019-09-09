function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget(target, nested) {
  return document.getElementById(nested).getElementsByClassName(target);
}
