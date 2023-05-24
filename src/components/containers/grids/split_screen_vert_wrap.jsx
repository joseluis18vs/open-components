import "../../../styles/components/grids/_split_screen_vert_wrap.scss"

const SplitScreenVertWrap = () => {
    return (
        <div className="ssvw--grid-container">
            <div className="ssvw--left-column">Contenido izquierdo</div>
            <div className="ssvw--right-column">Contenido derecho</div>
        </div>
    );
};

export default SplitScreenVertWrap;