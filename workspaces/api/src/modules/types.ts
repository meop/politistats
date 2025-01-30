import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
};

export type Land = {
  __typename?: 'Land';
  abbr: Scalars['String']['output'];
  bday: Scalars['Date']['output'];
  name: Scalars['String']['output'];
};

export type Law = {
  __typename?: 'Law';
  bday: Scalars['Date']['output'];
  detail: LevelDetail;
  land: Land;
};

export type Level = {
  __typename?: 'Level';
  bday: Scalars['Date']['output'];
  dday?: Maybe<Scalars['Date']['output']>;
  details: Array<LevelDetail>;
};

export type LevelDetail = {
  __typename?: 'LevelDetail';
  index: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  notes?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type Query = {
  __typename?: 'Query';
  laws?: Maybe<Array<Maybe<Law>>>;
};


export type QueryLawsArgs = {
  topic: Scalars['String']['input'];
};

export type Rule = {
  __typename?: 'Rule';
  bday: Scalars['Date']['output'];
  lands: Array<Scalars['String']['output']>;
  level?: Maybe<Scalars['Int']['output']>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

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
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

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

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Date: ResolverTypeWrapper<Scalars['Date']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Land: ResolverTypeWrapper<Land>;
  Law: ResolverTypeWrapper<Law>;
  Level: ResolverTypeWrapper<Level>;
  LevelDetail: ResolverTypeWrapper<LevelDetail>;
  Query: ResolverTypeWrapper<{}>;
  Rule: ResolverTypeWrapper<Rule>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean']['output'];
  Date: Scalars['Date']['output'];
  Int: Scalars['Int']['output'];
  Land: Land;
  Law: Law;
  Level: Level;
  LevelDetail: LevelDetail;
  Query: {};
  Rule: Rule;
  String: Scalars['String']['output'];
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type LandResolvers<ContextType = any, ParentType extends ResolversParentTypes['Land'] = ResolversParentTypes['Land']> = {
  abbr?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  bday?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LawResolvers<ContextType = any, ParentType extends ResolversParentTypes['Law'] = ResolversParentTypes['Law']> = {
  bday?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  detail?: Resolver<ResolversTypes['LevelDetail'], ParentType, ContextType>;
  land?: Resolver<ResolversTypes['Land'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LevelResolvers<ContextType = any, ParentType extends ResolversParentTypes['Level'] = ResolversParentTypes['Level']> = {
  bday?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  dday?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  details?: Resolver<Array<ResolversTypes['LevelDetail']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LevelDetailResolvers<ContextType = any, ParentType extends ResolversParentTypes['LevelDetail'] = ResolversParentTypes['LevelDetail']> = {
  index?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  notes?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  laws?: Resolver<Maybe<Array<Maybe<ResolversTypes['Law']>>>, ParentType, ContextType, RequireFields<QueryLawsArgs, 'topic'>>;
};

export type RuleResolvers<ContextType = any, ParentType extends ResolversParentTypes['Rule'] = ResolversParentTypes['Rule']> = {
  bday?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  lands?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  level?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Date?: GraphQLScalarType;
  Land?: LandResolvers<ContextType>;
  Law?: LawResolvers<ContextType>;
  Level?: LevelResolvers<ContextType>;
  LevelDetail?: LevelDetailResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Rule?: RuleResolvers<ContextType>;
};


export type Date = Scalars["Date"];