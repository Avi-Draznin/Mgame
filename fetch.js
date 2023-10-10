// ------------------------------------------------------------------------------
// -----------------------A-L-I-C-E---I-N---W-O-N-D-E-R-L-A-N-D------------------
// ------------------------------------------------------------------------------

let aliceM = false;
function aliceIn() {
  try {
    const startingMessage = document.getElementById("startingMessage");
    startingMessage.classList.remove("show");
    if (playTogether) {
      toggleScorePlayersVisibility(true);
    } else {
      startTimer();
    }
    toggleGameButtonsVisibility(true);
    resetScores();
    updateScores();
    jungleM = false;
    aladdinM = false;
    lionKingM = false;
    hpM = false;
    mvM = false;
    dogM = false;
    rickAndMortyM = false;
    aliceM = true;
    // clickPlayButton();
    // Define an array of picture URLs. You can replace these with your own URLs.
    const pictureUrls = [
      "/img/alice/aw1.jpg",
      "/img/alice/aw2.jpg",
      "/img/alice/aw3.jpg",
      "/img/alice/aw4.jpg",
      "/img/alice/aw5.jpg",
      "/img/alice/aw6.jpg",
      "/img/alice/aw7.jpg",
      "/img/alice/aw8.jpg",
      "/img/alice/aw9.jpg",
      "/img/alice/aw10.jpg",
      "/img/alice/aw11.jpg",
      "/img/alice/aw12.jpg",
      "/img/alice/aw13.jpg",
      "/img/alice/aw14.jpg",
      "/img/alice/aw15.jpg",
      "/img/alice/aw16.jpg",
      "/img/alice/aw17.jpg",
      "/img/alice/aw18.jpg",
      "/img/alice/aw19.jpg",
      "/img/alice/aw20.jpg",
      "/img/alice/aw21.jpg",
      "/img/alice/aw22.jpg",
      "/img/alice/aw23.jpg",
      "/img/alice/aw24.jpg",
      "/img/alice/aw25.jpg",
    ];

    // Shuffle the pictureUrls array to randomize the order
    shuffleArray(pictureUrls);
    // Create an array to hold the character data
    const characterData = pictureUrls.slice(0, 25).map((url) => ({
      image: url,
    }));

    // Duplicate the character data to get 50 cards
    const duplicatedCharacterData = [...characterData, ...characterData];

    // Shuffle the duplicated character data randomly
    shuffleArray(duplicatedCharacterData);

    // Get all elements with class "front"
    const frontElements = document.querySelectorAll(".front");

    // Set background image for each back element
    // Get all elements with class "back"
    const backElements = document.querySelectorAll(".back");

    // Loop through each ".back" element and add event listeners
    backElements.forEach((backElement) => {
      // Set the default background image
      backElement.style.backgroundImage = 'url("/img/alice/aliceg.jpg")';

      // Add a mouseover event listener to change the background image on hover
      backElement.addEventListener("mouseover", function () {
        backElement.style.backgroundImage = 'url("/img/alice/aliceg.gif")';
      });

      // Add a mouseout event listener to restore the default background image
      backElement.addEventListener("mouseout", function () {
        backElement.style.backgroundImage = 'url("/img/alice/aliceg.jpg")';
      });
    });

    // Set background images for each front element
    duplicatedCharacterData
      .slice(0, frontElements.length)
      .forEach((character, index) => {
        frontElements[index].style.backgroundImage = `url(${character.image})`;
      });

    // Set other game settings, such as cursor and board background

    document.body.style.cursor = 'url("/cursors/alice.cur"), auto';
    const boardElement = document.querySelector(".board");
    boardElement.style.backgroundImage = 'url("/img/alice/alicewal3.jpg")';

    // Call the function to initialize the game
    restartGame();
  } catch (error) {
    console.error(error);
  }
}

// ------------------------------------------------------------------------------
// ---------------------------J-U-N-G-L-E---B-O-O-K------------------------------
// ------------------------------------------------------------------------------

