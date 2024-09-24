# BuyCrypto

A simple webpage to purchase cryptocurrencies (Bitcoin, Ethereum, Solana, and Monero) using a sleek, user-friendly interface.

## Table of Contents

- [BuyCrypto](#buycrypto)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Features](#features)
  - [Project Structure](#project-structure)
  - [Installation and Usage](#installation-and-usage)
    - [Backend](#backend)
    - [Frontend](#frontend)

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
├── backend
│   ├── bitcoinService
│   │   ├── server.js
│   │   └── package.json
│   ├── ethereumService
│   │   ├── server.js
│   │   └── package.json
│   ├── moneroService
│   │   ├── server.js
│   │   └── package.json
│   ├── solanaService
│   │   ├── server.js
│   │   └── package.json
├── frontend
│   ├── index.html
│   ├── styles.css
│   └── script.js
└── README.md
```

## Installation and Usage

### Backend

1. Navigate to the `backend` directory.
```bash
cd backend
```

2. Install the required dependencies for each cryptocurrency service.
```bash
cd <cryptocurrency>Service
npm install
```

3. Start the server for each cryptocurrency service.
```bash
node server.js
```

### Frontend

1. Navigate to the `frontend` directory.
```bash
cd frontend
```

2. Open the `index.html` file in your browser. You can also use a live server extension in your code editor.