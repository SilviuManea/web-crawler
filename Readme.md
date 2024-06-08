# Web Crawler with TypeScript and Express

This project is a web crawler built with TypeScript and Express, designed to extract and filter entries from Hacker News.

## Features

- Fetches the first 30 entries from [Hacker News](https://news.ycombinator.com/).
- Displays entry number, title, points, and comments.
- Provides filtering options:
    - Filter entries with more than 5 words in the title, ordered by comments.
    - Filter entries with 5 or fewer words in the title, ordered by points.

## Prerequisites

- Node.js (version 12.x or higher)
- npm (version 6.x or higher)

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/SilviuManea/web-crawler.git
    cd web-crawler
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

## Usage

1. Start the server:

    ```bash
    npm start
    ```

2. Open your browser at:

    ```
    http://localhost:3000
    ```

## Endpoints

- **GET /**: Main HTML page
- **GET /filter/more**: Filter titles > 5 words by comments
- **GET /filter/less**: Filter titles ≤ 5 words by points

## License

This project is licensed under the MIT License.
