import airplane from "airplane";

export default airplane.task(
  {
    slug: "task02",
    name: "task02",
  },
  // This is your task's entrypoint. When your task is executed, this
  // function will be called.
  async () => {
    const data = [
      { id: 1, name: "Gabriel Davis", role: "Dentist" },
      { id: 2, name: "ABF", role: "Civil Eng" },
      { id: 3, name: "Frances Hernandez", role: "Astronaut" },
      { id: 4, name: "MAGRAVIS", role: "My cpny" },
      ];

    // Sort the data in ascending order by name.
    data.sort((u1, u2) => {
      return u1.name.localeCompare(u2.name);
    });

    // You can return data to show output to users.
    // Output documentation: https://docs.airplane.dev/tasks/output
    return data;
  }
);
