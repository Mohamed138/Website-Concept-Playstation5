window.onload=function(){
    setTimeout(logo, 1000);
    setTimeout(menu1, 1000);
    setTimeout(menu2, 1000);
    setTimeout(socialmedia, 1000);
    setTimeout(slide, 1000);
    setTimeout(content, 1500);
    setTimeout(content2, 1500);
    setTimeout(img, 1500);
    setTimeout(navigator, 1500);
}
function logo(){
    var h=document.querySelector('#logo i');
    h.style.opacity='1';
}
function menu1(){
    var l=document.querySelectorAll('#menu1 li');
    var i;
    for(i=0; i<l.length; i++){
        l[i].style.opacity='1';
        l[i].style.transform='translate(0)';
    }
}

function menu2(){
    var l=document.querySelectorAll('#menu2 li');
    var i;
    for(i=0; i<l.length; i++){
        l[i].style.opacity='1';
        l[i].style.transform='translate(0)';
    }
}

function socialmedia(){
    var l=document.querySelectorAll('#socialmedia li');
    var i;
    for(i=0; i<l.length; i++){
        l[i].style.opacity='1';
        l[i].style.transform='translate(0)';
    }
}

function slide(){
    var l=document.querySelectorAll('#slide li');
    var i;
    for(i=0; i<l.length; i++){
        l[i].style.opacity='1';
        l[i].style.transform='translate(0)';
    }
}

function content(){
    var he=document.querySelector('#content h1');
    he.style.opacity='1';
    he.style.transform='translate(0)';

    var p=document.querySelector('#content p');
    p.style.opacity='1';
    p.style.transform='translate(0)';

    var b=document.querySelector('#content button');
    b.style.opacity='1';
    b.style.transform='translate(0)';
}

function content2(){
    var c=document.querySelector('#content2');
    c.style.opacity='1';
    c.style.transform='translate(0)';
    var he=document.querySelector('#content2 h4');
    he.style.opacity='1';
    he.style.transform='translate(0)';
    var p=document.querySelector('#content2 p');
    p.style.opacity='1';
    p.style.transform='translate(0)';
}

function img(){
    var im=document.querySelector('#img');
    im.style.opacity='1';
    im.style.transform='translate(0)';
}

function navigator(){
    var n=document.querySelector('#navigator');
    n.style.opacity='1';
    n.style.transform='translate(0)';
}

/* Js - Mohamed Taha */
/* Design Web Playstation Concept - Mohamed Taha */
/* License : Free Not for commercial use */
         /* License : Follow me */
/* facebook : https://www.facebook.com/MT.Attia */
/* behance : https://www.behance.net/Mohamed-Taha */