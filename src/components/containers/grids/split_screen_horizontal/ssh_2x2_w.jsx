import "../../../../styles/components/grids/split_screen_horizontal/_ssh_2x2_w.scss"

const SplitScreenHrz2x2 = () => {
    return (
        <div className="ssh2x2h--grid-container">
            <div className="ssh2x2h--top-row">
                <div className="ssh2x2h--top-content">Cont-1</div>
                <div className="ssh2x2h--top-content">Cont-2</div>
            </div>

            <div className="ssh2x2h--low-row">
                <div className="ssh2x2h--low-content">Cont-3</div>
                <div className="ssh2x2h--low-content">Cont-4</div>
            </div>
        </div>
    );
};

export default SplitScreenHrz2x2;