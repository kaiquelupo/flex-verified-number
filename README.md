# Using a verified number to connect calls to agents

This Flex plugin replaces a SIP domain address by a verified number to successfully connect the call to the agent. 

## How to use

1. Clone this repository

2. Copy .env.example to .env and populate the appropriate environment variables.

3. Copy `public/appConfig.example.js` to `public/appConfig.js`

4. Run `npm install`

5. cd back to the root folder and run `npm start` to run locally or `npm run-script build` and deploy the generated ./build/plugin-dialpad.js to [twilio assests](https://www.twilio.com/console/assets/public) to include plugin with hosted Flex. Also, you want to use Twilio Serverless, just run `npm run deploy` to send your plugin directly to your Flex.