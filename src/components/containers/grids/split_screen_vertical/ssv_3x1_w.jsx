import '../../../../styles/components/grids/split_screen_vertical/_ssv_3x1_w.scss'

const SplitScreenVert3x1 = () => {
    return (
        <div className="ssv3x1w--grid-container">
            <div className="ssv3x1w--left-colum">
                <div className="ssv3x1w--left-content">Cont-1</div>
                <div className="ssv3x1w--left-content">Cont-2</div>
                <div className="ssv3x1w--left-content">Cont-3</div>
            </div>
            <div className="ssv3x1w--right-column">
                <div className="ssv3x1w--right-content">Cont-4</div>
            </div>
        </div>
    );
};

export default SplitScreenVert3x1;