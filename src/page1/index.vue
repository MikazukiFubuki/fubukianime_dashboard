<script setup lang="ts">
    import { ref, onMounted } from 'vue'
    import bgScene from './scene.vue'
    import config from './config.json'
    import { usePageStore } from '../commons/stores/pageStore'
    import { useAutoSize1} from '../commons/hook/useAutoSize'
    import { initVariableDataValue } from '../commons/utils/variableData'
    import { execEvent } from '../commons/utils/execEvent'

    import ZvTextRealTimepuaH from './components/zv-text-real-time-puaH/index.vue'
    import ZvInteractionButtonImageTPSL from './components/zv-interaction-button-image-TPSL/index.vue'
    import event_KnCJcv from './events/event_KnCJcv'
    import ZvInteractionButtonImageZMtG from './components/zv-interaction-button-image-ZMtG/index.vue'
    import event_mfjNBg from './events/event_mfjNBg'
    import ZvInteractionButtonImagejUOE from './components/zv-interaction-button-image-jUOE/index.vue'
    import event_cMHCno from './events/event_cMHCno'
    import ZvChartPieBasicFbIm from './components/zv-chart-pie-basic-FbIm/index.vue'
    import ZvChartPieBasicLuNB from './components/zv-chart-pie-basic-LuNB/index.vue'
    import ZvTextTableScrollBVcN from './components/zv-text-table-scroll-BVcN/index.vue'
    import ZvTextTableScrollbtyq from './components/zv-text-table-scroll-btyq/index.vue'
    import ZvTextTableScrollTUai from './components/zv-text-table-scroll-TUai/index.vue'
    import ZvTextTableScrollgjla from './components/zv-text-table-scroll-gjla/index.vue'
    import ZvTextTableScrollqSKH from './components/zv-text-table-scroll-qSKH/index.vue'
    import ZvTextTableScrollzoYm from './components/zv-text-table-scroll-zoYm/index.vue'
    import ZvTextTableScrolljdRt from './components/zv-text-table-scroll-jdRt/index.vue'
    import ZvTextTableScrollnGOY from './components/zv-text-table-scroll-nGOY/index.vue'
    import ZvTextTableScrollnPHl from './components/zv-text-table-scroll-nPHl/index.vue'
    import ZvTextTextDynamicTfZb from './components/zv-text-text-dynamic-TfZb/index.vue'
    import ZvTextOverNumberWTJm from './components/zv-text-over-number-WTJm/index.vue'
    import ZvTextOverNumberUZMV from './components/zv-text-over-number-UZMV/index.vue'
    import ZvTextOverNumberOVhf from './components/zv-text-over-number-OVhf/index.vue'
    import ZvTextOverNumberWTph from './components/zv-text-over-number-WTph/index.vue'
    import ZvTextOverNumberPzJi from './components/zv-text-over-number-PzJi/index.vue'
    import ZvTextOverNumberafQt from './components/zv-text-over-number-afQt/index.vue'
    import ZvTextOverNumberpnKO from './components/zv-text-over-number-pnKO/index.vue'
    import ZvTextOverNumberDPyM from './components/zv-text-over-number-DPyM/index.vue'
    import ZvTextOverNumberSLaX from './components/zv-text-over-number-SLaX/index.vue'
    import ZvTextOverNumberRElD from './components/zv-text-over-number-RElD/index.vue'
    import ZvTextTextDynamicavsL from './components/zv-text-text-dynamic-avsL/index.vue'
    import ZvTextTextDynamicvJiN from './components/zv-text-text-dynamic-vJiN/index.vue'
    import ZvMediaCarouselSohf from './components/zv-media-carousel-Sohf/index.vue'

    const { pageRef, transform } = useAutoSize1(1920, 1080)

    const pageLoading = ref<boolean>(true)
    onMounted(() => {
        initVariableDataValue(config.variableData).then(list => {
            config.variableData = list
            usePageStore().setCurrentPage(config)
            pageLoading.value = false
        })
    })
