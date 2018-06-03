import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    display: 'inline-flex',
    fontFamily: '"Maven Pro", sans-serif',
    fontWeight: 400,
    lineHeight: 1,
    color: '#000000',
  },
  uppercase: {
    textTransform: 'uppercase',
  },
  underline: {
    textDecoration: 'underline',
  },
  opacity: {
    opacity: '0.5',
  },
  'size=xxxxlarge': {
    fontSize: '55px',
  },
  'size=xxxlarge': {
    fontSize: '48px',
  },
  'size=xxlarge': {
    fontSize: '36px',
  },
  'size=xlarge': {
    fontSize: '30px',
  },
  'size=large': {
    fontSize: '24px',
  },
  'size=medium': {
    fontSize: '18px',
  },
  'size=normal': {
    fontSize: '16px',
  },
  'size=small': {
    fontSize: '14px',
  },
  'size=xsmall': {
    fontSize: '12px',
  },
  'color=black600': {
    color: '#171818',
  },
  'color=white': {
    color: '#FFFFFF',
  },
  'color=white300': {
    color: '#f1f2f2',
  },
  'color=inherit': {
    color: 'inherit',
  },
  'color=gray200': {
    color: '#bbbbbb',
  },
  'color=gray400': {
    color: '#959595',
  },
  'color=gray600': {
    color: '#6B6B6B',
  },
  'color=yellow500': {
    color: '#E6A70D',
  },
  'color=orange500': {
    color: '#c17800',
  },
  'color=green500': {
    color: '#2D8F74',
  },
  'color=green800': {
    color: '#1d3846',
  },
  'weight=light': {
    fontWeight: 300,
  },
  'weight=medium': {
    fontWeight: 500,
  },
  'weight=bold': {
    fontWeight: 700,
  },
  'align=center': {
    textAlign: 'center',
  },
  'lineHeight=large': {
    lineHeight: '26px',
  },
  'lineHeight=medium': {
    lineHeight: '20px',
  },
})

const Text = ({
  id, children, size = 'normal', weight, color, uppercase, underline, align, opacity, lineHeight,
}) => (
  <div
    id={id}
    className={styles({
      size, color, uppercase, underline, align, weight, opacity, lineHeight,
    })}
  >
    {children}
  </div>
)

export default Text
