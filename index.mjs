import "./style.css";

// selectors
const page1Button = document.getElementById("page-button-1");
const page2Button = document.getElementById("page-button-2");


const page1 = document.getElementById("page-1");
const page2 = document.getElementById("page-2");


// functions
const changePage = (pageId) => {
  page1.style = "display: none;";
  page2.style = "display: none;";


  switch (pageId) {
    case "page-1":
      page1.style = "display: block;";
      break;
    case "page-2":
      page2.style = "display: block;";
      break;
  }
};

const init = () => {
  changePage("page-1");
};

// event listeners
page1Button.addEventListener("click", () => {
  changePage("page-1");
});

page2Button.addEventListener("click", () => {
  changePage("page-2");
});

init();


function scrollToSection(sectionId) {
  var section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}
