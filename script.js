// ===============================
// DYNAMIC SECTION HEIGHT FOR MOBILE
// ===============================
function setSectionHeight() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    document.querySelectorAll('section').forEach(section => {
        section.style.height = `calc(var(--vh, 1vh) * 100)`;
    });
}
window.addEventListener('resize', setSectionHeight);
window.addEventListener('load', setSectionHeight);

// ===============================
// LOGIN FORM
// ===============================
function loginUser(){ 
    alert("Project request received!"); 
    return false; 
}

// ===============================
// SCROLL ANIMATION
// ===============================
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
// TYPING ANIMATION
// ===============================
const texts = ["Cinematic Edits", "Viral Reels", "Pro Color Grading"];
let currentText = 0;
let charIndex = 0;
let deleting = false;

function type() {
    const element = document.querySelector(".typing");
    const fullText = texts[currentText];

    if (!deleting) {
        charIndex++;
        element.textContent = fullText.substring(0, charIndex);
        if (charIndex === fullText.length) {
            deleting = true;
            setTimeout(type, 1000);
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
