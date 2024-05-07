# How to use this ?

- Star the repository to show your support
- Also, if you need any help, feel free connect me on [Discord](https://discord.gg/2pkvB82NaS)

### Using the Template

First, click on the `Use this template` button


Now choose a name for your repo and create.


### Running locally

- Clone the repo locally first

```git
git clone <url>
```

- Install the dependencies

```
npm install # for npm
yarn install # for yarn
pnpm install # for pnpm
```

- Start the server

```
npm run dev # for npm
yarn dev # for yarn
pnpm dev # for pnpm
```

## Making changes

To add your details go to the data.json file in the public folder and replace my data with yours.

To customize the colors go to `tailwind.config.js` and replace the existing colors with your brand colors.

After you have added all your data. Push the code to GitHub with these commands

```
git add .
git commit -m "your commit message"
git push
```

## Deploying

- Go to [Vercel](https://vercel.com/dashboard)
- Sign up for an account
- Click on New project
- Import your repository
- Click skip while creating a team and then hit deploy
- After it is deployed click on go to dashboard
- Your site is successfully deployed 🥳
- Now grab the URL and show it to world

![](./public/assests/docs/vercel.png)

### Bonus ⭐

This portfolio template contain a Spotify Card component [here](./pages/api/now-playing.ts) which shows the current streaming song on spotify.

**Example:**

# [Live Demo](https://hi-lrmn.is-a.dev) :sparkles: 

To configure this, you need to add `env` vars to thr `.env.local` file in the following format:

```txt
SPOTIFY_CLIENT_ID=
SPOTIFY_CLIENT_SECRET=
SPOTIFY_REFRESH_TOKEN=
NEXT_PUBLIC_GOOGLE_ANALYTICS=
NEXT_PUBLIC_UMAMI_WEBSITE_ID=
```

Read this [article](https://leerob.io/blog/spotify-api-nextjs) to get our own keys in this format.

And you're good to go!

## 💌 Support Server

[![DiscordBanner](https://invidget.switchblade.xyz/2pkvB82NaS)](https://discord.gg/2pkvB82NaS)