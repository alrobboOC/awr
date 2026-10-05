// Hide the known upstream deprecation while preserving other Sass diagnostics.
const sass = require('sass')
const compile = sass.compile

sass.compile = (path, options = {}) => compile(path, {
  ...options,
  logger: {
    warn(message, details) {
      if (message.startsWith('The `govuk-text-colour` mixin is deprecated.')) return
      if (options.logger?.warn) return options.logger.warn(message, details)
      console.warn(`Warning: ${message}${details.stack ? `\n${details.stack}` : ''}`)
    },
    debug(message, details) {
      if (options.logger?.debug) return options.logger.debug(message, details)
      console.debug(message)
    }
  }
})
