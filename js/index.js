//Slide
let sliderImages = document.querySelectorAll('.slide'),
    arrowLeft = document.querySelector('#arrow-left'),
    arrowRight = document.querySelector('#arrow-right'),
    current = 0;

//Clear Images
function reset() {
    for (let i = 0; i < sliderImages.length; i++) {
        sliderImages[i].style.display = 'none';        
    }
}

//Init Slider
function startSlide() {    
    reset();
    sliderImages[0].style.display = 'block';
}

//Show Prev
function slideLeft() {
    reset();
    sliderImages[current-1].style.display = 'block';
    current--;
}

//Show next
function slideRight() {
    reset();
    sliderImages[current+1].style.display = 'block';
    current++;
}

//Left arrow click
arrowLeft.addEventListener('click', () =>{
    if (current === 0) {
        current = sliderImages.length;
    }
    slideLeft();
})

//Right arrow click
arrowRight.addEventListener('click', () =>{
    if (current === sliderImages.length-1) {
        current = -1;
    }
    slideRight();
})

startSlide();



//Tabs
function openServices(evt, serviceTab) {
    let i, tabcontent, servicesTablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    servicesTablinks = document.getElementsByClassName("services-tablinks");
    for (i = 0; i < servicesTablinks.length; i++) {
        servicesTablinks[i].className = servicesTablinks[i].className.replace(" active", "");
    }
    document.getElementById(serviceTab).style.display = "block";
    evt.currentTarget.className += " active";

  }
  document.getElementById("defaultOpen").click();

  //hide and show remanind info service
  function hideAndShow() {
    let x = document.getElementById("rest-info");
    if (x.style.display === "none") {
      x.style.display = "block";

    } else {
      x.style.display = "none";
    }
  }

 
  

