import '../styles/Projects.css';
import React, { useEffect } from 'react';
import bliss from "../assets/bliss-website.png";
import rightarrow from "../assets/right-arrow.png"
import nexus from "../assets/nexus-mod.png";
import community from "../assets/projects-community.png";
import overload from "../assets/Overload-website.png";
import portfolio from "../assets/portofolio.png";


const Projects = () => {

    useEffect(() => {
        const handleLoad = () => {
            slider();
        };

        window.addEventListener('load', handleLoad);

        return () => {
            window.removeEventListener('load', handleLoad);
        };
    }, []);

    const slider = () => {
        const carousel = document.querySelector(".carousel"),
            firstImg = carousel.querySelectorAll(".card")[0],
            arrowIcons = document.querySelectorAll(".wrapper i");
        let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;
        const showHideIcons = () => {
            // showing and hiding prev/next icon according to carousel scroll left value
            let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // getting max scrollable width
            arrowIcons[0].style.display = carousel.scrollLeft === 0 ? "none" : "block";
            arrowIcons[1].style.display = carousel.scrollLeft === scrollWidth ? "none" : "block";
        }
        arrowIcons.forEach(icon => {
            icon.addEventListener("click", () => {
                let firstImgWidth = firstImg.clientWidth + 14; // getting first img width & adding 14 margin value
                // if clicked icon is left, reduce width value from the carousel scroll left else add to it
                carousel.scrollLeft += icon.id === "left" ? -firstImgWidth : firstImgWidth;
                setTimeout(() => showHideIcons(), 60); // calling showHideIcons after 60ms
            });
        });
        const autoSlide = () => {
            // if there is no image left to scroll then return from here
            if (carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) > -1 || carousel.scrollLeft <= 0) return;
            positionDiff = Math.abs(positionDiff); // making positionDiff value to positive
            let firstImgWidth = firstImg.clientWidth + 14;
            // getting difference value that needs to add or reduce from carousel left to take middle img center
            let valDifference = firstImgWidth - positionDiff;
            if (carousel.scrollLeft > prevScrollLeft) { // if user is scrolling to the right
                return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
            }
            // if user is scrolling to the left
            carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
        }
        const dragStart = (e) => {
            // updatating global variables value on mouse down event
            isDragStart = true;
            prevPageX = e.pageX || e.touches[0].pageX;
            prevScrollLeft = carousel.scrollLeft;
        }
        const dragging = (e) => {
            // scrolling images/carousel to left according to mouse pointer
            if (!isDragStart) return;
            e.preventDefault();
            isDragging = true;
            carousel.classList.add("dragging");
            positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
            carousel.scrollLeft = prevScrollLeft - positionDiff;
            showHideIcons();
        }
        const dragStop = () => {
            isDragStart = false;
            carousel.classList.remove("dragging");
            if (!isDragging) return;
            isDragging = false;
            autoSlide();
        }
        carousel.addEventListener("mousedown", dragStart);
        carousel.addEventListener("touchstart", dragStart);
        document.addEventListener("mousemove", dragging);
        carousel.addEventListener("touchmove", dragging);
        document.addEventListener("mouseup", dragStop);
        carousel.addEventListener("touchend", dragStop);
    }


    return (
        <section id='projects'>
            <p className="section__text__p1">Browse My Recent</p>
            <h1 className='title' id='a'>Projects</h1>
            <div className="content">
                <div class="wrapper">
                    <i id="left" class="fa-solid fa-angle-left"></i>
                    <div class="carousel">
                        <div className="card">
                            <img src={bliss}
                                alt="project"
                                draggable='false' />
                            <div className="group-text">
                                <h3>Bliss Website</h3>
                                <div className='divider'>
                                    <div className='icons'>
                                        {/* <p>Github</p>
                                        <img src={rightarrow} alt="fechita" /> */}
                                    </div>
                                    <p>Html, Css, Js, Firebase</p>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <img src={nexus}
                                alt="project"
                                draggable='false' />
                            <div className="group-text">
                                <h3>Nexus Mod</h3>
                                <div className='divider'>
                                    <div className='icons'>
                                        {/* <p>Github</p>
                                        <img src={rightarrow} alt="fechita" /> */}
                                    </div>
                                    <p>WPF .Net Framework - C#</p>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <img src={community}
                                alt="project"
                                draggable='false' />
                            <div className="group-text">
                                <h3>Community Manager Website</h3>
                                <div className="divider">
                                    <div className='icons'>
                                        {/* <p>Github</p>
                                        <img src={rightarrow} alt="fechita" /> */}
                                    </div>
                                    <p>Html, Css</p>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <img src={overload}
                                alt="project"
                                draggable='false' />
                            <div className="group-text">
                                <h3>Overload Website</h3>
                                <div className="divider">
                                    <div className='icons'>
                                        {/* <p>Github</p>
                                        <img src={rightarrow} alt="fechita" /> */}
                                    </div>
                                    <p>Html, Css</p>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <img src={portfolio}
                                alt="project"
                                draggable='false' />
                            <div className="group-text">
                                <h3>My Portfolio</h3>
                                <div className="divider">
                                    <div className='icons'>
                                        {/* <p>Github</p>
                                        <img src={rightarrow} alt="fechita" /> */}
                                    </div>
                                    <p>React Js</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <i id="right" class="fa-solid fa-angle-right"></i>
                </div>
            </div>
        </section>
    );

}

export default Projects;
