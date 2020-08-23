import TopicAPI from "./Topic";
import MeAPI from "./Me";
// set up any dataSources our resolvers need
const dataSources = () => ({
  topicAPI: new TopicAPI(),
  meAPI: new MeAPI(),
});

export type IDataSources = ReturnType<typeof dataSources>;

export default dataSources;
