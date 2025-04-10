const readline = require('readline/promises')

const chatHistory = []
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

async function chatLoop() {
    const question = await rl.question('You:')

    
}