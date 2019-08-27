import axios from "axios";

//journalData is going to be the value of the text inputs of the journal portion.
// CLIENT SIDE HTTP REQUESTS
// YOU REQUESTING A NEWSPAPER FROM YOUR KITCHEN
// HANDING OFF THE REQUEST TO THE PERSON OUTSIDE YOUR WINDOW WHO WILL PHYSICALLY GO GET WHAT YOU REQUESTED
export default {
  //user routes: api/users/ ----
  signupUser: function(newUser) {
    // console.log("Inside API signupUser:", newUser);
    return axios.post("/api/users/signup", newUser);
  },

  getUserProfile: function(userId) {
    console.log("inside getUserProfile function", userId);
    return axios.get("/api/users/profile/" + userId);
  },

  loginUser: function(loginInfo) {
    // console.log("inside loginUser function", loginInfo);
    return axios.post("/api/users/login", loginInfo);
  },

  //mood routes: api/moods
  submitSurvey: function(moodAns) {
    // console.log("inside submitSurvey function", moodAns);
    return axios.post("/api/moods/survey", moodAns);
  },
  //journal routes: api/journals
  saveJournal: function(journalEntry) {
    // console.log("inside loadJournals function", journalEntry);
    return axios.post("/api/journal/save", journalEntry);
  }
};
