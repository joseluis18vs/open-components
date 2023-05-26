import '../../../../styles/components/grids/split_screen_vertical/_ssv_1x4_w.scss'

const SplitScreenVert1x4 = () => {
    return (
        <div className="ssv1x4--grid-container">
            <div className="ssv1x4--left-colum">
                <div className="ssv1x4--left-content">Cont-1</div>
            </div>
            <div className="ssv1x4--right-column">
                <div className="ssv1x4--right-content">Cont-2</div>
                <div className="ssv1x4--right-content">Cont-3</div>
                <div className="ssv1x4--right-content">Cont-4</div>
                <div className="ssv1x4--right-content">Cont-5</div>
            </div>
        </div>
    );
};

export default SplitScreenVert1x4;