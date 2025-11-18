"use client"

import { TrendingUp } from 'lucide-react'
import { RadialBar, RadialBarChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
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
  { format: "MP4", count: 1240, fill: "var(--color-mp4)" },
  { format: "WebM", count: 890, fill: "var(--color-webm)" },
  { format: "MOV", count: 760, fill: "var(--color-mov)" },
  { format: "AVI", count: 540, fill: "var(--color-avi)" },
  { format: "Other", count: 290, fill: "var(--color-other)" },
]

const chartConfig = {
  count: {
    label: "Videos",
  },
  mp4: {
    label: "MP4",
    color: "var(--chart-1)",
  },
  webm: {
    label: "WebM",
    color: "var(--chart-2)",
  },
  mov: {
    label: "MOV",
    color: "var(--chart-3)",
  },
  avi: {
    label: "AVI",
    color: "var(--chart-4)",
  },
  other: {
    label: "Other",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig

export function ChartVideoFormats() {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Video Formats</CardTitle>
        <CardDescription>Total videos created by format</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <RadialBarChart data={chartData} innerRadius={30} outerRadius={110}>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel nameKey="format" />}
            />
            <RadialBar dataKey="count" background />
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 leading-none font-medium">
          Trending up by 8.3% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          MP4 remains the most popular format
        </div>
      </CardFooter>
    </Card>
  )
}
