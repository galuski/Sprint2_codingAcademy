'use strict'

var gMeme = {
  selectedImgId: 5,
  selectedLineIdx: 0,
  lines: [
      {
          txt: 'Write something funny',
          size: 30,
          color: 'white'
      }
  ]
}

var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }

function getMeme(){
  return gMeme
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

function setTxtColor(colorValue) {
  gMeme.lines[gMeme.selectedLineIdx].color = colorValue
}
