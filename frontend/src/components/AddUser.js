import { useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
 
const AddUser = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
 
    const saveUser = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:3000/user',{
            fullName: name,
            email: email,
        });
        navigate("/");
    }
 
    return (
        <div>
            <form onSubmit={ saveUser }>
                <div className="field">
                    <label className="label">Name</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Name"
                        value={ name }
                        onChange={ (e) => setName(e.target.value) }
                    />
                </div>
 
                <div className="field">
                    <label className="label">Email</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Email"
                        value={ email }
                        onChange={ (e) => setEmail(e.target.value) }
                    />
                </div>
 
                <div className="field">
                    <button className="button is-primary">Save</button>
                </div>
            </form>
        </div>
    )
}
 
export default AddUser;