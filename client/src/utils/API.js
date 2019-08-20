import axios from "axios";

// export default {
//     getJournals: function(){
//         return axios.get("/api/journals");
//     },
//       getJournal: function(){
//         return axios.get("/api/journals" + id);
//     },
//     saveJournal: function(journalData){
//         return axios.post("/api/journals", journalData);
//     },

 
// }
//journalData is going to be the value of the text inputs of the journal portion.
// CLIENT SIDE HTTP REQUESTS
// YOU REQUESTING A NEWSPAPER FROM YOUR KITCHEN
// HANDING OFF THE REQUEST TO THE PERSON OUTSIDE YOUR WINDOW WHO WILL PHYSICALLY GO GET WHAT YOU REQUESTED
export default {

    signupUser: function(newUser) {
        console.log('Inside API signupUser:', newUser);
        return axios.post('/api/users/signup', newUser);

    },

    getUserProfile: function(userId){
        console.log('inside getUserProfile function', userId);
        return axios.get('/api/users/profile/' + userId);
    },

    loginUser: function(userId){
        console.log('inside loginUser function', userId);
        return axios.post('/api/users/login', userId);
    }
}

