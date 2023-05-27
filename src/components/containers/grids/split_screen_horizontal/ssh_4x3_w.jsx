import "../../../../styles/components/grids/split_screen_horizontal/_ssh_4x3_w.scss"

const SplitScreenHrz4x3 = () => {
    return (
        <div className="ssh4x3h--grid-container">
            <div className="ssh4x3h--top-row">
                <div className="ssh4x3h--top-content">Cont-1</div>
                <div className="ssh4x3h--top-content">Cont-2</div>
                <div className="ssh4x3h--top-content">Cont-3</div>
                <div className="ssh4x3h--top-content">Cont-4</div>
            </div>

            <div className="ssh4x3h--low-row">
                <div className="ssh4x3h--low-content">Cont-5</div>
                <div className="ssh4x3h--low-content">Cont-6</div>
                <div className="ssh4x3h--low-content">Cont-7</div>
            </div>
        </div>
    );
};

export default SplitScreenHrz4x3;