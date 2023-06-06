// Data
let cards = [
  {
    id: 1,
    title: "Portfolio project with JavaScript",
    text: " Lorem, ipsum dolor sit amet consectetur adipisicing elit.Vitae nesciunt amet soluta recusandae sunt provident.",
    imgUrl: "./assets/images/portfolio.png",
  },
  {
    id: 2,
    title: "ShopMax project with Html Css",
    text: " Lorem, ipsum dolor sit amet consectetur adipisicing elit.Vitae nesciunt amet soluta recusandae sunt provident.",
    imgUrl: "./assets/images/praktika1.png",
  },
  {
    id: 3,
    title: "Pizza project with Html Css Scss",
    text: " Lorem, ipsum dolor sit amet consectetur adipisicing elit.Vitae nesciunt amet soluta recusandae sunt provident.",
    imgUrl: "./assets/images/praktika2.png",
  },
  {
    id: 4,
    title: "Any-Watt project with Html Css",
    text: " Lorem, ipsum dolor sit amet consectetur adipisicing elit.Vitae nesciunt amet soluta recusandae sunt provident.",
    imgUrl: "./assets/images/praktika3.png",
  },
  {
    id: 5,
    title: "Akame project with Html Css",
    text: " Lorem, ipsum dolor sit amet consectetur adipisicing elit.Vitae nesciunt amet soluta recusandae sunt provident.",
    imgUrl: "./assets/images/praktika4.png",
  },
  {
    id: 6,
    title: "SpaceX project with Html Css Scss",
    text: " Lorem, ipsum dolor sit amet consectetur adipisicing elit.Vitae nesciunt amet soluta recusandae sunt provident.",
    imgUrl: "./assets/images/praktika5.png",
  },
];

// Add to Card Html
const cardBox = document.querySelector(".info-box");
function getAllCard() {
  cards.map((card) => {
    cardBox.innerHTML += `
 <div class="card"   
 data-aos="fade-up"
 data-aos-duration="1000">
 <div class="top"><img src="${card.imgUrl}" alt="website-photo"></div>
 <div class="botom">
   <h3 class="title">${card.title}</h3>
   <p class="text">${card.text}</p>
   <div class="btn"><a href="#about-me">See More</a></div>
 </div>
</div>
 `;
  });
}
getAllCard();

// Toggle menu
let toggleMenu = document.querySelector(".sub-menu-wrap");
let overlay = document.querySelector(".overlay-toggle");
let navLink = document.querySelectorAll(".nav-item");
let subLink = document.querySelectorAll(".sub-menu-link");
function openMenu() {
  toggleMenu.classList.toggle("active");
  overlay.classList.toggle("active");
  //  Toggle Menu OverWalking
  toggleMenu.addEventListener("click", (e) => {
    e.stopPropagation();
  });
  // Close Toggle menu
  overlay.addEventListener("click", () => {
    toggleMenu.classList.remove("active");
    overlay.classList.remove("active");
  });
  // Close Toggle menu  in NavBAr
  for (let i = 0; i < navLink.length; i++) {
    navLink[i].addEventListener("click", () => {
      toggleMenu.classList.remove("active");
      overlay.classList.remove("active");
    });
  }
  // Close Toggle menu  in SubmennuLink
  for (let i = 0; i < subLink.length; i++) {
    subLink[i].addEventListener("click", () => {
      toggleMenu.classList.remove("active");
      overlay.classList.remove("active");
    });
  }
}

// Add Slider and Swiper js
let swiperWrapper = document.querySelector(".swiper-wrapper");
function getAllSlider() {
  cards.map((card) => {
    swiperWrapper.innerHTML += `
    <div class="swiper-slide">
    <img src="${card.imgUrl}" alt="" />
    <div class="info">
      <h4 class="title">${card.title}</h4>
      <div class="btn"><a href="#project">Read More</a></div>
    </div>
  </div>
    `;
  });
}

getAllSlider();
// Swiper Action
var swiper = new Swiper(".mySwiper", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// HOme Text Writing
const firstName = document.querySelector("#name");
const nameText = "Sadiq Abdullayev";

function typeWriter() {
  for (let i = 0; i < nameText.length; i++) {
    setTimeout(() => {
      firstName.innerHTML += nameText[i];
    }, i * 100);
  }
}
typeWriter();

// Validation
const form = document.querySelector("#registration-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const nameInp = document.querySelector("#firstname");
  const surnameInp = document.querySelector("#surname");
  const emailInp = document.querySelector("#email");
  const textarea = document.querySelector("#textarea");
  const nameEror = document.querySelector("#name-error");
  const surnameEror = document.querySelector("#surname-error");
  const emailEror = document.querySelector("#email-error");
  const textEror = document.querySelector("#text-error");

  nameEror.textContent = "";
  surnameEror.textContent = "";
  emailEror.textContent = "";
  textEror.textContent = "";

  nameInp.style.borderColor = "";
  surnameInp.style.borderColor = "";
  emailInp.style.borderColor = "";
  textarea.style.borderColor = "";

  let isValid = true;
  // Name Check
  if (nameInp.value.trim() === "") {
    nameEror.textContent = "Name cannot be empty";
    nameInp.style.borderColor = "#ff014f";
    isValid = false;
  }
  // Surname Check
  if (surnameInp.value.trim() === "") {
    surnameInp.style.borderColor = "#ff014f";
    surnameEror.innerHTML = "Surname cannot be empty";
    isValid = false;
  }
  // Textarea Check
  if (textarea.value.trim() === "") {
    textarea.style.borderColor = "#ff014f";
    textEror.innerHTML = "It cannot be empty";
    isValid = false;
  }
  // Email Check
  if (emailInp.value.trim() === "") {
    emailInp.style.borderColor = "#ff014f";
    emailEror.innerHTML = "Email cannot be empty";
    isValid = false;
  } else if (!validateEmail(emailInp.value.trim())) {
    emailInp.style.borderColor = "#ff014f";
    emailEror.innerHTML = "The email address is incorrect";
    isValid = false;
  }

  // Result
  if (isValid) {
    let user = {
      firstName: nameInp.value,
      surname: surnameInp.value,
      mail: emailInp.value,
      text: textarea.value,
    };
    console.log(user);
    nameInp.value = "";
    surnameInp.value = "";
    emailInp.value = "";
    textarea.value = "";
    // SweetAlert
    Swal.fire({
      title: "Success",
      timer: 1000,
      icon: "success",
    });
  }
});
// REGEX EMAIL
function validateEmail(email) {
  const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return re.test(email);
}

// Sticky Header
window.onscroll = () => {
  const header = document.querySelector(".header");
  if (this.scrollY >= 150) {
    header.classList.add("drop-header");
  } else {
    header.classList.remove("drop-header");
  }
};

// Tabs
function openTab(event, id) {
  let tabcontent = document.querySelectorAll(".tab-content");
  for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  let tablinks = document.querySelectorAll(".title-link");
  for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active-link");
  }

  document.getElementById(id).style.display = "block";
  event.currentTarget.classList.add("active-link");
}

// Footer Year
const year = document.querySelector(".year");
year.innerHTML = new Date().getFullYear();

// ACCORDION
let acc = document.querySelectorAll(".label");
// Accordion Opened Check
let IsAccValid = false;
for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    // Next ELement Select
    let panel = this.nextElementSibling;
    if (IsAccValid) {
      panel.classList.remove("active-acordion");
      this.style.borderColor = "#1a1d23";
      IsAccValid = false;
    } else {
      panel.classList.add("active-acordion");
      this.style.borderColor = "#fff";
      IsAccValid = true;
    }
  });
}
