const fc = require('fast-check')

fc.assert(
  fc.property(
    fc.string(), fc.string(), fc.string(),
    (a, b, c), => contains(b, a + b + c)
  )
)


