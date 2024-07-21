const { Client, GatewayIntentBits, ContextMenuCommandAssertions } = require('discord.js');
const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs=require("fs");
const { error } = require('console');
const config = JSON.parse(fs.readFileSync('config.json', 'utf-8'));
const API_KEY = config.API_KEY;



//determines the sensitivity of the messages , you can change it to make more safe
const safe = [
    {
        "category": "HARM_CATEGORY_HARASSMENT",
        "threshold": "BLOCK_NONE",
    },
    {
        "category": "HARM_CATEGORY_HATE_SPEECH",
        "threshold": "BLOCK_NONE",
    },
    {
        "category": "HARM_CATEGORY_SEXUALLY_EXPLICIT",
        "threshold": "BLOCK_NONE",
    },
    {
        "category": "HARM_CATEGORY_DANGEROUS_CONTENT",
        "threshold": "BLOCK_NONE",
    },
]

async function getResult(prompt , message){
    
    try {
          const genAI = new GoogleGenerativeAI(API_KEY);
          const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" , safe });
      
      const result = await model.generateContent([prompt + "(you are a discord bot , different users will be interacting with you)" ]);
      let AIresponse=result.response.text();
      
      return AIresponse;
    } catch (error) {
       console.log(error);
       return "Something went wrong";
    }
   
   
   }

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers

    ]
});

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

// Event listener for new messages
client.on('messageCreate', message => {
    // Ignore messages from the bot itself
    if (message.author.bot) return;


    if(message.content.toLowerCase().includes("ai ")){
        getResult(message.content).then((response)=>{
            message.reply(respone);


        })
    }
})

client.login('discord api key here');


