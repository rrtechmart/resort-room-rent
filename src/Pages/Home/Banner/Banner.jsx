import caro1 from '../../../assets/image/carousel/caro1.png'
import caro2 from '../../../assets/image/carousel/caro2.png'
import caro3 from '../../../assets/image/carousel/caro3.png'
import caro4 from '../../../assets/image/carousel/caro4.png'
import caro5 from '../../../assets/image/carousel/caro5.png'

const Banner = () => {
    return (
        <div className="carousel max-w-screen ">
            <div id="slide1" className="carousel-item relative object-cover max-h-screen w-full">
                <img src={caro1} className="w-full py-10" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative object-cover max-h-screen w-full">
                <img src={caro2} className="w-full py-10" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative max-h-screen w-full">
                <img src={caro3}  className="w-full py-10" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative max-h-screen w-full">
                <img src={caro4} className="w-full py-10" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide5" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative max-h-screen w-full">
                <img src={caro5} className="w-full py-10" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;