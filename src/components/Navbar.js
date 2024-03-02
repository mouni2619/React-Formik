// import React from 'react'
// import { Route, Routes, useNavigate } from 'react-router-dom'
// import BooksDetails from './BooksDetails'
// import AuthorDetails from './AuthorDetails'
// import AddBook from './AddBook'
// import AddAuthor from './AddAuthor'
// import EditBook from './EditBook'
// import EditAuthor from './EditAuthor'

// export default function Navbar() {  
//     const navigate=useNavigate()
//     return (
//         <section>
//             <nav className='bg-primary w-full d-flex'>
// <div>
// <img src='https://img.freepik.com/premium-vector/book-logo-template-design-education-icon-sign-symbol_752732-614.jpg' height={'10px'}  width={"50px"} style={{borderRadius:"30px",display:"flex", }} alt='logo'/>

// </div>
// <div className='flex flex-wrap justify-end'>
//                 <ul className='flex flex-wrap justify-center'>
//                     <li><button onClick={()=>navigate('./')} className='p-2 m-1 text-sm md:text-base font-poppins text-white'>Books</button></li>
//                     <li><button onClick={()=>navigate('./author')} className='p-2 m-1 text-sm md:text-base font-poppins text-white'>Authors</button></li>
//                     <li><button onClick={()=>navigate('./addbook')} className='p-2 m-1 text-sm md:text-base font-poppins text-white'>Add Book</button></li>
//                     <li><button onClick={()=>navigate('./addauthor')} className='p-2 m-1 text-sm md:text-base font-poppins text-white'>Add Author</button></li>
//                 </ul>
//                 </div>
//             </nav>
//             <Routes>
//                 <Route path='/' element={<BooksDetails />}/>
//                 <Route path='/author' element={<AuthorDetails />}/>
//                 <Route path='/addbook' element={<AddBook />}/>
//                 <Route path='/addauthor' element={<AddAuthor />}/>
//                 <Route path='/editbook/:bookid' element={<EditBook />}/>
//                 <Route path='/editauthor/:authorid' element={<EditAuthor />}/>
//             </Routes>
//         </section>
//     )
// }
// import React, { useState } from 'react';
// import { Route, Routes, useNavigate } from 'react-router-dom';
// import BooksDetails from './BooksDetails';
// import AuthorDetails from './AuthorDetails';
// import AddBook from './AddBook';
// import AddAuthor from './AddAuthor';
// import EditBook from './EditBook';
// import EditAuthor from './EditAuthor';

// export default function Navbar() {
//   const navigate = useNavigate();
//   const [isNavOpen, setIsNavOpen] = useState(false);

//   return (
//     <section>
//       <nav className='bg-primary w-full flex items-center justify-between p-4'>
//         <div>
//           <img
//             src='https://img.freepik.com/premium-vector/book-logo-template-design-education-icon-sign-symbol_752732-614.jpg'
//             height={'50px'}
//             width={'50px'}
//             style={{ borderRadius: '30px' }}
//             alt='logo'
//           />
//           <h2>library management</h2>
//         </div>
//         <div className='md:hidden'>
//           <button
//             onClick={() => setIsNavOpen(!isNavOpen)}
//             className='text-white focus:outline-none'
//           >
//             <svg
//               className='w-6 h-6'
//               fill='none'
//               stroke='currentColor'
//               viewBox='0 0 24 24'
//               xmlns='http://www.w3.org/2000/svg'
//             >
//               {isNavOpen ? (
//                 <path
//                   strokeLinecap='round'
//                   strokeLinejoin='round'
//                   strokeWidth={2}
//                   d='M6 18L18 6M6 6l12 12'
//                 />
//               ) : (
//                 <path
//                   strokeLinecap='round'
//                   strokeLinejoin='round'
//                   strokeWidth={2}
//                   d='M4 6h16M4 12h16m-7 6h7'
//                 />
//               )}
//             </svg>
//           </button>
//         </div>
//         <ul
//           className={`${
//             isNavOpen ? 'block' : 'hidden'
//           } md:flex flex-wrap justify-center md:items-center`}
//         >
//           <li>
//             <button
//               onClick={() => navigate('./')}
//               className='p-2 m-1 text-sm md:text-base font-poppins text-white'
//             >
//               Books
//             </button>
//           </li>
//           <li>
//             <button
//               onClick={() => navigate('./author')}
//               className='p-2 m-1 text-sm md:text-base font-poppins text-white'
//             >
//               Authors
//             </button>
//           </li>
//           <li>
//             <button
//               onClick={() => navigate('./addbook')}
//               className='p-2 m-1 text-sm md:text-base font-poppins text-white'
//             >
//               Add Book
//             </button>
//           </li>
//           <li>
//             <button
//               onClick={() => navigate('./addauthor')}
//               className='p-2 m-1 text-sm md:text-base font-poppins text-white'
//             >
//               Add Author
//             </button>
//           </li>
//         </ul>
//       </nav>
//       <Routes>
//         <Route path='/' element={<BooksDetails />} />
//         <Route path='/author' element={<AuthorDetails />} />
//         <Route path='/addbook' element={<AddBook />} />
//         <Route path='/addauthor' element={<AddAuthor />} />
//         <Route path='/editbook/:bookid' element={<EditBook />} />
//         <Route path='/editauthor/:authorid' element={<EditAuthor />} />
//       </Routes>
//     </section>
//   );
// }
// import React, { useState } from 'react';
// import { Route, Routes, useNavigate } from 'react-router-dom';
// import BooksDetails from './BooksDetails';
// import AuthorDetails from './AuthorDetails';
// import AddBook from './AddBook';
// import AddAuthor from './AddAuthor';
// import EditBook from './EditBook';
// import EditAuthor from './EditAuthor';

