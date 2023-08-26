'use strict'


function setPassingPages() {
  const elGalleryContainer = document.querySelector('.gallery-page')
  elGalleryContainer.classList.add('hide')
  const elCanvasContainer = document.querySelector('.editor-page')
  elCanvasContainer.classList.remove('hide')
}
function moveToGallery() {
  const elGalleryContainer = document.querySelector('.editor-page')
  elGalleryContainer.classList.add('hide')
  const elCanvasContainer = document.querySelector('.gallery-page')
  elCanvasContainer.classList.remove('hide')
}

function onInitGallery(){
  renderGalleryImages()
}

function getGalleryImages() {
  return gImgs
}

function renderGalleryImages() {
  let elGallery = document.querySelector('.gallery-img')
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