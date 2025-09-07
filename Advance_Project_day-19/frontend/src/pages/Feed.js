import React, { useState, useEffect } from 'react';
import Post from '../components/Post';

const Feed = () => {
    const [posts, setPosts] = useState([]);
    const [content, setContent] = useState('');
    const token = localStorage.getItem('token');

    const fetchPosts = async () => {
        const res = await fetch('/api/posts');
        const data = await res.json();
        setPosts(data);
    };

    useEffect(() => { fetchPosts() }, []);

    const handleCreatePost = async (e) => {
        e.preventDefault();
        await fetch('/api/posts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
            body: JSON.stringify({ content }),
        });
        setContent('');
        fetchPosts();
    };

    const handleLike = async (postId) => {
        await fetch(`/api/posts/like/${postId}`, {
            method: 'PUT',
            headers: { 'Authorization': `Bearer ${token}` }
        });
        fetchPosts();
    };

    const handleComment = async (postId, text) => {
        await fetch(`/api/posts/comment/${postId}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
            body: JSON.stringify({ text })
        });
        fetchPosts();
    };

    return (
        <div>
            <div className="post-form">
                <form onSubmit={handleCreatePost}>
                    <textarea 
                        placeholder="What's on your mind?" 
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    ></textarea>
                    <button type="submit">Post</button>
                </form>
            </div>
            <div>
                {posts.map(post => (
                    <Post key={post._id} post={post} onLike={handleLike} onComment={handleComment} />
                ))}
            </div>
        </div>
    );
};

export default Feed;
