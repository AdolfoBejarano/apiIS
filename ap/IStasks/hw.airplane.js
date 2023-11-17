// my_task.airplane.ts
import airplane from "airplane";

export default airplane.task(
  // Task configuration
  {
    slug: "hw",
    name: "HW",
    description: "This is my task defined entirely in TypeScript!",
  },
  // Task implementation
  async () => {
    console.log("Hello World!");
  },
);