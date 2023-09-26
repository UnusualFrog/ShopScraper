
# Shop Scrapper

A simple Javascript tool for scraping online shops to regularly check fo deals.



## Setup
- To get started be sure to create an .env file (create a new text file named ".env" without the .txt extension)
- You will need to add a variable named "PUPPETEER_SKIP_DOWNLOAD" and set it to true in the .env file to make the pupeteer install work
- **For Example:**
```
SET PUPPETEER_SKIP_DOWNLOAD='true'
```
- You will also need to add the variable: `WEB_URL_TO_SCRAPE ` to .env
- Set `WEB_URL_TO_SCRAPE ` to the URL for the site you want to scrape
- **For Example:**
```
WEB_URL_TO_SCRAPE = "http://books.toscrape.com/"
```

## Dependencies

- dotenv ^16.3.1
- puppeteer ^21.3.1"


