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
// TYPING ANIMATION - MOBILE SMOOTH
// ===============================
const texts = ["Cinematic Edits", "Viral Reels", "Pro Color Grading"];
let currentText = 0;
let charIndex = 0;
let deleting = false;

const element = document.querySelector(".typing");

// Precompute the max width in characters for smooth container
const maxLength = Math.max(...texts.map(t => t.length));
element.style.display = "inline-block";
element.style.width = `${maxLength}ch`; // fixes jump
element.style.whiteSpace = "nowrap";    // keep text on one line

function type() {
    const fullText = texts[currentText];

    if (!deleting) {
        charIndex++;
        element.textContent = fullText.substring(0, charIndex);
        if (charIndex === fullText.length) {
            deleting = true;
            setTimeout(type, 1000); // pause at full text
            return;
        }
    } else {
        charIndex--;
        element.textContent = fullText.substring(0, charIndex);
        if (charIndex === 0) {
            deleting = false;
            currentText = (currentText + 1) % texts.length;
        }
    }

    setTimeout(type, deleting ? 50 : 100);
}

type();
