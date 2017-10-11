// circle section
var firstDot = document.getElementById('firstDot');
var firstRing = document.getElementById('circle1');
var twoRing = document.getElementById('circle2');
var threeRing = document.getElementById('circle3');
var fourRing = document.getElementById('circle4');
var fiveRing = document.getElementById('circle5');
var sixRing = document.getElementById('circle6');
var colorRing = document.getElementsByClassName('circleColor');
var splash1 = document.getElementById('splash');
var splash2 = document.getElementById('splash2');
var splash3 = document.getElementById('splash3');
var line1 = document.getElementsByClassName('line1');
var line2 = document.getElementsByClassName('line2');
var triangle1 = document.getElementById('triangle1');
var bum1 = document.getElementById('bum1');
var triangle2 = document.getElementById('triangle2');
var lineHip = document.getElementById('line_hip');
var lineHip2 = document.getElementById('line_hip2');
var zig = document.getElementsByClassName('lineBum');
var zag = document.getElementById('line_top');
var drop1 = document.getElementById('drop1');
var drop2 = document.getElementById('drop2');
var drop3 = document.getElementById('drop3');
var drop4 = document.getElementById('drop4');
var lineBox = document.getElementsByClassName('line_box');
var boxBlack = document.getElementById('box_black');
var boxWhite = document.getElementById('box_white');
var boxstrokeWhite = document.getElementsByClassName('box_strokeWhite');
var boxstrokeWhiteGen = document.getElementById('box_strokeWhite');
var cloudStrokeGen = document.getElementById('cloudStroke');
var cloudStroke = document.getElementsByClassName('cloudStroke');
var cloudBody = document.getElementById('cloud');
var heart = document.getElementsByClassName('heart');
var logoContainer = document.getElementsByClassName('logoContainer');
var logo = document.getElementsByClassName('logo');
var theLines1 = document.getElementsByClassName('theLines1');
var theLines2 = document.getElementsByClassName('theLines2');
var plane = document.getElementById('plane');

var firstTl = new TimelineLite();

