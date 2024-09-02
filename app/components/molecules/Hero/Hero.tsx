import './Hero.scss'

function Hero() {
  return (
    <section className='hero--section'>
    <div className="hero--container">
        <div>
            <h1 className='hero--title'>
                FIND CLOTHES<br /> THAT MATCHES<br /> YOUR STYLE
            </h1>
        </div>
        <div className='hero--text-container'>
            <p className='hero--text'>
                Browse through our diverse range of meticulously crafted garments,
                designed to bring out your individuality and cater to your sense of style.
            </p>
        </div>
        <div>
            <button className='hero--btn'>
                Shop Now
            </button>
        </div>
        <div className='hero--stats-container'>
            <div className='hero--stats'>
                <h3>
                    200+
                </h3>
                <p>
                    International Brands
                </p>
            </div>
            <div className='hero--stats'>
                <h3>
                    2,000+
                </h3>
                <p>
                    High-Quality products
                </p>
            </div>
            <div className='hero--stats'>
                <h3>
                    30,000+
                </h3>
                <p>
                    Happy Customers
                </p>
            </div>            
        </div>
    </div>
    </section>
  )
}

export default Hero