import { RESTDataSource } from "apollo-datasource-rest";
import transformKeys from "../utils/transformKeys";

class TopicAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://ruby-china.org/api/v3/";
  }

  topicReducer(topic: any) {
    return transformKeys(topic);
  }

  willSendRequest(req: any) {
    req.headers.set("authorization", this.context.token);
  }

  async getTopics() {
    const res = await this.get(`topics`);
    const { topics } = res;
    return topics.map((topic: any) => this.topicReducer(topic));
  }
}

export default TopicAPI;
