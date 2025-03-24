"use client";

import { useEffect, useState } from "react";

export default function MobilePopup() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);
        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    return (
        <div className="flex justify-center items-center h-screen">

            {isMobile &&

                <div className="position-fixed top-0 start-0 w-100 h-100 bg-opacity-50 d-flex justify-content-center align-items-center z-3" style={{ backgroundColor: "#2125294f", zIndex: 9999 }}>
                    <div className="bg-white rounded-3 shadow p-4 w-75 w-md-50 w-lg-25 position-relative" >
                        <a href="tel:+1 (855) 564-8004"
                            className="btn-close position-absolute top-0 end-0 m-2"
                        ></a>
                        <div className="text-center">
                            <img src="/images/logo_white.png" alt="Expedia" className="img-fluid mb-2" />
                            <h2 className="text-warning">Get support for you train reservations</h2>
                            <p className="fw-bold text-dark">Talk to a travel expert and Save 25%</p>
                            <div className="text-center my-2">
                                <h3 className="text-warning fw-bold">
                                    <a href="tel:+1 (855) 564-8004" className="text-decoration-none">+1 (855) 564-8004</a>
                                </h3>
                            </div>
                            <hr className="my-3" />
                            <h2 className="text-dark fw-bold">24/7 Reservation Support</h2>
                            <ul className="row list-unstyled g-2 mt-3">
                                {["Tickets Booking", "Manage Booking", "Cancellation", "Refunds", "Customer Service", "Changes"].map((item, index) => (
                                    <li key={index} className="col-6 text-center">
                                        <a href="tel:+1 (855) 564-8004" className="btn btn-primary w-100">{item}</a>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-success fw-semibold mt-2">No Hold - Calls Answered in 5 sec</p>
                            <img
                                src="/images/train.png"
                                alt="Plane"
                                className="img-fluid w-75 mx-auto d-block mt-2"
                            />
                            <a href="tel:+1 (855) 564-8004" className="btn btn-warning w-100 text-white fw-bold mt-3">
                                +1 (855) 564-8004
                            </a>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}
