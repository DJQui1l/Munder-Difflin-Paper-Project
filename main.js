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
