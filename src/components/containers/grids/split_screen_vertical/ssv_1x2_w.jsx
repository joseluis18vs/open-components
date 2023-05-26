import '../../../../styles/components/grids/split_screen_vertical/_ssv_1x2_w.scss'

const SplitScreenVert1x2 = () => {
    return (
        <div className="ssv1x2--grid-container">
            <div className="ssv1x2--left-colum">
                <div className="ssv1x2--left-content">Cont-1</div>
            </div>
            <div className="ssv1x2--right-column">
                <div className="ssv1x2--right-content">Cont-2</div>
                <div className="ssv1x2--right-content">Cont-3</div>
            </div>
        </div>
    );
};

export default SplitScreenVert1x2;