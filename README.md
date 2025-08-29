### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

1. getElementById : selects a single element that match with the unique id.

2. getElementsByClassName : selets all the elements that have the same class.
3. querySelector : selects the first elements that matches with the css selectors.
4. querySelectorAll : selects all the elements that matches with the css selectors.

### 2.How do you create and insert a new element into the DOM?

index.html ->

```
<h1 id="container">Card Container</h1>
```

script.js ->

```
const container = document.getElementById('container');
const cardItem = document.createElement('div');

cardItem.innerHTML = `
  <h2>Name:</h2>
  <p>Karim</p>
`;
container.appendChild(cardItem);

```

### 3. What is Event Bubbling and how does it work?

Event Bubbling is a DOM concept. It happens when an elements receives an event and that event propagates to it's parent elements in the DOM Tree.

### 4. What is Event Delegation in JavaScript? Why is it useful?

Event Delegation is a pattern based upon the concept of Event Bubbling. It is an event-handling pattern that allows to handle events at a higher level in the DOM tree other than the level where the event was first received.

### 5. What is the difference between preventDefault() and stopPropagation() methods?

preventDefault() prevents the default action of an element like form where the page reload after the submit button.

stopPropagation() prevents the bubbling up to it's parent in the DOM Tree.
