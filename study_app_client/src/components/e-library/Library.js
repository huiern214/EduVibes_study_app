// import React, { Component } from 'react';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import './Library.css';
// import { Container, Row, Col } from 'react-bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import photo1 from './photo1.png';
// import photo2 from './photo2.png';
// import photo3 from './photo3.png';
// import photo4 from './photo4.png';
// import photo5 from './photo5.png';
// import photo6 from './photo6.png';

// class ELibraryPage extends Component {
//   // Your e-book data (replace with your actual data)
//   ebooks = [
//     {
//         id: 1,
//         title: 'Bahasa Melayu Tingkatan 4',
//         description: 'by KEMENTERIAN PENDIDIKAN MALAYSIA',
//         imageUrl: photo1,
//     },
//     {
//         id: 2,
//         title: 'Trial 2022 Biology Pulau Pinang',
//         description: 'by Silvia Lee',
//         imageUrl: photo2,
//     },
//     {
//         id: 3,
//         title: 'Kesalahan Ejaan, Pengimbuhan, Kesalahan Umum Bahasa Melayu',
//         description: 'by Dewan Bahasa dan Pustaka',
//         imageUrl: photo3,
//     },
//     {
//         id: 4,
//         title: 'Physics Form 5',
//         description: 'by KEMENTERIAN PENDIDIKAN MALAYSIA',
//         imageUrl: photo4,
//     },
//     {
//         id: 5,
//         title: 'Focus SPM Karangan (2021)',
//         description: 'by Pelangi ePublishing Sdn. Bhd.',
//         imageUrl: photo5,
//     },
//     {
//         id: 6,
//         title: 'Chemistry Note Form 4 & 5',
//         description: 'by Rossita Radzak',
//         imageUrl: photo6,
//     },
//     // Add more e-book objects as needed
//   ];

//   render() {
//     return (
//       <div>
//         {/* Search bar */}
//         {/* <div className="search-bar"> */}
//           {/* Add your search bar component here */}
//           {/* <input type="text" placeholder="Search..." />
//         </div> */}

//         {/* Upload and Share buttons */}
//         {/* <div className="buttons">
//           <Button variant="primary">Upload</Button>
//           <Button variant="secondary">Share</Button>
//         </div> */}

//         <div className="search-container">
//           <input
//             type="text"
//             // value={searchQuery}
//             // onChange={(e) => setSearchQuery(e.target.value)}
//             className="search-input"
//             placeholder="Search..."
//           />
//           <Button className="search-button" type="submit">
//           <p className="inside">Search</p>
//           </Button>
//           <Button className="search-button" type="submit">
//           <p className="inside">Upload</p>
//           </Button>
//         </div>

//         <Container style={{ width: '60rem' }}>
//             <Row>
//             {this.ebooks.map((ebook) => (
//     <Col key={ebook.id} xs={12} md={4}>
//         <Card style={{ width: '17rem' }}>
//             <Card.Img variant="top" src={ebook.imageUrl} className="ebook-image" />
//             <Card.Body>
//                 <Card.Title>{ebook.title}</Card.Title>
//                 <div className="download-section">
//                     <span className="download-icon">📥</span> {/* Add your download icon here */}
//                     DOWNLOAD
//                 </div>
//                 <Card.Text>
//                     {ebook.description}
//                 </Card.Text>
//                 <Button variant="primary">View Details</Button>
//             </Card.Body>
//         </Card>
//     </Col>
// ))}


//             </Row>
//         </Container>
//       </div>
//     );
//   }
// }

// export default ELibraryPage;
