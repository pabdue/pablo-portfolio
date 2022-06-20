// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random fact to the page.
 */
function getRandomSong() {
    const songs = ['Yo Visto Así by Bad Bunny', 'The Less I Know The Better by Tame Impala', 'Dancin (feat. Luvli) Krono Remix by Aaron Smith', 
                    'PRBLMS by 6lack', 'Neck And Neck DNMO Remix by Zeds Dead', 'No Chao Novinha by Anitta & Pedro Sampaio', 'Turn Off The Lights by Chris Lake',
                    'Last Time by Subsonic','Imma Be by Black Eyed Peas', 'Mon Amour - Remix by zzoilo & Aitana', 'LVCC by Myke Towers', 
                    'The Show Goes On by Lupe Fiasco', 'Rich & Sad by Post Malone', 'Are You Bored Yet?(feat. Clairo) by Wallows'];
  
    // Pick a random fact.
    const song = songs[Math.floor(Math.random() * songs.length)];
  
    // Add it to the page.
    const songContainer = document.getElementById('song-container');
    songContainer.innerText = song;
  }

async function displayFunFact() {
    // Send a request to /greeting
    const responseFromServer = await fetch('/funfacts');

    // Parse the response as JSON
    const myFacts = await responseFromServer.json();

    // Select random String within JSON list
    const fact = myFacts[Math.floor(Math.random() * myFacts.length)];
  
    // Add it to the page.
    const funFactsContainer = document.getElementById('funfacts-container');
    funFactsContainer.innerText = fact;
}