
- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Hierarchy](#component-hierarchy)
    - [Component Breakdown](#component-breakdown)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

_**Tackle-IT:** A Productivity app that helps you organize your ideas and tasks, containing a homepage where you can see the summary of all your tasks, a to-do page where you can see all off your added tasks and a detail page where you can edit or delete the task._


<br>

## MVP

- Build Ruby on Rails server with 3 tables database
- Build front end with react and render the proper data in each page
- Homepage rendering the summary of the tasks
- To-Do page with index and add button
- Task detail page with edit and delete
- Backend working properly CRUD
_ 

<br>

### Goals

- Render elements,
- having buttons working properly,
- sidebar routing to the correct pages,
- backend have the correct database,
- pass the data from backend to front-end.

<br>

### Libraries and Dependencies


|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _Front end library._ |
|   React Router   | _Link, Route and Switch._ |
|      Axios       | _front end connect with database._ |
|  Ruby on Rails  | _Backend ._ |
|  Material UI / Bootstrap   | _Design library for React._ |

<br>

### Client (Front End)

#### Wireframes


![Figma Wireframe](https://www.figma.com/file/sWwq3LaVewwNnx0rtF687k/Tackle-IT?node-id=1%3A237)

- Desktop Landing


#### Component Tree

[Component tree](https://whimsical.com/tackle-it-CqTRj9KiQ7PJUtZ4G1ihVH)


![Component tree](https://imgur.com/uu0Hhfe.png)

#### Component Hierarchy
 

``` structure

src
|__ assets/
      |__ fonts
      |__ icons
      |__ images
|__ components/
      |__ ./shared
          |__ Nav.jsx
          |__ Nav.css
          |__ Footer.jsx
          |__ Footer.css
      |__ ./Task
          |__ Task.jsx
          |__ Task.css
|__ screens/
      |__ ./Register
          |__ Register.jsx
          |__ Register.css
      |__ ./Login
          |__ Login.jsx
          |__ Login.css
      |__ ./Home
          |__ Home.jsx
          |__ Home.css
      |__ ./To-Do
          |__ To-Do.jsx
          |__ To-Do.css
      |__ ./Done
          |__ Done.jsx
          |__ Done.css
      |__ ./Settings
          |__ Setting.jsx
          |__ Settings.css
|__ services/
      |__ apiConfig.js
      |__ task.js
      |__ category.js
      |__ users.js
      
```


#### Time Estimates

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Backend.            |    H     |     12 hrs      |      TBD      |     TBD     |
| Homepage            |    H     |     3 hrs      |      TBD      |     TBD     |
| SideBar             |    H     |     3 hrs      |      TBD      |     TBD     |
| Tasks summary       |    H     |     2 hrs      |      TBD      |     TBD     |
| To-do page          |    L     |     2 hrs      |      TBD      |     TBD     |
| To-do details pg    |    M     |     3 hrs      |      TBD      |     TBD     |
| To-do CRUD actions  |    H     |     8 hrs      |      TBD      |     TBD     |
| Post MVP            |    M     |     6 hrs      |      TBD      |     TBD     |
| TOTAL               |          |     39 hrs     |      TBD      |     TBD     |


<br>

### Server (Back End)

#### ERD Model
![ERD Model](https://imgur.com/C7iuBK0.png)


<br>

***

## Post-MVP

 - Tasks done page
  - Log in page
  - Settings page for the User Auth, with user profile picture, name,email, password and CRUD buttons
  - Toggle button for dark theme
  - Add done tasks summary to Homepage
  - Add done and share button on task details page
  - Done tasks, and done task details page
  

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
