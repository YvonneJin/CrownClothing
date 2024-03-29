import { useState } from "react";

import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import { 
    signInWithGooglePopup, 
    signInAuthUserWithEmailAndPassword
} from "../../utils/firebase/firebase.utils";

import { SignUpContianer, ButtonsContianer } from './sign-in-form.styles';


const defaultFormFields = {
    email: '',
    password: ''
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    
    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await signInAuthUserWithEmailAndPassword(email, password);
            resetFormFields();
        } catch(error) {
            switch(error.code){
                case "auth/wrong-password": 
                    alert('Incorrect password for email.');
                    break;

                case "auth/user-not-found":
                    alert('No user associated with this email.');
                    break;
                default:
                    console.log(error);
            }
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        
        setFormFields({...formFields, [name]: value});
    };

    return (
        <SignUpContianer>
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput 
                    label="Email"
                    type="email"
                    required 
                    onChange={handleChange}
                    value={email}
                    name="email"
                />

                <FormInput 
                    label="Password"
                    type="password" 
                    required 
                    onChange={handleChange}
                    value={password}
                    name="password"
                />  
                <ButtonsContianer>            
                    <Button type="submit">Sign In</Button>
                    <Button 
                        type='button'
                        buttonType={BUTTON_TYPE_CLASSES.google} 
                        onClick={signInWithGoogle}
                    >
                        Sign In With Google
                    </Button>
                </ButtonsContianer>
            </form>
        </SignUpContianer>
    )
}

export default SignInForm;