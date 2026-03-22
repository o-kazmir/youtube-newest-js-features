const article1Tags = new Set([
    'javascript', 'nodejs', 'backend', 'react'
]);

const article2Tags = new Set([
    'react', 'javascript'
]);

const allTags = article1Tags
    .union(article2Tags);


console.log(allTags); // Set(4) { 'javascript', 'nodejs', 'backend', 'react' }