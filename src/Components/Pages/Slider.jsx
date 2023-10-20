
const Slideshow = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item md:h-96 h-64 relative w-full">
                <div className="hero mt-10 " style={{ backgroundImage: `url(https://i.ibb.co/V9MxtDK/HD-wallpaper-asus-carbon-logo-grunge-art-carbon-background-creative-asus-black-logo-asus-logo-asus.jpg)` }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-rancho font-bold">I <span className=' text-red-600'>Tech</span> bd</h1>
                            <p className="mb-5 font-rancho">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button className="btn btn-primary">Order now</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item md:h-96 h-64 relative w-full">
                <div className="hero mt-10 " style={{ backgroundImage: `url(https://i.ibb.co/ZKr5s2n/wp2668027.jpg)` }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-rancho font-bold">I <span className=' text-red-600'>Tech</span> bd</h1>
                            <p className="mb-5 font-rancho">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button className="btn btn-primary">Order now</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item md:h-96 h-64 relative w-full">
                <div className="hero mt-10 " style={{ backgroundImage: `url(https://i.ibb.co/GQfXfSd/HD-wallpaper-samsung-logo.jpg)` }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-rancho font-bold">I <span className=' text-red-600'>Tech</span> bd</h1>
                            <p className="mb-5 font-rancho">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button className="btn btn-primary">Order now</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item md:h-96 h-64 relative w-full">
                <div className="hero mt-10 " style={{ backgroundImage: `url(https://i.ibb.co/KmwZRN4/2c46a7151e9739826f9ac8ed9da5e2ba.jpg)` }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-rancho font-bold">I <span className=' text-red-600'>Tech</span> bd</h1>
                            <p className="mb-5 font-rancho">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button className="btn btn-primary">Order now</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    )
}

export default Slideshow