import React from 'react';
import styled from 'styled-components';
import Input from './General/Input';
import Button from './General/Button';

function ContactForm() {
    return (
        <Container>
            <div className="form-heading">
                <h1>Get In Touch</h1>
            </div>

            <form>
                <div className="first-row">
                    <Input 
                     id="name" 
                     type="text" 
                     placeholder="Your Name" 
                     border="1px solid lightgrey"
                     width="48%"
                    />

                    <Input 
                     id="email" 
                     type="email" 
                     placeholder="Email" 
                     border="1px solid lightgrey"
                     width="48%"
                    />
                </div>

                <div className="second-row">
                    <Input 
                     id="subject"
                     type="text"
                     placeholder="Subject"
                     border="1px solid lightgrey"
                     width="100%"
                    />
                </div>

                <div className="third-row">
                    <Input 
                     id="message"
                     placeholder="Your Message"
                     width="100%"
                     border="1px solid lightgrey"
                     rows="6"
                    />
                </div>
                
                <div className="fourth-row">
                    <Button 
                        type="submit"
                        bg="#ff595e"
                        color="white"
                        padding="1rem 4rem"
                        rounded="4px"
                        title="Submit"
                    />
                </div>
            </form>
        </Container>
    )
}

export default ContactForm;

const Container = styled.div`
    padding: 2rem;
    background: #f1f1f1;

    .form-heading {
        margin: 2rem 0;
        text-align: center;

        h1 {
            font-size: 2.25rem;
        }
    }

    form {
        .first-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1.5rem;
        }

        .second-row {
            margin-bottom: 1.5rem;
        }

        .fourth-row {
            margin: 2rem 0;
            display: flex;
            justify-content: center;
        }
    }
`