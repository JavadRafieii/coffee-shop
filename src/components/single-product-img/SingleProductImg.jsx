import { SlideshowLightbox } from 'lightbox.js-react';
import 'lightbox.js-react/dist/index.css';

export default function SinglProductImg({ img }) {
    return (
        <SlideshowLightbox showThumbnails={true}>
            <img src={`/images/${img}.png`} alt='...' />
        </SlideshowLightbox>
    );
};