
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
const Card = (article) => {

  const cardDiv = document.createElement('div');
  const headline = document.createElement('div');
  const author = document.createElement('div');
  const authorName = document.createElement('span');
  const imgContainer = document.createElement('div');
  const img = document.createElement('img');
  
  cardDiv.classList.add("card");
  headline.classList.add("headline");
  author.classList.add("author");
  imgContainer.classList.add("img-container");

  headline.textContent = article.headline;
  authorName.textContent = `By ${article.authorName}`;
  img.src = article.authorPhoto;

  cardDiv.appendChild(headline);
  cardDiv.appendChild(author);
  author.appendChild(authorName);
  author.appendChild(imgContainer);
  imgContainer.appendChild(img);

  cardDiv.addEventListener('click', () => {
    console.log(article.headline)
  });

  return cardDiv;
}

 // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

const cardAppender = (selector) => {
  
  axios.get('http://localhost:5001/api/articles')
  .then(({ data }) => {
    // const articles = Object.values(data.articles).reduce((acc, val) => acc.concat(val), []);
    const articles = Object.values(data.articles).flat()
    const container = document.querySelector(selector)
    articles.forEach(article => container.append(Card(article)))
  })
}
export { Card, cardAppender };

//Object.values() is used to obtain the array data within, which needs to be flattened 
/**
 * .flat() is what is used to flatten the array
 * .flat() returns a new array, merging all nested arrays into one
 * It does not modify the original array.
 * .flat() simplifies the working of its elements by flattening them down to one level*/ 
// 
/**
 * const articles = Object.values(data.articles).reduce((acc, val) => acc.concat(val), []);
 * the use of .reduce() can also be utilized instead of .flat()
 * reduce() takes an accumulator (acc), and current value (val) as arguments.
 * It concatenates, .concat() , each nested array value with the concurrent acc value
 * The acc value starts @ 0 or empty []
 * The result will return an single flattened array that includes all article objects to be processed by Card
 */
