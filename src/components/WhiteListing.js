import { Column, Text } from "./ui/utils";
import styled from "styled-components";
import { useState , useEffect} from "react";

export default function WhiteListing(){
    const initialValues = { name: "", email: "", wallet: "", social:"" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormValues({ ...formValues, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setFormErrors(validate(formValues));
      setIsSubmit(true);
    };
  
    useEffect(() => {
      console.log(formErrors);
      if (Object.keys(formErrors).length === 0 && isSubmit) {
        console.log(formValues);
      }
    }, [formErrors]);
    const validate = (values) => {
      const errors = {};
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      const ethWalletRegex = /^0x[a-fA-F0-9]{40}$/;
      if (!values.name) {
        errors.name = "Username is required!";
      }
      if (!values.email) {
        errors.email = "Email is required!";
      } else if (!regex.test(values.email)) {
        errors.email = "This is not a valid email format!";
      }
      if (!values.wallet) {
        errors.wallet = "Wallet address is required";
      } else if (!ethWalletRegex.test(values.wallet)) {
        errors.wallet = "Please provide a valid wallet address";
      }
      return errors;
    };
    return (
        <Column backgroundColor="#08183A" justify='center' align='center' id='whitelist' paddingBottom='70px'>
            <Text fontSize="40px" fontWeight="bold" color='rgba(255,255,255,0.8)' marginBottom='50px'>Get Whitelisted</Text>
            <form onSubmit={handleSubmit}>
                <Column>
                <Text fontSize="20px" fontWeight='bold' color='rgba(255,255,255,0.8)' marginLeft='10px'>Name :</Text>
                <Input type="text" name="name" value={formValues.name} placeholder="Enter your name" onChange={handleChange} />
                <ErrorMessage>{formErrors.name}</ErrorMessage>
                <Text fontSize="20px" fontWeight='bold' color='rgba(255,255,255,0.8)' marginLeft='10px'>Email :</Text>
                <Input type="text" name="email" value={formValues.email} placeholder="Enter your email" onChange={handleChange}/>
                <ErrorMessage>{formErrors.email}</ErrorMessage>
                <Text fontSize="20px" fontWeight='bold' color='rgba(255,255,255,0.8)' marginLeft='10px'>Wallet address :</Text>
                <Input type="text" name="wallet" value={formValues.wallet} placeholder="Metamask wallet address" onChange={handleChange}/>
                <ErrorMessage>{formErrors.wallet}</ErrorMessage>
                <Text type="text" fontSize="20px" fontWeight='bold' color='rgba(255,255,255,0.8)' marginLeft='10px'>Social :</Text>
                <Input type="text" name="social" value={formValues.social} placeholder="LinkedIn/Twitter/...  (Optional)" onChange={handleChange}/>
                <Button type='submit'>Submit</Button>
                </Column>
            </form>
        </Column>
    )
}

const Input = styled.input`
    height: 50px;
    margin: 10px 10px;
    width: 40vw;
    border: none;
    outline: none;
    border-radius: 5px;
    font-size: 25px;
    background-color: rgba(255,255,255,0.15);
    color: rgba(255,255,255,0.7);

    &::placeholder{
        color: rgba(255,255,255,0.5);
        font-size: 20px;
    }
`;

const Button = styled.button`
    height: 50px;
    width: 10vw;
    align-self: center;
    font-size: 20px;
    font-weight: bold;
    border: none;
    outline: none;
    color: rgba(255,255,255,0.7);
    border-radius: 15px;
    margin-top: 20px;
    box-shadow: 0 3px 6px 0 rgba(31, 38, 135, 0.9);
    background-color: rgba(0,0,0,0.3);
    &:hover{
        box-shadow: 0 5px 10px 0 rgba(31, 38, 135, 0.9);
        background-color: rgba(0,0,0,0.5);
        cursor: pointer;
        color: rgba(255,255,255,0.8);
    }
`;

const ErrorMessage = styled.p`
    color: rgba(255,0,0,0.8);
    font-weight: 600;
    font-size: 17px;
`;