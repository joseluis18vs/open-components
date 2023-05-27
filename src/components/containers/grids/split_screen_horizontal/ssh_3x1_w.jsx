import "../../../../styles/components/grids/split_screen_horizontal/_ssh_3x1_w.scss"

const SplitScreenHrz3x1 = () => {
    return (
        <div className="ssh3x1h--grid-container">
            <div className="ssh3x1h--top-row">
                <div className="ssh3x1h--top-content">Cont-1</div>
                <div className="ssh3x1h--top-content">Cont-2</div>
                <div className="ssh3x1h--top-content">Cont-3</div>
            </div>

            <div className="ssh3x1h--low-row"></div>
        </div>
    );
};

export default SplitScreenHrz3x1;