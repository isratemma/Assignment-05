1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans:QuerySelector selects the first match of a CSS selector, querySelectorAll returns a static list of all matches, getElementById selects one by id, and getElementsByClassName gives a live collection by class.



2.How do you create and insert a new element into the DOM?
Ans:I'll use document.createElement() to create the element, set its content/attributes, then insert it into the DOM with methods like appendChild(), append(), prepend(), or insertBefore().


3.What is Event Bubbling and how does it work?
Ans:Event Bubbling means when I click on an element in the DOM, the event is passed up to its parent element and executed there.


4.What is Event Delegation in JavaScript? Why is it useful?
Ans:Event delegation involves connecting a single event listener to a parent element to handle events on its child elements using event bubbling; it's good for improved performance, less memory usage, and dealing with dynamically introduced elements.


5.What is the difference between preventDefault() and stopPropagation() methods?
Ans:PreventDefault() disables the browser's default action (for example, form submission or link navigation), whereas stopPropagation() prevents the event from bubbling up or capturing deeper in the DOM.