import React from "react";
import Portfolio from "../Portfolio";

function PortfolioPage() {
  return (
    <div class="container">
      <div class="row">
        <div class="row row-cols-1 row-cols-md-2">
          <Portfolio
            name={"CookBook"}
            description={`This application allows users to search for an ingredient and find a recipe that uses that item. They can save recipes for future viewing and delete it when they are finished. Each saved recipe list is unique to each user so new users will need to create an account so that they can access their saved list at a later time.`}
            heroku={"https://still-sierra-23537.herokuapp.com/"}
            github={"https://github.com/mandisareed/cookbook"}
          />
          <Portfolio
            name={"BurgerEater"}
            description={`Who doesn't love a good burger? Burgers come in a variety of styles. With this application you can make as many of your own burgers as you want and when you're ready you can devour them! Sometimes a burger is so good you want to eat it twice. You're in luck because you can do that too. When you're finished you can delete your burger off the list.`}
            heroku={"https://evening-retreat-56464.herokuapp.com/"}
            github={"https://github.com/tlam1288/Burger-Eater"}
          />
          <Portfolio
            name={"Note-Taker"}
            description={`This application allows users to create and save new notes. When they no longer need the note, they are able to delete it. The note taker uses Express.js to save and delete user posts. Every new note is assigned a unique ID and then is saved into an array. Not only will all of the current notes be displayed on the left, the user can also view the entire array of note objects by routing to /api/notes. When the user clicks delete, only that post will be deleted and the array of note objects will be updated and displayed again in the db.json file.`}
            heroku={"https://infinite-refuge-80873.herokuapp.com/"}
            github={"https://github.com/tlam1288/Note-Taker"}
          />
          <Portfolio
            name={"Sorting-Hat"}
            description={`Are you a Harry Potter fan? Have you ever wondered which house you belong to? Take this short quiz and then get sorted into your house at HogWarts. You will also be able to see all of your current and past housemates.`}
            github={"https://tlam1288.github.io/Sorting-Hat-Quiz/"}
          />
          <Portfolio
            name={"Day-Planner"}
            description={`This day scheduler allows the user to add events to their work day. The current date is displayed at the top and the schedule below is color coded based on if the time has past, is the current time, or has yet to occur. The user can add events and save it so that it appears the next time they visit the site.`}
            github={"https://tlam1288.github.io/Work-Day-Scheduler/"}
          />
          <Portfolio
            name={"Password"}
            description={`A random password will be generated based off criteria chosen by the user. The parameters include having lower and uppercase letters, numbers, special characters, and how long they want their password to be.`}
            github={"https://tlam1288.github.io/Password-Generator/"}
          />
          <Portfolio
            name={"Weather-Dashboard"}
            description={`The weather dashboard allows the user to search the current weather of any city as well as a 5 day forecast. The data is retrieved by using an API from openweathermap.org.`}
            github={"https://tlam1288.github.io/Weather-dashboard/"}
          />
        </div>
      </div>
    </div>
  );
}

export default PortfolioPage;
