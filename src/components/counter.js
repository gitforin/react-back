import React from 'react'
import PropTypes from 'prop-types'
class Count extends React.Component {
    render(){
        const { value, increment,decrement } = this.props;
        return(
            <div>
                <div>{value}</div>
                <button onClick={increment}>加10</button>
                <button onClick={decrement}>减10</button>
            </div>
        )
    }
}
Count.propTypes = {
  value: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired
};

export default Count;