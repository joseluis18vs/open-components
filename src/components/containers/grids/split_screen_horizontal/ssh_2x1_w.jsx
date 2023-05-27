import "../../../../styles/components/grids/split_screen_horizontal/_ssh_2x1_w.scss"

const SplitScreenHrz2x1 = () => {
    return (
        <div className="ssh2x1h--grid-container">
            <div className="ssh2x1h--top-row">
                <div className="ssh2x1h--top-content">Cont-1</div>
                <div className="ssh2x1h--top-content">Cont-2</div>
            </div>

            <div className="ssh2x1h--low-row"></div>
        </div>
    );
};

export default SplitScreenHrz2x1;