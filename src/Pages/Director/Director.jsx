import React from 'react';
import './director.css';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import director_img from '../../assets/director.jpeg';
import { AppContext } from "../../Components/AppContext";
import { useContext } from "react";

const Director = () => {
    const { theme, settheme } = useContext(AppContext);
    return (
        <>
        <Navbar/>
        <div className={`font-dosis bg-${theme}bg text-${theme}txt pt-10`}>
            <div>
                <div className="image mx-auto w-full rounded-full max-w-[300px]">
                    <img src={director_img} className='rounded-full' alt="Director" />
                </div>
                <div className="name text-2xl font-bold text-center">
                    <h2>Prof. O. R. Jaiswal</h2>
                </div>
            </div>
            <div className="pos text-lg font-bold text-center">
                <h4>Director, NIT Goa</h4>
            </div>
            <div className="mx-auto w-full text-center my-6 text-sm font-bold">
                <h5> Phone : +91-0832-2404200  |  E-mail : director@nitgoa.ac.in </h5>
            </div>
            <div className="p-8 text-xx text-justify">
                Prof. O. R. Jaiswal, took over the charge as Director of NIT Goa on 8th June 2023.
                He is on deputation from the Visvesvaraya National Institute of Technology (VNIT),
                Nagpur, wherein, he is a Professor at the Department of Applied Mechanics.
                His basic field is Structural Engineering with research work in the areas related
                to earthquake analysis of structures, tuned mass dampers for seismic and wind response control,
                Dynamic response of Railway Tracks etc.He had graduated in Civil Engineering from
                Visvesvaraya Regional Engineering College (VRCE), Nagpur (Now, VNIT) in 1987;
                completed his Masters in 1991 and Doctoral degree in 1995 from the Indian Institute of Science,
                Bangalore. Subsequently, he was a post-doctoral fellow at the University of Liverpool
                for a period of about two years.He joined as faculty at VRCE in 1998. After becoming Professor in 2008, he
                was Head of the Department from 2010 to 2012 and then Dean (Academics) from 2013 to 2016. During his
                deanship, VNIT Nagpur had initiated the Student Mentor Program (SMP), wherein, first year UG students were
                mentored by third year students. This SMP is very effective in handling the anxiety and curiosity of new
                entrants at early stage.

                Professor Jaiswal, has coordinated funded R&D projects from MHRD, DST, CSIR and World Bank. In a
                collaborative project with IIT Kanpur, he developed Guidelines for Seismic Design of Liquid Storage Tanks.
                He is a member of BIS committees for earthquake and wind codes. He has supervised seven Ph.D. students. He
                has more than eighty scholarly papers to his credit.
            </div>
        </div>
        <Footer/>
        </>
    );
}



export default Director;