// export default function Navbar() {
//   const navigate = useNavigate();
//   const [isNavOpen, setIsNavOpen] = useState(false);

//   return (
//     <section>
//       <nav className='bg-primary w-full flex items-center justify-between p-4'>
//         <div>
//           <img
//             src='https://img.freepik.com/premium-vector/book-logo-template-design-education-icon-sign-symbol_752732-614.jpg'
//             height={'50px'}
//             width={'50px'}
//             style={{ borderRadius: '30px' }}
//             alt='logo'
//           />
//         </div>
//         <div className='md:hidden'>
//           <button
//             onClick={() => setIsNavOpen(!isNavOpen)}
//             className='text-white focus:outline-none'
//           >
//             <svg
//               className='w-6 h-6'
//               fill='none'
//               stroke='currentColor'
//               viewBox='0 0 24 24'
//               xmlns='http://www.w3.org/2000/svg'
//             >
//               <path
//                 strokeLinecap='round'
//                 strokeLinejoin='round'
//                 strokeWidth={2}
//                 d={isNavOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
//               />
//             </svg>
//           </button>
//         </div>
//         <ul
//           className={`${
//             isNavOpen ? 'block' : 'hidden'
//           } md:flex flex-wrap justify-center md:items-center`}
//         >
//           <li>
//             <button
//               onClick={() => navigate('./')}
//               className='p-2 m-1 text-sm md:text-base font-poppins text-white'
//             >
//               Books
//             </button>
//           </li>
//           <li>
//             <button
//               onClick={() => navigate('./author')}
//               className='p-2 m-1 text-sm md:text-base font-poppins text-white'
//             >
//               Authors
//             </button>
//           </li>
//           <li>
//             <button
//               onClick={() => navigate('./addbook')}
//               className='p-2 m-1 text-sm md:text-base font-poppins text-white'
//             >
//               Add Book
//             </button>
//           </li>
//           <li>
//             <button
//               onClick={() => navigate('./addauthor')}
//               className='p-2 m-1 text-sm md:text-base font-poppins text-white'
//             >
//               Add Author
//             </button>
//           </li>
//         </ul>
//       </nav>
//       <Routes>
//         <Route path='/' element={<BooksDetails />} />
//         <Route path='/author' element={<AuthorDetails />} />
//         <Route path='/addbook' element={<AddBook />} />
//         <Route path='/addauthor' element={<AddAuthor />} />
//         <Route path='/editbook/:bookid' element={<EditBook />} />
//         <Route path='/editauthor/:authorid' element={<EditAuthor />} />
//       </Routes>
//     </section>
//   );
// }
// import React, { useState } from 'react';
// import { Route, Routes, useNavigate } from 'react-router-dom';
// import BooksDetails from './BooksDetails';
// import AuthorDetails from './AuthorDetails';
// import AddBook from './AddBook';
// import AddAuthor from './AddAuthor';
// import EditBook from './EditBook';
// import EditAuthor from './EditAuthor';

// export default function Navbar() {
//   const navigate = useNavigate();
//   const [isNavOpen, setIsNavOpen] = useState(false);

