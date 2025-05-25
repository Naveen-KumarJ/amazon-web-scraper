# 🛒 Amazon Web Scraper using Node.js

This project is a simple web scraper built with **Node.js**, **Axios**, and **Cheerio** that scrapes Amazon India (`amazon.in`) for product details like product name, price, rating, and availability based on a search term.

## 📦 Features

- Scrapes Amazon.in search results
- Extracts:
  - Product Name
  - Price
  - Rating
  - Stock Availability
- Saves data in:
  - `scrapedData.json`
  - `amazonscrape.xlsx` (Excel format)

## 🚀 Technologies Used

- [Node.js](https://nodejs.org/)
- [Axios](https://www.npmjs.com/package/axios)
- [Cheerio](https://www.npmjs.com/package/cheerio)
- [xlsx](https://www.npmjs.com/package/xlsx)
- [fs (Node File System)](https://nodejs.org/api/fs.html)

## 🧪 Usage
Run the script with:
```
node index.js
```

The script is currently set to search for earpods. You can change the search term by modifying the last line in index.js:
```
scrapeAmazon("your-search-term");
```
