import "../../../styles/components/grids/_split_screen_vert_three_rows_three_mosaic.scss"

const SplitScreenVertThreeRowsThreeMosaic = () => {
    return (
        <div className="ssvtrtm--grid-container">
            <div className="ssvtrtm--left-column">
                <div className="ssvtrtm--left-content">Contenido izquierdo 1</div>
                <div className="ssvtrtm--left-content">Contenido izquierdo 2</div>
                <div className="ssvtrtm--left-content">Contenido izquierdo 3</div>
            </div>
            <div className="ssvtrtm--right-column">
                <div className="ssvtrtm--right-content">Contenido derecho 1</div>
                <div className="ssvtrtm--right-content">Contenido derecho 2</div>
                <div className="ssvtrtm--right-content">Contenido derecho 3</div>
            </div>
        </div>
    );
};

export default SplitScreenVertThreeRowsThreeMosaic;