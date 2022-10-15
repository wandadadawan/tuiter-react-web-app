import tabs from './tabs.js';
import TabItem from "./TabItem.js";

const NavTab = () => {
  return (`
    <ul class="nav nav-tabs mt-2">
      ${tabs.map(TabItem).join('')}
    </ul>
  `);
};
export default NavTab;