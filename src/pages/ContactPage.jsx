import React, { useEffect } from 'react';
import styled from 'styled-components';
import ContactForm from '../components/ContactForm';

const contactsArray = [
    {
        id: 'd1',
        department: 'Contact Directly',
        email: 'contact@porto.com',
        phone: '(+004) 912-3548-07'
    },
    {
        id: 'd2',
        department: 'Customer Services',
        email: 'customercare@porto.com',
        phone: '(800) 843-2446',
    },
    {
        id: 'd3',
        department: 'Media Relations',
        email: 'media@porto.com',
        phone: '(801) 947-3564'
    },
    {
        id: 'd4',
        department: 'Vendor Support',
        email: 'vendorsupport@porto.com',
        phone: '(801) 947-3100'
    }
];

function ContactPage() {
    useEffect(() => {
        document.title = 'Contact Us | Porto';
    }, []);

    return (
        <>
            <Container>
                <div className="contact-heading">
                    <h1>Contact Us For Any Questions</h1>
                </div>
                <div className="contacts">
                    {contactsArray.map(contact => {
                        return <div className="contact" key={contact.id}>
                            <h2>{contact.department}</h2>
                            <p>{contact.email}</p>
                            <p>{contact.phone}</p>
                        </div>
                    })}
                    <div className="contact">
                        <h2>Head Quarter</h2>
                        <p>17 Queen St, Southbank, Melbourne 10560, Australia</p>
                    </div>
                    <div className="contact">
                        <h2>Work With Us</h2>
                        <p>Send your CV to our email:</p>
                        <p>career@porto.com</p>
                    </div>
                </div>
            </Container>
            <ContactForm />
        </>
        
    )
}

export default ContactPage;

const Container = styled.div`
    padding: 4rem;

    .contact-heading {
        text-align: center;
        margin-bottom: 2rem;

        h1 {
            font-size: 2.25rem;
            font-weight: 600;

            @media (max-width: 576px) {
                font-size: 1.5rem;
            }
        }
    }

    .contacts {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 2rem;

        .contact {
            padding: 2rem;
            text-align: center;

            h2 {
                font-weight: 500;
                margin-bottom: 1rem;
            }

            p {
                margin: 0.5rem 0;
            }

            @media (max-width: 768px) {
                padding: 1rem;
            }
        }

        @media (max-width: 992px) {
            grid-template-columns: repeat(2, 1fr);
        }

        @media (max-width: 576px) {
            grid-template-columns: repeat(1, 1fr);
        }
    }

    @media (max-width: 768px) {
        padding: 2rem;
    }
`