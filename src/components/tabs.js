 // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //

const Tabs = (topics) => {
 
  const topicsDiv = document.createElement('div');
  
  topicsDiv.classList.add("topics");
  topics.forEach((topic) => {
    const tab = document.createElement('div');
      tab.classList.add("tab");
      tab.textContent = topic;
      topicsDiv.appendChild(tab);
  });

  return topicsDiv;
}

// TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5001/api/topics` (test it with a console.log!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
  
const tabsAppender = (selector) => {
  

  axios.get('http://localhost:5001/api/topics')
    .then((response) => {
      const topics = response.data.topics;
      const tabs = Tabs(topics);
      const container = document.querySelector(selector);
      container.appendChild(tabs);
  })
  .catch((error) => console.error(error));
};

export { Tabs, tabsAppender }

//...endless trial and error until the npm test passes one more... in reality, I have no clue what is being asked when it comes to fetching from an API host and how the syntax should corretly be implemented

/**
 * import axios from 'axios';
*
  -----using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*
const followersArray = [ 'tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];
for (let i = 0; i< followersArray.length; i++){
  getGitCard(followersArray[i]);
}
function getGitCard(username) {
  axios.get(`https://api.github.com/users/${username}`)
.then(res => {
  document.querySelector('.cards').appendChild(githubCard(res.data));
})
.catch(err => console.error(err))
}
 */