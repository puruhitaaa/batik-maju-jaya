import { useState } from 'react';
import { fruits as data } from '../data/fruitState';
import _ from 'lodash';

export const useFruit = () => {
  const [fruits] = useState(data);
  const [categorizedFruits] = useState(_.groupBy(data, 'fruitType'));

  const importStocks = categorizedFruits.IMPORT.map(
    (element) => element.stock
  ).reduce((a = 1, b = 1) => a + b);

  const localStocks = categorizedFruits.LOCAL.map(
    (element) => element.stock
  ).reduce((a = 1, b = 1) => a + b);

  const importFruits = categorizedFruits.IMPORT;

  const localFruits = categorizedFruits.LOCAL;

  return {
    fruits,
    categorizedFruits,
    importStocks,
    localStocks,
    importFruits,
    localFruits,
  };
};
