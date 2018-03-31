const canvas = {
    width: 750,
    height: 1180,
    resolution: window.devicePixelRatio
};
const device = {
    width: Math.min(screen.width,window.innerWidth),
    height: Math.min(screen.height,window.innerHeight)
};
canvas.resolution *= Math.min(device.width / canvas.width, device.height/canvas.height);
canvas.battle = {
    x: 0,
    y: canvas.height * 0.3,
    width: canvas.width,
    height: canvas.height * 0.5
};
export default canvas;