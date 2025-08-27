## 1. What is the difference between getElementById, getElementsByClassName, and uerySelector / querySelectorAll?


###  getElementById
- The **document.getElementById()** function is used to select an HTML element by its ***ID***.

---

###  getElementsByClassName
- The **document.getElementClassName()** function is used to select an HTML element by its ***class***.

---

###  querySelector / querySelectorAll
#### **querySelector**:
 - It select the first HTML element that matches a specific CSS selector.

#### **querySelector**:
 - It select the first HTML element that matches a specific CSS selector.

## 2. How do you create and insert a new element into the DOM?
- document.createElement() is used to create a new element.
- To add content or text to a new element, we can use textContent, innerText, or innerHTML.
-The appendChild() or append() method is used to add the newly created element to the DOM. 

## 3. What is Event Bubbling and how does it work?
#### This happens when you add an event listener to a parent element and the user clicks on the child element.

## 4. What is Event Delegation in JavaScript? Why is it useful?

#### Event Delegation is a technique where, instead of setting up separate event listeners for child elements, a single event listener is set up on their common parent.

## 5. What is the difference between preventDefault() and stopPropagation() methods?

### preventDefault():
- Disables the browser's default behavior (e.g., not loading the page when clicking on a link).
---
### stopPropagation():
- e stopPropagation() method of the Event interface prevents further propagation of the current event in the capturing and bubbling phases.