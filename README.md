# myMovieDB

I have built a Movie Search Application which uses the TMDB API. The application has a text input box to enter the movie type for example “Kids” and a Search button.  On click of the Search button the application navigates to the Movie search results page where the Movie Poster and the Movie Name are displayed based on the movie type searched.

In order to implement this application I have used Ionic 4 with Angular 5 and CSS. I have built two pages using Ionic by the name movies and movie-details. I have defined the routing for these pages in app-routing.module.ts. The default page is the movies page. In the movies.page.ts I have retrieved the user input from the text field on click off the Search button and routed the flow to my movie-details page. In the movie-details.page.ts I have retrieved the value off the user input and dynamically built the TMDB API service URL using the base URL along with my API-KEY and the query param which is the user input text. The service call retrieves the search result based on the entered criteria. I am using an Observable and casting the data received in response. Next in my movie-details page I am using ionic components to iterate over the results and display the poster image and movie title. I have a back button in the movie-details page using which users can navigate back to the Search page.

Test cases considered –

1. Search button and Search text input should be center aligned. Checked the same using Developer tools for multiple iOS and Android platforms

2. Ensured proper page navigation and introduced a back button for user to return to the search page from the details page
