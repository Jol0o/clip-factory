"use client"

import { Bar, BarChart, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { date: "2024-11-14", gpuRender: 420, cpuRender: 280 },
  { date: "2024-11-15", gpuRender: 380, cpuRender: 320 },
  { date: "2024-11-16", gpuRender: 520, cpuRender: 140 },
  { date: "2024-11-17", gpuRender: 290, cpuRender: 450 },
  { date: "2024-11-18", gpuRender: 600, cpuRender: 350 },
  { date: "2024-11-19", gpuRender: 480, cpuRender: 400 },
]

const chartConfig = {
  gpuRender: {
    label: "GPU Render",
    color: "var(--chart-1)",
  },
  cpuRender: {
    label: "CPU Render",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

export function ChartRenderPerformance() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Render Performance</CardTitle>
        <CardDescription>
          Processing time (minutes) - GPU vs CPU rendering
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <XAxis
              dataKey="date"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => {
                return new Date(value).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }}
            />
            <Bar
              dataKey="gpuRender"
              stackId="a"
              fill="var(--color-gpuRender)"
              radius={[0, 0, 4, 4]}
            />
            <Bar
              dataKey="cpuRender"
              stackId="a"
              fill="var(--color-cpuRender)"
              radius={[4, 4, 0, 0]}
            />
            <ChartTooltip
              content={<ChartTooltipContent />}
              cursor={false}
              defaultIndex={1}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
