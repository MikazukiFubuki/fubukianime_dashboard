<script setup lang="ts">
import option from './option.json'
import { registerComponentRef } from '../../../commons/utils/refs/index'
import sources from './sources.json'
</script>

<template>
    <zv-chart-pie-basic    :basic-option="option" :ref="registerComponentRef(`0Yfwme6qE3wGGiL0L1Ip`)" :sources="sources"/>
</template>