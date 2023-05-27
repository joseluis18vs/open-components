import "../../../../styles/components/grids/split_screen_horizontal/_ssh_3x4_w.scss"

const SplitScreenHrz3x4 = () => {
    return (
        <div className="ssh3x4h--grid-container">
            <div className="ssh3x4h--top-row">
                <div className="ssh3x4h--top-content">Cont-1</div>
                <div className="ssh3x4h--top-content">Cont-2</div>
                <div className="ssh3x4h--top-content">Cont-3</div>
            </div>

            <div className="ssh3x4h--low-row">
                <div className="ssh3x4h--low-content">Cont-4</div>
                <div className="ssh3x4h--low-content">Cont-5</div>
                <div className="ssh3x4h--low-content">Cont-6</div>
                <div className="ssh3x4h--low-content">Cont-7</div>
            </div>
        </div>
    );
};

export default SplitScreenHrz3x4;