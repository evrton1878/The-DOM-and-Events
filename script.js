let button = null;
let paragraph = null;
let missionAbort = null;

function init () {
    missionAbort = document.getElementById("abortMission");
    button = document.getElementById("liftoff");
    paragraph = document.querySelector("p");

    // Put your code for the exercises here.
    button.addEventListener("click", function () {
      paragraph.innerHTML="Houston, we have lift off!";
          });
          missionAbort.addEventListener("mouseover", function() {
        missionAbort.style.backgroundColor = "red";
    });
     missionAbort.addEventListener("mouseout", function() {
         missionAbort.style.backgroundColor="" ;
     });
    missionAbort.addEventListener("click", function () {
      let responce =confirm("Are you sure you want to abort the mission?");;
          });
   
}

window.onload = init;