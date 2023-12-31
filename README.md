# DevTools Detector

This JavaScript module allows you to detect whether the browser's developer tools (DevTools) are open or closed, providing a simple way to determine if a user is inspecting your web page's code.

## How It Works

The `devtools` module employs various techniques to check the DevTools status:

1. **Width and Height Thresholds:** It examines whether the difference between `outerWidth` and `innerWidth`, as well as `outerHeight` and `innerHeight`, exceeds a predefined threshold. If it does, it suggests that DevTools might be open.

2. **Firebug Check:** It also checks if the `Firebug` object is available and if `Firebug.chrome` is initialized. This serves as an additional check for older versions of Firefox with the Firebug extension.

The module then dispatches a custom event named `'devtoolschange'` with the status of the DevTools (open or closed).

## Usage

To use this DevTools detector in your project, follow these steps:

1. Include the `devtools.js` module in your HTML file:

   ```html
   <script type="module" src="devtools.js"></script>

1. Create an HTML element to display the DevTools status. For example:

    ```html
    <h2 id="devtools-state"></h2>

2. Initialize the detector in your JavaScript code:
    ```javascript
    import devtools from './devtools.js';

const stateElement = document.querySelector('#devtools-state');

// Set the initial status
stateElement.textContent = devtools.isOpen ? 'DevTools is open' : 'DevTools is closed';

// Listen for changes in DevTools status
window.addEventListener('devtoolschange', event => {
  stateElement.textContent = event.detail.isOpen ? 'DevTools is open' : 'DevTools is closed';
});

3. Now, whenever the DevTools status changes, the 'devtoolschange' event will be triggered, and the status will be updated on your webpage.

# Example

For a full example of how to use this DevTools detector, you can refer to the provided HTML file (index.html) and JavaScript module (devtools.js) in this repository.

# Compatibility

This DevTools detector works in most modern web browsers. However, keep in mind that browser behavior may change over time, and this detector may need updates to remain effective.

# License

This project is licensed under the MIT License. Feel free to use it in your projects and customize it as needed.
