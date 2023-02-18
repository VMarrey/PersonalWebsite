import React from 'react'
import {Carousel} from 'react-bootstrap'
import "./SlideShow.css"

const HeroSlider = () => {
    return (
        <>
            <Carousel className = "container69">
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block img"
                        src="https://images.unsplash.com/photo-1608447714925-599deeb5a682?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <a className = "carousellink2" href = ""><h3>Articles</h3></a>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block img"
                        src="https://images.unsplash.com/photo-1636953056323-9c09fdd74fa6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
                    />
                    <Carousel.Caption>
                    <a className = "carousellinks" href = "/#/Projects"><h3>Projects</h3></a>
                        
                    </Carousel.Caption>
                </Carousel.Item>
                            </Carousel>
        </>
    )
}

export default HeroSlider