import { RESTDataSource } from "apollo-datasource-rest";
import {
  QueryTopicsArgs,
  UserDetailBlockedArgs,
  UserDetailRepliesArgs,
  UserDetailTopicsArgs,
  UserDetailFavoritesArgs,
  UserDetailFollowersArgs,
  UserDetailFollowingArgs,
} from "generated/graphql";
import transformKeys from "../utils/transformKeys";

export default class extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://ruby-china.org/api/v3/";
  }

  willSendRequest(req: any) {
    req.headers.set("authorization", this.context.token);
  }

  async getUsersMe() {
    const res = await this.get(`users/me`);
    const { user } = res;
    return transformKeys(user);
  }

  async getTopics(args: QueryTopicsArgs) {
    const params = transformKeys(args, true);
    const res = await this.get(`topics`, params);
    const { topics } = res;
    return topics?.map((topic: any) => transformKeys(topic));
  }

  async getTopic(id: string) {
    const res = await this.get(`topics/${id}`);
    const { topic } = res;
    return transformKeys(topic);
  }

  async getNodes() {
    const res = await this.get(`nodes`);
    const { nodes } = res;
    return nodes?.map((node: any) => transformKeys(node));
  }

  async getNode(id: string) {
    const res = await this.get(`nodes/${id}`);
    const { node } = res;
    return transformKeys(node);
  }

  async getUsers(limit?: number) {
    const res = await this.get(`users?limit=${limit}`);
    const { users } = res;
    return users?.map((user: any) => transformKeys(user));
  }

  async getUser(id: string) {
    const res = await this.get(`users/${id}`);
    const { user } = res;
    return transformKeys(user);
  }

  async getUserReplies(login: string, args: UserDetailRepliesArgs) {
    const params = transformKeys(args, true);
    const res = await this.get(`users/${login}/replies`, params);
    const { replies } = res;
    return replies?.map((reply: any) => transformKeys(reply));
  }

  async getUserTopics(login: string, args: UserDetailTopicsArgs) {
    const params = transformKeys(args, true);
    const res = await this.get(`users/${login}/topics`, params);
    const { topics } = res;
    return topics?.map((topic: any) => transformKeys(topic));
  }

  async getUserBlocked(login: string, args: UserDetailBlockedArgs) {
    const params = transformKeys(args, true);
    const res = await this.get(`users/${login}/blocked`, params);
    const { users } = res;
    return users?.map((user: any) => transformKeys(user));
  }
  async getUserFollowing(login: string, args: UserDetailFollowingArgs) {
    const params = transformKeys(args, true);
    const res = await this.get(`users/${login}/following`, params);
    const { following } = res;
    return following?.map((user: any) => transformKeys(user));
  }
  async getUserFollowers(login: string, args: UserDetailFollowersArgs) {
    const params = transformKeys(args, true);
    const res = await this.get(`users/${login}/followers`, params);
    const { followers } = res;
    return followers?.map((user: any) => transformKeys(user));
  }
  async getUserFavorites(login: string, args: UserDetailFavoritesArgs) {
    const params = transformKeys(args, true);
    const res = await this.get(`users/${login}/favorites`, params);
    const { topics } = res;
    return topics?.map((topic: any) => transformKeys(topic));
  }
}
