# Svelte Kit Tailwind, REST, Auth, 3DS POC
Created as a POC
0. MVP for REST API Fetch with Tailwind and Typescript
1. Firebase Auth with HTTP Secure session cookies and CSRF
2. Stripe Payment Intents or other 3DS
3. Dockerization and deploy to Vercel or Netlify

## create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Project Creation Settings
√ Which Svelte app template? » Skeleton project
√ Add type checking with TypeScript? » Yes, using TypeScript syntax
√ Add ESLint for code linting? ... No / Yes
√ Add Prettier for code formatting? ... No / Yes
√ Add Playwright for browser testing? ... No / Yes


## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.


## Install Tailwind CSS

```
npm install -D tailwindcss postcss autoprefixer svelte-preprocess
npx tailwindcss init tailwind.config.cjs -p
```
## Enable use of PostCSS in `<style>` blocks

```
import preprocess from "svelte-preprocess";

const config = {
  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
}
```

## Configure your template paths
In `tailwind.config.cjs`
```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {}
  },
  plugins: []
};
```

## Add the Tailwind directives to your CSS
In `./src/app.css`
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Import the CSS file
In `./src/routes/+layout.svelte`
```
<script>
  import "../app.css";
</script>

<slot />
```