import React from "react";

const BlogArticle = ({ title, content }) => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-4">{title}</h1>
            <div className="prose mb-8">{content}</div>
            <div className="flex justify-between items-center mb-8">
                <button className="bg-gray-200 px-4 py-2 rounded">Previous Article</button>
                <button className="bg-gray-200 px-4 py-2 rounded">Next Article</button>
            </div>
            <h2 className="text-2xl font-semibold mb-4">Recommended Articles</h2>
            <ul className="list-disc pl-5 mb-8">
                <li><a href="/blog/2" className="text-blue-500 hover:underline">Recommended Blog 1</a></li>
                <li><a href="/blog/3" className="text-blue-500 hover:underline">Recommended Blog 2</a></li>
            </ul>
            <h2 className="text-2xl font-semibold mb-4">Comments</h2>
            <div className="mb-4">
                <p className="font-semibold">User 1</p>
                <p className="text-gray-600">This is a comment.</p>
            </div>
            <form className="border-t pt-4">
                <textarea
                    className="w-full border rounded p-2 mb-4"
                    rows="4"
                    placeholder="Write a comment..."
                ></textarea>
                <button className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
            </form>
        </div>
    );
};

export default BlogArticle;
