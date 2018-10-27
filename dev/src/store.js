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

// a reference to the Evidences collection
const evidencesCollection = firebase.firestore()
  .collection('evidences');
// a reference to the Evidences collection
const votesCollection = firebase.firestore()
  .collection('votes');

// the shared state object that any vue component
// can get access to
export const store = {
  evidenceInFeed: null,
  votesInFeed: null,
  currentUser: null,
  writeEvidence: (newEvidence) => {
    const dt = {
      createdOn: new Date(),
      author: store.currentUser.uid,
      author_name: store.currentUser.displayName,
      author_image: store.currentUser.photoURL,
      newEvidence
    };
    return evidencesCollection.add(dt).catch(e => console.error('error inserting', dt, e));
  }
  // voteOnEvidence: (newVote) => {
  //   const dt = {
  //     createdOn: new Date(),
  //     author: store.currentUser.uid,
  //     newVote
  //   };
  //   return votesCollection.add(dt).catch(e => console.error('error inserting', dt, e));
  // },
  // changeVoteOnEvidence: (newVote) => {
  //   const dt = {
  //     author: store.currentUser.uid,
  //     newVote
  //   };
  //   const id = newVote.evidence_id
  //   return votesCollection.doc(id).update(dt).catch(e => console.error('error updating', dt, e));
  // }
};

// onSnapshot is executed every time the data
// in the underlying firestore collection changes
// It will get passed an array of references to 
// the documents that match your query

evidencesCollection
  .orderBy('createdOn', 'desc')
  .limit(100)
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

// votesCollection
//   .orderBy('createdOn', 'desc')
//   .limit(20)
//   .onSnapshot((votesRef) => {
//     const votes = [];
//     votesRef.forEach((doc) => {
//       const vote = doc.data();
//       vote.id = doc.id;
//       votes.push(vote);
//     });
//     console.log('Received Votes feed:', votes);
//     store.votesInFeed = votes;
//   });

// When a user logs in or out, save that in the store
firebase.auth().onAuthStateChanged((user) => {
  console.log('Logged in as:', user);
  store.currentUser = user;
});
