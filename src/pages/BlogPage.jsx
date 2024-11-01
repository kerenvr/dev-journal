import React, { useEffect, useState } from 'react';
import Accordion from "../components/accordion/Accordion"
import { useAuth0 } from "@auth0/auth0-react";

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { user } = useAuth0();

  console.log(user);

  if (!user) {
      return null; // Optionally render a loading state
  }

  const toggleAccordion = (id) => {
    setPosts(
      posts.map((posts) =>
        posts.id === id
          ? { ...posts, show: !posts.show }
          : { ...posts, show: false }
      )
    )
  }
  
  useEffect(() => {
    const fetchPosts = async () => {
        try {
            const response = await fetch('/api/posts/entries');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setPosts(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    fetchPosts();
}, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    
    <>
       <div className="text-4xl font-bold pb-4">
        My Developer Journey — So Far
      </div>
      {posts.map((posts, i) => (
        <Accordion
          key={i}
          id={posts.id}
          toggleAccordion={toggleAccordion}
          show={posts.show}
          title={posts.title}
          author={posts.author}
        >
          <p>{posts.content}</p>
        </Accordion>
      ))}
    </>
  )
}

export default BlogPage
