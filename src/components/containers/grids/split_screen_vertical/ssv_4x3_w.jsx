import '../../../../styles/components/grids/split_screen_vertical/_ssv_4x3_w.scss'

const SplitScreenVert4x3 = () => {
    return (
        <div className="ssv4x3w--grid-container">
            <div className="ssv4x3w--left-colum">
                <div className="ssv4x3w--left-content">Cont-1</div>
                <div className="ssv4x3w--left-content">Cont-2</div>
                <div className="ssv4x3w--left-content">Cont-3</div>
                <div className="ssv4x3w--left-content">Cont-4</div>
            </div>
            <div className="ssv4x3w--right-column">
                <div className="ssv4x3w--right-content">Cont-5</div>
                <div className="ssv4x3w--right-content">Cont-6</div>
                <div className="ssv4x3w--right-content">Cont-7</div>
            </div>
        </div>
    );
};

export default SplitScreenVert4x3;