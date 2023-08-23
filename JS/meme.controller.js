'use strict'

let gElCanvas
let gCtx

function onInitMeme() {
  gElCanvas = document.querySelector('canvas')
  gCtx = gElCanvas.getContext('2d')
}

function onSelectImg(elImg) {
  gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
}

function renderMeme() {
  const meme = getMeme()
  const { txt, size, color } = meme.lines[meme.selectedLineIdx]
  const img = getImg()
  const elImg = new Image()
  elImg.src = img.url

  gElCanvas.height = (elImg.naturalHeight / elImg.naturalWidth) * gElCanvas.width
  elImg.onload = () => {
      gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
      onDrawText(txt, size, color)
  }
}

function onDrawText(txt, size, color) {
  gCtx.lineWidth = 2
  gCtx.strokeStyle = 'black'
  gCtx.fillStyle = color
  gCtx.font = `${size}px Impact`
  
  gCtx.fillText(txt, 50, 50)
  gCtx.strokeText(txt, 50, 50)
}

function onInputValue(inputValue) {
  setLineTxt(inputValue)
  renderMeme()
}

function onFontUp() {
  setFontSizeUp()
  renderMeme()
}
function onFontDown() {
  setFontSizeDown()
  renderMeme()
}

function onFillColor(colorValue) {
  setTxtColor(colorValue)
  renderMeme()
}

