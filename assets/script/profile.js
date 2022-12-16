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


// Post new content

const newPostText = document.querySelector('textarea');
const newPostImg = document.querySelector('.post-img');
const newPostBtn = document.querySelector('.post-btn');
const feed = document.querySelector('.feed-subgrid');


newPostBtn.addEventListener('click', () => {
  if (isFormValid()) {
    createPost();
    clearForm();
  }
});

function isFormValid() {
  return (newPostText.value.trim() !== '' || newPostImg.value !== '')
};

function clearForm() {
  newPostText.value = '';
  newPostImg.value = ''; 
};

function createPost() {
  const newPost = newPostTemplate();
  const postContent = createPostContent();
  newPost.append(postContent);

  feed.prepend(newPost);
}


  function newPostTemplate() {
    const newPost = document.createElement('div'); 
    const postHead = document.createElement('div');
    const postHeadStart = document.createElement('div');
    const posterAvatar = document.createElement('div');
    const poster = document.createElement('p');
    const postDate = document.createElement('p');
    const currentDay = new Date();
  
    newPost.classList.add('post');
    postHead.classList.add('post-head');
    postHeadStart.classList.add('post-head-left');
    posterAvatar.classList.add('avatar');
    const avatarURL = './assets/media/avatar.png';

    posterAvatar.style.backgroundImage = avatarURL;
    postDate.innerText = currentDay.toDateString();
    poster.innerText = 'Paul Funston';
  
    postHeadStart.append(posterAvatar, poster);
    postHead.append(postHeadStart, postDate);
    newPost.append(postHead);
  
    return newPost
  }
  
  function createPostContent() {
    const postContent = document.createElement('div');
    const postText = document.createElement('p');
    const postImg = document.createElement('figure');
  
    postContent.classList.add('post-content');
    postText.innerText = newPostText.value.trim();
    getImgData(postImg);
    
    postContent.append(postText, postImg);
  
    return postContent
  }

  function getImgData(postImg) {
    const files = newPostImg.files[0];
    if (files) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(files);
      fileReader.addEventListener("load", function () {
        postImg.innerHTML = `<img src='${this.result}'>`;
      });    
    }
  }