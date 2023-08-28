'use strict'

var gMeme = {
  selectedImgId: 5,
  selectedLineIdx: 0,
  lines: []
}

var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }


function getMeme(){
  return gMeme
}

function resetLines() {
  const center = { x: gElCanvas.width / 2, y: gElCanvas.height / 2 }
  gMeme.lines = [
      {
          pos: { x: center.x, y: center.y - 150 },
          txt: 'Say something here 1',
          size: 30,
          color: 'white',
          align: 'center',
          font: 'Impact',
          stroke: 'black',
      },
      {
          pos: { x: center.x, y: center.y + 150 },
          txt: 'Say something here 2',
          size: 30,
          color: 'white',
          align: 'center',
          font: 'Impact',
          stroke: 'black'
      }
  ]
}

function setUpdateMemeImg(imgId) {
  gMeme.selectedImgId = imgId
}

function setLineTxt(inputValue) {
  gMeme.lines[gMeme.selectedLineIdx].txt = inputValue
}

function setFontSizeUp() {
  gMeme.lines[gMeme.selectedLineIdx].size += 5
}
function setFontSizeDown() {
  gMeme.lines[gMeme.selectedLineIdx].size -= 5
}

function setFillColor(fillValue) {
  gMeme.lines[gMeme.selectedLineIdx].color = fillValue
}
function setStrokeColor(strokeValue) {
  gMeme.lines[gMeme.selectedLineIdx].stroke = strokeValue
}

function setStyleFont(fontValue) {
  gMeme.lines[gMeme.selectedLineIdx].font = fontValue

}

function setFontLeft(){
  gMeme.lines[gMeme.selectedLineIdx].align = 'left'
}
function setFontCenter(){
  gMeme.lines[gMeme.selectedLineIdx].align = 'center'
}
function setFontRight(){
  gMeme.lines[gMeme.selectedLineIdx].align = 'right'
}

function switchLineIdx() {
  let currentLineIdx = gMeme.selectedLineIdx
  if (currentLineIdx < gMeme.lines.length - 1) gMeme.selectedLineIdx += 1
  else if (currentLineIdx === gMeme.lines.length - 1) gMeme.selectedLineIdx = 0
  // drawFrame()
}

function addLine() {
  let line = {
      pos: {},
      txt: 'Say something here 3',
      size: 30,
      color: 'white',
      align: 'center',
      font: 'Impact'
  }
  gMeme.lines.push(line)
  gMeme.selectedLineIdx = gMeme.lines.length - 1
  console.log('gMeme', gMeme)
}

function setDeleteLine() {
  let selectedLineIdx = gMeme.selectedLineIdx
  gMeme.lines.splice(selectedLineIdx, 1)

}

function drawRect(x, y) {
  gCtx.strokeRect(x, y-20, 370,40)
}