let jungleM = false;
function jungleBook() {
  try {
    const startingMessage = document.getElementById("startingMessage");
    startingMessage.classList.remove("show");
    if (playTogether) {
      toggleScorePlayersVisibility(true);
    } else {
      startTimer();
    }
    toggleGameButtonsVisibility(true);
    resetScores();
    updateScores();
    jungleM = true;
    aladdinM = false;
    lionKingM = false;
    hpM = false;
    mvM = false;
    dogM = false;
    rickAndMortyM = false;
    aliceM = false;
    // clickPlayButton();
    // Define an array of picture URLs. You can replace these with your own URLs.
    const pictureUrls = [
      "/img/junglebook/jb1.jpg",
      "/img/junglebook/jb2.jpg",
      "/img/junglebook/jb3.jpg",
      "/img/junglebook/jb4.jpg",
      "/img/junglebook/jb5.jpg",
      "/img/junglebook/jb6.jpg",
      "/img/junglebook/jb7.jpg",
      "/img/junglebook/jb8.jpg",
      "/img/junglebook/jb9.jpg",
      "/img/junglebook/jb10.jpg",
      "/img/junglebook/jb11.jpg",
      "/img/junglebook/jb12.jpg",
      "/img/junglebook/jb13.jpg",
      "/img/junglebook/jb14.jpg",
      "/img/junglebook/jb15.jpg",
      "/img/junglebook/jb16.jpg",
      "/img/junglebook/jb17.jpg",
      "/img/junglebook/jb18.jpg",
      "/img/junglebook/jb19.jpg",
      "/img/junglebook/jb20.jpg",
      "/img/junglebook/jb21.jpg",
      "/img/junglebook/jb22.jpg",
      "/img/junglebook/jb23.jpg",
      "/img/junglebook/jb24.jpg",
      "/img/junglebook/jb25.jpg",
    ];

    // Shuffle the pictureUrls array to randomize the order
    shuffleArray(pictureUrls);

    // Create an array to hold the character data
    const characterData = pictureUrls.slice(0, 25).map((url) => ({
      image: url,
    }));

    // Duplicate the character data to get 50 cards
    const duplicatedCharacterData = [...characterData, ...characterData];

    // Shuffle the duplicated character data randomly
    shuffleArray(duplicatedCharacterData);

    // Get all elements with class "front"
    const frontElements = document.querySelectorAll(".front");

    // Set background image for each back element
    // Get all elements with class "back"
    const backElements = document.querySelectorAll(".back");

    // Loop through each ".back" element and add event listeners
    backElements.forEach((backElement) => {
      // Set the default background image
      backElement.style.backgroundImage = 'url("/img/junglebook/jungle2.jpg")';

      // Add a mouseover event listener to change the background image on hover
      backElement.addEventListener("mouseover", function () {
        backElement.style.backgroundImage =
          'url("/img/junglebook/jungle2.gif")';
      });

      // Add a mouseout event listener to restore the default background image
      backElement.addEventListener("mouseout", function () {
        backElement.style.backgroundImage =
          'url("/img/junglebook/jungle2.jpg")';
      });
    });

    // Set background images for each front element
    duplicatedCharacterData
      .slice(0, frontElements.length)
      .forEach((character, index) => {
        frontElements[index].style.backgroundImage = `url(${character.image})`;
      });

    // Set other game settings, such as cursor and board background

    document.body.style.cursor = 'url("/cursors/junglebook.cur"), auto';
    const boardElement = document.querySelector(".board");
    boardElement.style.backgroundImage = 'url("/img/junglebook/jbwal5.jpg")';

    // Call the function to initialize the game
    restartGame();
  } catch (error) {
    console.error(error);
  }
}

// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------

// ------------------------------------------------------------------------------
// -------------------------A-L-A-D-D-I-N----------------------------------------
// ------------------------------------------------------------------------------

