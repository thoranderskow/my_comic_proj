var html_reset = "<img id='img' style='display: none'> <div id='panel1' class='panel' onclick='panel1_handler()'> </div> <div id='panel2' class='panel' onclick='panel2_handler()'> </div> <div id='panel3' class='panel' onclick='panel3_handler()'> </div> <div id='panel4' class='panel' onclick='panel4_handler()'> </div>";
var reveal1 = 0;
var reveal2 = 0;
var reveal3 = 0;
var reveal4 = 0;
var loops = 0;
var quotes = [['Here is me.', 'Vanity?', 'Confidence.', 'Affirmation.'], ['Here is me.', 'Vanity?', 'Confidence.', 'Affirmation.']];
var images = ['images/girlatbeach.png']

function reset() {
  var p = document.getElementById('scr');
  reveal1 = 0;
  reveal2 = 0;
  reveal3 = 0;
  reveal4 = 0;
  loops += 1;
  p.innerHTML = html_reset;
}

function show_img(image){
  var p = document.getElementById('scr');
  p.style = "";
  var img = document.getElementById('img')
  img.src = image;
  img.style = "width: 100%; height: 100%; display: block; border-radius: 25px;"
  setTimeout(() => {  reset(); }, 3000);
}

function set_image() {
  for (let i = 1; i < 5; i++) {
    var element = "panel" + i;
    var p = document.getElementById(element);
    p.innerHTML = "";
    p.style.display = "none";
    p.onclick = "";
  }
  show_img(images[loops]);
}

function get_strings(num, loop) {
  return quotes[loop][num];
}

function panel1_handler() {
  var p = document.getElementById('panel1');
  var s1 = get_strings(0, loops);
  p.innerHTML = "<h1>" + s1 + "</h1>";
  reveal1 = 1;
  if (reveal1 && reveal2 && reveal3 && reveal4) {
    setTimeout(() => {  set_image(); }, 2000);
  }
/*  p.style.backgroundImage = "url('images/girlatbeach.png')";*/
}
function panel2_handler() {
  var p =   document.getElementById('panel2');
  var s2 = get_strings(1, loops);
  p.innerHTML = "<h1>" + s2 + "</h1>";
  reveal2 = 1;
  if (reveal1 && reveal2 && reveal3 && reveal4) {
    setTimeout(() => {  set_image(); }, 2000);
  }
}
function panel3_handler() {
  var p =   document.getElementById('panel3');
  var s3 = get_strings(2, loops);
  p.innerHTML = "<h1>" + s3 + "</h1>";
  reveal3 = 1;
  if (reveal1 && reveal2 && reveal3 && reveal4) {
    setTimeout(() => {  set_image(); }, 2000);
  }
}
function panel4_handler() {
  var p =   document.getElementById('panel4');
  var s4 = get_strings(3, loops);
  p.innerHTML = "<h1>" + s4 + "</h1>";
  reveal4 = 1;
  if (reveal1 && reveal2 && reveal3 && reveal4) {
    setTimeout(() => {  set_image(); }, 2000);
  }
}
