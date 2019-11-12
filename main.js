function toggleText (btn, id) {
  var e = document.getElementById(id)
  // var e2 = document.getElementById(id2)

  if (e.style.display == 'block'){
    e.style.display = 'none';
    btn.innerHTML = 'Read More';
  }
  else {
    e.style.display = 'inline';
    btn.innerHTML = "Show Less";
  }
}
//////////////////////////////////



mybutton = document.getElementById('img-btn');

window.onscroll = function() { scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop =0;
}


// imgButton = document.getElementById('img-btn');
//
// window.onscroll = function () {scrollFunction()};
//
// function scrollFunction() {
//   if
// }
