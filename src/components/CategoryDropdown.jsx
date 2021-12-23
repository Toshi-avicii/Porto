import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import KitchenIcon from '@material-ui/icons/Kitchen';
import HealingOutlinedIcon from '@material-ui/icons/HealingOutlined';
import WatchIcon from '@material-ui/icons/Watch';
import ComputerOutlinedIcon from '@material-ui/icons/ComputerOutlined';
import ChildFriendlyOutlinedIcon from '@material-ui/icons/ChildFriendlyOutlined';
import SportsBaseballOutlinedIcon from '@material-ui/icons/SportsBaseballOutlined';
import PhoneAndroidOutlinedIcon from '@material-ui/icons/PhoneAndroidOutlined';
import LocalLibraryOutlinedIcon from '@material-ui/icons/LocalLibraryOutlined';
import DirectionsCarOutlinedIcon from '@material-ui/icons/DirectionsCarOutlined';
import BuildOutlinedIcon from '@material-ui/icons/BuildOutlined';
import RedeemOutlinedIcon from '@material-ui/icons/RedeemOutlined';
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined'
import { Transition } from 'react-transition-group';

function CategoryDropdown(props) {

    const [electronicsDropdown, setElectronicDropdown] = useState(false);
    const [computersDropdown, setComputersDropdown] = useState(false);
    const dropdownRef = useRef(null);
    const electronicsRef = useRef(null);
    const computersRef = useRef(null);

    const duration = 300;

    const defaultStyles = {
        transition: `all ${duration}ms ease-in-out`,
        opacity: 0,
        transform: 'translateY(150px)'
    }

    const transitionStyles = {
        entering: { opacity: 0, transform: 'translateY(50px)' },
        entered: { opacity: 1, transform: 'translateY(0px)' },
        exiting: { opacity: 0.5, transform: 'translateY(100px)' },
        exited: { opacity: 0, transform: 'translateY(100px)' }
    }

    const defaultElectronicsStyles = {
        transition: `all ${duration}ms ease-in-out`,
        opacity: 0,
        transform: 'translateX(100px)'
    }

    const transitionElectronicsStyles = {
        entering: { opacity: 0, transform: 'translateX(-50px)' },
        entered: { opacity: 1, transform: 'translateX(0px)' },
        exiting: { opacity: 0.5, transform: 'translateX(-100%)', zIndex: '-1' },
        exited: { opacity: 0, transform: 'translateX(-100%)', zIndex: '-1' }
    }

    return (
        <Transition
         in={props.dropdownState ? props.dropdownState : props.mobileDropdown} 
         timeout={duration} 
         nodeRef={dropdownRef} 
         mountOnEnter unmountOnExit
         >  
           {state => (
                <Container 
                    style={{ ...defaultStyles, ...transitionStyles[state] }} 
                    ref={dropdownRef}
                >
                    <ul className="categories">
                        <li className="category">
                            <i><StarOutlineIcon /></i>
                            <p>Hot Promotions</p>
                        </li>
                        <li
                         className="category electronics-dropdown"
                         onMouseEnter={() => setElectronicDropdown(true)}
                         onMouseLeave={() => setElectronicDropdown(false)}
                        >
                            <i><CameraAltIcon /></i>
                            <p><span>Consumer Electronic</span><ArrowForwardIosOutlinedIcon style={{ fontSize: '16px', marginLeft: '2rem' }} /></p>
                                <Transition in={electronicsDropdown} timeout={duration} nodeRef={electronicsRef} mountOnEnter unmountOnExit>
                                    {state => (
                                        <Electronics
                                         style={{ ...defaultElectronicsStyles, ...transitionElectronicsStyles[state] }}
                                         onMouseEnter={() => setElectronicDropdown(true)}
                                         onMouseLeave={() => setElectronicDropdown(false)}
                                         ref={electronicsRef}
                                        >
                                            <div className="electronics">
                                                <h2>Electronics</h2>
                                                <ul className="electronic-items">
                                                    <li>Home Audio & Theaters</li>
                                                    <li>TV & Videos</li>
                                                    <li>Camera, Photos & Videos</li>
                                                    <li>Cellphones & Accessories</li>
                                                    <li>Headphones</li>
                                                    <li>Videogames</li>
                                                    <li>Wireless Speakers</li>
                                                    <li>Office Electronics</li>
                                                </ul>
                                            </div>
                                            <div className="accessories">
                                                <h2>Accessories</h2>
                                                <ul className="accessorie-items">
                                                    <li>Digital Cables</li>
                                                    <li>Audio & Video Cables</li>
                                                    <li>Batteries</li>
                                                </ul>
                                            </div>
                                        </Electronics>
                                    )}
                                </Transition>
                        </li>
                        <li className="category">
                            <i><LocalOfferIcon /></i>
                            <p>Clothing & Apparal</p>
                        </li>
                        <li className="category">
                            <i><KitchenIcon /></i>
                            <p>Home, Garden & Kitchen</p>
                        </li>
                        <li className="category">
                            <i><HealingOutlinedIcon /></i>
                            <p>Health & Beauty</p>
                        </li>
                        <li className="category">
                            <i><WatchIcon /></i>
                            <p>Jewlery & Watches</p>
                        </li>
                        <li
                         className="category computers-dropdown"
                         onMouseEnter={() => setComputersDropdown(true)}
                         onMouseLeave={() => setComputersDropdown(false)}
                        >
                            <i><ComputerOutlinedIcon /></i>
                            <p><span>Computer & Technology</span><ArrowForwardIosOutlinedIcon style={{ fontSize: '16px', marginLeft: '2rem' }} /></p>
                            <Transition in={computersDropdown} timeout={duration} nodeRef={computersRef} mountOnEnter unmountOnExit>
                                    {state => (
                                        <Computers
                                         style={{ ...defaultElectronicsStyles, ...transitionElectronicsStyles[state] }}
                                         onMouseEnter={() => setComputersDropdown(true)}
                                         onMouseLeave={() => setComputersDropdown(false)}
                                         ref={computersRef}
                                        >
                                            <div className="electronics">
                                                <h2>Computer & Technologies</h2>
                                                <ul className="electronic-items">
                                                    <li>Computer & Tablets</li>
                                                    <li>Laptops</li>
                                                    <li>Monitor</li>
                                                    <li>Networking</li>
                                                    <li>Drives & Storages</li>
                                                    <li>Computer Components</li>
                                                    <li>Security & Protection</li>
                                                    <li>Gaming Laptops</li>
                                                    <li>Accessories</li>
                                                </ul>
                                            </div>
                                        </Computers>
                                    )}
                            </Transition>
                        </li>
                        <li className="category">
                            <i><ChildFriendlyOutlinedIcon /></i>
                            <p>Babies & Moms</p>
                        </li>
                        <li className="category">
                            <i><SportsBaseballOutlinedIcon /></i>
                            <p>Sport & Outdoor</p>
                        </li>
                        <li className="category">
                            <i><PhoneAndroidOutlinedIcon /></i>
                            <p>Phones & Accessories</p>
                        </li>
                        <li className="category">
                            <i><LocalLibraryOutlinedIcon /></i>
                            <p>Books & Office</p>
                        </li>
                        <li className="category">
                            <i><DirectionsCarOutlinedIcon /></i>
                            <p>Cars & Motorcycles</p>
                        </li>
                        <li className="category">
                            <i><BuildOutlinedIcon /></i>
                            <p>Home improvements</p>
                        </li>
                        <li className="category">
                            <i><RedeemOutlinedIcon /></i>
                            <p>Vouchers & Services</p>
                        </li>
                    </ul>
                </Container>
           )}
        </Transition>
    )
}

