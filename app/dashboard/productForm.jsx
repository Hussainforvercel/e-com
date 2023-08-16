
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { auth, db, storage } from "../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const New = ({ inputs = [], title }) => {
  const [file, setFile] = useState(null);
  const [data, setData] = useState({
    userName: '',
    productName: '',
    price: '',
    description: ''
  });
  const [per, setPerc] = useState(null);
  const [submittedData, setSubmittedData] = useState([]);

  useEffect(() => {
    const uploadFile = () => {
      if (!file) return;

      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, name);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setPerc(progress);
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setData((prev) => ({ ...prev, img: downloadURL }));
          });
        }
      );
    };

    uploadFile();
  }, [file]);

  const handleInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    setData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      const newDocRef = doc(collection(db, "products"));
      await setDoc(newDocRef, {
        ...data,
        timeStamp: serverTimestamp(),
      });

      setSubmittedData((prevData) => [...prevData, data]);
      setData({
        userName: '',
        productName: '',
        price: '',
        description: ''
      });
      setFile(null);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="new flex justify-center p-10  inset-0 items-center transform transition-all  bg-purple-200 bg-opacity-50  duration-300">
    <div className="newContainer my-5  ">
     <div className="top">
       <h1>{title}</h1>
     </div>
     <div className="bottom">
       <div className="left">
         <img className="w-28"
           src={
             file
               ? URL.createObjectURL(file)
               : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg" 
           }
           alt=""
         />
       </div>
       <div className="right">
         <form onSubmit={handleAdd}>
           <div className="formInput">
             <label htmlFor="file">
               Image: <DriveFolderUploadOutlinedIcon className="icon" />
             </label> 
             <input
               type="file"
               id="file"
               onChange={(e) => setFile(e.target.files[0])}
               style={{ display: "none" }}
               
             />
           </div>
            <div className="grid grid-cols-2 my-10 font-semibold space-x-5 mb-10 text-lg">
           <div className="formInput">
             <label className="">User Name</label>
             <br />
             <input
               id="userName"
               type="text"
               placeholder="Enter user name"
               value={data.userName}
               onChange={handleInput}
               className="border-2 px-3 py-2 my-2 rounded-md"
             />
           </div>
           <div className="formInput">
             <label>Product Name</label>
             <br />
             <input
               id="productName"
               type="text"
               placeholder="Enter product name"
               value={data.productName}
               onChange={handleInput}
               className="border-2 my-2 px-3 py-2 rounded-md"
             />
           </div>
           <div className="formInput">
             <label className=" -mx-4">Price</label>
             <br />
             <input
               id="price"
               type="Number"
               placeholder="Enter price"
               value={data.price}
               onChange={handleInput}
               className="border-2 px-3 my-2 -mx-5 py-2 rounded-md space-x-5"
             />
           </div>
           <div className="formInput">
             <label>Description</label>
             <br />
             <input
               id="description"
               type="text"
               placeholder="Enter description"
               value={data.description}
               onChange={handleInput}
               className="border-2 px-3 py-2 my-2 rounded-md"
             />

           </div>
           </div>
           <button className="bg-purple-600 px-5 py-1 text-2xl rounded-md text-white" disabled={per !== null && per < 100} type="submit">
             Send
           </button>
         </form>
       </div>
     </div>
   </div>
 </div>
  );
};

export default New;


