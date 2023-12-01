async function getRedditPosts() {
  try {
	var myHeaders = new Headers();
    myHeaders.append("X-RapidAPI-Key", "443c1212admshcd8b8cf31932797p136430jsn3a168fe964c1");
    myHeaders.append("X-RapidAPI-Host", "famous-quotes4.p.rapidapi.com");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};  
    const response = await fetch("https://famous-quotes4.p.rapidapi.com/random?category=all&count=1", requestOptions));
    const data = await response.json();
    const posts = data.data.children.map(child => child.data);
    console.log(posts.map(post => post.title));
  } catch (error) {
    console.error(error);
  }
}