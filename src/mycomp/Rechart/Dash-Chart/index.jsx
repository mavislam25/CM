import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,Label,Legend } from 'recharts';

const Index = ({data,dataKey0,dataKey1,dataKey2,dataKey3,dataKey4,dataKey5,grid,Currency,Unit}) => {
    return (
        <ResponsiveContainer width="100%" height="100%" >
        <LineChart 
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          {grid &&< CartesianGrid strokeDasharray="3 3"/>}
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={dataKey0}/>
          <YAxis domain={['dataMin - 10', 'dataMax + 10']} >
            <Label id="chartlabel"angle={270} position='left' style={{ textAnchor: 'middle' }}>
            {Currency+Unit}
            </Label>
            </YAxis >
          <Tooltip/>
          <Legend align="left"/>
          <Line type="monotone" dataKey={dataKey1} stroke="#9C0000" activeDot={{ r: 4}} Add dot={false}/>
          <Line type="monotone" dataKey={dataKey2} stroke="#E9B400" Add dot={false}/>
          <Line type="monotone" dataKey={dataKey3} stroke="#2BBFBE" Add dot={false}/>
          <Line type="monotone" dataKey={dataKey4} stroke="#23658E" Add dot={false}/>
          <Line type="monotone" dataKey={dataKey5} stroke="#B28704" Add dot={false}/>
        </LineChart>
      </ResponsiveContainer>
    )
}

export default Index
