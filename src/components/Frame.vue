<template>
  <v-app id="inspire">
    <v-app-bar
      app
      color="white"
      flat
    >
      <v-container class="py-0 fill-height">
        <v-toolbar-title>ChinaSys 19th</v-toolbar-title>
        <v-btn
          v-for="link in links"
          :key="link"
          text
        >
          {{ link }}
        </v-btn>
      </v-container>
    </v-app-bar>

    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col >
            <v-sheet rounded="lg">
              <v-list color="transparent">
                <v-list-item
                  v-for="item in items"
                  :key="item"
                  link :to="item.to"
                >
                  <v-list-item-content>
                    <v-list-item-title>
                      {{ item.name }}
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-sheet>
          </v-col>

          <v-col cols="10">
            <v-sheet
              min-height="70vh"
              rounded="lg"
            >
             <router-view>

             </router-view>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

  export default {
    name: "Frame",
    data: () => ({
      links: [
      ],
      items: [
        {name: '主页(Home)', to: '/'},
        {name: '组织机构(Committee)', to: '/committee'},
        {name: '会议日程(Program)', to: '/program'},
        {name: '会议注册(Register)', to: '/hotel'},
        {name: '联系方式(Contact Us)', to: '/tbd'},
      ]
    }),
    components: {
    }
  }

</script>