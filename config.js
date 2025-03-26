const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VU2ZKqSBT8l3rVvoosghEdMSIuKCiiuE3chwIKKIFiK0Ds8N8n1O7ofpjb0/NWUUuerMw85w2QBBdogRoweANpjitI0X1JmxSBAZBLz0M5aAMXUggGYKovEB+s64VU7idpCqezuUW3XKWyk7x/WfhnJTGY6RkWO/UV3NogLe0IO98AImbuTA1lsRYzfc9s6XI1Evt5ycgXfhJAXlfjcQXXIi5Y6xXc7ogQ55j44zRAMcphtECNAXH+M/ot9co5m3J/bWIJmmJYTnVCmtmqVA5NNzj308Y/NpSoBaP/jL6dxMKxoquOmGd7km8P5XLnK2Kd18JlU3ZU2Opc9r1euIr0J/0C+wS5qosIxbT5se6hvtW97ZTCxJB2Jb+v6nXpl7N+umrGXpA5ch7MmdNhByc/JL6wlvJx31xDzVP03jrxLgulmYxOUtoR/OI0lNJrypyQm9bjr8SN/CMr4f/RfTo7dKMh24pUPDRsU9UOpjQkK6FnoUMy2c5k5TKH3oqkIfcz+s3IRZUTGx4RiQ2vchculHm+rtYzRj9vWlZsy0ZxGJGqWX/Sh7TMv2M5yTg2O5lGwNa4oXHZUrmkQ1arbiL2zYXfMSwSYZsly+lucxb8GrdM7rwiW7PclljKJJHfleN53elnQXVgJLtY8oG/fn38KESN6oIBc2uDHPm4oDmkOCGPPUloA+hWG+TkiD7kBceVNcnChdmwmXnlVMPULZ9xt5orZwsTV5JuTfhMgT1FqV9BG6R54qCiQO4MFzTJGx0VBfRRAQZ//24Dgi70ady9HMu0gYfzglqkTKMEuh+ufhxCx0lKQjcNcUb3BcrBoPu5jSjFxC/uOpYE5k6AKzQKIC3AwINRgW5t4KIKO+iOB0pzMgucarLh4mVgnw+UXTOxf6ccJOR5pQf7HGJZ7qXH2sILJ3LCi2i7wovQhxJieYnrOxC0AX7vmfubP1q4mealI+xVaTXb7DrK1s9OqDos2c742RdP7VGOXDCgeYnawIZOWKbbJETkG1zqzmai5lRhy5lIKIsO1qZuLS+JzYRfcJ+egsHb55waJe4dz1gaI82UJNAG8SOC+PFznu+LPabbEwRhwPB/Fb/qu5AwTX8RRO+476LfX7iIQhwVYABGekur5up0vPLi0Ban0+HYH478Ifg06SPtzzRhjcgtq7/Man/MInnozDU5VUZq0XNbzkgsk9PBv+T6rGms138BAQNwubquaFvJ6tgnx+lGLg+nSo+28WRiVJpYqbRXGUpRKrsgoljV070iMUGPJU53eLXIVSvDemPUh+5m2dXD2FHD9XY/rF/v1Z5h+VqsUrS1ynHI5pNQ8EXVtM61c16uacgXVJP4QmKEaHM6u1aCqRWZ7ugoXpS+yWnFaXmeZzINk72Tp2Zc+1o+zbLgQvB7Hz7mQPQ+f/GjQ97eo+Vh9BhnBN4t+i9zvqa8e2t/wXgfkH9IknzEfO1FqyssVHnJ+uvZaFPDdY21JfHIsNKy6Y7T4VUWiwjcbr/bII0g9ZI8BgMAiZsn2AVtEMGCDj8bdYtjVFAYp2DA9Dm22+O7DHv7B/11Wk7eBwAA',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Ibrahim Adams",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "255782102666",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'yes',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.CHATBOT || 'yes',
    CHATBOT1 : process.env.AUDIO_CHATBOT || 'yes',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE_MESSAGES || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  ANTILINK_GROUP : process.env.ANTILINK_GROUP || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'no',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});





