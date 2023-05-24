import '../../../styles/components/grids/_split_screen_vert_one_mosaic_three_rows.scss'

const SplitScreenVertOneMosaicThreeRows = () => {
    return (
        <div className="ssvomtr--grid-container">
            <div className="ssvomtr--left-colum">
                <div className="ssvomtr--left-content">Contenido L</div>
            </div>
            <div className="ssvomtr--right-column">
                <div className="ssvomtr--right-content">Contenido derecho 1</div>
                <div className="ssvomtr--right-content">Contenido derecho 2</div>
                <div className="ssvomtr--right-content">Contenido derecho 3</div>
            </div>
        </div>
    );
};

export default SplitScreenVertOneMosaicThreeRows;