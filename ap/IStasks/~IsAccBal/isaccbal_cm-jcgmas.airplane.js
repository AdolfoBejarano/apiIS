// my_task.airplane.ts
import airplane from "airplane";

export default airplane.task(
  // Task configuration
  {
    slug: "isaccbal_cm_jcgmas",
    name: "isaccbal_cm_jcgmas",
    description: "This is my task defined entirely in TypeScript!",
  },
  // Task implementation
  async () => {
  fetch('https://wyyxd.api.infobip.com/account/1/balance', {
    method: 'GET',
    headers: {
      'Authorization': 'App dd134ffa3f36718b4e9813951e5c91b7-9baf2b72-ed3c-4a43-8300-3798bbf76e83',
      'Accept': 'application/json',
    },
  })
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
  },
);