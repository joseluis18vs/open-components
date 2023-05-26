import '../../../../styles/components/grids/split_screen_vertical/_ssv_4x1_w.scss'

const SplitScreenVert4x1 = () => {
    return (
        <div className="ssv4x1w--grid-container">
            <div className="ssv4x1w--left-colum">
                <div className="ssv4x1w--left-content">Cont-1</div>
                <div className="ssv4x1w--left-content">Cont-2</div>
                <div className="ssv4x1w--left-content">Cont-3</div>
                <div className="ssv4x1w--left-content">Cont-5</div>
            </div>
            <div className="ssv4x1w--right-column">
                <div className="ssv4x1w--right-content">Cont-6</div>
            </div>
        </div>
    );
};

export default SplitScreenVert4x1;