</script>
<template>
    <div class="shj-page autoAdapter" ref="pageRef">
            <div class="shj-page-content" :style="{ transform }"  v-if="!pageLoading"  >
                <bg-scene></bg-scene>
                <div class="layer-wrap layer-wrap_QvhZik" id="xVg6Uc1qexx1s6Hal8BO">
                    <div class="layer-main">
                        <div class="group"
                             :style="{ transform: `matrix(1, 0, 0, 1, 0, 200)` }">
                <div class="layer-wrap layer-wrap_mmrjXi" id="mbWADeO6n7uifpL9CVUG">
                    <div class="layer-main">
                        <div class="layer" >
                            <div class="img-qLvq"></div>
                    </div>
                </div>
            </div>
                <div class="layer-wrap layer-wrap_mcqtqo" id="T9d6JMJex2IW5h6oFwvu">
                    <div class="layer-main">
                        <div class="layer" >
                            <ZvTextRealTimepuaH />
                    </div>
                </div>
            </div>
                <div class="layer-wrap layer-wrap_cliRII" id="Iyyet2ne4IecYfJEPqfO">
                    <div class="layer-main">
                        <div class="layer" >
                                <p class="text-BxXP">三日月フブキ动画管理系统</p>
                    </div>
                </div>
            </div>
                <div class="layer-wrap layer-wrap_vJsXBr" id="RTm14M0EoGXWIE2R8SuN">
                    <div class="layer-main">
                        <div class="layer" >
                            <div class="img-gHlI"></div>
                    </div>
                </div>
            </div>
                <div class="layer-wrap layer-wrap_HJPgJP" id="sczWWwmsKZn7PJtatN5I">
                    <div class="layer-main">
                        <div class="layer" >
                            <div class="img-nlBf"></div>
                    </div>
                </div>
            </div>
                <div class="layer-wrap layer-wrap_vJJFqH" id="VKmYU7f9aswJqrn42CGl">
                    <div class="layer-main">
                        <div class="layer" >
                            <div class="img-wWCF"></div>
                    </div>
                </div>
            </div>
                <div class="layer-wrap layer-wrap_kBUthN" id="5uHSpSbt2nEl78DcOL6w">
                    <div class="layer-main">
                        <div class="layer" >
                            <div class="img-sQpO"></div>
                    </div>
                </div>
            </div>
                <div class="layer-wrap layer-wrap_mKvGGk" id="CxyI4L5PYWiS20xfGev2">
                    <div class="layer-main">
                        <div class="group"
                             :style="{ transform: `matrix(1, 0, 0, 1, -232, -929)` }">
                <div class="layer-wrap layer-wrap_KnCJcv" id="IxQ5EyvrgVSnBsmt1oOw">
                    <div class="layer-main">
                        <div class="layer"  @click.stop="execEvent(event_KnCJcv, 'click', $event)">
                            <ZvInteractionButtonImageTPSL />
                    </div>
                </div>
            </div>
                <div class="layer-wrap layer-wrap_mfjNBg" id="qqxZZUmi-OyI5WFwJiSj">
                    <div class="layer-main">
                        <div class="layer"  @click.stop="execEvent(event_mfjNBg, 'click', $event)">
                            <ZvInteractionButtonImageZMtG />
                    </div>
                </div>
            </div>
                <div class="layer-wrap layer-wrap_cMHCno" id="GYZBhPfCyxNwMEPiabHU">
                    <div class="layer-main">
                        <div class="layer"  @click.stop="execEvent(event_cMHCno, 'click', $event)">
                            <ZvInteractionButtonImagejUOE />
                    </div>
                </div>
            </div>
                <div class="layer-wrap layer-wrap_NvJszo" id="yJ2HVGfejPZA58u-grjV">
                    <div class="layer-main">
                        <div class="layer" >
                            <div class="img-qpkC"></div>
                    </div>
                </div>
            </div>
                <div class="layer-wrap layer-wrap_vdkkAd" id="zdKPRrLsVT2tA9o0ZuMY">
                    <div class="layer-main">
                        <div class="layer" >
                            <div class="img-WTmx"></div>
                    </div>
                </div>
            </div>
                        </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_jkVKiG" id="rSxQus7Fdm11rDbnpGWG">
                    <div class="layer-main">
                        <div class="group"
                             :style="{ transform: `matrix(1, 0, 0, 1, 0, -62)` }">
                <div class="layer-wrap layer-wrap_cymZIH" id="Hz5vKIcKtqrPjWuml0Lf">
                    <div class="layer-main">
                        <div class="group"
                             :style="{ transform: `matrix(1, 0, 0, 1, -1470, -136)` }">
                <div class="layer-wrap layer-wrap_JKdEBZ" id="0Yfwme6qE3wGGiL0L1Ip">
                    <div class="layer-main">
                        <div class="layer" >
                            <ZvChartPieBasicFbIm />
                    </div>
                </div>
            </div>
                <div class="layer-wrap layer-wrap_IkpgLo" id="FwpQKRsWyzqz9jStrvSd">
                    <div class="layer-main">
                        <div class="layer" >
                            <div class="img-cPUc"></div>
                    </div>
                </div>
            </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_ESUrOe" id="lDuN79CF3CnpGnNw3b9C">
                    <div class="layer-main">
                        <div class="group"
                             :style="{ transform: `matrix(1, 0, 0, 1, -50, -136)` }">
                <div class="layer-wrap layer-wrap_zOoWNK" id="ODodXnnPQ2XKe4Ch3CEN">
                    <div class="layer-main">
                        <div class="layer" >
                            <ZvChartPieBasicLuNB />
                    </div>
                </div>
            </div>
                <div class="layer-wrap layer-wrap_wQmCeR" id="ZdPc514ROMSB9fjHo8c6">
                    <div class="layer-main">
                        <div class="layer" >
                            <div class="img-yuOK"></div>
                    </div>
                </div>
            </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_tpsePH" id="HREMppa0tmzQH7OhNP0T">
                    <div class="layer-main">
                        <div class="group"
                             :style="{ transform: `matrix(1, 0, 0, 1, -35, -751)` }">
                <div class="layer-wrap layer-wrap_Quqyft" id="GtJcCB0SZwaYLu2AYlww">
                    <div class="layer-main">
                        <div class="layer" >
                                <p class="text-EDzk">来源类型</p>
                    </div>
                </div>
            </div>
                <div class="layer-wrap layer-wrap_CStQbe" id="45iE981ZqUb91hpAcLs5">
                    <div class="layer-main">
                        <div class="layer" >
                            <div class="img-hiFV"></div>
                    </div>
                </div>
            </div>
                <div class="layer-wrap layer-wrap_LFlvDO" id="b69M3SB39c4syC9mgtiX">
                    <div class="layer-main">
                        <div class="layer" >
                            <ZvTextTableScrollBVcN />
                    </div>
                </div>
            </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_nUmoGS" id="Sn3mp5F8hTGqmxpw4J8l">
                    <div class="layer-main">
                        <div class="group"
                             :style="{ transform: `matrix(1, 0, 0, 1, -35, -751)` }">
                <div class="layer-wrap layer-wrap_HPWcpn" id="ymS5ug5G-maLt-C1P3cw">
                    <div class="layer-main">
                        <div class="layer" >
                                <p class="text-WoJH">类型</p>
                    </div>
                </div>
            </div>
                <div class="layer-wrap layer-wrap_WHIccy" id="ce1xLbKxlgG1yET-UNHS">
                    <div class="layer-main">
                        <div class="layer" >
                            <div class="img-WtNT"></div>
                    </div>
                </div>
            </div>
                <div class="layer-wrap layer-wrap_vgnrFR" id="k1pQSP81c_qdDSEhgn7f">
                    <div class="layer-main">
                        <div class="layer" >
                            <ZvTextTableScrollbtyq />
                    </div>
                </div>
            </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_mTiQRH" id="lzJ_nLmqdPlpatYraBB1">
                    <div class="layer-main">
                        <div class="group"
                             :style="{ transform: `matrix(1, 0, 0, 1, -35, -751)` }">
                <div class="layer-wrap layer-wrap_YiZDsr" id="QYFVtc1uylJian_3iWSW">
                    <div class="layer-main">
                        <div class="layer" >
                                <p class="text-xeLn">恋爱类型</p>
                    </div>
                </div>
            </div>
                <div class="layer-wrap layer-wrap_pPmeTi" id="SmblgbCnwUp1bDK9r2hF">
                    <div class="layer-main">
                        <div class="layer" >
                            <div class="img-GzXl"></div>
                    </div>
                </div>
            </div>
                <div class="layer-wrap layer-wrap_adiGtW" id="huzOUJfcNzVqCW5-S6wO">
                    <div class="layer-main">
                        <div class="layer" >
                            <ZvTextTableScrollTUai />
                    </div>
                </div>
            </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_oncNpb" id="OrUQiFZyZrnxz6XkLWpK">
                    <div class="layer-main">
                        <div class="group"
                             :style="{ transform: `matrix(1, 0, 0, 1, -635, -751)` }">
                <div class="layer-wrap layer-wrap_ECoTTA" id="Mh6FqQjU80rjlcuB-7ua">
                    <div class="layer-main">
                        <div class="layer" >
                                <p class="text-HnfZ">限制级类型</p>
                    </div>
                </div>
            </div>
                <div class="layer-wrap layer-wrap_BQpPnK" id="T_V3AhzSC6FJ3Z-U3VNQ">
                    <div class="layer-main">
                        <div class="layer" >
                            <div class="img-YeQf"></div>
                    </div>
                </div>
            </div>
                <div class="layer-wrap layer-wrap_wFkwKO" id="XpqZrdFw9mFUwfjPuoc1">
                    <div class="layer-main">
                        <div class="layer" >
                            <ZvTextTableScrollgjla />
                    </div>
                </div>
            </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_tkKLDO" id="p6ypHHhmQO1Wg4Gv1koU">
                    <div class="layer-main">
                        <div class="group"
                             :style="{ transform: `matrix(1, 0, 0, 1, -35, -751)` }">
                <div class="layer-wrap layer-wrap_RayYlT" id="Qu1QnZkmQhvaAZbKwwFa">
                    <div class="layer-main">
                        <div class="layer" >
                                <p class="text-TVCd">创作类型</p>
                    </div>
                </div>
            </div>
                <div class="layer-wrap layer-wrap_TDsRlY" id="c1bZT2rXPUbIrfh9OwAs">
                    <div class="layer-main">
                        <div class="layer" >
                            <div class="img-kKJW"></div>
                    </div>
                </div>
            </div>
                <div class="layer-wrap layer-wrap_vcsgEN" id="_46ouQyqpWCPNssOuVRm">
                    <div class="layer-main">
                        <div class="layer" >
                            <ZvTextTableScrollqSKH />
                    </div>
                </div>
            </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_AFylQT" id="V1V12cpKcFczmFGy3I6b">
                    <div class="layer-main">
                        <div class="group"
                             :style="{ transform: `matrix(1, 0, 0, 1, -35, -751)` }">
                <div class="layer-wrap layer-wrap_jrtHzl" id="pxeagC9Smc76eA-PYLQW">
                    <div class="layer-main">
                        <div class="layer" >
                                <p class="text-SofX">性别类型</p>
                    </div>
                </div>
            </div>
                <div class="layer-wrap layer-wrap_PtSBgp" id="cy0XjEwRQ3skkb3o5tJU">
                    <div class="layer-main">
                        <div class="layer" >
                            <div class="img-bSBH"></div>
                    </div>
                </div>
            </div>
                <div class="layer-wrap layer-wrap_TTTjQB" id="JuWnrg7Rzp_AKO_qDXWC">
                    <div class="layer-main">
                        <div class="layer" >
                            <ZvTextTableScrollzoYm />
                    </div>
                </div>
            </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_zejyYq" id="I8wV3EfpY0WCATJJcygS">
                    <div class="layer-main">
                        <div class="group"
                             :style="{ transform: `matrix(1, 0, 0, 1, -1235, -751)` }">
                <div class="layer-wrap layer-wrap_EBYcQI" id="d9rd5GKy4ZIt_261D0ed">
                    <div class="layer-main">
                        <div class="layer" >
                                <p class="text-Tmxp">动画结局</p>
                    </div>
                </div>
            </div>
                <div class="layer-wrap layer-wrap_mUIQwf" id="NIzkaexazRCfYHmhrRTK">
                    <div class="layer-main">
                        <div class="layer" >
                            <div class="img-PRDH"></div>
                    </div>
                </div>
            </div>
                <div class="layer-wrap layer-wrap_CjAIau" id="eA3oa6wIC_aCA49eFA4t">
                    <div class="layer-main">
                        <div class="layer" >
                            <ZvTextTableScrolljdRt />
                    </div>
                </div>
            </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_moYEhM" id="OD9-94B4ntsuPGdhXjCc">
                    <div class="layer-main">
                        <div class="group"
                             :style="{ transform: `matrix(1, 0, 0, 1, -1235, -751)` }">
                <div class="layer-wrap layer-wrap_shzsRg" id="iolnTeafIbOTUrlULJER">
                    <div class="layer-main">
                        <div class="layer" >
                                <p class="text-WtcA">原作结局</p>
                    </div>
                </div>
            </div>
                <div class="layer-wrap layer-wrap_mUqrcu" id="hifQ255H_EPLrVTiZlfY">
                    <div class="layer-main">
                        <div class="layer" >
                            <div class="img-yvoj"></div>
                    </div>
                </div>
            </div>
                <div class="layer-wrap layer-wrap_oItSDY" id="N6FY49IRIwXq3RwCBdeP">
                    <div class="layer-main">
                        <div class="layer" >
                            <ZvTextTableScrollnGOY />
                    </div>
                </div>
            </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_KEbUpB" id="av4K1qCuLFGZRcnHtToP">
                    <div class="layer-main">
                        <div class="group"
                             :style="{ transform: `matrix(1, 0, 0, 1, -1635, -751)` }">
                <div class="layer-wrap layer-wrap_GGhITt" id="5SkM-gbVqcXVQNovmPcX">
                    <div class="layer-main">
                        <div class="layer" >
                                <p class="text-leLk">追番类型</p>
                    </div>
                </div>
            </div>
                <div class="layer-wrap layer-wrap_rmXpzN" id="SEMfgVr_nnvLTfsoqCh3">
                    <div class="layer-main">
                        <div class="layer" >
                            <div class="img-SxWK"></div>
                    </div>
                </div>
            </div>
                <div class="layer-wrap layer-wrap_srAeBV" id="eHMx75Wqx7BKilOWCsgl">
                    <div class="layer-main">
                        <div class="layer" >
                            <ZvTextTableScrollnPHl />
                    </div>
                </div>
            </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_ABgAuW" id="3wPJ8rm6mjfhEX12RAy8">
                    <div class="layer-main">
                        <div class="layer" >
                            <div class="img-SzpM"></div>
                    </div>
                </div>
            </div>
                <div class="layer-wrap layer-wrap_VzXonn" id="rCpC8mgiLijeF7e4UZdL">
                    <div class="layer-main">
                        <div class="layer" >
                            <div class="img-lLId"></div>
                    </div>
                </div>
            </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_vwgTxr" id="ofiOnRwZD2pM6uQSO95O">
                    <div class="layer-main">
                        <div class="group"
                             :style="{ transform: `matrix(1, 0, 0, 1, -42, -154)` }">
                <div class="layer-wrap layer-wrap_bvUksd" id="zQVDUkmCbQm5mbVeTJTQ">
                    <div class="layer-main">
                        <div class="group"
                             :style="{ transform: `matrix(1, 0, 0, 1, -1036, -601)` }">
                <div class="layer-wrap layer-wrap_KdPOAO" id="6weHDmG0S4ns3RPURg7f">
                    <div class="layer-main">
                        <div class="layer" >
                            <ZvTextTextDynamicTfZb />
                    </div>
                </div>
            </div>
                <div class="layer-wrap layer-wrap_YxxLKa" id="9baqB8h3lYbO8gWcIDmg">
                    <div class="layer-main">
                        <div class="layer" >
                            <ZvTextOverNumberWTJm />
                    </div>
                </div>
            </div>
                <div class="layer-wrap layer-wrap_cKARry" id="IPPXRxcdafeqiqCdhU6j">
                    <div class="layer-main">
                        <div class="layer" >
                                <p class="text-eMpg">本季在追番数
