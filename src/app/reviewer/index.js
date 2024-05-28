// import { useEffect, useState } from 'react';
// import { fetchBlogs, verifyBlog } from '../../utils/api';

// const ReviewerDashboard = () => {
//   const [blogs, setBlogs] = useState([]);

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

//   const handleVerify = async (id) => {
//     try {
//       await verifyBlog(id);
//       setBlogs(blogs.map(blog => blog.id === id ? { ...blog, verified: true } : blog));
//     } catch (error) {
//       console.error('Failed to verify blog:', error);
//     }
//   };

//   return (
//     <div>
//       <h1>Reviewer Dashboard</h1>
//       <ul>
//         {blogs.map(blog => (
//           <li key={blog.id}>
//             {blog.title}
//             {blog.verified ? ' (Verified)' : <button onClick={() => handleVerify(blog.id)}>Verify</button>}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ReviewerDashboard;