let aladdinM = false;
function aladdin() {
  try {
    const startingMessage = document.getElementById("startingMessage");
    startingMessage.classList.remove("show");
    if (playTogether) {
      toggleScorePlayersVisibility(true);
    } else {
      startTimer();
    }
    toggleGameButtonsVisibility(true);
    resetScores();
    updateScores();
    aladdinM = true;
    lionKingM = false;
    hpM = false;
    mvM = false;
    dogM = false;
    rickAndMortyM = false;
    jungleM = false;
    aliceM = false;
    // clickPlayButton();
    // Define an array of picture URLs. You can replace these with your own URLs.
    const pictureUrls = [
      "/img/aladdin/al1.jpg",
      "/img/aladdin/al2.jpg",
      "/img/aladdin/al3.jpg",
      "/img/aladdin/al4.jpg",
      "/img/aladdin/al5.jpg",
      "/img/aladdin/al6.jpg",
      "/img/aladdin/al7.jpg",
      "/img/aladdin/al8.jpg",
      "/img/aladdin/al9.jpg",
      "/img/aladdin/al10.jpg",
      "/img/aladdin/al11.jpg",
      "/img/aladdin/al12.jpg",
      "/img/aladdin/al13.jpg",
      "/img/aladdin/al14.jpg",
      "/img/aladdin/al15.jpg",
      "/img/aladdin/al16.jpg",
      "/img/aladdin/al17.jpg",
      "/img/aladdin/al18.jpg",
      "/img/aladdin/al19.jpg",
      "/img/aladdin/al20.jpg",
      "/img/aladdin/al21.jpg",
      "/img/aladdin/al22.jpg",
      "/img/aladdin/al23.jpg",
      "/img/aladdin/al24.jpg",
      "/img/aladdin/al25.jpg",
    ];

    // Shuffle the pictureUrls array to randomize the order
    shuffleArray(pictureUrls);

    // Create an array to hold the character data
    const characterData = pictureUrls.slice(0, 25).map((url) => ({
      image: url,
    }));

    // Duplicate the character data to get 50 cards
    const duplicatedCharacterData = [...characterData, ...characterData];

    // Shuffle the duplicated character data randomly
    shuffleArray(duplicatedCharacterData);

    // Get all elements with class "front"
    const frontElements = document.querySelectorAll(".front");

    // Set background image for each back element
    // Get all elements with class "back"
    const backElements = document.querySelectorAll(".back");

    // Loop through each ".back" element and add event listeners
    backElements.forEach((backElement) => {
      // Set the default background image
      backElement.style.backgroundImage = 'url("/img/aladdin/aladdin3.jpg")';

      // Add a mouseover event listener to change the background image on hover
      backElement.addEventListener("mouseover", function () {
        backElement.style.backgroundImage = 'url("/img/aladdin/aladdin3.gif")';
      });

      // Add a mouseout event listener to restore the default background image
      backElement.addEventListener("mouseout", function () {
        backElement.style.backgroundImage = 'url("/img/aladdin/aladdin3.jpg")';
      });
    });

    // Set background images for each front element
    duplicatedCharacterData
      .slice(0, frontElements.length)
      .forEach((character, index) => {
        frontElements[index].style.backgroundImage = `url(${character.image})`;
      });

    // Set other game settings, such as cursor and board background

    document.body.style.cursor = 'url("/cursors/carpet.cur"), auto';
    const boardElement = document.querySelector(".board");
    boardElement.style.backgroundImage = 'url("/img/aladdin/alwalp.jpg")';

    // Call the function to initialize the game
    restartGame();
  } catch (error) {
    console.error(error);
  }
}

// ------------------------------------------------------------------------------
// -----------------------L-I-O-N---K-I-N-G--------------------------------------
// ------------------------------------------------------------------------------

