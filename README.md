# bakkt-coding-challenge

Jonathan Yee's submission for the Bakkt coding challenge. Application built using React-Native w/ TypeScript template.

For this challenge, you will be building a tic-tac-toe game application. Please complete this challenge using React Native, using modern features of React (hooks, et al). This is intended to take approximately one hour and all code should be original (i.e. not copied from others).

The game should:

- [x] Allow 2 players to play tic tac toe (Follow the rules of tic-tac-toe)
- [x] Have a 3x3 grid on which the players can play
- [x] Allow the players to take turns marking spaces on the 3x3 grid
- [x] Recognize when a player has won and declare that player as victorious
- [x] Allow the user to start a new game

As is often the case, the given specification is a little ambiguous in regards to some details about the game and the UI. Feel free to add constraints as you see fit in order to clarify the specification and limit the problem scope to something appropriate for your allotted time.

Please make sure and document any assumptions and/or constraints you came up with while working through this challenge in a readme file within the codebase.

## Installation and Commands

#### installation

1. clone the repository and run `npm install` in the root directory.
2. navigate into the ios folder `cd ios`, run `pod install`, and navigate out `cd ..`

#### commands

1. start Metro (JavaScript bundler) by running `npx react-native start`.
2. optional: Open the Chrome debugging tool (http://localhost:8081/debugger-ui/)
3. run the application on ios with Simulator (MacOS) by running `npx react-native run-ios`

## Notes

- This application was developed using the React Native CLI and does not include any Expo dependencies. It will require Simulator (MacOS) to deploy for ios development.
- I chose to separate my logic from App.js to Main.js because I would use App.js as an entry point for logging in and/or entering meta data (player names, etc).

## With More Time...

1. Add unit testing to the game and board utilities
2. Add the functionality for players to input their names at login.
3. Add the functionality for tallying the score of each player over time (think best 2 out of 3, etc)
4. Change the shading of the square colors after a player wins to visually indicate the three winning rows.
