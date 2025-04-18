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
                            <div class="pvc_cont">
                                <h3> Train Cancellation / Refund &amp; Changes in your Booking </h3>

                                <p>You have up to two hours before your Train to make changes to your reservation, such as adding extra seat, switching seats, or requesting an upgrade. Your ticket will be issued again if the changes the date, the destination, or the time. You may even decide to cancel your reservation.</p>
                                <p>Calling Us to handle everything on your behalf is the quickest and easiest way to change or cancel your Loco Rails.</p>
                                <p><strong>Receipt of a Refund</strong></p>
                                <p>You will receive a refund if your tickets is canceled, subject to the “Cancellations &amp; Refunds” policy of the relevant trains.</p>
                                <p>You can get in touch with us if you’re unsure whether your booking delay or cancellation qualifies for compensation, a refund, or both.</p>
                                <p>We have a team of experts to analyse financial compensations or the reimbursement of your original ticket.</p><p>We will be happy to help you claim the maximum refund.</p>

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
