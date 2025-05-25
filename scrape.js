const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("node:fs");
const xlsx = require("xlsx");

const scrapeAmazon = async (searchTerm) => {
  const url = `https://www.amazon.in/s?k=${searchTerm}`;

  try {
    const { data } = await axios.get(url);

    const $ = cheerio.load(data);
    const results = [];

    $(".s-result-item").each((i, el) => {
      const title = $(el).find("a h2 span").text().trim();
      const price = $(el).find(".a-price .a-offscreen").first().text().trim();
      const rating = $(el).find(".a-icon-alt").text().trim().substring(0, 3);
      const availabilityText = $(el)
        .text()
        .toLowerCase()
        .includes("currently unavailable")
        ? "Out of Stock"
        : "In Stock";

      if (title && price && rating) {
        results.push({
          "Product Name": title,
          Price: price,
          Rating: rating,
          Availability: availabilityText,
        });
      }
    });
    fs.writeFileSync("scrapedData.json", JSON.stringify(results));
    
    const workbook = xlsx.utils.book_new();
    const worksheet = xlsx.utils.json_to_sheet(results);
    xlsx.utils.book_append_sheet(workbook, worksheet, "Amazon Results");
    xlsx.writeFile(workbook, "amazonscrape.xlsx");
  } catch (error) {
    console.log("Error:", error.message);
  }
};

scrapeAmazon("earpods");