</p>
                    </div>
                </div>
            </div>
                <div class="layer-wrap layer-wrap_DNgrDf" id="L8Fg-c773B4IX-YxW7zX">
                    <div class="layer-main">
                        <div class="layer" >
                            <div class="img-yxCx"></div>
                    </div>
                </div>
            </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_RqQRZY" id="3ERivRIbw7N056UTsWAJ">
                    <div class="layer-main">
                        <div class="group"
                             :style="{ transform: `matrix(1, 0, 0, 1, -600, -305)` }">
                <div class="layer-wrap layer-wrap_CUFqib" id="4nUaImWOds67d_JPi5jK">
                    <div class="layer-main">
                        <div class="layer" >
                            <ZvTextOverNumberUZMV />
                    </div>
                </div>
            </div>
                <div class="layer-wrap layer-wrap_yZNyri" id="P2NCy6_GoRipFi9KTxLB">
                    <div class="layer-main">
                        <div class="layer" >
                                <p class="text-gcLo">在追番数
</p>
                    </div>
                </div>
            </div>
                <div class="layer-wrap layer-wrap_xmyMfg" id="F4k5oKZ0OpID9unwX0Jq">
                    <div class="layer-main">
                        <div class="layer" >
                            <div class="img-hxtJ"></div>
                    </div>
                </div>
            </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_ydavyw" id="IM7gRjwZTJdmlRbtifA3">
                    <div class="layer-main">
                        <div class="group"
                             :style="{ transform: `matrix(1, 0, 0, 1, -600, -305)` }">
                <div class="layer-wrap layer-wrap_JvKluU" id="lmQDm2tTTq42awz9y6yt">
                    <div class="layer-main">
                        <div class="layer" >
                            <ZvTextOverNumberOVhf />
                    </div>
                </div>
            </div>
                <div class="layer-wrap layer-wrap_NlxIKv" id="YKCBGKlwNGetkDvSJcZe">
                    <div class="layer-main">
                        <div class="layer" >
                                <p class="text-wUgi">待追番数
