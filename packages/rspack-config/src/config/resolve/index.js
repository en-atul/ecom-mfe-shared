export const createResolveConfig = (srcPath, packages, aliases = {}) => ({
  extensions: ['.tsx', '.ts', '.js', '.scss', '.css'],
  alias: {
    '@': srcPath,
    '@ecom-mfe/ui': packages.ui,
    '@ecom-mfe/utils': packages.utils,
    '@ecom-mfe/ecommerce-core': packages.ecommerceCore,
    '@ecom-mfe/styles': packages.styles,
    ...aliases,
  },
}); 