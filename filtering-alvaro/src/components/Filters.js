import React from 'react'
import { Input, Checkbox, Dropdown, Segment, Button } from 'semantic-ui-react'

const states = [
   {text: "Alabama", value: 'AL'},
   {text: 'Alaska', value:'AK'},
   {text:'American Samoa', value: 'AS'},
   {text:'Arizona', value: 'AZ'},
   {text:'Arkansas', value: 'AR'},
   {text: 'California', value: 'CA'},
   {text: 'Colorado', value: 'CO'},
   {text:'Connecticut', value: 'CT'},
   {text:'Delaware', value: 'DE'},
   {text: 'District Of Columbia', value: 'DC'},
   {text: 'Federated States Of Micronesia', value: 'FM'},
   {text: 'Florida', value: 'FL'},
   {text: 'Georgia', value: 'GA'},
   {text: 'Guam', value: 'GU'},
   {text:'Hawaii', value: 'HI'},
   {text:'Idaho', value: 'ID'},
   {text: 'Illinois', value: 'IL'},
   {text:'Indiana', value: 'IN'},
   {text:'Iowa', value: 'IA'},
   {text: 'Kansas', value: 'KS'},
   {text: 'Kentucky', value: 'KY'},
   {text: 'Louisiana', value: 'LA'},
   {text: 'Maine', value: 'ME'},
   {text: 'Marshall Islands', value: 'MH'},
   {text: 'Maryland', value: 'MD'},
   {text: 'Massachusetts', value: 'MA'},
   {text: 'Michigan', value: 'MI'},
   {text:'Minnesota', value: 'MN'},
   {text: 'Mississippi', value: 'MS'},
   {text: 'Missouri', value: 'MO'},
   {text: 'Montana', value: 'MT'},
   {text: 'Nebraska', value: 'NE'},
   {text: 'Nevada', value: 'NV'},
   {text: 'New Hampshire', value: 'NH'},
   {text: 'New Jersey', value: 'NJ'},
   {text: 'New Mexico', value: 'NM'},
   {text: 'New York', value: 'NY'},
   {text: 'North Carolina', value: 'NC'},
   {text: 'North Dakota', value: 'ND'},
   {text: 'Northern Mariana Islands', value: 'MP'},
   {text: 'Ohio', value: 'OH'},
   {text: 'Oklahoma', value: 'OK'},
   {text: 'Oregon', value: 'OR'},
   {text: 'Palau', value: 'PW'},
   {text: 'Pennsylvania', value :'PA'},
   {text: 'Puerto Rico', value: 'PR'},
   {text: 'Rhode Island', value:'RI'},
   {text: 'South Carolina', value: 'SC'},
   {text: 'South Dakota', value: 'SD'},
   {text: 'Tennessee', value: 'TN'},
   {text: 'Texas', value: 'TX'},
   {text: 'Utah', value: 'UT'},
   {text: 'Vermont', value:'VT'},
   {text: 'Virgin Islands', value: 'VI'},
   {text: 'Virginia', value:'VA'},
   {text: 'Washington', value: 'WA'},
   {text: 'West Virginia', value: 'WV'},
   {text: 'Wisconsin', value: 'WI'},
   {text: 'Wyoming', value:'WY'}
]

const Filters = (props) => {

  const optionsGender = [{key: "M", text: "Male", value: "male"}, {key: "F", text: "Female", value: "female"}]
  const optionsStatus = [{key: "A", text: "Active", value: "active"}, {key: "I", text: "Inactive", value: "inactive"}]

  return(
    <React.Fragment>
      <Segment>
        <center>
          <Checkbox onChange={(_, data) => {props.handleFilterChange(data.value, "allFilter"); props.displayAll()}} checked={props.all} label="All" value="all" />
          <Input onChange={props.handleChangeAge} name='ageFrom' type='number' placeholder='From' />
          <Input onChange={props.handleChangeAge} name='ageTo' type='number' placeholder='To' />
          <Dropdown selection onChange={(_, data) => {props.handleFilterChange(data.value, "genderFilter")}} options={optionsGender} placeholder="Filter By Gender" />
          <Dropdown selection onChange={(_, data) => {props.handleFilterChange(data.value, "stateFilter")}}  options={states} placeholder='Filter By State' />
          <Dropdown selection onChange={(_, data) => {props.handleFilterChange(data.value, "statusFilter")}} options={optionsStatus} placeholder="Filter By Status"/><br/>
        </center>
      </Segment>
    </React.Fragment>
  )
}

export default Filters
