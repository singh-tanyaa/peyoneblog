// import { useEffect, useState } from 'react';
// import { fetchBlogs, rateBlog } from '../../utils/api';

// const UserDashboard = () => {
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

//   const handleRate = async (id, rating) => {
//     try {
//       await rateBlog(id, rating);
//       setBlogs(blogs.map(blog => blog.id === id ? { ...blog, rating } : blog));
//     } catch (error) {
//       console.error('Failed to rate blog:', error);
//     }
//   };

//   return (
//     <div>
//       <h1>User Dashboard</h1>
//       <ul>
//         {blogs.map(blog => (
//           <li key={blog.id}>
//             {blog.title}
//             <button onClick={() => handleRate(blog.id, 5)}>Rate 5</button>
//             <button onClick={() => handleRate(blog.id, 4)}>Rate 4</button>
//             <button onClick={() => handleRate(blog.id, 3)}>Rate 3</button>
//             <button onClick={() => handleRate(blog.id, 2)}>Rate 2</button>
//             <button onClick={() => handleRate(blog.id, 1)}>Rate 1</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default UserDashboard;
