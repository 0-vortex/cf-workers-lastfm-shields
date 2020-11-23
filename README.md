# workers-lastfm-shields

[![Deploy to CF Workers](https://github.com/0-vortex/workers-lastfm-shields/workflows/Deploy%20to%20CF%20Workers/badge.svg)](https://github.com/0-vortex/workers-lastfm-shields/actions?query=workflow%3A%22Deploy+to+CF+Workers%22)
 [![Last Commit](https://badgen.net/github/last-commit/0-vortex/workers-lastfm-shields)](https://github.com/0-vortex/workers-lastfm-shields)

[![Maintainability](https://api.codeclimate.com/v1/badges/61fe62f7c3b6394bd344/maintainability)](https://codeclimate.com/github/0-vortex/workers-lastfm-shields/maintainability)
 [![Depfu](https://badges.depfu.com/badges/9f9ccdbef5e16341505ebb914abfcc1b/overview.svg)](https://depfu.com/github/0-vortex/workers-lastfm-shields?project_id=17814)
 [![Known Vulnerabilities](https://snyk.io/test/github/0-vortex/workers-lastfm-shields/badge.svg?targetFile=package.json)](https://snyk.io/test/github/0-vortex/workers-lastfm-shields?targetFile=package.json)

[![Commitizen Friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
 [![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2F0-vortex%2Fworkers-lastfm-shields.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2F0-vortex%2Fworkers-lastfm-shields?ref=badge_shield)
 [![License](https://img.shields.io/github/license/0-vortex/workers-lastfm-shields)](./LICENSE)

## Overview

A Cloudflare Workers script to display [last.fm](https://www.last.fm/user/zero-vortex) most recently played track in a [shields.io](https://shields.io/endpoint) compatible [endpoint.json](https://workers.vortex.name/lastfm/endpoint.json) schema. 

## Folder structure

```
├──── workers-lastfm-shields
│  ├── .github/
│  ├── src/
│  ├── static/
│  ├── .editorconfig
│  ├── .eslintrc.js
│  ├── .gitattributes
│  ├── .gitignore
│  ├── .lintstagedrc.js
│  ├── .npmrc
│  ├── CODE_OF_CONDUCT.md
│  ├── LICENSE
│  ├── npm-shrinkwrap.json
│  ├── package.json
│  ├── README.md
│  └── wrangler.toml
```

##  Deploy as Cloudflare Worker

I use this service for my profile at [github.com](https://github.com/0-vortex). Currently, the service is hosted on a free tier of [Cloudflare Workers](https://workers.cloudflare.com/) and limited at 100K requests per day.
Make sure to make the appropriate changes in [wrangler.toml](./wrangler.toml) first.

[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/abskmj/badges-lastfm)

## Requirements

In order to run the project locally you need ``node>=14`` and ``npm>=6``. 

### Install ``@cloudflare/wrangler``

Make sure you have the latest version of ``wrangler`` as described in [the wrangler docs](https://developers.cloudflare.com/workers/cli-wrangler/install-update).

#### Updating Wrangler with NPM:

```shell
npm uninstall -g @cloudflare/wrangler && 
  npm install -g @cloudflare/wrangler 
```

#### Install with cargo

```shell
cargo install wrangler --force
```

### Get a valid ``CF_API_TOKEN``

Make sure you have a valid deployment token by doing: 

```shell
wrangler login 
```

or:

```shell
wrangler config 
```

### Generate a new repository

Create a new GitHub repository with the green button or clone:

```shell
# with git
git clone https://github.com/0-vortex/workers-lastfm-shields.git
```

or with [github-cli](https://cli.github.com):

```shell
# with github-cli
gh repo clone  0-vortex/workers-lastfm-shields
```

### Get a LastFM ``API_KEY``

Create a secret ``API_KEY`` for the Cloudflare Worker to use the LastFM APIs.

- Steps for getting an API key is available at [last.fm](https://www.last.fm/api/account/create).
- Steps for creating a secret is available at [developers.cloudflare.com](https://developers.cloudflare.com/workers/platform/environments#environment-variables).

## Usage

### Local development

To develop locally just run:

```shell
npm start
```

To deploy to ``dev`` just run:

```shell
npm run deploy
```

### Monitoring

To monitor any of the deployed environments run:

```shell
wrangler tail
```

### Customised markdown badges

Without modifying [the worker](./src/index.js) it should look like this:

```markdown
![](http://img.shields.io/endpoint?url=https://workers.vortex.name/lastfm/endpoint.json)
```

![](http://img.shields.io/endpoint?url=https://workers.vortex.name/lastfm/endpoint.json)

Additional query parameters can be appliedas follows.

#### Style

```markdown
![](http://img.shields.io/endpoint?url=https://workers.vortex.name/lastfm/endpoint.json&style=flat)
```

![](http://img.shields.io/endpoint?url=https://workers.vortex.name/lastfm/endpoint.json&style=flat)

#### Color

```markdown
![](http://img.shields.io/endpoint?url=https://workers.vortex.name/lastfm/endpoint.json&color=green)
```

![](http://img.shields.io/endpoint?url=https://workers.vortex.name/lastfm/endpoint.json&color=green)

#### Label

```markdown
![](http://img.shields.io/endpoint?url=https://workers.vortex.name/lastfm/endpoint.json&label=Recently%20Played)
```

![](http://img.shields.io/endpoint?url=https://workers.vortex.name/lastfm/endpoint.json&label=Recently%20Played)

#### Logo color

```markdown
![](http://img.shields.io/endpoint?url=https://workers.vortex.name/lastfm/endpoint.json&logoColor=green)
```

![](http://img.shields.io/endpoint?url=https://workers.vortex.name/lastfm/endpoint.json&logoColor=green)

## License

This library is released under BSD-3 license clause.

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2F0-vortex%2Fworkers-lastfm-shields.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2F0-vortex%2Fworkers-lastfm-shields?ref=badge_large)
