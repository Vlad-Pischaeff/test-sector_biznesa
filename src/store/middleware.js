import { createListenerMiddleware } from '@reduxjs/toolkit';
import { switchSorting } from './entities/Ui';
import { sortPosts, checkPosts } from './entities/Posts';
import { setPages, setCurrentPage } from './entities/Pages';

export const ENTRIES_PER_PAGE = 10;

export const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
  actionCreator: switchSorting,
  effect: ({ payload }, { getState, dispatch }) => {
    const { entities } = getState();
    const { ui } = entities;
    const { key } = payload;
    dispatch(sortPosts({ [key]: ui[key] }));
  }
});

listenerMiddleware.startListening({
  actionCreator: checkPosts,
  effect: (action, { getState, dispatch }) => {
    const { entities } = getState();
    const { posts, pages } = entities;
    let lists = Math.ceil( posts.filteredList.length / ENTRIES_PER_PAGE );
    lists = lists ? lists : 1;
    dispatch(setPages({ pages: lists }));
    pages.currentPage !== 1  &&  dispatch(setCurrentPage({ currentPage: 1 }));
  }
});