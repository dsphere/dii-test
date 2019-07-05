import React from 'react'
import { Dropdown, Segment, Button } from 'semantic-ui-react'
import { stateOptions, genderOptions, statusOptions} from "./../misc/DropdownOptions";

const Filters = (props) => {
  return(
    <React.Fragment>
      <Segment>
        <center>
          <Button className="filter" onClick={(_, data) => {props.handleFilterChange(data.value, "allFilter")}} color="blue" value="all">All</Button>
          <Dropdown className="filter" selection onChange={(_, data) => {props.handleFilterChange(data.value, "ageFromFilter")}} options={props.ageOptions} type='number' placeholder="Age From"/>
          <Dropdown className="filter" selection onChange={(_, data) => {props.handleFilterChange(data.value, "ageToFilter")}} options={props.ageOptions} type='number' placeholder="Age To"/>
          <Dropdown className="filter" selection onChange={(_, data) => {props.handleFilterChange(data.value, "genderFilter")}} options={genderOptions} placeholder="Filter By Gender" />
          <Dropdown className="filter" selection onChange={(_, data) => {props.handleFilterChange(data.value, "stateFilter")}}  options={stateOptions} placeholder='Filter By State' />
          <Dropdown className="filter" selection onChange={(_, data) => {props.handleFilterChange(data.value, "statusFilter")}} options={statusOptions} placeholder="Filter By Status"/><br/>
        </center>
      </Segment>
    </React.Fragment>
  )
}

export default Filters
