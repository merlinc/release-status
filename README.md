# Release Status

Release Status is a dashboard to show you what you have, and would like to release. It does this by combining information from your git, build, and bug tracking systems.

It currently supports Github and CircleCI.

It is an reworking of [UKHomeOffice/passport-ticket-status](https://github.com/UKHomeOffice/passports-ticket-status) to provide a API agnostic backend API written in GraphQL, and a SSR frontend application using Next.JS

This particular repository is the SSR frontend.

## Example screenshots

### Without ticket information

![without-tickets](https://user-images.githubusercontent.com/196695/57960002-600cf900-78fe-11e9-9e2a-c4e9c02f2cee.png)

### With linked ticket information

![tickets](https://user-images.githubusercontent.com/196695/57960001-5f746280-78fe-11e9-9366-548b66ec35b1.png)

## Quality Metrics

### Codescene

[![](https://codescene.io/projects/4228/status.svg) Get more details at **codescene.io**.](https://codescene.io/projects/4228/jobs/latest-successful/results)

### Coveralls

[![Coverage Status](https://coveralls.io/repos/github/merlinc/release-status/badge.svg?branch=master)](https://coveralls.io/github/merlinc/release-status?branch=master)

## Glossary

- Ticket - A story task representing work to do
- Commits - Entries made into a git system, which may refer to one or more tickets
- Build - A discrete package of code consisting of at least one commit.
- Deploy - A placement of a build into an environment

## Running

`npm run dev` will run in a watch development mode.

`npm run build` and `npm run start` will build and run in production

## Running in Docker

This can be started from using `docker-compose` or standalone.

When launching the `graphql` service, a a configuration file needs to be attached as a volume. Further details are available in the `graphql` repo.

## Config

There are environment variables that need to be set, to point to the GraphQL instance:

```
- GRAPHQL_HOST=graphql
- GRAPHQL_PORT=9900
```
