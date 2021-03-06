/**
 * Makes sure that the props are fetched only on server and not in browser
 * @param callback
 * @returns {Function}
 */
export const serverOnlyProps = (callback) => {
  return async (props) => {
    // noinspection JSUnresolvedVariable
    if (process.browser) {
      // noinspection ES6ModulesDependencies,JSUnresolvedVariable
      return __NEXT_DATA__.props.pageProps;
    }

    return await callback(props)
  };
};
