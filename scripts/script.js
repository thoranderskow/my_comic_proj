let html_reset = "<img id='img' style='display: none'> <div id='panel1' class='panel' onclick='panel1_handler()'> </div> <div id='panel2' class='panel' onclick='panel2_handler()'> </div> <div id='panel3' class='panel' onclick='panel3_handler()'> </div> <div id='panel4' class='panel' onclick='panel4_handler()'> </div>";
let end_screen = "<img id='img' style='display: none'> <a id='link1'><div id='panel1' class='panel'> </div></a><a id='link2'> <div id='panel2' class='panel'> </div></a><a id='link3'> <div id='panel3' class='panel'> </div> </a><a id='link4'><div id='panel4' class='panel'> </div></a><a id='link5'> <div id='panel5' class='panel'>  </div> </a><a id='link6'> <div id='panel6' class='panel'>  </div></a>";
let reveal2 = 0;
let reveal3 = 0;
let reveal4 = 0;
let loops = 0;
let quotes = [['Instagram.', 'Vanity?', 'Confidence.', 'Affirmation.'], ['LinkedIn.', 'Success.', 'Ambition.', 'Business.'],['Facebook.', 'Comparison.', 'Updates.', 'Info.'],['Reddit.', 'Hivemind.', 'Cultivated.', 'News.'], ['Youtube.', 'Sanitized.', 'Ads.', 'Monetization.'],['Email.', 'Identifier.', 'Correspondence.', 'Footprint.'],['You.', 'On.', 'The.', 'Web.']];
let images = ['images/girlatbeach.png','images/professional.png','images/fb.png','images/reddit.png', 'images/youtube.png', 'images/email.png' ]
let links = ['http://www.instagram.com', 'http://www.linkedin.com', 'http://www.facebook.com', 'http://www.reddit.com', 'http://www.youtube.com', 'http://www.gmail.com']

function reset() {
  let p = document.getElementById('scr');
  reveal1 = 0;
  reveal2 = 0;
  reveal3 = 0;
  reveal4 = 0;
  loops += 1;
  p.innerHTML = html_reset;
  document.getElementById('scr').style = ""
}

function show_img(image){
  let p = document.getElementById('scr');
  p.style = "";
  let img = document.getElementById('img')
  img.src = image;
  img.style = "width: 100%; height: 100%; display: block; border-radius: 25px;"
  document.getElementById('scr').style = "height: 30vw;"
  setTimeout(() => {  reset(); }, 3000);
}

function set_image() {
  for (let i = 1; i < 5; i++) {
    let element = "panel" + i;
    let p = document.getElementById(element);
    p.innerHTML = "";
    p.style.display = "none";
    p.onclick = "";
  }
  if (loops == 6) {
    document.getElementById('body').innerHTML = end_screen;
    for (let i = 1; i < 7; i++){
      let element = "panel" + i;
      let p = document.getElementById(element);
      let img = images[i-1];
      p.style.backgroundImage = "url('"+img+"')";
      document.getElementById('link'+i).href = links[i-1];

    }
  } else {
    show_img(images[loops]);
  }
}

function get_strings(num, loop) {
  return quotes[loop][num];
}

function panel1_handler() {
  let p = document.getElementById('panel1');
  let s1 = get_strings(0, loops);
  p.innerHTML = "<h1>" + s1 + "</h1>";
  reveal1 = 1;
  if (reveal1 && reveal2 && reveal3 && reveal4) {
    setTimeout(() => {  set_image(); }, 2000);
  }
}
function panel2_handler() {
  let p =   document.getElementById('panel2');
  let s2 = get_strings(1, loops);
  p.innerHTML = "<h1>" + s2 + "</h1>";
  reveal2 = 1;
  if (reveal1 && reveal2 && reveal3 && reveal4) {
    setTimeout(() => {  set_image(); }, 2000);
  }
}
function panel3_handler() {
  let p =   document.getElementById('panel3');
  let s3 = get_strings(2, loops);
  p.innerHTML = "<h1>" + s3 + "</h1>";
  reveal3 = 1;
  if (reveal1 && reveal2 && reveal3 && reveal4) {
    setTimeout(() => {  set_image(); }, 2000);
  }
}
function panel4_handler() {
  let p =   document.getElementById('panel4');
  let s4 = get_strings(3, loops);
  p.innerHTML = "<h1>" + s4 + "</h1>";
  reveal4 = 1;
  if (reveal1 && reveal2 && reveal3 && reveal4) {
    setTimeout(() => {  set_image(); }, 2000);
  }
}
