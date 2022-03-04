import React, { useEffect, useState } from 'react';
import login_logo from '../img/login_secure.png';
import * as AiIcons from 'react-icons/ai'
import {CgProfile} from 'react-icons/cg'
import {MdEmail} from 'react-icons/md'
import {BiUpload} from 'react-icons/bi'
import { connected, currentUser } from '../util/currentUser'
import { useNavigate } from 'react-router-dom';
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { app } from '../util/firebase';
import { addDoc, collection, getFirestore } from 'firebase/firestore';



const RegisterDocument = () => {
    
    const [userName,setuserName]=useState("")
    const [email,setEmail]=useState("")
    const [choosedFile,setChoosedFile]=useState(null)
    const [description,setDescription]=useState("")
    const [errorMsg,setErrorMsg]=useState("")
    const [hasError,setHasError]=useState(false)
    const navigate = useNavigate()

    //---------------------
    
    // While the file names are the same, the references point to different files
    // mountainsRef.name === mountainImagesRef.name;           // true
    // mountainsRef.fullPath === mountainImagesRef.fullPath;  
    const submit =(e)=>{
        e.preventDefault()//Block the form submitting to reload the page
        // Create a root reference
        const storage = getStorage(app);

        // Create a reference to 'mountains.jpg'
        const storageRef = ref(storage, choosedFile.name);

        uploadBytes(storageRef, choosedFile).then((snapshot) => {
            alert('File Uploaded!');
            addDoc(collection(getFirestore(app),"documents"),{
                userName : currentUser.userName,
                email: currentUser.email,
                date: new Date(),
                description:description,
                file: "https://firebasestorage.googleapis.com/v0/b/e-sante-dfb1e.appspot.com/o/"+choosedFile.name + "?alt=media"
            })
        });
    }
    useEffect(()=>{
        if(!connected){
            navigate("/connexion")
        }
    })
    return (
        <div>
            <section className='mx-md-5 m-2 p-2 justify-content-center bg-primary'>
                <div className={hasError?'d-flex row m-auto ':'d-none'}>
                    <p className=' bg-warning fs-4 row'>{errorMsg} 
                        <button className='col-1 btn btn-danger ms-auto m-1' onClick={()=>setHasError(false)}>X</button>
                    </p>  
                </div>
                <div className='row justify-content-center'>
                    <div className='row mt-2 col-6 col-sm-4 col-md-3 col-lg-2 m-auto'>
                        <img src={login_logo}></img>
                    </div>
                    <h2 className='text-light text-center'>Ajouter un document</h2>
                    <div className='col-12 col-sm-9 col-md-7 col-lg-5'>
                        <form className='col-10 m-auto' onSubmit={e=>submit(e)}>
                            <div className='input-group form-control justify-content-center my3'>
                                <CgProfile className='fs-3 my-2 me-2'/>
                                <input required type="text" className="form-control fs-5" placeholder="Nom d'utilisateur" value={currentUser.userName} onChange={e=>setuserName(e.target.value)}></input>
                            </div>
                            <div className='input-group form-control justify-content-center my-3'>
                                <MdEmail className='fs-3 my-2 me-2'/>
                                <input required type="email" className="form-control fs-5" placeholder="Adresse email" value={currentUser.email} onChange={e=>setEmail(e.target.value)}></input>
                            </div>
                            <div className='input-group form-control justify-content-center my-3'>
                                <label className='row justify-content-center align-items-center'>
                                    <div className='col-10 m-0 pe-0'>

                                        <input name='file' required type="file" className=" form-control fs-5" placeholder="Choisir un fichier" onChange={e=>setChoosedFile(e.target.files[0])}></input>
                                    </div>
                                    <div className='col-2 '>
                                        <BiUpload className='bg-primary h-100 text-light fs-1 rounded col-12'/>
                                    </div>
                                </label>
                            </div>
                            <div className='input-group form-control justify-content-center my-3'>
                                <textarea required className="form-control fs-5" placeholder="Description" value={description} onChange={e=>setDescription(e.target.value)}></textarea>
                            </div>
                            <div className='input-group justify-content-center my-3'>
                                <button type='submit' className='col-12 btn btn-primary border border-light fw-bolder fs-4 text-light'>Soumettre</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default RegisterDocument;