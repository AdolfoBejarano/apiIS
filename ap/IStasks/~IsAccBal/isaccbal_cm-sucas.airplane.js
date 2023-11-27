// my_task.airplane.ts
import airplane from "airplane";

export default airplane.task(
  // Task configuration
  {
    slug: "isaccbal_cm_sucas",
    name: "isaccbal_cm_sucas",
    description: "This is my task defined entirely in TypeScript!",
  },
  // Task implementation
  async () => {
  fetch('https://wyyxd.api.infobip.com/account/1/balance', {
    method: 'GET',
    headers: {
      'Authorization': 'App a38b0157c30c7268221d2042ae45fcc6-df6a2774-fa87-4ec4-a639-d4f04cdf0c2d',
      'Accept': 'application/json',
    },
  })
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
  },
);