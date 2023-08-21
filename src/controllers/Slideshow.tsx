import {CardMedia, Slide} from "@mui/material";
import '../css/SlideShow.css'
interface SlideProps {
    direction: 'left' | 'right';
    in: boolean;
    mountOnEnter?: boolean;
    unmountOnExit?: boolean;
    photo: string;
    index: number;
}

const MySlide: React.FC<SlideProps> = ({
               direction,
               in: showNewPhoto,
               mountOnEnter = false,
               unmountOnExit = false,
               photo,
               index
               }) => {

    const customStyle: React.CSSProperties = {
        '--rotate': `${index}deg` // Ensure that index is a valid number here
    } as React.CSSProperties;

    console.log(index);
    return (
        <div className={'slide'} style={customStyle}>
            <Slide direction={direction} in={showNewPhoto} mountOnEnter={mountOnEnter} unmountOnExit={unmountOnExit}>
                <CardMedia
                    component="img"
                    image={photo}
                    alt="flag"
                    className="image"
                    style={customStyle}
                />
            </Slide>
        </div>

    );
};
export default MySlide;