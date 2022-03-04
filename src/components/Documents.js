import React from 'react';
import { collection, getFirestore, onSnapshot } from "firebase/firestore";
import { app } from '../util/firebase';


class Documents extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            documents : []
        };  
    }


    componentDidMount(){
        onSnapshot(collection(getFirestore(app),"documents"), (snapshot)=>{
                
            snapshot.forEach((snap)=>{
                let document = snap.data();
                this.setState({documents: [...this.state.documents,document]})
            })
        })
    }
    


    render(){
        return (
            <div>
                    <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>User Name</th>
                            <th>email</th>
                            <th>Description</th>                         
                            <th>Date enregistrement</th>
                            <th>Fichier </th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.documents.map((doc,i)=>{
                            return(
                                            <tr key={i}>
                                                <td>{doc.userName}</td>
                                                <td>{doc.email}</td>
                                                <td>{doc.description}</td>
                                                <td>{doc.date.toDate().toGMTString()}</td>
                                                <td><a href={doc.file} target='_blank' rel='noreferrer'>Telecharger </a></td>
                                            </tr>
                            )})
                    }
                    </tbody>
                </table>
            </div>
    );
    }
};

export default Documents;