async function upldfiletoAP()
{

// First ask the user for a file.
let { photo } = await airplane.prompt({ photo: "upload" });

// Then display it in the UI
await airplane.display.file(photo);

}