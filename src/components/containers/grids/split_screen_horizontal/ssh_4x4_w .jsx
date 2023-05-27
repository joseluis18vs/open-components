import "../../../../styles/components/grids/split_screen_horizontal/_ssh_4x4_w.scss"

const SplitScreenHrz4x4 = () => {
    return (
        <div className="ssh4x4h--grid-container">
            <div className="ssh4x4h--top-row">
                <div className="ssh4x4h--top-content">Cont-1</div>
                <div className="ssh4x4h--top-content">Cont-2</div>
                <div className="ssh4x4h--top-content">Cont-3</div>
                <div className="ssh4x4h--top-content">Cont-4</div>
            </div>

            <div className="ssh4x4h--low-row">
                <div className="ssh4x4h--low-content">Cont-5</div>
                <div className="ssh4x4h--low-content">Cont-6</div>
                <div className="ssh4x4h--low-content">Cont-7</div>
                <div className="ssh4x4h--low-content">Cont-8</div>
            </div>
        </div>
    );
};

export default SplitScreenHrz4x4;