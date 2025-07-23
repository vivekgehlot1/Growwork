const express = require('express');
const router = express.Router();
const { TfidfVectorizer } = require('ml-tfidf');
const { cosineSimilarity } = require('ml-distance');

let freelancers = [
    { id: 1, name: 'Alice', skills: 'JavaScript, React, Node.js' },
    { id: 2, name: 'Bob', skills: 'Python, Django, Machine Learning' },
    // More freelancers...
];

router.post('/', (req, res) => {
    const projectDescription = req.body.description;
    const documents = [projectDescription].concat(freelancers.map(f => f.skills));
    
    const vectorizer = new TfidfVectorizer();
    const tfidf = vectorizer.fitTransform(documents);
    
    const scores = tfidf[0].dot(tfidf.slice(1));
    const bestMatch = freelancers[scores.argmax()];
    
    res.send(bestMatch);
});

module.exports = router;
