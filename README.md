<p align="center">
  <a href="https://people-dao.com" target="_blank"><img height="96" src="static/assets/icons/brand/logo-text.svg" alt="PeopleDAO logo" /></a>
</p>
<h1 align="center">
  PeopleDAO Website
</h1>

<p align="center">
The official <a href="https://people-dao.com" target="_blank">PeopleDAO</a> website built with <a href="https://kit.svelte.dev/" target="_blank">SvelteKit</a>
</p>

<hr />

## Requirements

- [Node.js](https://nodejs.org/en/) >=v16

## Development

1. Install project dependencies:
   ```
   pnpm i
   ```
2. Provide required environment variables by copying the `.env.example` file as `.env` and filling in relevant values.
   - You can learn how to obtain Discord bot token (`PRIVATE_DISCORD_BOT_TOKEN`) in this [guide](https://github.com/reactiflux/discord-irc/wiki/Creating-a-discord-bot-&-getting-a-token#fetching-your-bots-token).
3. Run the application in development mode:
   ```
   pnpm run dev
   ```

## Deployment

1. Deploy the application at [Vercel](https://vercel.com):
   - If you haven't created a project for this application yet, navigate to your [dashboard](https://vercel.com/dashboard), import this repository and follow the provided instructions.
   - In case you have created the project before, the latest commit in the `main` branch will be deployed upon push.
   - Provide required environment variables in the project's settings by following the [official guide](https://vercel.com/docs/concepts/projects/environment-variables) and instructuons for obtaining individual values above.
