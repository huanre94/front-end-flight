<template>
  <v-app>
    <v-navigation-drawer permanent app>
      <v-list>
        <v-list-item to="/flight-search">
          <template v-slot:prepend>
            <v-icon icon="mdi-magnify"></v-icon>
          </template>
          <v-list-item-title>Buscador de vuelos</v-list-item-title>
        </v-list-item>
        <v-list-item to="/flight-result">
          <template v-slot:prepend>
            <v-icon icon="mdi-airplane"></v-icon>
          </template>
          <v-list-item-title>Vuelos disponibles</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>
