//alert(
"This website is not responsive. i suggest you to use dekstop view if anyone using phone and responsive process is on process";
//);
// typing effect
const text = "Hello, I am aspiring Web developer.";
const typingEffect = document.getElementById("typing-effect");
let i = 0;

function typeWriter() {
  if (i < text.length) {
    typingEffect.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 10);
  } else {
    // Text has been fully typed, reset and start typing again
    i = 0;
    typingEffect.innerHTML = "";
    setTimeout(typeWriter, 10); // Wait for 1 second before starting again
  }
}

typeWriter();

window.addEventListener("scroll", function () {
  var scrolled = window.pageYOffset;
  var parallaxBg = document.querySelector(".hidden");
  parallaxBg.style.transform = "translate3d(0, " + scrolled * 0.5 + "px, 0)";
});
