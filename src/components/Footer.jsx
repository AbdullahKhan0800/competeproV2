import React, { useState } from "react"
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";
import '../assets/css/footer.css'

function Footer() {
    const [inputvalue, setinputvalue] = useState('')
    return (
        <footer className="container">
            <div>
                <div className='footerHeading'>
                    <h2 className='h3'>
                        Ready to develop your idea!
                    </h2>
                    <a href="#" className='h3 footer-acher'>
                        hello@bigfolio.co
                    </a>
                </div>
            </div>
            <hr />
            <div className="border-black border-t border-b border-solid border-opacity-20">
                <div>
                    <div className="mainFooterMenu">
                        <div className="newsletter">
                            <div className="newsletter-MainHeading">To keep up to date with all the latest news, advice and jobs</div>
                            <div className="footer_content margin-footer_content"><p>Please sign up to the bigfolio email newsletter.</p></div>
                            <div className="footer_newsletter">
                                <input type="text" id="newsletteremail" value={inputvalue} className="News_Letter_Input" onChange={(e) => {
                                    setinputvalue(e.target.value)
                                }} />
                                <div className="arrowUpNewsletter">
                                    <div className="firstArrow">
                                        <MdArrowOutward />
                                    </div>
                                    <div className="secondArrow">
                                        <MdArrowOutward />
                                    </div>
                                </div>
                                <label htmlFor="newsletteremail" className={`labelEmailNewsletter${inputvalue !== '' ? " News_letter_value" : ""}`}>ENTER EMAIL</label>
                            </div>
                        </div>
                        <div className="navigations">
                            <div className="nav">
                                <div className="footer-heading">Legal</div>
                                <ul>
                                    <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                                    <li>Terms of Use</li>
                                    <li>Do not sell my data</li>
                                </ul>
                            </div>
                            <div className="nav">
                                <div className="footer-heading">Company</div>
                                <ul>
                                    <li><Link to="/about-us">About us</Link></li>
                                    <li><a href="#services">Services</a></li>
                                    <li><a href="#our-work">Our work</a></li>
                                    <li>Careers</li>
                                </ul>
                            </div>
                            <div className="nav">
                                <div className="footer-heading">Resources</div>
                                <ul>
                                    <li>Blog</li>
                                    <li><a href="#our-customer">Customer stories</a></li>
                                    <li>Contact us</li>
                                </ul>
                            </div>
                            <div className="nav">
                                <div className="footer-heading">Follow us</div>
                                <ul className="followUsFooter">
                                    <li><a href="https://www.shopify.com/partners/directory/partner/bigfolio-us" target="_blank" rel="noreferrer">Shopify
                                        <div className="followarrowUplink">
                                            <div className="firstArrow">
                                                <MdArrowOutward />
                                            </div>
                                            <div className="secondArrow">
                                                <MdArrowOutward />
                                            </div>
                                        </div></a>
                                    </li>
                                    <li><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/bigfolio">LinkedIn
                                        <div className="followarrowUplink">
                                            <div className="firstArrow">
                                                <MdArrowOutward />
                                            </div>
                                            <div className="secondArrow">
                                                <MdArrowOutward />
                                            </div>
                                        </div></a></li>
                                    <li><a href="https://www.facebook.com/bigfolio.co" target="_blank" rel="noreferrer">Facebook
                                        <div className="followarrowUplink">
                                            <div className="firstArrow">
                                                <MdArrowOutward />
                                            </div>
                                            <div className="secondArrow">
                                                <MdArrowOutward />
                                            </div>
                                        </div></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="footer_copyRight">
                <div className="copyright">
                    <ul>
                        <li>Copyright © 2021-2024 Bigfolio.</li>
                    </ul>
                </div>
                <div className="copyright">
                    <ul>
                        <li>Privacy Policy</li>
                        <li>Terms of Use</li>
                        <li>Do not sell my data</li>
                    </ul>
                </div>
                {/* <div className="companyNave">
          <div className="footer_content">
            info@bigfolio
          </div>
        </div> */}
            </div>
        </footer>
    )
}

export default Footer