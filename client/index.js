const readline = require('readline/promises')

require('dotenv').config();
const { GoogleGenAI } =require( "@google/genai"); 
const { text } = require('stream/consumers');
const { type } = require('os');

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });



const chatHistory = []
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

async function chatLoop() {
    const question = await rl.question('You:')

    chatHistory.push({
        role:"user",
        parts: [
            {
                text: question,
                type:"text"
            }
        ]
    })

    const response = await ai.models.generateContent({
        model:"gemini-2.0-flash",
        contents:chatHistory
    })

    console.log(response.candidates[0].content.parts[0].text)

    
}

chatLoop()