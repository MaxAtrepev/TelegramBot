process.env.NTBA_FIX_319 = 1; // It somehow fixes the warning in the console. Have to investigate...

require('dotenv').config();
const TelegramApi = require('node-telegram-bot-api');

const token = process.env.BOT_TOKEN;

const infoMessage =
  'Компания СтальСити.рф занимается изготовлением и монтажом изделий любой сложности (металлоконструкции и художественная ковка) по цене от производителя. Компания является одним из лидеров рынка металлоконструкций и художественной ковки, имеющая собственные производственные площади и современное оборудование, что позволяет устанавливать цены ниже, чем у конкурентов.';
const greetingMessage = 'Добро пожаловать в телеграм канал SteelCity!';
const addressMessage = 'Рязанская область, г. Рыбное, ул. Кооперативная, д. 1Б';

const start = () => {
  const bot = new TelegramApi(token, { polling: true });

  bot.setMyCommands([
    { command: '/start', description: 'Начальное приветствие' },
    { command: '/info', description: 'Информация о компании' },
    { command: '/address', description: 'Адрес' },
  ]);

  bot.on('message', async (msg) => {
    const {
      text,
      chat: { id: chatId },
    } = msg;

    if (text === '/start') {
      await bot.sendSticker(
        chatId,
        'https://cdn.tlgrm.app/stickers/fea/dc0/feadc0cd-b22b-4df2-971b-92fc5441459b/256/1.webp'
      );
      await bot.sendMessage(chatId, greetingMessage);
      return;
    }

    if (text === '/info') {
      await bot.sendMessage(chatId, infoMessage);
      return;
    }

    if (text === '/address') {
      await bot.sendLocation(chatId, 54.72812, 39.504779);
      await bot.sendMessage(chatId, addressMessage);

      return;
    }
  });
};

start();
