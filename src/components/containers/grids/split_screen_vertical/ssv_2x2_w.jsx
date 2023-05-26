import '../../../../styles/components/grids/split_screen_vertical/_ssv_2x2_w.scss'

const SplitScreenVert2x2 = () => {
    return (
        <div className="ssv2x2w--grid-container">
            <div className="ssv2x2w--left-colum">
                <div className="ssv2x2w--left-content">Cont-1</div>
                <div className="ssv2x2w--left-content">Cont-2</div>
            </div>
            <div className="ssv2x2w--right-column">
                <div className="ssv2x2w--right-content">Cont-3</div>
                <div className="ssv2x2w--right-content">Cont-4</div>
            </div>
        </div>
    );
};

export default SplitScreenVert2x2;