import "../../../styles/components/grids/_split_screen_two_mosaic_three_rows.scss"


const SplitScreenTwoMosaicThreeRows = () => {
    return (
        <div className="sstmtr--grid-container">
            <div className="sstmtr--left-column">
                <div className="sstmtr--left-content">Contenido izquierdo</div>
                <div className="sstmtr--left-content">Contenido izquierdo</div>
            </div>
            <div className="sstmtr--right-column">
                <div className="sstmtr--right-content">Contenido derecho 1</div>
                <div className="sstmtr--right-content">Contenido derecho 2</div>
                <div className="sstmtr--right-content">Contenido derecho 3</div>
            </div>
        </div>
    );
};

export default SplitScreenTwoMosaicThreeRows;