import { createReducer, createTreeReducer } from '@bloom/utils'
//import * as actions from '../constants/remote'

const initialState = [
  {
    id: 'settings',
    name: 'Settings',
    expanded: false,
    selected: false,
    partialSelected: false,
    children: [
      {
        id: 'users',
        name: 'Manage Users',
        expanded: false,
        selected: false,
        partialSelected: false,
        children: [
          {
            id: 'create_user',
            name: 'Create User',
            selected: false,
          },
          {
            id: 'delete_user',
            name: 'Delete User',
            selected: false,
          },
          {
            id: 'list_users',
            name: 'List Users',
            selected: false,
          },
          {
            id: 'update_user',
            name: 'Update User',
            selected: false,
          },
        ],
      },
      {
        id: 'roles',
        name: 'Manage Roles',
        expanded: false,
        selected: false,
        partialSelected: false,
        children: [
          {
            id: 'create_role',
            name: 'Create Role',
            selected: false,
          },
          {
            id: 'delete_role',
            name: 'Delete Role',
            selected: false,
          },
          {
            id: 'list_roles',
            name: 'List Roles',
            selected: false,
          },
          {
            id: 'update_role',
            name: 'Update Role',
            selected: false,
          },
        ],
      },
    ],
  },
]

export default createTreeReducer('roles', initialState)
