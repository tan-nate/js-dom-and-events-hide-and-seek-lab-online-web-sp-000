function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function deepestChild() {
  let node = document.getElementById( 'grand-node' )
  let nextNode = node.children[ 0 ]

  while ( nextNode ) {
    node = nextNode
    nextNode = node.children[ 0 ]
  }

  return node
}

function increaseRankBy(n) {
  const lis = document
    .getElementById('app')
    .querySelectorAll('ul.ranked-list li');
   
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + 1;
  }
}