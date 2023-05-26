import '../../../../styles/components/grids/split_screen_vertical/_ssv_2x4_w.scss'

const SplitScreenVert2x4 = () => {
    return (
        <div className="ssv2x4w--grid-container">
            <div className="ssv2x4w--left-colum">
                <div className="ssv2x4w--left-content">Cont-1</div>
                <div className="ssv2x4w--left-content">Cont-2</div>
            </div>
            <div className="ssv2x4w--right-column">
                <div className="ssv2x4w--right-content">Cont-3</div>
                <div className="ssv2x4w--right-content">Cont-4</div>
                <div className="ssv2x4w--right-content">Cont-5</div>
                <div className="ssv2x4w--right-content">Cont-6</div>
            </div>
        </div>
    );
};

export default SplitScreenVert2x4;