# html reporter for webpack jshint loader

## webpack jshint loader

This package requires the use of the webpack jshint loader. You can find more information on the usage of the jshint loader at https://github.com/webpack/jshint-loader.

## Usage

```

	// import the jshintLoaderHtmlReport in your webpack config file
	var jshintLoaderHtmlReporter = require('../index');
	
	// add the jshint config block to your webpack config file
	jshint: {
		// set the jshint loader reporter to jshintLoaderHtmlReporter
		reporter: jshintLoaderHtmlReporter.jshintLoaderReporter
	},
	
	// ass the jshint loader html reporter plugin to your webpack config plugins
  plugins: [
      new jshintLoaderHtmlReporter.jshintReporterPlugin({
        outputFileName: 'example.html',
        outputPath: path.join(__dirname, 'out')
      })
  ]
}
```

## Plugin Options

outputFileName: Sets the name of the HTML report file [default: jshint-report.html]
outputPath: Sets the path to save the HTML report file in [default: 'out' directory of current working directory]

## Credit

jshint : https://github.com/jshint/jshint

jshint-loader : https://github.com/webpack/jshint-loader

jshint-html-reporter : https://github.com/adrianpietka/jshint-html-reporter

  * This library was not compatible in its repository form. For this reason, it has been included in the lib directory of this project with minor modifications.

## License

MIT (http://www.opensource.org/licenses/mit-license.php)
