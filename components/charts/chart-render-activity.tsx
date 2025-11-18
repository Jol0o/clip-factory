"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

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
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const chartData = [
  { date: "2024-11-01", "4k": 180, "1080p": 240 },
  { date: "2024-11-02", "4k": 220, "1080p": 290 },
  { date: "2024-11-03", "4k": 150, "1080p": 210 },
  { date: "2024-11-04", "4k": 280, "1080p": 340 },
  { date: "2024-11-05", "4k": 320, "1080p": 380 },
  { date: "2024-11-06", "4k": 190, "1080p": 260 },
  { date: "2024-11-07", "4k": 410, "1080p": 520 },
  { date: "2024-11-08", "4k": 290, "1080p": 350 },
  { date: "2024-11-09", "4k": 360, "1080p": 430 },
  { date: "2024-11-10", "4k": 240, "1080p": 310 },
  { date: "2024-11-11", "4k": 420, "1080p": 480 },
  { date: "2024-11-12", "4k": 280, "1080p": 360 },
  { date: "2024-11-13", "4k": 390, "1080p": 450 },
  { date: "2024-11-14", "4k": 310, "1080p": 380 },
  { date: "2024-11-15", "4k": 470, "1080p": 540 },
  { date: "2024-11-16", "4k": 340, "1080p": 420 },
  { date: "2024-11-17", "4k": 520, "1080p": 610 },
  { date: "2024-11-18", "4k": 380, "1080p": 450 },
  { date: "2024-11-19", "4k": 450, "1080p": 520 },
]

const chartConfig = {
  "4k": {
    label: "4K Videos",
    color: "var(--chart-1)",
  },
  "1080p": {
    label: "1080p Videos",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

export function ChartRenderActivity() {
  const [timeRange, setTimeRange] = React.useState("30d")

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date)
    const referenceDate = new Date("2024-11-19")
    let daysToSubtract = 30
    if (timeRange === "14d") {
      daysToSubtract = 14
    } else if (timeRange === "7d") {
      daysToSubtract = 7
    }
    const startDate = new Date(referenceDate)
    startDate.setDate(startDate.getDate() - daysToSubtract)
    return date >= startDate
  })

  return (
    <Card className="pt-0 h-full">
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1">
          <CardTitle>Render Activity</CardTitle>
          <CardDescription>
            Videos rendered by resolution
          </CardDescription>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger
            className="hidden  rounded-lg sm:ml-auto sm:flex"
            aria-label="Select a value"
          >
            <SelectValue placeholder="Last 30 days" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectItem value="30d" className="rounded-lg">
              Last 30 days
            </SelectItem>
            <SelectItem value="14d" className="rounded-lg">
              Last 14 days
            </SelectItem>
            <SelectItem value="7d" className="rounded-lg">
              Last 7 days
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto sm:h-[400px] md:h-[400px] lg:h-[750px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fill4k" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-4k)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-4k)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fill1080p" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-1080p)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-1080p)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="1080p"
              type="natural"
              fill="url(#fill1080p)"
              stroke="var(--color-1080p)"
              stackId="a"
            />
            <Area
              dataKey="4k"
              type="natural"
              fill="url(#fill4k)"
              stroke="var(--color-4k)"
              stackId="a"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