//   return (
//     <section>
//       <nav className='bg-primary w-full flex items-center justify-between p-4'>
//         <div className='flex items-center'>
//           <img
//             src='https://img.freepik.com/premium-vector/book-logo-template-design-education-icon-sign-symbol_752732-614.jpg'
//             height={'50px'}
//             width={'50px'}
//             style={{ borderRadius: '30px' }}
//             alt='logo'
//           />
//           <h1 className='text-white text-lg ml-2 font-bold'>Your App Name</h1>
//         </div>
//         <div className='md:hidden'>
//           <button
//             onClick={() => setIsNavOpen(!isNavOpen)}
//             className='text-white focus:outline-none'
//           >
//             <svg
//               className='w-6 h-6'
//               fill='none'
//               stroke='currentColor'
//               viewBox='0 0 24 24'
//               xmlns='http://www.w3.org/2000/svg'
//             >
//               <path
//                 strokeLinecap='round'
//                 strokeLinejoin='round'
//                 strokeWidth={2}
//                 d={isNavOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
//               />
//             </svg>
//           </button>
//         </div>
//         <ul
//           className={`${
//             isNavOpen ? 'block' : 'hidden'
//           } md:flex flex-wrap justify-center md:items-center`}
//         >
//           <li>
//             <button
//               onClick={() => navigate('./')}
//               className='p-2 m-1 text-sm md:text-base font-poppins text-white'
//             >
//               Books
//             </button>
//           </li>
//           <li>
//             <button
//               onClick={() => navigate('./author')}
//               className='p-2 m-1 text-sm md:text-base font-poppins text-white'
//             >
//               Authors
//             </button>
//           </li>
//           <li>
//             <button
//               onClick={() => navigate('./addbook')}
//               className='p-2 m-1 text-sm md:text-base font-poppins text-white'
//             >
//               Add Book
//             </button>
//           </li>
//           <li>
//             <button
//               onClick={() => navigate('./addauthor')}
//               className='p-2 m-1 text-sm md:text-base font-poppins text-white'
//             >
//               Add Author
//             </button>
//           </li>
//         </ul>
//       </nav>
//       <Routes>
//         <Route path='/' element={<BooksDetails />} />
//         <Route path='/author' element={<AuthorDetails />} />
//         <Route path='/addbook' element={<AddBook />} />
//         <Route path='/addauthor' element={<AddAuthor />} />
//         <Route path='/editbook/:bookid' element={<EditBook />} />
//         <Route path='/editauthor/:authorid' element={<EditAuthor />} />
//       </Routes>
//     </section>
//   );
// }
// import React, { useState } from 'react';
// import { Route, Routes, useNavigate } from 'react-router-dom';
// import BooksDetails from './BooksDetails';
// import AuthorDetails from './AuthorDetails';
// import AddBook from './AddBook';
// import AddAuthor from './AddAuthor';
// import EditBook from './EditBook';
// import EditAuthor from './EditAuthor';

// export default function Navbar() {
//   const navigate = useNavigate();
//   const [isNavOpen, setIsNavOpen] = useState(false);

