/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: { input: Date; output: Date; }
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

export type LawsAbortionQueryVariables = Exact<{
  topic: Scalars['String']['input'];
}>;


export type LawsAbortionQuery = { __typename: 'Query', laws?: Array<{ __typename: 'Law', bday: Date, detail: { __typename: 'LevelDetail', index: number, name: string, notes?: Array<string | null> | null }, land: { __typename: 'Land', abbr: string, bday: Date, name: string } } | null> | null };


export const LawsAbortionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"LawsAbortion"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"topic"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"laws"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"topic"},"value":{"kind":"Variable","name":{"kind":"Name","value":"topic"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"bday"}},{"kind":"Field","name":{"kind":"Name","value":"detail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"index"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"notes"}}]}},{"kind":"Field","name":{"kind":"Name","value":"land"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"abbr"}},{"kind":"Field","name":{"kind":"Name","value":"bday"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<LawsAbortionQuery, LawsAbortionQueryVariables>;