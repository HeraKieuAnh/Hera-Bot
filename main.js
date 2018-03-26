
const HeramBot = require('./src/hera-bot.js');
const logger = require('./src/logger.js');

const bot = new RhythmBot({
    command: {
        symbol: '.' // command symbol trigger
    },
    discord: {
        token: 'NDI0MTg2MzQ4MDI3NzcyOTI4.DZp27g.J0kp4fpW98ZGerMfv9mw_HlkwgI'//,
        // manage: {
        //     channels: [ 
        //         // Example text channel manager, limits media channel to 5 posts, limit should probably be less than 100 to avoid bugs
        //         { name: 'media', limit: 5 }  
        //     ]
        // }
    }
});

bot.connect()
    .then(() => { 
        logger.log('Listening');
        bot.listen();
    })
    .catch(err => {
        logger.error(err);
    });
