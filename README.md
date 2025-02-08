# Tailwind CSS Float Utility Class Issue with Overflow

This repository demonstrates an unexpected behavior when using Tailwind CSS float utility classes.  Specifically, when an element is floated within a parent element that has not explicitly declared an `overflow` property, the float may not function as expected. 

The issue is caused by the parent's default `overflow: visible;` behavior. When the child element floats, if the child element overflows the parent, the parent element's default `overflow` causes the child element to be cut off rather than wrapping the parent.  The fix involves explicitly setting the parent element's `overflow` property, such as `overflow-x: auto;` or `overflow: hidden;`.

## Reproduction

1. Clone this repository.
2. Open `bug.html` in your browser.
3. Observe the unexpected behavior of the floated element.

## Solution

The solution involves adding the `overflow-x: auto;` or `overflow: hidden;` class to the parent element, as demonstrated in `bugSolution.html`.