const articleTags = new Set([
    'javascript', 'nodejs', 'backend', 'react'
]);

const favouriteTags = new Set([
    'react', 'javascript'
]);

const allTags = articleTags
    .intersection(favouriteTags);


console.log(allTags); // Set(2) { 'react', 'javascript' }