/* 
   Filename: sophisticated_program.js 

   Description: 
   This is a sophisticated program that generates a mandelbrot fractal using the HTML5 canvas element.
   It allows users to interact with the fractal by zooming, panning, and changing the color palette.

   Author: Your Name
   Date: Current Date
*/

// Define the canvas size
const canvasWidth = 800;
const canvasHeight = 800;

// Define the default parameters
let zoom = 1;
let offsetX = -0.5;
let offsetY = 0;
let maxIterations = 256;

// Define the color palette
const colors = [
  [66, 30, 15],
  [25, 7, 26],
  [9, 1, 47],
  [4, 4, 73],
  [0, 7, 100],
  [12, 44, 138],
  [24, 82, 177],
  [57, 125, 209],
  [134, 181, 229],
  [211, 236, 248],
  [241, 233, 191],
  [248, 201, 95],
  [255, 170, 0],
  [204, 128, 0],
  [153, 87, 0],
  [106, 52, 3]
];

// Create the canvas element and append it to the document body
const canvas = document.createElement('canvas');
canvas.width = canvasWidth;
canvas.height = canvasHeight;
document.body.appendChild(canvas);

// Get the 2D rendering context of the canvas
const ctx = canvas.getContext('2d');

// Update the fractal on mouse wheel events
canvas.addEventListener('wheel', event => {
  const scale = event.deltaY < 0 ? 1.1 : 0.9;
  zoom *= scale;
  offsetX += (event.offsetX - canvasWidth / 2) / zoom / canvasWidth / 2;
  offsetY += (event.offsetY - canvasHeight / 2) / zoom / canvasHeight / 2;
  render();
});

// Update the fractal on mouse move events
canvas.addEventListener('mousemove', event => {
  if (event.buttons === 1) {
    offsetX += event.movementX * 0.1 / zoom / canvasWidth;
    offsetY += event.movementY * 0.1 / zoom / canvasHeight;
    render();
  }
});

// Render the mandelbrot fractal
function render() {
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  const imageData = ctx.createImageData(canvasWidth, canvasHeight);
  
  for (let x = 0; x < canvasWidth; x++) {
    for (let y = 0; y < canvasHeight; y++) {
      const zx = (x - canvasWidth / 2) / (zoom * canvasWidth) + offsetX;
      const zy = (y - canvasHeight / 2) / (zoom * canvasHeight) + offsetY;
      
      let i = 0;
      let zx2 = zx * zx;
      let zy2 = zy * zy;
      
      while (i < maxIterations && zx2 + zy2 < 4) {
        const newZx = zx2 - zy2 + zx;
        const newZy = 2 * zx * zy + zy;
        zx = newZx;
        zy = newZy;
        zx2 = zx * zx;
        zy2 = zy * zy;
        i++;
      }
      
      const pixelIndex = (y * canvasWidth + x) * 4;
      const colorIndex = i % colors.length;
      const color = colors[colorIndex];
      
      imageData.data[pixelIndex] = color[0];
      imageData.data[pixelIndex + 1] = color[1];
      imageData.data[pixelIndex + 2] = color[2];
      imageData.data[pixelIndex + 3] = 255;
    }
  }
  
  ctx.putImageData(imageData, 0, 0);
}

// Initial rendering
render();