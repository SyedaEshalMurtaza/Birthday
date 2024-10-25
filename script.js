const message = "Happy 16th Birthday, Huzaifa Ansari! 🏴‍☠️ May your journey to the seas and the spirit of Ertugrul guide you to greatness!";
let i = 0;
let speed = 100; // Speed of typing in milliseconds

function typeWriter() {
  if (i < message.length) {
    document.getElementById("message").innerHTML += message.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = function() {
  typeWriter();
};