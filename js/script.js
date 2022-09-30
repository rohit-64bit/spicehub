// slideshow loader js 

var slideshows = document.querySelectorAll('[data-component="slideshow"]')
;
slideshows.forEach(initSlideShow);

function initSlideShow(slideshow) {

    var slides = document.querySelectorAll(`#${slideshow.id} [role="list"] .slide`);

    var index = 0,
        time = 5000;
    slides[index].classList.add('active');

    setInterval(() => {
        slides[index].classList.remove('active');

        index++;
        if (index === slides.length) index = 0;

        slides[index].classList.add('active');

    }, time);
}

const searchForm = document.getElementById("searchSection")

window.onload = ()=>{
    searchForm.style.visibility = "hidden";
    searchForm.style.padding = "0rem";
    searchForm.style.height = "0px";
    $(option).toggle(false);
}


function hideSearch() {
    searchForm.style.visibility = "hidden";
    searchForm.style.padding = "0rem";
    searchForm.style.height = "0px";
}

function showSearch() {
    searchForm.style.visibility = "visible";
    searchForm.style.padding = "1rem";
    searchForm.style.height = "auto";
}


const option = document.getElementById("options")

const drop = document.getElementById("showdrop")


$(document).ready(function(){
  $(drop).click(function(){
    $(option).toggle();
  });
});

// updating the quantity counter


function decrement(e) {
    const btn = e.target.parentNode.parentElement.querySelector(
      'button[data-action="decrement"]'
    );
    const target = btn.nextElementSibling;
    let value = Number(target.value);

    if(value != 0){
        value--;
        target.value = value;
    }
    else{
        target.value = 0;
    }

    
    
  }

  function increment(e) {
    const btn = e.target.parentNode.parentElement.querySelector(
      'button[data-action="decrement"]'
    );
    const target = btn.nextElementSibling;
    let value = Number(target.value);
    value++;
    target.value = value;
  }

  const decrementButtons = document.querySelectorAll(
    `button[data-action="decrement"]`
  );

  const incrementButtons = document.querySelectorAll(
    `button[data-action="increment"]`
  );

  decrementButtons.forEach(btn => {
    btn.addEventListener("click", decrement);
  });

  incrementButtons.forEach(btn => {
    btn.addEventListener("click", increment);
  });



