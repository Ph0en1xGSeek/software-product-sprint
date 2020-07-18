// Copyright 2019 Google LLC
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
 * Adds a random greeting to the page.
 */
function addRandomGreeting() {
  const greetings =
      ['Ph0en1x', 'Guosheng', 'PGSeek'];

  // Pick a random greeting.
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];

  // Add it to the page.
  const greetingContainer = document.getElementById('greeting-container');
  greetingContainer.innerText = greeting;
}

async function getRandomQuoteUsingAsyncAwait() {
  const response = await fetch('/data');
  const text = await response.text();
  document.getElementById('greeting-container').innerText = text;
}

function getCommentList() {
    commentList = fetch("/data")
    .then(response => response.json())
    .then((commentList) => {
        console.log(commentList);
        
        commentElement = document.getElementById("comment-container");
        commentElement.innerHTML = '';
        for(i = 0; i < commentList.length; ++i) {
            commentElement.appendChild(createListElement(commentList[i].date + " : " + commentList[i].text));
        }
    });

}

/** Creates an <li> element containing text. */
function createListElement(text) {
  const liElement = document.createElement('li');
  liElement.innerText = text;
  return liElement;
}
