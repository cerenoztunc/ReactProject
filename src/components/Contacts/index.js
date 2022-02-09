import {useState,useEffect} from 'react';
import styles from './styles.css'
import List from './List';
import Form from './Form';

function Contacts() {

    const [contacts, setContacts] = useState([
        {
            fullname:"Ceren",
            phone_number:"12345"
        },
        {
            fullname:"Oguz",
            phone_number:"23456"
        },
        {
            fullname:"Rina",
            phone_number:"12345"
        }
    ]);

    useEffect(()=>{
        console.log(contacts);
    },[contacts]);
  return (
    <div id="container">
        <h1>Contacts</h1>
      <List contacts={contacts}/>
      <Form addContact={setContacts} contacts={contacts}/>
      
    </div>

  )
}

export default Contacts;