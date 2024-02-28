## Unittests in JS
- MOCHA
Mocha is a feature-rich JavaScript test framework running on Node.js and in the browser, making asynchronous testing simple and fun. Mocha tests run serially, allowing for flexible and accurate reporting, while mapping uncaught exceptions to the correct test cases. Hosted on GitHub.

- CHAI ASSERTION
API Reference
The Chai API is broken down by style or task.

Assertion Styles
The Expect / Should API covers the BDD assertion styles.
The Assert API covers the TDD assertion style.
Plugins
The Plugin API will be of use to anyone interested in building plugins as helpers to DRY up your tests, or for release to the community.
Tools
The Online Test Suite is a live run of Chai’s test suite. Use it to ensure browser compatibility.

- EXPRESS
Routing refers to how an application’s endpoints (URIs) respond to client requests. For an introduction to routing, see Basic routing.

You define routing using methods of the Express app object that correspond to HTTP methods; for example, app.get() to handle GET requests and app.post to handle POST requests. For a full list, see app.METHOD. You can also use app.all() to handle all HTTP methods and app.use() to specify middleware as the callback function (See Using middleware for details).

These routing methods specify a callback function (sometimes called “handler functions”) called when the application receives a request to the specified route (endpoint) and HTTP method. In other words, the application “listens” for requests that match the specified route(s) and method(s), and when it detects a match, it calls the specified callback function.