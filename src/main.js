// query selector variables go here :point_down:
var mainFrame = document.querySelector('.main-poster');
//Variables to access poster values on main page
var posterTitle = document.querySelector('.poster-title');
var posterQuote = document.querySelector('.poster-quote');
var posterImage = document.querySelector('.poster-img');
//Variables for main page buttons
var buttonShowRandom = document.querySelector('.show-random');
var buttonShowSavedPoster = document.querySelector('.show-saved');
var buttonMakePoster = document.querySelector('.show-form');
var buttonSaveThisPoster = document.querySelector('.save-poster');
//Variables for saved poster page
var postersSaved = document.querySelector('.saved-posters');
var savedPostersGrid = document.querySelector('.saved-posters-grid');
var buttonBackToMain = document.querySelector('.back-to-main');
//Variables for make poster page
var posterForm = document.querySelector('.poster-form');
var buttonShowMain = document.querySelector('.show-main');
var buttonShowMyPoster = document.querySelector('.make-poster');
//Variables for make your own poster page
var createPosterTitle = document.querySelector('#poster-title');
var createPosterImg = document.querySelector('#poster-image-url');
var createPosterQuote = document.querySelector('#poster-quote');
// we've provided you with some data to work with :point_down:
var images = [
  "./assets/bees.jpg",
  "./assets/bridge.jpg",
  "./assets/butterfly.jpg",
  "./assets/cliff.jpg",
  "./assets/elephant.jpg",
  "./assets/flock.jpg",
  "./assets/fox.jpg",
  "./assets/frog.jpg",
  "./assets/horse.jpg",
  "./assets/lion.jpg",
  "./assets/mountain.jpg",
  "./assets/pier.jpg",
  "./assets/puffins.jpg",
  "./assets/pug.jpg",
  "./assets/runner.jpg",
  "./assets/squirrel.jpg",
  "./assets/tiger.jpg",
  "./assets/turtle.jpg"
];
var titles = [
  "determination",
  "success",
  "inspiration",
  "perspiration",
  "grit",
  "empathy",
  "feelings",
  "hope",
  "believe",
  "try",
  "conviction",
  "accomplishment",
  "achievement",
  "ambition",
  "clarity",
  "challenge",
  "commitment",
  "confidence",
  "action",
  "courage",
  "focus",
  "breathe",
  "gratitude",
  "imagination",
  "kindness",
  "mindfulness",
  "knowledge",
  "opportunity",
  "passion",
  "patience",
  "practice",
  "smile",
  "trust",
  "understanding",
  "wisdom"
];
var quotes = [
  "Don’t downgrade your dream just to fit your reality, upgrade your conviction to match your destiny.",
  "You are braver than you believe, stronger than you seem and smarter than you think.",
  "You are confined only by the walls you build yourself.",
  "The one who has confidence gains the confidence of others.",
  "Act as if what you do makes a difference. It does.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Never bend your head. Always hold it high. Look the world straight in the eye.",
  "What you get by achieving your goals is not as important as what you become by achieving your goals.",
  "Believe you can and you're halfway there.",
  "When you have a dream, you've got to grab it and never let go.",
  "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
  "No matter what you're going through, there's a light at the end of the tunnel.",
  "It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome.",
  "Life is like riding a bicycle. To keep your balance, you must keep moving.",
  "Just don't give up trying to do what you really want to do. Where there is love and inspiration, I don't think you can go wrong.",
  'Limit your "always" and your "nevers."',
  "You are never too old to set another goal or to dream a new dream.",
  "Try to be a rainbow in someone else's cloud.",
  "You do not find the happy life. You make it.",
  "Inspiration comes from within yourself. One has to be positive. When you're positive, good things happen.",
  "Sometimes you will never know the value of a moment, until it becomes a memory.",
  "The most wasted of days is one without laughter.",
  "You must do the things you think you cannot do.",
  "It isn't where you came from. It's where you're going that counts.",
  "It is never too late to be what you might have been.",
  "Happiness often sneaks in through a door you didn't know you left open.",
  "We must be willing to let go of the life we planned so as to have the life that is waiting for us.",
  "Never limit yourself because of others’ limited imagination; never limit others because of your own limited imagination.",
  "Be the change that you wish to see in the world.",
  "Let us make our future now, and let us make our dreams tomorrow's reality.",
  "You don't always need a plan. Sometimes you just need to breathe, trust, let go, and see what happens.",
  "If I cannot do great things, I can do small things in a great way.",
  "Don't wait. The time will never be just right.",
  "With the right kind of coaching and determination you can accomplish anything.",
  "If you have good thoughts they will shine out of your face like sunbeams and you will always look lovely.",
  "No matter what people tell you, words and ideas can change the world.",
  "Each person must live their life as a model for others.",
  "A champion is defined not by their wins but by how they can recover when they fall."
];
var savedPosters = [];
var currentPoster;
// event listeners go here :point_down:
//Buttons to toggle between make poster form and main page
buttonMakePoster.addEventListener('click', makePosterForm);
buttonShowMain.addEventListener('click', makePosterForm);
//Buttons to toggle main and saved poster page, load saved posters grid
buttonShowSavedPoster.addEventListener('click', function () {
  showSavedPosters();
  addSavedToGrid();
});
buttonBackToMain.addEventListener('click', showSavedPosters);
//Button to show a random poster on main when clicked
buttonShowRandom.addEventListener('click', newPosterInstance);
//Button to show user created poster when clicked
buttonShowMyPoster.addEventListener('click', showMyPoster);
//Button to save, and add saved posters to saved posters page
buttonSaveThisPoster.addEventListener('click', saveThisPoster);
//Event listener to open page with random poster
window.addEventListener('load', newPosterInstance);
// functions and event handlers go here :point_down:
// (we've provided one for you to get you started)!
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};
//Function to set values to new Poster class instance
function newPosterInstance() {
  var newPosterObject = {
    randomImage: createPosterImg.value || images[getRandomIndex(images)],
    randomTitle: createPosterTitle.value || titles[getRandomIndex(titles)],
    randomQuote: createPosterQuote.value || quotes[getRandomIndex(quotes)],
  };
  currentPoster = new Poster(
    newPosterObject.randomImage,
    newPosterObject.randomTitle,
    newPosterObject.randomQuote,
  );
  posterImage.src = newPosterObject.randomImage;
  posterTitle.innerText = newPosterObject.randomTitle;
  posterQuote.innerText = newPosterObject.randomQuote;
};
//Page toggle functions
function makePosterForm() {
  mainFrame.classList.toggle('hidden');
  posterForm.classList.toggle('hidden');
};
function showSavedPosters() {
  postersSaved.classList.toggle('hidden');
  mainFrame.classList.toggle('hidden');
};
//Function to show user poster on main page
//Function also pushes user input to pre-loaded arrays
function showMyPoster() {
  event.preventDefault();
  newPosterInstance();
  var createdPosterObject = {
    userImage: createPosterImg.value,
    userTitle: createPosterTitle.value,
    userQuote: createPosterQuote.value,
  };
  posterImage.src = createdPosterObject.userImage;
  posterTitle.innerText = createdPosterObject.userTitle;
  posterQuote.innerText = createdPosterObject.userQuote;
  images.push(posterImage.src);
  titles.push(posterTitle.innerText);
  quotes.push(posterQuote.innerText);
  makePosterForm();
};
//Function to save user poster to saved posters array once
function saveThisPoster() {
  if (!savedPosters.includes(currentPoster)) {
    savedPosters.push(currentPoster);
  };
};
//Function to show mini saved posters on saved posters grid
function addSavedToGrid() {
  savedPostersGrid.innerHTML = '';
  for (var i = 0; i < savedPosters.length; i++) {
    savedPostersGrid.innerHTML += `
    <article class='mini-poster'>
      <img src=${savedPosters[i].imageURL}>
      <h2>${savedPosters[i].title}</h2>
      <h4>${savedPosters[i].quote}</h4>
    </article>`
  };
};
