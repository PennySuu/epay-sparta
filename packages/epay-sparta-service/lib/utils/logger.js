const chalk = require('chalk')

exports.error = (msg) => {
  console.error(_format(chalk.bgRed(' ERROR '), chalk.red(msg)))
  if (msg instanceof Error) {
    console.error(msg.stack)
  }
}

function _format (label, msg) {
  return msg.split('\n').map((line, index) => {
    return index === 0
      ? `${label} ${line}`
      : line
  }).join('\n')
}