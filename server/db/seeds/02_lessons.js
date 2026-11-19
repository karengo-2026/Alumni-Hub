/**
 * @param {import('knex').Knex} knex
 */
export async function seed(knex) {
  // Lessons from the lessons tab of alumni-hub-mvp1-data.xlsx
  // (01_units.js has already cleared the tables)
  await knex('lessons').insert([
    // Unit 01
    {
      id: 1,
      unit_id: 1,
      lesson_number: 1,
      name: 'Pair Programming',
      description:
        'A software development technique where two developers work together on the same code. Typically, one writes the code (the driver) while the other reviews, provides suggestions, and thinks ahead (the navigator).',
      source: 'handbook',
      handbook_url:
        'https://student-handbook.devacademy.life/bootcamp/01-javascript/01-pair-programming',
      code_from_class_url:
        'https://github.com/karengo-2026/code-from-class/tree/main/unit1-nodejs/1-github-and-pair-programming',
    },
    {
      id: 2,
      unit_id: 1,
      lesson_number: 2,
      name: 'Git and GitHub',
      description:
        'Git is a version control system that tracks changes to code, allowing developers to manage different versions and collaborate safely. GitHub is an online platform that hosts Git repositories, making it easier to share code and collaborate with other developers.',
      source: 'handbook',
      handbook_url:
        'https://student-handbook.devacademy.life/bootcamp/01-javascript/02-git-and-github',
      code_from_class_url:
        'https://github.com/karengo-2026/code-from-class/tree/main/unit1-nodejs/1-github-and-pair-programming',
    },
    {
      id: 3,
      unit_id: 1,
      lesson_number: 3,
      name: 'Node.js',
      description:
        'A JavaScript runtime environment that allows developers to run JavaScript outside the browser, commonly on servers. It enables developers to build backend applications and APIs using JavaScript.',
      source: 'handbook',
      handbook_url:
        'https://student-handbook.devacademy.life/bootcamp/01-javascript/03-node-and-npm',
      code_from_class_url:
        'https://github.com/karengo-2026/code-from-class/tree/main/unit1-nodejs/2-node-npm-and-repl',
    },
    {
      id: 4,
      unit_id: 1,
      lesson_number: 4,
      name: 'Data Types',
      description:
        'Categories that define what kind of data a variable can store and how that data can be used. Common JavaScript data types include strings, numbers, booleans, objects, undefined and null.',
      source: 'handbook',
      handbook_url:
        'https://student-handbook.devacademy.life/bootcamp/01-javascript/04-data-types',
      code_from_class_url:
        'https://github.com/karengo-2026/code-from-class/tree/main/unit1-nodejs/3-datatypes-functions-modules',
    },
    {
      id: 5,
      unit_id: 1,
      lesson_number: 5,
      name: 'First-class Functions',
      description:
        'A programming concept where functions are treated like any other value in a language. This means they can be assigned to variables, passed as arguments to other functions, and returned from functions.',
      source: 'handbook',
      handbook_url:
        'https://student-handbook.devacademy.life/bootcamp/01-javascript/05-first-class-functions',
      code_from_class_url:
        'https://github.com/karengo-2026/code-from-class/tree/main/unit1-nodejs/3-datatypes-functions-modules',
    },
    {
      id: 6,
      unit_id: 1,
      lesson_number: 6,
      name: 'Data Structures',
      description:
        'Ways of organising and storing data so it can be accessed, modified, and managed efficiently. Common examples include arrays, objects, linked lists, stacks, queues, and trees.',
      source: 'handbook',
      handbook_url:
        'https://student-handbook.devacademy.life/bootcamp/01-javascript/06-data-structures',
      code_from_class_url:
        'https://github.com/karengo-2026/code-from-class/tree/main/unit1-nodejs/4-data-structures',
    },
    {
      id: 7,
      unit_id: 1,
      lesson_number: 7,
      name: 'Testing with Vitest',
      description:
        'Vitest is a JavaScript testing framework used to check that code behaves as expected. It allows developers to write and run automated tests to catch bugs and ensure individual functions and components work correctly.',
      source: 'handbook',
      handbook_url:
        'https://student-handbook.devacademy.life/bootcamp/01-javascript/07-testing-with-vitest',
      code_from_class_url:
        'https://github.com/karengo-2026/code-from-class/tree/main/unit1-nodejs/5-intro-vitest-and-automated-testing',
    },
    {
      id: 8,
      unit_id: 1,
      lesson_number: 8,
      name: 'Writing Tests',
      description:
        'The process of creating instructions that check whether code behaves as expected under different conditions. Tests help identify bugs, verify functionality, and prevent existing features from breaking when code is changed.',
      source: 'handbook',
      handbook_url:
        'https://student-handbook.devacademy.life/bootcamp/01-javascript/08-writing-tests',
      code_from_class_url:
        'https://github.com/karengo-2026/code-from-class/tree/main/unit1-nodejs/5-intro-vitest-and-automated-testing',
    },
    {
      id: 9,
      unit_id: 1,
      lesson_number: 9,
      name: 'Test-driven Development',
      description:
        'A software development approach where tests are written before the actual code. Developers follow a cycle of writing a failing test, implementing code to make it pass, and then refactoring the code to improve its quality.',
      source: 'handbook',
      handbook_url:
        'https://student-handbook.devacademy.life/bootcamp/01-javascript/09-tdd',
      code_from_class_url:
        'https://github.com/karengo-2026/code-from-class/tree/main/unit1-nodejs/5-intro-vitest-and-automated-testing',
    },
    {
      id: 10,
      unit_id: 1,
      lesson_number: 10,
      name: 'Introduction to TypeScript',
      description:
        'TypeScript is a programming language built on JavaScript that adds static typing, allowing developers to define the types of data their code should use. This helps catch errors during development and makes larger codebases easier to maintain.',
      source: 'handbook',
      handbook_url:
        'https://student-handbook.devacademy.life/bootcamp/01-javascript/10-typescript-intro',
      code_from_class_url:
        'https://github.com/karengo-2026/code-from-class/tree/main/unit1-nodejs/6-typescript-demo',
    },
    {
      id: 11,
      unit_id: 1,
      lesson_number: 11,
      name: 'Introduction to Build Tools and Vite',
      description:
        'Build tools automate tasks involved in preparing and running web applications, such as bundling files, optimising code, and managing dependencies. Vite is a modern frontend build tool that provides a fast development server and efficiently bundles applications for production.',
      source: 'handbook',
      handbook_url:
        'https://student-handbook.devacademy.life/bootcamp/01-javascript/11-vite',
      code_from_class_url:
        'https://github.com/karengo-2026/code-from-class/tree/main/unit1-nodejs/7-vite-and-data-models',
    },
    // Unit 02
    {
      id: 12,
      unit_id: 2,
      lesson_number: 1,
      name: 'An Introduction to React',
      description:
        'React is a JavaScript library used to build interactive user interfaces, particularly for web applications. It allows developers to create reusable UI components and manage changing data through a concept called state.',
      source: 'handbook',
      handbook_url:
        'https://student-handbook.devacademy.life/bootcamp/02-client-side-rendering/01-intro-to-react',
      code_from_class_url:
        'https://github.com/karengo-2026/code-from-class/tree/main/unit2-react/1-react-intro',
    },
    {
      id: 13,
      unit_id: 2,
      lesson_number: 2,
      name: 'The Virtual DOM',
      description:
        'A lightweight, in-memory representation of the actual browser DOM (Document Object Model). React uses it to identify changes in the UI and efficiently update the necessary parts of the real DOM rather than rebuilding the entire page.',
      source: 'handbook',
      handbook_url:
        'https://student-handbook.devacademy.life/bootcamp/02-client-side-rendering/02-virtual-dom',
      code_from_class_url:
        'https://github.com/karengo-2026/code-from-class/tree/main/unit2-react/1-react-intro',
    },
    {
      id: 14,
      unit_id: 2,
      lesson_number: 3,
      name: 'React Components',
      description:
        'Reusable, independent building blocks used to create React user interfaces. Each component can contain its own structure, logic, and styling, allowing complex applications to be broken down into smaller, manageable pieces.',
      source: 'handbook',
      handbook_url:
        'https://student-handbook.devacademy.life/bootcamp/02-client-side-rendering/03-react-components',
      code_from_class_url:
        'https://github.com/karengo-2026/code-from-class/tree/main/unit2-react/1-react-intro',
    },
    {
      id: 15,
      unit_id: 2,
      lesson_number: 4,
      name: 'React Props',
      description:
        'Short for properties, props are used to pass data from a parent component to a child component in React. They allow components to be reusable and configurable by providing different values, such as text, numbers, or functions.',
      source: 'handbook',
      handbook_url:
        'https://student-handbook.devacademy.life/bootcamp/02-client-side-rendering/04-react-props',
      code_from_class_url:
        'https://github.com/karengo-2026/code-from-class/tree/main/unit2-react/1-react-intro',
    },
    {
      id: 16,
      unit_id: 2,
      lesson_number: 5,
      name: 'React State',
      description:
        "State is data that a React component manages and can change over time, influencing what is displayed in the user interface. React's useState hook allows developers to create and update state, triggering the component to re-render when its value changes.",
      source: 'handbook',
      handbook_url:
        'https://student-handbook.devacademy.life/bootcamp/02-client-side-rendering/06-react-state',
      code_from_class_url:
        'https://github.com/karengo-2026/code-from-class/tree/main/unit2-react/3-state-and-events',
    },
    {
      id: 17,
      unit_id: 2,
      lesson_number: 6,
      name: 'Event Delegation',
      description:
        'A technique where a single event listener is attached to a parent element to handle events triggered by its child elements. It works through event bubbling, reducing the need to attach individual event listeners to multiple elements.',
      source: 'handbook',
      handbook_url:
        'https://student-handbook.devacademy.life/bootcamp/02-client-side-rendering/07-event-delegation',
      code_from_class_url:
        'https://github.com/karengo-2026/code-from-class/tree/main/unit2-react/3-state-and-events',
    },
    {
      id: 18,
      unit_id: 2,
      lesson_number: 7,
      name: 'Component Testing',
      description:
        "A type of software testing that checks whether individual components work as expected in isolation. In React, it can involve testing a component's rendering, user interactions, props, and state to ensure it behaves correctly.",
      source: 'handbook',
      handbook_url:
        'https://student-handbook.devacademy.life/bootcamp/02-client-side-rendering/08-component-testing',
      code_from_class_url:
        'https://github.com/karengo-2026/code-from-class/tree/main/unit2-react/2-react-testing',
    },
    {
      id: 19,
      unit_id: 2,
      lesson_number: 8,
      name: 'React Router',
      description:
        'A library used to manage navigation and routing within React applications. It allows developers to display different components based on the URL, enabling users to move between pages without requiring a full browser page reload.',
      source: 'handbook',
      handbook_url:
        'https://student-handbook.devacademy.life/bootcamp/02-client-side-rendering/09-react-router',
      code_from_class_url:
        'https://github.com/karengo-2026/code-from-class/tree/main/unit2-react/5-client-side-routing',
    },
    {
      id: 20,
      unit_id: 2,
      lesson_number: 9,
      name: 'React Forms',
      description:
        'Forms in React allow users to enter and submit information through input fields, checkboxes, dropdowns, and other elements. React can manage form data using state, allowing developers to control inputs, validate information, and handle submissions.',
      source: 'handbook',
      handbook_url:
        'https://student-handbook.devacademy.life/bootcamp/02-client-side-rendering/10-react-forms',
      code_from_class_url:
        'https://github.com/karengo-2026/code-from-class/tree/main/unit2-react/7-react-forms',
    },
    // Unit 03
    {
      id: 21,
      unit_id: 3,
      lesson_number: 1,
      name: "'Synchronous versus asynchronous'",
      description:
        'Synchronous code executes one operation at a time, with each task waiting for the previous one to finish. Asynchronous code allows certain tasks, such as API requests or file operations, to run without blocking the rest of the program while waiting for a result.',
      source: 'handbook',
      handbook_url:
        'https://student-handbook.devacademy.life/bootcamp/03-apis-async/01-sync-versus-async',
      code_from_class_url:
        'https://github.com/karengo-2026/code-from-class/tree/main/unit3-async-apis-useQuery/1-async-webAPI%27s-useEffect',
    },
    {
      id: 22,
      unit_id: 3,
      lesson_number: 2,
      name: 'Promises with Async/Await',
      description:
        'Promises represent the eventual success or failure of an asynchronous operation, such as fetching data from an API. async and await provide a cleaner, more readable way to work with promises by allowing asynchronous code to be written in a style that resembles synchronous code.',
      source: 'handbook',
      handbook_url:
        'https://student-handbook.devacademy.life/bootcamp/03-apis-async/02-consuming-promises',
      code_from_class_url:
        'https://github.com/karengo-2026/code-from-class/tree/main/unit3-async-apis-useQuery/1-async-webAPI%27s-useEffect',
    },
    {
      id: 23,
      unit_id: 3,
      lesson_number: 3,
      name: 'Web APIs',
      description:
        'Interfaces that allow applications to communicate with external services or access browser functionality. They enable developers to perform tasks such as fetching data from servers, accessing geolocation, and interacting with browser features.',
      source: 'handbook',
      handbook_url:
        'https://student-handbook.devacademy.life/bootcamp/03-apis-async/03-web-apis',
      code_from_class_url:
        'https://github.com/karengo-2026/code-from-class/tree/main/unit3-async-apis-useQuery/1-async-webAPI%27s-useEffect',
    },
    {
      id: 24,
      unit_id: 3,
      lesson_number: 4,
      name: 'CRUD and REST',
      description:
        'CRUD stands for Create, Read, Update, and Delete — the four fundamental operations used to manage data. REST (Representational State Transfer) is an architectural style for designing APIs, commonly using HTTP methods such as POST, GET, PUT/PATCH, and DELETE to perform CRUD operations.',
      source: 'handbook',
      handbook_url:
        'https://student-handbook.devacademy.life/bootcamp/03-apis-async/03.5-crud-rest',
      code_from_class_url:
        'https://github.com/karengo-2026/code-from-class/tree/main/unit3-async-apis-useQuery/1-async-webAPI%27s-useEffect',
    },
    {
      id: 25,
      unit_id: 3,
      lesson_number: 5,
      name: 'Tools to consume API Endpoints',
      description:
        'Tools and libraries that allow applications to send requests to APIs and receive data from external services. Common examples include the JavaScript Fetch API and Axios, which can be used to perform HTTP requests such as GET, POST, PUT, and DELETE.',
      source: 'handbook',
      handbook_url:
        'https://student-handbook.devacademy.life/bootcamp/03-apis-async/04-api-tools',
      code_from_class_url:
        'https://github.com/karengo-2026/code-from-class/tree/main/unit3-async-apis-useQuery/1-async-webAPI%27s-useEffect',
    },
    {
      id: 26,
      unit_id: 3,
      lesson_number: 6,
      name: 'Component Lifecycle',
      description:
        'The sequence of stages a React component goes through during its existence: mounting (being created), updating (when props or state change), and unmounting (being removed). React provides lifecycle behaviour through hooks such as useEffect, allowing developers to perform tasks like fetching data and cleaning up resources.',
      source: 'handbook',
      handbook_url:
        'https://student-handbook.devacademy.life/bootcamp/03-apis-async/05-component-lifecycle',
      code_from_class_url:
        'https://github.com/karengo-2026/code-from-class/tree/main/unit3-async-apis-useQuery/1-async-webAPI%27s-useEffect',
    },
    {
      id: 27,
      unit_id: 3,
      lesson_number: 7,
      name: 'Managing Async State with Tanstack Query',
      description:
        'A library that simplifies managing asynchronous data in React applications, particularly data fetched from APIs. It handles tasks such as caching, loading and error states, background refetching, and keeping server data synchronised with the UI.',
      source: 'handbook',
      handbook_url:
        'https://student-handbook.devacademy.life/bootcamp/03-apis-async/06-react-query',
      code_from_class_url:
        'https://github.com/karengo-2026/code-from-class/tree/main/unit3-async-apis-useQuery/3-react-query',
    },
    {
      id: 28,
      unit_id: 3,
      lesson_number: 8,
      name: 'Mutating Data with useMutation',
      description:
        "A TanStack Query hook used to perform operations that create, update, or delete data on a server. It manages the mutation's loading and error states and can trigger actions such as refreshing cached data after a successful update.",
      source: 'handbook',
      handbook_url:
        'https://student-handbook.devacademy.life/bootcamp/03-apis-async/07-react-query-mutations',
      code_from_class_url:
        'https://github.com/karengo-2026/code-from-class/tree/main/unit3-async-apis-useQuery/5-useMutation',
    },
    {
      id: 29,
      unit_id: 3,
      lesson_number: 9,
      name: 'Agile',
      description:
        'An iterative approach to software development that focuses on flexibility, collaboration, and delivering working software in small increments. Teams regularly review progress, gather feedback, and adapt their plans as requirements change.',
      source: 'miro',
      handbook_url: null,
      code_from_class_url:
        'https://github.com/karengo-2026/code-from-class/tree/main/unit3-async-apis-useQuery',
    },
    // Unit 04
    {
      id: 30,
      unit_id: 4,
      lesson_number: 1,
      name: 'The Web',
      description:
        'The World Wide Web is a system of interconnected webpages and resources that can be accessed over the internet using web browsers. It uses technologies such as HTML, CSS, JavaScript, and HTTP to allow users to access and interact with information online.',
      source: 'handbook',
      handbook_url:
        'https://student-handbook.devacademy.life/bootcamp/04-express/01-the-web',
      code_from_class_url:
        'https://github.com/karengo-2026/code-from-class/tree/main/unit4-express/1-express-server',
    },
    {
      id: 31,
      unit_id: 4,
      lesson_number: 2,
      name: 'Networking',
      description:
        'The practice of connecting computers and devices so they can communicate and share information with each other. In web development, networking concepts such as IP addresses, DNS, HTTP, and TCP/IP help explain how browsers communicate with servers and access websites.',
      source: 'handbook',
      handbook_url:
        'https://student-handbook.devacademy.life/bootcamp/04-express/02-networking',
      code_from_class_url:
        'https://github.com/karengo-2026/code-from-class/tree/main/unit4-express/1-express-server',
    },
    {
      id: 32,
      unit_id: 4,
      lesson_number: 3,
      name: 'Express.js',
      description:
        'Express.js is a lightweight web framework for Node.js that makes building backend applications and APIs easier. It simplifies handling HTTP requests and responses, defining routes, and connecting your server to databases and other services.',
      source: 'handbook',
      handbook_url:
        'https://student-handbook.devacademy.life/bootcamp/04-express/03-express',
      code_from_class_url:
        'https://github.com/karengo-2026/code-from-class/tree/main/unit4-express/1-express-server',
    },
    {
      id: 33,
      unit_id: 4,
      lesson_number: 4,
      name: 'Serving Static Files',
      description:
        'Serving Static Files is the process of making files such as HTML, CSS, JavaScript, images, and fonts available to clients without generating them dynamically. In Express.js, the express.static() middleware is commonly used to serve these files from a designated folder.',
      source: 'handbook',
      handbook_url:
        'https://student-handbook.devacademy.life/bootcamp/04-express/04-serving-static-files',
      code_from_class_url:
        'https://github.com/karengo-2026/code-from-class/tree/main/unit4-express/1-express-server',
    },
    {
      id: 34,
      unit_id: 4,
      lesson_number: 5,
      name: 'The Filesystem',
      description:
        'The Filesystem is how an operating system organises and stores files and folders on a storage device. In programming, applications can interact with the filesystem to read, create, update, delete, and manage files and directories.',
      source: 'handbook',
      handbook_url:
        'https://student-handbook.devacademy.life/bootcamp/04-express/05-filesystem',
      code_from_class_url:
        'https://github.com/karengo-2026/code-from-class/tree/main/unit4-express/3-express-router-and-filesystem',
    },
    {
      id: 35,
      unit_id: 4,
      lesson_number: 6,
      name: 'Express Router',
      description:
        'Express Router is a feature of Express.js that allows you to organise routes into separate, modular files rather than keeping them all in one place. It helps keep backend applications organised by grouping related routes together, making them easier to maintain and scale.',
      source: 'handbook',
      handbook_url:
        'https://student-handbook.devacademy.life/bootcamp/04-express/06-express-router',
      code_from_class_url:
        'https://github.com/karengo-2026/code-from-class/tree/main/unit4-express/3-express-router-and-filesystem',
    },
    {
      id: 36,
      unit_id: 4,
      lesson_number: 7,
      name: 'HTTP Methods',
      description:
        'HTTP Methods define the type of action a client wants to perform when communicating with a server. Common methods include GET to retrieve data, POST to create data, PUT or PATCH to update data, and DELETE to remove data.',
      source: 'handbook',
      handbook_url:
        'https://student-handbook.devacademy.life/bootcamp/04-express/07-http-methods',
      code_from_class_url:
        'https://github.com/karengo-2026/code-from-class/tree/main/unit4-express/3-express-router-and-filesystem',
    },
    {
      id: 37,
      unit_id: 4,
      lesson_number: 8,
      name: 'Using HTTP Methods Correctly',
      description:
        'Using HTTP Methods Correctly means choosing the appropriate HTTP method for the action an API endpoint is designed to perform. For example, use GET to retrieve data, POST to create resources, PATCH to partially update them, and DELETE to remove them, helping keep APIs predictable and consistent.',
      source: 'handbook',
      handbook_url:
        'https://student-handbook.devacademy.life/bootcamp/04-express/08-using-methods-correctly',
      code_from_class_url:
        'https://github.com/karengo-2026/code-from-class/tree/main/unit4-express/3-express-router-and-filesystem',
    },
    {
      id: 38,
      unit_id: 4,
      lesson_number: 9,
      name: 'Accepting User Data',
      description:
        'Accepting User Data involves receiving information submitted by a client, such as form inputs or data sent through an API request. In Express.js, this commonly involves accessing request data through req.body, req.params, or req.query, and validating it before using or storing it.',
      source: 'handbook',
      handbook_url:
        'https://student-handbook.devacademy.life/bootcamp/04-express/09-accepting-user-data',
      code_from_class_url:
        'https://github.com/karengo-2026/code-from-class/tree/main/unit4-express/3-express-router-and-filesystem',
    },
    {
      id: 39,
      unit_id: 4,
      lesson_number: 10,
      name: 'API Keys',
      description:
        'API Keys are unique strings used to identify and authenticate an application or user when accessing an API. They help control access and track usage, and should be kept secure rather than exposed in public code or committed to version control.',
      source: 'handbook',
      handbook_url:
        'https://student-handbook.devacademy.life/bootcamp/04-express/10-api-keys',
      code_from_class_url:
        'https://github.com/karengo-2026/code-from-class/tree/main/unit4-express/4-env-and-secrets',
    },
    {
      id: 40,
      unit_id: 4,
      lesson_number: 11,
      name: 'Testing Routes',
      description:
        'Testing Routes involves checking that API endpoints respond correctly to different HTTP requests and inputs. Tests can verify response status codes, returned data, error handling, and whether routes interact with the backend as expected.',
      source: 'handbook',
      handbook_url:
        'https://student-handbook.devacademy.life/bootcamp/04-express/11-testing-routes',
      code_from_class_url:
        'https://github.com/karengo-2026/code-from-class/tree/main/unit4-express/2-testing-with-supertest',
    },
    {
      id: 41,
      unit_id: 4,
      lesson_number: 12,
      name: 'Testing POST Routes',
      description:
        'Testing POST Routes involves verifying that API endpoints correctly handle requests that submit new data to the server. Tests typically check that valid data is accepted and saved, invalid data is rejected appropriately, and the correct response and status code are returned.',
      source: 'handbook',
      handbook_url:
        'https://student-handbook.devacademy.life/bootcamp/04-express/12-testing-post-routes',
      code_from_class_url:
        'https://github.com/karengo-2026/code-from-class/tree/main/unit4-express/2-testing-with-supertest',
    },
    {
      id: 42,
      unit_id: 4,
      lesson_number: 13,
      name: 'Testing API Routes',
      description:
        'Testing API Routes involves checking that API endpoints behave as expected when handling different HTTP requests. Tests verify things like response data, status codes, input validation, error handling, and interactions with databases to ensure the API works reliably.',
      source: 'handbook',
      handbook_url:
        'https://student-handbook.devacademy.life/bootcamp/04-express/13-testing-api-routes',
      code_from_class_url:
        'https://github.com/karengo-2026/code-from-class/tree/main/unit4-express/5-mocking-in-server-tests',
    },
    {
      id: 43,
      unit_id: 4,
      lesson_number: 14,
      name: 'Cross-origin Resource Sharing',
      description:
        'Cross-Origin Resource Sharing (CORS) is a browser security mechanism that controls whether a web application can make requests to a server hosted on a different origin (domain, protocol, or port). Servers use CORS headers to specify which origins are allowed to access their resources.',
      source: 'handbook',
      handbook_url:
        'https://student-handbook.devacademy.life/bootcamp/04-express/14-cors',
      code_from_class_url:
        'https://github.com/karengo-2026/code-from-class/tree/main/unit4-express',
    },
    {
      id: 44,
      unit_id: 4,
      lesson_number: 15,
      name: 'User Stories',
      description:
        'User Stories are short descriptions of a feature or requirement written from the perspective of the person using the application. They typically follow the format: "As a [type of user], I want [something], so that [benefit]", helping development teams understand what users need and why.',
      source: 'handbook',
      handbook_url:
        'https://student-handbook.devacademy.life/bootcamp/04-express/15-user-stories',
      code_from_class_url:
        'https://github.com/karengo-2026/code-from-class/tree/main/unit4-express',
    },
    // Unit 05
    {
      id: 45,
      unit_id: 5,
      lesson_number: 1,
      name: 'Introduction to Databases',
      description:
        'Introduction to Databases covers how applications store, organise, and retrieve data in a structured way. It introduces concepts such as tables, records, relationships, and queries, which allow applications to manage information efficiently and persistently.',
      source: 'handbook',
      handbook_url:
        'https://student-handbook.devacademy.life/bootcamp/05-databases/01-intro-to-databases',
      code_from_class_url:
        'https://github.com/karengo-2026/code-from-class/tree/main/unit5-databases/1-intro-to-databases',
    },
    {
      id: 46,
      unit_id: 5,
      lesson_number: 2,
      name: 'Database Keys and Migrations',
      description:
        "Database Keys and Migrations covers how databases identify and connect records, using concepts such as primary keys and foreign keys. Migrations are version-controlled changes to a database's structure, allowing developers to create or modify tables and relationships consistently as an application evolves.",
      source: 'handbook',
      handbook_url:
        'https://student-handbook.devacademy.life/bootcamp/05-databases/02-knex-keys',
      code_from_class_url:
        'https://github.com/karengo-2026/code-from-class/tree/main/unit5-databases/1-intro-to-databases',
    },
    {
      id: 47,
      unit_id: 5,
      lesson_number: 3,
      name: 'Database Joins',
      description:
        'Database Joins allow data from multiple tables to be combined using related columns, such as primary and foreign keys. They let you retrieve connected information in a single query, with common types including INNER JOIN, LEFT JOIN, and RIGHT JOIN.',
      source: 'handbook',
      handbook_url:
        'https://student-handbook.devacademy.life/bootcamp/05-databases/03-knex-joins',
      code_from_class_url:
        'https://github.com/karengo-2026/code-from-class/tree/main/unit5-databases/3-database-joins',
    },
    {
      id: 48,
      unit_id: 5,
      lesson_number: 4,
      name: 'Knex Routes',
      description:
        'Knex Routes involve using Knex.js within backend routes to interact with a database. They allow Express.js endpoints to perform database operations such as querying, inserting, updating, and deleting records, while keeping database logic organised and reusable.',
      source: 'handbook',
      handbook_url:
        'https://student-handbook.devacademy.life/bootcamp/05-databases/04-knex-routes',
      code_from_class_url:
        'https://github.com/karengo-2026/code-from-class/tree/main/unit5-databases/1-intro-to-databases',
    },
    {
      id: 49,
      unit_id: 5,
      lesson_number: 5,
      name: 'Relationships',
      description:
        'Relationships in databases describe how records in different tables are connected to one another. Common types include one-to-one, one-to-many, and many-to-many relationships, which are typically managed using primary keys, foreign keys, and join tables.',
      source: 'handbook',
      handbook_url:
        'https://student-handbook.devacademy.life/bootcamp/05-databases/05-relationships',
      code_from_class_url:
        'https://github.com/karengo-2026/code-from-class/tree/main/unit5-databases/3-database-joins',
    },
    {
      id: 50,
      unit_id: 5,
      lesson_number: 6,
      name: 'Complex Joins',
      description:
        'Complex Joins involve combining data from multiple database tables using several join operations in a single query. They allow applications to retrieve more detailed, related information across complex relationships, such as connecting users, projects, and technologies.',
      source: 'miro',
      handbook_url: null,
      code_from_class_url:
        'https://github.com/karengo-2026/code-from-class/tree/main/unit5-databases/4-complex-joins',
    },
    // Unit 06
    {
      id: 51,
      unit_id: 6,
      lesson_number: 1,
      name: 'Using Auth0 with React',
      description:
        'Using Auth0 with React involves integrating Auth0, an authentication and identity management service, into a React application to handle user sign-in and registration. It provides features such as login, logout, and access tokens, allowing developers to manage authentication without building the entire system themselves.',
      source: 'handbook',
      handbook_url:
        'https://student-handbook.devacademy.life/bootcamp/06-fullstack/01-auth0',
      code_from_class_url:
        'https://github.com/karengo-2026/code-from-class/tree/main/unit6-fullstack/1-authentication-and-authorisation',
    },
    {
      id: 52,
      unit_id: 6,
      lesson_number: 2,
      name: 'Full Stack Challenge',
      description:
        'Full Stack Challenge involves building an application that combines frontend and backend development with database integration. It brings together skills such as React, API development, routing, authentication, and database operations to create a complete, working application.',
      source: 'miro',
      handbook_url: null,
      code_from_class_url:
        'https://github.com/karengo-2026/code-from-class/tree/main/unit6-fullstack',
    },
  ])
}
