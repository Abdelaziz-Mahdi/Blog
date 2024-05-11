import { Route, Routes } from "react-router-dom";
import PostsList from "../features/posts/PostsList";
import PostsForm from "../features/posts/PostsForm";
import PostsDetails from "../features/posts/PostsDetails";
import PostEditForm from "../features/posts/PostEditForm";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PostsList />} />
      <Route path="/posts/:id" element={<PostsDetails />} />
      <Route path="/posts/:id/edit" element={<PostEditForm />} />
      <Route path="/new" element={<PostsForm />} />
    </Routes>
  );
}
