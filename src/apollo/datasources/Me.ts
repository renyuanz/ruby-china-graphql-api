import { RESTDataSource } from "apollo-datasource-rest";
import transformKeys from "../utils/transformKeys";

export default class extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://ruby-china.org/api/v3/";
  }

  UserMeReducer(user: any) {
    return transformKeys(user);
  }

  willSendRequest(req: any) {
    req.headers.set("authorization", this.context.token);
  }

  async getTopics() {
    const res = await this.get(`hello`);
    const { user } = res;
    return this.UserMeReducer(user);
  }
}
