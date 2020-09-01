import { RESTDataSource } from "apollo-datasource-rest";
import transformKeys from "../utils/transformKeys";

export default class extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://ruby-china.org/api/v3/";
  }

  willSendRequest(req: any) {
    req.headers.set("authorization", this.context.token);
  }

  async getHello() {
    const res = await this.get(`hello`);
    const { user } = res;
    return transformKeys(user);
  }

  async getTopics() {
    const res = await this.get(`topics`);
    const { topics } = res;
    return topics.map((topic: any) => transformKeys(topic));
  }

  async getTopic(id: string) {
    const res = await this.get(`topics/${id}`);
    const { topic } = res;
    return transformKeys(topic);
  }

  async getNodes() {
    const res = await this.get(`nodes`);
    const { nodes } = res;
    return nodes.map((node: any) => transformKeys(node));
  }

  async getNode(id: string) {
    const res = await this.get(`nodes/${id}`);
    const { node } = res;
    return transformKeys(node);
  }

  async getUsers(limit?: number) {
    const res = await this.get(`users?limit=${limit}`);
    const { users } = res;
    return users.map((user: any) => transformKeys(user));
  }

  // async getUser(id: string) {
  //   const res = await this.get(`users/${id}`);
  //   const { user } = res;
  //   return transformKeys(user);
  // }
}
