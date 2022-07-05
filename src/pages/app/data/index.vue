<script setup lang="ts">
import { ref } from "vue";
import { getReports } from "../../../apis/goods";

const res: any = await getReports();
console.log(res);
</script>
<template>
  <ViewWrapper>
    <div class="page-content-wrapper">
      <div class="page-content is-relative">
        <PageHeader title="订单列表" />
        <div class="datatable-toolbar">
          <div class="field has-addons is-disabled"></div>
          <div class="buttons">
            <UserModal />
          </div>
        </div>
        <div class="page-content-inner">
          <div class="columns is-multiline">
            <div class="column is-12">
              <div class="dashboard-card">
                <div class="vue-apexcharts" style="min-height: 280px">
                  <div
                    id="apexchartsxzdfchrp"
                    class="apexcharts-canvas apexchartsxzdfchrp apexcharts-theme-light"
                    style="width: 317px; height: 265px"
                  >
                    <svg
                      id="SvgjsSvg3134"
                      width="317"
                      height="265"
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      xmlns:svgjs="http://svgjs.dev"
                      class="apexcharts-svg"
                      xmlns:data="ApexChartsNS"
                      transform="translate(0, 0)"
                      style="background: transparent"
                    >
                      <g
                        id="SvgjsG3136"
                        class="apexcharts-inner apexcharts-graphical"
                        transform="translate(22, 64.652)"
                      >
                        <defs id="SvgjsDefs3135">
                          <linearGradient
                            id="SvgjsLinearGradient3140"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                          >
                            <stop
                              id="SvgjsStop3141"
                              stop-opacity="0.4"
                              stop-color="rgba(216,227,240,0.4)"
                              offset="0"
                            ></stop>
                            <stop
                              id="SvgjsStop3142"
                              stop-opacity="0.5"
                              stop-color="rgba(190,209,230,0.5)"
                              offset="1"
                            ></stop>
                            <stop
                              id="SvgjsStop3143"
                              stop-opacity="0.5"
                              stop-color="rgba(190,209,230,0.5)"
                              offset="1"
                            ></stop>
                          </linearGradient>
                          <clipPath id="gridRectMaskxzdfchrp">
                            <rect
                              id="SvgjsRect3145"
                              width="289"
                              height="174.348"
                              x="-2"
                              y="0"
                              rx="0"
                              ry="0"
                              opacity="1"
                              stroke-width="0"
                              stroke="none"
                              stroke-dasharray="0"
                              fill="#fff"
                            ></rect>
                          </clipPath>
                          <clipPath id="forecastMaskxzdfchrp"></clipPath>
                          <clipPath id="nonForecastMaskxzdfchrp"></clipPath>
                          <clipPath id="gridRectMarkerMaskxzdfchrp">
                            <rect
                              id="SvgjsRect3146"
                              width="289"
                              height="178.348"
                              x="-2"
                              y="-2"
                              rx="0"
                              ry="0"
                              opacity="1"
                              stroke-width="0"
                              stroke="none"
                              stroke-dasharray="0"
                              fill="#fff"
                            ></rect>
                          </clipPath>
                        </defs>
                        <rect
                          id="SvgjsRect3144"
                          width="39.9"
                          height="174.348"
                          x="64.99998168945312"
                          y="0"
                          rx="0"
                          ry="0"
                          opacity="1"
                          stroke-width="0"
                          stroke-dasharray="3"
                          fill="url(#SvgjsLinearGradient3140)"
                          class="apexcharts-xcrosshairs"
                          y2="174.348"
                          filter="none"
                          fill-opacity="0.9"
                          x1="64.99998168945312"
                          x2="64.99998168945312"
                        ></rect>
                        <g
                          id="SvgjsG3181"
                          class="apexcharts-xaxis"
                          transform="translate(0, 0)"
                        >
                          <g
                            id="SvgjsG3182"
                            class="apexcharts-xaxis-texts-g"
                            transform="translate(0, -4)"
                          >
                            <text
                              id="SvgjsText3184"
                              font-family="Helvetica, Arial, sans-serif"
                              x="28.5"
                              y="-8.652000000000001"
                              text-anchor="middle"
                              dominant-baseline="auto"
                              font-size="12px"
                              font-weight="400"
                              fill="#373d3f"
                              class="apexcharts-text apexcharts-xaxis-label"
                              style="font-family: Helvetica, Arial, sans-serif"
                            >
                              <tspan id="SvgjsTspan3185">May</tspan>
                              <title>May</title>
                            </text>
                            <text
                              id="SvgjsText3187"
                              font-family="Helvetica, Arial, sans-serif"
                              x="85.5"
                              y="-8.652000000000001"
                              text-anchor="middle"
                              dominant-baseline="auto"
                              font-size="12px"
                              font-weight="400"
                              fill="#373d3f"
                              class="apexcharts-text apexcharts-xaxis-label"
                              style="font-family: Helvetica, Arial, sans-serif"
                            >
                              <tspan id="SvgjsTspan3188">Jun</tspan>
                              <title>Jun</title>
                            </text>
                            <text
                              id="SvgjsText3190"
                              font-family="Helvetica, Arial, sans-serif"
                              x="142.5"
                              y="-8.652000000000001"
                              text-anchor="middle"
                              dominant-baseline="auto"
                              font-size="12px"
                              font-weight="400"
                              fill="#373d3f"
                              class="apexcharts-text apexcharts-xaxis-label"
                              style="font-family: Helvetica, Arial, sans-serif"
                            >
                              <tspan id="SvgjsTspan3191">Jul</tspan>
                              <title>Jul</title>
                            </text>
                            <text
                              id="SvgjsText3193"
                              font-family="Helvetica, Arial, sans-serif"
                              x="199.5"
                              y="-8.652000000000001"
                              text-anchor="middle"
                              dominant-baseline="auto"
                              font-size="12px"
                              font-weight="400"
                              fill="#373d3f"
                              class="apexcharts-text apexcharts-xaxis-label"
                              style="font-family: Helvetica, Arial, sans-serif"
                            >
                              <tspan id="SvgjsTspan3194">Aug</tspan>
                              <title>Aug</title>
                            </text>
                            <text
                              id="SvgjsText3196"
                              font-family="Helvetica, Arial, sans-serif"
                              x="256.5"
                              y="-8.652000000000001"
                              text-anchor="middle"
                              dominant-baseline="auto"
                              font-size="12px"
                              font-weight="400"
                              fill="#373d3f"
                              class="apexcharts-text apexcharts-xaxis-label"
                              style="font-family: Helvetica, Arial, sans-serif"
                            >
                              <tspan id="SvgjsTspan3197">Sep</tspan>
                              <title>Sep</title>
                            </text>
                          </g>
                        </g>
                        <g id="SvgjsG3200" class="apexcharts-grid">
                          <g
                            id="SvgjsG3201"
                            class="apexcharts-gridlines-horizontal"
                          >
                            <line
                              id="SvgjsLine3203"
                              x1="0"
                              y1="0"
                              x2="285"
                              y2="0"
                              stroke="#e0e0e0"
                              stroke-dasharray="0"
                              stroke-linecap="butt"
                              class="apexcharts-gridline"
                            ></line>
                            <line
                              id="SvgjsLine3204"
                              x1="0"
                              y1="43.587"
                              x2="285"
                              y2="43.587"
                              stroke="#e0e0e0"
                              stroke-dasharray="0"
                              stroke-linecap="butt"
                              class="apexcharts-gridline"
                            ></line>
                            <line
                              id="SvgjsLine3205"
                              x1="0"
                              y1="87.174"
                              x2="285"
                              y2="87.174"
                              stroke="#e0e0e0"
                              stroke-dasharray="0"
                              stroke-linecap="butt"
                              class="apexcharts-gridline"
                            ></line>
                            <line
                              id="SvgjsLine3206"
                              x1="0"
                              y1="130.76100000000002"
                              x2="285"
                              y2="130.76100000000002"
                              stroke="#e0e0e0"
                              stroke-dasharray="0"
                              stroke-linecap="butt"
                              class="apexcharts-gridline"
                            ></line>
                            <line
                              id="SvgjsLine3207"
                              x1="0"
                              y1="174.348"
                              x2="285"
                              y2="174.348"
                              stroke="#e0e0e0"
                              stroke-dasharray="0"
                              stroke-linecap="butt"
                              class="apexcharts-gridline"
                            ></line>
                          </g>
                          <g
                            id="SvgjsG3202"
                            class="apexcharts-gridlines-vertical"
                          ></g>
                          <line
                            id="SvgjsLine3209"
                            x1="0"
                            y1="174.348"
                            x2="285"
                            y2="174.348"
                            stroke="transparent"
                            stroke-dasharray="0"
                            stroke-linecap="butt"
                          ></line>
                          <line
                            id="SvgjsLine3208"
                            x1="0"
                            y1="1"
                            x2="0"
                            y2="174.348"
                            stroke="transparent"
                            stroke-dasharray="0"
                            stroke-linecap="butt"
                          ></line>
                        </g>
                        <g
                          id="SvgjsG3147"
                          class="apexcharts-bar-series apexcharts-plot-series"
                        >
                          <g
                            id="SvgjsG3148"
                            class="apexcharts-series"
                            rel="1"
                            seriesName="Ratio"
                            data:realIndex="0"
                          >
                            <path
                              id="SvgjsPath3152"
                              d="M8.55 174.348L8.55 140.93130000000002C8.55 140.93130000000002 8.549999999999997 140.93130000000002 8.549999999999997 140.93130000000002L48.45 140.93130000000002C48.45 140.93130000000002 48.45 140.93130000000002 48.45 140.93130000000002L48.45 140.93130000000002L48.45 174.348L48.45 174.348C48.45 174.348 8.55 174.348 8.55 174.348 "
                              fill="rgba(148,225,137,0.85)"
                              fill-opacity="1"
                              stroke-opacity="1"
                              stroke-linecap="round"
                              stroke-width="0"
                              stroke-dasharray="0"
                              class="apexcharts-bar-area"
                              index="0"
                              clip-path="url(#gridRectMaskxzdfchrp)"
                              pathTo="M 8.55 174.348L 8.55 140.93130000000002Q 8.55 140.93130000000002 8.55 140.93130000000002L 48.45 140.93130000000002Q 48.45 140.93130000000002 48.45 140.93130000000002L 48.45 140.93130000000002L 48.45 174.348L 48.45 174.348z"
                              pathFrom="M 8.55 174.348L 8.55 174.348L 48.45 174.348L 48.45 174.348L 48.45 174.348L 48.45 174.348L 48.45 174.348L 8.55 174.348"
                              cy="140.93130000000002"
                              cx="65.55"
                              j="0"
                              val="2.3"
                              barHeight="33.4167"
                              barWidth="39.9"
                            ></path>
                            <path
                              id="SvgjsPath3158"
                              d="M65.55 174.348L65.55 129.30810000000002C65.55 129.30810000000002 65.55 129.30810000000002 65.55 129.30810000000002L105.44999999999999 129.30810000000002C105.44999999999999 129.30810000000002 105.44999999999999 129.30810000000002 105.44999999999999 129.30810000000002L105.44999999999999 129.30810000000002L105.44999999999999 174.348L105.44999999999999 174.348C105.44999999999999 174.348 65.55 174.348 65.55 174.348 "
                              fill="rgba(148,225,137,0.85)"
                              fill-opacity="1"
                              stroke-opacity="1"
                              stroke-linecap="round"
                              stroke-width="0"
                              stroke-dasharray="0"
                              class="apexcharts-bar-area"
                              index="0"
                              clip-path="url(#gridRectMaskxzdfchrp)"
                              pathTo="M 65.55 174.348L 65.55 129.30810000000002Q 65.55 129.30810000000002 65.55 129.30810000000002L 105.44999999999999 129.30810000000002Q 105.44999999999999 129.30810000000002 105.44999999999999 129.30810000000002L 105.44999999999999 129.30810000000002L 105.44999999999999 174.348L 105.44999999999999 174.348z"
                              pathFrom="M 65.55 174.348L 65.55 174.348L 105.44999999999999 174.348L 105.44999999999999 174.348L 105.44999999999999 174.348L 105.44999999999999 174.348L 105.44999999999999 174.348L 65.55 174.348"
                              cy="129.30810000000002"
                              cx="122.55"
                              j="1"
                              val="3.1"
                              barHeight="45.0399"
                              barWidth="39.9"
                            ></path>
                            <path
                              id="SvgjsPath3164"
                              d="M122.55 174.348L122.55 116.23200000000001C122.55000000000001 116.23200000000003 122.55000000000001 116.23200000000003 122.55 116.23200000000001L162.45 116.23200000000001C162.45 116.23200000000003 162.45 116.23200000000003 162.45 116.23200000000001L162.45 116.23200000000001L162.45 174.348L162.45 174.348C162.45 174.348 122.55 174.348 122.55 174.348 "
                              fill="rgba(148,225,137,0.85)"
                              fill-opacity="1"
                              stroke-opacity="1"
                              stroke-linecap="round"
                              stroke-width="0"
                              stroke-dasharray="0"
                              class="apexcharts-bar-area"
                              index="0"
                              clip-path="url(#gridRectMaskxzdfchrp)"
                              pathTo="M 122.55 174.348L 122.55 116.23200000000001Q 122.55 116.23200000000001 122.55 116.23200000000001L 162.45 116.23200000000001Q 162.45 116.23200000000001 162.45 116.23200000000001L 162.45 116.23200000000001L 162.45 174.348L 162.45 174.348z"
                              pathFrom="M 122.55 174.348L 122.55 174.348L 162.45 174.348L 162.45 174.348L 162.45 174.348L 162.45 174.348L 162.45 174.348L 122.55 174.348"
                              cy="116.23200000000001"
                              cx="179.55"
                              j="2"
                              val="4"
                              barHeight="58.116"
                              barWidth="39.9"
                            ></path>
                            <path
                              id="SvgjsPath3170"
                              d="M179.55 174.348L179.55 27.60510000000002C179.55 27.60510000000002 179.55 27.60510000000002 179.55 27.60510000000002L219.45000000000002 27.60510000000002C219.45000000000002 27.60510000000002 219.45000000000002 27.60510000000002 219.45000000000002 27.60510000000002L219.45000000000002 27.60510000000002L219.45000000000002 174.348L219.45000000000002 174.348C219.45000000000002 174.348 179.55 174.348 179.55 174.348 "
                              fill="rgba(148,225,137,0.85)"
                              fill-opacity="1"
                              stroke-opacity="1"
                              stroke-linecap="round"
                              stroke-width="0"
                              stroke-dasharray="0"
                              class="apexcharts-bar-area"
                              index="0"
                              clip-path="url(#gridRectMaskxzdfchrp)"
                              pathTo="M 179.55 174.348L 179.55 27.60510000000002Q 179.55 27.60510000000002 179.55 27.60510000000002L 219.45000000000002 27.60510000000002Q 219.45000000000002 27.60510000000002 219.45000000000002 27.60510000000002L 219.45000000000002 27.60510000000002L 219.45000000000002 174.348L 219.45000000000002 174.348z"
                              pathFrom="M 179.55 174.348L 179.55 174.348L 219.45000000000002 174.348L 219.45000000000002 174.348L 219.45000000000002 174.348L 219.45000000000002 174.348L 219.45000000000002 174.348L 179.55 174.348"
                              cy="27.60510000000002"
                              cx="236.55"
                              j="3"
                              val="10.1"
                              barHeight="146.7429"
                              barWidth="39.9"
                            ></path>
                            <path
                              id="SvgjsPath3176"
                              d="M236.55 174.348L236.55 116.23200000000001C236.55 116.23200000000003 236.55 116.23200000000003 236.55 116.23200000000001L276.45 116.23200000000001C276.45 116.23200000000003 276.45 116.23200000000003 276.45 116.23200000000001L276.45 116.23200000000001L276.45 174.348L276.45 174.348C276.45 174.348 236.55 174.348 236.55 174.348 "
                              fill="rgba(148,225,137,0.85)"
                              fill-opacity="1"
                              stroke-opacity="1"
                              stroke-linecap="round"
                              stroke-width="0"
                              stroke-dasharray="0"
                              class="apexcharts-bar-area"
                              index="0"
                              clip-path="url(#gridRectMaskxzdfchrp)"
                              pathTo="M 236.55 174.348L 236.55 116.23200000000001Q 236.55 116.23200000000001 236.55 116.23200000000001L 276.45 116.23200000000001Q 276.45 116.23200000000001 276.45 116.23200000000001L 276.45 116.23200000000001L 276.45 174.348L 276.45 174.348z"
                              pathFrom="M 236.55 174.348L 236.55 174.348L 276.45 174.348L 276.45 174.348L 276.45 174.348L 276.45 174.348L 276.45 174.348L 236.55 174.348"
                              cy="116.23200000000001"
                              cx="293.55"
                              j="4"
                              val="4"
                              barHeight="58.116"
                              barWidth="39.9"
                            ></path>
                            <g
                              id="SvgjsG3150"
                              class="apexcharts-bar-goals-markers"
                              style="pointer-events: none"
                            >
                              <g
                                id="SvgjsG3151"
                                className="apexcharts-bar-goals-groups"
                              ></g>
                              <g
                                id="SvgjsG3157"
                                className="apexcharts-bar-goals-groups"
                              ></g>
                              <g
                                id="SvgjsG3163"
                                className="apexcharts-bar-goals-groups"
                              ></g>
                              <g
                                id="SvgjsG3169"
                                className="apexcharts-bar-goals-groups"
                              ></g>
                              <g
                                id="SvgjsG3175"
                                className="apexcharts-bar-goals-groups"
                              ></g>
                            </g>
                          </g>
                          <g
                            id="SvgjsG3149"
                            class="apexcharts-datalabels"
                            data:realIndex="0"
                          >
                            <g
                              id="SvgjsG3154"
                              class="apexcharts-data-labels"
                              transform="rotate(0)"
                            >
                              <text
                                id="SvgjsText3156"
                                font-family="Helvetica, Arial, sans-serif"
                                x="28.499999999999996"
                                y="134.93130000000002"
                                text-anchor="middle"
                                dominant-baseline="auto"
                                font-size="12px"
                                font-weight="600"
                                fill="#304758"
                                class="apexcharts-datalabel"
                                cx="28.499999999999996"
                                cy="134.93130000000002"
                                style="
                                  font-family: Helvetica, Arial, sans-serif;
                                "
                              >
                                2.3%
                              </text>
                            </g>
                            <g
                              id="SvgjsG3160"
                              class="apexcharts-data-labels"
                              transform="rotate(0)"
                            >
                              <text
                                id="SvgjsText3162"
                                font-family="Helvetica, Arial, sans-serif"
                                x="85.5"
                                y="123.30810000000002"
                                text-anchor="middle"
                                dominant-baseline="auto"
                                font-size="12px"
                                font-weight="600"
                                fill="#304758"
                                class="apexcharts-datalabel"
                                cx="85.5"
                                cy="123.30810000000002"
                                style="
                                  font-family: Helvetica, Arial, sans-serif;
                                "
                              >
                                3.1%
                              </text>
                            </g>
                            <g
                              id="SvgjsG3166"
                              class="apexcharts-data-labels"
                              transform="rotate(0)"
                            >
                              <text
                                id="SvgjsText3168"
                                font-family="Helvetica, Arial, sans-serif"
                                x="142.5"
                                y="110.23200000000003"
                                text-anchor="middle"
                                dominant-baseline="auto"
                                font-size="12px"
                                font-weight="600"
                                fill="#304758"
                                class="apexcharts-datalabel"
                                cx="142.5"
                                cy="110.23200000000003"
                                style="
                                  font-family: Helvetica, Arial, sans-serif;
                                "
                              >
                                4%
                              </text>
                            </g>
                            <g
                              id="SvgjsG3172"
                              class="apexcharts-data-labels"
                              transform="rotate(0)"
                            >
                              <text
                                id="SvgjsText3174"
                                font-family="Helvetica, Arial, sans-serif"
                                x="199.5"
                                y="21.60510000000002"
                                text-anchor="middle"
                                dominant-baseline="auto"
                                font-size="12px"
                                font-weight="600"
                                fill="#304758"
                                class="apexcharts-datalabel"
                                cx="199.5"
                                cy="21.60510000000002"
                                style="
                                  font-family: Helvetica, Arial, sans-serif;
                                "
                              >
                                10.1%
                              </text>
                            </g>
                            <g
                              id="SvgjsG3178"
                              class="apexcharts-data-labels"
                              transform="rotate(0)"
                            >
                              <text
                                id="SvgjsText3180"
                                font-family="Helvetica, Arial, sans-serif"
                                x="256.5"
                                y="110.23200000000003"
                                text-anchor="middle"
                                dominant-baseline="auto"
                                font-size="12px"
                                font-weight="600"
                                fill="#304758"
                                class="apexcharts-datalabel"
                                cx="256.5"
                                cy="110.23200000000003"
                                style="
                                  font-family: Helvetica, Arial, sans-serif;
                                "
                              >
                                4%
                              </text>
                            </g>
                          </g>
                        </g>
                        <line
                          id="SvgjsLine3210"
                          x1="0"
                          y1="0"
                          x2="285"
                          y2="0"
                          stroke="#b6b6b6"
                          stroke-dasharray="0"
                          stroke-width="1"
                          stroke-linecap="butt"
                          class="apexcharts-ycrosshairs"
                        ></line>
                        <line
                          id="SvgjsLine3211"
                          x1="0"
                          y1="0"
                          x2="285"
                          y2="0"
                          stroke-dasharray="0"
                          stroke-width="0"
                          stroke-linecap="butt"
                          class="apexcharts-ycrosshairs-hidden"
                        ></line>
                        <g
                          id="SvgjsG3212"
                          class="apexcharts-yaxis-annotations"
                        ></g>
                        <g
                          id="SvgjsG3213"
                          class="apexcharts-xaxis-annotations"
                        ></g>
                        <g
                          id="SvgjsG3214"
                          class="apexcharts-point-annotations"
                        ></g>
                      </g>
                      <text
                        id="SvgjsText3138"
                        font-family="Helvetica, Arial, sans-serif"
                        x="10"
                        y="16.5"
                        text-anchor="start"
                        dominant-baseline="auto"
                        font-size="14px"
                        font-weight="900"
                        fill="#373d3f"
                        class="apexcharts-title-text"
                        style="
                          font-family: Helvetica, Arial, sans-serif;
                          opacity: 1;
                        "
                      >
                        Profit Evolution
                      </text>
                      <g
                        id="SvgjsG3198"
                        class="apexcharts-yaxis"
                        rel="0"
                        transform="translate(-8, 0)"
                      >
                        <g id="SvgjsG3199" class="apexcharts-yaxis-texts-g"></g>
                      </g>
                      <g id="SvgjsG3137" class="apexcharts-annotations"></g>
                    </svg>
                    <div
                      class="apexcharts-legend"
                      style="max-height: 132.5px"
                    ></div>
                    <div
                      class="apexcharts-tooltip apexcharts-theme-light"
                      style="left: 106.95px; top: 169px"
                    >
                      <div
                        class="apexcharts-tooltip-title"
                        style="
                          font-family: Helvetica, Arial, sans-serif;
                          font-size: 12px;
                        "
                      >
                        Jun
                      </div>
                      <div
                        class="apexcharts-tooltip-series-group apexcharts-active"
                        style="order: 1; display: flex"
                      >
                        <span
                          class="apexcharts-tooltip-marker"
                          style="background-color: rgba(148, 225, 137, 0.85)"
                        ></span>
                        <div
                          class="apexcharts-tooltip-text"
                          style="
                            font-family: Helvetica, Arial, sans-serif;
                            font-size: 12px;
                          "
                        >
                          <div class="apexcharts-tooltip-y-group">
                            <span class="apexcharts-tooltip-text-y-label"
                              >Ratio: </span
                            ><span class="apexcharts-tooltip-text-y-value"
                              >3.1%</span
                            >
                          </div>
                          <div class="apexcharts-tooltip-goals-group">
                            <span
                              class="apexcharts-tooltip-text-goals-label"
                            ></span
                            ><span
                              class="apexcharts-tooltip-text-goals-value"
                            ></span>
                          </div>
                          <div class="apexcharts-tooltip-z-group">
                            <span class="apexcharts-tooltip-text-z-label"></span
                            ><span
                              class="apexcharts-tooltip-text-z-value"
                            ></span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="apexcharts-xaxistooltip apexcharts-xaxistooltip-top apexcharts-theme-light"
                      style="left: 84.5594px; top: 30px"
                    >
                      <div
                        class="apexcharts-xaxistooltip-text"
                        style="
                          font-family: Helvetica, Arial, sans-serif;
                          font-size: 12px;
                          min-width: 22.7861px;
                        "
                      >
                        Jun
                      </div>
                    </div>
                    <div
                      class="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light"
                    >
                      <div class="apexcharts-yaxistooltip-text"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </ViewWrapper>
