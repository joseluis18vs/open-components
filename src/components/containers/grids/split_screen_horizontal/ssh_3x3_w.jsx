import "../../../../styles/components/grids/split_screen_horizontal/_ssh_3x3_w.scss"

const SplitScreenHrz3x3 = () => {
    return (
        <div className="ssh3x3h--grid-container">
            <div className="ssh3x3h--top-row">
                <div className="ssh3x3h--top-content">Cont-1</div>
                <div className="ssh3x3h--top-content">Cont-2</div>
                <div className="ssh3x3h--top-content">Cont-3</div>
            </div>

            <div className="ssh3x3h--low-row">
                <div className="ssh3x3h--low-content">Cont-4</div>
                <div className="ssh3x3h--low-content">Cont-5</div>
                <div className="ssh3x3h--low-content">Cont-6</div>
            </div>
        </div>
    );
};

export default SplitScreenHrz3x3;