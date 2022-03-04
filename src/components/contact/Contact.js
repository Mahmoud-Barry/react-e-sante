import { addDoc, collection, getFirestore } from 'firebase/firestore';
import React, {  useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { app } from "../../util/firebase";




const Contact = () => {

    const [name,setName]=useState("")
    const [tel,setTel]=useState()
    const [email,setEmail]=useState("")
    const [message,setMessage] = useState("")

    const navigate = useNavigate();

    const contactSubmit = (e) =>{
        e.preventDefault();

        addDoc(collection(getFirestore(app), "Contact"),{
            name: name,
            tel: tel,
            email: email,
            message: message
        }).then(()=> alert("Message envoye "))
        .then(()=>navigate("/"))
        .catch(()=> alert("message non envoye"))
    }



    return (
        <div>
            <div className="container mt-5">
                <div className="row">

                    <div className="col-6 mx-1">
                        <h1>Say Hello!</h1>
                        <p>Impressed with my works? Get in touch with me for creating amazing photos!</p>
                        <div className="row">

                            <div className="col">
                                <p>Contacts</p>
                            </div>

                            <div className="col">
                                <p>Phone: +221 77 777 77 77</p>
                                <p>Viber: +221 77 777 77 77</p>
                                <p>Skype: esante</p>
                                <p>Email: contact@esante.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-5 border rounded bg-light p-5">
                        <form onSubmit={e=> contactSubmit(e)}>

                            <div className="mb-3">
                                <label for="name" className="form-label"></label>
                                <input type="text" className="form-control" placeholder='Name*' aria-describedby="nameHelp" required value={name} onChange={e=> setName(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label for="number" className="form-label"></label>
                                <input type="text" className="form-control" placeholder='Phone number*' aria-describedby="telHelp" required value={tel} onChange={e=> setTel(e.target.value)}/>
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label"></label>
                                <input type="email" className="form-control " placeholder='E-mail*' aria-describedby="emailHelp" required value={email} onChange={e=> setEmail(e.target.value)}/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label"></label>
                                <textarea class="form-control" placeholder='Type your message' id="exampleFormControlTextarea1" rows="3" required value={message} onChange={e=> setMessage(e.target.value)}></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary w-100">Envoyer</button>
                            
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;