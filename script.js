const text = ["Full Stack Developer ","React Developer ","Frontend Developer "];
let i = 0, j = 0, current = "", isDeleting = false;

function type(){
  current = text[i];
  document.getElementById("typing").textContent =
    isDeleting ? current.slice(0, j--) : current.slice(0, j++);

  if(!isDeleting && j === current.length){
    isDeleting = true;
    setTimeout(type, 1000);
    return;
  }

  if(isDeleting && j === 0){
    isDeleting = false;
    i = (i + 1) % text.length;
  }

  setTimeout(type, isDeleting ? 50 : 100);
}

type();

const revealElements = document.querySelectorAll(
  ".skill-cont, .project-cont, .ex-cont, .cert-cont"
);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.2 });

revealElements.forEach((el) => observer.observe(el));

