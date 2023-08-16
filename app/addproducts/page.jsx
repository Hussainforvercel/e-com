// "use client"
// import React, { useState } from 'react'

// function AddProducts() {

//    const[title, setTitle] = useState("");
//    const [description , setDescription ]=useState("") ;
//    const  [price,setPrice]=useState("");
//    const [image, setImage]= useState(null);

// const [imageError,setImageError]= useState("");

//    const [successMsg, setSuccessMsg] = useState("");
//    const [errorMsg, setErrorMsg]= useState(""); 

//    const type = ["image/jpg","image/png","image/jpeg","image/PNG"];

//    const handleProductImg =(e)=>{
//     let selectedFile = e.target.files[0];
//     if(!selectedFile){
//         if(selectedFile&&type.includes)
    
//    }

//    else{
//     console.log("please select your file")
//    }

//   return (
//     <div>
//     <form action="">
//     <div className='m-20  '>
//        <h1 className='font-semibold text-2xl px-3'>Add Products</h1>
//        {successMsg&&<>
//     <div>{successMsg}</div></>}

//        <hr className='h-0.5 m-4 bg-gray-400' />
//        <div className='m-3 my-6 '>
//         <h1>Product title</h1>
//        <input className='w-full py-3 border-2 rounded-lg' type="text" onChange={(e)=>setTitle(e.target.value)} value={title} />
//        </div>

//        <div className='m-3'>
//        <h1>Product Description</h1>
//        <input className='w-full py-3 border-2 rounded-lg' type="text" onChange={(e)=>setDescription(e.target.value)} value={description} />
//        </div>

//        <div className='m-3'>
//        <h1>Product Price</h1>
//        <input className='w-full py-3 border-2 rounded-lg' type="Number" onChange={(e)=>setPrice(e.target.value)} value={price} />
//        </div>

//        <div className='m-3'>
//        <h1>Upload Product Image</h1>
//        <input className='w-full py-3 rounded-lg border-2 px-2 '  type="File" onChange={handleProductImg}/>
//        {imageError&&<>
//        <div>{imageError}</div></>}
//        </div>

//   <div className='float-right mx-5'> 
//   <button className='bg-green-200 px-5 py-2 rounded-lg text-lg font-semibold' >Submit</button>
//   </div>
//   </div>
//   </form>
//    {UploadError&&<>
//     <div>{UploadError}</div></>}
// </div>

    
//   )
// }

// export default AddProducts




"use client"

import { useState, useEffect } from "react";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
} from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import { storage, db } from "../../firebase"; // Assuming you have a Firestore instance as "db"
import { v4 } from "uuid";

function App() {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const [imageError, setImageError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [uploadError, setUploadError] = useState('');

  const imagesListRef = ref(storage, "images/");

  const uploadFile = () => {
    if (imageUpload == null) return;

    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
        // Once the image URL is obtained, store the product details in Firestore
        addDoc(collection(db, "products"), {
          title: title,
          description: description,
          price: price,
          imageUrl: url,
        })
        .then(() => {
          setSuccessMsg("Product uploaded successfully");
          // Reset the form fields after successful upload
          setTitle('');
          setDescription('');
          setPrice('');
        })
        .catch((error) => {
          setUploadError("Error uploading product: " + error.message);
        });
      });
    });
  };

  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  return (
    <div className="App m-10">
     
      <div className="py-2">
        <div  className="text-3xl mb-16 font-semibold"><h1>Product Title</h1></div>
        <h1 className="text-2xl font-semibold">Product title</h1>
        <input
          type="text"
          placeholder="Product Title"
          className="w-full py-4 my-4 px-5"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <h1 className="text-2xl font-semibold">Product Description</h1>
        <input
          type="text"
          placeholder="Product Description"
          className="w-full py-4 my-4 px-5"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        <h1 className="text-2xl font-semibold">Product Price</h1>
        <input
          type="number"
          placeholder="Product Price"
          className="w-full py-4 my-4 px-5"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <br />
        <h1 className="text-2xl font-semibold">Product Image</h1>
    <input
        className="w-full py-3 border-2 bg-white  px-5"
        type="file"
        onChange={(event) => {
          setImageUpload(event.target.files[0]);
        }}
      />

        <button
          onClick={uploadFile}
          className="px-4 py-4 mt-5 bg-green-400 mx-3 font-semibold text-white rounded-lg"
        >
          Upload Product
        </button>
        {imageUrls.map((url) => {
          return <img src={url} alt="Product" key={url} />;
        })}
      </div>
      <div>
        {successMsg && <p className="text-green-500">{successMsg}</p>}
        {uploadError && <p className="text-red-500">{uploadError}</p>}
      </div>
    </div>
  );
}

export default App;

























// finalized




// "use client"
// import { useState, useEffect } from "react";
// import {
//   ref,
//   uploadBytes,
//   getDownloadURL,
//   listAll,
//   list,
// } from "firebase/storage";
// import { storage } from "../../firebase";
// import { v4 } from "uuid";

// function App() {
//   const [imageUpload, setImageUpload] = useState(null);
//   const [imageUrls, setImageUrls] = useState([]);
// const [title, setTitle]=useState('');
// const [description, setDescription]=useState('');
// const [price, setPrice]=useState('');


// const [imageError, setImageError]=useState('');
  
// const [successMsg, setSuccessMsg]=useState('');
// const [uploadError, setUploadError]=useState('');

//   const imagesListRef = ref(storage, "images/");
//   const uploadFile = () => {
//     if (imageUpload == null) return;
//     const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
//     uploadBytes(imageRef, imageUpload).then((snapshot) => {
//       getDownloadURL(snapshot.ref).then((url) => {
//         setImageUrls((prev) => [...prev, url]);
//       });
//     });
//   };

//   useEffect(() => {
//     listAll(imagesListRef).then((response) => {
//       response.items.forEach((item) => {
//         getDownloadURL(item).then((url) => {
//           setImageUrls((prev) => [...prev, url]);
         
//         });
//       });
//     });
//   }, []);

//   return (
//     <div className="App m-5">
//       <input className="w-full py-3 border-2 bg-white  px-5"
//         type="file"
//         onChange={(event) => {
//           setImageUpload(event.target.files[0]);
//         }}
//       />
      
//      <div className="py-5">
//      <button onClick={uploadFile} className="px-4 py-4 bg-green-200 rounded-lg "
//       > Upload Image</button>
//       {imageUrls.map((url) => {
//         return <img src={url} />;
        
//       })}
//      </div>
//     </div>
//   );
// }

// export default App;




