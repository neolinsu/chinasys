<template>
  <v-html>
  <p>
  <h2>ChinaSys 2020</h2>
  <p></p>
  <v-container fluid>
    <v-row dense>
      <v-col
        cols=11
      >
        <v-card
          class="mx-auto"
          max-width="344"
        >
          <v-img
            src="../../public/重庆雅诗特酒店.webp"
            height="200px"
          ></v-img>

          <v-card-text>
            重庆雅诗特酒店
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row dense>
      <v-col
        cols=11
      >
        <v-card
          class="mx-auto"
          max-width="344"
        >
          <v-img
            src="../../public/重庆南方君临酒店.webp"
            height="200px"
          ></v-img>

          <v-card-text>
            重庆南方君临酒店
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row dense>
      <v-col
        cols=11
      >
        <v-card
          class="mx-auto"
          max-width="344"
        >
          <v-img
            src="../../public/柏曼酒店(重庆石桥铺店).webp"
            height="200px"
          ></v-img>

          <v-card-text>
            柏曼酒店(重庆石桥铺店)
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row dense>
      <v-col
        cols=11
      >
      <v-card
          class="mx-auto"
          max-width="344"
        >
        <v-card-actions>
          <v-spacer></v-spacer>
          <a v-bind:href="url">
          <v-btn class="mx-auto" color="info" >Sign up</v-btn>
          </a>
        </v-card-actions>
      </v-card>
      </v-col>
    </v-row>
  </v-container>

  </v-html>

</template>

<script>
  export default {
    name: "Hotel",
    data: () => ({
      url:"https://h5.ebdan.net/ls/61e205zh"
    }),

  }

</script>