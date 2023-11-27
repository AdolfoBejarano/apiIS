// my_task.airplane.ts
import airplane from "airplane";

export default airplane.task(
  // Task configuration
  {
    slug: "isaccbal_mag_tgrp",
    name: "isaccbal_mag_tgrp",
    description: "This is my task defined entirely in TypeScript!",
  },
  // Task implementation
  async () => {
  fetch('https://wyyxd.api.infobip.com/account/1/balance', {
    method: 'GET',
    headers: {
      'Authorization': 'App 14194def9d7947aac69b29e3a689c865-1530de3e-37d2-46b8-94a7-21b619e431ac',
      'Accept': 'application/json',
    },
  })
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
  },
);