import PropTypes from 'prop-types'

export const Characters = ( { characters = [] }) => {
return (
    <div className="row">
        {
            characters.map((item, index) => (
                <div key={index} className="col mb-4">
                    <div className='card' style={{minWidth: "200px"}}>
                        <img src={ item.image } alt="" />
                        <div className='card-body'> 
                            <h5 className='card-title fs-3'>{item.name}</h5>
                            <hr />
                            <p><i className="fa-solid fa-spaghetti-monster-flying"></i> {item.species}</p>
                            <p><i className="fa-solid fa-venus-mars"></i> {item.gender}</p>
                            <p><i className="fa-solid fa-location-dot"></i> {item.location.name}</p>
                        </div>
                    </div>
                </div>
            ))}

    </div>
)}

Characters.propTypes = {
    characters: PropTypes.array
};
