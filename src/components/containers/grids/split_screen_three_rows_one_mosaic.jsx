import '../../../styles/components/grids/_split_screen_three_rows_one_mosaic.scss'

const SplitScreenThreeRowsOneMosaic = () => {
    return (
        <div className="sstrom--grid-container">
            <div className="sstrom--left-column">
                <div className="sstrom--left-content">Contenido izquierda 1</div>
                <div className="sstrom--left-content">Contenido izquierda 2</div>
                <div className="sstrom--left-content">Contenido izquierda 3</div>
            </div>
            <div className="sstrom--right-column">
                <div className="sstrom--right-content">Contenido Derecho</div>
            </div>
        </div>
    );
};

export default SplitScreenThreeRowsOneMosaic;