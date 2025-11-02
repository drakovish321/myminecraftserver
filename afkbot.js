const mineflayer = require('mineflayer');

function createBot() {
    const bot = mineflayer.createBot({
        host: 'localhost',  // Server host
        port: 25565,        // Server port
        username: 'AFKBot'
    });

    bot.once('spawn', () => {
        console.log('AFKBot spawned!');
        moveLoop();
    });

    bot.on('end', () => {
        console.log('Disconnected, retrying in 10 seconds...');
        setTimeout(createBot, 10000);
    });

    function moveLoop() {
        if (!bot.entity) return;

        const actions = ['forward', 'back', 'left', 'right', 'jump'];
        const action = actions[Math.floor(Math.random() * actions.length)];
        bot.setControlState(action, true);

        const slot = Math.floor(Math.random() * bot.inventory.slots.length);
        bot.setQuickBarSlot(slot);

        setTimeout(() => {
            bot.setControlState(action, false);
            moveLoop();
        }, 2000 + Math.random() * 2000);
    }
}

createBot();
