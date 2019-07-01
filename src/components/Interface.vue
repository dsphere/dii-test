<!-- TODOS

- style: center filter container
- clear v-selects on click of 'filter players' btn
- enable 'edit player' btn
- add delete player option to 'edit player' form
- add dark red background for inactive players

-->

<template>
  <div>
    <div class="filterContainer">
      <div>
        <h2>Manage Players</h2>
      </div>
      <div class="selectContainer">
        <v-select
          :items="this.ages"
          label="Age"
          box
          v-model.lazy="currentAge"
          v-on:change="saveFilter('age')"
        ></v-select>
        <v-select 
          :items="this.genders"
          label="Gender"
          box
          v-model.lazy="currentGender"
          v-on:change="saveFilter('gender')"
        ></v-select>
        <v-select 
          :items="this.locations"
          label="Location"
          box
          v-model.lazy="currentState"
          v-on:change="saveFilter('state')"
        ></v-select>
        <v-select 
          :items="this.status"
          label="Status"
          box
          v-model.lazy="currentStatus"
          v-on:change="saveFilter('status')"
        ></v-select>
        <!-- Filtering btns -->
        <v-btn class="filterBtn" v-if="!isFiltered" @click="filterArray" small dark color="blue lighten-1">Filter Players</v-btn>
        <v-btn class="filterBtn" v-else @click="clearFilteredArray" small dark color="blue lighten-1">Show All Players</v-btn>
      </div>
    </div>
    <!-- Player Cards -->
    <div class="cardContainer">
      <Card 
        v-for="player in this.displayedPlayerArray"
        class="row" 
        :key="player.index" 
        :playerName="player.name"
        :playerAge="player.age"
        :playerGender="player.gender"
        :playerState="player.state"
        :playerStatus="player.status">
        {{ playerName }}
        {{ playerAge }}
        {{ playerGender }}
        {{ playerState }}
        {{ playerStatus }}
      </Card>
    </div>
  </div>
</template>

<script>
let genderList = [ "Female", "Male", "Cis/Trans"];
let highAge = 17;
let lowAge = 1;
let statesList = [ 'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY' ];
let statusList = [ "active", "inactive"];

import Card from "./Card.vue";
import axios from 'axios';

export default {
  name: "app",
  components: {
    Card
  },
  data: function() {
    return {
      ages: [],
      allPlayersArray: null,
      currentAge: 0,
      currentGender: "",
      currentState: "",
      currentStatus: "",
      displayedPlayerArray: null, 
      filteredPlayerArray: null,
      filters: [],    
      genders: genderList,
      isFiltered: false,
      locations: statesList,            
      status: statusList
    }
  },
  created: function() {
    for(var i = lowAge; i <= highAge; i++) {
      this.ages.push(i);
    }
  },
  methods: {
    checkValue(x) {
      switch(x) {
        case 'age':
          return this.currentAge;
          break;
        case 'gender':
          return this.currentGender
          break;
        case 'state':
          return this.currentState;
          break;
        default:
          return this.currentStatus
      } 
    },
    clearFilteredArray() {     
      this.isFiltered = false;
      this.filteredPlayerArray = [];
      this.filters = [];
      this.displayedPlayerArray = this.allPlayersArray;
    },
    filterArray() {
      this.isFiltered = true;

      // Using first filter on allPlayersArray
      if(this.filters.length >= 1) {
        let x = this.filters[0];
        let value = this.checkValue(x);
        console.log("value prior to filter: " + value);

        this.filteredPlayerArray = this.allPlayersArray.filter(function (value) {
          // TODO Working on this method
          // value is an object, not string or number
          console.log("filter value in filter: " + value);
          return this.allPlayersArray.x === value;
        })
      }

      if(this.filters.length >= 2) {
        // Iterate through filters[] starting at 2nd value with filteredPlayerArray
      }      
      
      this.displayedPlayerArray = this.filteredPlayerArray;      
    },
    saveFilter(filterName) {
      this.filters.push(filterName);
    }
  },
  mounted: function() {
    axios.get(`https://dii-test.s3.amazonaws.com/players.json`)
    .then(response => {
      this.allPlayersArray = response.data;
      this.displayedPlayerArray = this.allPlayersArray;
    })
    .catch(e => {
      console.log("get error: " + e)
    });  
  },
};

</script>

<style lang="scss" scoped>

.cardContainer {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}

.filterContainer {
  align-items: center;
  display: flex;
  flex-direction: column;
  font-size: 0.8em;  
  width: 90%;
}

.filterBtn {
  width: 140px;
}

h2 {
  margin: 10px 0;
}

.selectContainer {  
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 20px 0;
  width: 100%;
}

.v-select {
  margin: 3px;
  width: 60px;
}

</style>
