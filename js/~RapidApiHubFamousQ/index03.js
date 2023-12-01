async function getRedditPosts() {
  try {
    const response = await fetch('https://www.reddit.com/r/all/top.json?limit=10');
    const data = await response.json();
    const posts = data.data.children.map(child => child.data);
    console.log(posts.map(post => post.title));
  } catch (error) {
    console.error(error);
  }
}