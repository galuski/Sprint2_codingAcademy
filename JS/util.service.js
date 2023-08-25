'use strict'

let gStartPos

function addMouseListeners() {
    gElCanvas.addEventListener('mousedown', onDown)
    gElCanvas.addEventListener('mousemove', onMove)
    gElCanvas.addEventListener('mouseup', onUp)
}

function addTouchListeners() {
    gElCanvas.addEventListener('touchstart', onDown)
    gElCanvas.addEventListener('touchmove', onMove)
    gElCanvas.addEventListener('touchend', onUp)
}

function onDown(ev) {
    // console.log('onDown')
    // Get the ev pos from mouse or touch
    const pos = getEvPos(ev)
    // console.log('pos', pos)
    if (!isCircleClicked(pos)) return
  
    setCircleDrag(true)
    //Save the pos we start from
    gStartPos = pos
    document.body.style.cursor = 'grabbing'
  }
  
  function onMove(ev) {
    // console.log('onMove')
    const { isDrag } = getCircle()
    if (!isDrag) return
    console.log('Moving the circle')
  
    const pos = getEvPos(ev)
    // Calc the delta, the diff we moved
    const dx = pos.x - gStartPos.x
    const dy = pos.y - gStartPos.y
    moveCircle(dx, dy)
    // Save the last pos, we remember where we`ve been and move accordingly
    gStartPos = pos
    // The canvas is render again after every move
    renderCanvas()
  }
  
  function onUp() {
    // console.log('onUp')
    setCircleDrag(false)
    document.body.style.cursor = 'grab'
  }