</p>
                    </div>
                </div>
            </div>
                <div class="layer-wrap layer-wrap_ApYASk" id="Nin8-tE2KZM9_AB5OtAb">
                    <div class="layer-main">
                        <div class="layer" >
                            <div class="img-pioI"></div>
                    </div>
                </div>
            </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_rSbYyG" id="WSSVnUq3Zrpzrusx4jvm">
                    <div class="layer-main">
                        <div class="group"
                             :style="{ transform: `matrix(1, 0, 0, 1, -600, -305)` }">
                <div class="layer-wrap layer-wrap_nlWsTV" id="2S0Q8SmAOqsj9gLhkf7J">
                    <div class="layer-main">
                        <div class="layer" >
                            <ZvTextOverNumberWTph />
                    </div>
                </div>
            </div>
                <div class="layer-wrap layer-wrap_gcLopT" id="i4JXK1qBANeGPPW2gSk0">
                    <div class="layer-main">
                        <div class="layer" >
                                <p class="text-fNIw">已追番数
</p>
                    </div>
                </div>
            </div>
                <div class="layer-wrap layer-wrap_CbzPsP" id="oU0AuSmpE8P2Q41WF6uS">
                    <div class="layer-main">
                        <div class="layer" >
                            <div class="img-tIkP"></div>
                    </div>
                </div>
            </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_ugIypk" id="Fb7Ep_YEWSQ1ME51Ntv3">
                    <div class="layer-main">
                        <div class="group"
                             :style="{ transform: `matrix(1, 0, 0, 1, -600, -305)` }">
                <div class="layer-wrap layer-wrap_DHhCAF" id="YIUBEEWCd1J125JkVonf">
                    <div class="layer-main">
                        <div class="layer" >
                            <ZvTextOverNumberPzJi />
                    </div>
                </div>
            </div>
                <div class="layer-wrap layer-wrap_pBKmkd" id="RW2gFVRCV4gVvgtG6HoH">
                    <div class="layer-main">
                        <div class="layer" >
                                <p class="text-luxX">平均已追番数
