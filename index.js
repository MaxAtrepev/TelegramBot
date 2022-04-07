process.env.NTBA_FIX_319 = 1; // It somehow fixes the warning in the console. Have to investigate...

require('dotenv').config();
const TelegramApi = require('node-telegram-bot-api');
const {
  SITE_MAIN_URL,
  ARTISTIC_FORGING,
  METAL_STRUCTURES,
  PROJECTS,
  CONTACTS,
  GATES,
  ENTRANCE_GROUP,
  FURNITURE,
  CANOPY,
  FENCES,
  BALCONIES,
  ENTRANCE_CANOPY,
  STAIRS,
  BARS,
  BARBECUES,
  FLOWER_POTS,
  BENCHES,
  LANTERNS,
  CAPS,
  URNS,
  SWINGS,
  DOORS,
  ALCOVE,
  PERGOLA,
  RITUAL,
  BLUEPRINTS,
  SKETCHES_3D,
} = require('./constants');

const token = process.env.BOT_TOKEN;

const infoMessage =
  'Компания СтальСити.рф занимается изготовлением и монтажом изделий любой сложности (металлоконструкции и художественная ковка) по цене от производителя. Компания является одним из лидеров рынка металлоконструкций и художественной ковки, имеющая собственные производственные площади и современное оборудование, что позволяет устанавливать цены ниже, чем у конкурентов.';
const greetingMessage = 'Добро пожаловать в телеграм канал СтальСити.рф!';
const addressMessage = 'Рязанская область, г. Рыбное, ул. Кооперативная, д. 1Б';

const start = () => {
  const bot = new TelegramApi(token, { polling: true });

  bot.setMyCommands([
    { command: '/start', description: 'Начальное приветствие' },
    { command: '/info', description: 'Информация о компании' },
    { command: '/site', description: 'Навигация по сайту' },
    { command: '/address', description: 'Адрес' },
    { command: '/contacts', description: 'Контакты' },
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

    if (text === '/site') {
      await bot.sendMessage(chatId, 'Навигация по сайту', {
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: 'Главная страница',
                url: SITE_MAIN_URL,
              },
            ],
            [
              {
                text: 'Художественная ковка',
                callback_data: ARTISTIC_FORGING,
              },
            ],
            [
              {
                text: 'Металлоконструкции',
                url: METAL_STRUCTURES,
              },
            ],
            [
              {
                text: 'Проекты',
                url: PROJECTS,
              },
            ],
            [
              {
                text: 'Контакты',
                url: CONTACTS,
              },
            ],
          ],
        },
      });

      return;
    }

    if (text === '/contacts') {
      await bot.sendContact(chatId, '+7 (961) 130-69-63', 'Максим');
      await bot.sendMessage(chatId, '+7 (910) 905-98-45');
      await bot.sendMessage(chatId, '+7 (4912) 99-69-63');
      await bot.sendMessage(chatId, 'SteelCity@list.ru');

      return;
    }
  });

  bot.on('callback_query', async (query) => {
    const { message: { chat: { id: chatId } } = {}, data } = query;

    switch (data) {
      case ARTISTIC_FORGING:
        bot.sendMessage(chatId, 'Художественная ковка', {
          reply_markup: {
            inline_keyboard: [
              [
                {
                  text: 'Ограждения и заборы',
                  url: FENCES,
                },
              ],
              [
                {
                  text: 'Ворота и калитки',
                  url: GATES,
                },
              ],
              [
                {
                  text: 'Балконы',
                  url: BALCONIES,
                },
              ],
              [
                {
                  text: 'Входные группы',
                  url: ENTRANCE_GROUP,
                },
              ],
              [
                {
                  text: 'Кованная мебель',
                  url: FURNITURE,
                },
              ],
              [
                {
                  text: 'Навесы',
                  url: CANOPY,
                },
              ],
              [
                {
                  text: 'Козырьки',
                  url: ENTRANCE_CANOPY,
                },
              ],
              [
                {
                  text: 'Лестницы и перила',
                  url: STAIRS,
                },
              ],
              [
                {
                  text: 'Решётки',
                  url: BARS,
                },
              ],
              [
                {
                  text: 'Мангалы',
                  url: BARBECUES,
                },
              ],
              [
                {
                  text: 'Цветочницы',
                  url: FLOWER_POTS,
                },
              ],
              [
                {
                  text: 'Лавочки',
                  url: BENCHES,
                },
              ],
              [
                {
                  text: 'Фонари',
                  url: LANTERNS,
                },
              ],
              [
                {
                  text: 'Колпаки',
                  url: CAPS,
                },
              ],
              [
                {
                  text: 'Урны',
                  url: URNS,
                },
              ],
              [
                {
                  text: 'Качели',
                  url: SWINGS,
                },
              ],
              [
                {
                  text: 'Двери',
                  url: DOORS,
                },
              ],
              [
                {
                  text: 'Беседки',
                  url: ALCOVE,
                },
              ],
              [
                {
                  text: 'Пергола',
                  url: PERGOLA,
                },
              ],
              [
                {
                  text: 'Ритуальное направление',
                  url: RITUAL,
                },
              ],
              [
                {
                  text: 'Чертежи и эскизы',
                  url: BLUEPRINTS,
                },
              ],
              [
                {
                  text: '3D-эскизы',
                  url: SKETCHES_3D,
                },
              ],
            ],
          },
        });
        break;
      default:
        break;
    }
  });
};

start();
