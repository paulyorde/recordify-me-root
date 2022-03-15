/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ (() => {

eval("// import * as Tone from 'tone'\n// console.log('toon::', new Tone())\n\n\n\n\nconst record = document.querySelector(('.record'));\nconst stop = document.querySelector(('.stop'));\nconst soundClips = document.querySelector(('.sound-clips'));\nconst canvas = document.querySelector(('.visualizer'));\nconst mainSection = document.querySelector(('.main-controls'));\n\nstop.disabled = true;\n\nlet audioCtx;\nconst canvasCtx = canvas.getContext(\"2d\");\n\nif (navigator.mediaDevices.getUserMedia) {\n  console.log('getUserMedia supported.');\n\n  const constraints = { audio: true };\n  let chunks = [];\n\n  let onSuccess = function(stream) {\n    const mediaRecorder = new MediaRecorder(stream);\n\n    visualize(stream);\n\n    record.onclick = function() {\n      mediaRecorder.start();\n      console.log(mediaRecorder.state);\n      console.log(\"recorder started\");\n      record.style.background = \"red\";\n\n      stop.disabled = false;\n      record.disabled = true;\n    }\n\n    stop.onclick = function() {\n      mediaRecorder.stop();\n      console.log(mediaRecorder.state);\n      console.log(\"recorder stopped\");\n      record.style.background = \"\";\n      record.style.color = \"\";\n      // mediaRecorder.requestData();\n\n      stop.disabled = true;\n      record.disabled = false;\n    }\n\n    mediaRecorder.onstop = function(e) {\n      console.log(\"data available after MediaRecorder.stop() called.\");\n\n      const clipName = prompt('Enter a name for your sound clip?','My unnamed clip');\n\n      const clipContainer = document.createElement('article');\n      const clipLabel = document.createElement('p');\n      const audio = document.createElement('audio');\n      // const deleteButton = document.createElement('button');\n\n      clipContainer.classList.add('clip');\n      audio.setAttribute('controls', '');\n      // deleteButton.textContent = 'Delete';\n      // deleteButton.className = 'delete';\n\n      if(clipName === null) {\n        clipLabel.textContent = 'My unnamed clip';\n      } else {\n        clipLabel.textContent = clipName;\n      }\n\n      clipContainer.appendChild(audio);\n      clipContainer.appendChild(clipLabel);\n      // clipContainer.appendChild(deleteButton);\n      soundClips.appendChild(clipContainer);\n\n      audio.controls = true;\n      const blob = new Blob(chunks, { 'type' : 'audio/ogg; codecs=opus' });\n      chunks = [];\n      const audioURL = window.URL.createObjectURL(blob);\n      audio.src = audioURL;\n      console.log(\"recorder stopped\");\n\n      // deleteButton.onclick = function(e: any) {\n      //   let evtTgt = e.target;\n      //   evtTgt.parentNode.parentNode.removeChild(evtTgt.parentNode);\n      // }\n\n      clipLabel.onclick = function() {\n        const existingName = clipLabel.textContent;\n        const newClipName = prompt('Enter a new name for your sound clip?');\n        if(newClipName === null) {\n          clipLabel.textContent = existingName;\n        } else {\n          clipLabel.textContent = newClipName;\n        }\n      }\n    }\n\n    mediaRecorder.ondataavailable = function(e) {\n      chunks.push(e.data);\n    }\n  }\n\n  let onError = function(err) {\n    console.log('The following error occured: ' + err);\n  }\n\n  navigator.mediaDevices.getUserMedia(constraints).then(onSuccess, onError);\n\n} else {\n   console.log('getUserMedia not supported on your browser!');\n}\n\nfunction visualize(stream) {\n  if(!audioCtx) {\n    audioCtx = new AudioContext();\n  }\n\n  const source = audioCtx.createMediaStreamSource(stream);\n\n  const analyser = audioCtx.createAnalyser();\n  analyser.fftSize = 2048;\n  const bufferLength = analyser.frequencyBinCount;\n  const dataArray = new Uint8Array(bufferLength);\n\n  source.connect(analyser);\n  //analyser.connect(audioCtx.destination);\n\n  draw()\n\n  function draw() {\n    const WIDTH = canvas.width\n    const HEIGHT = canvas.height;\n\n    requestAnimationFrame(draw);\n\n    analyser.getByteTimeDomainData(dataArray);\n\n    canvasCtx.fillStyle = 'rgb(200, 200, 200)';\n    canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);\n\n    canvasCtx.lineWidth = 2;\n    canvasCtx.strokeStyle = 'rgb(0, 0, 0)';\n\n    canvasCtx.beginPath();\n\n    let sliceWidth = WIDTH * 1.0 / bufferLength;\n    let x = 0;\n\n\n    for(let i = 0; i < bufferLength; i++) {\n\n      let v = dataArray[i] / 128.0;\n      let y = v * HEIGHT/2;\n\n\n\n\n\n      if(i === 0) {\n        canvasCtx.moveTo(x, y);\n      } else {\n        canvasCtx.lineTo(x, y);\n      }\n\n      x += sliceWidth;\n    }\n\n    canvasCtx.lineTo(canvas.width, canvas.height/2);\n    canvasCtx.stroke();\n\n  }\n}\n\nwindow.onresize = function() {\n  canvas.width = mainSection.offsetWidth;\n}\n\nwindow.onresize();\n\n//# sourceURL=webpack://www/./index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./index.js"]();
/******/ 	
/******/ })()
;