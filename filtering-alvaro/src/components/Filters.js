import React from 'react'
import { Input, Checkbox, Dropdown, Grid } from 'semantic-ui-react'

const Filters = () => {
  return(

      <Grid>
        <Grid.Row>
          <Grid.Column width={2}>
            <div>
              <Checkbox label="All" value="all" />
            </div>
          </Grid.Column>
          <Grid.Column width={2}>
            <div>
              <p style={{fontWeight: "bold"}}>Age</p>
              <Input name='ageFrom' type='number' placeholder='From' />
              <Input name='ageTo' type='number' placeholder='To' />
            </div>
          </Grid.Column>
          <Grid.Column width={2}>
          <div>
            <p style={{fontWeight: "bold"}}>Gender</p>
            <Checkbox label="Male" value="male" /><br/>
            <Checkbox label="Female" value="female" />
          </div>
          </Grid.Column>
          <Grid.Column width={2}>
            <div>
              <p style={{fontWeight: "bold"}}>State</p>
              <Dropdown selection placeholder='Choose a State'/>
            </div>
          </Grid.Column>
          <Grid.Column width={2}>
            <div>
              <p style={{fontWeight: "bold"}}>Status</p>
              <Checkbox label="Active" value="active" /><br/>
              <Checkbox label="Inactive" value="inactive" />
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>


  )
}

export default Filters