</template>
<style>
.apexcharts-legend {
  display: flex;
  overflow: auto;
  padding: 0 10px;
}
.apexcharts-legend.apx-legend-position-bottom,
.apexcharts-legend.apx-legend-position-top {
  flex-wrap: wrap;
}
.apexcharts-legend.apx-legend-position-right,
.apexcharts-legend.apx-legend-position-left {
  flex-direction: column;
  bottom: 0;
}
.apexcharts-legend.apx-legend-position-bottom.apexcharts-align-left,
.apexcharts-legend.apx-legend-position-top.apexcharts-align-left,
.apexcharts-legend.apx-legend-position-right,
.apexcharts-legend.apx-legend-position-left {
  justify-content: flex-start;
}
.apexcharts-legend.apx-legend-position-bottom.apexcharts-align-center,
.apexcharts-legend.apx-legend-position-top.apexcharts-align-center {
  justify-content: center;
}
.apexcharts-legend.apx-legend-position-bottom.apexcharts-align-right,
.apexcharts-legend.apx-legend-position-top.apexcharts-align-right {
  justify-content: flex-end;
}
.apexcharts-legend-series {
  cursor: pointer;
  line-height: normal;
}
.apexcharts-legend.apx-legend-position-bottom .apexcharts-legend-series,
.apexcharts-legend.apx-legend-position-top .apexcharts-legend-series {
  display: flex;
  align-items: center;
}
.apexcharts-legend-text {
  position: relative;
  font-size: 14px;
}
.apexcharts-legend-text *,
.apexcharts-legend-marker * {
  pointer-events: none;
}
.apexcharts-legend-marker {
  position: relative;
  display: inline-block;
  cursor: pointer;
  margin-right: 3px;
  border-style: solid;
}

.apexcharts-legend.apexcharts-align-right .apexcharts-legend-series,
.apexcharts-legend.apexcharts-align-left .apexcharts-legend-series {
  display: inline-block;
}
.apexcharts-legend-series.apexcharts-no-click {
  cursor: auto;
}
.apexcharts-legend .apexcharts-hidden-zero-series,
.apexcharts-legend .apexcharts-hidden-null-series {
  display: none !important;
}
.apexcharts-inactive-legend {
  opacity: 0.45;
}
</style>
