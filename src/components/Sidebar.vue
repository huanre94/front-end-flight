<template>
    <VNavigationDrawer v-model="model" expand-on-hover rail color="#0D1B4B">
        <!-- Profile -->
        <VList density="compact" nav class="mt-2">
            <VListItem
                prepend-avatar="https://avatars.githubusercontent.com/u/11721174?v=4"
                title="Hugo Restrepo"
                subtitle="huanre94@gmail.com"
                class="text-white"
            />
        </VList>

        <VDivider color="rgba(255,255,255,0.15)" class="my-1" />

        <!-- Navigation -->
        <VList density="compact" nav class="mt-2">
            <VListItem
                prepend-icon="mdi-magnify"
                title="Buscar vuelos"
                value="search"
                to="/flight-search"
                rounded="lg"
                color="white"
                base-color="rgba(255,255,255,0.65)"
            />
            <VListItem
                prepend-icon="mdi-format-list-bulleted"
                title="Resultados"
                value="results"
                to="/flight-result"
                rounded="lg"
                color="white"
                base-color="rgba(255,255,255,0.65)"
            />
        </VList>

        <template #append>
            <VDivider color="rgba(255,255,255,0.15)" />
            <VList density="compact" nav class="mb-2">
                <VListItem
                    prepend-icon="mdi-cog-outline"
                    title="Configuración"
                    rounded="lg"
                    base-color="rgba(255,255,255,0.65)"
                />
            </VList>
        </template>
    </VNavigationDrawer>
</template>

<script setup>
const model = defineModel()
</script>