//   return (
//     <section>
//       <nav className='bg-primary w-full flex items-center justify-between p-4'>
//         <div className='flex items-center'>
//           <img
//             src='https://img.freepik.com/premium-vector/book-logo-template-design-education-icon-sign-symbol_752732-614.jpg'
//             height={'50px'}
//             width={'50px'}
//             style={{ borderRadius: '30px' }}
//             alt='logo'
//           />
//           <h1 className='text-white text-lg ml-2 font-bold'>Your App Name</h1>
//         </div>
//         <div className='md:hidden'>
//           <button
//             onClick={() => setIsNavOpen(!isNavOpen)}
//             className='text-white focus:outline-none'
//           >
//             {isNavOpen ? (
//               <svg
//                 className='w-6 h-6'
//                 fill='none'
//                 stroke='currentColor'
//                 viewBox='0 0 24 24'
//                 xmlns='http://www.w3.org/2000/svg'
//               >
//                 <path
//                   strokeLinecap='round'
//                   strokeLinejoin='round'
//                   strokeWidth={2}
//                   d='M6 18L18 6M6 6l12 12'
//                 />
//               </svg>
//             ) : (
//               <svg
//                 className='w-6 h-6'
//                 fill='none'
//                 stroke='currentColor'
//                 viewBox='0 0 24 24'
//                 xmlns='http://www.w3.org/2000/svg'
//               >
//                 <path
//                   strokeLinecap='round'
//                   strokeLinejoin='round'
//                   strokeWidth={2}
//                   d='M4 6h16M4 12h16m-7 6h7'
//                 />
//               </svg>
//             )}
//           </button>
//         </div>
//         <ul
//           className={`${
//             isNavOpen ? 'block' : 'hidden'
//           } md:flex flex-wrap justify-center md:items-center`}
//         >
//           {isNavOpen && (
//             <li>
//               <button
//                 onClick={() => setIsNavOpen(false)}
//                 className='p-2 m-1 text-sm md:text-base font-poppins text-white'
//               >
//                 <svg
//                   className='w-6 h-6'
//                   fill='none'
//                   stroke='currentColor'
//                   viewBox='0 0 24 24'
//                   xmlns='http://www.w3.org/2000/svg'
//                 >
//                   <path
//                     strokeLinecap='round'
//                     strokeLinejoin='round'
//                     strokeWidth={2}
//                     d='M6 18L18 6M6 6l12 12'
//                   />
//                 </svg>
//               </button>
//             </li>
//           )}
//           <li>
//             <button
//               onClick={() => navigate('./')}
//               className='p-2 m-1 text-sm md:text-base font-poppins text-white'
//             >
//               Books
//             </button>
//           </li>
//           <li>
//             <button
//               onClick={() => navigate('./author')}
//               className='p-2 m-1 text-sm md:text-base font-poppins text-white'
//             >
//               Authors
//             </button>
//           </li>
//           <li>
//             <button
//               onClick={() => navigate('./addbook')}
//               className='p-2 m-1 text-sm md:text-base font-poppins text-white'
//             >
//               Add Book
//             </button>
//           </li>
//           <li>
//             <button
//               onClick={() => navigate('./addauthor')}
//               className='p-2 m-1 text-sm md:text-base font-poppins text-white'
//             >
//               Add Author
//             </button>
//           </li>
//         </ul>
//       </nav>
//       <Routes>
//         <Route path='/' element={<BooksDetails />} />
//         <Route path='/author' element={<AuthorDetails />} />
//         <Route path='/addbook' element={<AddBook />} />
//         <Route path='/addauthor' element={<AddAuthor />} />
//         <Route path='/editbook/:bookid' element={<EditBook />} />
//         <Route path='/editauthor/:authorid' element={<EditAuthor />} />
//       </Routes>
//     </section>
//   );
// }
// import React, { useState } from 'react';
// import { Route, Routes, useNavigate } from 'react-router-dom';
// import BooksDetails from './BooksDetails';
// import AuthorDetails from './AuthorDetails';
// import AddBook from './AddBook';
// import AddAuthor from './AddAuthor';
// import EditBook from './EditBook';
// import EditAuthor from './EditAuthor';

// export default function Navbar() {
//   const navigate = useNavigate();
//   const [isNavOpen, setIsNavOpen] = useState(false);

//   return (
//     <section>
//       <nav className='bg-primary w-full flex items-center justify-between p-4'>
//         <div className='flex items-center'>
//           <img
//             src='https://img.freepik.com/premium-vector/book-logo-template-design-education-icon-sign-symbol_752732-614.jpg'
//             height={'50px'}
//             width={'50px'}
//             style={{ borderRadius: '30px' }}
//             alt='logo'
//           />
//           <h1 className='text-white text-lg ml-2 font-bold'>Your App Name</h1>
//         </div>
//         <div className='md:hidden'>
//           <button
//             onClick={() => setIsNavOpen(!isNavOpen)}
//             className='text-white focus:outline-none'
//           >
//             {isNavOpen ? (
//               <svg
//                 className='w-6 h-6'
//                 fill='none'
//                 stroke='currentColor'
//                 viewBox='0 0 24 24'
//                 xmlns='http://www.w3.org/2000/svg'
//               >
//                 <path
//                   strokeLinecap='round'
//                   strokeLinejoin='round'
//                   strokeWidth={2}
//                   d='M6 18L18 6M6 6l12 12'
//                 />
//               </svg>
//             ) : (
//               <svg
//                 className='w-6 h-6'
//                 fill='none'
//                 stroke='currentColor'
//                 viewBox='0 0 24 24'
//                 xmlns='http://www.w3.org/2000/svg'
//               >
//                 <path
//                   strokeLinecap='round'
//                   strokeLinejoin='round'
//                   strokeWidth={2}
//                   d='M4 6h16M4 12h16m-7 6h7'
//                 />
//               </svg>
//             )}
//           </button>
//         </div>
//         <ul
//           className={`${
//             isNavOpen ? 'block' : 'hidden'
//           } md:flex flex-wrap justify-center md:items-center`}
//         >
//           <li>
//             <button
//               onClick={() => setIsNavOpen(false)}
//               className='p-2 m-1 text-sm md:text-base font-poppins text-white'
//             >
//               Books
//             </button>
//           </li>
//           <li>
//             <button
//               onClick={() => setIsNavOpen(false)}
//               className='p-2 m-1 text-sm md:text-base font-poppins text-white'
//             >
//               Authors
//             </button>
//           </li>
//           <li>
//             <button
//               onClick={() => setIsNavOpen(false)}
//               className='p-2 m-1 text-sm md:text-base font-poppins text-white'
//             >
//               Add Book
//             </button>
//           </li>
//           <li>
//             <button
//               onClick={() => setIsNavOpen(false)}
//               className='p-2 m-1 text-sm md:text-base font-poppins text-white'
//             >
//               Add Author
//             </button>
//           </li>
//         </ul>
//       </nav>
//       <Routes>
//         <Route path='/' element={<BooksDetails />} />
//         <Route path='/author' element={<AuthorDetails />} />
//         <Route path='/addbook' element={<AddBook />} />
//         <Route path='/addauthor' element={<AddAuthor />} />
//         <Route path='/editbook/:bookid' element={<EditBook />} />
//         <Route path='/editauthor/:authorid' element={<EditAuthor />} />
//       </Routes>
//     </section>
//   );
// }
// import React, { useState } from 'react';
// import { Route, Routes, useNavigate } from 'react-router-dom';
// import BooksDetails from './BooksDetails';
// import AuthorDetails from './AuthorDetails';
// import AddBook from './AddBook';
// import AddAuthor from './AddAuthor';
// import EditBook from './EditBook';
// import EditAuthor from './EditAuthor';