let lionKingM = false;
function lionKing() {
  try {
    const startingMessage = document.getElementById("startingMessage");
    startingMessage.classList.remove("show");
    if (playTogether) {
      toggleScorePlayersVisibility(true);
    } else {
      startTimer();
    }
    toggleGameButtonsVisibility(true);
    resetScores();
    updateScores();
    lionKingM = true;
    hpM = false;
    mvM = false;
    dogM = false;
    rickAndMortyM = false;
    jungleM = false;
    aladdinM = false;
    aliceM = false;
    // clickPlayButton();
    // Define an array of picture URLs. You can replace these with your own URLs.
    const pictureUrls = [
      "/img/lionking/lk1.jpg",
      "/img/lionking/lk2.jpg",
      "/img/lionking/lk3.jpg",
      "/img/lionking/lk4.jpg",
      "/img/lionking/lk5.jpg",
      "/img/lionking/lk6.jpg",
      "/img/lionking/lk7.jpg",
      "/img/lionking/lk8.jpg",
      "/img/lionking/lk9.jpg",
      "/img/lionking/lk10.jpg",
      "/img/lionking/lk11.jpg",
      "/img/lionking/lk12.jpg",
      "/img/lionking/lk13.jpg",
      "/img/lionking/lk14.jpg",
      "/img/lionking/lk15.jpg",
      "/img/lionking/lk16.jpg",
      "/img/lionking/lk17.jpg",
      "/img/lionking/lk18.jpg",
      "/img/lionking/lk19.jpg",
      "/img/lionking/lk20.jpg",
      "/img/lionking/lk21.jpg",
      "/img/lionking/lk22.jpg",
      "/img/lionking/lk23.jpg",
      "/img/lionking/lk24.jpg",
      "/img/lionking/lk25.jpg",
    ];

    // Shuffle the pictureUrls array to randomize the order
    shuffleArray(pictureUrls);

    // Create an array to hold the character data
    const characterData = pictureUrls.slice(0, 25).map((url) => ({
      image: url,
    }));

    // Duplicate the character data to get 50 cards
    const duplicatedCharacterData = [...characterData, ...characterData];

    // Shuffle the duplicated character data randomly
    shuffleArray(duplicatedCharacterData);

    // Get all elements with class "front"
    const frontElements = document.querySelectorAll(".front");

    // Set background image for each back element
    // Get all elements with class "back"
    const backElements = document.querySelectorAll(".back");

    // Loop through each ".back" element and add event listeners
    backElements.forEach((backElement) => {
      // Set the default background image
      backElement.style.backgroundImage = 'url("/img/lionking/lkgif2.jpg")';

      // Add a mouseover event listener to change the background image on hover
      backElement.addEventListener("mouseover", function () {
        backElement.style.backgroundImage = 'url("/img/lionking/lkgif2.gif")';
      });

      // Add a mouseout event listener to restore the default background image
      backElement.addEventListener("mouseout", function () {
        backElement.style.backgroundImage = 'url("/img/lionking/lkgif2.jpg")';
      });
    });

    // Set background images for each front element
    duplicatedCharacterData
      .slice(0, frontElements.length)
      .forEach((character, index) => {
        frontElements[index].style.backgroundImage = `url(${character.image})`;
      });

    // Set other game settings, such as cursor and board background

    document.body.style.cursor = 'url("/cursors/tim.cur"), auto';
    const boardElement = document.querySelector(".board");
    boardElement.style.backgroundImage = 'url("/img/lionking/walp.jpg")';

    // Call the function to initialize the game
    restartGame();
  } catch (error) {
    console.error(error);
  }
}

// ------------------------------------------------------------------------------
// --------------------R-I-C-K---N---M-O-R-T-Y-----------------------------------
// ------------------------------------------------------------------------------
let rickAndMortyM = false;

