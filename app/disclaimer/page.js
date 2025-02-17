import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

const page = () => {
    return (
        <>
            <Header />
            <section id="common_banner">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="common_bannner_text">
                                <h2>Contact</h2>
                                <ul>
                                    <li><a href="/">Home</a></li>
                                    <li><span><i class="fas fa-circle"></i></span>Contact</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="about_us_top" class="section_padding">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="about_us_left">
                                <h5>Disclaimer</h5>
                                <p>The information provided and published on whistlingrails.com is fair and accurate to the best of our knowledge but is subject to changes as the circumstances prevail. All the information provided here is variable and is modified from time to time. We keep on updating the information related to prices, content and data along with other necessary details. We make sure to provide you with the relevant data and disclose all the necessary details needed for our client satisfaction. However, the travel industry is dynamic in nature and demands information updates frequently, so, the fare changes are all subject to the need of an hour. We do not stand liable for any information that is provided here as we may update the information without prior intimation. Hence, customers are requested to check the information prior to using our website.</p>
                                <p>whistlingrails.com does not stand liable for any losses, damage or injury due to the information (related to content, data, or other necessary details) provided on our website or associated with its affiliates according to our Terms and Conditions. Customer discretion is advised on the use of our website.</p>
                                <p>Any offers or deals provided on our website are variable in nature and may change as per the needs of the travel industry. The changes can take place due to the market determinants which govern our website and include date of travel, date of booking, blackout date and other Terms and Conditions. The fare changes can take place without prior intimation and the customer is deemed to abide by the same. The customer cannot claim a discount on fare changes and has to undergo an assessment for its validity.</p>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="about_us_right">
                                <img src="/images/common/abour_right.png" alt="img" />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default page
