```javascript
// Incorrect usage of Firebase's onAuthStateChanged
firebase.auth().onAuthStateChanged(user => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    console.log(user.uid);
  } else {
    // User is signed out
    console.log("User is signed out");
    // Redirect to the login page (or perform other actions)
    window.location.href = '/login'; 
  }
});
//Problem: This will redirect to the login page even if there is asynchronous code still running after onAuthStateChanged successfully authenticates a user.  This can lead to a very confusing UX, and a bad user experience. 
//Example: After a user logs in, you run a function to update the user's profile.   If the redirect is done before the profile is updated, the user will see a logout view even though the profile is now updated.
```