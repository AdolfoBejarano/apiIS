const resp = await fetch("https://airplane.dev");

const myFile = airplane.file.upload(await resp.text(), "airplane.txt");

// you can display the file directly in the UI
await airplane.display.file(myFile);

// you can also pass the file to another task
await airplane.execute("my_task", { file: myFile });