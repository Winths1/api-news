
const Tri = ({ source, updateSource }) => {

    const changeSource = (e) => {
        updateSource(e.target.value) ;
        
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <input className="col-8 my-2 text-center" placeholder="Rechercher un article..." type="text" value={source} onChange={ e => changeSource(e) } />
            </div>
        </div>
    )
}

export default Tri