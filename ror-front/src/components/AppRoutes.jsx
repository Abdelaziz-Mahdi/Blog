import { Route, Routes } from "react-router-dom";
import PostsList from "../features/posts/PostsList";
import PostsForum from "../features/posts/PostsForum";
import PostsDetails from "../features/posts/PostsDetails";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PostsList />} />
      <Route path="/posts/:id" element={<PostsDetails />} />
      <Route path="/new" element={<PostsForum />} />
    </Routes>
  );
}