</p>
                    </div>
                </div>
            </div>
                <div class="layer-wrap layer-wrap_wWCJte" id="sQNLwuIP7czZTmONzhj4">
                    <div class="layer-main">
                        <div class="layer" >
                            <div class="img-EBDR"></div>
                    </div>
                </div>
            </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_SxBfIA" id="y_MNrl0unbyhibDXjOh4">
                    <div class="layer-main">
                        <div class="group"
                             :style="{ transform: `matrix(1, 0, 0, 1, -600, -305)` }">
                <div class="layer-wrap layer-wrap_ohFaYI" id="0bO07FWx11njv4M8UtAg">
                    <div class="layer-main">
                        <div class="layer" >
                            <ZvTextOverNumberafQt />
                    </div>
                </div>
            </div>
                <div class="layer-wrap layer-wrap_vboQfD" id="lUP6NdGMmBS-70WROyQY">
                    <div class="layer-main">
                        <div class="layer" >
                                <p class="text-agKG">已补番数
</p>
                    </div>
                </div>
            </div>
                <div class="layer-wrap layer-wrap_CqLkVE" id="hYZeAiWbtwmC6YKx3wyI">
                    <div class="layer-main">
                        <div class="layer" >
                            <div class="img-GJss"></div>
                    </div>
                </div>
            </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_EfIMbj" id="qP8AtWnq97e_cQD6ou0p">
                    <div class="layer-main">
                        <div class="group"
                             :style="{ transform: `matrix(1, 0, 0, 1, -600, -305)` }">
                <div class="layer-wrap layer-wrap_StYtSZ" id="Uhb7U3frT3w_QwoKcmIE">
                    <div class="layer-main">
                        <div class="layer" >
                            <ZvTextOverNumberpnKO />
                    </div>
                </div>
            </div>
                <div class="layer-wrap layer-wrap_ZnNofQ" id="73_RImSn_MdH5jCci1dJ">
                    <div class="layer-main">
                        <div class="layer" >
                                <p class="text-amsd">平均已补番数
