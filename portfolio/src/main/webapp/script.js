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
    const responseFromServer = await fetch('/funfacts');

    // Parse the response as JSON
    const myFacts = await responseFromServer.json();

    // Select random String within JSON list
    const fact = myFacts[Math.floor(Math.random() * myFacts.length)];
  
    // Add it to the page.
    const funFactsContainer = document.getElementById('funfacts-container');
    funFactsContainer.innerText = fact;
}

function initMap() {
  const griffith = { lat: 34.118627, lng: -118.300647 };
  const chicken = { lat: 33.944714, lng: -118.119215 };
  const callejones = { lat: 34.038584, lng: -118.254545 };
  const university = { lat: 34.058787, lng: -117.824789 };
  const arboretum = { lat: 34.143604, lng: -118.051205 };
  const bell = { lat: 33.709580, lng: -118.293827 };
  const beach = { lat: 34.038030, lng: -118.874691 };  

  map = new google.maps.Map(
  document.getElementById("map"), {
      center: { lat: 33.960196, lng: -118.238880 }, 
      zoom: 10,
      mapId: '1ab2970b54ebfa1f'});

  const blueIcon = "http://maps.google.com/mapfiles/ms/icons/blue-pushpin.png"

  const griffithMarker = new google.maps.Marker({
    position: griffith,
    map: map,
    icon: blueIcon,
    title: "Griffith Observatory"});

  const chickenMarker = new google.maps.Marker({
    position: chicken,
    map: map,
    icon: blueIcon,
    title: "Crimson Coward Nashville Hot Chicken"});

  const callejonesMarker = new google.maps.Marker({
    position: callejones,
    map: map,
    icon: blueIcon,
    title: "The Santee Alley"});

  const universityMarker = new google.maps.Marker({
    position: university,
    map: map,
    icon: blueIcon,
    title: "Cal Poly Pomona"});

  const arboretumMarker = new google.maps.Marker({
    position: arboretum,
    map: map,
    icon: blueIcon,
    title: "Los Angeles County Arboretum"});

  const bellMarker = new google.maps.Marker({
    position: bell,
    map: map,
    icon: blueIcon,
    title: "Korean Friendship Bell"});

  const beachMarker = new google.maps.Marker({
    position: beach,
    map: map,
    icon: blueIcon,
    title: "El Matador Beach"});

}