import type { Meta, StoryObj } from "@storybook/react-vite"

import { Bar, BarChart, CartesianGrid, Line, LineChart, XAxis } from "recharts"

const meta = {
  title: "UI/Chart Container",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"

const revenueData = [
  { month: "May", revenue: 18600, refunds: 1200 },
  { month: "Jun", revenue: 21400, refunds: 900 },
  { month: "Jul", revenue: 19800, refunds: 1500 },
  { month: "Aug", revenue: 24100, refunds: 1100 },
  { month: "Sep", revenue: 27300, refunds: 800 },
  { month: "Oct", revenue: 25900, refunds: 1000 },
]

const revenueConfig = {
  revenue: {
    label: "Revenue",
    color: "var(--chart-2)",
  },
  refunds: {
    label: "Refunds",
    color: "var(--chart-4)",
  },
} satisfies ChartConfig

function BarDefaultExample() {
  return (
    <ChartContainer config={revenueConfig} className="w-full max-w-sm">
      <BarChart accessibilityLayer data={revenueData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="revenue" fill="var(--color-revenue)" radius={4} />
      </BarChart>
    </ChartContainer>
  )
}

function LineWithLegendExample() {
  return (
    <ChartContainer config={revenueConfig} className="w-full max-w-sm">
      <LineChart accessibilityLayer data={revenueData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Line
          dataKey="revenue"
          type="monotone"
          stroke="var(--color-revenue)"
          strokeWidth={2}
          dot={false}
        />
        <Line
          dataKey="refunds"
          type="monotone"
          stroke="var(--color-refunds)"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ChartContainer>
  )
}

export const BarDefault: Story = { render: () => <BarDefaultExample /> }
export const LineWithLegend: Story = { render: () => <LineWithLegendExample /> }
