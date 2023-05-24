import "../../../styles/components/grids/_split_screen_vert_two_mosaic_three_rows.scss"

const SplitScreenVertTwoMosaicThreeRows = () => {
    return (
        <div className="sstmtr--grid-container">
            <div className="sstmtr--left-column">
                <div className="sstmtr--left-content">Contenido izquierdo 1</div>
                <div className="sstmtr--left-content">Contenido izquierdo 2</div>
            </div>
            <div className="sstmtr--right-column">
                <div className="sstmtr--right-content">Contenido derecho 1</div>
                <div className="sstmtr--right-content">Contenido derecho 2</div>
                <div className="sstmtr--right-content">Contenido derecho 3</div>
            </div>
        </div>
    );
};

export default SplitScreenVertTwoMosaicThreeRows;