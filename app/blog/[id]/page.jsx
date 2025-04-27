'use client';
import React from "react";
import BlogArticle from "../../components/BlogArticle";

const BlogPage = ({ params }) => {
    const { id } = params;

    // Mock data for demonstration purposes
    const blogData = {
        1: { title: "Blog Post 1", content: "This is the full content of blog post 1." },
        2: { title: "Blog Post 2", content: "This is the full content of blog post 2." },
        3: { title: "Blog Post 3", content: "This is the full content of blog post 3." },
        4: { title: "Blog Post 4", content: "This is the full content of blog post 4." },
    };

    const blog = blogData[id];

    if (!blog) {
        return <div className="container mx-auto px-4 py-8">Blog post not found.</div>;
    }

    return <BlogArticle title={blog.title} content={blog.content} />;
};

export default BlogPage;
