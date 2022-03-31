# MERN BOILERPLATE

Simple boilerplate for creating MERN applications. Ready for production

## Installation


```bash
git clone https://github.com/NitscheDev/mern-boilerplate.git
```

## Setup Frontend(React.js)

```bash
cd client
npm install
```

## Setup Backend(Express.js)
All packages that belongs to the backend is located in the root folder...So first of all let's go back to the root folder
```bash
cd..
```
Now, let's install all packages
```bash
npm install
```
For this application to work properly we need to create a .env file in the root folder. BTW, this .env file also belongs to the backend -> server folder
#
Inside the .env file you'll now need to define two environment variables NODE_ENV & PORT...Set the NODE_ENV = development and the PORT to 8080
#
If you want to change to port for the backend server you'll also need to define that new port in the client's folder package.js. It says "proxy": "http://localhost:8080"
#
Change the 8080 in the proxy to your new port...That's it.
#
## Scripts
Now in the root folder you'll execute all your npm commands...
```npm
npm run dev
```
Will spin up both client & server  on a local devserver
```npm
npm start
```
Will start the express server...Used in production
## Scripts - Client Folder
```npm
npm build
```
Will build the react frontend to a prodution build folder

## Production
The express application is configured to serve the frontend from it's build folder when the NODE_ENV is set to "production". So it's important your build your frontend before deploying for production...