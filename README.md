# OIT Movie Challenge

## Overview
This is a simple web application that allows users to search for movies and view details about them. It uses the [TMDb API](https://themoviedb.org/) to search for movies and retrieve details about them.

## Requirements
* [Node.js](https://nodejs.org/en/) (I developed and tested using v20.6.1 so I can't guarantee it will work with older versions)
* [npm](https://www.npmjs.com/)

## How to Run Backend
1. Clone the repository (will include the frontend as well)
2. Navigate to the webservice directory
3. Run `npm install` to install dependencies
4. Make sure to include a TMDb API key in your environment named `TMDB_API_KEY`
   * Let me know if you need my key
   * You can set this environment variable in your run configuration if using Webstorm, or you can set it through the terminal by running the following command: `export TMDB_API_KEY=<your key here>` (may differ for windows Powershell or CMD)
5. Run `npm start` to start the server on port 8080

## How to Run Frontend
1. You should have the repository cloned already
2. Navigate to the webapp directory
3. Run `npm install` to install dependencies
4. Make sure the backend is running
5. Run `npm run dev` to start the frontend on port 3000
6. Navigate to `localhost:3000` in your browser to view the app