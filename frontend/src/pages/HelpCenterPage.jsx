import React from "react";
import SearchComponent from "../components/HelpCenter/SearchComponent";
import DisplayCards from "../components/HelpCenter/DisplayCards";
import HelpFaqSection from "../components/HelpCenter/HelpFaqSection";
import Navbar from "../components/Navbar";
import PipeoFooter from "../components/footer/PipeoFooter";

export default function HelpCenterPage(){

    return(
        <div>
            <Navbar/>
            <SearchComponent/>
            <DisplayCards/>
            <HelpFaqSection/>
            <PipeoFooter/>
        </div>
    )
}