import { getRandomInteger } from '../brainMath.js';
import { definer } from '../generic.js';

const desc = 'Answer "yes" if number even otherwise anser "no"';
const game = () => {
  const num = getRandomInteger(1, 10);
  const answer = num % 2 === 0 ? 'yes' : 'no';
  return { question: num, answer };
};

definer('brainEven', desc, game);