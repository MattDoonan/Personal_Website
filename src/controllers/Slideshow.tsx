import React, {useCallback, useEffect, useState} from 'react';
import '../css/SlideShow.css'
import MySlide from "./Slides";

interface SlideProps {
    direction: 'left' | 'right';
    photosList: string[];

}

const SlideShow: React.FC<SlideProps> = ({
                        direction,
                         photosList
                         }) => {

    const [photos] = useState(photosList);
    const [albumIndex, setAlbumIndex] = useState(1);
    const [imageStack, setImageStack] = useState<string[]>([photos[1]]);
    const [imageStackDeg, setImageStackDeg] = useState<number[]>([Math.round(Math.random() * (6 - (-6)) - 6)]);
    const [imageStackIteration, setImageStackIteration] = useState<number[]>([0]);
    const [imageStackIterationPoint, setImageStackIterationPoint] = useState<number>(0);

    const updateAlbum = () => {
        const newIndex = (albumIndex + 1) % photos.length;
        setAlbumIndex(newIndex);
        const newDeg = Math.round(Math.random() * (6 - (-6)) - 6);
        let point = imageStackIterationPoint;
        point += 1;
        setImageStackIterationPoint(point);
        if (imageStack.length === 0) {
            setImageStack([photos[newIndex]]);
            setImageStackDeg([newDeg]);
            setImageStackIteration([point])
        } else if (imageStack.length < photos.length) {
            setImageStack([...imageStack, photos[newIndex]]);
            setImageStackDeg([...imageStackDeg, newDeg]);
            setImageStackIteration([...imageStackIteration, point]);
        } else {
            setImageStack([...imageStack.slice(1), photos[newIndex]]);
            setImageStackDeg([...imageStackDeg.slice(1), newDeg]);
            setImageStackIteration([...imageStackIteration.slice(1), point]);
        }
    };

    const updateAlbumCallback = useCallback(updateAlbum, [albumIndex, imageStack, imageStackDeg, imageStackIteration, imageStackIterationPoint, photos]);
    useEffect(() => {
        setTimeout(updateAlbumCallback, 5000);
    }, [updateAlbumCallback]);


    return (
        <div id="slideShow" className="slideshow">
            {imageStack.map((image, index) => (
                <MySlide
                    key={imageStackIteration[index]}
                    direction={direction}
                    in={true}
                    photo={image}
                    index={imageStackDeg[index]}
                />
            ))}
        </div>
    );
};

export default SlideShow;