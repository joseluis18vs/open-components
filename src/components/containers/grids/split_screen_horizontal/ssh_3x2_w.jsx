import "../../../../styles/components/grids/split_screen_horizontal/_ssh_3x2_w.scss"

const SplitScreenHrz3x2 = () => {
    return (
        <div className="ssh3x2h--grid-container">
            <div className="ssh3x2h--top-row">
                <div className="ssh3x2h--top-content">Cont-1</div>
                <div className="ssh3x2h--top-content">Cont-2</div>
                <div className="ssh3x2h--top-content">Cont-3</div>
            </div>

            <div className="ssh3x2h--low-row">
                <div className="ssh3x2h--low-content">Cont-4</div>
                <div className="ssh3x2h--low-content">Cont-5</div>
            </div>
        </div>
    );
};

export default SplitScreenHrz3x2;