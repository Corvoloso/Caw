if (__DEV__) {
  const reactotronLoad = async () => {
    const reactotron = await import('reactotron-react-native');
    const reactotronRedux = await import('reactotron-react-native');

    import('reactotron-react-native');

    const tron = reactotron.configure().use(reactotronRedux()).connect();

    tron.clear();

    console.tron = tron;
  };

  reactotronLoad();
}
