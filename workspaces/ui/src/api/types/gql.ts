/* eslint-disable */
import * as types from './graphql';
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
const documents = {
    "\n  query LawsAbortion($topic: String!) {\n    laws(topic: $topic) {\n      __typename\n      bday\n      detail {\n        __typename\n        index\n        name\n        notes\n      }\n      land {\n        __typename\n        abbr\n        bday\n        name\n      }\n    }\n  }\n": types.LawsAbortionDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query LawsAbortion($topic: String!) {\n    laws(topic: $topic) {\n      __typename\n      bday\n      detail {\n        __typename\n        index\n        name\n        notes\n      }\n      land {\n        __typename\n        abbr\n        bday\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  query LawsAbortion($topic: String!) {\n    laws(topic: $topic) {\n      __typename\n      bday\n      detail {\n        __typename\n        index\n        name\n        notes\n      }\n      land {\n        __typename\n        abbr\n        bday\n        name\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;