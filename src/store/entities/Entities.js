import { combineReducers } from "@reduxjs/toolkit";
import ui from './Ui';
import posts from './Posts';
import pages from './Pages';

export default combineReducers({
  posts, 
  ui,
  pages
});