// export default function Navbar() {
//   const navigate = useNavigate();
//   const [isNavOpen, setIsNavOpen] = useState(false);

//   const handleNavClick = () => {
//     setIsNavOpen(!isNavOpen);
//   };

//   return (
//     <section>
//       <nav className='bg-primary w-full flex items-center justify-between p-4'>
//         <div className='flex items-center'>
//           <img
//             src='https://img.freepik.com/premium-vector/book-logo-template-design-education-icon-sign-symbol_752732-614.jpg'
//             height={'50px'}
//             width={'50px'}
//             style={{ borderRadius: '30px' }}
//             alt='logo'
//           />
//           <h1 className='text-white text-lg ml-2 font-bold'>Your App Name</h1>
//         </div>
//         <div className='md:hidden'>
//           <button
//             onClick={handleNavClick}
//             className='text-white focus:outline-none'
//           >
//             <svg
//               className='w-6 h-6'
//               fill='none'
//               stroke='currentColor'
//               viewBox='0 0 24 24'
//               xmlns='http://www.w3.org/2000/svg'
//             >
//               <path
//                 strokeLinecap='round'
//                 strokeLinejoin='round'
//                 strokeWidth={2}
//                 d='M4 6h16M4 12h16m-7 6h7'
//               />
//             </svg>
//           </button>
//         </div>
//         <ul
//           className={`${
//             isNavOpen ? 'block' : 'hidden'
//           } md:flex flex-wrap justify-center md:items-center`}
//         >
//           <li>
//             <button
//               onClick={() => setIsNavOpen(false)}
//               className='p-2 m-1 text-sm md:text-base font-poppins text-white'
//             >
//               Books
//             </button>
//           </li>
//           <li>
//             <button
//               onClick={() => setIsNavOpen(false)}
//               className='p-2 m-1 text-sm md:text-base font-poppins text-white'
//             >
//               Authors
//             </button>
//           </li>
//           <li>
//             <button
//               onClick={() => setIsNavOpen(false)}
//               className='p-2 m-1 text-sm md:text-base font-poppins text-white'
//             >
//               Add Book
//             </button>
//           </li>
//           <li>
//             <button
//               onClick={() => setIsNavOpen(false)}
//               className='p-2 m-1 text-sm md:text-base font-poppins text-white'
//             >
//               Add Author
//             </button>
//           </li>
//         </ul>
//       </nav>
//       <Routes>
//         <Route path='/' element={<BooksDetails />} />
//         <Route path='/author' element={<AuthorDetails />} />
//         <Route path='/addbook' element={<AddBook />} />
//         <Route path='/addauthor' element={<AddAuthor />} />
//         <Route path='/editbook/:bookid' element={<EditBook />} />
//         <Route path='/editauthor/:authorid' element={<EditAuthor />} />
//       </Routes>
//     </section>
//   );
// }
// import React, { useState } from 'react';
// import { Route, Routes, useNavigate } from 'react-router-dom';
// import BooksDetails from './BooksDetails';
// import AuthorDetails from './AuthorDetails';
// import AddBook from './AddBook';
// import AddAuthor from './AddAuthor';
// import EditBook from './EditBook';
// import EditAuthor from './EditAuthor';

