import "../../../../styles/components/grids/split_screen_horizontal/_ssh_2x4_w.scss"

const SplitScreenHrz2x4 = () => {
    return (
        <div className="ssh2x4h--grid-container">
            <div className="ssh2x4h--top-row">
                <div className="ssh2x4h--top-content">Cont-1</div>
                <div className="ssh2x4h--top-content">Cont-2</div>
            </div>

            <div className="ssh2x4h--low-row">
                <div className="ssh2x4h--low-content">Cont-3</div>
                <div className="ssh2x4h--low-content">Cont-4</div>
                <div className="ssh2x4h--low-content">Cont-5</div>
                <div className="ssh2x4h--low-content">Cont-6</div>
            </div>
        </div>
    );
};

export default SplitScreenHrz2x4;