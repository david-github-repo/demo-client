import mineflayer from 'mineflayer';
// CommonJS module, cannot use named imports
import mineflayerPathfinder from 'mineflayer-pathfinder';

const { pathfinder, Movements, goals } = mineflayerPathfinder;
const { GoalNear } = goals;

console.log('Demo Client started.');

const HOST = process.env.HOST;
const PORT = Number(process.env.PORT);

if (!HOST || !PORT) {
  console.error('Please set the HOST and PORT environment variables.');
  process.exit(1);
}

const bot = mineflayer.createBot({
  username: 'Demo_Client',
  host: HOST,
  port: PORT,
});
bot.loadPlugin(pathfinder);

bot.once('spawn', async () => {
  console.log('Bot spawned.');
  bot.pathfinder.setMovements(new Movements(bot));

  // Walk in a square pattern
  await bot.pathfinder.goto(new GoalNear(167, -58, 110, -1));
  await bot.pathfinder.goto(new GoalNear(167, -58, 116, -1));
  await bot.pathfinder.goto(new GoalNear(160, -58, 116.51, -1));
  await bot.pathfinder.goto(new GoalNear(160, -58, 110, -1));

  // Disconnect after reaching the goal
  bot.quit();

  console.log('Bot has completed the path and is quitting.');
});
