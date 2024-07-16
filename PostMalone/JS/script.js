// Navbar and move to top button
const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".menu-list");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");

menuBtn.onclick = () => {
  menu.classList.add("active");
  menuBtn.classList.add("hide");
  cancelBtn.classList.add("show");
  body.classList.add("disabledScroll");
}

cancelBtn.onclick = () => {
  menu.classList.remove("active");
  menuBtn.classList.remove("hide");
  cancelBtn.classList.remove("show");
  body.classList.remove("disabledScroll");
}

const siteLogo = document.querySelector('.logo a');

// Get all the menu items
const navLinks = document.querySelectorAll('.menu-list li');

const playSongBtn = document.querySelector('.play-song-btn');

// Add click event listener to each menu item
navLinks.forEach(item => {
  item.addEventListener('click', function () {
    // Remove the 'active' class from all menu items
    navLinks.forEach(menuItem => menuItem.classList.remove('active-menu-list'));

    // Add the 'active' class to the clicked menu item
    this.classList.add('active-menu-list');
  });
});

playSongBtn.onclick = () => {
  removeActiveClass();
}

siteLogo.onclick = () => {
  removeActiveClass();
};

function removeActiveClass() {
  navLinks.forEach(menuItem => menuItem.classList.remove('active-menu-list'));
}

window.onscroll = () => {
  this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");

  // When the user scrolls down 75px from the top of the document, show the button
  if (document.body.scrollTop > 75 || document.documentElement.scrollTop > 75) {
    moveTopBtn.style.display = "block";
  } else {
    moveTopBtn.style.display = "none";
  }
}

// PLAY MUSIC 
const playSong = document.getElementById("song");
var icon = document.getElementById("icon");

icon.addEventListener("click", playMusic);

function playMusic() {
  if (playSong.paused) {
    playSong.play();
    icon.src = "./assets/Image/pause.png";
  } else {
    playSong.pause();
    icon.src = "./assets/Image/play.png";
  }
}

// Move to Top button
var moveTopBtn = document.getElementById("moveTopBtn");

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  removeActiveClass();
}

// PreLoader
var loader = document.getElementById("loading");
function preLoader() {
  loader.style.display = "none";
}

// CHOOSE A SONG
const buttons = document.querySelectorAll(".btn");

const photo = document.getElementById("banner");
const song = document.getElementById("song");
const songName = document.getElementById("songName");
const songBy = document.getElementById("songBy");
const aboutSong = document.getElementById("aboutSong");
const title = document.getElementById("title");
const download = document.getElementById("download");

buttons[0].addEventListener("click", () => {
  icon.src = "./assets/Image/play.png";
  photo.src = "./assets/Image/beerb.jpg";
  song.src = "./assets/Songs/Post Malone - rockstar ft. 21 Savage.mp3";
  songName.innerText = "Rockstar";
  songBy.innerText = "Post Malone";
  title.innerText = "Rockstar";
  download.href = "./assets/Songs/Post Malone - rockstar ft. 21 Savage.mp3";
  aboutSong.innerText = "Rockstar is a song by American rapper and singer Post Malone featuring Atlanta-based rapper 21 Savage. It was released on September 15, 2017, by Republic Records as the lead single from Malone's second studio album Beerbongs & Bentleys.";
});

buttons[1].addEventListener("click", () => {
  icon.src = "./assets/Image/play.png";
  photo.src = "./assets/Image/hollywood.jpeg";
  song.src = "./assets/Songs/Post Malone - Wow. (Lyrics).mp3";
  songName.innerText = "Wow.";
  songBy.innerText = "Post Malone";
  title.innerText = "Wow.";
  download.href = "./assets/Songs/Post Malone - Wow. (Lyrics).mp3";
  aboutSong.innerText = "“Wow.” is a song by American rapper and singer Post Malone, released as the lead single from his third studio album, Hollywood's Bleeding, via Republic Records on December 24, 2018. The song was written by Malone alongside Billy Walsh, Anthoine Walters, Carl Rosen, and producers Louis Bell and Frank Dukes";
});

buttons[2].addEventListener("click", () => {
  icon.src = "./assets/Image/play.png";
  photo.src = "./assets/Image/beerb.jpg";
  song.src = "./assets/Songs/Post Malone - Better Now.mp3";
  songName.innerText = "Better Now";
  songBy.innerText = "Post Malone";
  title.innerText = " Better Now";
  download.href = "./assets/Songs/Post Malone - Better Now.mp3";
  aboutSong.innerText = "“Better Now” is a song by American rapper and singer Post Malone from his second studio album, Beerbongs & Bentleys. It was written by Post Malone, Billy Walsh, Louis Bell and Frank Dukes, with production handled by the latter two.";
});

buttons[3].addEventListener("click", () => {
  icon.src = "./assets/Image/play.png";
  photo.src = "./assets/Image/hollywood.jpeg";
  song.src = "./assets/Songs/Post Malone - Circles.mp3";
  songName.innerText = "Circles";
  songBy.innerText = "Post Malone";
  title.innerText = "Circles";
  download.href = "./assets/Songs/Post Malone - Circles.mp3";
  aboutSong.innerText = "“Circles”is a song by American rapper and singer Post Malone. It was released through Republic Records on August 30, 2019, as the third single from Malone's third studio album Hollywood's Bleeding.";
});

