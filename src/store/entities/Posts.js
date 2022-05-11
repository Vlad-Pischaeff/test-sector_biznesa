import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getPosts = createAsyncThunk('posts/getPosts', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  return response.json();
})

const posts = createSlice({
  name: 'posts',
  initialState: {
    list: [],
    filteredList: [],
    state: null
  },
  reducers: {
    checkPosts: (posts, { payload }) => {
      const { testStr } = payload;
      let matcher = new RegExp(`${testStr}`, 'gi');
      const arr = posts.list.filter(post => (matcher.test(post.title) || matcher.test(post.body)));
      posts.filteredList = arr;
    },
    sortPosts: (posts, { payload }) => {
      let i = Object.keys(payload);
      let val = payload[i];

      if (i[0] === "id") {
        posts.filteredList = val
          ? posts.filteredList.sort((a, b) => a[i] - b[i])
          : posts.filteredList.sort((a, b) => b[i] - a[i]);
      } else {
        posts.filteredList = val
          ? posts.filteredList.sort((a, b) => a[i][0].localeCompare(b[i][0]))
          : posts.filteredList.sort((a, b) => b[i][0].localeCompare(a[i][0]));
      }
    }
  },
  extraReducers: {
    [getPosts.pending]: (posts, action) => {
      posts.state = 'loading';
    },
    [getPosts.fulfilled]: (posts, { payload }) => {
      posts.state = 'fullfiled';
      if (Array.isArray(payload)) {
        posts.list = payload;
        posts.filteredList = payload;
      }
    },
    [getPosts.rejected]: (posts, action) => {
      posts.state = 'failed';
    }
  }
});

export const { checkPosts, sortPosts } = posts.actions;
export default posts.reducer;