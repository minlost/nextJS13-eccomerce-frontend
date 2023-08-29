# Next.js 13 E-Commerce Frontend

This repository hosts the frontend code for a simple e-commerce website built on Next.js 13. This frontend is designed to interface with the [Next.js 13 CMS Backend](https://github.com/minlost/next13-CMS-backend).

## Table of Contents

- [Backend Repository](#backend-repository)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Contributions](#contributions)
- [License](#license)

## Backend Repository

This frontend project is designed to work in conjunction with the [Next.js 13 CMS Backend](https://github.com/minlost/next13-CMS-backend). Please refer to its documentation for setup and API details.

## Technologies

- **Frontend Framework**: Next.js 13
- **State Management**: Zustand
- **Data Validation**: Zod
- **Payment Processing**: Stripe
- **Type Checking**: TypeScript

## Installation

To get started, clone the repository and install the necessary dependencies:

```bash
npm install
# or
yarn install

```

## Environment Variables

Copy the .env.example file to .env.local and populate it with your API keys.

## Usage

```bash
npm run dev
# or
yarn dev

```

Navigate to http://localhost:3000 to see the app in action.

## Features

Shopping Cart
Add items to cart
Remove items from cart
View cart summary

### Stripe Payments

Checkout with Stripe
Secure payment processing

### Product Filters

Filter products by categories
Sort products by price, name, etc.

## Contributions

Contributions are welcome! Please fork the repository and create a pull request for any enhancements or bug fixes.

## Screenshots

![Screenshot 1](https://iili.io/HyhPjHb.png)
![Screenshot 2](https://iili.io/HyhiuzQ.png)
![Screenshot 3](https://iili.io/HyhiY11.png)

## License

This project is open-source and available under the MIT License. See the LICENSE file for more details.
