<template>
  <div>
    <div class="container">
      <div class="sameLine">
        <h2>{{ this.playerName }}</h2>
        <p class="playerAge" color="blue lighten-4">{{ this.playerAge }}</p>
      </div>
      <div class="sameLine">
        <p>{{ this.playerGender }}</p>
        <p>{{ this.playerState }}</p>
        <p>{{ this.playerStatus }}</p>
        <v-btn @click="editPlayer" small dark color="blue lighten-1">Edit Player</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    playerName: String,
    playerAge: Number,
    playerGender: String,
    playerState: String,
    playerStatus: String
  }
};
</script>

<style scoped lang="scss">

$bg-color: #313eab;
$bg-player-age: #1A237E;
$circle-color: #f6d4ac;
$text-color: white;

.container {
  background-color: $bg-color;
  border-radius: 5px;
  color: $text-color;
  display: flex;
  flex-direction: column;
  margin: 3px;
  padding: 15px;
  width: 350px;
  }

p {
  margin: 0.3em;
}

.playerAge {
  background-color: $bg-player-age;
  border-radius: 80px;
  color: white;
  font-size: 1.2em;
  font-weight: bold;  
  height: 40px;
  line-height: 2.4;
  width: 40px;
}

.sameLine {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

v-btn {
  width: 80px;
  border-radius: 5px;
}

</style>