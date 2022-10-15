const TabItem = tab => {
  return (`
    <li class="nav-item">
      <a class="nav-link ${tab.active == undefined ? '' : 'active'}" href="${tab.link}">${tab.label}</a>
    </li>
  `);
};
export default TabItem;