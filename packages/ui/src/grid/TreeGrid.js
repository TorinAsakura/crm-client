import React from 'react'
import { Column, Layout } from 'flex-layouts'
import { Condition } from '../condition'
import { Divider } from '../divider'
import Header from './Header'
import GridRow from './Row'

const renderRows = (data, columns, level = 0, onRowClick) =>
  data.reduce((result, value, index) => {
    result.push(
      <GridRow
        index={index}
        level={level}
        key={value.id}
        columns={columns}
        value={value}
        onClick={onRowClick}
      />,
    )

    result.push(<Divider key={`divider-${value.id}`} />)

    if (Array.isArray(value.children) && value.expanded) {
      return [
        ...result,
        ...renderRows(value.children, columns, level + 1, onRowClick),
      ]
    }

    return result
  }, [])

const TreeGrid = ({ children, data = [], onRowClick }) => (
  <Column>
    <Layout>
      <Header
        columns={children}
      />
    </Layout>
    <Layout>
      <Divider />
    </Layout>
    <Layout>
      <Column>
        {renderRows(data, children, onRowClick)}
      </Column>
    </Layout>
  </Column>
)

export default TreeGrid
