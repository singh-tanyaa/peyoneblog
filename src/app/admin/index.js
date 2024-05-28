// import { useEffect, useState } from 'react';
// import { fetchCategories, fetchWriters, fetchReviewers, verifyWriter, verifyReviewer } from '../../utils/api';

// const AdminDashboard = () => {
//   const [categories, setCategories] = useState([]);
//   const [writers, setWriters] = useState([]);
//   const [reviewers, setReviewers] = useState([]);

//   useEffect(() => {
//     const loadData = async () => {
//       try {
//         const categoriesData = await fetchCategories();
//         const writersData = await fetchWriters();
//         const reviewersData = await fetchReviewers();
//         setCategories(categoriesData);
//         setWriters(writersData);
//         setReviewers(reviewersData);
//       } catch (error) {
//         console.error('Failed to fetch data:', error);
//       }
//     };
//     loadData();
//   }, []);

//   const handleVerifyWriter = async (id) => {
//     try {
//       await verifyWriter(id);
//       setWriters(writers.map(writer => writer.id === id ? { ...writer, verified: true } : writer));
//     } catch (error) {
//       console.error('Failed to verify writer:', error);
//     }
//   };

//   const handleVerifyReviewer = async (id) => {
//     try {
//       await verifyReviewer(id);
//       setReviewers(reviewers.map(reviewer => reviewer.id === id ? { ...reviewer, verified: true } : reviewer));
//     } catch (error) {
//       console.error('Failed to verify reviewer:', error);
//     }
//   };

//   return (
//     <div>
//       <h1>Admin Dashboard</h1>
//       <h2>Categories</h2>
//       <ul>
//         {categories.map(category => <li key={category.id}>{category.name}</li>)}
//       </ul>
//       <h2>Writers</h2>
//       <ul>
//         {writers.map(writer => (
//           <li key={writer.id}>
//             {writer.name}
//             {writer.verified ? ' (Verified)' : <button onClick={() => handleVerifyWriter(writer.id)}>Verify</button>}
//           </li>
//         ))}
//       </ul>
//       <h2>Reviewers</h2>
//       <ul>
//         {reviewers.map(reviewer => (
//           <li key={reviewer.id}>
//             {reviewer.name}
//             {reviewer.verified ? ' (Verified)' : <button onClick={() => handleVerifyReviewer(reviewer.id)}>Verify</button>}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default AdminDashboard;
