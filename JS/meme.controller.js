'use strict'

let gElCanvas
let gCtx

function onInitMeme() {
  gElCanvas = document.querySelector('canvas')
  gCtx = gElCanvas.getContext('2d')
}

function renderImg(elImg) {
  setMemeImg(elImg)
  resizeCanvas(elImg)
  gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
}

function renderMeme() {
  let elImg = getImage()
  elImg.onload = () => {
      gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)

      const center = { x: gElCanvas.width / 2, y: gElCanvas.height / 2 }
     
      let txt1 = gMeme.lines[0].txt
      drawText(txt1, center.x, center.y - 150, 0)
  }
}

function getImage() {
  let elImgUrl = gImgs.find(img => img.id === gMeme.selectedImgId).url
  var elImg = new Image()
  elImg.src = elImgUrl
  return elImg
}

function onUpdateImg(imgId) {
  updateMemeImg(imgId)
  renderMeme()
}

function drawText(text, x, y, lineIdx) {
  gCtx.lineWidth = 1
  gCtx.strokeStyle = gMeme.lines[lineIdx].stroke
  gCtx.fillStyle = gMeme.lines[lineIdx].color
  gCtx.font = `${gMeme.lines[lineIdx].size}px ${gMeme.lines[lineIdx].font}`
  gCtx.textAlign = gMeme.lines[lineIdx].align
  gCtx.textBaseline = 'middle'

  gCtx.fillText(text, x, y)
  gCtx.strokeText(text, x, y)
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

function onFillColor(fillValue) {
  setFillColor(fillValue)
  renderMeme()
}

function onStrokeColor(strokeValue) {
  setStrokeColor(strokeValue)
  renderMeme()
}


