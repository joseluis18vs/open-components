import '../../../../styles/components/grids/split_screen_vertical/_ssv_2x3_w.scss'

const SplitScreenVert2x3 = () => {
    return (
        <div className="ssv2x3w--grid-container">
            <div className="ssv2x3w--left-colum">
                <div className="ssv2x3w--left-content">Cont-1</div>
                <div className="ssv2x3w--left-content">Cont-2</div>
            </div>
            <div className="ssv2x3w--right-column">
                <div className="ssv2x3w--right-content">Cont-3</div>
                <div className="ssv2x3w--right-content">Cont-4</div>
                <div className="ssv2x3w--right-content">Cont-5</div>
            </div>
        </div>
    );
};

export default SplitScreenVert2x3;