async function fetchRickAndMortyData() {
  try {
    const startingMessage = document.getElementById("startingMessage");
    startingMessage.classList.remove("show");
    if (playTogether) {
      toggleScorePlayersVisibility(true);
    } else {
      startTimer();
    }
    toggleGameButtonsVisibility(true);
    resetScores();
    updateScores();
    const response = await fetch("https://rickandmortyapi.com/api/character");
    if (!response.ok) {
      throw new Error("Error fetching data from the Rick and Morty API");
    }
    aliceM = false;
    jungleM = false;
    aladdinM = false;
    hpM = false;
    mvM = false;
    dogM = false;
    lionKingM = false;
    rickAndMortyM = true;
    // clickPlayButton();

    const data = await response.json();

    // Filter character data with images
    const charactersWithImages = data.results.filter(
      (character) => character.image
    );

    // Create an array to hold the Rick and Morty character data
    const rickAndMortyData = charactersWithImages.map((character) => ({
      name: character.name,
      image: character.image,
    }));

    // Ensure there are at least 25 unique characters to create pairs
    while (rickAndMortyData.length < 20) {
      rickAndMortyData.push(...rickAndMortyData);
    }
    shuffleArray(rickAndMortyData);
    // Select the first 25 characters to create pairs
    rickAndMortyData.length = 20;

    // Duplicate the data to make a total of 50 cards
    const totalRickAndMortyData = [...rickAndMortyData, ...rickAndMortyData];

    const additionalPictureUrls = [
      "/img/dementionrickm.jpg",
      "/img/fallingrickm.jpg",
      "/img/illmorty.jpg",
      "/img/matrixrickm.jpg",
      "/img/spacecarrickm.jpg",
    ];

    // Shuffle the additionalPictureUrls array to randomize the order
    shuffleArray(additionalPictureUrls);

    // Expand the totalRickAndMortyData array by adding the additional pictures
    for (let i = 0; i < 5; i++) {
      totalRickAndMortyData.push(
        { image: additionalPictureUrls[i] },
        { image: additionalPictureUrls[i] }
      );
    }
    // Shuffle the final Rick and Morty character data randomly
    shuffleArray(totalRickAndMortyData);
    // Create a dictionary to keep track of the counts for each image
    const imageCounts = {};
    const frontElements = document.querySelectorAll(".front");
    const backElements = document.querySelectorAll(".back");

    // Loop through each ".back" element and add event listeners
    backElements.forEach((backElement) => {
      // Set the default background image
      backElement.style.backgroundImage = 'url("img/ricknm.jpg")';

      // Add a mouseover event listener to change the background image on hover
      backElement.addEventListener("mouseover", function () {
        backElement.style.backgroundImage = 'url("img/ricknm.gif")';
      });

      // Add a mouseout event listener to restore the default background image
      backElement.addEventListener("mouseout", function () {
        backElement.style.backgroundImage = 'url("img/ricknm.jpg")';
      });
    });
    // Set background images for each front element
    totalRickAndMortyData
      .slice(0, frontElements.length)
      .forEach((character, index) => {
        frontElements[index].style.backgroundImage = `url(${character.image})`;
        // Update the count for the image in the dictionary
        if (imageCounts[character.image]) {
          imageCounts[character.image]++;
        } else {
          imageCounts[character.image] = 1;
        }
        // If an image appears more than twice, you can handle it here
        if (imageCounts[character.image] > 2) {
          // Handle the case where an image appears more than once
          console.error(`Image ${character.image} appears more than twice!`);
        }
      });

    document.body.style.cursor = 'url("cursors/pickle.cur"), auto';
    const boardElement = document.querySelector(".board");
    boardElement.style.backgroundImage = 'url("img/ricknmorty.jpg")'; // Replace with the actual URL for your Rick and Morty background
    restartGame();
  } catch (error) {
    console.error(error);
  }
}

// ------------------------------------------------------------------------------
// -------------------------H-A-R-R-Y----P-O-T-T-E-R-----------------------------
// ------------------------------------------------------------------------------

