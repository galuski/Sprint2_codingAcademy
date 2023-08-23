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

function getImg() {
  const img = gImgs.find(img => img.id === gMeme.selectedImgId)
  return img
}
