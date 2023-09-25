import puppeteer from "puppeteer";
import 'dotenv/config'

const getProducts = async () => {
  // Start a Puppeteer session with:
  // - a visible browser (`headless: false` - easier to debug because you'll see the browser in action)
  // - no default viewport (`defaultViewport: null` - website page will in full width and height)
  const browser = await puppeteer.launch({
    headless: "new",
    defaultViewport: null,
  });

  // Open a new page
  const page = await browser.newPage();

  // On this new page:
  // - open the "http://quotes.toscrape.com/" website
  // - wait until the dom content is loaded (HTML is ready)
  await page.goto(process.env.WEB_URL_TO_SCRAPE, {
    waitUntil: "domcontentloaded",
  });

  // Get page data
  const products = await page.evaluate(() => {
    // Fetch the first element with class "quote"
    const productList = document.querySelectorAll("h3.wd-entities-title");

    // Fetch the sub-elements from the previously fetched quote element
    // Get the displayed text and return it (`.innerText`)
    //const text = quoteList.querySelector("a").innerText;

    return Array.from(productList).map((product) => {
        // Fetch the sub-elements from the previously fetched quote element
        // Get the displayed text and return it (`.innerText`)
        const text = product.querySelector("a").innerText;
  
        return {text};
      });
    //return text;
  });

  // Display the quotes
  checkSpecial(products);
  // Close the browser
  await browser.close();
};

function checkSpecial(products){
    console.log("============Status===============")
    products.forEach(product => {
        if(product.text.indexOf("Special") >= 0) {
            console.log(product.text);
         }
      });
    console.log("=================================")
}

// Start the scraping and run continuously ever minute
var interval = setInterval(getProducts, 60000);