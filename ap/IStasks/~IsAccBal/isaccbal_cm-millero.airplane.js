// my_task.airplane.ts
import airplane from "airplane";

export default airplane.task(
  // Task configuration
  {
    slug: "isaccbal_cm_millero",
    name: "isaccbal_cm_millero",
    description: "This is my task defined entirely in TypeScript!",
  },
  // Task implementation
  async () => {
  fetch('https://wyyxd.api.infobip.com/account/1/balance', {
    method: 'GET',
    headers: {
      'Authorization': 'App 6b235563ee1d31cc5180951fd8c23e95-d29a8eb4-7152-4a86-8fec-9e4a694a354d',
      'Accept': 'application/json',
    },
  })
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
  },
);