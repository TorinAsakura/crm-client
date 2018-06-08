import React from 'react'
import { injectIntl, defineMessages } from 'react-intl'
import { Column, Layout } from 'flex-layouts'
import { Toolbar as BaseToolbar, Item, NestedItem, Group } from '@bloom/ui/src/toolbar'
import {
  PieIcon, LeadsIcon, OpportunityIcon, CurrentLeads, AccountsIcon,
  BlacklistIcon, OrdersIcon, WarehouseIcon, PackingIcon, InventoryIcon,
  FulfillmentIcon, DistributionIcon, RouteIcon, DriverIcon, VehicleIcon,
  CalendarIcon, WalletIcon, BagIcon, PlusMinusIcon, DollarIcon, ReportsIcon,
  AccountIcon, CircleIcon, CartIcon, AreasIcon, RevenueIcon,
  GearIcon, HandbagIcon, BarsIcon, PricingIcon, LogsIcon, ConfigIcon,
} from '@bloom/ui/src/icons'

const messages = defineMessages({
  dashboard: {
    id: 'toolbar.dashboard',
    defaultMessage: 'Dashboard',
  },
  leads: {
    id: 'toolbar.leads',
    defaultMessage: 'Leads',
  },
  opportunity: {
    id: 'toolbar.leads.opportunity',
    defaultMessage: 'Opportunity',
  },
  currentLeads: {
    id: 'toolbar.leads.current_leads',
    defaultMessage: 'Current Leads',
  },
  accounts: {
    id: 'toolbar.accounts',
    defaultMessage: 'Accounts',
  },
  blacklist: {
    id: 'toolbar.accounts.blacklist',
    defaultMessage: 'Blacklist',
  },
  orders: {
    id: 'toolbar.orders',
    defaultMessage: 'Orders',
  },
  warehouse: {
    id: 'toolbar.warehouse',
    defaultMessage: 'Warehouse',
  },
  packing: {
    id: 'toolbar.warehouse.packing',
    defaultMessage: 'Filling & Packing',
  },
  inventory: {
    id: 'toolbar.warehouse.inventory',
    defaultMessage: 'Inventory',
  },
  fulfillment: {
    id: 'toolbar.warehouse.fulfillment',
    defaultMessage: 'Fulfillment',
  },
  distribution: {
    id: 'toolbar.distribution',
    defaultMessage: 'Distribution',
  },
  route: {
    id: 'toolbar.distribution.route',
    defaultMessage: 'Route Management',
  },
  driver: {
    id: 'toolbar.distribution.driver',
    defaultMessage: 'Driver Management',
  },
  vehicle: {
    id: 'toolbar.distribution.vehicle',
    defaultMessage: 'Vehicle management',
  },
  demos: {
    id: 'toolbar.demos',
    defaultMessage: 'Demos',
  },
  finance: {
    id: 'toolbar.finance',
    defaultMessage: 'Finance',
  },
  incoming: {
    id: 'toolbar.finance.incoming',
    defaultMessage: 'Incoming Revenue',
  },
  commissions: {
    id: 'toolbar.finance.commissions',
    defaultMessage: 'Commissions',
  },
  expenses: {
    id: 'toolbar.finance.expenses',
    defaultMessage: 'Expenses & Reimburs...',
  },
  reports: {
    id: 'toolbar.reports',
    defaultMessage: 'Reports',
  },
  reps: {
    id: 'toolbar.reports.reps',
    defaultMessage: 'Reps',
  },
  products: {
    id: 'toolbar.reports.products',
    defaultMessage: 'Products',
  },
  areas: {
    id: 'toolbar.reports.areas',
    defaultMessage: 'Areas',
  },
  revenue: {
    id: 'toolbar.reports.revenue',
    defaultMessage: 'Revenue',
  },
  settings: {
    id: 'toolbar.settings',
    defaultMessage: 'Settings',
  },
  companies: {
    id: 'toolbar.settings.companies',
    defaultMessage: 'Companies',
  },
  locations: {
    id: 'toolbar.settings.locations',
    defaultMessage: 'Locations',
  },
  users: {
    id: 'toolbar.settings.users',
    defaultMessage: 'Users',
  },
  pricing: {
    id: 'toolbar.settings.pricing',
    defaultMessage: 'Pricing',
  },
  logs: {
    id: 'toolbar.settings.logs',
    defaultMessage: 'Logs',
  },
  config: {
    id: 'toolbar.settings.config',
    defaultMessage: 'Config',
  },
})

