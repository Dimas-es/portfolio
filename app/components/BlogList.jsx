'use client';
import React from "react";
import { useRouter } from "next/navigation";

const BlogList = () => {
    const router = useRouter();
    const blogs = [
        { id: 1, title: "Blog Post 1", excerpt: "This is a short description of blog post 1." },
        { id: 2, title: "Blog Post 2", excerpt: "This is a short description of blog post 2." },
        { id: 3, title: "Blog Post 3", excerpt: "This is a short description of blog post 3." },
        { id: 4, title: "Blog Post 4", excerpt: "This is a short description of blog post 4." },
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-8">Blog</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogs.map((blog) => (
                    <div key={blog.id} className="border p-4 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold mb-2">{blog.title}</h2>
                        <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                        <button
                            onClick={() => router.push(`/blog/${blog.id}`)}
                            className="text-blue-500 hover:underline"
                        >
                            Read More
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogList;
