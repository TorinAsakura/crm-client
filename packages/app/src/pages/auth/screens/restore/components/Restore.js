import React from 'react'
import { injectIntl, defineMessages } from 'react-intl'
import { Column, Layout } from 'flex-layouts'
import { Toggle } from '@bloom/ui/src/animation'
import { Divider } from '@bloom/ui/src/divider'
import { Button } from '@bloom/ui/src/button'
import { Input } from '@bloom/ui/src/input'
import { Link } from '@bloom/ui/src/link'
import { Text } from '@bloom/ui/src/text'

/* eslint-disable max-len */
const messages = defineMessages({
  forget: {
    id: 'auth.restore.forget',
    defaultMessage: 'Forget Password',
  },
  description: {
    id: 'auth.restore.description',
    defaultMessage: 'Please enter the email address specified in your account settings. A verification code will be sent. After receiving it, you can enter a new password for your account.',
  },
  email: {
    id: 'auth.restore.email',
    defaultMessage: 'Email',
  },
  submit: {
    id: 'auth.restore.submit',
    defaultMessage: 'Submit',
  },
  login: {
    id: 'auth.restore.login',
    defaultMessage: 'Login',
  },
})
/* eslint-enable max-len */

const Restore = ({
  intl,
  email,
  errors = {},
  onChangeEmail,
  onRestore,
}) => (
  <Column>
    <Layout basis='32px' />
    <Layout justify='center'>
      <Text
        size='xxlarge'
        color='white'
        weight='light'
        align='center'
        opacity
      >
        {intl.formatMessage(messages.forget)}
      </Text>
    </Layout>
    <Layout basis='24px' />
    <Layout>
      <Toggle height={40} show={errors.email}>
        <Text>
          {errors.email}
        </Text>
      </Toggle>
    </Layout>
    <Layout basis='12px' />
    <Layout basis='24px' />
    <Layout>
      <Text>
        {intl.formatMessage(messages.description)}
      </Text>
    </Layout>
    <Layout basis='12px' />
    <Layout>
      <Input
        type='email'
        placeholder={intl.formatMessage(messages.email)}
        value={email}
        onEnter={onRestore}
        onChange={onChangeEmail}
      />
    </Layout>
    <Layout basis='32px' />
    <Layout justify='center'>
      <Button
        fill
        size='large'
        onClick={onRestore}
      >
        {intl.formatMessage(messages.submit)}
      </Button>
    </Layout>
    <Layout basis='24px' />
    <Layout>
      <Divider transparent />
    </Layout>
    <Layout basis='16px' />
    <Layout justify='center'>
      <Link to='/auth' color='white'>
        <Text
          uppercase
          size='xsmall'
          color='white300'
        >
          {intl.formatMessage(messages.login)}
        </Text>
      </Link>
    </Layout>
  </Column>
)

export default injectIntl(Restore)
