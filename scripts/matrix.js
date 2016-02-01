'use strict';

var maskList = document.querySelectorAll('.mask');
var actualIndex = 0;

function setDelay(obj, delay){
  obj.style.webkitAnimationDelay = delay;
  obj.style.mozAnimationDelay = delay;
  obj.style.animationDelay = delay;
}

function runAnimation(){
  maskList[actualIndex].className += " running";

  actualIndex++;

  if(actualIndex < maskList.length) {
    setTimeout(runAnimation, 1000);
  }
}

window.onload = function(){
  maskList = document.querySelectorAll('.mask');

  runAnimation();

  /*
  for(var i = 0; i < maskList.length; i++){
    var mask = maskList[i];
    //var rnd = Math.floor((Math.random() * 1000) + 1);

    setTimeout(function(){
      runAnimation(i);
    }, 1000 * i);

    //setDelay(mask, rnd);
  }
  */
};
