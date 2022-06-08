import moment from 'moment';
import { sequelize } from './lib/db/sequelize';
import { executeFiveMinutesTrigger } from './lib/systems/fiveMinutesTrigger';
import { executeSecondsTrigger } from './lib/systems/secondsTrigger';

const run = async () => {
  await sequelize.sync();

  const timeChecker = () => {
    const currentMoment = moment();

    if (currentMoment.seconds() % 20 == 0) {
      executeSecondsTrigger(currentMoment);
    }

    if (currentMoment.minutes() % 5 == 0 && currentMoment.seconds() % 60 == 0) {
      executeFiveMinutesTrigger(currentMoment);
    }
  };

  // setInterval(timeChecker, secondsToMilliseconds(1));
  setInterval(timeChecker, 1000);
};
run();

import './web/webserver';
