const replacement = {
  t: 'top',
  r: 'right',
  b: 'bottom',
  l: 'left',
  m: 'middle',
  c: 'center',
}

const pattern = new RegExp(Object.keys(replacement).join('|'), 'ig')

export function expose(value) {
  return value.replace(pattern, item => `${replacement[item]} `).split('-').map(item => item.trim())
}
