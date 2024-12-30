The Firebase SDK might throw an error if you try to access a property of a document snapshot before the data has fully loaded. This can happen if you're trying to access the data within a callback function that's triggered before the asynchronous operation to fetch the data is complete.  For example:

```javascript
db.collection('myCollection').doc('myDoc').get().then(doc => {
  console.log(doc.data().myField); // This might throw an error if myField is not yet loaded
});
```