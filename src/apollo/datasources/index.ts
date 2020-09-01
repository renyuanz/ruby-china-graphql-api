import RubyChinaAPI from "./RubyChina";
// set up any dataSources our resolvers need
const dataSources = () => ({
  rubyChinaAPI: new RubyChinaAPI(),
});

export type IDataSources = ReturnType<typeof dataSources>;

export default dataSources;
