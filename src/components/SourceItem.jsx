
import PropTypes from 'prop-types';



export default function SourceItem({source}) {
  return (
    <div className='flex flex-row px-6'>
        
        <div className="source-name text-white font-sans">
            <p className='font-bold'>{source}</p>
            </div>
        <div className="source-check-box">
            <input type="checkbox" name={source} id={source} />
        </div>
    </div>
  )
}

SourceItem.propTypes = {
    source: PropTypes.string.isRequired,
}