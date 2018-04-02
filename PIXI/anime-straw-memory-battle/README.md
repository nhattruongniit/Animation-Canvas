# Straw Memory Battle Campaign

## Requirement

1. Nodejs
2. PHP: optional, only require to work with backend

## Install

From terminal, run below commands to build working environment:

```bash
npm install
```

## Dev commands

Command syntax: *`npm run <command name>`*


| Command             | Description                                                                                           |
|---------------------|-------------------------------------------------------------------------------------------------------|
| `php:serve`         | Run php's builtin server.                                                                             |
| `dev`               | Run task in **DEVELOPMENT** environment, build assets, watch files change and run builtin server      |
| `dev:proxy`         | Like `dev` command but proxy requests to php's builtin server (run by `php:serve` command)            |
| `build`             | Build files for **DEVELOPMENT** environment                                                           |
| `prod`              | Run task in **PRODUCTION** environment, build assets, watch files change and run builtin server       |
| `prod:proxy`        | Like `prod` command but proxy requests to php's builtin server (run by `php:serve` command)           |
| `build:prod`        | Build files for **PRODUCTION** environment                                                            |
| `sprite`            | Combine image files                                                                                   |
