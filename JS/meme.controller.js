'use strict'

let gElCanvas
let gCtx

function onInitMeme() {
  gElCanvas = document.querySelector('canvas')
  gCtx = gElCanvas.getContext('2d')
  renderMeme()
  addListeners()
}

function resizeCanvas() {
  const elContainer = document.querySelector('.canvas-container')
  gElCanvas.width = elContainer.offsetWidth
  gElCanvas.height = elContainer.offsetHeight
}

function onUpdateImg(imgId) {
  setUpdateMemeImg(imgId)
  setPassingPages()
  resetLines()
  renderMeme()

}

function addListeners() {
  addMouseListeners()
  addTouchListeners()
}

function renderMeme() {
  let elImg = getImage()
  elImg.onload = () => {
      gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
      renderAllLines()
  }
}

function renderAllLines() {
  gMeme.lines.forEach((line, lineIdx) => {
      let txt = line.txt
      drawText(txt, line.pos.x, line.pos.y, lineIdx)
  })
}

function onAddLine() {
  addLine()
  const center = { x: gElCanvas.width / 2, y: gElCanvas.height / 2 }
  let newLineIdx = gMeme.lines.length - 1
  let newTxt = gMeme.lines[newLineIdx].txt

  drawText(newTxt, center.x, center.y, newLineIdx)

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
  gMeme.lines[lineIdx].pos = { x, y }
}

function getImage() {
  let elImgUrl = gImgs.find(img => img.id === gMeme.selectedImgId).url
  var elImg = new Image()
  elImg.src = elImgUrl
  return elImg
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

function onStyleFont(fontValue) {
  setStyleFont(fontValue)
  renderMeme()
}

function onSwitchLine() {
  switchLineIdx()
}

function onFontLeft() {
  setFontLeft()
  renderMeme()
}
function onFontCenter() {
  setFontCenter()
  renderMeme()
}
function onFontRight() {
  setFontRight()
  renderMeme()
}

function onDeleteLine() {
  setDeleteLine()
  renderMeme()
}

function downloadImg(elLink) {
  const imgContent = gElCanvas.toDataURL('image/jpeg') // image/jpeg the default format
  elLink.href = imgContent
}

function onOpenModal() {
  var elModal = document.querySelector('.modal-container')
  elModal.style.display = 'flex'
}

function onCloseModal() {
  var elModal = document.querySelector('.modal-container')
  elModal.style.display = 'none'
}
