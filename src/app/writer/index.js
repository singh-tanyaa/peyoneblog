// import { useEffect, useState } from 'react';
// import { fetchBlogs, createBlog, updateBlog } from '../../utils/api';
// // import BlogForm from '../../components/BlogForm';

// const WriterDashboard = () => {
//   const [blogs, setBlogs] = useState([]);
//   const [editingBlog, setEditingBlog] = useState(null);

//   useEffect(() => {
//     const loadBlogs = async () => {
//       try {
//         const data = await fetchBlogs();
//         setBlogs(data);
//       } catch (error) {
//         console.error('Failed to fetch blogs:', error);
//       }
//     };
//     loadBlogs();
//   }, []);

//   const handleEdit = (blog) => {
//     setEditingBlog(blog);
//   };

//   const handleSuccess = () => {
//     setEditingBlog(null);
//     loadBlogs();
//   };

//   return (
//     <div>
//       <h1>Writer Dashboard</h1>
//       <BlogForm blog={editingBlog} onSuccess={handleSuccess} />
//       <h2>Your Blogs</h2>
//       <ul>
//         {blogs.map(blog => (
//           <li key={blog.id}>
//             {blog.title}
//             <button onClick={() => handleEdit(blog)}>Edit</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default WriterDashboard;
