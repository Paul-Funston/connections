'use strict';
/*
  Intro to Third Party APIs
  Paul Funston

  Connections: LinkedIn clone
  Profile Home Page
*/

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
    console.log(data);
    // this is where we continue data is an array of objects
    suggestConnections(data); // format?


  } catch(error) {
    console.log(error.message);
  }
}

function suggestConnections(people) {
  // for each object add an html element
}

function addPerson(user) {

}