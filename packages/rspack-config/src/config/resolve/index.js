export const createResolveConfig = (srcPath, packages, aliases = {}) => ({
  extensions: ['.tsx', '.ts', '.js', '.scss', '.css'],
  alias: {
    '@': srcPath,
    '@en-atul/ecom-mfe-ui': packages.ui,
    '@en-atul/ecom-mfe-utils': packages.utils,
    '@en-atul/ecom-mfe-ecommerce-core': packages.ecommerceCore,
    '@en-atul/ecom-mfe-styles': packages.styles,
    ...aliases,
  },
}); 