</p>
                    </div>
                </div>
            </div>
                <div class="layer-wrap layer-wrap_GwnZoG" id="pbFryy_580Ki27FuiSDl">
                    <div class="layer-main">
                        <div class="layer" >
                            <div class="img-ZQbv"></div>
                    </div>
                </div>
            </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_AeJBlB" id="N-3nUz20_A-wdM-rgFKs">
                    <div class="layer-main">
                        <div class="group"
                             :style="{ transform: `matrix(1, 0, 0, 1, -600, -305)` }">
                <div class="layer-wrap layer-wrap_GRCqxq" id="IUBh_QKNEA2FoQtxk7E5">
                    <div class="layer-main">
                        <div class="layer" >
                            <ZvTextOverNumberDPyM />
                    </div>
                </div>
            </div>
                <div class="layer-wrap layer-wrap_DTmzjk" id="xX98VlDhZhNceXGPGa3o">
                    <div class="layer-main">
                        <div class="layer" >
                                <p class="text-yimv">实际已补番数
</p>
                    </div>
                </div>
            </div>
                <div class="layer-wrap layer-wrap_fhmLkz" id="hpuy4BsM9Lng9KAputUG">
                    <div class="layer-main">
                        <div class="layer" >
                            <div class="img-gqfg"></div>
                    </div>
                </div>
            </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_dSqFwi" id="BcNk5T2LaDIclY_y9fJh">
                    <div class="layer-main">
                        <div class="group"
                             :style="{ transform: `matrix(1, 0, 0, 1, -1110, -453)` }">
                <div class="layer-wrap layer-wrap_NcEpyW" id="MHIpCyd9wc3ERBTfh5sl">
                    <div class="layer-main">
                        <div class="layer" >
                            <ZvTextOverNumberSLaX />
                    </div>
                </div>
            </div>
                <div class="layer-wrap layer-wrap_EJkgdr" id="0HGgUh0Q7mp2z7bReAnf">
                    <div class="layer-main">
                        <div class="layer" >
                                <p class="text-Ubww">实际平均已补番数
