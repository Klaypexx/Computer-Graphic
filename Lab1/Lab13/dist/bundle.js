(()=>{"use strict";var e;null===(e=document.getElementById("circleForm"))||void 0===e||e.addEventListener("submit",(function(e){e.preventDefault(),function(e,t,n,r){var a=document.getElementById("canvas"),l=a.getContext("2d");if(l){var o=0,i=2*Math.PI/1e3,d=function(){l.clearRect(0,0,a.width,a.height),l.fillStyle=n;for(var c=0;c<=o;c++){var m=c*i,v=e.x+Math.round(t*Math.cos(m)),h=e.y+Math.round(t*Math.sin(m));v>=0&&v<a.width&&h>=0&&h<a.height&&l.fillRect(v,h,1,1)}o<1e3?(o++,requestAnimationFrame(d)):u(e,t,r)},u=function(e,t,n){var r=t-.5;l.fillStyle=n;for(var o=-r;o<=r;o++){var i=Math.floor(Math.sqrt(r*r-o*o));console.log(i);for(var d=e.x-i,u=e.x+i,c=d;c<=u;c++){var m=c,v=e.y+o;m>=0&&m<a.width&&v>=0&&v<a.height&&l.fillRect(m,v,1,1)}}};requestAnimationFrame(d)}}({x:parseInt(document.getElementById("centerX").value,10),y:parseInt(document.getElementById("centerY").value,10)},parseInt(document.getElementById("radius").value,10),document.getElementById("borderColor").value,document.getElementById("fillColor").value)}))})();