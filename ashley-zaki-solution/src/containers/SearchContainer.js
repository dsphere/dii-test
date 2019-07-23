import React, {Component, Fragment} from 'react'
import SearchFilter from '../components/SearchFilter'

class SearchContainer extends Component {

  render() {
   
    return (
      <Fragment>
        <SearchFilter handleSearch={this.props.handleSearch}/>
      </Fragment>
    )
  }
}

export default SearchContainer