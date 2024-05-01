import { SlideshowLightbox } from 'lightbox.js-react';
import 'lightbox.js-react/dist/index.css';

export default function SinglProductImg({ img, alt }) {
    return (
        <SlideshowLightbox showThumbnails={true}>
            <img src={`/images/${img}.png`} alt={alt} />
        </SlideshowLightbox>
    );
};