let hpM = false;
// Function to fetch data from the API and populate the front of the cards
async function fetchCharacterData() {
  try {
    const startingMessage = document.getElementById("startingMessage");
    startingMessage.classList.remove("show");
    if (playTogether) {
      toggleScorePlayersVisibility(true);
    } else {
      startTimer();
    }
    toggleGameButtonsVisibility(true);
    resetScores();
    updateScores();
    const response = await fetch("https://hp-api.onrender.com/api/characters");
    if (!response.ok) {
      throw new Error("Error fetching data from the API");
    }
    hpM = true;
    mvM = false;
    dogM = false;
    rickAndMortyM = false;
    lionKingM = false;
    jungleM = false;
    aladdinM = false;
    aliceM = false;
    // playBackgroundSound(getActiveMode());
    // clickPlayButton();

    const data = await response.json();
    // Filter characters with images
    const charactersWithImages = data.filter((character) => character.image);

    // Duplicate the characters to get 50 cards
    const duplicatedCharacters = [
      ...charactersWithImages,
      ...charactersWithImages,
    ];

    // Shuffle the duplicated characters randomly
    shuffleArray(duplicatedCharacters);

    // Get all elements with class "front"
    const frontElements = document.querySelectorAll(".front");
    // Set background image for each back element
    // Get all elements with class "back"
    const backElements = document.querySelectorAll(".back");

    // Loop through each ".back" element and add event listeners
    backElements.forEach((backElement) => {
      // Set the default background image
      backElement.style.backgroundImage = 'url("img/soringhats.jpg")';

      // Add a mouseover event listener to change the background image on hover
      backElement.addEventListener("mouseover", function () {
        backElement.style.backgroundImage = 'url("img/soringhat.gif")';
      });

      // Add a mouseout event listener to restore the default background image
      backElement.addEventListener("mouseout", function () {
        backElement.style.backgroundImage = 'url("img/soringhats.jpg")';
      });
    });

    // Set background images for each front element
    duplicatedCharacters
      .slice(0, frontElements.length)
      .forEach((character, index) => {
        frontElements[index].style.backgroundImage = `url(${character.image})`;
      });
    document.body.style.cursor = 'url("cursors/wand5.cur"), auto';
    const boardElement = document.querySelector(".board");
    boardElement.style.backgroundImage =
      'url("https://images.unsplash.com/photo-1615946027884-5b6623222bf4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80")';
    restartGame();
  } catch (error) {
    console.error(error);
  }
}

// ------------------------------------------------------------------------------
// --------------------------D-O-G-S---------------------------------------------
// ------------------------------------------------------------------------------
let dogM = false;
async function fetchDogImages() {
  try {
    const startingMessage = document.getElementById("startingMessage");
    startingMessage.classList.remove("show");
    if (playTogether) {
      toggleScorePlayersVisibility(true);
    } else {
      startTimer();
    }
    toggleGameButtonsVisibility(true);
    resetScores();
    updateScores();
    const response = await fetch("https://dog.ceo/api/breeds/image/random/25");
    if (!response.ok) {
      throw new Error("Error fetching dog images from the API");
    }
    dogM = true;
    mvM = false;
    hpM = false;
    rickAndMortyM = false;
    lionKingM = false;
    jungleM = false;
    aladdinM = false;
    aliceM = false;
    // clickPlayButton();

    const data = await response.json();

    // Extract the unique dog images
    const uniqueDogImages = [...new Set(data.message)];

    // Duplicate the unique dog images to get 50 cards (25 unique images, each appearing twice)
    const duplicatedDogImages = [...uniqueDogImages, ...uniqueDogImages];

    // Shuffle the duplicated dog images randomly
    shuffleArray(duplicatedDogImages);

    // Get all elements with class "front"
    const frontElements = document.querySelectorAll(".front");
    // Set background image for each back element
    // Get all elements with class "back"
    const backElements = document.querySelectorAll(".back");

    // Loop through each ".back" element and add event listeners
    backElements.forEach((backElement) => {
      // Set the default background image
      backElement.style.backgroundImage = 'url("img/dogcarpets.jpg")';

      // Add a mouseover event listener to change the background image on hover
      backElement.addEventListener("mouseover", function () {
        backElement.style.backgroundImage = 'url("img/dogcarpet.gif")';
      });

      // Add a mouseout event listener to restore the default background image
      backElement.addEventListener("mouseout", function () {
        backElement.style.backgroundImage = 'url("img/dogcarpets.jpg")';
      });
    });
    // Set background images for each front element
    duplicatedDogImages.forEach((imageUrl, index) => {
      frontElements[index].style.backgroundImage = `url(${imageUrl})`;
    });
    document.body.style.cursor = 'url("cursors/bone.cur"), auto';
    const boardElement = document.querySelector(".board");
    boardElement.style.backgroundImage =
      'url("https://images.unsplash.com/photo-1501630834273-4b5604d2ee31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80")';
    restartGame();
  } catch (error) {
    console.error(error);
  }
}

