import PropTypes from 'prop-types'

export const Pagination = ({prev, next, onPrevious, onNext}) => {

    const handlePrevious = () => {
        onPrevious();
    }

    const handleNext = () => {
        onNext();
    }

return (
<nav className='my-5'>
    <ul className="pagination justify-content-center">
        {
            prev ?
            <li className="page-item">
            <button
            onClick={ handlePrevious }
            className="page-link">Previous</button>
        </li>
        :
        null
        }
        {
            next ?
            <li className="page-item">
            <button
            onClick={ handleNext }
            className="page-link">Next</button>
        </li>
        :
        null
        }

    </ul>
</nav>
)
}

Pagination.propTypes = {
    onPrevious: PropTypes.func,
    onNext: PropTypes.func,
    prev: PropTypes.string,
    next: PropTypes.string
};

