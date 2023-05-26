import '../../../../styles/components/grids/split_screen_vertical/_ssv_3x4_w.scss'

const SplitScreenVert3x4 = () => {
    return (
        <div className="ssv3x4w--grid-container">
            <div className="ssv3x4w--left-colum">
                <div className="ssv3x4w--left-content">Cont-1</div>
                <div className="ssv3x4w--left-content">Cont-2</div>
                <div className="ssv3x4w--left-content">Cont-3</div>
            </div>
            <div className="ssv3x4w--right-column">
                <div className="ssv3x4w--right-content">Cont-4</div>
                <div className="ssv3x4w--right-content">Cont-5</div>
                <div className="ssv3x4w--right-content">Cont-6</div>
                <div className="ssv3x4w--right-content">Cont-7</div>
            </div>
        </div>
    );
};

export default SplitScreenVert3x4;