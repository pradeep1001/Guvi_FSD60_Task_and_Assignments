import React from 'react'
import Navbar from '../../component/Navbar/index'
import Footer from '../../component/Footer/index'
import Card from '../../component/Card'

import './homepage.css'


const Homepage = () => {

    return (
        <div className='homepage'>
            <Navbar />
            <div className="hero-section">
                <h1>Shop in style</h1>
                <p>With this shop hompeage template</p>
            </div>

            <div className="content-wrapper">
                {
                    // Rendering the products
                    products.map((product, index) => (
                        <Card
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            price={product.price}
                            strikeText={product.strikeText}
                            stars={product.stars}
                            sale={product.sale}
                        />
                    ))
                }

            </div>

            <Footer />
        </div>
    )
}


// products details || update this data to update the product
const products = [
    {
        id: 1,
        title: 'Wireless Headphones',
        price: '$59.99',
        strikeText: '$79.99',
        stars: 4,
        sale: true
    },
    {
        id: 2,
        title: 'Smartphone',
        price: '$699.99',
        strikeText: '$799.99',
        stars: 5,
        sale: true
    },
    {
        id: 3,
        title: '4K Television',
        price: '$1199.99',
        strikeText: '$1399.99',
        stars: 4,
        sale: false
    },
    {
        id: 4,
        title: 'Bluetooth Speaker',
        price: '$29.99',
        strikeText: '$39.99',
        stars: 3,
        sale: true
    },
    {
        id: 5,
        title: 'Laptop',
        price: '$999.99',
        strikeText: '$1199.99',
        stars: 5,
        sale: false
    },
    {
        id: 6,
        title: 'Fitness Tracker',
        price: '$49.99',
        strikeText: '$69.99',
        stars: 4,
        sale: true
    },
    {
        id: 7,
        title: 'Smartwatch',
        price: '$199.99',
        strikeText: '$249.99',
        stars: 4,
        sale: false
    },
    {
        id: 8,
        title: 'Tablet',
        price: '$329.99',
        strikeText: '$379.99',
        stars: 5,
        sale: true
    }
];

export default Homepage