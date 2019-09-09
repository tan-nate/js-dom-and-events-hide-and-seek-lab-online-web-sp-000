function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget(target, nested) {
  return document.querySelector(`#${nested} .${target}`);
}
