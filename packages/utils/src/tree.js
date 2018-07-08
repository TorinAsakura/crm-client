import { createReducer } from './createReducer'

const action = (name, action) => `@@bloom/${name}/${action}`

export const createTreeActions = (name) => ({
  toggle: id => ({
    type: action(name, 'TOGGLE'),
    id,
  }),
  select: id => ({
    type: action(name, 'SELECT'),
    id,
  }),
})

const traverse = (state, match, visitor) =>
  state.map((item) => {
    if (Array.isArray(item.children)) {
      item.children = traverse(item.children, match, visitor)
    }

    if (!match || match(item)) {
      return visitor(item)
    }

    return item
  })

const findNodes = (state, match) =>
  state.reduce((result, item) => {
    if (Array.isArray(item.children))  {
      const children = findNodes(item.children, match)

      if (children && children.length > 0) {
        return [
          ...result,
          ...children,
        ]
      }
    }

    if (match(item)) {
      return [
        ...result,
        item,
      ]
    }

    return result
  }, [])

const findNode = (state, match) => {
  const [node] = findNodes(state, match)

  return node
}

const findRootNode = (state, match) => {
  const [root] = state.filter((item) => {
    if (match(item)) {
      return item
    }

    return findNode((item.children || []), match)
  })

  return root
}

const updateSelection = (node) => {
  if (!Array.isArray(node.children)) {
    return node
  }

  const children = node.children.map(updateSelection)

  const selected = children.filter(child => child.selected)
  const partialSelected = children.filter(child => child.partialSelected)

  return {
    ...node,
    children,
    selected: selected.length === children.length,
    partialSelected: selected.length === children.length
      ? false
      : selected.length > 0 || partialSelected.length > 0,
  }
}

export const createTreeReducer = (name, initialState) =>
  createReducer(initialState, {
    [action(name, 'TOGGLE')]: (state, { id }) => traverse(
      state,
      item => item.id === id,
      item => ({
        ...item,
        expanded: !item.expanded,
      }),
    ),
    [action(name, 'SELECT')]: (state, { id }) => {
      const updated = traverse(
        state,
        item => item.id === id,
        item => {
          if (Array.isArray(item.children)) {
            return {
              ...item,
              selected: !item.selected,
              children: traverse(
                item.children,
                null,
                child => ({
                  ...child,
                  selected: !item.selected,
                }),
              ),
            }
          }

          return ({
            ...item,
            selected: !item.selected,
          })
        }
      )

      const root = findRootNode(updated, item => item.id === id)

      return traverse(
        updated,
        item => item.id === root.id,
        updateSelection,
      )
/*
      return updated

      const root = findRootNode(state, item => item.id === id)
      const node = findNode([root], item => item.id === id)

      if (node.children) {
        const [updatedRoot] = traverse(
          [root],
          null,
          item => ({
            ...item,
            selected: !node.selected,
            partialSelected: false,
            expanded: true,
          }),
        )

        return traverse(
          state,
          item => item.id === root.id,
          () => updatedRoot,
        )
      } else {
        const [updatedChildren] = traverse(
          [root],
          item => item.id === id,
          item => ({
            ...item,
            selected: !item.selected,
          }),
        )

        const targetNodes = findNodes([updatedChildren], item => !item.children)

        const selectedNodes = targetNodes.filter(item => item.selected)

        const selected = targetNodes.length === selectedNodes.length
        const partialSelected = selected ? false : selectedNodes.length > 0

        const [updatedRoot] = traverse(
          [root],
          item => item.children,
          item => ({
            ...item,
            selected,
            partialSelected,
          }),
        )

        return traverse(
          state,
          item => item.id === root.id,
          () => updatedRoot,
        )
      }

      return state
*/
    },
  })
