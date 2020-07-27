const {
  TemplatePackage,
  ChartRendererSnippet,
} = require('../../templates-core');

class BizchartTemplate extends TemplatePackage {}

module.exports = (context) =>
  new BizchartTemplate(context, {
    '/src/components/ChartRenderer.js': new ChartRendererSnippet(),
  });
