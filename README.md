# Firebase Asynchronous Data Access Error

This repository demonstrates a common error in Firebase when accessing data from a document snapshot before the data is fully loaded.  The `bug.js` file shows the problematic code, while `bugSolution.js` provides the corrected version.

The issue arises from the asynchronous nature of Firebase data retrieval. Attempting to access document properties immediately within a `.then` block might result in an error if the data hasn't fully loaded yet.

The solution involves ensuring the data is available before attempting to access it, commonly done by checking if `doc.exists` and `doc.data()` is not null. 