</p>
                    </div>
                </div>
            </div>
                <div class="layer-wrap layer-wrap_hVFYkF" id="6-5US2AAsAw6J4gsLsrc">
                    <div class="layer-main">
                        <div class="layer" >
                            <div class="img-rhOT"></div>
                    </div>
                </div>
            </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_cMFepv" id="PSa9qm21akmLbvQOUmnX">
                    <div class="layer-main">
                        <div class="group"
                             :style="{ transform: `matrix(1, 0, 0, 1, -1142, -154)` }">
                <div class="layer-wrap layer-wrap_MIlJus" id="HIBv5FYbAW7uXVWfp2DP">
                    <div class="layer-main">
                        <div class="layer" >
                            <ZvTextOverNumberRElD />
                    </div>
                </div>
            </div>
                <div class="layer-wrap layer-wrap_oqXXru" id="4RcCtcdPrF9dJBB2SQJT">
                    <div class="layer-main">
                        <div class="layer" >
                                <p class="text-IcnB">二次元时长</p>
                    </div>
                </div>
            </div>
                <div class="layer-wrap layer-wrap_ghQYmJ" id="AQzvjou7EnTOTxVrMId6">
                    <div class="layer-main">
                        <div class="layer" >
                            <div class="img-bLSe"></div>
                    </div>
                </div>
            </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_gAZfgb" id="vq2ZJwcg7y5pCX8w92sc">
                    <div class="layer-main">
                        <div class="group"
                             :style="{ transform: `matrix(1, 0, 0, 1, -85, -155)` }">
                <div class="layer-wrap layer-wrap_TBTjDZ" id="3qFshpnEqcd61zIaQEef">
                    <div class="layer-main">
                        <div class="layer" >
                                <p class="text-jibV">入宅纪念日（EVA）</p>
                    </div>
                </div>
            </div>
                <div class="layer-wrap layer-wrap_sVtSsH" id="zLnhUWeUgX1ksolidYQS">
                    <div class="layer-main">
                        <div class="layer" >
                            <ZvTextTextDynamicavsL />
                    </div>
                </div>
            </div>
                <div class="layer-wrap layer-wrap_fmUWwS" id="TVpnosjt2BSzTkCMGxW8">
                    <div class="layer-main">
                        <div class="layer" >
                            <div class="img-Ymxd"></div>
                    </div>
                </div>
            </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_oUyaqb" id="Qs2NdvS8Fy5SX36i6s7R">
                    <div class="layer-main">
                        <div class="group"
                             :style="{ transform: `matrix(1, 0, 0, 1, -42, -157)` }">
                <div class="layer-wrap layer-wrap_tybPug" id="qzrrNt8xakVYpl5G_gz1">
                    <div class="layer-main">
                        <div class="layer" >
                            <ZvTextTextDynamicvJiN />
                    </div>
                </div>
            </div>
                <div class="layer-wrap layer-wrap_hkPemI" id="gL8zG208NQYAnsxksqVW">
                    <div class="layer-main">
                        <div class="layer" >
                                <p class="text-JoKf">日漫接触日（你的名字）</p>
                    </div>
                </div>
            </div>
                <div class="layer-wrap layer-wrap_UkXFlo" id="K3ohmTa5lfEchdteNTUM">
                    <div class="layer-main">
                        <div class="layer" >
                            <div class="img-JsQk"></div>
                    </div>
                </div>
            </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_msDeQV" id="P6mXRyQHjpless02riB3">
                    <div class="layer-main">
                        <div class="layer" >
                            <div class="img-aNgG"></div>
                    </div>
                </div>
            </div>
                        </div>
                    </div>
                </div>
                <div class="layer-wrap layer-wrap_aPWkbc" id="4oKfTVJcNOXbb9Rvsk1A">
                    <div class="layer-main">
                        <div class="layer" >
                            <div class="img-UlLf"></div>
                    </div>
                </div>
            </div>
                <div class="layer-wrap layer-wrap_MpUNWa" id="bTUkp3bPOvu3D5Cv6r07">
                    <div class="layer-main">
                        <div class="layer" >
                            <ZvMediaCarouselSohf />
                    </div>
                </div>
            </div>
                <div class="layer-wrap layer-wrap_NMvRYm" id="0nXmJjsKTo2CBu8etyjf">
                    <div class="layer-main">
                        <div class="layer" >
                            <div class="img-QghD"></div>
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