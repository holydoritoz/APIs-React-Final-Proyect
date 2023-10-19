import PropTypes from 'prop-types'

export const Characters = ( { characters = [] }) => {
return (
    <div className="row">
        {
            characters.map((item, index) => (
                <div key={index} className="col mb-4 text-center">
                    <div className='card' style={{minWidth: "200px"}}>
                        <img src={ item.image } alt="" />
                        <div className='card-body'> 
                            <h5 className='card-title'>{item.name}</h5>
                            <hr />
                            <p><strong>Species:</strong> {item.species}</p>
                            <p><strong>Location:</strong> {item.location.name}</p>
                        </div>
                    </div>
                </div>
            ))}

    </div>
)}

Characters.propTypes = {
    characters: PropTypes.array
};
