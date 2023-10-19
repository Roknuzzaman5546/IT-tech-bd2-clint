import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


// const spanStyle = {
//     padding: '20px',
//     background: '#efefef',
//     color: '#000000'
// }

const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '400px'
}
const slideImages = [
    {
        url: 'https://i.ibb.co/V9MxtDK/HD-wallpaper-asus-carbon-logo-grunge-art-carbon-background-creative-asus-black-logo-asus-logo-asus.jpg',
        caption: 'Asus'
    },
    {
        url: 'https://i.ibb.co/ZKr5s2n/wp2668027.jpg',
        caption: 'Apple'
    },
    {
        url: 'https://i.ibb.co/GQfXfSd/HD-wallpaper-samsung-logo.jpg',
        caption: 'Intel'
    }
];


const Slideshow = () => {
    return (
        <div className="slide-container">
            <Slide>
                {slideImages.map((slideImage, index) => (
                    <div key={index}>
                        <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                            <span className='btn btn-neutral'>{slideImage.caption}</span>
                        </div>
                    </div>
                ))}
            </Slide>
        </div>
    )
}

export default Slideshow