# Answers

- [X] What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

*React JS is a JavaScript component-based library for building user interfaces (UI). Developed by Jordan Walke and now maintained by facebook.*

*Native DOM operations are quite slow in terms of performance, and any application that has much of DOM operations in the background will render slowly. For instance, while using the Twitter mobile site, as you scroll down the page you see an option saying `show newer feeds`, the trending topics list change over time, so there are lots of DOM operations going on in the background. If the page has data that changes over time at high rates then there is a requirement for DOM updates to be very fast and also reflect in other parts of the UI if they use the same data. React solves this problem, without even having the page reload. It does by a concept called virtual DOM. When a page is rendered using React, the state of the DOM tree structure/hierarchy is stored, and when there is any updates to be made to the UI, it does a diff on the previous (old) DOM tree with the new one, and updates only the ones that have changed. In this way, lots of DOM operations/refreshes are reduced, improving performance considerably.*

- [X] What does it mean to _think_ in react?

*Thinking in React is a concept of building component based user interfaces and there are principle guidind the concept*

1. A component should be a pure function which transforms data into a user interface. For a regular React web app, this means that a component takes some data and returns HTML.
2. Components should be as `generic` as possible to promote reusability. To achieve this, you don’t want to bind the components which generate your HTML to a specific state management solution. Instead, you divide your components into container (smart) components and presentational (dumb) components
3. A component should be performant. It should only render when its input has changed.


- [X] Describe state.

*State is like a data store to the ReactJS component. It is mostly used to update the component when user performed some action like clicking button etc.*

- [X] Describe props.

*props in react is used to control data into a component, generally props are set by parent and passed to child components and they are fixed throughout the component which means props are Read-Only*

- [X] Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

*Functional/Presentational component is a React component that accepts a single `props` (which stands for properties) object argument with data and returns a React element. And they are literally JavaScript functions.*

*Class/Stateful component is a React component that uses JavaScript class syntax and must define a render method `render()` and returns a React element*
