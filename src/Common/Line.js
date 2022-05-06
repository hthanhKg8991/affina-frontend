import PropTypes from "prop-types";
/***
 * <Line type='default'/>
 * className='line-default'
 * <Line type='dotted'/>
 * className='line-dotted'
 */
const Line = (props) => {

  return (
    <div className={props.className+ ' line-' + props.type +' line-'+ props.color}>
    </div>
  )
}

Line.propTypes = {
  type: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
}

Line.defaultProps = {
  type: 'default',
  color: 'e6e6e6',
  className: '',
}
export default Line
