This project is a solution to [Coveo Front End Challenge](https://github.com/coveo/frontend-coding-challenge).
It offers a User Interface where you can do extensive search on [SAQ (Societe des Alcools du Quebec)](https://www.saq.com) products using Coveo REST Search API.
It was made with React, Typescript, Redux and a few others libraries.

# Main Features

The app integrates:

-   a search bar for general search
-   a navigation bar displaying several categories with clickable labels
-   a selection list showing every currently selected term. You can use it to clear your selection or remove a specific term
-   pagination if you want to browse through your current search results
-   a quick search modal: Pressing the key 'S' will display a modal containing several search terms. You can exit it by clicking on the backdrop, cross icon on the top right or pressing 'Esc'
-   and more...

# Getting Started

This project **requires a token** to communicate with the API.

In order to start this project, you need to:

-   Download/Clone this project
-   Install the dependencies: `npm install`
-   Add your token to the file `src/.config/token.json`. The content looks like `{"token": "PUT_YOUR_TOKEN_HERE"}`
-   `npm start` to run the application

## Build

`npm run build` builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

## Testing

The unit tests use **jest** and **@testing-library/react**

`npm run test` runs the the tests and watch the files for modification.
`npm run test:all` runs all the test and generate a `coverage` folder.
You can visualize the code coverage by opening `coverage/lcov-report/index.html` in a browser.

### For more information, please check out `doc/coveo-test_documentation.pdf`
