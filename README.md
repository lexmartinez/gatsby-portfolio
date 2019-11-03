<p align="center">
  <img alt="Gatsby" src="https://lexmartinez.com/old-computer.svg" width="300" />
</p>
<h1 align="center">gatsby-portfolio</h1>

Simple and powerful minimalist portfolio static site, created as study case with purpose to be my personal site using [Gatsby](https://www.gatsbyjs.org) as static site engine.

## Quick start

```bash
# clone repo
git clone https://github.com/lexmartinez/gatsby-portfolio

# change directory to cloned app
cd gatsby-portfolio

# install the dependencies with yarn
yarn install

# start the server
yarn start
```

go to [http://localhost:8000](http://localhost:8000) in your browser.

## Table of Contents

- [Development](#development)
- [Building](#building)
- [Deployment](#deployment)
- [License](#license)

## Developing

After you have installed all dependencies you can now start developing with:

- `yarn start`

It will start a gatsby dev server using which will watch, build (in-memory), and reload for you. The application can be checked at `http://localhost:8000`.

> Keep all formatted with prettier, using the command`yarn format`

All content data is handled via GraphQL and `config.json` file, any content change should be made there.

## Production

In order to generate a distribution bundle you can use the following commands:

```bash
# build for production with minification
yarn build
```

## Deployment

....

## License

This project is licensed under MIT License - see the [LICENSE.md](https://github.com/lexmartinez/gatsby-portfolio/blob/master/LICENSE.md) file for details.
