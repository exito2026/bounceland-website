# BOUNCELAND Playground

## Project purpose

This is a small, bilingual website for BOUNCELAND Playground, a children's soft play rental business in Mississauga, Ontario. Families can learn about the rental packages, service areas and rental details, then send a booking inquiry using WhatsApp.

The website does not take payments or confirm a reservation. The owner must reply to the inquiry and confirm the details directly.

## Technologies

- HTML: the page content and inquiry form.
- CSS: the pastel design and responsive layouts for phones, tablets and computers.
- Vanilla JavaScript: the English/Spanish selector, mobile menu and WhatsApp inquiry message.
- SVG: original local illustrations used as temporary image placeholders.

There is no database, paid API, payment service or installation step.

## Website features

- English is the default language; visitors can switch to Spanish.
- A temporary catalog preview based on the six preset packages and one custom option in the old PDF catalog.
- Catalog photos and the logo copied from the supplied PDF.
- Each preset package shows its photo, description, included equipment, a five-hour standard rental period and a WhatsApp availability link.
- A gallery using photos from the old catalog.
- Temporary preview prices: the old prices plus CAD $70. These prices, package names and equipment lists are not final.
- Confirmed service areas: Mississauga, Brampton, Oakville, Milton and Toronto.
- Standard rental time is up to 5 hours. Extra hours may be available for an extra fee, subject to availability.
- Delivery fee depends on the customer's location. Setup and takedown are included.
- Frequently Asked Questions in both languages.
- An inquiry form that opens WhatsApp with the details filled in. The customer reviews and sends the message.
- A separate floating WhatsApp chat button for contacting the business directly.
- A booking inquiry does not confirm availability or reserve a rental.

## Temporary catalog price preview

The amounts below were calculated from the old PDF catalog by adding CAD $70. They are only for a website preview and must be confirmed or replaced before launch.

| Old catalog option | Preview amount |
| --- | ---: |
| Package One | CAD $420 |
| Package Two | CAD $520 |
| Package Three | CAD $420 |
| Package Four | CAD $520 |
| Package Five | CAD $420 |
| Package Six | CAD $670 |
| Build Your Own Package | Starting at CAD $370 |

The catalog names and included equipment are also temporary. The website uses the current standard rental limit of up to 5 hours.

## Run the website on your computer

1. Open the `bounceland-website` folder.
2. Double-click `index.html`, or right-click it and choose a browser such as Chrome or Edge.
3. Use the EN/ES selector to change languages.
4. Fill out the inquiry form and submit it to see the WhatsApp message. A device with WhatsApp or WhatsApp Web is needed to continue the inquiry.

## Open the website online

The public preview is hosted with GitHub Pages:

https://exito2026.github.io/bounceland-website/

To publish future updates, push the changed website files to the repository's `main` branch. GitHub Pages serves the files from the root of that branch.

## Update the project

- **Packages, descriptions and included equipment:** edit the package cards in `index.html`. The current cards come from an old catalog and are temporary.
- **Preview prices:** edit the amounts in the package cards in `index.html`. Confirm the business's current prices before publishing.
- **English and Spanish text:** edit the matching entries in `translations.js`. The language selector uses these entries to replace page text and form labels.
- **Colours and layout:** edit the CSS variables near the top of `styles.css`.
- **Photos:** replace the `catalog-package-*.jpg` files in `assets/images` with updated business photos. Keep the same filenames or update their paths and alt text in `index.html`.
- **Logo:** replace `assets/images/bounceland-catalog-logo.png` if the business has a newer approved logo.
- **WhatsApp number:** the supplied number is in `script.js` and in the WhatsApp and telephone links in `index.html`. Verify that it is registered for WhatsApp before publishing. The number is not verified by this project.
- **Service areas:** update both languages in `translations.js` and the visible content in `index.html` when the owner confirms a service-area change.

## Before using this as the final business website

This public site is a preview based on an old catalog. Confirm the WhatsApp number, current package names and equipment lists, prices, logo, and photos before advertising it as the final business website. The direct WhatsApp buttons and inquiry form are links; this project cannot verify whether the supplied number has an active WhatsApp account.
