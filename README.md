<p align="center">
  <a href="https://people-dao.com" target="_blank"><img height="96" src="static/assets/icons/daos/people-dao.svg" alt="PeopleDAO logo" /></a>
</p>
<h1 align="center">
  PeopleDAO Website
</h1>

<p align="center">
The official <a href="https://people-dao.com" target="_blank">PeopleDAO</a> website built with <a href="https://kit.svelte.dev/" target="_blank">SvelteKit</a>
</p>

<hr />

## Requirements

- [Node.js](https://nodejs.org/en/) >v16

## Development

1. Install project dependencies:
   ```
   npm install
   ```
2. Run the application in development mode:
   ```
   npm run dev:vercel
   ```
   - You will be ask to sign-in into the [Vercel](https://vercel.com) platform (free), you can use your GitHub account. This utility is important in order to simulate deployment of [serverless functions](https://vercel.com/docs/concepts/functions/serverless-functions), which solves the potential [CORS errors](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors) while requesting data from external services.

## Deployment

#### Vercel

1. Deploy the application at [Vercel](https://vercel.com):
   - If you haven't created a project for this application yet, navigate to your [dashboard](https://vercel.com/dashboard), import this repository and follow the provided instructions.
   - In case you have created the project before, the latest commit in the `main` branch will be deployed upon push.

#### Other providers

For deployment at any different provider solution, a custom API endpoint has to be developed first. It has to replicate the functionality of the `/api` folder and the application might will have to be modified as well in order to reflect such updates. The application can be built by following the [SvelteKit documentation](https://kit.svelte.dev/docs/cli#svelte-kit-build).
