import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase, copied from cloud console
var config = {
  apiKey: "AIzaSyCMtXXtHW2-JRY8Qb479-nIQ8kwRUN3xuA",
  authDomain: "crypto-catalyst.firebaseapp.com",
  databaseURL: "https://crypto-catalyst.firebaseio.com",
  projectId: "crypto-catalyst",
  storageBucket: "crypto-catalyst.appspot.com",
  messagingSenderId: "324601492240"
};
firebase.initializeApp(config);

const firestore = firebase.firestore();
  const settings = {/* your settings... */ timestampsInSnapshots: true};
  firestore.settings(settings);

// a reference to the Balls collection
const ballsCollection = firebase.firestore()
  .collection('balls');
// a reference to the Balls collection
const evidencesCollection = firebase.firestore()
  .collection('evidences');

// the shared state object that any vue component
// can get access to
export const store = {
  ballsInFeed: null,
  evidenceInFeed: null,
  currentUser: null,
  writeBall: (message) => {
    const dt = {
      createdOn: new Date(),
      author: store.currentUser.uid,
      author_name: store.currentUser.displayName,
      author_image: store.currentUser.photoURL,
      message
    };
    return ballsCollection.add(dt).catch(e => console.error('error inserting', dt, e));
  },
  writeEvidence: (message) => {
    const dt = {
      createdOn: new Date(),
      author: store.currentUser.uid,
      author_name: store.currentUser.displayName,
      author_image: store.currentUser.photoURL,
      message
    };
    return evidencesCollection.add(dt).catch(e => console.error('error inserting', dt, e));
  }
};

// onSnapshot is executed every time the data
// in the underlying firestore collection changes
// It will get passed an array of references to 
// the documents that match your query
ballsCollection
  .orderBy('createdOn', 'desc')
  .limit(5)
  .onSnapshot((ballsRef) => {
    const balls = [];
    ballsRef.forEach((doc) => {
      const ball = doc.data();
      ball.id = doc.id;
      balls.push(ball);
    });
    console.log('Received Balls feed:', balls);
    store.ballsInFeed = balls;
  });

evidencesCollection
  .orderBy('createdOn', 'desc')
  .limit(5)
  .onSnapshot((evidencesRef) => {
    const evidences = [];
    evidencesRef.forEach((doc) => {
      const evidence = doc.data();
      evidence.id = doc.id;
      evidences.push(evidence);
    });
    console.log('Received Evidence feed:', evidences);
    store.evidenceInFeed = evidences;
  });

// When a user logs in or out, save that in the store
firebase.auth().onAuthStateChanged((user) => {
  console.log('Logged in as:', user);
  store.currentUser = user;
});
