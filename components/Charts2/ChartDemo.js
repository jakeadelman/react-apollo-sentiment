import React from "react";
import PropTypes from "prop-types";

import { format } from "d3-format";
import { timeFormat } from "d3-time-format";

import { ChartCanvas, Chart } from "react-stockcharts";
import { CandlestickSeries, LineSeries } from "react-stockcharts/lib/series";
import { XAxis, YAxis } from "react-stockcharts/lib/axes";
import {
  CrossHairCursor,
  EdgeIndicator,
  CurrentCoordinate,
  MouseCoordinateX,
  MouseCoordinateY
} from "react-stockcharts/lib/coordinates";
import {
  timeCompare,
  getYRangeNums,
  findYValBuy,
  findYValSell
} from "./helpers";

import {
  LabelAnnotation,
  Label,
  Annotate
} from "react-stockcharts/lib/annotation";
import { discontinuousTimeScaleProvider } from "react-stockcharts/lib/scale";
import {
  OHLCTooltip,
  MovingAverageTooltip
} from "react-stockcharts/lib/tooltip";
import { ema } from "react-stockcharts/lib/indicator";
import { fitWidth } from "react-stockcharts/lib/helper";
import { last } from "react-stockcharts/lib/utils";

class CandleStickChartWithAnnotation extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    // console.log(this.props);
    let yRangeNums = getYRangeNums(this.props.data);
    this.setState({ yRangeNums: yRangeNums });
  }
  render() {
    const margin = { left: 20, right: 50, top: 30, bottom: 30 };
    const height = 400;
    const { type, data: initialData, width, ratio } = this.props;

    const [yAxisLabelX, yAxisLabelY] = [
      width - margin.left - 40,
      (height - margin.top - margin.bottom) / 2
    ];

    const xScaleProvider = discontinuousTimeScaleProvider.inputDateAccessor(
      d => d.date
    );
    const { data, xScale, xAccessor, displayXAccessor } = xScaleProvider(
      initialData
    );

    const start = xAccessor(last(data));
    const end = xAccessor(data[Math.max(0, data.length - 150)]);
    // console.log(start, "CHART START");
    // console.log(end, "CHART END");
    const xExtents = [start, end];

    if (this.state == null) {
      return <div>Loading...</div>;
    }
    // try {
    return (
      <ChartCanvas
        height={height}
        ratio={ratio}
        width={width}
        margin={margin}
        type={type}
        data={data}
        xScale={xScale}
        seriesName="BTC"
        xAccessor={xAccessor}
        displayXAccessor={displayXAccessor}
        xExtents={xExtents}
      >
        <Chart
          id={1}
          yExtents={[d => [d.high, d.low]]}
          padding={{ top: 80, bottom: 80 }}
        >
          <XAxis axisAt="bottom" orient="bottom" />
          <MouseCoordinateX
            at="bottom"
            orient="bottom"
            displayFormat={timeFormat("%Y-%m-%d")}
          />
          <MouseCoordinateY
            at="right"
            orient="right"
            displayFormat={format(".2f")}
          />
          <YAxis axisAt="right" orient="right" ticks={5} />
          <CandlestickSeries />
          <OHLCTooltip origin={[-10, 0]} />
          {this.props.trades.map(each => {
            // console.log(
            //   "mapping total length" + this.props.trades.length.toString(),
            //   each
            // );
            let datu = new Date(each.timestamp);
            if (each.side == "Buy") {
              const annotationPropsUp = {
                fontFamily: "Glyphicons Halflings",
                fontSize: 20,
                fill: "#018001",
                opacity: 0.8,
                text: "˄",
                y: ({ yScale }) => {
                  return (
                    yScale.range()[0] *
                    findYValBuy(
                      this.state.yRangeNums[0],
                      this.state.yRangeNums[1],
                      each.price
                    )
                  );
                },
                onClick: console.log.bind(console),
                tooltip: d => timeFormat("%B")(d.date)
                // onMouseOver: console.log.bind(console),
              };

              return (
                <Annotate
                  with={LabelAnnotation}
                  when={d => timeCompare(d, datu, this.props.timeframe)}
                  usingProps={annotationPropsUp}
                />
              );
            } else if (each.side == "Sell") {
              const annotationPropsDown = {
                fontFamily: "Glyphicons Halflings",
                fontSize: 20,
                fill: "#FF0000",
                opacity: 0.8,
                text: "˅",
                y: ({ yScale }) => {
                  return (
                    yScale.range()[0] *
                    findYValSell(
                      this.state.yRangeNums[0],
                      this.state.yRangeNums[1],
                      each.price
                    )
                  );
                },
                onClick: console.log.bind(console),
                tooltip: d => timeFormat("%B")(d.date)
                // onMouseOver: console.log.bind(console),
              };
              return (
                <Annotate
                  with={LabelAnnotation}
                  when={d => timeCompare(d, datu, this.props.timeframe)}
                  usingProps={annotationPropsDown}
                />
              );
            } else {
              return;
            }
          })}
        </Chart>
        <CrossHairCursor strokeDasharray="LongDashDot" />
      </ChartCanvas>
    );
    // } catch (err) {
    //   return <div>no chart</div>;
    // }
  }
}

CandleStickChartWithAnnotation.propTypes = {
  data: PropTypes.array.isRequired,
  width: PropTypes.number.isRequired,
  ratio: PropTypes.number.isRequired,
  type: PropTypes.oneOf(["svg", "hybrid"]).isRequired
};

CandleStickChartWithAnnotation.defaultProps = {
  type: "svg"
};

CandleStickChartWithAnnotation = fitWidth(CandleStickChartWithAnnotation);

export default CandleStickChartWithAnnotation;
