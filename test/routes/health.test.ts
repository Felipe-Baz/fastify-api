import { test } from 'tap'
import { build } from '../helper'

test('health is loaded', async (t) => {
  const app = await build(t)

  const res = await app.inject({
    url: '/health'
  })

  t.equal(res.payload, 'this is an health')
})
