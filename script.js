// LOGIN
function loginUser(){ 
    alert("Project request received!"); 
    return false; 
}

// SCROLL ANIMATION
window.addEventListener("scroll",()=>{
    document.querySelectorAll(".reveal").forEach(el=>{
        if(el.getBoundingClientRect().top<window.innerHeight-100){
            el.classList.add("active");
        }
    });
    document.querySelectorAll(".tool").forEach((el,index)=>{
        if(el.getBoundingClientRect().top<window.innerHeight-100){
            setTimeout(()=>{el.classList.add("active");},index*200);
        }
    });
});

// ===============================
// TYPING ANIMATION - SMOOTH MOBILE
// ===============================
const texts = ["Cinematic Edits", "Viral Reels", "Pro Color Grading"];
let currentText = 0;
let charIndex = 0;
let deleting = false;

function type() {
    const element = document.querySelector(".typing");

    // Wrap text in span to control width and opacity
    if (!element.querySelector("span")) {
        const span = document.createElement("span");
        element.appendChild(span);
    }
    const span = element.querySelector("span");
    const fullText = texts[currentText];

    if (!deleting) {
        charIndex++;
        span.textContent = fullText.substring(0, charIndex);
        if (charIndex === fullText.length) {
            // Fade out after full word is typed
            setTimeout(() => {
                span.style.transition = "opacity 0.5s";
                span.style.opacity = 0;
                deleting = true;
            }, 1000);
            return;
        }
    } else {
        charIndex--;
        span.textContent = fullText.substring(0, charIndex);
        if (charIndex === 0) {
            deleting = false;
            currentText = (currentText + 1) % texts.length;
            // Reset opacity for next word
            span.style.opacity = 1;
            span.style.transition = "none";
        }
    }
    setTimeout(type, deleting ? 30 : 100);
}

type();