// export default function Navbar() {
//   const navigate = useNavigate();
//   const [isNavOpen, setIsNavOpen] = useState(false);

//   const handleNavClick = (route) => {
//     setIsNavOpen(false);
//     navigate(route);
//   };

//   return (
//     <section>
//       <nav className='bg-primary w-full flex items-center justify-between p-4'>
//         <div className='flex items-center'>
//           <img
//             src='https://img.freepik.com/premium-vector/book-logo-template-design-education-icon-sign-symbol_752732-614.jpg'
//             height={'50px'}
//             width={'50px'}
//             style={{ borderRadius: '30px' }}
//             alt='logo'
//           />
//           <h1 className='text-white text-lg ml-2 font-bold'>Your App Name</h1>
//         </div>
//         <div className='md:hidden'>
//           <button
//             onClick={() => setIsNavOpen(!isNavOpen)}
//             className='text-white focus:outline-none'
//           >
//             <svg
//               className='w-6 h-6'
//               fill='none'
//               stroke='currentColor'
//               viewBox='0 0 24 24'
//               xmlns='http://www.w3.org/2000/svg'
//             >
//               {isNavOpen ? (
//                 <path
//                   strokeLinecap='round'
//                   strokeLinejoin='round'
//                   strokeWidth={2}
//                   d='M6 18L18 6M6 6l12 12'
//                 />
//               ) : (
//                 <path
//                   strokeLinecap='round'
//                   strokeLinejoin='round'
//                   strokeWidth={2}
//                   d='M4 6h16M4 12h16m-7 6h7'
//                 />
//               )}
//             </svg>
//           </button>
//         </div>
//         <ul
//           className={`${
//             isNavOpen ? 'block' : 'hidden'
//           } md:flex flex-wrap justify-center md:items-center absolute top-0 left-0 w-full bg-primary md:bg-transparent md:relative md:flex-row md:justify-end`}
//         >
//           <li>
//             <button
//               onClick={() => handleNavClick('/')}
//               className='p-2 m-1 text-sm md:text-base font-poppins text-white'
//             >
//               Books
//             </button>
//           </li>
//           <li>
//             <button
//               onClick={() => handleNavClick('/author')}
//               className='p-2 m-1 text-sm md:text-base font-poppins text-white'
//             >
//               Authors
//             </button>
//           </li>
//           <li>
//             <button
//               onClick={() => handleNavClick('/addbook')}
//               className='p-2 m-1 text-sm md:text-base font-poppins text-white'
//             >
//               Add Book
//             </button>
//           </li>
//           <li>
//             <button
//               onClick={() => handleNavClick('/addauthor')}
//               className='p-2 m-1 text-sm md:text-base font-poppins text-white'
//             >
//               Add Author
//             </button>
//           </li>
//         </ul>
//       </nav>
//       <Routes>
//         <Route path='/' element={<BooksDetails />} />
//         <Route path='/author' element={<AuthorDetails />} />
//         <Route path='/addbook' element={<AddBook />} />
//         <Route path='/addauthor' element={<AddAuthor />} />
//         <Route path='/editbook/:bookid' element={<EditBook />} />
//         <Route path='/editauthor/:authorid' element={<EditAuthor />} />
//       </Routes>
//     </section>
//   );
// }
// import React, { useState } from 'react';
// import { Route, Routes, useNavigate } from 'react-router-dom';
// import BooksDetails from './BooksDetails';
// import AuthorDetails from './AuthorDetails';
// import AddBook from './AddBook';
// import AddAuthor from './AddAuthor';
// import EditBook from './EditBook';
// import EditAuthor from './EditAuthor';

// export default function Navbar() {
//   const navigate = useNavigate();
//   const [isNavOpen, setIsNavOpen] = useState(false);

//   const handleNavClick = (route) => {
//     setIsNavOpen(false);
//     navigate(route);
//   };

