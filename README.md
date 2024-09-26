# BuyCrypto

A simple webpage to purchase cryptocurrencies (Bitcoin, Ethereum, Solana, and Monero) using a sleek, user-friendly interface.

## Table of Contents

- [BuyCrypto](#buycrypto)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Features](#features)
  - [Project Structure](#project-structure)
  - [Prerequisites](#prerequisites)
    - [For Development](#for-development)
    - [For Local Usage](#for-local-usage)
  - [Running Locally](#running-locally)
    - [Running Everything](#running-everything)

## Introduction

BuyCrypto is a minimalist web application that allows users to input an amount and "buy" four cryptocurrencies: Bitcoin, Ethereum, Solana, and Monero. The project is divided into a backend that handles potential server functionalities and a frontend for the user interface.

## Features

- Clean and modern UI
- Interactive cryptocurrency buttons with logos
- Input fields to specify the amount to buy
- Simple and efficient frontend and backend setup

## Project Structure

```bash
.
├── README.md
└── src
    ├── backend
    │   ├── bitcoinService
    │   │   ├── Dockerfile
    │   │   ├── package.json
    │   │   ├── package-lock.json
    │   │   └── server.js
    │   ├── ethereumService
    │   │   ├── Dockerfile
    │   │   ├── package.json
    │   │   ├── package-lock.json
    │   │   └── server.js
    │   ├── moneroService
    │   │   ├── Dockerfile
    │   │   ├── package.json
    │   │   ├── package-lock.json
    │   │   └── server.js
    │   └── solanaService
    │       ├── Dockerfile
    │       ├── package.json
    │       ├── package-lock.json
    │       └── server.js
    ├── docker-compose.yml
    └── frontend
        ├── Caddyfile
        ├── Dockerfile
        ├── index.html
        ├── script.js
        └── styles.css
```

## Prerequisites

### For Development

- [Node.js](https://nodejs.org/en/download/)
- [npm](https://www.npmjs.com/get-npm)

### For Local Usage

 - [Docker](https://docs.docker.com/get-docker/)
 - [Docker Compose](https://docs.docker.com/compose/install/)


## Running Locally

To run the project locally, follow the steps below:

### Running Everything

To run the entire project (microservices and frontend) locally, we use docker and docker-compose. To do so, run the following commands (you may need to use `sudo`):

```bash
cd src
[sudo] docker compose up -d
```
