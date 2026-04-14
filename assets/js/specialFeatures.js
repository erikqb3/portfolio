import { helperFunctions } from "./helperFunctions.js";

export const specialFeatures = {
  carousel: { //REVIEW IAN THOMPSON SITE FOR BETTER VERSION
    carousel_organism: function(
      imgUplinePath,
      carousel_array,
      counter = 0,
      carousel_tag = helperFunctions.generateElement('div',"carousel"),
      slideHolder = helperFunctions.generateElement('div',"slideHolder"),
      slideControls = this.carousel_slideControls(),
      carousel_nav = helperFunctions.generateElement('div', "carousel_nav"),
      // carousel_note = helperFunctions.generateElement('span',"carousel_note","","Click/Tap to enlarge")
    ){
      
      carousel_array.forEach(img => {
        let slide = this.carousel_singleSlide(imgUplinePath, img, counter);
        slideHolder.appendChild(slide);
        carousel_nav = this.carousel_navBtns(carousel_nav, counter);
        counter++;
      });
  
      carousel_tag = helperFunctions.appendChildren(carousel_tag, slideHolder,slideControls)
      // let carousel = [carousel_tag,carousel_nav, carousel_note];
      let carousel = [carousel_tag,carousel_nav];
      return carousel;
  
    },
    carousel_navBtns: function(
      navBtns,
      counter,
      slideBtn = helperFunctions.generateElement('button',`${counter}`,"slideBtn","<i class='fa-solid fa-circle'></i>") 
    ){
      navBtns.appendChild(slideBtn);
      return navBtns;
    },
    carousel_slideControls: function(
      slideControls = helperFunctions.generateElement('div',"slideControls"),
      prevBtn = helperFunctions.generateElement('button',"prevBtn","shiftBtn","<i class='fa-solid fa-caret-left'></i>"),
      nextBtn = helperFunctions.generateElement('button',"nextBtn","shiftBtn","<i class='fa-solid fa-caret-right'></i>")
    ){
      slideControls = helperFunctions.appendChildren(slideControls, prevBtn, nextBtn);
      return slideControls;
    },
    carousel_singleSlide: function(
      imgUplinePath,
      imgPath,
      counter,
      figure = helperFunctions.generateElement('figure',`slide${counter}`, "slide"),
      img = helperFunctions.generateElement('img',"","","carouselImg","",`../${imgUplinePath}${imgPath}`)){
        figure.appendChild(img);
        return figure;
    },
    functionality: {
      index: 1,
      intervalFunction: 0,
      interval: 5000,
      touchstartX : 0, // SWIPE SCREEN
      touchendX : 0,
      assignCurrentSlide: function(
        centerSlide, formerslide, slideArray
      ){
        let target;
        document.querySelector(".currentBtn").classList.remove('currentBtn');
        formerslide.classList.remove('currentSlide');
        
        if (centerSlide.id == "firstClone"){slideArray[1].classList.add('currentSlide')}
        else if (centerSlide.id == "lastClone"){slideArray[slideArray.length - 2].classList.add('currentSlide')}
        else { centerSlide.classList.add('currentSlide')};

        target = document.querySelector('.currentSlide').id;
        document.getElementById(target.substring(5,6)).classList.add('currentBtn');
        
      },
      checkDirection: function(slideHolder, slideWidth) {
        clearInterval(this.intervalFunction);
        if (this.touchendX < this.touchstartX) {
          this.moveToNextSlide(slideHolder,slideWidth);
        }
        if (this.touchendX > this.touchstartX) {
          this.moveToPrevSlide(slideHolder,slideWidth);
        }
        this.startSlides(slideHolder,slideWidth);
      },
      getSlides: function(){return document.querySelectorAll('.slide')},   
      moveToNextSlide: function(slideHolder, slideWidth){
        let slideArray = this.getSlides();
        if (this.index >= (slideArray.length-1)){return};
        
        this.index++;
        this.assignCurrentSlide(slideArray[this.index], document.querySelector('.currentSlide'),slideArray);
        
        slideHolder.style.transform = `translate(${-slideWidth*this.index}px)`;
        slideHolder.style.transition = '0.75s';
      },
      moveToPrevSlide: function(slideHolder, slideWidth){
        let slideArray = this.getSlides();
        if (this.index <= 0){return};
        this.index--;
        
        this.assignCurrentSlide(slideArray[this.index], document.querySelector('.currentSlide'),slideArray);
        slideHolder.style.transform = `translate(${-slideWidth*this.index}px)`;
        slideHolder.style.transition = '0.75s';
      },
      previewCurrentSlide: function(
        imgPath,
        main = document.querySelector('main'),
        section = helperFunctions.generateElement('section',"preview"),
        figure = helperFunctions.generateElement('figure'),
        img = helperFunctions.generateElement('img',"","","","",imgPath),
        note = helperFunctions.generateElement('span',"","","Click/Tap anywhere to close")
      ){
        main = helperFunctions.nestChildren(main, section,figure,img);
        section.appendChild(note);
        section.addEventListener('click',()=>{
          section.remove();
        })
      },
      setUp: function(
        carousel = document.getElementById('carousel'),
        slideHolder = document.getElementById('slideHolder'),
        prevBtn = document.getElementById('prevBtn'),
        nextBtn = document.getElementById('nextBtn'),
        slideArray = this.getSlides(),
        firstClone = slideArray[0].cloneNode(true),
        lastClone = slideArray[slideArray.length-1].cloneNode(true),
        slideWidth = slideArray[this.index].clientWidth,
        slideNav_array = document.querySelectorAll('.slideBtn')
      ){
        firstClone.id = "firstClone";
        lastClone.id = "lastClone";
        slideHolder.append(firstClone);
        slideHolder.prepend(lastClone);

        slideArray[0].classList.add('currentSlide');
        slideNav_array[0].classList.add('currentBtn');
        slideHolder.style.transform = `translateX(${-slideWidth * this.index}px)`;
        
        console.log(slideArray[0])

        this.startSlides(slideHolder, slideWidth);
        this.theEvents(carousel, slideHolder,nextBtn,prevBtn,slideWidth,slideNav_array)

      },
      startSlides: function(slideHolder, slideWidth){
        this.intervalFunction = setInterval(()=>{
          this.moveToNextSlide(slideHolder,slideWidth);
        }, this.interval);
        return;
      },
      theEvents : function(carousel, slideHolder,nextBtn,prevBtn, slideWidth, slideNav_array){
        carousel.addEventListener('mouseenter',()=>{
          
          clearInterval(this.intervalFunction);
        });
        carousel.addEventListener('mouseleave', ()=>{
          this.startSlides(slideHolder,slideWidth);
        });
        // document.addEventListener('touchstart', (e) => { // SWIPE SCREEN
        //   this.touchstartX = e.changedTouches[0].screenX;
        // });
        // document.addEventListener('touchend', (// SWIPE SCREEN
        //   e, 
        //   slideHolder = document.querySelector('#slideHolder'), 
        //   slideWidth = this.getSlides()[this.index].clientWidth,
        //   ) => { 
        //   this.touchendX = e.changedTouches[0].screenX
        //   this.checkDirection(slideHolder, slideWidth);
        // });
        nextBtn.addEventListener('click',()=>{this.moveToNextSlide(slideHolder, slideWidth)});
        prevBtn.addEventListener('click',()=>{this.moveToPrevSlide(slideHolder, slideWidth)});
        slideHolder.addEventListener('transitionend',()=>{
          let slideArray = this.getSlides();
          
          if (slideArray[this.index].id == firstClone.id){
            slideHolder.style.transition = "none";
            this.index = 1;
            slideHolder.style.transform = `translateX(${-slideWidth * this.index}px`;
          }
          if (slideArray[this.index].id == lastClone.id){
            slideHolder.style.transition = "none";
            this.index = slideArray.length - 2;
            slideHolder.style.transform = `translateX(${-slideWidth * this.index}px`;
          }
        });
        slideHolder.addEventListener('click',(e)=>{
          if (e.target.id == "slideControls"){
            let currentSlide = document.querySelector('.currentSlide');
            let currentImg = currentSlide.children[0].src;
            this.previewCurrentSlide(currentImg);
          }
        });

        for (let slideBtn of slideNav_array){
          slideBtn.addEventListener('click',()=>{
            let slideArray = this.getSlides();
            this.index = parseFloat(slideBtn.id) + 1;
            this.assignCurrentSlide(slideArray[this.index], document.querySelector('.currentSlide'),slideArray)
            slideHolder.style.transform = `translateX(${-slideWidth * this.index}px`;
            slideHolder.style.transition = '0.75s';
          })
        }
      },
    },
  },
  emailForm: function(
    emailSection = helperFunctions.generateElement('section',"","emailSection"),
    contact_form = helperFunctions.generateElement('form',"","contact-form","","POST","https://api.web3forms.com/submit"),
    // contact_title_holder = helperFunctions.generateElement('div',"","contact-title-holder"),
    // h2=helperFunctions.generateElement('h2',"","","Reach Out Via Email"),
    hiddenInput = helperFunctions.generateElement('input',"access_key","hidden","","a1b7999a-d110-4b8e-9dc4-e4c2ef7309ef"), //to erikqbirch@gmail.com
    textInput = helperFunctions.generateElement('input',"name","text","Your Name"),
    emailInput = helperFunctions.generateElement('input',"email","email","Your Email"),
    messageTextarea = helperFunctions.generateElement('textarea',"message","","Your Message"),
    submitButton = helperFunctions.generateElement('button',"","submit","Send")
  ){
    // emailSection = helperFunctions.nestChildren(emailSection, contact_form, contact_title_holder, h2);
    emailSection.appendChild(contact_form);
    contact_form = helperFunctions.appendChildren(contact_form,hiddenInput,textInput,emailInput,messageTextarea,submitButton)
    helperFunctions.requireInput(textInput,emailInput,messageTextarea);

    return emailSection;
  },
  fadeAndRotateImg: function(){},
  lazyLoading: function(
    imagesToLoad = document.querySelectorAll('img[data-src]'), //images elements with the attribute "data-src"; similar to css #data-src or .data-src
    loadImages = (img) => {
      img.setAttribute('src', img.getAttribute('data-src'));
      img.onload = () => {
        img.removeAttribute('data-src');
      }
    },
    imgOptions = {
      threshold: 0,
      rootMargin: "0px 0px -200px 0px" //make bottom positive so images load before entering screen;
    },
  ){
    //imagesToLoad - 
    //loadImages - 
    //imgOptions - 
    //Step1 - 
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
          if(item.isIntersecting) {
            loadImages(item.target);
            observer.unobserve(item.target);
          }
        });
      }, imgOptions);
      imagesToLoad.forEach((img) => {
        observer.observe(img);
      });
    } else {
      imagesToLoad.forEach((img)=> {
        loadImages(img);
      });
    }
  }
}