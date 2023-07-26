<template>
  <v-app>
    <v-navigation-drawer app>
      <v-list>
        <v-list-item to="/flight-search">
          <v-list-item-icon>
            <v-icon>mdi-magnify</v-icon>
          </v-list-item-icon>
          <v-list-item-content>Flight Search</v-list-item-content>
        </v-list-item>
        <v-list-item to="/flight-result">
          <v-list-item-icon>
            <v-icon>mdi-airplane</v-icon>
          </v-list-item-icon>
          <v-list-item-content>Flight Result</v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>


    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const toggleDrawer = () => {
  $refs.drawer.toggle();
};

// Close the drawer after clicking a link
router.afterEach(() => {
  $refs.drawer.close();
});
</script>
