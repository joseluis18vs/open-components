import "../../../styles/components/grids/_split_screen_hrz_wrap.scss"

const SplitScreenHrzWrap = () => {
    return (
        <div className="sshw--grid-container">
            <div className="sshw--left-column">Contenido up</div>
            <div className="sshw--right-column">Contenido down</div>
        </div>
    );
};

export default SplitScreenHrzWrap;