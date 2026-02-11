Responsive Web Design Using Media Queries

comments
Media Queries is a CSS3 feature that makes a website page adapt its layout to different screen sizes and media types. Media queries are CSS rules that apply specific styles based on the characteristics of the user's device or viewport. These characteristics can include screen width, height, orientation, resolution, and more.

Syntax:
@media mediaType and (condition) {
  /* CSS rules that applies if condition is true */
}
It consist of:

A media type, which tells the browser what kind of media this code is for (print or screen).
A media expression, which is a rule, or test that must be passed for the contained CSS to be applied.
A set of CSS rules that will be applied if the test passes and the media type is correct.

Example:
@media (max-width: 768px) {
  body {
    background-color: lightblue;
  }
}