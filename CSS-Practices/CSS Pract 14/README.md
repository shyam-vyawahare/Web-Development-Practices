CSS units - %, em, rem, px, vh, vw

comments
CSS units are used to define the sizes of elements in web design. Different units offer varying levels of flexibility and control over the layout and appearance of web pages. Commonly used units such as percentages (%), em, rem, pixels (px), viewport height (vh), and viewport width (vw). CSS units fall into two main categories:

1. Absolute Units
Absolute units have a fixed size that does not change based on the context of the parent or viewport. They are a fixed measure and stay consistent no matter where they're used on the page.

Key Characteristics:
- Fixed Size: The value is always the same regardless of the element's environment.
- Do Not Adapt: These units do not adjust based on screen size or parent container size.
Examples of Absolute Units:
- px (pixels):
The most common absolute unit. A pixel is a fixed size, usually representing a tiny dot on the screen. For instance, 10px means 10 fixed pixels.
- pt (points):
Typically used in print design, where 1 point equals 1/72 of an inch. It’s also fixed and does not adapt to the screen size. 
- cm (centimeters), mm (millimeters), in (inches):
These units are used for print and are based on real-world physical measurements. They are absolute in size and don’t scale according to screen size.

Usage Example (Absolute Unit):
div {
  width: 200px;
  height: 100px;
}
Here, the width and height will always be 200 pixels and 100 pixels, no matter where the div is placed.

2. Relative Units
Definition:
Relative units are flexible and adapt based on other values, such as the parent element, the font size, or the viewport size. They provide more flexibility and are essential for building responsive designs.

Key Characteristics:
- Scalable: The value changes relative to some reference point, like the parent element or the viewport size.
- Adaptable: Useful for making websites that work on different screen sizes and devices.

Examples of Relative Units:
- % (percent):
This unit is relative to the parent element's size. For example, if you set an element's width to 50%, it will take up half of its parent element’s width.
- em:
This unit is relative to the font size of the parent element. If a parent has a font size of 16px, then 1em equals 16px. So, 2em would be 32px.
- rem (root em):
Similar to em, but instead of the parent’s font size, rem is relative to the root element (<html>). Typically, 1rem is set to 16px by default in most browsers.
- vw (viewport width):
Relative to 1% of the viewport's width. If you set an element's width to 50vw, it will take up half of the viewport’s width, no matter what device or screen size is being used.
- vh (viewport height):
Relative to 1% of the viewport's height. For example, 100vh would be the full height of the browser window.

Usage Example (Relative Unit):
div {
  width: 50%;
  font-size: 2em;
}
- The width: 50% means the div will be 50% of its parent element's width.
- The font-size: 2em means the font size will be twice the size of its parent element’s font size.

Detailed Explanation of CSS Units
1. Percentage (%)
The percentage unit is used to set values relative to the current font-size or the size of the parent element. This unit is highly flexible and allows for responsive design adjustments.

Example: Setting the font-size relative to the current font-size.

font-size: 150%;

2. em:
The em unit is relative to the font-size of the element it is used on. For example, 2em means two times the size of the current font.

Example: Setting the font-size relative to the current font-size.

font-size: 2em;

Note: Here, 2em means 2 times the size of the current font.

3. rem:
The rem unit is relative to the root element (usually the <html> element) font-size, making it consistent across the entire document.

Example: Setting the font-size relative to the browser base font-size.

font-size: 1.5rem

4. Pixles(px):
The pixel unit is an absolute unit used to define sizes in terms of pixels. It ensures consistent size across different screens.

Example: Setting the font-size in pixels.

font-size: 16px;

5. Viewport Height (vh)
The vh unit is relative to 1% of the viewport's height, making it useful for setting sizes based on the height of the browser window.

Example: Setting the height relative to the viewport height.

height: 50vh;

6. Viewport Width (vw)
The vw unit is relative to 1% of the viewport's width, making it useful for setting sizes based on the width of the browser window.

Example: Setting the width relative to the viewport width.

width: 50vw;