function getFirstSelector (selector) {
  var item = document.querySelector(selector)
  return item
}

function nestedTarget () {
  var item = document.querySelector('#nested .target')
  return item
}

function increaseRankBy (n) {
  var list = document.querySelectorAll('ul.ranked-list li')
  for (var i = 0; i < list.length; i++) {
    list[i].innerHTML = parseInt(list[i].innerHTML) + n
  }
}

function deepestChild () {
  let current = document.querySelector('#grand-node')
  let next = current.children[0]
  while(next) {
    current = next
    next = current.children[0]
  }
  return current
}
