import React from 'react'
import { Input, Checkbox, Dropdown, Grid } from 'semantic-ui-react'

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
  return(
      <Grid>
        <Grid.Row>
          <Grid.Column width={2}>
            <div>
              <Checkbox onChange={props.getAll} checked={props.displayAll} label="All" value="all" />
            </div>
          </Grid.Column>
          <Grid.Column width={2}>
            <div>
              <p style={{fontWeight: "bold"}}>Age</p>
              <Input onChange={props.handleChangeAge} name='ageFrom' type='number' placeholder='From' />
              <Input onChange={props.handleChangeAge} name='ageTo' type='number' placeholder='To' />
            </div>
          </Grid.Column>
          <Grid.Column width={2}>
          <div>
            <p style={{fontWeight: "bold"}}>Gender</p>
            <Checkbox onChange={props.handleCheckBox} checked={props.gender === 'Male'} label="Male" name="gender" value="male" /><br/>
            <Checkbox onChange={props.handleCheckBox} checked={props.gender === 'Female'} label="Female" name="gender" value="female" />
          </div>
          </Grid.Column>
          <Grid.Column width={2}>
            <div>
              <p style={{fontWeight: "bold"}}>State</p>
              <Dropdown onChange={props.getState} selection placeholder='Choose a State' options={states}/>
            </div>
          </Grid.Column>
          <Grid.Column width={2}>
            <div>
              <p style={{fontWeight: "bold"}}>Status</p>
              <Checkbox onChange={props.handleCheckBox} checked={props.status === 'Active'} name="status" label="Active" value="active" /><br/>
              <Checkbox onChange={props.handleCheckBox} checked={props.status === 'Inactive'} name="status" label="Inactive" value="inactive" />
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>


  )
}

export default Filters
