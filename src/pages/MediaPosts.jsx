import { useState } from "react";

function MediaPosts() {
  // Human: Initialize an array to hold our posts.
  const [posts, setPosts] = useState([
    { id: 1, title: "First Post" },
    { id: 2, title: "Second Post" },
  ]);

  // Human: Initialize variables to hold new post input and editing information.
  const [newPost, setNewPost] = useState("");
  const [postIdToEdit, setPostIdToEdit] = useState(null);
  const [editPost, setEditPost] = useState("");

  // Human: Create a function to handle the creation of a new post.
  const handleCreate = () => {
    const newPostObj = { id: Date.now(), title: newPost };
    setPosts([...posts, newPostObj]);
    setNewPost(""); // Clear the input field
  };

  // Human: Create a function to handle editing a post.
  const handleEdit = (id) => {
    setPostIdToEdit(id);
    const postToEdit = posts.find((post) => post.id === id);
    setEditPost(postToEdit.title);
  };

  // Human: Create a function to handle updating a post.
  const handleUpdate = () => {
    const updatedPosts = posts.map((post) =>
      post.id === postIdToEdit ? { ...post, title: editPost } : post
    );
    setPosts(updatedPosts);
    setPostIdToEdit(null); // Clear the editing marker
    setEditPost(""); // Clear the edit input field
  };

  // Human: Create a function to handle deleting a post.
  const handleDelete = (id) => {
    const remainingPosts = posts.filter((post) => post.id !== id);
    setPosts(remainingPosts);
  };

  return (
    <div className="container mx-auto p-4">
      {/* Human: Input field for creating a new post */}
      <div className="flex justify-center items-center mb-4">
        <input
          type="text"
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          className="border p-2 rounded w-full md:w-1/2 "
        />
        <button
          onClick={handleCreate}
          className="bg-blue-500 hover:bg-amber-500 hover:text-black font-serif font-bold text-white p-2 rounded shadow-amber-400 drop-shadow-md ml-2"
        >
          Create
        </button>
      </div>

      {/* Human: List all posts */}
      <ul className="space-y-4">
        {posts.map((post) => (
          <li
            key={post.id}
            className="flex justify-between items-center border p-2 rounded"
          >
            {/* Human: Show edit input if this post is being edited */}
            {postIdToEdit === post.id ? (
              <input
                type="text"
                value={editPost}
                onChange={(e) => setEditPost(e.target.value)}
                className="border p-2 rounded"
              />
            ) : (
              <span className="text-lg">{post.title}</span>
            )}

            {/* Human: Show Update button if this post is being edited, else show Edit button */}
            <div className="flex space-x-2">
              {postIdToEdit === post.id ? (
                <button
                  onClick={handleUpdate}
                  className="bg-green-500 text-white p-2 rounded"
                >
                  Update
                </button>
              ) : (
                <button
                  onClick={() => handleEdit(post.id)}
                  className="bg-yellow-500 text-white  p-2 rounded"
                >
                  Edit
                </button>
              )}

              {/* Human: Button to delete the post */}
              <button
                onClick={() => handleDelete(post.id)}
                className="bg-red-500 text-white p-2 rounded"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MediaPosts;
