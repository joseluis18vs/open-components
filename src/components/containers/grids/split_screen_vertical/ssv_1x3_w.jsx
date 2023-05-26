import '../../../../styles/components/grids/split_screen_vertical/_ssv_1x3_w.scss'

const SplitScreenVert1x3 = () => {
    return (
        <div className="ssv1x3--grid-container">
            <div className="ssv1x3--left-colum">
                <div className="ssv1x3--left-content">Cont-1</div>
            </div>
            <div className="ssv1x3--right-column">
                <div className="ssv1x3--right-content">Cont-2</div>
                <div className="ssv1x3--right-content">Cont-3</div>
                <div className="ssv1x3--right-content">Cont-4</div>
            </div>
        </div>
    );
};

export default SplitScreenVert1x3;