import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Post = ({ post, onLike, onComment }) => {
    const [commentText, setCommentText] = useState('');
    const { user } = useContext(AuthContext);
    
    const hasLiked = post.likes.includes(user.id);

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        onComment(post._id, commentText);
        setCommentText('');
    };

    return (
        <div className="post">
            <h3>{post.author.username}</h3>
            <p>{post.content}</p>
            <div className="post-actions">
                <button onClick={() => onLike(post._id)} style={{ color: hasLiked ? '#1877f2' : '#65676b' }}>
                    Like ({post.likes.length})
                </button>
                <span>Comments ({post.comments.length})</span>
            </div>
            <div className="comments-section">
                {post.comments.map(comment => (
                    <div key={comment._id} className="comment">
                        <strong>{comment.user.username}:</strong> {comment.text}
                    </div>
                ))}
                <form onSubmit={handleCommentSubmit}>
                    <input 
                        type="text" 
                        placeholder="Write a comment..." 
                        value={commentText}
                        onChange={(e) => setCommentText(e.target.value)}
                    />
                </form>
            </div>
        </div>
    );
};

export default Post;
