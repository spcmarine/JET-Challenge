# Just Eat Takeaway Challenge

## Objective

Welcome to my Just Eat Takeaway challenge! This project aims to retrieve data from the Just Eat API and display information about the first 10 restaurants in an interface of my choosing. The displayed information includes the restaurant name, cuisines, rating, and address.

## Technology Used

This basic web application is built using node.js, express for the proxy server and CSS for styling the html document. It is a requirement that you have node.js installed in order to run this application. 

## Getting Started

To get started with this project, follow these steps:

1. **Clone the Repository**: Clone this repository to your local machine using the following command:
  ```
  git clone https://github.com/spcmarine/JET-Challenge.git
  ```


2. **Install Dependencies**: Navigate to the project directory and install the necessary dependencies by running:
  ```
  npm install
  ```

3. **Start the Proxy Server**: Start the proxy server with the command:
  ```
  node app.js
  ```


You should see the message 'Server listening on port 3000' appear in your terminal.

4. **Open the HTML File**:
- For Windows:
  ```
  start index.html
  ```
- For macOS:
  ```
  open index.html
  ```

By following these steps, you'll be able to set up the project and view the interface for displaying information about the first 10 restaurants retrieved from the Just Eat API. 


## Assumptions or things that were not clear to me during the build

### 1. Handling Multiple Cuisine Objects:
One of the requirements is to display the cuisines for each restaurant. Upon reviewing the data from the Just Eat API, I noticed that most restaurants had more than one 'cuisine object' associated with them. Additionally, some of these objects were not typically what I would consider to be a 'cuisine' (e.g., promotional or dietary data). To address this, I made the assumption that it is the first two cuisine objects that should be returned.

### 2. CORS Policy Attached to the Just Eat Takeaway API:
I encountered a challenge related to a CORS policy attached to the Just Eat Takeaway API. This CORS policy prevented me from directly retrieving data from the API in my web browser, resulting in CORS-related errors. To overcome this challenge, I implemented a workaround by using a proxy server. The proxy server acts as an intermediary, enabling me to fetch data from the API while bypassing the CORS restrictions imposed by the browser.


## Future Enhancements

While sticking to the provided brief, I have currently hardcoded a postcode into the code for retrieving restaurant data. However, one of the first stretch goals I would consider implementing in the future is to allow user input in the web browser.

### Planned Enhancement:
- **User Input for Postcode**: Implement functionality to allow users to input their postcode directly in the web browser.
  - Upon user input, the application will fetch restaurant data based on the user-provided postcode, enabling users to view restaurants in their chosen area.
  - This enhancement will enhance the usability and flexibility of the application, providing a more personalised experience for users.

I plan to use an 'on click' input mechanism to trigger the retrieval of restaurant data based on the user's chosen postcode.
