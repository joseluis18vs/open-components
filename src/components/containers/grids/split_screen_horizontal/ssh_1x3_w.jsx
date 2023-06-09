import "../../../../styles/components/grids/split_screen_horizontal/_ssh_1x3_w.scss"

const SplitScreenHrz1x3 = () => {
    return (
        <div className="ssh1x3h--grid-container">
            <div className="ssh1x3h--top-row">Cont-1</div>

            <div className="ssh1x3h--low-row">
                <div className="ssh1x3h--low-content">Cont-2</div>
                <div className="ssh1x3h--low-content">Cont-3</div>
                <div className="ssh1x3h--low-content">Cont-4</div>
            </div>
        </div>
    );
};

export default SplitScreenHrz1x3;