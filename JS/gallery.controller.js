'use strict'

function onInitGallery(){
  renderGalleryImages()
}

function renderGallery(){
  addClass('hidden', '.editor-page')
  removeClass('hidden', '.gallery-page')
  renderGalleryImages()
}

function getGalleryImages() {
  return gImgs
}

function renderGalleryImages() {
  let elGallery = document.querySelector('.gallery-page')
  let imgs = getGalleryImages()
  let strHTML = imgs.map(img => `<img src="${img.url}" alt="" class="image" onclick="onUpdateImg(${img.id})"/>` )
    console.log(strHTML)
  elGallery.innerHTML = strHTML
}
// function renderGalleryImages() {

//   let strHtml = ''
//   for (var i = 1; i <= 18; i++) {
//       strHtml += `<img src="meme-imgs/${i}.jpg" onclick="onUpdateImg(this)">`
//   }
//   document.querySelector('.gallery-page').innerHTML = strHtml
// }