//   return (
//     <section>
//       <nav className='bg-primary w-full flex items-center justify-between p-4'>
//         <div className='flex items-center'>
//           <img
//             src='https://img.freepik.com/premium-vector/book-logo-template-design-education-icon-sign-symbol_752732-614.jpg'
//             height={'50px'}
//             width={'50px'}
//             style={{ borderRadius: '30px' }}
//             alt='logo'
//           />
//           <h1 className='text-white text-lg ml-2 font-bold'>Your App Name</h1>
//         </div>
//         <div className='md:hidden'>
//           <button
//             onClick={() => setIsNavOpen(!isNavOpen)}
//             className='text-white focus:outline-none'
//           >
//             {isNavOpen ? (
//               <svg
//                 className='w-6 h-6'
//                 fill='none'
//                 stroke='currentColor'
//                 viewBox='0 0 24 24'
//                 xmlns='http://www.w3.org/2000/svg'
//               >
//                 <path
//                   strokeLinecap='round'
//                   strokeLinejoin='round'
//                   strokeWidth={2}
//                   d='M6 18L18 6M6 6l12 12'
//                 />
//               </svg>
//             ) : (
//               <svg
//                 className='w-6 h-6'
//                 fill='none'
//                 stroke='currentColor'
//                 viewBox='0 0 24 24'
//                 xmlns='http://www.w3.org/2000/svg'
//               >
//                 <path
//                   strokeLinecap='round'
//                   strokeLinejoin='round'
//                   strokeWidth={2}
//                   d='M4 6h16M4 12h16m-7 6h7'
//                 />
//               </svg>
//             )}
//           </button>
//         </div>
//         <ul
//           className={`${
//             isNavOpen ? 'block' : 'hidden'
//           } md:flex flex-wrap justify-center md:items-center`}
//         >
//           <li>
//             <button
//               onClick={() => handleNavClick('/')}
//               className='p-2 m-1 text-sm md:text-base font-poppins text-white'
//             >
//               Books
//             </button>
//           </li>
//           <li>
//             <button
//               onClick={() => handleNavClick('/author')}
//               className='p-2 m-1 text-sm md:text-base font-poppins text-white'
//             >
//               Authors
//             </button>
//           </li>
//           <li>
//             <button
//               onClick={() => handleNavClick('/addbook')}
//               className='p-2 m-1 text-sm md:text-base font-poppins text-white'
//             >
//               Add Book
//             </button>
//           </li>
//           <li>
//             <button
//               onClick={() => handleNavClick('/addauthor')}
//               className='p-2 m-1 text-sm md:text-base font-poppins text-white'
//             >
//               Add Author
//             </button>
//           </li>
//         </ul>
//       </nav>
//       <Routes>
//         <Route path='/' element={<BooksDetails />} />
//         <Route path='/author' element={<AuthorDetails />} />
//         <Route path='/addbook' element={<AddBook />} />
//         <Route path='/addauthor' element={<AddAuthor />} />
//         <Route path='/editbook/:bookid' element={<EditBook />} />
//         <Route path='/editauthor/:authorid' element={<EditAuthor />} />
//       </Routes>
//     </section>
//   );
// }

// import React, { useState } from 'react';
// import { Route, Routes, useNavigate } from 'react-router-dom';
// import BooksDetails from './BooksDetails';
// import AuthorDetails from './AuthorDetails';
// import AddBook from './AddBook';
// import AddAuthor from './AddAuthor';
// import EditBook from './EditBook';
// import EditAuthor from './EditAuthor';

// export default function Navbar() {
//   const navigate = useNavigate();
//   const [isNavOpen, setIsNavOpen] = useState(false);

//   const handleNavClick = (route) => {
//     setIsNavOpen(false);
//     navigate(route);
//   };

