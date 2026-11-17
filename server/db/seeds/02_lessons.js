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
      description: 'How we work together, not a part of the code.',
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
        'Version control for the whole project, every folder and file.',
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
      description: null,
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
        'Strings, numbers, booleans and objects: used in every file.',
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
        'Functions passed around as values, like onClick handlers, .map() callbacks and Express route handlers.',
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
      description: null,
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
      description: 'Test files (*.test.ts) sit next to the code they test.',
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
      description: 'Applies to any part of the app.',
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
      description: 'Write the test first, then the code that makes it pass.',
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
      description: null,
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
      description: null,
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
      description: null,
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
      description: null,
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
      description: null,
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
      description: null,
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
      description: null,
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
      description: null,
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
      description: 'Component tests sit next to the components they test.',
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
      description: null,
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
      description: null,
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
      name: 'Synchronous versus asynchronous',
      description: null,
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
      description: null,
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
      description: null,
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
      description: null,
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
        'Try requests before you code them, like testing our hub’s /api/v1/lessons route in Thunder Client before LessonPage uses it.',
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
      description: null,
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
      description: null,
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
      description: null,
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
        'How the team plans and works: stand-ups, a board and short sprints.',
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
        'How browsers and servers talk: requests, responses and URLs.',
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
      description: 'Ports, hosts and how a request reaches your server.',
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
      description: null,
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
      description: null,
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
        'Reading and writing files with Node’s fs module, before a database takes over.',
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
      description: null,
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
      description: null,
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
      description: null,
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
      description: null,
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
        'Keys live on the server in a .env file, never in client code.',
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
      description: null,
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
      description: null,
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
      description: null,
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
      description: null,
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
      description: 'Planning what the app should do before building it.',
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
      description: null,
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
      description: null,
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
      description: null,
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
      description: null,
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
      description: null,
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
      description: null,
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
      description: null,
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
      description: null,
      source: 'miro',
      handbook_url: null,
      code_from_class_url:
        'https://github.com/karengo-2026/code-from-class/tree/main/unit6-fullstack',
    },
  ])
}
