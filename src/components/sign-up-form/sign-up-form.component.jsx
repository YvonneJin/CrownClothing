import { useState } from "react";


const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const handleChange = (event) => {
        const { name, value } = event.target;
        
        setFormFields({...formFields, [name]: value});
    };

    return (
        <div>
            <h1>Sign up</h1>
            <form onSubmit={() => {}}>
                <label>Display Name</label>
                <input 
                    type="text" 
                    onChange={handleChange}
                    name="displayName"
                    value={displayName}
                    required 
                />

                <label>Email</label>
                <input 
                    type="email"
                    required 
                    onChange={handleChange}
                    value={email}
                    name="email"
                />

                <label>Password</label>
                <input 
                    type="password" 
                    required 
                    onChange={handleChange}
                    value={password}
                    name="password"
                />

                <label>Confirm Password</label>
                <input 
                    type="password" 
                    required 
                    onChange={handleChange}
                    value={confirmPassword}
                    name="confirmPassword"
                />
                
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default SignUpForm;