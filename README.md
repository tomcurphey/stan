# Comments

1. From a UI perspective on the Program.jpg / page the MA15+ line needs a different font color, I'd personally use the grey.
2. The Program.jpg / page also needs a Call To Action button. Example: Watch Now or Similar Programs
3. "An unknown error occurred. please try again later" ---> Should this have a lower case 'p' ?
4. I'm assuming their are no generated types for this project. Normally I use generate the types from the backend using Codegen
5. The carousel items should have a url_name from the backend to format the URL cleanly rather than using the ID. Yes I could use context, however this will reduce the user experience to share the link directly to another user.
6. We need to add a back button

# Questions

1. Is there a box shadow around the program images to the color of the image?

# Extras

1. It would be nice to add a lazy load on each image & handle the loading state smoother
2. To improve accessibility I would remove the pop up on each carousel item & add it to the dom
3. Stronger error handling on missing content
4. Add the functionality to highlight previously selected program when you click back button

# Issues

1. Carousel items bounce on initial key down.. Not caused bu border thickess, outline or box-shadow.. It might just be a trick of the eyes as the blue borderis being added
