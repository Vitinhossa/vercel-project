let width: number;
let height: number;
let gradient: { addColorStop: (arg0: number, arg1: any) => void } | null;
export function getGradient(
  ctx: {
    createLinearGradient: (
      arg0: number,
      arg1: any,
      arg2: number,
      arg3: any,
    ) => any;
  },
  chartArea: { right: number; left: number; bottom: number; top: number },
  colors: string[],
  dataset: number,
) {
  const chartWidth = chartArea.right - chartArea.left;
  const chartHeight = chartArea.bottom - chartArea.top;
  if (gradient === null || width !== chartWidth || height !== chartHeight) {
    // Create the gradient because this is either the first render
    // or the size of the chart has changed
    width = chartWidth;
    height = chartHeight;
    gradient = ctx.createLinearGradient(
      dataset,
      chartArea.bottom,
      dataset,
      chartArea.top,
    );
    gradient?.addColorStop(1, colors[0]);
    gradient?.addColorStop(0.2, colors[1]);
  }

  return gradient;
}
