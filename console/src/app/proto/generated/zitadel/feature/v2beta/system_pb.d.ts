import * as jspb from 'google-protobuf'

import * as protoc$gen$openapiv2_options_annotations_pb from '../../../protoc-gen-openapiv2/options/annotations_pb'; // proto import: "protoc-gen-openapiv2/options/annotations.proto"
import * as validate_validate_pb from '../../../validate/validate_pb'; // proto import: "validate/validate.proto"
import * as zitadel_object_v2beta_object_pb from '../../../zitadel/object/v2beta/object_pb'; // proto import: "zitadel/object/v2beta/object.proto"
import * as zitadel_feature_v2beta_feature_pb from '../../../zitadel/feature/v2beta/feature_pb'; // proto import: "zitadel/feature/v2beta/feature.proto"


export class SetSystemFeaturesRequest extends jspb.Message {
  getLoginDefaultOrg(): boolean;
  setLoginDefaultOrg(value: boolean): SetSystemFeaturesRequest;
  hasLoginDefaultOrg(): boolean;
  clearLoginDefaultOrg(): SetSystemFeaturesRequest;

  getUserSchema(): boolean;
  setUserSchema(value: boolean): SetSystemFeaturesRequest;
  hasUserSchema(): boolean;
  clearUserSchema(): SetSystemFeaturesRequest;

  getOidcTokenExchange(): boolean;
  setOidcTokenExchange(value: boolean): SetSystemFeaturesRequest;
  hasOidcTokenExchange(): boolean;
  clearOidcTokenExchange(): SetSystemFeaturesRequest;

  getImprovedPerformanceList(): Array<zitadel_feature_v2beta_feature_pb.ImprovedPerformance>;
  setImprovedPerformanceList(value: Array<zitadel_feature_v2beta_feature_pb.ImprovedPerformance>): SetSystemFeaturesRequest;
  clearImprovedPerformanceList(): SetSystemFeaturesRequest;
  addImprovedPerformance(value: zitadel_feature_v2beta_feature_pb.ImprovedPerformance, index?: number): SetSystemFeaturesRequest;

  getOidcSingleV1SessionTermination(): boolean;
  setOidcSingleV1SessionTermination(value: boolean): SetSystemFeaturesRequest;
  hasOidcSingleV1SessionTermination(): boolean;
  clearOidcSingleV1SessionTermination(): SetSystemFeaturesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetSystemFeaturesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetSystemFeaturesRequest): SetSystemFeaturesRequest.AsObject;
  static serializeBinaryToWriter(message: SetSystemFeaturesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetSystemFeaturesRequest;
  static deserializeBinaryFromReader(message: SetSystemFeaturesRequest, reader: jspb.BinaryReader): SetSystemFeaturesRequest;
}

export namespace SetSystemFeaturesRequest {
  export type AsObject = {
    loginDefaultOrg?: boolean,
    userSchema?: boolean,
    oidcTokenExchange?: boolean,
    improvedPerformanceList: Array<zitadel_feature_v2beta_feature_pb.ImprovedPerformance>,
    oidcSingleV1SessionTermination?: boolean,
  }

  export enum LoginDefaultOrgCase { 
    _LOGIN_DEFAULT_ORG_NOT_SET = 0,
    LOGIN_DEFAULT_ORG = 1,
  }

  export enum UserSchemaCase { 
    _USER_SCHEMA_NOT_SET = 0,
    USER_SCHEMA = 4,
  }

  export enum OidcTokenExchangeCase { 
    _OIDC_TOKEN_EXCHANGE_NOT_SET = 0,
    OIDC_TOKEN_EXCHANGE = 5,
  }

  export enum OidcSingleV1SessionTerminationCase { 
    _OIDC_SINGLE_V1_SESSION_TERMINATION_NOT_SET = 0,
    OIDC_SINGLE_V1_SESSION_TERMINATION = 8,
  }
}

export class SetSystemFeaturesResponse extends jspb.Message {
  getDetails(): zitadel_object_v2beta_object_pb.Details | undefined;
  setDetails(value?: zitadel_object_v2beta_object_pb.Details): SetSystemFeaturesResponse;
  hasDetails(): boolean;
  clearDetails(): SetSystemFeaturesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetSystemFeaturesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SetSystemFeaturesResponse): SetSystemFeaturesResponse.AsObject;
  static serializeBinaryToWriter(message: SetSystemFeaturesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetSystemFeaturesResponse;
  static deserializeBinaryFromReader(message: SetSystemFeaturesResponse, reader: jspb.BinaryReader): SetSystemFeaturesResponse;
}

export namespace SetSystemFeaturesResponse {
  export type AsObject = {
    details?: zitadel_object_v2beta_object_pb.Details.AsObject,
  }
}

export class ResetSystemFeaturesRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResetSystemFeaturesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ResetSystemFeaturesRequest): ResetSystemFeaturesRequest.AsObject;
  static serializeBinaryToWriter(message: ResetSystemFeaturesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResetSystemFeaturesRequest;
  static deserializeBinaryFromReader(message: ResetSystemFeaturesRequest, reader: jspb.BinaryReader): ResetSystemFeaturesRequest;
}

