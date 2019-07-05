import React from 'react'
import { Input, Checkbox, Dropdown, Segment, Button } from 'semantic-ui-react'
import { stateOptions, genderOptions, statusOptions} from "./../misc/DropdownOptions";


const Filters = (props) => {
  return(
    <React.Fragment>
      <Segment>
        <center>
          <Button onClick={(_, data) => {props.handleFilterChange(data.value, "allFilter")}} color="blue" value="all">All</Button>
          <Input onChange={props.handleChangeAge} name='ageFrom' type='number' placeholder='Age From' />
          <Input onChange={props.handleChangeAge} name='ageTo' type='number' placeholder='Age To' />
          <Dropdown selection onChange={(_, data) => {props.handleFilterChange(data.value, "genderFilter")}} options={genderOptions} placeholder="Filter By Gender" />
          <Dropdown selection onChange={(_, data) => {props.handleFilterChange(data.value, "stateFilter")}}  options={stateOptions} placeholder='Filter By State' />
          <Dropdown selection onChange={(_, data) => {props.handleFilterChange(data.value, "statusFilter")}} options={statusOptions} placeholder="Filter By Status"/><br/>
        </center>
      </Segment>
    </React.Fragment>
  )
}

export default Filters
