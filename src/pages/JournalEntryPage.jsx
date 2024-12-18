"use client";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useCallback, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { slugifySentences } from "../utils";

export default function JournalEntry() {
    const [publishing, setPublishing] = useState(false); // To update button text
    const [content, setContent] = useState(""); // Journal entry
    const [title, setTitle] = useState(""); // Title
    const [error, setError] = useState(null); // State for error handling
    const [successMessage, setSuccessMessage] = useState(""); // State for success message

    const { user } = useAuth0(); // To get user name and user id

    const onChangeContent = useCallback((value) => {
        setContent(value);
    }, []);

    if (!user) {
        return null; // Optionally render a loading state
    }

    const handleCreatePost = async (e) => {
        e.preventDefault();
        setPublishing(true); // Set publishing state

        const author = user.nickname;
        const authorId = user.sub; // Auth0 user ID
        const slug = slugifySentences(title); // Create slug from title

        const postData = {
            title,
            content,
            author,
            author_id: authorId,
            slug,
        };

        try {
            const response = await fetch('https://dev-journal-1.onrender.com/posts/create', { // Post to DB
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(postData), // JSON format
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            // If the post is successfully created, show success message
            setSuccessMessage('Post successfully created!');
            
            // Clear the form (optional)
            setTitle('');
            setContent('');

        } catch (error) {
            console.error('Error creating post:', error);
            setError('Failed to create post. Please try again.');
        } finally {
            setPublishing(false); // Reset publishing state
        }
    };

    return (
        <div className='min-h-[100vh]'>
            <main className='md:px-8 py-8 px-4 w-full'>
                <form className='flex flex-col w-full' onSubmit={handleCreatePost}>
                    <label htmlFor='title' className='text-sm text-blue-600'>
                        Title
                    </label>
                    <input
                        type='text'
                        name='title'
                        id='title'
                        value={title}
                        required
                        onChange={(e) => setTitle(e.target.value)}
                        className='px-4 py-3 border-2 rounded-md text-lg mb-4'
                    />

                    <label htmlFor='content' className='text-sm text-blue-600'>
                        Content
                    </label>
                    <SimpleMDE value={content} onChange={onChangeContent} id='content' />

                    {error && <p className='text-red-500'>{error}</p>} {/* Display error message */}
                    {successMessage && <p className='text-green-500'>{successMessage}</p>} {/* Display success message */}

                    <button
                        type='submit'
                        disabled={publishing}
                        className='bg-blue-600 mt-2 text-white py-3 rounded-md'
                    >
                        {publishing ? "Publishing....please wait" : "Publish Post"}
                    </button>
                </form>
            </main>
        </div>
    );
}
