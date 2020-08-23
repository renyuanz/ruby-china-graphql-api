import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Abilities = {
  __typename?: 'Abilities';
  update?: Maybe<Scalars['Boolean']>;
  destroy?: Maybe<Scalars['Boolean']>;
  ban?: Maybe<Scalars['Boolean']>;
  normal?: Maybe<Scalars['Boolean']>;
  excellent?: Maybe<Scalars['Boolean']>;
  unexcellent?: Maybe<Scalars['Boolean']>;
  close?: Maybe<Scalars['Boolean']>;
  open?: Maybe<Scalars['Boolean']>;
};

export type Query = {
  __typename?: 'Query';
  topics?: Maybe<Array<Topic>>;
  me: UserMe;
};

export type Topic = {
  __typename?: 'Topic';
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  repliedAt?: Maybe<Scalars['String']>;
  repliesCount?: Maybe<Scalars['Int']>;
  nodeName?: Maybe<Scalars['String']>;
  nodeId?: Maybe<Scalars['Int']>;
  lastReplyUserId?: Maybe<Scalars['String']>;
  lastReplyUserLogin?: Maybe<Scalars['String']>;
  grade?: Maybe<Scalars['String']>;
  likesCount?: Maybe<Scalars['Int']>;
  suggestedAt?: Maybe<Scalars['String']>;
  closedAt?: Maybe<Scalars['String']>;
  deleted?: Maybe<Scalars['Boolean']>;
  excellent?: Maybe<Scalars['Int']>;
  hits?: Maybe<Scalars['Int']>;
  abilities?: Maybe<Abilities>;
  user?: Maybe<User>;
};

export type User = {
  __typename?: 'User';
  id?: Maybe<Scalars['Int']>;
  login?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  avatarUrl?: Maybe<Scalars['String']>;
  abilities?: Maybe<Abilities>;
};

export type UserMe = {
  __typename?: 'UserMe';
  id: Scalars['Int'];
  login: Scalars['String'];
  name: Scalars['String'];
  avatarUrl: Scalars['String'];
  location: Scalars['String'];
  company: Scalars['String'];
  twitter: Scalars['String'];
  website: Scalars['String'];
  tagline: Scalars['String'];
  github: Scalars['String'];
  createdAt: Scalars['String'];
  topicsCount: Scalars['Int'];
  repliesCount: Scalars['Int'];
  followingCount: Scalars['Int'];
  followersCount: Scalars['Int'];
  favoritesCount: Scalars['Int'];
  level: Scalars['String'];
  levelName: Scalars['String'];
  bio?: Maybe<Scalars['String']>;
  email: Scalars['String'];
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}> = (obj: T, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Query: ResolverTypeWrapper<{}>;
  Topic: ResolverTypeWrapper<Topic>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Abilities: ResolverTypeWrapper<Abilities>;
  User: ResolverTypeWrapper<User>;
  UserMe: ResolverTypeWrapper<UserMe>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {};
  Topic: Topic;
  Int: Scalars['Int'];
  String: Scalars['String'];
  Boolean: Scalars['Boolean'];
  Abilities: Abilities;
  User: User;
  UserMe: UserMe;
}>;

export type AbilitiesResolvers<ContextType = any, ParentType extends ResolversParentTypes['Abilities'] = ResolversParentTypes['Abilities']> = ResolversObject<{
  update?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  destroy?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  ban?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  normal?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  excellent?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  unexcellent?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  close?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  open?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  topics?: Resolver<Maybe<Array<ResolversTypes['Topic']>>, ParentType, ContextType>;
  me?: Resolver<ResolversTypes['UserMe'], ParentType, ContextType>;
}>;

export type TopicResolvers<ContextType = any, ParentType extends ResolversParentTypes['Topic'] = ResolversParentTypes['Topic']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  repliedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  repliesCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  nodeName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nodeId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  lastReplyUserId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastReplyUserLogin?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  grade?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  likesCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  suggestedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  closedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  deleted?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  excellent?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  hits?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  abilities?: Resolver<Maybe<ResolversTypes['Abilities']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  login?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  avatarUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  abilities?: Resolver<Maybe<ResolversTypes['Abilities']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type UserMeResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserMe'] = ResolversParentTypes['UserMe']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  login?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  avatarUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  location?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  company?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  twitter?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  website?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tagline?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  github?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  topicsCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  repliesCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  followingCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  followersCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  favoritesCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  level?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  levelName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  bio?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  Abilities?: AbilitiesResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Topic?: TopicResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserMe?: UserMeResolvers<ContextType>;
}>;


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
