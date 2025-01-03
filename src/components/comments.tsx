"use client";

import { useState } from "react";

export default function CommentSection() {
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim() === "") return; // Prevent empty comments
    setComments([...comments, newComment]);
    setNewComment(""); // Clear input field
  };

  return (
    <section className="mt-8">
      <h2 className="text-lg font-bold">Comments</h2>
      
      {/* Comment List */}
      <ul className="space-y-4 mt-4">
        {comments.length > 0 ? (
          comments.map((comment, index) => (
            <li key={index} className="border-b pb-2">
              <p>{comment}</p>
            </li>
          ))
        ) : (
          <p>No comments yet. Be the first to comment!</p>
        )}
      </ul>

      {/* Comment Form */}
      <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-2">
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write your comment..."
          className="border px-2 py-1 rounded"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Add Comment
        </button>
      </form>
    </section>
  );
}
