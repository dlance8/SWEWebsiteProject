function showCheck(){
  var x = document.getElementById('check');
  var y = document.getElementById('card');
  y.style.display = "none";
  if (x.style.display === "none"){
    x.style.display = "block";
  }else {
    x.style.display = "none";
  }
}


function showCard(){
  var x = document.getElementById('card');
  var y = document.getElementById('check');
  y.style.display = "none";
  if (x.style.display === "none"){
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

}
