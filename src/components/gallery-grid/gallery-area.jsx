import React from 'react';
import { useState } from 'react';
import ImageLightBox from '../common/popup-modal/image-lightbox';

const gallery_items = [
    { img: '/assets/newimage/GSM1.jpg', category: 'Education' },
    { img: '/assets/newimage/GSM2.jpg', category: 'Education' },
    { img: '/assets/newimage/GSM12.jpg', category: 'Education' },
    { img: '/assets/newimage/GSM4.jpg', category: 'Marketing' },
    { img: '/assets/newimage/GSM8.jpg', category: 'Marketing' },
    { img: '/assets/newimage/GSM11.jpg', category: 'Development' },
    { img: '/assets/newimage/GSM9.jpg', category: 'Development' },
    { img: '/assets/newimage/GSM13.jpg', category: 'Health' },
    { img: '/assets/newimage/GSM14.jpg', category: 'Health' },
    { img: '/assets/newimage/GSM15.jpg', category: 'Health' }
]

const uniqueItems = gallery_items.filter( (arr, index, self) =>
    index === self.findIndex( ( i ) => ( i.img === arr.img && i.State === arr.State ) )
)

const uniq_categories = ['All', ...new Set( gallery_items.map( item => item.category ) ) ]

const GalleryArea = () => {
    const [items, setItems] = useState(uniqueItems);
    // category
    const [category, setCategory] = useState('All');
    // photoIndex
    const [photoIndex, setPhotoIndex] = useState(null);
    // image open state
    const [open, setOpen] = useState(false);
    // images
    const images = items.map(item => item.img)
    // handleCategory
    const handleCategory = (category) => {
        setCategory(category)
        if (category === 'All') {
            setItems(uniqueItems)
        } else {
            setItems(gallery_items.filter(item => item.category === category))
        }
    }
    // handleImagePopup
    const handleImagePopup = (index) => {
        setPhotoIndex(index)
        setOpen(true)
    }

    return (
        <>
            <div className="edu-gallery-area edu-section-gap">
                <div className="container">
                    <div className="isotope-wrapper">
                        <div className="isotop-button button-transparent isotop-filter">
                            {uniq_categories.map((c, i) => (
                                <button key={i} onClick={() => handleCategory(c)}
                                className={`${category === c ? 'is-checked' : ''}`}>
                                    <span className="filter-text">{c}</span>
                                </button>
                            ))}
                        </div>
                        <div className="isotope-list gallery-grid-wrap">
                            <div id="animated-thumbnials" className="edublink-react-gallery-grid">
                                <div className="row g-5">
                                    {items.map((item, i) => (
                                        <div key={i} className="col-lg-4 col-md-6" style={{ cursor: 'pointer' }}>
                                            <div onClick={()=> handleImagePopup(i)} className="edu-popup-image edu-gallery-grid w-100">
                                                <div className="thumbnail">
                                                    <img className='w-100' src={item.img} alt="Gallery Image" />
                                                </div>
                                                <div className="zoom-icon">
                                                    <i className="icon-69"></i>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* image light box start */}
            <ImageLightBox images={images} open={open} setOpen={setOpen}
                photoIndex={photoIndex} setPhotoIndex={setPhotoIndex} />
            {/* image light box end */}
        </>
    )
}

export default GalleryArea;