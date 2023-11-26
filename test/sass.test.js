const path = require('path')
const { pathToFileURL } = require('url')
const sassTrue = require('sass-true')
const glob = require('glob')

const importers = [
  {
    findFileUrl(url) {
      if (url.startsWith('~')) {
        return new URL(
          pathToFileURL(path.resolve(process.cwd(), 'node_modules', url.substring(1)))
        )
      }
    }
  }
]

const testFiles = glob.sync(path.resolve(process.cwd(), 'test/**/*.test.scss'))
testFiles.forEach((file) => {
  sassTrue.runSass({ describe, it }, file, { importers })
})
