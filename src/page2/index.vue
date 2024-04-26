<script setup lang="ts">
    import { ref, onMounted } from 'vue'
    import bgScene from './scene.vue'
    import config from './config.json'
    import { usePageStore } from '../commons/stores/pageStore'
    import { useAutoSize1} from '../commons/hook/useAutoSize'
    import { initVariableDataValue } from '../commons/utils/variableData'
    import { execEvent } from '../commons/utils/execEvent'

    import ZvChartLineBasiccsiV from './components/zv-chart-line-basic-csiV/index.vue'
    import ZvChartBarBasicSbEx from './components/zv-chart-bar-basic-SbEx/index.vue'
    import ZvInteractionButtonImagexHxr from './components/zv-interaction-button-image-xHxr/index.vue'
    import event_gQTGrD from './events/event_gQTGrD'
    import ZvInteractionButtonImageyjZO from './components/zv-interaction-button-image-yjZO/index.vue'
    import event_wZaxFr from './events/event_wZaxFr'
    import ZvInteractionButtonImagekiQY from './components/zv-interaction-button-image-kiQY/index.vue'
    import event_oXDTFb from './events/event_oXDTFb'

    const { pageRef, transform } = useAutoSize1(1920, 1080)

    onMounted(() => {
        usePageStore().setCurrentPage(config)
    })
</script>
<template>
    <div class="shj-page autoAdapter" ref="pageRef">
            <div class="shj-page-content" :style="{ transform }"  >
                <bg-scene></bg-scene>
                <div class="layer-wrap layer-wrap_sUTRIM" id="6NwJCXnZsneQmVE9FWxz">
                    <div class="layer-main">
                        <div class="layer" >
                            <ZvChartLineBasiccsiV />
                    </div>
                </div>
            </div>
                <div class="layer-wrap layer-wrap_QFtSht" id="5tpJnpxpd43NMmT41eDb">
                    <div class="layer-main">
                        <div class="layer" >
                            <ZvChartBarBasicSbEx />
                    </div>
                </div>
            </div>
                <div class="layer-wrap layer-wrap_sHCyze" id="m2DVZ7NT5vIS7fyfJirP">
                    <div class="layer-main">
                        <div class="group"
                             :style="{ transform: `matrix(1, 0, 0, 1, -232, -929)` }">
                <div class="layer-wrap layer-wrap_gQTGrD" id="1dbWHgwzKYksAiWAzRm1">
                    <div class="layer-main">
                        <div class="layer"  @click.stop="execEvent(event_gQTGrD, 'click', $event)">
                            <ZvInteractionButtonImagexHxr />
                    </div>
                </div>
            </div>
                <div class="layer-wrap layer-wrap_wZaxFr" id="H9VQQuv4RFjGOA6WAenL">
                    <div class="layer-main">
                        <div class="layer"  @click.stop="execEvent(event_wZaxFr, 'click', $event)">
                            <ZvInteractionButtonImageyjZO />
                    </div>
                </div>
            </div>
                <div class="layer-wrap layer-wrap_oXDTFb" id="bjJSOBM4D5W5kQ-t8fxX">
                    <div class="layer-main">
                        <div class="layer"  @click.stop="execEvent(event_oXDTFb, 'click', $event)">
                            <ZvInteractionButtonImagekiQY />
                    </div>
                </div>
            </div>
                <div class="layer-wrap layer-wrap_FTvpQB" id="wM7bp04wfPUrQaAdHH8o">
                    <div class="layer-main">
                        <div class="layer" >
                            <div class="img-oyFR"></div>
                    </div>
                </div>
            </div>
                <div class="layer-wrap layer-wrap_XrnSfF" id="ky2TEo4pY0FZE40_JvIc">
                    <div class="layer-main">
                        <div class="layer" >
                            <div class="img-ZcbW"></div>
                    </div>
                </div>
            </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_Iqarfp" id="zWnbGH8rhKrb1HsHfGFM">
                    <div class="layer-main">
                        <div class="layer" >
                            <div class="img-sWbx"></div>
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