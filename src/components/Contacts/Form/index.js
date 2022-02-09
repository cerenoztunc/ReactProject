import {useState} from 'react';


const initialFormValues = {fullname:"", phone_number:""};

function Form({addContact,contacts}) {
    const [form, setForm] = useState(initialFormValues);
    const onChangeInput = (e)=>{
        setForm({...form, [e.target.name]:e.target.value});
    };

    const onSubmit = (e)=>{
        e.preventDefault();

        // if(form.fullname === '' || form.phane_number === ''){
        //     return false;
        // }

        addContact([...contacts,form]);

        setForm(initialFormValues); //veri girildikten sonra input'un içini temizledik
    };
  return (

      <form onSubmit={onSubmit}>
        <div>
        <div>
            <input 
            name="fullname" 
            placeholder='Fullname' 
            onChange={onChangeInput}
            value={form.fullname}
            ></input>
        </div>
        <div>
            <input 
            name="phone_number" 
            placeholder='Phone Number' 
            onChange={onChangeInput}
            value={form.phone_number}
            ></input>
        </div>
      
        <div className='btn'>
            <button>Add</button>
        </div>
        </div>
      </form>
      
  )
}

export default Form;