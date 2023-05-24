import "../../../styles/components/grids/_split_screen_wrap.scss"

const SplitScreenWrap = () => {
    return (
        <div className="ssw--grid-container">
            <div className="ssw--left-column">Contenido izquierdo</div>
            <div className="ssw--right-column">Contenido derecho</div>
        </div>
    );
};

export default SplitScreenWrap;