/**
 * @param {import('knex').Knex} knex
 */
export async function seed(knex) {
  // Resources and guides from the resources tab of alumni-hub-mvp1-data.xlsx
  // unit_id null = General. added_by stays null: only resources added in the app have an owner.
  // Ids 14 and 24 (example cheat sheets with no link yet) are left out on purpose.
  await knex('resources').insert([
    // General (unit_id: null)
    {
      id: 1,
      unit_id: null,
      type: 'Handbook',
      title: 'Student Handbook: Guides',
      url: 'https://student-handbook.devacademy.life/guides'
    },
    {
      id: 2,
      unit_id: null,
      type: 'Docs',
      title: 'MDN Web Docs',
      url: 'https://developer.mozilla.org/en-US/'
    },
    {
      id: 31,
      unit_id: null,
      type: 'Guide',
      title: 'Introduction to promptkit and AI',
      url: 'https://www.youtube.com/watch?v=z5-2cLSFMDc'
    },
    {
      id: 33,
      unit_id: null,
      type: 'Guide',
      title: 'Doing more with promptkit',
      url: 'https://www.youtube.com/watch?v=SwEKDfTT_0k'
    },
    {
      id: 34,
      unit_id: null,
      type: 'Guide',
      title: 'Agentic research workflow',
      url: 'https://www.youtube.com/watch?v=MqQfLZlfEWc'
    },
    {
      id: 37,
      unit_id: null,
      type: 'Guide',
      title: 'Agentic Coding 1: Reading',
      url: 'https://www.youtube.com/watch?v=j1098OcX9Lg'
    },
    {
      id: 38,
      unit_id: null,
      type: 'Guide',
      title: 'Agentic Coding 2: Testing',
      url: 'https://www.youtube.com/watch?v=Jr5qSJ1x3_E'
    },
    {
      id: 39,
      unit_id: null,
      type: 'Guide',
      title: 'Agentic Coding 3: Planning',
      url: 'https://www.youtube.com/watch?v=_NQ4mlKLt0c'
    },
    {
      id: 40,
      unit_id: null,
      type: 'Guide',
      title: 'Agentic Coding 4: Coding',
      url: 'https://www.youtube.com/watch?v=IsPabui8zwg'
    },
    // Unit 01
    {
      id: 3,
      unit_id: 1,
      type: 'Docs',
      title: 'Git documentation',
      url: 'https://git-scm.com/doc'
    },
    {
      id: 4,
      unit_id: 1,
      type: 'Docs',
      title: 'GitHub Docs: pull requests',
      url: 'https://docs.github.com/en/pull-requests'
    },
    {
      id: 5,
      unit_id: 1,
      type: 'Docs',
      title: 'Learn Node.js',
      url: 'https://nodejs.org/en/learn'
    },
    {
      id: 6,
      unit_id: 1,
      type: 'Docs',
      title: 'MDN JavaScript Guide',
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide'
    },
    {
      id: 7,
      unit_id: 1,
      type: 'Docs',
      title: 'Vitest guide',
      url: 'https://vitest.dev/guide/'
    },
    {
      id: 8,
      unit_id: 1,
      type: 'Docs',
      title: 'TypeScript Handbook',
      url: 'https://www.typescriptlang.org/docs/handbook/intro.html'
    },
    {
      id: 9,
      unit_id: 1,
      type: 'Docs',
      title: 'Vite guide',
      url: 'https://vite.dev/guide/'
    },
    {
      id: 32,
      unit_id: 1,
      type: 'Guide',
      title: 'Intro to Debugging',
      url: 'https://www.youtube.com/watch?v=tDJgi5-4q4A'
    },
    // Unit 02
    {
      id: 10,
      unit_id: 2,
      type: 'Docs',
      title: 'React: Learn',
      url: 'https://react.dev/learn'
    },
    {
      id: 11,
      unit_id: 2,
      type: 'Docs',
      title: 'React Testing Library',
      url: 'https://testing-library.com/docs/react-testing-library/intro/'
    },
    {
      id: 12,
      unit_id: 2,
      type: 'Docs',
      title: 'React Router docs',
      url: 'https://reactrouter.com/home'
    },
    {
      id: 13,
      unit_id: 2,
      type: 'Docs',
      title: 'Tailwind CSS docs',
      url: 'https://tailwindcss.com/docs'
    },
    {
      id: 27,
      unit_id: 2,
      type: 'Guide',
      title: 'Deploying a static site',
      url: 'https://student-handbook.devacademy.life/guides/deploying/1-deploying-a-static-site-built-with-node'
    },
    {
      id: 41,
      unit_id: 2,
      type: 'Guide',
      title: 'Deployment',
      url: 'https://www.youtube.com/watch?v=I5UTVdog-aM'
    },
    // Unit 03
    {
      id: 15,
      unit_id: 3,
      type: 'Docs',
      title: 'MDN: Using the Fetch API',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch'
    },
    {
      id: 16,
      unit_id: 3,
      type: 'Docs',
      title: 'TanStack Query docs',
      url: 'https://tanstack.com/query/latest/docs/framework/react/overview'
    },
    {
      id: 17,
      unit_id: 3,
      type: 'Docs',
      title: 'superagent docs',
      url: 'https://ladjs.github.io/superagent/'
    },
    // Unit 04
    {
      id: 18,
      unit_id: 4,
      type: 'Docs',
      title: 'Express routing guide',
      url: 'https://expressjs.com/en/guide/routing.html'
    },
    {
      id: 19,
      unit_id: 4,
      type: 'Docs',
      title: 'MDN: HTTP response status codes',
      url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Status'
    },
    {
      id: 20,
      unit_id: 4,
      type: 'Docs',
      title: 'supertest',
      url: 'https://www.npmjs.com/package/supertest'
    },
    {
      id: 21,
      unit_id: 4,
      type: 'Docs',
      title: 'MDN: Cross-Origin Resource Sharing',
      url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS'
    },
    {
      id: 42,
      unit_id: 4,
      type: 'Guide',
      title: 'Deploying Pupparazzi',
      url: 'https://www.youtube.com/watch?v=AYpgtcjAYBc'
    },
    // Unit 05
    {
      id: 22,
      unit_id: 5,
      type: 'Docs',
      title: 'Knex guide',
      url: 'https://knexjs.org/guide/'
    },
    {
      id: 23,
      unit_id: 5,
      type: 'Docs',
      title: 'SQLite documentation',
      url: 'https://www.sqlite.org/docs.html'
    },
    {
      id: 43,
      unit_id: 5,
      type: 'Guide',
      title: 'Deploying Dreamfest',
      url: 'https://www.youtube.com/watch?v=K-jTm-zilH8'
    },
    // Unit 06
    {
      id: 25,
      unit_id: 6,
      type: 'Docs',
      title: 'Auth0 React SDK',
      url: 'https://auth0.com/docs/libraries/auth0-react'
    },
    {
      id: 26,
      unit_id: 6,
      type: 'Docs',
      title: 'express-jwt',
      url: 'https://www.npmjs.com/package/express-jwt'
    },
    {
      id: 28,
      unit_id: 6,
      type: 'Guide',
      title: 'Deploying a full-stack web app',
      url: 'https://student-handbook.devacademy.life/guides/deploying/2-deploying-a-fullstack-web-app'
    },
    {
      id: 29,
      unit_id: 6,
      type: 'Guide',
      title: 'Deploying a full-stack web app with a database',
      url: 'https://student-handbook.devacademy.life/guides/deploying/3-deploying-a-fullstack-web-app-with-a-database'
    },
    {
      id: 30,
      unit_id: 6,
      type: 'Guide',
      title:
        'Deploying a full-stack web app with a database and authentication',
      url: 'https://student-handbook.devacademy.life/guides/deploying/4-deploying-a-fullstack-web-app-with-a-database-and-authentication'
    },
    {
      id: 35,
      unit_id: 6,
      type: 'Guide',
      title: 'Unit 6 - T06: Custom hooks',
      url: 'https://www.youtube.com/watch?v=cHiX8EwVfCE'
    },
    {
      id: 36,
      unit_id: 6,
      type: 'Guide',
      title: 'Unit 6 - T06: Custom hooks - Code Demo',
      url: 'https://www.youtube.com/watch?v=2h1B5TNmB0Y'
    },
  ])
}
