/**
 * @param {import('knex').Knex} knex
 */
export async function seed(knex) {
  // Which resources fit which lessons, from the lesson_resources tab of alumni-hub-mvp1-data.xlsx
  // Runs last, because every row points at a lesson and a resource that must already exist.
  // Links to resources 14 and 24 (example cheat sheets with no link yet) are left out.
  await knex('lesson_resources').insert([
    // Unit 01
    { lesson_id: 1, resource_id: 1 }, // Pair Programming → Student Handbook: Guides
    { lesson_id: 2, resource_id: 3 }, // Git and GitHub → Git documentation
    { lesson_id: 2, resource_id: 4 }, // Git and GitHub → GitHub Docs: pull requests
    { lesson_id: 3, resource_id: 5 }, // Node.js → Learn Node.js
    { lesson_id: 4, resource_id: 6 }, // Data Types → MDN JavaScript Guide
    { lesson_id: 5, resource_id: 6 }, // First-class Functions → MDN JavaScript Guide
    { lesson_id: 6, resource_id: 6 }, // Data Structures → MDN JavaScript Guide
    { lesson_id: 7, resource_id: 7 }, // Testing with Vitest → Vitest guide
    { lesson_id: 8, resource_id: 7 }, // Writing Tests → Vitest guide
    { lesson_id: 9, resource_id: 7 }, // Test-driven Development → Vitest guide
    { lesson_id: 10, resource_id: 8 }, // Introduction to TypeScript → TypeScript Handbook
    { lesson_id: 11, resource_id: 9 }, // Introduction to Build Tools and Vite → Vite guide
    // Unit 02
    { lesson_id: 12, resource_id: 10 }, // An Introduction to React → React: Learn
    { lesson_id: 13, resource_id: 10 }, // The Virtual DOM → React: Learn
    { lesson_id: 14, resource_id: 10 }, // React Components → React: Learn
    { lesson_id: 14, resource_id: 13 }, // React Components → Tailwind CSS docs
    { lesson_id: 15, resource_id: 10 }, // React Props → React: Learn
    { lesson_id: 16, resource_id: 10 }, // React State → React: Learn
    { lesson_id: 17, resource_id: 10 }, // Event Delegation → React: Learn
    { lesson_id: 18, resource_id: 11 }, // Component Testing → React Testing Library
    { lesson_id: 19, resource_id: 12 }, // React Router → React Router docs
    { lesson_id: 20, resource_id: 10 }, // React Forms → React: Learn
    // Unit 03
    { lesson_id: 21, resource_id: 15 }, // Synchronous versus asynchronous → MDN: Using the Fetch API
    { lesson_id: 22, resource_id: 15 }, // Promises with Async/Await → MDN: Using the Fetch API
    { lesson_id: 23, resource_id: 15 }, // Web APIs → MDN: Using the Fetch API
    { lesson_id: 23, resource_id: 17 }, // Web APIs → superagent docs
    { lesson_id: 24, resource_id: 17 }, // CRUD and REST → superagent docs
    { lesson_id: 25, resource_id: 17 }, // Tools to consume API Endpoints → superagent docs
    { lesson_id: 26, resource_id: 10 }, // Component Lifecycle → React: Learn
    { lesson_id: 27, resource_id: 16 }, // Managing Async State with Tanstack Query → TanStack Query docs
    { lesson_id: 28, resource_id: 16 }, // Mutating Data with useMutation → TanStack Query docs
    { lesson_id: 29, resource_id: 1 }, // Agile → Student Handbook: Guides
    // Unit 04
    { lesson_id: 30, resource_id: 2 }, // The Web → MDN Web Docs
    { lesson_id: 30, resource_id: 19 }, // The Web → MDN: HTTP response status codes
    { lesson_id: 31, resource_id: 2 }, // Networking → MDN Web Docs
    { lesson_id: 32, resource_id: 18 }, // Express.js → Express routing guide
    { lesson_id: 33, resource_id: 18 }, // Serving Static Files → Express routing guide
    { lesson_id: 34, resource_id: 5 }, // The Filesystem → Learn Node.js
    { lesson_id: 35, resource_id: 18 }, // Express Router → Express routing guide
    { lesson_id: 36, resource_id: 18 }, // HTTP Methods → Express routing guide
    { lesson_id: 36, resource_id: 19 }, // HTTP Methods → MDN: HTTP response status codes
    { lesson_id: 37, resource_id: 18 }, // Using HTTP Methods Correctly → Express routing guide
    { lesson_id: 37, resource_id: 19 }, // Using HTTP Methods Correctly → MDN: HTTP response status codes
    { lesson_id: 38, resource_id: 18 }, // Accepting User Data → Express routing guide
    { lesson_id: 40, resource_id: 20 }, // Testing Routes → supertest
    { lesson_id: 41, resource_id: 20 }, // Testing POST Routes → supertest
    { lesson_id: 42, resource_id: 20 }, // Testing API Routes → supertest
    { lesson_id: 43, resource_id: 21 }, // Cross-origin Resource Sharing → MDN: Cross-Origin Resource Sharing
    { lesson_id: 44, resource_id: 1 }, // User Stories → Student Handbook: Guides
    // Unit 05
    { lesson_id: 45, resource_id: 22 }, // Introduction to Databases → Knex guide
    { lesson_id: 45, resource_id: 23 }, // Introduction to Databases → SQLite documentation
    { lesson_id: 46, resource_id: 22 }, // Database Keys and Migrations → Knex guide
    { lesson_id: 47, resource_id: 22 }, // Database Joins → Knex guide
    { lesson_id: 48, resource_id: 22 }, // Knex Routes → Knex guide
    { lesson_id: 49, resource_id: 22 }, // Relationships → Knex guide
    { lesson_id: 50, resource_id: 22 }, // Complex Joins → Knex guide
    // Unit 06
    { lesson_id: 51, resource_id: 25 }, // Using Auth0 with React → Auth0 React SDK
    { lesson_id: 51, resource_id: 26 }, // Using Auth0 with React → express-jwt
    { lesson_id: 51, resource_id: 30 }, // Using Auth0 with React → Deploying a full-stack web app with a database and authentication
    { lesson_id: 52, resource_id: 28 }, // Full Stack Challenge → Deploying a full-stack web app
    { lesson_id: 52, resource_id: 29 }, // Full Stack Challenge → Deploying a full-stack web app with a database
    { lesson_id: 52, resource_id: 30 }, // Full Stack Challenge → Deploying a full-stack web app with a database and authentication
  ])
}
