import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Page from '@/app/[locale]/page'
import { NextIntlClientProvider } from 'next-intl'
import English from '@/messages/en.json'
import Spanish from '@/messages/es.json'

test('Home Page', () => {
  render(
    <NextIntlClientProvider messages={English} locale='en'>
      <Page />
    </NextIntlClientProvider>
  )
  expect(screen.getByRole('heading', { level: 1, name: 'Home' })).toBeDefined()
})
test('Página de Inicio', () => {
  render(
    <NextIntlClientProvider messages={Spanish} locale='es'>
      <Page />
    </NextIntlClientProvider>
  )
  expect(
    screen.getByRole('heading', { level: 1, name: 'Inicio' })
  ).toBeDefined()
})
