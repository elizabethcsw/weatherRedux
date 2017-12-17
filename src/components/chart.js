import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesSpots, SparklinesReferenceLine } from 'react-sparklines';

const Chart = (props) => {
  function average(numArray){
    return _.round(_.sum(numArray)/(numArray.length))
  }

  return (
    <div>
      <Sparklines height={120} width={250} data={props.data} margin={6}>
          <SparklinesLine style={{ strokeWidth: 3, stroke: props.color, fill: "none" }} />

        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>{average(props.data)} {props.units}</div>
    </div>

  )
}

export default Chart;
