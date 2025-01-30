import * as Types from "../types";
import * as gm from "graphql-modules";
export namespace LawModule {
  interface DefinedFields {
    Land: 'abbr' | 'bday' | 'name';
    Law: 'bday' | 'detail' | 'land';
    Level: 'bday' | 'dday' | 'details';
    LevelDetail: 'index' | 'name' | 'notes';
    Rule: 'bday' | 'lands' | 'level';
    Query: 'laws';
  };
  
  export type Land = Pick<Types.Land, DefinedFields['Land']>;
  export type Law = Pick<Types.Law, DefinedFields['Law']>;
  export type LevelDetail = Pick<Types.LevelDetail, DefinedFields['LevelDetail']>;
  export type Level = Pick<Types.Level, DefinedFields['Level']>;
  export type Rule = Pick<Types.Rule, DefinedFields['Rule']>;
  export type Query = Pick<Types.Query, DefinedFields['Query']>;
  
  export type Scalars = Pick<Types.Scalars, 'Date'>;
  export type DateScalarConfig = Types.DateScalarConfig;
  
  export type LandResolvers = Pick<Types.LandResolvers, DefinedFields['Land'] | '__isTypeOf'>;
  export type LawResolvers = Pick<Types.LawResolvers, DefinedFields['Law'] | '__isTypeOf'>;
  export type LevelResolvers = Pick<Types.LevelResolvers, DefinedFields['Level'] | '__isTypeOf'>;
  export type LevelDetailResolvers = Pick<Types.LevelDetailResolvers, DefinedFields['LevelDetail'] | '__isTypeOf'>;
  export type RuleResolvers = Pick<Types.RuleResolvers, DefinedFields['Rule'] | '__isTypeOf'>;
  export type QueryResolvers = Pick<Types.QueryResolvers, DefinedFields['Query']>;
  
  export interface Resolvers {
    Land?: LandResolvers;
    Law?: LawResolvers;
    Level?: LevelResolvers;
    LevelDetail?: LevelDetailResolvers;
    Rule?: RuleResolvers;
    Query?: QueryResolvers;
    Date?: Types.Resolvers['Date'];
  };
  
  export interface MiddlewareMap {
    '*'?: {
      '*'?: gm.Middleware[];
    };
    Land?: {
      '*'?: gm.Middleware[];
      abbr?: gm.Middleware[];
      bday?: gm.Middleware[];
      name?: gm.Middleware[];
    };
    Law?: {
      '*'?: gm.Middleware[];
      bday?: gm.Middleware[];
      detail?: gm.Middleware[];
      land?: gm.Middleware[];
    };
    Level?: {
      '*'?: gm.Middleware[];
      bday?: gm.Middleware[];
      dday?: gm.Middleware[];
      details?: gm.Middleware[];
    };
    LevelDetail?: {
      '*'?: gm.Middleware[];
      index?: gm.Middleware[];
      name?: gm.Middleware[];
      notes?: gm.Middleware[];
    };
    Rule?: {
      '*'?: gm.Middleware[];
      bday?: gm.Middleware[];
      lands?: gm.Middleware[];
      level?: gm.Middleware[];
    };
    Query?: {
      '*'?: gm.Middleware[];
      laws?: gm.Middleware[];
    };
  };
}