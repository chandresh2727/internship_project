
// var trigger = window.innerHeight / 3;

// window.addEventListener("scroll",processall);

// // This is not done at all 


// function processall(){
//     var animation1 = document.getElementById("container");
//     var prog = container.getBoundingClientRect().top;

//     if(prog < trigger){
//         var progress1 = document.getElementById("progressHtml");
//         progress1.style.width = progress1.getAttribute("progressDoneHtml");

//         var progress2 = document.getElementById("progressCss");
//         progress2.style.width = progress2.getAttribute("progressDoneCss");

//         var progress3 = document.getElementById("progressJs");
//         progress3.style.width = progress3.getAttribute("progressDoneJs");

//         var progress4 = document.getElementById("progressReact");
//         progress4.style.width = progress4.getAttribute("progressReact");

//     }

// }





window.addEventListener("scroll", progressAll);

function progressAll() {
  const triggerProgress = (window.innerHeight / 8) * 4;
  const progressTop = document.getElementById("about-b");

  const progressStart = progressTop.getBoundingClientRect().top;

  if (progressStart < triggerProgress) {
    // HTML

    const progress = document.getElementById("progressDoneHtml");
    progress.style.width = progress.getAttribute("data-done");
    progress.style.opacity = 1;

    // CSS

    const progressCss = document.getElementById("progressDoneCss");
    progressCss.style.width = progressCss.getAttribute("data-done");
    progressCss.style.opacity = 1;

    //SASS

    const progressSass = document.getElementById("progressDoneSass");
    progressSass.style.width = progressSass.getAttribute("data-done");
    progressSass.style.opacity = 1;

    // BOOTSTRAP

    const progressBootstrap = document.getElementById("progressDoneBootstrap");
    progressBootstrap.style.width = progressBootstrap.getAttribute("data-done");
    progressBootstrap.style.opacity = 1;

    // JAVASCRIPT

    const progressJavscript = document.getElementById("progressDoneJavascript");
    progressJavscript.style.width = progressJavscript.getAttribute("data-done");
    progressJavscript.style.opacity = 1;

    // REACT

    const progressReact = document.getElementById("progressDoneReact");
    progressReact.style.width = progressReact.getAttribute("data-done");
    progressReact.style.opacity = 1;
  }
}
// increment counter
const counters = document.querySelectorAll(".counter");
counters.forEach(function (counter) {
  counter.innerText = "20";
  updatecounter();

  function updatecounter() {
    const target = +counter.getAttribute("data-target");
    const c = +counter.innerText;
    const increment = target / 1000;

    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updatecounter, 10);
    } else {
      counter.innerText = target;
    }
  }
});
