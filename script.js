const rightEye = document.querySelector('.right');
const leftEye = document.querySelector('.left');
const eyes = document.querySelectorAll('.eye');

document.addEventListener('mousemove', function (e) {
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  //calculate the center of both eyes
  const rightEyePos = rightEye.getBoundingClientRect();
  const leftEyePos = leftEye.getBoundingClientRect();
  const rightCenterX = (rightEyePos.left + rightEyePos.right) / 2;
  const rightCenterY = (rightEyePos.top + rightEyePos.bottom) / 2;
  const leftCenterX = (leftEyePos.left + leftEyePos.right) / 2;
  const leftCenterY = (leftEyePos.top + leftEyePos.bottom) / 2;
  //calculate the coordinate of the center between 2 eyes
  const anchorX = (rightCenterX + leftCenterX) / 2;
  const anchorY = (rightCenterY + leftCenterY) / 2;
  console.log(anchorX, anchorY);
  const angleDeg = angle(mouseX, mouseY, anchorX, anchorY)
  eyes.forEach(function (eye) {
    eye.style.transform = `rotate(${90 + angleDeg}deg)`;
  });
})

//function to calculate the slope of the cursor to the center of the img

function angle(mx, my, ax, ay) {
  const dy = ay - my;
  const dx = ax - mx;
  //calculate distance between anchor and mouse (mouse's coordinate to the center of img)
  const rad = Math.atan2(dy, dx);
  const deg = rad * 180 / Math.PI;
  return deg;
}