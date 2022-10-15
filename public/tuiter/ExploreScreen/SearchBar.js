const SearchBar = () => {
  return (`
    <div class="row">
      <div class="col-11 position-relative">
        <input class="form-control rounded-pill ps-5 position-relative" placeholder="Search Tuiter">
        <i class="fas fa-search position-absolute wd-search-icon-position"></i>
      </div>
      <div class="col-1 d-flex flex-wrap align-items-center justify-content-end">
        <a href="#"><i class="fas fa-cog fa-2x"></i></a>
      </div>
    </div>
  `);
};
export default SearchBar;