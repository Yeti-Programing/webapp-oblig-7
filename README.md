# !!!VIKTIG!!!

I MongoDB lag databasen hiof og legg til collections "polls" og "users" i denne!!!

## Postman
## Environment
{{LOCAL_URL}} = http://localhost:5000
{{BASE_URL}} = api/v1

### User Requests
Lag 3 Get og 1 Post request
#### Get
* {{LOCAL_URL}}/{{BASE_URL}}/signup
* {{LOCAL_URL}}/{{BASE_URL}}/signup/mail/ (SKRIV INN EN MAIL ETTER "mail/")
* {{LOCAL_URL}}/{{BASE_URL}}/signup/id/ (SKRIV INN EN USERID ETTER "id/")
#### Post
* {{LOCAL_URL}}/{{BASE_URL}}/signup

I Body (raw - JSON):
{
    "mail": "navn@epost.com",
    "userid": "id-123-id"
}

### Poll Requests
Lag 2 Get og 1 Post request
#### Get
* {{LOCAL_URL}}/{{BASE_URL}}/poll
* {{LOCAL_URL}}/{{BASE_URL}}/poll/ (SKRIV INN EN POLLID ETTER "poll/")
#### Post
* {{LOCAL_URL}}/{{BASE_URL}}/poll

I Body (raw - JSON):
{
    "pollid": "test-pollid-test",
    "creatorid": "test-userid-test",
    "question": "Har du et spørsmål?",
    "answers": [],
    "answeredid": []
}





## Scripts
### `npm start`
Runs the app in the development mode.\

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.\
It also runs the API server on http://localhost:5000 \

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run server`

Runs the API server on http://localhost:5000

### `npm run start-react`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
