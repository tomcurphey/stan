# How to start

1. git clone https://github.com/tomcurphey/stan.git
1. npm install
1. npm run dev: This will build the project then run it locally with hot reloading
1. npm run test: This will run the tests I built

# Comments

1. From a UI perspective on the Program.jpg / page the MA15+ line needs a different font color, I'd personally use the grey.
2. The Program.jpg / page also needs a Call To Action button. Example: Watch Now or Similar Programs
3. "An unknown error occurred. please try again later" ---> Should this have a lower case 'p' ?
4. I'm assuming their are no generated types for this project. Normally I use generate the types from the backend using Codegen
5. The Carousel items should have a url_name from the backend to format the URL cleanly rather than using the ID. Yes I could use context, however this will reduce the user experience to share the link directly to another user.
6. We need to add a visible back button

# Questions

1. The application should be responsive and support both 720p and 1080p screen sizes? Would you like me to manually show how to do this with media queries?
   The solution didn't really need any spedial work done at these break points.. On mobile there is definately more work to do with to highlight skills with responsiveness.

# Extras

1. It would be nice to add a lazy load on each image & handle the loading state smoother
2. To improve accessibility & screen reading I would remove the pop up on each carousel item & add it directly to the dom
3. Stronger error handling on missing content
4. Add the functionality to highlight previously selected program when you click back button, I would use context over redux to achieve this as it's alot cleaner
5. Add in hooks to handle data fetching and formatting to keep make components cleaner

# Feedback

1. How did you decide on the technical and architectural choices used as part of your solution?

   - The code review request was very simple by nature, however I wanted to complete the project with scalability & clean coding patterns in mind.
   - Rather than taking shortcuts to get the work done, I built a solid foundation for this project to continue to be built on.
   - An example of this is to use variables to set the size through out the app so all styling has an even spacing to it and can be controlled in one place.
   - I also built each component indepentantly so it can be slotted into any other component or page.
   - Your request for using arrow keys to move carousel left and right.
     - Implyed that the accessibility of toggling with the keyboard tab button was function throughout the entire app
     - I added in the extra functionality as I know how important it is

2. Are there any improvements you could make to your submission?

   - Absolutely! I wanted to do more testing around the functionality.
   - A fun exercise would of been to handle loading state with animation.
   - Use context to focus the user back to the previous selected item in the carousel would be great
   - Adding in mobile responsiveness would be better than 720px & 1080px

3. What would you do differently if you were allocated more time?

   - I spent a lot of time on accessibility functionality on this code reiew. In hindsight this work is out of scope & woould be better invested into writing more functional tests.
   - Use context to focus the user back to the previous selected item in the carousel would be great
   - Update the item toggle index functionality so the carousel items are respecting the margin styling when you get to the end of the array

4. What are your thoughts on this code review to test your skills
   - Hands down this was the best code review I have been given in 7 years!
   - It was simple & complex! Really well thought out to enable me to show case a wide variety of skills
   - Really have enjoyed this, so thank you.

# Further resources

1. This is my personal project https://reciperevenue.com

   - I use it to keep up to day with new technologies & push myself to build new things.
   - Recently I have been developing graphs, chatboxes & payment processes with stripe.

2. Portfolio
   - https://tomcurphey.com
   - This is built with nextJS & netlify
   - The goal of building the portfolio was to understand how server side rendering work & how we can use it to improve SEO

Lastly thank you so much for the opportunity to do this code review
I look forward to hearing your feedback shortly

Regards,
Tom Curphey

0428 438 348
