import axios from 'axios'

function getRepos(username){
  //es5 to es6 back tick `` changes 'https://api.github.com/users/' + username + '/repos' to `https://api.github.com/users/${username}/repos` to establish a nicer templating format w/string literals!!
  return axios.get(`https://api.github.com/users/${username}/repos`);
}

function getUserInfo(username){
  return axios.get(`https://api.github.com/users/${username}`);
}

//es5 to es6 -- var declaration vs let and const declrations. Using const to declare a variable almost makes it immutable save the fact that you can still assign properties to the variable but you CANNOT RE-assign the variable itself. Good practice to make most variables CONST and if you can't make them LET and if you cant do that then assign VAR
// const helpers = {
//   getGitHubInfo(username){
//     // es5 to es6 arrow function => changes .then(function(arr) to .then((arr) => etc.. main benefit of an arrow function is that it does NOT create a new context so the 'this' keyword can still be applied to non-stateless functional components
//     return axios.all([getRepos(username), getUserInfo(username)])
//       .then((arr) => ({repos: arr[0].data, bio: arr[1].data}))
//   }
// }

//es5 to es6 another perk of arrow function. one can change this:

// return axios.all([getRepos(username), getUserInfo(username)])
//   .then((arr) => {
//     return {
//       repos: arr[0].data,
//       bio: arr[1].data
//     }
//
//   })
// to shave down code into this:
// return axios.all([getRepos(username), getUserInfo(username)])
//   .then((arr) => ({repos: arr[0].data, bio: arr[1].data}))
// }
// }
//NOTICE: arrow function is able to remove the 'return {obj}' and turn it into a single line surrounded by an extra () in place of the return{obj}
//IN SHORT: arrow function will implicitly return the value all on ONE LINE!! SO COOL

// export default helpers;
//^ exporting just the function now in es6


//since I am only exporting ONE object (helpers) with ONE method (getGitHubInfo) I dont have to export the entire module but, instead, export the function itself! In other words instead of creating and exporting an object just to use a single method on that object you can export the method instead. so THIS:
// const helpers = {
//   getGitHubInfo(username){
//     // es5 to es6 arrow function => changes .then(function(arr) to .then((arr) => etc.. main benefit of an arrow function is that it does NOT create a new context so the 'this' keyword can still be applied to non-stateless functional components
//     return axios.all([getRepos(username), getUserInfo(username)])
//       .then((arr) => ({repos: arr[0].data, bio: arr[1].data}))
//   }
// }
//WILL BECOME THIS:


  export default function getGitHubInfo(username){
    // es5 to es6 arrow function => changes .then(function(arr) to .then((arr) => etc.. main benefit of an arrow function is that it does NOT create a new context so the 'this' keyword can still be applied to non-stateless functional components
    return axios.all([getRepos(username), getUserInfo(username)])
      .then((arr) => ({repos: arr[0].data, bio: arr[1].data}))
  }
