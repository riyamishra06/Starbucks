var loco = () => {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  locoScroll.on("scroll", ScrollTrigger.update);
  
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, 
    getBoundingClientRect() {
      return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });
  
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
  ScrollTrigger.refresh();
  
  
  
  
}
loco();


 function swiper() {
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}
swiper();


let tl = gsap.timeline();

function loader() {

  let clutter = "";
let splitText = document.querySelector(".loader .wrapper h1").innerHTML.split("");
splitText.forEach((element) => {
  clutter += `<span>${element}</span>`;
});
document.querySelector(".loader .wrapper h1").innerHTML = clutter;


  tl.from(
    ".wrapper h1 span",
    {
      opacity: 0,
      y: 100,
      stagger: 0.1,
    },
    "a"
  );

  tl.from(
    ".wrapper .progress .line",
    {
      width: 0,
      duration: 2,
    },
    "a"
  );

  tl.to(".loader", {
    y: "-100%",
    opacity: 0,
  });
}
loader();


function page1Anim() {
  tl.from("#page1 .nav", {
    y: "-100%",
  });

  tl.from(
    ".p1-left .swiper",
    {
      scale: 0.9,
      opacity: 0,
      duration: 0.5,
    },
    "b"
  );
  tl.from(
    ".p1-right",
    {
      scale: 0.9,
      opacity: 0,
      duration: 0.5,
    },
    "b"
  );
  tl.from(".swiper-slide", {
    opacity: 0,
  });
}
page1Anim();


function textAnim() {
  const letters = "abcdefghijklmnopqrstuvwxyz";

  let interval = null;

  document.querySelectorAll(".title h2").forEach(function (e) {
    e.addEventListener("mouseenter", (event) => {
      let iteration = 0;

      clearInterval(interval);

      interval = setInterval(() => {
        event.target.innerText = event.target.innerText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return event.target.dataset.value[index];
            }

            return letters[Math.floor(Math.random() * 26)];
          })
          .join("");

        if (iteration >= event.target.dataset.value.length) {
          clearInterval(interval);
        }

        iteration += 1 / 3;
      }, 15);
    });
  });
}
textAnim();


function Products() {
  let Products = [
    {
      title: "Apple Crisp Macchiato",
      size: "SHORT (237ml)",
      kcal: "(162 kcal)",
      price: 362,
      img: "./src/product-1.webp",
      tag: "Popular",
    },
    {
      title: "Iced Lavender Cream Oatmilk Matcha",
      size: "SHORT (237ml)",
      kcal: "(180 kcal)",
      price: 410,
      img: "./src/product-2.webp",
      tag: "Seasonal",
    },
    {
      title: "Melon Burst Iced Energy",
      size: "SHORT (237ml)",
      kcal: "(150 kcal)",
      price: 370,
      img: "./src/product-3.webp",
      tag: "New",
    },
    {
      title: "Double Chocolate Chip Frappuccino",
      size: "SHORT (237ml)",
      kcal: "(250 kcal)",
      price: 430,
      img: "./src/product-4.webp",
      tag: "Popular",
    },
    {
      title: "Pumpkin Spice Latte",
      size: "SHORT (237ml)",
      kcal: "(200 kcal)",
      price: 400,
      img: "./src/product-5.webp",
      tag: "Seasonal",
    },
    {
      title: "Java Chip Frappuccino",
      size: "SHORT (237ml)",
      kcal: "(220 kcal)",
      price: 420,
      img: "./src/product-6.webp",
      tag: "New",
    },
    {
      title: "Iced Caramel Macchiato",
      size: "SHORT (237ml)",
      kcal: "(180 kcal)",
      price: 390,
      img: "./src/product-7.webp",
      tag: "Popular",
    },
    {
      title: "Nitro Cold Brew",
      size: "SHORT (237ml)",
      kcal: "(5 kcal)",
      price: 350,
      img: "./src/product-8.webp",
      tag: "Seasonal",
    },
  ];

  let temp = "";
  Products.forEach(function (p) {
    temp += `<div class="popular-card">
                    <div class="innerPopular">
                        <div class="innerThing">
                            <div class="popular-tag">
                                <h4>${p.tag}</h4>
                                <i class="ri-trophy-line"></i>
                            </div>
                            <i onclick="redHeart(this);" class="ri-heart-line"></i>
                        </div>
                        <img src=".${p.img}" alt="">
                    </div>
                    <div class="bottomPopular">
                        <h4>${p.title}</h4>
                        <div class="bottomKcal">
                            <p>${p.size}</p>
                            <p>${p.kcal}</p>
                        </div>
                    </div>
                    <div class="bottom-circ">
                        <h2>Rs. ${p.price}</h2>
                        <span onclick="addToCart(this);"><i class="ri-add-line"></i></span>
                    </div>
                </div>`;
  });

  document.querySelector(".popular-cards").innerHTML = temp;
}
Products();

function productAnim(){
  gsap.from(".popular-card", {
    opacity: 0,
    scale: 0.8,
    stagger: 0.2,
    scrollTrigger: {
      trigger: "#page3",
      scroller:"#main",
      start: "50% 50%",
      marker:true
    },
  });
  
}
productAnim()

// function redHeart(e){
//       if (e.classList[0] == "ri-heart-line") {
//         e.classList.remove("ri-heart-line");
//         e.classList.add("ri-heart-fill");
//       }else{
//         e.classList.remove("ri-heart-fill");
//         e.classList.add("ri-heart-line");
//       }
// }
// redHeart()