export namespace ResetSystemFeaturesRequest {
  export type AsObject = {
  }
}

export class ResetSystemFeaturesResponse extends jspb.Message {
  getDetails(): zitadel_object_v2beta_object_pb.Details | undefined;
  setDetails(value?: zitadel_object_v2beta_object_pb.Details): ResetSystemFeaturesResponse;
  hasDetails(): boolean;
  clearDetails(): ResetSystemFeaturesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResetSystemFeaturesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ResetSystemFeaturesResponse): ResetSystemFeaturesResponse.AsObject;
  static serializeBinaryToWriter(message: ResetSystemFeaturesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResetSystemFeaturesResponse;
  static deserializeBinaryFromReader(message: ResetSystemFeaturesResponse, reader: jspb.BinaryReader): ResetSystemFeaturesResponse;
}

export namespace ResetSystemFeaturesResponse {
  export type AsObject = {
    details?: zitadel_object_v2beta_object_pb.Details.AsObject,
  }
}

export class GetSystemFeaturesRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSystemFeaturesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSystemFeaturesRequest): GetSystemFeaturesRequest.AsObject;
  static serializeBinaryToWriter(message: GetSystemFeaturesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSystemFeaturesRequest;
  static deserializeBinaryFromReader(message: GetSystemFeaturesRequest, reader: jspb.BinaryReader): GetSystemFeaturesRequest;
}

export namespace GetSystemFeaturesRequest {
  export type AsObject = {
  }
}

export class GetSystemFeaturesResponse extends jspb.Message {
  getDetails(): zitadel_object_v2beta_object_pb.Details | undefined;
  setDetails(value?: zitadel_object_v2beta_object_pb.Details): GetSystemFeaturesResponse;
  hasDetails(): boolean;
  clearDetails(): GetSystemFeaturesResponse;

  getLoginDefaultOrg(): zitadel_feature_v2beta_feature_pb.FeatureFlag | undefined;
  setLoginDefaultOrg(value?: zitadel_feature_v2beta_feature_pb.FeatureFlag): GetSystemFeaturesResponse;
  hasLoginDefaultOrg(): boolean;
  clearLoginDefaultOrg(): GetSystemFeaturesResponse;

  getUserSchema(): zitadel_feature_v2beta_feature_pb.FeatureFlag | undefined;
  setUserSchema(value?: zitadel_feature_v2beta_feature_pb.FeatureFlag): GetSystemFeaturesResponse;
  hasUserSchema(): boolean;
  clearUserSchema(): GetSystemFeaturesResponse;

  getOidcTokenExchange(): zitadel_feature_v2beta_feature_pb.FeatureFlag | undefined;
  setOidcTokenExchange(value?: zitadel_feature_v2beta_feature_pb.FeatureFlag): GetSystemFeaturesResponse;
  hasOidcTokenExchange(): boolean;
  clearOidcTokenExchange(): GetSystemFeaturesResponse;

  getImprovedPerformance(): zitadel_feature_v2beta_feature_pb.ImprovedPerformanceFeatureFlag | undefined;
  setImprovedPerformance(value?: zitadel_feature_v2beta_feature_pb.ImprovedPerformanceFeatureFlag): GetSystemFeaturesResponse;
  hasImprovedPerformance(): boolean;
  clearImprovedPerformance(): GetSystemFeaturesResponse;

  getOidcSingleV1SessionTermination(): zitadel_feature_v2beta_feature_pb.FeatureFlag | undefined;
  setOidcSingleV1SessionTermination(value?: zitadel_feature_v2beta_feature_pb.FeatureFlag): GetSystemFeaturesResponse;
  hasOidcSingleV1SessionTermination(): boolean;
  clearOidcSingleV1SessionTermination(): GetSystemFeaturesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSystemFeaturesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetSystemFeaturesResponse): GetSystemFeaturesResponse.AsObject;
  static serializeBinaryToWriter(message: GetSystemFeaturesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSystemFeaturesResponse;
  static deserializeBinaryFromReader(message: GetSystemFeaturesResponse, reader: jspb.BinaryReader): GetSystemFeaturesResponse;
}

export namespace GetSystemFeaturesResponse {
  export type AsObject = {
    details?: zitadel_object_v2beta_object_pb.Details.AsObject,
    loginDefaultOrg?: zitadel_feature_v2beta_feature_pb.FeatureFlag.AsObject,
    userSchema?: zitadel_feature_v2beta_feature_pb.FeatureFlag.AsObject,
    oidcTokenExchange?: zitadel_feature_v2beta_feature_pb.FeatureFlag.AsObject,
    improvedPerformance?: zitadel_feature_v2beta_feature_pb.ImprovedPerformanceFeatureFlag.AsObject,
    oidcSingleV1SessionTermination?: zitadel_feature_v2beta_feature_pb.FeatureFlag.AsObject,
  }
}

