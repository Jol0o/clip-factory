import { ChartRenderActivity } from "@/components/charts/chart-render-activity";
import { ChartRenderPerformance } from "@/components/charts/chart-render-performance";
import { ChartVideoFormats } from "@/components/charts/chart-video-formats";
import DashboardCards from "@/components/dashbaord-card";

export default function Home() {
  return (
    <div className="flex-1 overflow-auto container mx-auto">
      <div className="lg:py-8">
        <DashboardCards />

        <div className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-6 py-6">
          <div className="lg:col-span-2 lg:row-span-2">
            <ChartRenderActivity />
          </div>
          <ChartVideoFormats />
          <ChartRenderPerformance />
        </div>
      </div>
    </div>
  );
}