const Toolbar = ({ intl, minimized, onToggle }) => (
  <BaseToolbar
    minimized={minimized}
    onToggle={onToggle}
  >
    <Column>
      <Layout basis='16px' />
      <Layout>
        <Item
          exact
          to='/'
          minimized={minimized}
          icon={<PieIcon height={24} />}
        >
          {intl.formatMessage(messages.dashboard)}
        </Item>
      </Layout>
      <Layout>
        <Group
          exact
          to='/leads'
          minimized={minimized}
          icon={<LeadsIcon height={24} />}
          title={intl.formatMessage(messages.leads)}
        >
          <NestedItem
            to='/leads/opportunity'
            minimized={minimized}
            icon={<OpportunityIcon height={24} />}
          >
            {intl.formatMessage(messages.opportunity)}
          </NestedItem>
          <NestedItem
            to='/leads/current-leads'
            minimized={minimized}
            icon={<CurrentLeads height={24} />}
          >
            {intl.formatMessage(messages.currentLeads)}
          </NestedItem>
        </Group>
      </Layout>
      <Layout>
        <Group
          exact
          to='/accounts'
          minimized={minimized}
          icon={<AccountsIcon height={24} />}
          title={intl.formatMessage(messages.accounts)}
        >
          <NestedItem
            to='/accounts/blacklist'
            minimized={minimized}
            icon={<BlacklistIcon height={24} />}
          >
            {intl.formatMessage(messages.blacklist)}
          </NestedItem>
        </Group>
      </Layout>
      <Layout>
        <Item
          exact
          to='/orders'
          minimized={minimized}
          icon={<OrdersIcon height={24} />}
        >
          {intl.formatMessage(messages.orders)}
        </Item>
      </Layout>
      <Layout>
        <Group
          exact
          to='/warehouse'
          minimized={minimized}
          icon={<WarehouseIcon height={24} />}
          title={intl.formatMessage(messages.warehouse)}
        >
          <NestedItem
            to='/warehouse/filling-and-packing'
            minimized={minimized}
            icon={<PackingIcon height={24} />}
          >
            {intl.formatMessage(messages.packing)}
          </NestedItem>
          <NestedItem
            to='/warehouse/inventory'
            minimized={minimized}
            icon={<InventoryIcon height={24} />}
          >
            {intl.formatMessage(messages.inventory)}
          </NestedItem>
          <NestedItem
            to='/warehouse/fulfillment'
            minimized={minimized}
            icon={<FulfillmentIcon height={24} />}
          >
            {intl.formatMessage(messages.fulfillment)}
          </NestedItem>
        </Group>
      </Layout>
      <Layout>
        <Group
          exact
          to='/distribution'
          minimized={minimized}
          icon={<DistributionIcon height={24} />}
          title={intl.formatMessage(messages.distribution)}
        >
          <NestedItem
            to='/distribution/route-management'
            minimized={minimized}
            icon={<RouteIcon height={24} />}
          >
            {intl.formatMessage(messages.route)}
          </NestedItem>
          <NestedItem
            to='/distribution/driver-managemnt'
            minimized={minimized}
            icon={<DriverIcon height={24} />}
          >
            {intl.formatMessage(messages.driver)}
          </NestedItem>
          <NestedItem
            to='/distribution/vehicle-managemnt'
            minimized={minimized}
            icon={<VehicleIcon height={24} />}
          >
            {intl.formatMessage(messages.vehicle)}
          </NestedItem>
        </Group>
      </Layout>
      <Layout>
        <Item
          exact
          to='/demos'
          minimized={minimized}
          icon={<CalendarIcon height={24} />}
        >
          {intl.formatMessage(messages.demos)}
        </Item>
      </Layout>
      <Layout>
        <Group
          exact
          to='/finance'
          minimized={minimized}
          icon={<WalletIcon height={24} />}
          title={intl.formatMessage(messages.finance)}
        >
          <NestedItem
            to='/finance/incoming-revenue'
            minimized={minimized}
            icon={<BagIcon height={24} />}
          >
            {intl.formatMessage(messages.incoming)}
          </NestedItem>
          <NestedItem
            to='/finance/commissions'
            minimized={minimized}
            icon={<PlusMinusIcon height={24} />}
          >
            {intl.formatMessage(messages.commissions)}
          </NestedItem>
          <NestedItem
            to='/finance/expenses'
            minimized={minimized}
            icon={<DollarIcon height={24} />}
          >
            {intl.formatMessage(messages.expenses)}
          </NestedItem>
        </Group>
      </Layout>
      <Layout>
        <Group
          exact
          to='/reports'
          minimized={minimized}
          icon={<ReportsIcon height={24} />}
          title={intl.formatMessage(messages.reports)}
        >
          <NestedItem
            to='/reports/accounts'
            minimized={minimized}
            icon={<AccountIcon height={24} />}
          >
            {intl.formatMessage(messages.accounts)}
          </NestedItem>
          <NestedItem
            to='/reports/reps'
            minimized={minimized}
            icon={<CircleIcon height={24} />}
          >
            {intl.formatMessage(messages.reps)}
          </NestedItem>
          <NestedItem
            to='/reports/orders'
            minimized={minimized}
            icon={<OrdersIcon height={24} />}
          >
            {intl.formatMessage(messages.orders)}
          </NestedItem>
          <NestedItem
            to='/reports/products'
            minimized={minimized}
            icon={<CartIcon height={24} />}
          >
            {intl.formatMessage(messages.products)}
          </NestedItem>
          <NestedItem
            to='/reports/areas'
            minimized={minimized}
            icon={<AreasIcon height={24} />}
          >
            {intl.formatMessage(messages.areas)}
          </NestedItem>
          <NestedItem
            to='/reports/revenue'
            minimized={minimized}
            icon={<RevenueIcon height={24} />}
          >
            {intl.formatMessage(messages.revenue)}
          </NestedItem>
        </Group>
      </Layout>
      <Layout>
        <Group
          exact
          to='/settings'
          minimized={minimized}
          icon={<GearIcon height={24} />}
          title={intl.formatMessage(messages.settings)}
        >
          <NestedItem
            to='/settings/products'
            minimized={minimized}
            icon={<HandbagIcon height={24} />}
          >
            {intl.formatMessage(messages.products)}
          </NestedItem>
          <NestedItem
            to='/settings/companies'
            minimized={minimized}
            icon={<BarsIcon height={24} />}
          >
            {intl.formatMessage(messages.companies)}
          </NestedItem>
          <NestedItem
            to='/settings/locations'
            minimized={minimized}
            icon={<RouteIcon height={24} />}
          >
            {intl.formatMessage(messages.locations)}
          </NestedItem>
          <NestedItem
            to='/settings/users'
            minimized={minimized}
            icon={<AccountIcon height={24} />}
          >
            {intl.formatMessage(messages.users)}
          </NestedItem>
          <NestedItem
            to='/settings/pricing'
            minimized={minimized}
            icon={<PricingIcon height={24} />}
          >
            {intl.formatMessage(messages.pricing)}
          </NestedItem>
          <NestedItem
            to='/settings/logs'
            minimized={minimized}
            icon={<LogsIcon height={24} />}
          >
            {intl.formatMessage(messages.logs)}
          </NestedItem>
          <NestedItem
            to='/settings/config'
            minimized={minimized}
            icon={<ConfigIcon height={24} />}
          >
            {intl.formatMessage(messages.config)}
          </NestedItem>
        </Group>
      </Layout>
    </Column>
  </BaseToolbar>
)

export default injectIntl(Toolbar)
