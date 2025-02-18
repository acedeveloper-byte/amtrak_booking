'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlaneDeparture } from '@fortawesome/free-solid-svg-icons';
import { faPlaneArrival } from '@fortawesome/free-solid-svg-icons';
import { faRightLeft } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react'
import { ListGroup } from 'react-bootstrap';
import airportData from "../utils/Jsons/airportdata.json"


const StaticEngine = () => {

    const [searchValues, setSearchValues] = useState('')

    const [tripType, setTripType] = useState("roundtrip");
    const [cabinClass, setCabinClass] = useState("economy");
    const [locations, setLocations] = useState({ from: "NYC", to: "MIA" });
    const [dates, setDates] = useState({ departure: "", return: "" });
    const [filteredAirports, setFilteredAirports] = useState([]);
    const [activeField, setActiveField] = useState("");
    const [airportName, setAirportName] = useState({ from: "", to: "" })
    const handleSwapLocations = () => {
        setLocations({ from: locations.to, to: locations.from });
    };


    const filterAirports = (input) => {
        if (input.trim() === "") {
            setFilteredAirports([]);
            return;
        }

        const filtered = airportData.filter(
            (airport) =>
                airport.airportName.toLowerCase().includes(input.toLowerCase()) ||
                airport.airportCode.toLowerCase().includes(input.toLowerCase()) ||
                airport.cityName.toLowerCase().includes(input.toLowerCase())
        );
        setFilteredAirports(filtered);
    };

    const handleInputChange = (field, value) => {
        setLocations({ ...locations, [field]: value });
        setActiveField(field);
        filterAirports(value);
    };

    const handleAirportSelect = (field, airport) => {
        setAirportName({ ...airportName, [field]: `${airport.airportName}` })
        setLocations({
            ...locations,
            [field]: `${airport.cityName} (${airport.airportCode})`,
        });
        setFilteredAirports([]);
        setActiveField("");
    };

    return (
        <>
            <section id="theme_search_form">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="theme_search_form_area">
                                <div class="theme_search_form_tabbtn">
                                    <ul class="nav nav-tabs" role="tablist">
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link active" id="flights-tab" data-bs-toggle="tab"
                                                data-bs-target="#flights" type="button" role="tab" aria-controls="flights"
                                                aria-selected="true">
                                                Round trip</button>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link" id="tours-tab" data-bs-toggle="tab" data-bs-target="#tours"
                                                type="button" role="tab" aria-controls="tours" aria-selected="false"><i
                                                    class="fas fa-globe"></i>One way</button>
                                        </li>


                                    </ul>
                                </div>
                                <div class="tab-content" id="myTabContent">
                                    <div class="tab-pane fade show active" id="flights" role="tabpanel"
                                        aria-labelledby="flights-tab">
                                        <div class="tab-content" id="myTabContent1">
                                            <div class="tab-pane fade show active" id="oneway_flight" role="tabpanel"
                                                aria-labelledby="oneway-tab">
                                                <div class="row">
                                                    <div class="col-lg-12">
                                                        <div class="oneway_search_form">
                                                            <form action="#!">
                                                                <div class="row">
                                                                    <div class="col-lg-3 col-md-6 col-sm-12 col-12">
                                                                        <div class="flight_Search_boxed">
                                                                            <p>From</p>
                                                                            {/* <input type="text" value={searchValues} onChange={(e) => handleChange(e)} /> */}
                                                                            <input type="text" value={locations.from} onChange={(e) => handleInputChange("from", e.target.value)} />
                                                                            <span>{airportName.from}</span>
                                                                            <div class="plan_icon_posation" >
                                                                                <FontAwesomeIcon icon={faPlaneDeparture} size="1x" class="cursor-pointer" onClick={handleSwapLocations} />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    {activeField === "from" && filteredAirports.length > 0 && (
                                                                        <ListGroup className="autocomplete-dropdown overlay-dropdown">
                                                                            {filteredAirports.map((airport, index) => (
                                                                                <ListGroup.Item
                                                                                    key={index}
                                                                                    action
                                                                                    onClick={() => handleAirportSelect("from", airport)}
                                                                                >
                                                                                    {airport.cityName} ({airport.airportCode}) -{" "}
                                                                                    {airport.airportName}
                                                                                </ListGroup.Item>
                                                                            ))}
                                                                        </ListGroup>
                                                                    )}
                                                                    <div class="col-lg-3 col-md-6 col-sm-12 col-12">
                                                                        <div class="flight_Search_boxed">
                                                                            <p>To</p>
                                                                            <input type="text" value={locations.to} onChange={(e) => handleInputChange("to", e.target.value)} />
                                                                            {/* <input type="text" value="London" /> */}
                                                                            {/* <span>LCY, London city airport </span> */}

                                                                            <span>{airportName.to}</span>
                                                                            <div class="plan_icon_posation">
                                                                                <FontAwesomeIcon icon={faPlaneArrival} size="1x" />
                                                                            </div>
                                                                            <div class="range_plan">
                                                                                <FontAwesomeIcon icon={faRightLeft} size="2x" />

                                                                            </div>
                                                                            {activeField === "to" && filteredAirports.length > 0 && (
                                                                                <ListGroup className="autocomplete-dropdown overlay-dropdown">
                                                                                    {filteredAirports.map((airport, index) => (
                                                                                        <ListGroup.Item
                                                                                            key={index}
                                                                                            action
                                                                                            onClick={() => handleAirportSelect("to", airport)}
                                                                                        >
                                                                                            {airport.cityName} ({airport.airportCode}) -{" "}
                                                                                            {airport.airportName}
                                                                                        </ListGroup.Item>
                                                                                    ))}
                                                                                </ListGroup>
                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-lg-4  col-md-6 col-sm-12 col-12">
                                                                        <div class="form_search_date">
                                                                            <div class="flight_Search_boxed date_flex_area">
                                                                                <div class="Journey_date">
                                                                                    <p>Journey date</p>
                                                                                    <input type="date" value="2022-05-05" />
                                                                                    <span>Thursday</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-lg-2  col-md-6 col-sm-12 col-12">
                                                                        <div
                                                                            class="flight_Search_boxed dropdown_passenger_area">
                                                                            <p>Passenger, Class </p>
                                                                            <div class="dropdown">
                                                                                <button class="dropdown-toggle final-count"
                                                                                    data-toggle="dropdown" type="button"
                                                                                    id="dropdownMenuButton1"
                                                                                    data-bs-toggle="dropdown"
                                                                                    aria-expanded="false">
                                                                                    0 Passenger
                                                                                </button>
                                                                                <div class="dropdown-menu dropdown_passenger_info"
                                                                                    aria-labelledby="dropdownMenuButton1">
                                                                                    <div class="traveller-calulate-persons">
                                                                                        <div class="passengers">
                                                                                            <h6>Passengers</h6>
                                                                                            <div class="passengers-types">
                                                                                                <div class="passengers-type">
                                                                                                    <div class="text"><span
                                                                                                        class="count pcount">2</span>
                                                                                                        <div class="type-label">
                                                                                                            <p>Adult</p>
                                                                                                            <span>12+
                                                                                                                yrs</span>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div class="button-set">
                                                                                                        <button type="button"
                                                                                                            class="btn-add">
                                                                                                            <i
                                                                                                                class="fas fa-plus"></i>
                                                                                                        </button>
                                                                                                        <button type="button"
                                                                                                            class="btn-subtract">
                                                                                                            <i
                                                                                                                class="fas fa-minus"></i>
                                                                                                        </button>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div class="passengers-type">
                                                                                                    <div class="text"><span
                                                                                                        class="count ccount">0</span>
                                                                                                        <div class="type-label">
                                                                                                            <p
                                                                                                                class="fz14 mb-xs-0">
                                                                                                                Children
                                                                                                            </p><span>2
                                                                                                                - Less than 12
                                                                                                                yrs</span>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div class="button-set">
                                                                                                        <button type="button"
                                                                                                            class="btn-add-c">
                                                                                                            <i
                                                                                                                class="fas fa-plus"></i>
                                                                                                        </button>
                                                                                                        <button type="button"
                                                                                                            class="btn-subtract-c">
                                                                                                            <i
                                                                                                                class="fas fa-minus"></i>
                                                                                                        </button>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div class="passengers-type">
                                                                                                    <div class="text"><span
                                                                                                        class="count incount">0</span>
                                                                                                        <div class="type-label">
                                                                                                            <p
                                                                                                                class="fz14 mb-xs-0">
                                                                                                                Infant
                                                                                                            </p><span>Less
                                                                                                                than 2
                                                                                                                yrs</span>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div class="button-set">
                                                                                                        <button type="button"
                                                                                                            class="btn-add-in">
                                                                                                            <i
                                                                                                                class="fas fa-plus"></i>
                                                                                                        </button>
                                                                                                        <button type="button"
                                                                                                            class="btn-subtract-in">
                                                                                                            <i
                                                                                                                class="fas fa-minus"></i>
                                                                                                        </button>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="cabin-selection">
                                                                                            <h6>Cabin Class</h6>
                                                                                            <div class="cabin-list">
                                                                                                <button type="button"
                                                                                                    class="label-select-btn">
                                                                                                    <span
                                                                                                        class="muiButton-label">Economy
                                                                                                    </span>
                                                                                                </button>
                                                                                                <button type="button"
                                                                                                    class="label-select-btn active">
                                                                                                    <span
                                                                                                        class="muiButton-label">
                                                                                                        Business
                                                                                                    </span>
                                                                                                </button>
                                                                                                <button type="button"
                                                                                                    class="label-select-btn">
                                                                                                    <span
                                                                                                        class="MuiButton-label">First
                                                                                                        Class </span>
                                                                                                </button>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <span>Business</span>
                                                                        </div>
                                                                    </div>
                                                                    <div class="top_form_search_button">
                                                                        <button class="btn btn_theme btn_md">Search</button>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="tab-pane fade" id="roundtrip" role="tabpanel"
                                                aria-labelledby="roundtrip-tab">
                                                <div class="row">
                                                    <div class="col-lg-12">
                                                        <div class="oneway_search_form">
                                                            <form action="#!">
                                                                <div class="row">
                                                                    <div class="col-lg-3  col-md-6 col-sm-12 col-12">
                                                                        <div class="flight_Search_boxed">
                                                                            <p>From</p>
                                                                            <input type="text" value="New York" />
                                                                            <span>JFK - John F. Kennedy International...</span>
                                                                            <div class="plan_icon_posation">
                                                                                <i class="fas fa-plane-departure"></i>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-lg-3  col-md-6 col-sm-12 col-12">
                                                                        <div class="flight_Search_boxed">
                                                                            <p>To</p>
                                                                            <input type="text" value="London " />
                                                                            <span>LCY, London city airport </span>
                                                                            <div class="plan_icon_posation">
                                                                                <i class="fas fa-plane-arrival"></i>
                                                                            </div>
                                                                            <div class="range_plan">
                                                                                <i class="fas fa-exchange-alt"></i>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-lg-4  col-md-6 col-sm-12 col-12">
                                                                        <div class="form_search_date">
                                                                            <div class="flight_Search_boxed date_flex_area">
                                                                                <div class="Journey_date">
                                                                                    <p>Journey date</p>
                                                                                    <input type="date" value="2022-05-05" />
                                                                                    <span>Thursday</span>
                                                                                </div>
                                                                                <div class="Journey_date">
                                                                                    <p>Return date</p>
                                                                                    <input type="date" value="2022-05-08" />
                                                                                    <span>Saturday</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-lg-2  col-md-6 col-sm-12 col-12">
                                                                        <div
                                                                            class="flight_Search_boxed dropdown_passenger_area">
                                                                            <p>Passenger, Class </p>
                                                                            <div class="dropdown">
                                                                                <button class="dropdown-toggle final-count"
                                                                                    data-toggle="dropdown" type="button"
                                                                                    id="dropdownMenuButton1"
                                                                                    data-bs-toggle="dropdown"
                                                                                    aria-expanded="false">
                                                                                    0 Passenger
                                                                                </button>
                                                                                <div class="dropdown-menu dropdown_passenger_info"
                                                                                    aria-labelledby="dropdownMenuButton1">
                                                                                    <div class="traveller-calulate-persons">
                                                                                        <div class="passengers">
                                                                                            <h6>Passengers</h6>
                                                                                            <div class="passengers-types">
                                                                                                <div class="passengers-type">
                                                                                                    <div class="text"><span
                                                                                                        class="count pcount">2</span>
                                                                                                        <div class="type-label">
                                                                                                            <p>Adult</p>
                                                                                                            <span>12+
                                                                                                                yrs</span>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div class="button-set">
                                                                                                        <button type="button"
                                                                                                            class="btn-add">
                                                                                                            <i
                                                                                                                class="fas fa-plus"></i>
                                                                                                        </button>
                                                                                                        <button type="button"
                                                                                                            class="btn-subtract">
                                                                                                            <i
                                                                                                                class="fas fa-minus"></i>
                                                                                                        </button>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div class="passengers-type">
                                                                                                    <div class="text"><span
                                                                                                        class="count ccount">0</span>
                                                                                                        <div class="type-label">
                                                                                                            <p
                                                                                                                class="fz14 mb-xs-0">
                                                                                                                Children
                                                                                                            </p><span>2
                                                                                                                - Less than 12
                                                                                                                yrs</span>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div class="button-set">
                                                                                                        <button type="button"
                                                                                                            class="btn-add-c">
                                                                                                            <i
                                                                                                                class="fas fa-plus"></i>
                                                                                                        </button>
                                                                                                        <button type="button"
                                                                                                            class="btn-subtract-c">
                                                                                                            <i
                                                                                                                class="fas fa-minus"></i>
                                                                                                        </button>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div class="passengers-type">
                                                                                                    <div class="text"><span
                                                                                                        class="count incount">0</span>
                                                                                                        <div class="type-label">
                                                                                                            <p
                                                                                                                class="fz14 mb-xs-0">
                                                                                                                Infant
                                                                                                            </p><span>Less
                                                                                                                than 2
                                                                                                                yrs</span>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div class="button-set">
                                                                                                        <button type="button"
                                                                                                            class="btn-add-in">
                                                                                                            <i
                                                                                                                class="fas fa-plus"></i>
                                                                                                        </button>
                                                                                                        <button type="button"
                                                                                                            class="btn-subtract-in">
                                                                                                            <i
                                                                                                                class="fas fa-minus"></i>
                                                                                                        </button>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="cabin-selection">
                                                                                            <h6>Cabin Class</h6>
                                                                                            <div class="cabin-list">
                                                                                                <button type="button"
                                                                                                    class="label-select-btn">
                                                                                                    <span
                                                                                                        class="muiButton-label">Economy
                                                                                                    </span>
                                                                                                </button>
                                                                                                <button type="button"
                                                                                                    class="label-select-btn active">
                                                                                                    <span
                                                                                                        class="muiButton-label">
                                                                                                        Business
                                                                                                    </span>
                                                                                                </button>
                                                                                                <button type="button"
                                                                                                    class="label-select-btn">
                                                                                                    <span
                                                                                                        class="MuiButton-label">First
                                                                                                        Class </span>
                                                                                                </button>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <span>Business</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="top_form_search_button">
                                                                    <button class="btn btn_theme btn_md">Search</button>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="tab-pane fade" id="multi_city" role="tabpanel"
                                                aria-labelledby="multi_city-tab">
                                                <div class="row">
                                                    <div class="col-lg-12">
                                                        <div class="oneway_search_form">
                                                            <form action="#!">
                                                                <div class="multi_city_form_wrapper">
                                                                    <div class="multi_city_form">
                                                                        <div class="row">
                                                                            <div class="col-lg-3 col-md-6 col-sm-12 col-12">
                                                                                <div class="flight_Search_boxed">
                                                                                    <p>From</p>
                                                                                    <input type="text" value="New York" />
                                                                                    <span>DAC, Hazrat Shahajalal
                                                                                        International...</span>
                                                                                    <div class="plan_icon_posation">
                                                                                        <i class="fas fa-plane-departure"></i>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-lg-3 col-md-6 col-sm-12 col-12">
                                                                                <div class="flight_Search_boxed">
                                                                                    <p>To</p>
                                                                                    <input type="text" value="London " />
                                                                                    <span>LCY, London city airport </span>
                                                                                    <div class="plan_icon_posation">
                                                                                        <i class="fas fa-plane-arrival"></i>
                                                                                    </div>
                                                                                    <div class="range_plan">
                                                                                        <i class="fas fa-exchange-alt"></i>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                                                                                <div class="form_search_date">
                                                                                    <div
                                                                                        class="flight_Search_boxed date_flex_area">
                                                                                        <div class="Journey_date">
                                                                                            <p>Journey date</p>
                                                                                            <input type="date"
                                                                                                value="2022-05-05" />
                                                                                            <span>Thursday</span>
                                                                                        </div>
                                                                                        <div class="Journey_date">
                                                                                            <p>Return date</p>
                                                                                            <input type="date"
                                                                                                value="2022-05-10" />
                                                                                            <span>Saturday</span>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-lg-2  col-md-6 col-sm-12 col-12">
                                                                                <div
                                                                                    class="flight_Search_boxed dropdown_passenger_area">
                                                                                    <p>Passenger, Class </p>
                                                                                    <div class="dropdown">
                                                                                        <button
                                                                                            class="dropdown-toggle final-count"
                                                                                            data-toggle="dropdown" type="button"
                                                                                            id="dropdownMenuButton1"
                                                                                            data-bs-toggle="dropdown"
                                                                                            aria-expanded="false">
                                                                                            0 Passenger
                                                                                        </button>
                                                                                        <div class="dropdown-menu dropdown_passenger_info"
                                                                                            aria-labelledby="dropdownMenuButton1">
                                                                                            <div
                                                                                                class="traveller-calulate-persons">
                                                                                                <div class="passengers">
                                                                                                    <h6>Passengers</h6>
                                                                                                    <div
                                                                                                        class="passengers-types">
                                                                                                        <div
                                                                                                            class="passengers-type">
                                                                                                            <div class="text">
                                                                                                                <span
                                                                                                                    class="count pcount">2</span>
                                                                                                                <div
                                                                                                                    class="type-label">
                                                                                                                    <p>Adult</p>
                                                                                                                    <span>12+
                                                                                                                        yrs</span>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                            <div
                                                                                                                class="button-set">
                                                                                                                <button
                                                                                                                    type="button"
                                                                                                                    class="btn-add">
                                                                                                                    <i
                                                                                                                        class="fas fa-plus"></i>
                                                                                                                </button>
                                                                                                                <button
                                                                                                                    type="button"
                                                                                                                    class="btn-subtract">
                                                                                                                    <i
                                                                                                                        class="fas fa-minus"></i>
                                                                                                                </button>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                        <div
                                                                                                            class="passengers-type">
                                                                                                            <div class="text">
                                                                                                                <span
                                                                                                                    class="count ccount">0</span>
                                                                                                                <div
                                                                                                                    class="type-label">
                                                                                                                    <p
                                                                                                                        class="fz14 mb-xs-0">
                                                                                                                        Children
                                                                                                                    </p><span>2
                                                                                                                        - Less
                                                                                                                        than 12
                                                                                                                        yrs</span>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                            <div
                                                                                                                class="button-set">
                                                                                                                <button
                                                                                                                    type="button"
                                                                                                                    class="btn-add-c">
                                                                                                                    <i
                                                                                                                        class="fas fa-plus"></i>
                                                                                                                </button>
                                                                                                                <button
                                                                                                                    type="button"
                                                                                                                    class="btn-subtract-c">
                                                                                                                    <i
                                                                                                                        class="fas fa-minus"></i>
                                                                                                                </button>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                        <div
                                                                                                            class="passengers-type">
                                                                                                            <div class="text">
                                                                                                                <span
                                                                                                                    class="count incount">0</span>
                                                                                                                <div
                                                                                                                    class="type-label">
                                                                                                                    <p
                                                                                                                        class="fz14 mb-xs-0">
                                                                                                                        Infant
                                                                                                                    </p><span>Less
                                                                                                                        than 2
                                                                                                                        yrs</span>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                            <div
                                                                                                                class="button-set">
                                                                                                                <button
                                                                                                                    type="button"
                                                                                                                    class="btn-add-in">
                                                                                                                    <i
                                                                                                                        class="fas fa-plus"></i>
                                                                                                                </button>
                                                                                                                <button
                                                                                                                    type="button"
                                                                                                                    class="btn-subtract-in">
                                                                                                                    <i
                                                                                                                        class="fas fa-minus"></i>
                                                                                                                </button>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div class="cabin-selection">
                                                                                                    <h6>Cabin Class</h6>
                                                                                                    <div class="cabin-list">
                                                                                                        <button type="button"
                                                                                                            class="label-select-btn">
                                                                                                            <span
                                                                                                                class="muiButton-label">Economy
                                                                                                            </span>
                                                                                                        </button>
                                                                                                        <button type="button"
                                                                                                            class="label-select-btn active">
                                                                                                            <span
                                                                                                                class="muiButton-label">
                                                                                                                Business
                                                                                                            </span>
                                                                                                        </button>
                                                                                                        <button type="b utton"
                                                                                                            class="label-select-btn">
                                                                                                            <span
                                                                                                                class="MuiButton-label">First
                                                                                                                Class </span>
                                                                                                        </button>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <span>Business</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="multi_city_form">
                                                                        <div class="row">
                                                                            <div class="col-lg-3 col-md-6 col-sm-12 col-12">
                                                                                <div class="flight_Search_boxed">
                                                                                    <p>From</p>
                                                                                    <input type="text" value="New York" />
                                                                                    <span>DAC, Hazrat Shahajalal
                                                                                        International...</span>
                                                                                    <div class="plan_icon_posation">
                                                                                        <i class="fas fa-plane-departure"></i>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-lg-3 col-md-6 col-sm-12 col-12">
                                                                                <div class="flight_Search_boxed">
                                                                                    <p>To</p>
                                                                                    <input type="text" value="London " />
                                                                                    <span>LCY, London city airport </span>
                                                                                    <div class="plan_icon_posation">
                                                                                        <i class="fas fa-plane-arrival"></i>
                                                                                    </div>
                                                                                    <div class="range_plan">
                                                                                        <i class="fas fa-exchange-alt"></i>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                                                                                <div class="form_search_date">
                                                                                    <div
                                                                                        class="flight_Search_boxed date_flex_area">
                                                                                        <div class="Journey_date">
                                                                                            <p>Journey date</p>
                                                                                            <input type="date"
                                                                                                value="2022-05-05" />
                                                                                            <span>Thursday</span>
                                                                                        </div>
                                                                                        <div class="Journey_date">
                                                                                            <p>Return date</p>
                                                                                            <input type="date"
                                                                                                value="2022-05-12" />
                                                                                            <span>Saturday</span>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-lg-2  col-md-6 col-sm-12 col-12">
                                                                                <div
                                                                                    class="flight_Search_boxed dropdown_passenger_area">
                                                                                    <p>Passenger, Class </p>
                                                                                    <div class="dropdown">
                                                                                        <button
                                                                                            class="dropdown-toggle final-count"
                                                                                            data-toggle="dropdown" type="button"
                                                                                            id="dropdownMenuButton1"
                                                                                            data-bs-toggle="dropdown"
                                                                                            aria-expanded="false">
                                                                                            0 Passenger
                                                                                        </button>
                                                                                        <div class="dropdown-menu dropdown_passenger_info"
                                                                                            aria-labelledby="dropdownMenuButton1">
                                                                                            <div
                                                                                                class="traveller-calulate-persons">
                                                                                                <div class="passengers">
                                                                                                    <h6>Passengers</h6>
                                                                                                    <div
                                                                                                        class="passengers-types">
                                                                                                        <div
                                                                                                            class="passengers-type">
                                                                                                            <div class="text">
                                                                                                                <span
                                                                                                                    class="count pcount">2</span>
                                                                                                                <div
                                                                                                                    class="type-label">
                                                                                                                    <p>Adult</p>
                                                                                                                    <span>12+
                                                                                                                        yrs</span>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                            <div
                                                                                                                class="button-set">
                                                                                                                <button
                                                                                                                    type="button"
                                                                                                                    class="btn-add">
                                                                                                                    <i
                                                                                                                        class="fas fa-plus"></i>
                                                                                                                </button>
                                                                                                                <button
                                                                                                                    type="button"
                                                                                                                    class="btn-subtract">
                                                                                                                    <i
                                                                                                                        class="fas fa-minus"></i>
                                                                                                                </button>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                        <div
                                                                                                            class="passengers-type">
                                                                                                            <div class="text">
                                                                                                                <span
                                                                                                                    class="count ccount">0</span>
                                                                                                                <div
                                                                                                                    class="type-label">
                                                                                                                    <p
                                                                                                                        class="fz14 mb-xs-0">
                                                                                                                        Children
                                                                                                                    </p><span>2
                                                                                                                        - Less
                                                                                                                        than 12
                                                                                                                        yrs</span>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                            <div
                                                                                                                class="button-set">
                                                                                                                <button
                                                                                                                    type="button"
                                                                                                                    class="btn-add-c">
                                                                                                                    <i
                                                                                                                        class="fas fa-plus"></i>
                                                                                                                </button>
                                                                                                                <button
                                                                                                                    type="button"
                                                                                                                    class="btn-subtract-c">
                                                                                                                    <i
                                                                                                                        class="fas fa-minus"></i>
                                                                                                                </button>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                        <div
                                                                                                            class="passengers-type">
                                                                                                            <div class="text">
                                                                                                                <span
                                                                                                                    class="count incount">0</span>
                                                                                                                <div
                                                                                                                    class="type-label">
                                                                                                                    <p
                                                                                                                        class="fz14 mb-xs-0">
                                                                                                                        Infant
                                                                                                                    </p><span>Less
                                                                                                                        than 2
                                                                                                                        yrs</span>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                            <div
                                                                                                                class="button-set">
                                                                                                                <button
                                                                                                                    type="button"
                                                                                                                    class="btn-add-in">
                                                                                                                    <i
                                                                                                                        class="fas fa-plus"></i>
                                                                                                                </button>
                                                                                                                <button
                                                                                                                    type="button"
                                                                                                                    class="btn-subtract-in">
                                                                                                                    <i
                                                                                                                        class="fas fa-minus"></i>
                                                                                                                </button>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div class="cabin-selection">
                                                                                                    <h6>Cabin Class</h6>
                                                                                                    <div class="cabin-list">
                                                                                                        <button type="button"
                                                                                                            class="label-select-btn">
                                                                                                            <span
                                                                                                                class="muiButton-label">Economy
                                                                                                            </span>
                                                                                                        </button>
                                                                                                        <button type="button"
                                                                                                            class="label-select-btn active">
                                                                                                            <span
                                                                                                                class="muiButton-label">
                                                                                                                Business
                                                                                                            </span>
                                                                                                        </button>
                                                                                                        <button type="button"
                                                                                                            class="label-select-btn">
                                                                                                            <span
                                                                                                                class="MuiButton-label">First
                                                                                                                Class </span>
                                                                                                        </button>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <span>Business</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col-lg-12">
                                                                        <div class="add_multy_form">
                                                                            <button type="button" id="addMulticityRow">+ Add
                                                                                another
                                                                                flight</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="top_form_search_button">
                                                                    <button class="btn btn_theme btn_md">Search</button>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default StaticEngine
