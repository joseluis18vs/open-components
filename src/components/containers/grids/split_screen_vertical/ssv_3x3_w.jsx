import '../../../../styles/components/grids/split_screen_vertical/_ssv_3x3_w.scss'

const SplitScreenVert3x3 = () => {
    return (
        <div className="ssv3x3w--grid-container">
            <div className="ssv3x3w--left-colum">
                <div className="ssv3x3w--left-content">Cont-1</div>
                <div className="ssv3x3w--left-content">Cont-2</div>
                <div className="ssv3x3w--left-content">Cont-3</div>
            </div>
            <div className="ssv3x3w--right-column">
                <div className="ssv3x3w--right-content">Cont-4</div>
                <div className="ssv3x3w--right-content">Cont-5</div>
                <div className="ssv3x3w--right-content">Cont-6</div>
            </div>
        </div>
    );
};

export default SplitScreenVert3x3;