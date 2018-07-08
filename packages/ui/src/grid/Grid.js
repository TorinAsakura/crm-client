import React from 'react'
import { Column, Layout } from 'flex-layouts'
import { Condition } from '../condition'
import { Divider } from '../divider'
import Header from './Header'
import GridRow from './Row'

const Grid = ({ children, data = [], hideHeader, rowColor, onRowClick }) => (
  <Column>
    <Condition match={!hideHeader}>
      <Layout>
        <Header
          columns={children}
        />
      </Layout>
    </Condition>
    <Layout>
      <Divider />
    </Layout>
    <Layout>
      <Column>
        {data.reduce((result, value, index) => {
          result.push(
            <GridRow
              index={index}
              key={value.id}
              columns={children}
              value={value}
              color={rowColor}
              onClick={onRowClick}
            />,
          )
  
          result.push(<Divider key={`divider-${value.id}`} />)
  
          return result
        }, [])}
      </Column>
    </Layout>
  </Column>
)

export default Grid