//   return (
//     <section>
//       <nav className='bg-primary w-full flex items-center justify-between p-2 md:p-4'>
//         <div className='flex items-center'>
//           <img
//             src='https://img.freepik.com/premium-vector/book-logo-template-design-education-icon-sign-symbol_752732-614.jpg'
//             height={'40px'}
//             width={'40px'}
//             style={{ borderRadius: '30px' }}
//             alt='logo'
//           />
//           <h1 className='text-white text-sm md:text-lg ml-2 font-bold'>Your App Name</h1>
//         </div>
//         <div className='md:hidden'>
//           <button
//             onClick={() => setIsNavOpen(!isNavOpen)}
//             className='text-white focus:outline-none'
//           >
//             {isNavOpen ? (
//               <svg
//                 className='w-6 h-6'
//                 fill='none'
//                 stroke='currentColor'
//                 viewBox='0 0 24 24'
//                 xmlns='http://www.w3.org/2000/svg'
//               >
//                 <path
//                   strokeLinecap='round'
//                   strokeLinejoin='round'
//                   strokeWidth={2}
//                   d='M6 18L18 6M6 6l12 12'
//                 />
//               </svg>
//             ) : (
//               <svg
//                 className='w-6 h-6'
//                 fill='none'
//                 stroke='currentColor'
//                 viewBox='0 0 24 24'
//                 xmlns='http://www.w3.org/2000/svg'
//               >
//                 <path
//                   strokeLinecap='round'
//                   strokeLinejoin='round'
//                   strokeWidth={2}
//                   d='M4 6h16M4 12h16m-7 6h7'
//                 />
//               </svg>
//             )}
//           </button>
//         </div>
//         <ul
//           className={`${
//             isNavOpen ? 'block' : 'hidden'
//           } md:flex flex-wrap justify-center md:items-center`}
//         >
//           <li>
//             <button
//               onClick={() => handleNavClick('/')}
//               className='p-2 m-1 text-xs md:text-sm font-poppins text-white'
//             >
//               Books
//             </button>
//           </li>
//           <li>
//             <button
//               onClick={() => handleNavClick('/author')}
//               className='p-2 m-1 text-xs md:text-sm font-poppins text-white'
//             >
//               Authors
//             </button>
//           </li>
//           <li>
//             <button
//               onClick={() => handleNavClick('/addbook')}
//               className='p-2 m-1 text-xs md:text-sm font-poppins text-white'
//             >
//               Add Book
//             </button>
//           </li>
//           <li>
//             <button
//               onClick={() => handleNavClick('/addauthor')}
//               className='p-2 m-1 text-xs md:text-sm font-poppins text-white'
//             >
//               Add Author
//             </button>
//           </li>
//         </ul>
//       </nav>
//       <Routes>
//         <Route path='/' element={<BooksDetails />} />
//         <Route path='/author' element={<AuthorDetails />} />
//         <Route path='/addbook' element={<AddBook />} />
//         <Route path='/addauthor' element={<AddAuthor />} />
//         <Route path='/editbook/:bookid' element={<EditBook />} />
//         <Route path='/editauthor/:authorid' element={<EditAuthor />} />
//       </Routes>
//     </section>
//   );
// }
import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import BooksDetails from './BooksDetails';
import AuthorDetails from './AuthorDetails';
import AddBook from './AddBook';
import AddAuthor from './AddAuthor';
import EditBook from './EditBook';
import EditAuthor from './EditAuthor';

export default function Navbar() {
  const navigate = useNavigate();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavClick = (route) => {
    setIsNavOpen(false);
    navigate(route);
  };

  return (
    <section>
      <nav className='bg-primary w-full flex items-center justify-between p-2 md:p-4'>
        <div className='flex items-center'>
          <img
            src='https://img.freepik.com/premium-vector/book-logo-template-design-education-icon-sign-symbol_752732-614.jpg'
            height={'40px'}
            width={'40px'}
            style={{ borderRadius: '30px' }}
            alt='logo'
          />
          <h1 className='text-white text-sm md:text-lg ml-2 font-bold'>Library Management System</h1>
        </div>
        <div className='md:hidden'>
          <button
            onClick={() => setIsNavOpen(!isNavOpen)}
            className='text-white focus:outline-none'
          >
            {isNavOpen ? (
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            ) : (
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16m-7 6h7'
                />
              </svg>
            )}
          </button>
        </div>
        <ul
          className={`${
            isNavOpen ? 'block' : 'hidden'
          } md:flex flex-wrap justify-center md:items-center`}
        >
          <li className='w-full md:w-auto'>
            <button
              onClick={() => handleNavClick('/')}
              className='p-2 m-1 text-xs md:text-sm font-poppins text-white w-full md:w-auto'
              style={{ height: '100%' }}
            >
              Books
            </button>
          </li>
          <li className='w-full md:w-auto'>
            <button
              onClick={() => handleNavClick('/author')}
              className='p-2 m-1 text-xs md:text-sm font-poppins text-white w-full md:w-auto'
              style={{ height: '100%' }}
            >
              Authors
            </button>
          </li>
          <li className='w-full md:w-auto'>
            <button
              onClick={() => handleNavClick('/addbook')}
              className='p-2 m-1 text-xs md:text-sm font-poppins text-white w-full md:w-auto'
              style={{ height: '100%' }}
            >
              Add Book
            </button>
          </li>
          <li className='w-full md:w-auto'>
            <button
              onClick={() => handleNavClick('/addauthor')}
              className='p-2 m-1 text-xs md:text-sm font-poppins text-white w-full md:w-auto'
              style={{ height: '100%' }}
            >
              Add Author
            </button>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<BooksDetails />} />
        <Route path='/author' element={<AuthorDetails />} />
        <Route path='/addbook' element={<AddBook />} />
        <Route path='/addauthor' element={<AddAuthor />} />
        <Route path='/editbook/:bookid' element={<EditBook />} />
        <Route path='/editauthor/:authorid' element={<EditAuthor />} />
      </Routes>
    </section>
  );
}
