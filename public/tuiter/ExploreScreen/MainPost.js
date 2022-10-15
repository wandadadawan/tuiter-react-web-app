const mainPost = {
  image: "../../images/spacex-starship.jpg",
  text: "SpaceX's Starship",
}

const MainPost = () => {
  return (`
    <div class="position-relative">
      <img src="${mainPost.image}" class="mt-2 w-100">
      <h2 class="position-absolute wd-main-post-image">${mainPost.text}</h2>
    </div>
  `);
};
export default MainPost;