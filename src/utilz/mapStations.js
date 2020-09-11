import {stations} from '../mockData';
const models = ['Aist', 'GT', 'LTD'];
export const stationWithBikes = stations.map((item) => {
  const totalNumber = Math.floor(Math.random() * 100);
  const availableNumber = Math.floor(totalNumber * Math.random());
  let availability = availableNumber;
  return {
    ...item,
    totalNumberOfBicycles: totalNumber,
    availableNumberOfBicycles: availableNumber,
    bicycles: Array(totalNumber)
      .fill(0)
      .map((item, index) => {
        const generatedBicycleObject = {
          available:
            availableNumber === 0 ? false : availability > 0 ? true : false,
          battery: Math.floor(Math.random() * 100),
          model: models[Math.floor(Math.random() * 3)],
        };
        availability--;
        return generatedBicycleObject;
      }),
  };
});
