export const addBookmark = (question) => (dispatch, getState) => {
    const { bookmarks } = getState();
    const isBookmarked = bookmarks.includes(question);
    dispatch({
      type: isBookmarked ? "REMOVE_BOOKMARK" : "ADD_BOOKMARK",
      payload: question,
    });
  };
  