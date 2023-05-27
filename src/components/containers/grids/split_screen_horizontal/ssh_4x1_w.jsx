import "../../../../styles/components/grids/split_screen_horizontal/_ssh_4x1_w.scss"

const SplitScreenHrz4x1 = () => {
    return (
        <div className="ssh4x1h--grid-container">
            <div className="ssh4x1h--top-row">
                <div className="ssh4x1h--top-content">Cont-1</div>
                <div className="ssh4x1h--top-content">Cont-2</div>
                <div className="ssh4x1h--top-content">Cont-3</div>
                <div className="ssh4x1h--top-content">Cont-4</div>
            </div>

            <div className="ssh4x1h--low-row">
                Cont-5
            </div>
        </div>
    );
};

export default SplitScreenHrz4x1;