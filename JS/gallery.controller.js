'use strict'

function onInitGallery(){
  renderImages()
  console.log('onInit')
}

function renderImages(){
console.log('rend')
  let strHtml = ''
  for (var i = 1; i <= 18; i++) {
      strHtml += `<img src="meme-imgs/${i}.jpg" onclick="onSelectImg(this)">`
  }
  document.querySelector('.gallery').innerHTML = strHtml
}