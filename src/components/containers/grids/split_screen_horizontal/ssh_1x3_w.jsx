import "../../../../styles/components/grids/split_screen_horizontal/_ssh_1x2_w.scss"

const SplitScreenHrz1x3 = () => {
    return (
        <div className="ssh1x2h--grid-container">
            <div className="ssh1x2h--top-row">Cont-1</div>

            <div className="ssh1x2h--low-row">
                <div className="ssh1x2h--low-content">Cont-2</div>
                <div className="ssh1x2h--low-content">Cont-3</div>
            </div>
        </div>
    );
};

export default SplitScreenHrz1x3;