export default CategoryDropdown;

const Container = styled.div`
    position: absolute;
    z-index: 10;
    background: white;
    width: 300px;
    margin: 0rem 1.25rem 1.25rem 1.25rem;
    transition: all 0.5s ease-out;
    box-shadow: 0px 0px 12px #f1f1f1;

    ul {
        list-style: none;

        li {
            display: flex;
            align-items: flex-start;
            padding: 0.75rem 1rem;
            cursor: pointer;
            font-weight: 300;
            font-size: 0.9rem;

            @media (max-width: 992px) {
                padding: 1rem;
            }

            i {
                display: flex;
                justify-content: center;
                align-items: center;
                margin-right: 0.35rem;
            }

            p {
                display: flex;
                justify-content: flex-start;
                align-items: center;
                width: 100%;
            }

            &:hover {
                background: #ff595e;
                color: white;
                transition: 0.25s;
            }
        }

        li.electronics-dropdown, li.computers-dropdown {
            position: relative;
        }
    }

    @media (max-width: 992px) {
        width: 100%;
        margin: 0;
        box-shadow: 0;
    }
`

const Electronics = styled.div`
    position: absolute;
    top: 0px;
    left: 300px;
    padding: 1.5rem;
    display: flex;
    width: 600px;
    box-shadow: 0px 0px 12px gainsboro;
    border-radius: 4px;
    margin: 0;
    color: black;
    transition: all 0.5s ease-out;
    background: white;

    @media (max-width: 992px) {
        background: #000013;
        color: white;
        top: 56px;
        left: 0px;
        width: 100%;
        flex-direction: column;
        z-index: 2;
        border-radius: 8px;
    }

    div:nth-child(1), div:nth-child(2) {
        width: 50%;

        @media (max-width: 992px) {
            width: 100%;
        }

        h2 {
            font-size: 1.25rem;
            font-weight: 500;
        }

        ul {
            li {
                padding: 0.25rem 0.25rem 0.25rem 0;

                @media (max-width: 992px) {
                    padding: 0.75rem 0;
                }

                &:hover {
                    color: #ff595e;
                    background: none;
                    transition: 0.25s;
                }
            }
        }
    }
`

const Computers = styled.div`
position: absolute;
top: 0px;
left: 300px;
padding: 1.5rem;
display: flex;
width: 600px;
margin: 0;
box-shadow: 0px 0px 12px gainsboro;
color: black;
transition: all 0.5s ease-out;
background: white;

@media (max-width: 992px) {
    top: 56px;
    left: 0px;
    width: 100%;
    flex-direction: column;
    z-index: 2;
    background: #000013;
    color: white;
}

div:nth-child(1), div:nth-child(2) {
    width: 50%;

    h2 {
        font-size: 1.25rem;
        font-weight: 500;
    }

    ul {
        li {
            padding: 0.25rem 0.25rem 0.25rem 0;

            @media (max-width: 992px) {
                padding: 0.75rem 0;
            }

            &:hover {
                color: #ff595e;
                background: none;
                transition: 0.25s;
            }
        }
    }
}
`