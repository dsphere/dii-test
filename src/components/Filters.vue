<template>
    <div>
        <div class="filterContainer">
            <div>
                <h2>Filter Players</h2>
            </div>
            <div class="selectContainer">
                <div class="filter">
                    <v-select
                    :items="this.ages"
                    label="Age"
                    box
                    ></v-select>
                </div>
                <div class="filter">
                    <v-select
                    :items="this.genders"
                    label="Gender"
                    box
                    ></v-select>
                </div>
                <div class="filter">
                    <v-select
                    :items="this.locations"
                    label="Location"
                    box
                    ></v-select>
                </div>
                <div class="filter">
                    <v-select
                    :items="this.status"
                    label="Status"
                    box
                    ></v-select>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "filter",
    data: function() {
        return {
            ages: [ "0 - 4", "5 - 7", "7 - 10", "11 - 14", "14 - 17"],
            genders: [ "Female", "Male", "Cis/Trans"],
            locations: [],
            status: [ "active", "inactive"]
        }
    }  
}
</script>

<style lang="scss" scoped>
    .filter {
        margin: 10px;
        width: 200px;
    }

    .filterContainer {
        width: 100%;
        background-color: #daf6ac;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
        font-size: 0.8em;
    }

    h2 {
        margin-top: 20px;
    }

    .selectContainer {
        display: flex;
        flex-direction: row;

    }

</style>


