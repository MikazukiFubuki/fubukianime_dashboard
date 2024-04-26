<script setup lang="ts">
    import { ref, onMounted } from 'vue'
    import bgScene from './scene.vue'
    import config from './config.json'
    import { usePageStore } from '../commons/stores/pageStore'
    import { useAutoSize1} from '../commons/hook/useAutoSize'
    import { initVariableDataValue } from '../commons/utils/variableData'
    import { execEvent } from '../commons/utils/execEvent'

    import ZvChartLineSmoothJjqN from './components/zv-chart-line-smooth-JjqN/index.vue'
    import ZvChartLineSmoothwfzB from './components/zv-chart-line-smooth-wfzB/index.vue'
    import ZvChartBarBasicWBAw from './components/zv-chart-bar-basic-WBAw/index.vue'
    import ZvChartBarBasicxWhN from './components/zv-chart-bar-basic-xWhN/index.vue'
    import ZvInteractionButtonImageyXlD from './components/zv-interaction-button-image-yXlD/index.vue'
    import event_FbHJOL from './events/event_FbHJOL'
    import ZvInteractionButtonImageyhnR from './components/zv-interaction-button-image-yhnR/index.vue'
    import event_XBSZMq from './events/event_XBSZMq'
    import ZvInteractionButtonImagegPyZ from './components/zv-interaction-button-image-gPyZ/index.vue'
    import event_aMJiEm from './events/event_aMJiEm'

    const { pageRef, transform } = useAutoSize1(1920, 1080)

    onMounted(() => {
        usePageStore().setCurrentPage(config)
    })
</script>
<template>
    <div class="shj-page autoAdapter" ref="pageRef">
            <div class="shj-page-content" :style="{ transform }"  >
                <bg-scene></bg-scene>
                <div class="layer-wrap layer-wrap_vaWmWO" id="nYSieMc0KM9RciRBrLK5">
                    <div class="layer-main">
                        <div class="layer" >
                            <ZvChartLineSmoothJjqN />
                    </div>
                </div>
            </div>
                <div class="layer-wrap layer-wrap_rsNRbl" id="xwZjJLkqr56-dKvG-T8P">
                    <div class="layer-main">
                        <div class="layer" >
                            <ZvChartLineSmoothwfzB />
                    </div>
                </div>
            </div>
                <div class="layer-wrap layer-wrap_LRfVgu" id="sCinVTw0waSXF_JW9K3U">
                    <div class="layer-main">
                        <div class="layer" >
                            <ZvChartBarBasicWBAw />
                    </div>
                </div>
            </div>
                <div class="layer-wrap layer-wrap_vOOhIC" id="VG5lPNbX9L6zDR9EA6Ux">
                    <div class="layer-main">
                        <div class="layer" >
                            <ZvChartBarBasicxWhN />
                    </div>
                </div>
            </div>
                <div class="layer-wrap layer-wrap_yHtmDc" id="OrstsThiPCfRv6ffBzl7">
                    <div class="layer-main">
                        <div class="group"
                             :style="{ transform: `matrix(1, 0, 0, 1, -232, -929)` }">
                <div class="layer-wrap layer-wrap_FbHJOL" id="5ZLIrtWq7fNk7e2mNPNV">
                    <div class="layer-main">
                        <div class="layer"  @click.stop="execEvent(event_FbHJOL, 'click', $event)">
                            <ZvInteractionButtonImageyXlD />
                    </div>
                </div>
            </div>
                <div class="layer-wrap layer-wrap_XBSZMq" id="xiFZGL7lAR2qr-KlPf2w">
                    <div class="layer-main">
                        <div class="layer"  @click.stop="execEvent(event_XBSZMq, 'click', $event)">
                            <ZvInteractionButtonImageyhnR />
                    </div>
                </div>
            </div>
                <div class="layer-wrap layer-wrap_aMJiEm" id="hxGx7aGZbAbiffnW-Mgw">
                    <div class="layer-main">
                        <div class="layer"  @click.stop="execEvent(event_aMJiEm, 'click', $event)">
                            <ZvInteractionButtonImagegPyZ />
                    </div>
                </div>
            </div>
                <div class="layer-wrap layer-wrap_dEesXM" id="hfQEnWsH5uv7JqLQYigU">
                    <div class="layer-main">
                        <div class="layer" >
                            <div class="img-FMZz"></div>
                    </div>
                </div>
            </div>
                <div class="layer-wrap layer-wrap_dtlksX" id="PCMD9OGcmQejPIZ2wEkE">
                    <div class="layer-main">
                        <div class="layer" >
                            <div class="img-dxej"></div>
                    </div>
                </div>
            </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_CEdYjq" id="VQ1hnAByDeHqNAC9CrOo">
                    <div class="layer-main">
                        <div class="layer" >
                            <div class="img-hjvc"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    @import url(./resources/scss/page.scss);
    @import url(./resources/scss/index.scss);
</style>