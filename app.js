/*
This is Just a Cloned Landing Page of 
an Internet Provider Company. Apart from the codes,
All the texts used were not written by me 
*/


//The Nav Section.
//Link the Navigation tabs to their Sections 
function allNavs(){

//creation the top nav links
  let ul = document.getElementById("navbar__list")
ul.innerHTML = 
`<li><a id="link1" class="nav-links"> Welcome </a></li>  
<li><a id="link2" class="nav-links"> Our Team </a></li>  
<li><a id="link3" class="nav-links"> Services </a></li>
<li><a id="link4" class="nav-links"> Meet Our Customers </a></li>`

let link1 = document.getElementById("link1");
let link2 = document.getElementById("link2");
let link3 = document.getElementById("link3");
let link4 = document.getElementById("link4")

link1.href = "#section1"
link2.href = "#section2"
link3.href = "#section3"
link4.href = "#section4"


//Creating a Website Navigation Logo
let nav = document.querySelector("nav");
let name = document.createElement("a");
name.id = "page-name";
name.textContent = "Avanti";
name.href = "index.html";
nav.appendChild(name);


 //Creating a nav tab that navigates up
const footer = document.getElementsByTagName("footer")[0];
let p = document.createElement("p");
p.innerHTML = `<a href="#top">To The Top</a>`;
p.id = "top-page";
footer.appendChild(p);
}


//Creating a Mouse Event to link the navs to their sections
function navLink() {
let a = document.getElementsByTagName("a")
for (let i = 0; i < a.length; i++){
  a[i].addEventListener("mouseenter", function(){
  a[i].classList.add("menu__link")
})
};
}

allNavs();
navLink();

function classToggle() {
  let navList = document.querySelectorAll('#navbar__list')
  let hamb = document.querySelector('.toggle')
hamb.addEventListener('click', function(){
  navList[0].classList.toggle('show');
});
}
classToggle();


//The Section Area
function allSections() {

// Creating the text at the top page
function topText(){
  let header = document.querySelectorAll('header')[1] 
  header.setAttribute("id", "top");
  let h3 = document.createElement("h3");
  h3.setAttribute("id", "top-text");
  h3.innerHTML = `<strong> We cover 82% of the world’s top 10 fastest growing economies. Check out our extensive coverage across EMEA</br> Our growing customers are a simple testimony of the years of our hard work. </strong>`;
 return header.appendChild(h3);
}
topText();


//Highlighting the Section in ViewPort
function isVisible(sect) {
  let sections = sect.getBoundingClientRect();
  let windowHeight = document.documentElement.clientHeight;
 return sections.top < 5 || sections.bottom < windowHeight;
}
 window.addEventListener("scroll", function showVisible() {
  for (let section of document.querySelectorAll('section')) {
    if (isVisible(section)) {
       section.classList.add("your-active-class");
    }else{
    section.classList.remove("your-active-class");
  }};
}); 
};
allSections();


//The Reviews Section
//Creating or Updating random reviews from Customers
function createReviews() {
let reviews = [ {
  review:"In Tanzania, around 19 million people access the internet through mobile devices each year. The Tanzania Telecommunications Corporation (TTCL Corporation) looked to increase that number even further by offering their GSM services to rural and remote parts of the country.",
  name: "Baldwin Cameron",
  place: "Idaho"
}, {
  review:"We are excited about the partnership with Avanti Communications Group plc. In the last year this has enabled us to supply a new highspeed VSAT service on the ferries serving the Northern Isles. The new service, using Avanti’s Ka-band high throughput satellite, provides a significant increase in capacity for the ferries.",
  name: "James Willikins",
  place: "Las Vegas"
}, {
  review:"We are delivering a highly resilient, truly nationwide 4G network and Avanti will play a key part in providing resilience and extending this network into rural area. They are the best Communications organisation that you can ever work with. I will be glad to do business with them again.",
  name: "Kory Hampton",
  place: "Texas",
}, {
  review:"Avanti Communications is a world-leading provider of agile, secure and pioneering satellite technology across Europe, the Middle East and Africa. They are the best Communications organisation that you can ever work with. I will be glad to do business with them again.",
  name: "Rose Sutherland",
  place: "Sun City",
} ];

function reviewDisplay(){
  let reviewSection = document.getElementById("review");
  function showReviews() {
  reviewSection.innerHTML = `<p>${getReview().review}</p><p>${getReview().name}<span> - ${getReview().place}</span></p>`;
  return reviewSection;
};
showReviews();
setInterval(showReviews, 1500);
function getReview() {
  let randomReviews = Math.floor(Math.random() * reviews.length);
  return reviews[randomReviews];
}};
reviewDisplay();
}
createReviews();



