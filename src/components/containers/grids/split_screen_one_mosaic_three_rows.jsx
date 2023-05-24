import '../../../styles/components/grids/_split_screen_one_mosaic_three_rows.scss'

const SplitScreenOneMosaicThreeRows = () => {
    return (
        <div className="ssomt--grid-container">
            <div className="ssomt--left-column">
                <div className="ssomt--left-content">Contenido izquierdo</div>
            </div>
            <div className="ssomt--right-column">
                <div className="ssomt--right-content">Contenido derecho 1</div>
                <div className="ssomt--right-content">Contenido derecho 2</div>
                <div className="ssomt--right-content">Contenido derecho 3</div>
            </div>
        </div>
    );
};

export default SplitScreenOneMosaicThreeRows;