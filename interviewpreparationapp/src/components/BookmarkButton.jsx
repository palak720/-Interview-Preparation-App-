import { Button } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { toggleBookmark } from "../redux/actions/bookmarkActions";

const BookmarkButton = ({ question }) => {
  const dispatch = useDispatch();
  return (
    <Button onClick={() => dispatch(toggleBookmark(question))} colorScheme="yellow">
      Bookmark
    </Button>
  );
};

export default BookmarkButton;