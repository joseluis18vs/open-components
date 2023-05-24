import "../../../styles/components/grids/_split_screen_three_rows_two_mosaic.scss"

const SplitScreenThreeRowsTwoMosaic = () => {
    return (
        <div className="sstrtm--grid-container">
            <div className="sstrtm--left-column">
                <div className="sstrtm--left-content">Contenido izquierdo</div>
                <div className="sstrtm--left-content">Contenido izquierdo</div>
            </div>
            <div className="sstrtm--right-column">
                <div className="sstrtm--right-content">Contenido derecho 1</div>
                <div className="sstrtm--right-content">Contenido derecho 2</div>
                <div className="sstrtm--right-content">Contenido derecho 3</div>
            </div>
        </div>
    );
};

export default SplitScreenThreeRowsTwoMosaic;