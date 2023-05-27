import "../../../../styles/components/grids/split_screen_horizontal/_ssh_1x4_w.scss"

const SplitScreenHrz1x4 = () => {
    return (
        <div className="ssh1x4h--grid-container">
            <div className="ssh1x4h--top-row">Cont-1</div>

            <div className="ssh1x4h--low-row">
                <div className="ssh1x4h--low-content">Cont-2</div>
                <div className="ssh1x4h--low-content">Cont-3</div>
                <div className="ssh1x4h--low-content">Cont-4</div>
                <div className="ssh1x4h--low-content">Cont-5</div>
            </div>
        </div>
    );
};

export default SplitScreenHrz1x4;