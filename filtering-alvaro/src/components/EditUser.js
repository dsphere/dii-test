import React from 'react'
import { stateOptions, genderOptions, statusOptions} from "./../misc/DropdownOptions";
import { Input, Dropdown } from 'semantic-ui-react'

const EditUser = (props) => {
  return(
    <React.Fragment>
      <Input style={{width: "40%"}} size="small" type='text' value={props.playerToEdit.name}/>
      <Input size="small" type='number' value={props.playerToEdit.age}/>
      <Dropdown selection size="small" options={genderOptions} value={props.playerToEdit.gender}/>
      <Dropdown selection size="small" options={stateOptions} value={props.playerToEdit.state}/>
      <Dropdown selection size="small" options={statusOptions} value={props.playerToEdit.status}/>
    </React.Fragment>
  )
}

export default EditUser