// ------------------------------------------------------------------------------
// -------------------M-O-V-I-E-S------------------------------------------------
// ------------------------------------------------------------------------------
let mvM = false;
async function fetchRandomMovies() {
  try {
    mvM = true;
    hpM = false;
    dogM = false;
    rickAndMortyM = false;
    lionKingM = false;
    jungleM = false;
    aladdinM = false;
    aliceM = false;
    // clickPlayButton();

    const startingMessage = document.getElementById("startingMessage");
    startingMessage.classList.remove("show");
    if (playTogether) {
      toggleScorePlayersVisibility(true);
    } else {
      startTimer();
    }
    toggleGameButtonsVisibility(true);
    resetScores();
    updateScores();
    const API_KEY = "eea7f9ff6fccf63ee34eb2d80de4ac35"; // Replace with your API key
    const frontElements = document.querySelectorAll(".front");

    const posterUrls = [];
    let page = 1;

    // Get all elements with class "back"
    const backElements = document.querySelectorAll(".back");

    // Loop through each ".back" element and add event listeners
    backElements.forEach((backElement) => {
      // Set the default background image
      backElement.style.backgroundImage = 'url("img/reel5s.jpg")';

      // Add a mouseover event listener to change the background image on hover
      backElement.addEventListener("mouseover", function () {
        backElement.style.backgroundImage = 'url("img/reel5.gif")';
      });

      // Add a mouseout event listener to restore the default background image
      backElement.addEventListener("mouseout", function () {
        backElement.style.backgroundImage = 'url("img/reel5s.jpg")';
      });
    });

    while (posterUrls.length < frontElements.length) {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&include_adult=false&page=${page}&vote_count.gte=1000`
      );

      if (!response.ok) {
        throw new Error("Error fetching movie data from the API");
      }

      const data = await response.json();

      if (data.results && data.results.length > 0) {
        // Filter movies with poster paths
        const moviesWithPosters = data.results.filter(
          (movie) => movie.poster_path
        );

        // Add poster URLs to the list twice for each movie
        for (const movie of moviesWithPosters) {
          const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
          posterUrls.push(posterUrl);
          posterUrls.push(posterUrl); // Add it again

          if (posterUrls.length >= frontElements.length) {
            break; // Stop fetching when we have enough posters
          }
        }
      }

      page++;
    }

    // Shuffle the poster URLs randomly
    shuffleArray(posterUrls);

    // Set background images for each front element
    posterUrls
      .slice(0, frontElements.length)
      .forEach((posterImageUrl, index) => {
        frontElements[index].style.backgroundImage = `url(${posterImageUrl})`;
      });
    document.body.style.cursor = 'url("cursors/pop.cur"), auto';
    const boardElement = document.querySelector(".board");
    boardElement.style.backgroundImage =
      'url("https://images.unsplash.com/photo-1623475329493-889804e377f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2942&q=80")';
    restartGame();
  } catch (error) {
    console.error(error);
  }
}
