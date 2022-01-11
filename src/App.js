import React from 'react'
import Card from './components/Card.component'
import Hero from './components/Hero.component'
import Nav from './components/Navbar.component'
import data from './data.js';
console.log(data)
export default function App() {
    const cardElements = data.map(item => {
        return (<Card
            img = {item.coverImg}
            rating = {item.stats.rating}
            reviewCount = {item.stats.reviewCount}
            location = {item.location}
            title = {item.title}
            price = {item.price}
        />)
    })
    console.log(cardElements)
    return (
        <div className='main'>
            <Nav></Nav>
            <Hero></Hero>
            <div className='cards'>
                {cardElements}
            </div>
        </div>
    )
}