buttons[4].addEventListener("click", () => {
  icon.src = "./assets/Image/play.png";
  photo.src = "./assets/Image/stoney.jpg";
  song.src = "./assets/Songs/Post Malone - Circles.mp3";
  songName.innerText = "White Iverson";
  songBy.innerText = "Post Malone";
  title.innerText = "White Iverson";
  download.href = "./assets/Songs/Post Malone - Circles.mp3";
  aboutSong.innerText = `"White Iverson" is the debut single by American rapper and singer Post Malone. It was released through Republic Records on August 14, 2015, as the lead single from his debut studio album, Stoney. It was originally released on February 4, 2015, through Malone's SoundCloud account.`;
});

buttons[5].addEventListener("click", () => {
  icon.src = "./assets/Image/play.png";
  photo.src = "./assets/Image/stoney.jpg";
  song.src = "./assets/Songs/I Fall Apart.mp3";
  songName.innerText = "I Fall Apart";
  songBy.innerText = "Post Malone";
  title.innerText = "I Fall Apart";
  download.href = "./assets/Songs/I Fall Apart.mp3";
  aboutSong.innerText = `"I Fall Apart" is a song by American rapper and singer Post Malone. It was sent to rhythmic contemporary radio through Republic Records on October 17, 2017, as the sixth and final single from his debut studio album, Stoney. Malone wrote the song with producer Illangelo alongside Billy Walsh`;
});

buttons[6].addEventListener("click", () => {
  icon.src = "./assets/Image/play.png";
  photo.src = "./assets/Image/stoney.jpg";
  song.src = "./assets/Songs/Post Malone - Go Flex.mp3";
  songName.innerText = "Go Flex";
  songBy.innerText = "Post Malone";
  title.innerText = "Go Flex";
  download.href = "./assets/Songs/Post Malone - Go Flex.mp3";
  aboutSong.innerText = `"Go Flex" s a song by American rapper and singer Post Malone. It was released through Republic Records as the third single from his debut studio album, Stoney, on April 21, 2016. Malone wrote the song alongside Cashio and producers Rex Kudo and Charlie Handsome.`;
});

buttons[7].addEventListener("click", () => {
  icon.src = "./assets/Image/play.png";
  photo.src = "./assets/Image/beerb.jpg";
  song.src = "./assets/Songs/Post Malone - Psycho ft. Ty Dolla $ign.mp3";
  songName.innerText = "Pyscho";
  songBy.innerText = "Post Malone";
  title.innerText = "Pyscho";
  download.href = "./assets/Songs/Post Malone - Psycho ft. Ty Dolla $ign.mp3";
  aboutSong.innerText = "Psycho is a song by American rapper and singer Post Malone featuring fellow American singer Ty Dolla $ign. It was released through Republic Records on February 23, 2018, as the third single from Malone's second studio album, Beerbongs & Bentleys.";
});

buttons[8].addEventListener("click", () => {
  icon.src = "./assets/Image/play.png";
  photo.src = "./assets/Image/hollywood.jpeg";
  song.src = "./assets/Songs/Post Malone, Swae Lee - Sunflower (Spider-Man_ Into the Spider-Verse).mp3";
  songName.innerText = "Sun Flower";
  songBy.innerText = "Post Malone";
  title.innerText = "Sun Flower";
  download.href = "./assets/Songs/Post Malone, Swae Lee - Sunflower (Spider-Man_ Into the Spider-Verse).mp3";
  aboutSong.innerText = "Sunflower is a song performed by American rappers and singers Post Malone and Swae Lee. It was released on October 19, 2018, as a single from the soundtrack to the 2018 animated film Spider-Man: Into the Spider-Verse, and was later included on Post Malone's third studio album Hollywood's Bleeding.";
});

buttons[9].addEventListener("click", () => {
  icon.src = "./assets/Image/play.png";
  photo.src = "./assets/Image/austin.webp";
  song.src = "./assets/Songs/Post Malone - Chemical (Official Music Video).mp3";
  songName.innerText = "Chemical";
  songBy.innerText = "Post Malone";
  title.innerText = "Chemical";
  download.href = "./assets/Songs/Post Malone - Chemical (Official Music Video).mp3";
  aboutSong.innerText = "Chemical is a song by American rapper and singer Post Malone. It was released through Republic and Mercury Records as the lead single from his fifth studio album, Austin, on April 14, 2023. The song was produced by Malone himself, Andrew Watt, and Louis Bell, and the three wrote it alongside Billy Walsh.";
});

buttons[10].addEventListener("click", () => {
  icon.src = "./assets/Image/play.png";
  photo.src = "./assets/Image/stoney.jpg";
  song.src = "./assets/Songs/Post Malone - Congratulations ft. Quavo.mp3";
  songName.innerText = "Congratulations";
  songBy.innerText = "Post Malone";
  title.innerText = "Congratulations";
  download.href = "./assets/Songs/Post Malone - Congratulations ft. Quavo.mp3";
  aboutSong.innerText = "Congratulations is a song by American rapper and singer Post Malone featuring fellow American rapper and singer Quavo. The song, at first released as a promotional single from Malone's debut studio album Stoney on November 4, 2016, was released on January 31, 2017, as the fifth official single from the album";
});

buttons[11].addEventListener("click", () => {
  icon.src = "./assets/Image/play.png";
  photo.src = "./assets/Image/carot.jpg";
  song.src = "./assets/Songs/Post Malone - Cooped Up ft. Roddy Ricch.mp3";
  songName.innerText = "Cooped Up";
  songBy.innerText = "Post Malone";
  title.innerText = "Cooped Up";
  download.href = "./assets/Songs/Post Malone - Cooped Up ft. Roddy Ricch.mp3";
  aboutSong.innerText = "Cooped Up is a song by American rapper and singer Post Malone featuring fellow American rapper and singer Roddy Ricch. It was released through Mercury Records and Republic Records on May 12, 2022, as the second single from Malone's fourth studio album, Twelve Carat Toothache";
});








