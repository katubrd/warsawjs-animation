

function firstScene() {
  var firstBox = document.getElementById('first-box');
  var tl = new TimelineLite();

  tl.to(firstBox, 1, {x: '37%', ease:Power2.easeInOut});
  tl.to(firstBox, 0.3, {x:'-23%', ease:Power4.easeOut}, '+=0.23');
  tl.to(firstBox, 0.5, {x:'27%', rotation:30, transormOrigin:'50% 50%', ease:Power3.easeInOut}, '+=0.23');
  tl.to(firstBox, 1.5, {x:'-33%', rotation:-1, transormOrigin:'50% 50%', ease:Power1.easeInOut}, '+=0.13');


  console.log('hey');

  tl.timeScale(0.7);
  return tl;
}

var master = new TimelineMax({});
master.add(firstScene());
