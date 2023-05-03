# Lord of the Rings Quotes App

This is a React TypeScript app that displays a list of movies from the Lord of the Rings trilogy, and allows the user to view quotes from each movie.

## Installation

To install this app, clone the repository to your local machine and install the dependencies using Yarn or NPM:

```bash
git clone https://github.com/PaladinKnightMaster/LOTR_Cody_Project.git
cd LOTR_Cody_Project
yarn install
```

## Usage

To start the app, run the following command:

```bash
yarn dev
```

This will start the development server and open the app in your default browser.

## Features

- View a list of movies from the Lord of the Rings trilogy.
- View quotes from each movie.
- Infinite scrolling of quotes.
- Caching of character data for improved performance.

## Folder Structure

```
src/
├── components/
│ ├── MovieDetails.tsx
│ ├── MovieList.tsx
│ ├── MovieListItem.tsx
│ ├── QuoteList.tsx
│ ├── NotFound.tsx
│ └── ...
├── models/
│ ├── Character.ts
│ ├── Movie.ts
│ └── Quote.ts
├── pages/
│ ├── Home/
│ │ └── index.tsx
│ └── Movie/
│   └── [id].tsx
├── routers/
│ └── index.tsx
├── services/
│ └── LordOfRingsAPI.ts
├── types/
├── utils/
├── App.css
├── App.tsx
├── index.css
├── main.tsx
└── ...
```

## Dependencies

- React
- TypeScript
- Vite
- Axios
- React Router DOM v6
- React Infinite Scroller

## API Reference

This app uses the [Lord of the Rings API](https://the-one-api.dev/) to fetch data.

## License

This project is licensed under the [MIT License](LICENSE).
