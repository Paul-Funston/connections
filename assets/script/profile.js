'use strict';
/*
  Intro to Third Party APIs
  Paul Funston

  Connections: LinkedIn clone
  Profile Home Page
*/

getUser();

async function getUser() {
  const url = `https://randomuser.me/api/?nat=CA&results=10`;

  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8'
    },
    mode: 'cors'
  };

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`${result.statusText} ${result.status}`);
    }

    const data = await response.json();
    const people = data.results;
    // this is where we continue data is an array of objects
    suggestUsers(people); // format?


  } catch(error) {
    console.log(error.message);
  }
}

function suggestUsers(people) {
  people.forEach(person => {
    addUser(person);
  });
  // for each object add an html element
}

function addUser(user) {
  // const contactBox = document.querySelector('.contact-box');
  const { location: {city}, name: {first, last}, picture: {thumbnail} } = user;
  const div = document.createElement('div');
  div.classList = "card";
  div.innerHTML = `<figure><img src="${thumbnail}"></figure>` +
                  `<div><p>${first} ${last}</p><p><span>from ${city}</span></p</div>`;


  document.querySelector('.contact-box').append(div);

}