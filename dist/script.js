"use strict";var navbar=document.querySelector("#navbar"),navMenu=document.querySelector(".navbar__menu"),navBurger=document.querySelector(".navbar__burger"),body=document.querySelector("body");navBurger.addEventListener("click",(function(){navbar.classList.contains("open")?(navbar.classList.remove("open"),navMenu.classList.remove("open"),body.classList.remove("not-scroll")):(navbar.classList.add("open"),navMenu.classList.add("open"),body.classList.add("not-scroll"))})),window.addEventListener("scroll",(function(){var e=window.pageYOffset,t=navbar.getBoundingClientRect().height,n=document.querySelector(".up-link");e>t?navbar.classList.add("fixed-navbar"):navbar.classList.remove("fixed-navbar"),e>500?n.classList.add("show"):n.classList.remove("show")}));var scrollLinks=document.querySelectorAll(".scroll-link");scrollLinks.forEach((function(e){e.addEventListener("click",(function(e){var t=e.currentTarget.getAttribute("href").slice(1),n=document.getElementById(t),r=navbar.getBoundingClientRect().height,s=navMenu.getBoundingClientRect().height,a=navbar.classList.contains("fixed-nav"),o=n.offsetTop-r;a||(o-=r),r>5&&(o+=s),window.scrollTo({left:0,top:o,behavior:"smooth"}),navbar.classList.remove("open"),navMenu.classList.remove("open")}))}));for(var sortBtn=document.querySelector(".projects__menu").children,sortItem=document.querySelector(".project-item").children,i=0;i<sortBtn.length;i++)sortBtn[i].addEventListener("click",(function(){for(var e=0;e<sortBtn.length;e++)sortBtn[e].classList.remove("current");this.classList.add("current");for(var t=this.getAttribute("data-target"),n=0;n<sortItem.length;n++)sortItem[n].classList.remove("active"),sortItem[n].classList.add("delete"),sortItem[n].getAttribute("data-item")!==t&&"all"!==t||(sortItem[n].classList.remove("delete"),sortItem[n].classList.add("active"))}));var date=document.querySelector("#date");date.innerHTML=(new Date).getFullYear();
//# sourceMappingURL=script.js.map