import '../../../../styles/components/grids/split_screen_vertical/_ssv_4x2_w.scss'

const SplitScreenVert4x2 = () => {
    return (
        <div className="ssv4x2w--grid-container">
            <div className="ssv4x2w--left-colum">
                <div className="ssv4x2w--left-content">Cont-1</div>
                <div className="ssv4x2w--left-content">Cont-2</div>
                <div className="ssv4x2w--left-content">Cont-3</div>
                <div className="ssv4x2w--left-content">Cont-4</div>
            </div>
            <div className="ssv4x2w--right-column">
                <div className="ssv4x2w--right-content">Cont-5</div>
                <div className="ssv4x2w--right-content">Cont-6</div>
            </div>
        </div>
    );
};

export default SplitScreenVert4x2;