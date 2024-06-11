import { useState } from 'react';
import './Album.css'

const Album = ({ setModal, whichArticle }) => {


    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        "/images/장봉도1.jpg",
        "/images/장봉도2.jpg",
        "/images/장봉도3.jpg",
        "/images/장봉도4.jpg",
        "/images/장봉도5.jpg",
        "/images/장봉도6.jpg",
        "/images/장봉도7.jpg"
    ];

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const handleNext = () => {
        if (currentIndex < images.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };


    return (
        <>
            <div className='modal_back'>
            </div>
            <div className='modal_Fishing articleModal'>
                <div className='xBtn' onClick={() => setModal(false)}>X</div>
                <h2>{whichArticle.title}</h2>
                <div>{whichArticle.contents}</div>
                <div className='albumBox'>
                    <div id='albumList' style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                        {images.map((src, index) => (
                            <div key={index}>
                                <img src={src} alt="" />
                            </div>
                        ))}
                    </div>
                </div>
                <div className='prevBtn Cbtn' onClick={handlePrev}>-</div>
                <div className='nextBtn Cbtn' onClick={handleNext}>+</div>
            </div>
        </>
    )
}


export default Album;