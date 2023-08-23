'use strict'
let gIdx = 1

var gImgs = [
  { id: gIdx, url: 'meme-imgs/${gIdx++}.jpg', keywords: [] },
  { id: gIdx, url: 'meme-imgs/${gIdx++}.jpg', keywords: [] },
  { id: gIdx, url: 'meme-imgs/${gIdx++}.jpg', keywords: [] },
  { id: gIdx, url: 'meme-imgs/${gIdx++}.jpg', keywords: [] },
  { id: gIdx, url: 'meme-imgs/${gIdx++}.jpg', keywords: [] },
  { id: gIdx, url: 'meme-imgs/${gIdx++}.jpg', keywords: [] },
  { id: gIdx, url: 'meme-imgs/${gIdx++}.jpg', keywords: [] },
  { id: gIdx, url: 'meme-imgs/${gIdx++}.jpg', keywords: [] },
  { id: gIdx, url: 'meme-imgs/${gIdx++}.jpg', keywords: [] },
  { id: gIdx, url: 'meme-imgs/${gIdx++}.jpg', keywords: [] },
  { id: gIdx, url: 'meme-imgs/${gIdx++}.jpg', keywords: [] },
  { id: gIdx, url: 'meme-imgs/${gIdx++}.jpg', keywords: [] },
  { id: gIdx, url: 'meme-imgs/${gIdx++}.jpg', keywords: [] },
  { id: gIdx, url: 'meme-imgs/${gIdx++}.jpg', keywords: [] },
  { id: gIdx, url: 'meme-imgs/${gIdx++}.jpg', keywords: [] },
  { id: gIdx, url: 'meme-imgs/${gIdx++}.jpg', keywords: [] },
  { id: gIdx, url: 'meme-imgs/${gIdx++}.jpg', keywords: [] },
  { id: gIdx, url: 'meme-imgs/${gIdx++}.jpg', keywords: [] },
]

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