firstTl.from(firstDot, 0.5, {opacity: 0, ease:Power3.easeInOut})
.to(firstDot, 1, {top: '1vh', ease:Bounce.easeIn, repeat:3, yoyo:true})
.from(firstRing, 0.7, {scale: 0, autoAlpha: 0, ease:Power1.easeInOut}, '-=0.3')
.from(twoRing, 0.7, {scale: 0, autoAlpha: 0, ease:Power1.easeInOut})
.from(threeRing, 0.7, {scale: 0, autoAlpha: 0, ease:Power1.easeInOut})
.from(fourRing, 0.7, {scale: 0, autoAlpha: 0, ease:Power1.easeInOut})
.from(fiveRing, 0.7, {scale: 0, autoAlpha: 0, ease:Power1.easeInOut})
.from(sixRing, 0.7, {scale: 0, autoAlpha: 0, ease:Power1.easeInOut})
.to(colorRing, 1, {stroke: '#EEEEEE', ease:Power4.easeInOut, repeat:5, yoyo:true})
.from(splash, 1.5, {scale: 0, autoAplha: 0, ease:Power1.easeInOut}, '-=1')
.to(splash, 0.3, {opacity: 0, ease:Power3.easeInOut}, '-=0.7')
.from(splash2, 1.5, {scale: 0, autoAplha: 0, ease:Power1.easeInOut})
.to(splash2, 0.3, {opacity: 0, ease:Power3.easeInOut}, '-=0.7')
.from(splash, 1.5, {scale: 0, autoAplha: 0, ease:Power1.easeInOut}, '-=1')
.to(splash, 0.3, {opacity: 0, ease:Power3.easeInOut}, '-=0.7')
.from(splash2, 1.5, {scale: 0, autoAplha: 0, ease:Power1.easeInOut})
.to(splash2, 0.3, {opacity: 0, ease:Power3.easeInOut}, '-=0.7')
.from(splash3, 1.5, {scale: 0, autoAplha: 0, ease:Power1.easeInOut}, '-=7')
.to(splash3, 0.3, {opacity: 0, ease:Power3.easeInOut}, '-=6.5')
.from(splash4, 1.5, {scale: 0, autoAplha: 0, ease:Power1.easeInOut}, '-=8')
.to(splash4, 0.3, {opacity: 0, ease:Power3.easeInOut}, '-=7.5')
.to([firstRing, twoRing, threeRing, fourRing, fiveRing, sixRing], 1.3, {scale: 0, opacity: 0, ease:Bounce.easeIn}, '-=3')
.to(firstDot, 0.1, {opacity:0})
.to(line1, 3, {strokeDashoffset: 0, ease:Power3.easeInOut}, '-=11')
.to(line2, 2, {strokeDashoffset: 0, ease:Power3.easeInOut}, '-=9')
.to(line1, 1, {strokeDashoffset: 3700, ease:Power3.easeInOut}, '-=5')
.to(line2, 1, {strokeDashoffset: 3700, ease:Power3.easeInOut}, '-=3')
.from(triangle1, 3, {scale: 0, rotation: 720, transformOrigin: '50% 50%', autoAplha: 0, ease:Power3.easeInOut}, '-=3')
.from(bum1, 0.2, {scale: 0, autoAplha: 0, ease:Power4.easeInOut}, '-=0.5')
.to(bum1, 0.1, {opacity: 0, ease:Bounce.easeIn}, '-=0.37')
.from(triangle2, 0.1, {scale: 0, autoAplha: 0, ease:Power1.easeInOut},'-=0.4')
.from(lineHip, 0.7, {scaleX: 0, autoAlpha: 0, tranformOrigin: '55% 0%', ease:Power4.easeInOut})
.from(lineHip2, 0.7, {scaleX: 0, autoAlpha: 0, tranformOrigin: '55% 0%', ease:Power4.easeInOut})
.to(zig, 1.5, {strokeDashoffset: 0, ease:Power1.easeInOut})
.to(triangle1, 0.1, {opacity: 0}, '-=3')
.to([triangle2, lineHip, lineHip2, zig], 0.7, {rotation: -77, transformOrigin: '50% 50%', scale: 0.3, ease:Power1.easeInOut})
.to([triangle2, lineHip, lineHip2, zig], 0.3, {left: '23vw', ease:Power1.easeInOut})
.from(zag, 1, {scaleX: 0})
.to(zag, 1, {scaleX: 10, scaleY: 100, left:'-47vw'})
.to([triangle2, lineHip, lineHip2, zig], 0.3, {left: '39vw', scale: 0, opacity: 0, ease:Power1.easeInOut})
.fromTo(drop1, 1, {scale: 0}, {scale: 1, left: '55vw'})
.fromTo(drop2, 1, {scale: 0}, {scale: 1, left: '59vw'}, '-=0.5')
.fromTo(drop3, 1, {scale: 0}, {scale: 1, left: '63vw'}, '-=0.77')
.fromTo(drop4, 1, {scale: 0}, {scale: 1, left: '65vw'}, '-=1.1')
.to([drop1, drop2, drop3, drop4], 1, {width: '205%', left: '-45%', top: '-45%',  ease:Elastic.easeInOut})
.to(boxstrokeWhite, 1.3, {strokeDashoffset: 0, ease:Power1.easeInOut})
.to(lineBox, 1, {strokeDashoffset: 0, ease:Power2.easeInOut})
.to(boxstrokeWhiteGen, 1.3, {rotation: 160, transformOrigin: '50% 50%', ease:Power2.easeInOut})
.from(boxBlack, 1.3, {scale: 0, autoAlpha: 0, ease:Power2.easeInOut}, '-=1.5')
.to(lineBox, 0.1, {strokeDashoffset: 1000, ease:Power1.easeInOut}, '-=1')
.to(boxBlack, 1, {rotation: -45, transformOrigin: '50% 50%', ease:Power2.easeInOut})
.from(boxWhite, 0.7, {scale: 0, autoAlpha: 0, ease:Back.easeOut}, '-=2.7')
.to(boxWhite, 0.7, {left: '47vw', ease:Power1.easeInOut}, '-=2')
.to(boxBlack, 1, {left: '43vw', rotation: 90, ease:Power1.easeInOut}, '-=1.7')
.to([boxBlack, boxWhite, boxstrokeWhiteGen], 0.5, {rotation: 90})
.to(boxBlack, 0.3, {left: '35vw', ease:Power1.easeInOut})
.to(boxWhite, 0.3, {left: '38vw', ease:Power1.easeInOut})
.to(boxstrokeWhiteGen, 0.3, {left: '36.6vw', ease:Power1.easeInOut})
.to([boxBlack, boxWhite, boxstrokeWhiteGen], 0.5, {scale: 0.57})
.to(boxBlack, 0.5, {top: '29vh', zIndex: 3})
.to(boxWhite, 0.5, {top: '41vh', scaleX: 0.47, scaleY: 1.5, zIndex: 1, ease:Power1.easeInOut})
.to(boxstrokeWhiteGen, 0.5, {top: '19vh', scaleX: 1.1, scaleY: 0.3, ease:Power1.easeInOut})
.to(cloudStroke, 1, {strokeDashoffset: 0, ease:Power1.easeInOut})
.from(cloudBody, 0.1, {scale: 0, autoAlpha: 0, ease:Power3.easeInOut})
.to(heart, 1, {strokeDashoffset: 0, ease:Power1.easeInOut})
.to([theLines1, theLines2], 1, {scaleX: 9, scaleY: 3, ease:Power1.easeInOut})
.from (plane, 0.3, {scale: 0, autoAlpha: 0, ease:Power1.easeInOut})
.to([theLines1, theLines2], 1, {scaleX: 0, scaleY: 0, ease:Power1.easeInOut})
.from(logoContainer, 1, {scale: 0, autoAlpha: 0, ease:Elastic.easeOut}, '-=1')











;
