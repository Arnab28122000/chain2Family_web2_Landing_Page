import { Column, Text, Row, LoadingSpinner } from "./ui/utils";
import styled from "styled-components";
import { useState, useEffect } from "react";
import * as React from 'react';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function WhiteListing() {
  const initialValues = {
    name: "",
    email: "",
    wallet: "",
    social: "",
    newLetters: true,
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [roles, setRole] = useState([]);
  const [interest, setInterest] = useState([]);
  const [newsletter, setNewsletter] = useState(true);
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogMessage, setDialogMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);


  const handleClose = () => {
    setOpenDialog(false);
  };

  const allRoles = ["Advisor", "Partner", "Investor", "Member", "Contributer"];
  const allInterests = [
    "Decentralized Identies",
    "Tokenized Insurance Security",
    "Tokenized Defi App MarketPlace",
    "Tokenized Lending and Borrowing",
    "Tokenized Cold Storage (offline) Staking",
    "Individual and Consortium Community Staking",
    "Operating and owning my own blockchain ledgers",
    "Tokenizing my physical and digital assets/information",
  ];

  function contains(array, val) {
    let contains = false;
    if (array.length > 0) {
      array.forEach((item) => {
        if (item === val) {
          contains = true;
        }
      });
    }
    return contains;
  }

  const toggleRoleCheckbox = (label) => {
    if (contains(roles, label)) {
      const newRoles = roles.filter((item) => item !== label);
      setRole(newRoles);
    } else if (!contains(roles, label)) {
      const newRoles = [...roles, label];
      setRole(newRoles);
    }
  };

  const toggleInterestCheckbox = (label) => {
    if (contains(interest, label)) {
      const newInterest = interest.filter((item) => item !== label);
      setInterest(newInterest);
    } else if (!contains(interest, label)) {
      const newInterest = [...interest, label];
      setInterest(newInterest);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleNewsletter = (label) => {
    if (label === "yes") {
      setNewsletter(!newsletter);
    } else if (label === "no") {
      setNewsletter(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  const storeWhiteListingData = async (data) => {
    setIsLoading(true);
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    let requestOptions = {
      method: "post",
      headers: myHeaders,
      redirect: "follow",
      body: JSON.stringify([
        [
          data.name,
          data.email,
          data.wallet,
          data.social,
          roles.toString(),
          interest.toString(),
          newsletter.toString(),
          new Date().toLocaleString(),
        ],
      ]),
    };

    fetch(
      "https://v1.nocodeapi.com/arnab2812/google_sheets/LkHXnnJWPKTPIwgQ?tabId=Sheet1",
      requestOptions
    )
      .then((response) => {
        setIsLoading(false);
        if(response.status === 200) {
          setDialogMessage("Congratulations🎉🎉🎉 You have successfully applied for whitelisting 🥳");
          setOpenDialog(true);
        }else if(response.status !== 200) {
          setDialogMessage("Something went wrong. Please try again later.");
          setOpenDialog(true);
        }
        console.log(response);
      })
      .then((result) =>{ 
        setIsLoading(false);
        console.log(result)})
      .catch((error) =>{ 
        setDialogMessage("Something went wrong. Please try again later.");
          setOpenDialog(true);
        setIsLoading(false);
        console.log("error", error)});
  };

  useEffect(() => {
    console.log("UseEffect roles:", roles);
    console.log("UseEffect interests:", interest);
  }, [roles, interest]);

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
      try {
        storeWhiteListingData(formValues);
      } catch (e) {
        console.log("Sheet error:", e);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

    if (roles.length === 0) {
      errors.roles = "Please select at least one role";
    }

    return errors;
  };
  return (
    <Column
      backgroundColor="#08183A"
      justify="center"
      align="center"
      id="whitelist"
      paddingBottom="70px"
    >
      <Text
        fontSize="40px"
        fontWeight="bold"
        color="rgba(255,255,255,0.8)"
        marginBottom="50px"
      >
        Get Whitelisted
      </Text>
      <form onSubmit={handleSubmit}>
        <Column>
          <Text
            fontSize="20px"
            fontWeight="bold"
            color="rgba(255,255,255,0.8)"
            marginLeft="10px"
          >
            Name :
          </Text>
          <Input
            type="text"
            name="name"
            value={formValues.name}
            placeholder="Enter your name"
            onChange={handleChange}
          />
          <ErrorMessage>{formErrors.name}</ErrorMessage>
          <Text
            fontSize="20px"
            fontWeight="bold"
            color="rgba(255,255,255,0.8)"
            marginLeft="10px"
          >
            Email :
          </Text>
          <Input
            type="text"
            name="email"
            value={formValues.email}
            placeholder="Enter your email"
            onChange={handleChange}
          />
          <ErrorMessage>{formErrors.email}</ErrorMessage>
          <Text
            fontSize="20px"
            fontWeight="bold"
            color="rgba(255,255,255,0.8)"
            marginLeft="10px"
          >
            Wallet address :
          </Text>
          <Input
            type="text"
            name="wallet"
            value={formValues.wallet}
            placeholder="Metamask wallet address"
            onChange={handleChange}
          />
          <ErrorMessage>{formErrors.wallet}</ErrorMessage>
          <Text
            type="text"
            fontSize="20px"
            fontWeight="bold"
            color="rgba(255,255,255,0.8)"
            marginLeft="10px"
          >
            Social :
          </Text>
          <Input
            type="text"
            name="social"
            value={formValues.social}
            placeholder="LinkedIn/Twitter/...  (Optional)"
            onChange={handleChange}
          />
          <Text
            marginTop="30px"
            fontSize="20px"
            fontWeight="bold"
            color="rgba(255,255,255,0.8)"
            marginLeft="10px"
          >
            I'm interested in being a (select more than one)
          </Text>
          {allRoles.map((role, index) => {
            return (
              <CheckBox
                key={index}
                name={role}
                toggleRoleCheckbox={toggleRoleCheckbox}
              />
            );
          })}
          <ErrorMessage>{formErrors.roles}</ErrorMessage>
          <Text
            marginTop="30px"
            fontSize="20px"
            fontWeight="bold"
            color="rgba(255,255,255,0.8)"
            marginLeft="10px"
          >
            I'm interested in (select more than one)
          </Text>
          {allInterests.map((role, index) => {
            return (
              <CheckBox
                key={index}
                name={role}
                toggleRoleCheckbox={toggleInterestCheckbox}
              />
            );
          })}
          <Text
            marginTop="30px"
            fontSize="20px"
            fontWeight="bold"
            color="rgba(255,255,255,0.8)"
            marginLeft="10px"
          >
            I would like to receive company newsletter updates
          </Text>
          <Row
            align="center"
            onClick={() => {
              handleNewsletter("yes");
            }}
          >
            <InputCheckbox
              type="checkbox"
              name="role"
              checked={newsletter}
              onChange={() => {}}
            />
            <Text
              fontSize="18px"
              fontWeight="bold"
              color="rgba(255,255,255,0.8)"
              marginLeft="10px"
            >
              Yes
            </Text>
          </Row>
          <Row
            align="center"
            onClick={() => {
              handleNewsletter("no");
            }}
          >
            <InputCheckbox
              type="checkbox"
              name="role"
              checked={!newsletter}
              onChange={() => {}}
            />
            <Text
              fontSize="18px"
              fontWeight="bold"
              color="rgba(255,255,255,0.8)"
              marginLeft="10px"
            >
              No
            </Text>
          </Row>
          <Button type="submit">
            {
              isLoading ? <LoadingSpinner/> : "Submit"
            }
          </Button>
        </Column>
      </form>
      <Dialog
        open={openDialog}
        TransitionComponent={Transition}
        keepMounted
        maxWidth="sm"
        style={{
          borderRadius: "20px",
          border: "none",
        }}
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle 
        style={{
          backgroundColor: "#08183A",
        }}
        >
          <Text color="rgba(255,255,255,0.8)" fontWeight="bold" fontSize="24px">{dialogMessage}</Text></DialogTitle>
        <DialogActions 
        style={{
          backgroundColor: "#08183A",
        }}>
          <Button onClick={handleClose}><Text color='white'>OK</Text></Button>
        </DialogActions>
      </Dialog>
    </Column>
  );
}

function CheckBox(props) {
  const [checked, setChecked] = useState(false);
  return (
    <Row
      align="center"
      onClick={() => {
        setChecked(!checked);
        props.toggleRoleCheckbox(props.name);
      }}
    >
      <InputCheckbox
        type="checkbox"
        name="role"
        checked={checked}
        onChange={() => {}}
      />
      <Text
        fontSize="18px"
        fontWeight="bold"
        color="rgba(255,255,255,0.8)"
        marginLeft="10px"
      >
        {props.name}
      </Text>
    </Row>
  );
}

const InputCheckbox = styled.input`
  height: 25px;
  margin: 10px 10px;
  width: 25px;
  border: none;
  outline: none;
  border-radius: 10px;
  font-size: 25px;
  background-color: rgba(255, 255, 255, 0.8);
  color: rgba(255, 255, 255, 0.7);

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
    font-size: 20px;
  }
`;

const Input = styled.input`
  height: 50px;
  margin: 10px 10px;
  width: 40vw;
  border: none;
  outline: none;
  border-radius: 5px;
  font-size: 25px;
  background-color: rgba(255, 255, 255, 0.15);
  color: rgba(255, 255, 255, 0.7);

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
    font-size: 20px;
  }
`;

const Button = styled.button`
  height: 50px;
  width: 10vw;
  align-self: center;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  border: none;
  outline: none;
  color: rgba(255, 255, 255, 0.7);
  border-radius: 15px;
  margin-top: 20px;
  box-shadow: 0 3px 6px 0 rgba(31, 38, 135, 0.9);
  background-color: rgba(0, 0, 0, 0.3);
  &:hover {
    box-shadow: 0 5px 10px 0 rgba(31, 38, 135, 0.9);
    background-color: rgba(0, 0, 0, 0.5);
    cursor: pointer;
    color: rgba(255, 255, 255, 0.8);
  }
`;

const ErrorMessage = styled.p`
  color: rgba(255, 0, 0, 0.8);
  font-weight: 600;
  font-size: 17px;
`;
