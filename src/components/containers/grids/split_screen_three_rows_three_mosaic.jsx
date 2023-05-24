import "../../../styles/components/grids/_split_screen_three_rows_two_mosaic.scss"

const SplitScreenThreeRowsThreeMosaic = () => {
    return (
        <div className="sstrtr--grid-container">
            <div className="sstrtr--left-column">
                <div className="sstrtr--left-content">Contenido izquierdo</div>
                <div className="sstrtr--left-content">Contenido izquierdo</div>
            </div>
            <div className="sstrtr--right-column">
                <div className="sstrtr--right-content">Contenido derecho 1</div>
                <div className="sstrtr--right-content">Contenido derecho 2</div>
                <div className="sstrtr--right-content">Contenido derecho 3</div>
            </div>
        </div>
    );
};

export default SplitScreenThreeRowsThreeMosaic;