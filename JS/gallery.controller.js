'use strict'

function onInitGallery(){
  renderGalleryImages()
}

// function renderGalleryImages() {

//   let elImgs = document.querySelector('.gallery-page')
//   let imgs = gImgs
//   let strHTML = imgs.map(img => `<img src="${img.url}" alt="" class="image" onclick="onUpdateImg(${img.id})"/>` ).join('')
//   console.log('strHTML ',strHTML)
//   elImgs.innerHTML = strHTML
// }

function renderGalleryImages() {

  let strHtml = ''
  for (var i = 1; i <= 18; i++) {
      strHtml += `<img src="meme-imgs/${i}.jpg" onclick="onUpdateImg(this)">`
  }
  document.querySelector('.gallery-page').innerHTML = strHtml
}