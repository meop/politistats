<script lang='ts'>
import type { FeatureCollection } from 'geojson'
import { ChoroplethChart, topojson } from 'chartjs-chart-geo'
import { onMount } from 'svelte'

let { data } = $props()

let canvas: HTMLCanvasElement

const nation = (
  topojson.feature(
    data.landGeos,
    data.landGeos.objects.nation,
  ) as unknown as FeatureCollection
).features[0]

const lands = (
  topojson.feature(
    data.landGeos,
    data.landGeos.objects.states,
  ) as unknown as FeatureCollection
).features

onMount(async () => {
  const ctx = canvas.getContext('2d')
  if (ctx) {
    const config = {
      type: 'choropleth' as const,
      data: {
        labels: lands.map(l => l.properties?.name),
        datasets: [
          {
            label: 'Lands' as const,
            outline: [nation],
            showOutline: true,
            data: lands.map(l => ({ feature: l, value: Math.random() * 11 })),
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          projection: {
            axis: 'x' as const,
            projection: 'albersUsa' as const,
          },
          color: {
            axis: 'x' as const,
            quantize: 8,
            legend: {
              position: 'bottom-right' as const,
              align: 'right' as const,
            },
          },
        },
      },
    }

    new ChoroplethChart(ctx, config)
  }
})
</script>


<div class='container'>
  <canvas bind:this={canvas}>

  </canvas>
  {JSON.stringify(data)}
</div>
