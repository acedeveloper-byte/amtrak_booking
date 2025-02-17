import React from 'react'

const Footer = () => {
    return (
        <>
            <footer id="footer_area">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                            <div class="footer_heading_area">
                                <h5>Need any help?</h5>
                            </div>
                            <div class="footer_first_area">
                                <div class="footer_inquery_area">
                                    <h5>Call 24/7 for any help</h5>
                                    <h3> <a href="tel:+00-123-456-789">+00 123 456 789</a></h3>
                                </div>
                                <div class="footer_inquery_area">
                                    <h5>Mail to our support team</h5>
                                    <h3> <a href="mailto:support@domain.com">support@domain.com</a></h3>
                                </div>
                                <div class="footer_inquery_area">
                                    <h5>Follow us on</h5>
                                    <ul class="soical_icon_footer">
                                        <li><a href="#!"><i class="fab fa-facebook"></i></a></li>
                                        <li><a href="#!"><i class="fab fa-twitter-square"></i></a></li>
                                        <li><a href="#!"><i class="fab fa-instagram"></i></a></li>
                                        <li><a href="#!"><i class="fab fa-linkedin"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-2 offset-lg-1 col-md-6 col-sm-6 col-12">
                            <div class="footer_heading_area">
                                <h5>Company</h5>
                            </div>
                            <div class="footer_link_area">
                                <ul>
                                    <li><a href="/about-us">About Us</a></li>
                                    <li><a href="terms-service.html">Work with Us</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-4 col-sm-6 col-12">
                            <div class="footer_heading_area">
                                <h5>Support</h5>
                            </div>
                            <div class="footer_link_area">
                                <ul>
                                    <li><a href="contact.html">Contact</a></li>
                                    <li><a href="privacy-policy.html">Privacy Policy</a></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
