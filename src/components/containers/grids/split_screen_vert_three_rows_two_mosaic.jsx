import "../../../styles/components/grids/_split_screen_vert_three_rows_two_mosaic.scss"

const SplitScreenVertThreeRowsTwoMosaic = () => {
    return (
        <div className="sstrtm--grid-container">
            <div className="sstrtm--left-column">
                <div className="sstrtm--left-content">Contenido izquierdo 1</div>
                <div className="sstrtm--left-content">Contenido izquierdo 2</div>
            </div>
            <div className="sstrtm--right-column">
                <div className="sstrtm--right-content">Contenido derecho 1</div>
                <div className="sstrtm--right-content">Contenido derecho 2</div>
                <div className="sstrtm--right-content">Contenido derecho 3</div>
            </div>
        </div>
    );
};

export default SplitScreenVertThreeRowsTwoMosaic;