
import { Bar, BarChart, CartesianGrid, LabelList, XAxis, Cell } from "recharts"


import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import type { product } from "./Rectangle"



export default function ChartBarLabel({data} : {data : product[]}) {
    
    const chartData = data.slice(0, 6).map((p) => {
        return {
            category : p.category,
            quantity : p.rating.count
        }
    })
    

    const chartConfig = data.slice(0, 6).reduce((config, product, i) => {
    config[product.category] = {
        label: product.category,
        color: `var(--chart-${i})`,
    };
    return config;
    }, {} as ChartConfig);

    console.log(chartConfig)
    console.log(chartData)

    



  return (


        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 20,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="quantity" radius={8}>
            {chartData.map((_, index) => (
                <Cell
                key={`cell-${index}`}
                fill={`var(--chart-${index})`}
                />
            ))}
            <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
            />
            </Bar>
          </BarChart>
        </ChartContainer>
  )
}
