import React from "react"
import styled from "styled-components"

const ContactSection = () => {
    return (
        <ContactContainer id="contact">
            <h1>Contact Me</h1>
            <p>
            Have a project in mind or just want to say hello? I'd love to hear from you! Feel free to reach out using the contact form below. 
            </p>
            <ContactFormContainer>
                <FullNameInput type="text" id="fullName" name="fullName" placeholder="Insert full name"  /><br />

                <EmailInput type="text" id="email" name="email" placeholder="Insert email"/><br /><br />

                <MessageBox type="text" id="message" name="email" placeholder="Write me a message"  /><br /><br />

               <SubmitInputButton type="submit" value="Submit" />

            </ContactFormContainer>
        </ContactContainer>
    );
}

export default ContactSection

const ContactContainer = styled.div`
    text-align: center;
    gap: 2rem;
    padding: 1.5rem 0;
    padding-bottom: 3.5rem;
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;

    h1{
        margin-bottom: 20px;
    }
    p {
        margin-bottom: 20px;
    }
`


const ContactFormContainer = styled.form`
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    width: 70%;
    font-size: 16px;


`
const FullNameInput = styled.input`
    height: 30px;
    color: white;
    background-color: #003554;
        &::placeholder {
            color: #0582CA;
        }
`

const EmailInput = styled.input`
    height: 30px;
    color: white;
    background-color: #003554;
        &::placeholder {
            color: #0582CA;
        }
`

const MessageBox = styled.textarea`
        height: 100px;
        color: white;
        background-color: #003554;
        &::placeholder {
            color: #0582CA;
        }
`

const SubmitInputButton = styled.input`
        padding: 0.7rem 2rem;
        cursor: pointer;
        background-color: #0582CA ;
        border: none;
        color: #fff;
        font-weight: 500;
        border-radius: 20px;
        &:hover{
            background-color: #00A6FB;
        }
`