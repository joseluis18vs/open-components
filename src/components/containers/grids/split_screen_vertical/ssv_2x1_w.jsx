import '../../../../styles/components/grids/split_screen_vertical/_ssv_2x1_w.scss'

const SplitScreenVert2x1 = () => {
    return (
        <div className="ssv2x1w--grid-container">
            <div className="ssv2x1w--left-colum">
                <div className="ssv2x1w--left-content">Cont-1</div>
                <div className="ssv2x1w--left-content">Cont-2</div>
            </div>
            <div className="ssv2x1w--right-column">
                <div className="ssv2x1w--right-content">Cont-3</div>
            </div>
        </div>
    );
};

export default SplitScreenVert2x1;