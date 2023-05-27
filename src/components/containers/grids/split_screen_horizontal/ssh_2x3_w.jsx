import "../../../../styles/components/grids/split_screen_horizontal/_ssh_2x3_w.scss"

const SplitScreenHrz2x3 = () => {
    return (
        <div className="ssh2x3h--grid-container">
            <div className="ssh2x3h--top-row">
                <div className="ssh2x3h--top-content">Cont-1</div>
                <div className="ssh2x3h--top-content">Cont-2</div>
            </div>

            <div className="ssh2x3h--low-row">
                <div className="ssh2x3h--low-content">Cont-3</div>
                <div className="ssh2x3h--low-content">Cont-4</div>
                <div className="ssh2x3h--low-content">Cont-5</div>
            </div>
        </div>
    );
};

export default SplitScreenHrz2x3;