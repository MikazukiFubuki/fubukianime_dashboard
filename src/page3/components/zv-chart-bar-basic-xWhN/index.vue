<script setup lang="ts">
import option from './option.json'
import { registerComponentRef } from '../../../commons/utils/refs/index'
import sources from './sources.json'
</script>

<template>
    <zv-chart-bar-basic    :basic-option="option" :ref="registerComponentRef(`VG5lPNbX9L6zDR9EA6Ux`)" :sources="sources"/>
</template>