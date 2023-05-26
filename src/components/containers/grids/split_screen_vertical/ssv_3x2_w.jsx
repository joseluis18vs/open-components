import '../../../../styles/components/grids/split_screen_vertical/_ssv_3x2_w.scss'

const SplitScreenVert3x2 = () => {
    return (
        <div className="ssv3x2w--grid-container">
            <div className="ssv3x2w--left-colum">
                <div className="ssv3x2w--left-content">Cont-1</div>
                <div className="ssv3x2w--left-content">Cont-2</div>
                <div className="ssv3x2w--left-content">Cont-3</div>
            </div>
            <div className="ssv3x2w--right-column">
                <div className="ssv3x2w--right-content">Cont-4</div>
                <div className="ssv3x2w--right-content">Cont-5</div>
            </div>
        </div>
    );
};

export default SplitScreenVert3x2;