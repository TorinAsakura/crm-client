import React from 'react'
import { injectIntl, defineMessages } from 'react-intl'
import { Column, Layout } from 'flex-layouts'
import { Toggle } from '@bloom/ui/src/animation'
import { Button } from '@bloom/ui/src/button'
import { Input } from '@bloom/ui/src/input'
import { Link } from '@bloom/ui/src/link'
import { Text } from '@bloom/ui/src/text'

const messages = defineMessages({
  signIn: {
    id: 'auth.login.sign_in',
    defaultMessage: 'Sign In',
  },
  login: {
    id: 'auth.login.login',
    defaultMessage: 'Login',
  },
  password: {
    id: 'auth.login.password',
    defaultMessage: 'Password',
  },
  forgot: {
    id: 'auth.login.forgot',
    defaultMessage: 'Forgot Password?',
  },
  rememberMe: {
    id: 'auth.login.remember_me',
    defaultMessage: 'Remember me',
  },
})

const Login = ({
  intl,
  email,
  password,
  errors = {},
  onChangeEmail,
  onChangePassword,
  onLogin,
}) => (
  <Column>
    <Layout basis='63px' />
    <Layout justify='center'>
      <Text
        size='xxlarge'
        color='white'
        weight='light'
        opacity
      >
        {intl.formatMessage(messages.signIn)}
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
    <Layout>
      <Input
        type='email'
        placeholder={intl.formatMessage(messages.login)}
        value={email}
        onEnter={onLogin}
        onChange={onChangeEmail}
      />
    </Layout>
    <Layout basis='16px' />
    <Layout>
      <Input
        type='password'
        placeholder={intl.formatMessage(messages.password)}
        value={password}
        onEnter={onLogin}
        onChange={onChangePassword}
      />
    </Layout>
    <Layout basis='20px' />
    <Layout basis='22px' />
    <Layout justify='center'>
      <Button
        fill
        size='large'
        onClick={onLogin}
      >
        {intl.formatMessage(messages.login)}
      </Button>
    </Layout>
    <Layout basis='24px' />
    <Layout>
      <Link to='/auth/restore'>
        <Text
          color='gray200'
          size='xlarge'
        >
          {intl.formatMessage(messages.forgot)}
        </Text>
      </Link>
    </Layout>
  </Column>
)

export default injectIntl(Login)
