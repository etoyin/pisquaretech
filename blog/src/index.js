// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getFirestore, collection, getDoc, getDocs
} from "firebase/firestore"

import $ from 'jquery';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAj7RFJzz6kEK_MPmwu0xHJHxyIG2T9v9A",
  authDomain: "pi-square-tech-blog.firebaseapp.com",
  projectId: "pi-square-tech-blog",
  storageBucket: "pi-square-tech-blog.appspot.com",
  messagingSenderId: "106234189945",
  appId: "1:106234189945:web:8d65b545da9dd80e77dca8"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const state = {
  posts: []
}


let parentDiv = document.getElementById("all-posts");


const db = getFirestore();

const colRef = collection(db, 'posts');

getDocs(colRef)
.then((snapshot) => {
  let posts = [];
  snapshot.docs.forEach((doc) => {
    posts.push({...doc.data(), id: doc.id})
  })

  
  posts.map((post) => {
    function toDateTime(secs) {
      var t = new Date(1970, 0, 1); // Epoch
      t.setSeconds(secs);
      return t;
    }
    let date = toDateTime(post.createdAt.seconds)
    $("#all-posts").append(`
        <div class="post">
          <div class="image"
            style="background: url('${post.imageSrc}'); background-position: center; background-repeat: no-repeat">
          </div>
          <div class="summary">
            <div class="date">${date}</div>
            <div class="title">${post.title}</div>
            <div class="body-summary">${post.body}...<a href="details.html?q=${post.id}">read more</a></div>
          </div>
        </div>
    `)
  })
  state.posts = posts;
  console.log(posts);
})