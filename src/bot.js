const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config();
const fetch = require('node-fetch');

const want = "slap";
const limit = 50;
let ranNumber;
const deleteTime = 10000;
const prefix = '!';

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});

client.on('message', handleData);

const sendGif = async (message) => {
    message.delete();
    const curl = `https://api.tenor.com/v1/search?q=${want}&key=${process.env.tenorKey}&limit=${limit}&ContentFilter=G`;
        const res = await fetch(curl);
        const json = await res.json();
        ranNumber = Math.floor(Math.random() * json.results.length);
        let gifPage = json
            .results[ranNumber]
            .itemurl;
        message.channel.send(gifPage)
        .then(msg => msg.delete({timeout : deleteTime}));
}

async function handleData(message) {
    switch (message.content.toLowerCase()) {
        case `${prefix}slap`:
        case `${prefix}뺨`:
        case `${prefix}따귀`:
        case `${prefix}따구`:
        case `${prefix}싸다구`:
        case `${prefix}싸따귀`:
        case `${prefix}찰싹`:
        case `${prefix}찰지구나`:
        case `${prefix}spank`:
            sendGif(message);
            break;
        default:

    }
}


client.login(process.env.DISCORD_TOKEN);