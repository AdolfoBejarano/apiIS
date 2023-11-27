// my_task.airplane.ts
import airplane from "airplane";

export default airplane.task(
  // Task configuration
  {
    slug: "isaccbal_cm_supal",
    name: "isaccbal_cm_supal",
    description: "This is my task defined entirely in TypeScript!",
  },
  // Task implementation
  async () => {
  fetch('https://wyyxd.api.infobip.com/account/1/balance', {
    method: 'GET',
    headers: {
      'Authorization': 'App 64f2a80c79adee83a5f889264aad6550-181644be-f511-4361-9cec-b1564e0e7f2a',
      'Accept': 'application/json',
    },
  })
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
  },
);