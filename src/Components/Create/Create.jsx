import React, { Fragment, useContext, useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { FirebaseContext, AuthContext } from '../../store/Context';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const navigate = useNavigate()
  const {firebase} = useContext(FirebaseContext)
  const {user} = useContext(AuthContext)
  const [name,setName] = useState('')
  const [category,setCategory] = useState('')
  const [price,setPrice] = useState('')
  const [image,setImage] = useState(null)
  const [errors, setErrors] = useState({});
  const date = new Date()

  const validateForm = () => {
    const errors = {};
    if (!name) errors.name = 'Name is required';
    if (!category) errors.category = 'Category is required';
    if (!price) errors.price = 'Price is required';
    if (!image) errors.image = 'Image is required';
    return errors;
  };


  

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    e.preventDefault()  
    firebase.storage().ref(`/image/${image.name}`).put(image).then(({ref})=>{
      ref.getDownloadURL().then((url) =>{
        console.log(url)
        firebase.firestore().collection('products').add({
          name,
          category,
          price,
          url,
          userId : user.uid,
          createAt: date.toDateString(),
        })
        navigate('/')
      })
    })

  } 
  return (
    <Fragment>
      <Header />
      <div className="centerDiv">
          <label htmlFor="name">Name</label>
          <input
            className="input"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            type="text"
            id="name"
            name="name"
            defaultValue="John"
          />
          {errors.name && <p className="error">{errors.name}</p>}

          <label htmlFor="category">Category</label>
          <input
            className="input"
            value={category}
            onChange={(e)=>setCategory(e.target.value)}
            type="text"
            id="category"
            name="category"
            defaultValue="John"
          />
          {errors.category && <p className="error">{errors.category}</p>}

          <label htmlFor="price">Price</label>
          <input
            className="input"
            value={price}
            onChange={(e)=>setPrice(e.target.value)}
            type="number"
            id="price"
            name="price"
          />
          {errors.price && <p className="error">{errors.price}</p>}

        <img alt="Posts" width="200px" height="200px" src={image ? URL.createObjectURL(image) : ''} />
          <input type="file" onChange={(e)=>{
            setImage(e.target.files[0])
          }} />
          {errors.image && <p className="error">{errors.image}</p>}

          <button onClick={handleSubmit} className="uploadBtn">Upload and Submit</button>
      </div>
    </Fragment>
  );
};

export default Create;
