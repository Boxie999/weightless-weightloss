# Weightless Weightloss 

## Table of Contents

1. [Description](#description)
2. [User Story](#user-story)
3. [Installation](#instalation)
4. [Usage](#usage)
5. [Credits](#credits)
6. [License](#license)
7. [Badges](#badges)


## Description
An application when users can search for exercises based on body part or target area, and then select several of those exercises, add them to a workout plan and then run through that workout plan with a timer.
A user can also choose a predetermined workout plan based on the body area they choose from upper body, core or legs. Application also includes a favourite function so users can add exercises to favourites pages and can access them later on.

## User Story
The user arrives at the home page with three options: quick workout or create workout plan and favourite exercises. When they click on quick workout, they can choose a body area and when they press start button they will see the list of exercises which they can drag and drop and rearrange the order. If they press start button a timer comes up with 30 seconds by default but they can add or subtract 1 or 10 seconds. After each exercise(except the last one) there is a 10 seconds rest card. If they instead pressed create workout plan they are presented with a search bar where they can search for exercises by body part or muscle target. From the results they can tick the checkboxes to select exercises and they can then press a button to either add to their favourites or they can start workout using the selected exercises. A user can be able to go to the favourites page and select workouts from there as well or delete exercises or clear them all.

## Installation
The application, linked below, was deployed using Netlify. 

To use this application, you should have Node.js downloaded on your device. Copy the src and lib folders, which contain all the required .js files with the classes and HTML templates, along with the index.js file and assets folder and upload them to your desired web server. Also, initialise your repository with a package.json file by running npm init -y. Install all the required dependencies. When you see the node_modules folder and package-lock.json file in your repo folder, then you have successfully installed everything you require to run the application.

## Usage 
Project url: https://weightless-weightloss.netlify.app/

GitHub repository url: https://github.com/Boxie999/weightless-weightloss.git


![main page](https://user-images.githubusercontent.com/118114317/227057901-80948d46-b26e-4230-9823-f998d9421bdf.png)

On the homepage when the user clicks the "quick workouts" button the quick workout page is render offering the user several set workouts for full body or specific body regions.
![quickworkout](https://user-images.githubusercontent.com/118114317/227057903-1aca0dd5-42e9-4b33-849d-2f7e68753eb0.png)

If the user clicks the clicks "create a workout plan" the create build workout plan is presented with a search box where the user can search for exercises by name or target muscle. A carrousel is loaded with cards showing the desired exercises. The user can select specific excersices and either "add favourite exercises" or "start workout".
![createworkout](https://user-images.githubusercontent.com/118114317/227057906-3a00efea-9b4c-40d2-97bb-b314d5b3d5cf.png)

The user can save exercises in the Favourite Exercises page, they are presented with cards showing name and gifts. Exercises can be selected to "create workout", "delete exercises" or "clear of favourites".
![favouritesExercises](https://user-images.githubusercontent.com/118114317/227057894-704b7a3f-6bd6-41fe-8496-43b6fdb71537.png)

The exercise list page shows the choosen workout, this list has a draggable feature allowing the user to customise the order and a start button that will trigger the Workout Page.
![exerciseList](https://user-images.githubusercontent.com/118114317/227057908-690b0232-57fd-4a18-8225-5572877f26d4.png)

The workout page lists the exercises and the timer. The user can start exercise strahight away, with 10 seconds rest in between exercises, the timer can be paused or add and decrease time. 
![workoutPage](https://user-images.githubusercontent.com/118114317/227057905-91a08452-a6af-4646-8872-9dd7b953b523.png)


## Credits 
Boxy Nagy - https://github.com/Boxie999  

Charles Mong - https://github.com/CcMong  

David Robertson - https://github.com/DRRobertson9673  

Chaxiraxi Arzola - https://github.com/Chaxiraxad

## License 
MIT licence.

Please refer to the LICENSE in the repo.

## Badges
![MIT License](https://img.shields.io/github/license/Boxie999/simple-fit)

![GitHub Issues](https://img.shields.io/github/issues-raw/Boxie999/simple-fit)