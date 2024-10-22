﻿# Gemini-Discord-Bot
Project Name (Gemini Bot)
Description

This Discord bot utilizes Google Generative AI to respond to user prompts in a safe and controlled manner. Users can send messages containing "ai " followed by their prompt, and the bot will generate creative text formats based on the input.

### Requirements

Node.js and npm (or yarn) installed on your system
A Discord bot token (obtainable from the Discord Developer Portal) (https://discord.com/developers/docs/intro)
A Google Cloud Project with the Google Generative AI API enabled (https://cloud.google.com/ai/generative-ai)
Installation

Clone this repository or download the code.

Install the required dependencies:

Bash
npm install discord.js @google/generative-ai fs
Use code with caution.

Create a file named config.json in the root directory of your project with the following content, replacing the placeholder with your actual Discord bot token:

JSON
{
  "API_KEY": "your_discord_bot_token"
}
Use code with caution.

### Configuration

Safety: The safe array in the code defines the sensitivity level for different content categories. You can adjust the threshold values (e.g., "BLOCK_LOW", "BLOCK_MODERATE") in the safe array within the code to control how strictly the AI model filters responses.
Running the Bot

Start a terminal or command prompt in the project directory.

Run the following command to start the bot:

Bash
node index.js  // Replace with your main script name if different
Use code with caution.

### Usage

Once the bot is running, users can interact with it by sending messages that start with "ai ". For example:

ai Write a poem about a cat
ai Create a funny story about a robot butler
The bot will respond with the generated text based on the prompt.

### Additional Notes

This is a basic example, and you can extend it to handle more complex interactions and functionalities.
Be sure to follow the terms of service for both Discord and Google Generative AI when using this code.
Consider error handling and logging mechanisms for a more robust bot.
Contributing

Feel free to fork this repository and make improvements! Pull requests are welcome.
