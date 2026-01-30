import * as jspb from 'google-protobuf'

import * as protoc$gen$openapiv2_options_annotations_pb from '../../../protoc-gen-openapiv2/options/annotations_pb'; // proto import: "protoc-gen-openapiv2/options/annotations.proto"
import * as validate_validate_pb from '../../../validate/validate_pb'; // proto import: "validate/validate.proto"
import * as zitadel_object_v2_object_pb from '../../../zitadel/object/v2/object_pb'; // proto import: "zitadel/object/v2/object.proto"
import * as zitadel_feature_v2_feature_pb from '../../../zitadel/feature/v2/feature_pb'; // proto import: "zitadel/feature/v2/feature.proto"


export class SetInstanceFeaturesRequest extends jspb.Message {
  getLoginDefaultOrg(): boolean;
  setLoginDefaultOrg(value: boolean): SetInstanceFeaturesRequest;
  hasLoginDefaultOrg(): boolean;
  clearLoginDefaultOrg(): SetInstanceFeaturesRequest;

  getUserSchema(): boolean;
  setUserSchema(value: boolean): SetInstanceFeaturesRequest;
  hasUserSchema(): boolean;
  clearUserSchema(): SetInstanceFeaturesRequest;

  getOidcTokenExchange(): boolean;
  setOidcTokenExchange(value: boolean): SetInstanceFeaturesRequest;
  hasOidcTokenExchange(): boolean;
  clearOidcTokenExchange(): SetInstanceFeaturesRequest;

  getImprovedPerformanceList(): Array<zitadel_feature_v2_feature_pb.ImprovedPerformance>;
  setImprovedPerformanceList(value: Array<zitadel_feature_v2_feature_pb.ImprovedPerformance>): SetInstanceFeaturesRequest;
  clearImprovedPerformanceList(): SetInstanceFeaturesRequest;
  addImprovedPerformance(value: zitadel_feature_v2_feature_pb.ImprovedPerformance, index?: number): SetInstanceFeaturesRequest;

  getDebugOidcParentError(): boolean;
  setDebugOidcParentError(value: boolean): SetInstanceFeaturesRequest;
  hasDebugOidcParentError(): boolean;
  clearDebugOidcParentError(): SetInstanceFeaturesRequest;

  getOidcSingleV1SessionTermination(): boolean;
  setOidcSingleV1SessionTermination(value: boolean): SetInstanceFeaturesRequest;
  hasOidcSingleV1SessionTermination(): boolean;
  clearOidcSingleV1SessionTermination(): SetInstanceFeaturesRequest;

  getEnableBackChannelLogout(): boolean;
  setEnableBackChannelLogout(value: boolean): SetInstanceFeaturesRequest;
  hasEnableBackChannelLogout(): boolean;
  clearEnableBackChannelLogout(): SetInstanceFeaturesRequest;

  getLoginV2(): zitadel_feature_v2_feature_pb.LoginV2 | undefined;
  setLoginV2(value?: zitadel_feature_v2_feature_pb.LoginV2): SetInstanceFeaturesRequest;
  hasLoginV2(): boolean;
  clearLoginV2(): SetInstanceFeaturesRequest;

  getPermissionCheckV2(): boolean;
  setPermissionCheckV2(value: boolean): SetInstanceFeaturesRequest;
  hasPermissionCheckV2(): boolean;
  clearPermissionCheckV2(): SetInstanceFeaturesRequest;

  getConsoleUseV2UserApi(): boolean;
  setConsoleUseV2UserApi(value: boolean): SetInstanceFeaturesRequest;
  hasConsoleUseV2UserApi(): boolean;
  clearConsoleUseV2UserApi(): SetInstanceFeaturesRequest;

  getEnableRelationalTables(): boolean;
  setEnableRelationalTables(value: boolean): SetInstanceFeaturesRequest;
  hasEnableRelationalTables(): boolean;
  clearEnableRelationalTables(): SetInstanceFeaturesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetInstanceFeaturesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetInstanceFeaturesRequest): SetInstanceFeaturesRequest.AsObject;
  static serializeBinaryToWriter(message: SetInstanceFeaturesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetInstanceFeaturesRequest;
  static deserializeBinaryFromReader(message: SetInstanceFeaturesRequest, reader: jspb.BinaryReader): SetInstanceFeaturesRequest;
}

export namespace SetInstanceFeaturesRequest {
  export type AsObject = {
    loginDefaultOrg?: boolean,
    userSchema?: boolean,
    oidcTokenExchange?: boolean,
    improvedPerformanceList: Array<zitadel_feature_v2_feature_pb.ImprovedPerformance>,
    debugOidcParentError?: boolean,
    oidcSingleV1SessionTermination?: boolean,
    enableBackChannelLogout?: boolean,
    loginV2?: zitadel_feature_v2_feature_pb.LoginV2.AsObject,
    permissionCheckV2?: boolean,
    consoleUseV2UserApi?: boolean,
    enableRelationalTables?: boolean,
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

  export enum DebugOidcParentErrorCase { 
    _DEBUG_OIDC_PARENT_ERROR_NOT_SET = 0,
    DEBUG_OIDC_PARENT_ERROR = 9,
  }

  export enum OidcSingleV1SessionTerminationCase { 
    _OIDC_SINGLE_V1_SESSION_TERMINATION_NOT_SET = 0,
    OIDC_SINGLE_V1_SESSION_TERMINATION = 10,
  }

  export enum EnableBackChannelLogoutCase { 
    _ENABLE_BACK_CHANNEL_LOGOUT_NOT_SET = 0,
    ENABLE_BACK_CHANNEL_LOGOUT = 12,
  }

  export enum LoginV2Case { 
    _LOGIN_V2_NOT_SET = 0,
    LOGIN_V2 = 13,
  }

  export enum PermissionCheckV2Case { 
    _PERMISSION_CHECK_V2_NOT_SET = 0,
    PERMISSION_CHECK_V2 = 14,
  }

  export enum ConsoleUseV2UserApiCase { 
    _CONSOLE_USE_V2_USER_API_NOT_SET = 0,
    CONSOLE_USE_V2_USER_API = 15,
  }

  export enum EnableRelationalTablesCase { 
    _ENABLE_RELATIONAL_TABLES_NOT_SET = 0,
    ENABLE_RELATIONAL_TABLES = 16,
  }
}

export class SetInstanceFeaturesResponse extends jspb.Message {
  getDetails(): zitadel_object_v2_object_pb.Details | undefined;
  setDetails(value?: zitadel_object_v2_object_pb.Details): SetInstanceFeaturesResponse;
  hasDetails(): boolean;
  clearDetails(): SetInstanceFeaturesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetInstanceFeaturesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SetInstanceFeaturesResponse): SetInstanceFeaturesResponse.AsObject;
  static serializeBinaryToWriter(message: SetInstanceFeaturesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetInstanceFeaturesResponse;
  static deserializeBinaryFromReader(message: SetInstanceFeaturesResponse, reader: jspb.BinaryReader): SetInstanceFeaturesResponse;
}

export namespace SetInstanceFeaturesResponse {
  export type AsObject = {
    details?: zitadel_object_v2_object_pb.Details.AsObject,
  }
}

export class ResetInstanceFeaturesRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResetInstanceFeaturesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ResetInstanceFeaturesRequest): ResetInstanceFeaturesRequest.AsObject;
  static serializeBinaryToWriter(message: ResetInstanceFeaturesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResetInstanceFeaturesRequest;
  static deserializeBinaryFromReader(message: ResetInstanceFeaturesRequest, reader: jspb.BinaryReader): ResetInstanceFeaturesRequest;
}

export namespace ResetInstanceFeaturesRequest {
  export type AsObject = {
  }
}

export class ResetInstanceFeaturesResponse extends jspb.Message {
  getDetails(): zitadel_object_v2_object_pb.Details | undefined;
  setDetails(value?: zitadel_object_v2_object_pb.Details): ResetInstanceFeaturesResponse;
  hasDetails(): boolean;
  clearDetails(): ResetInstanceFeaturesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResetInstanceFeaturesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ResetInstanceFeaturesResponse): ResetInstanceFeaturesResponse.AsObject;
  static serializeBinaryToWriter(message: ResetInstanceFeaturesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResetInstanceFeaturesResponse;
  static deserializeBinaryFromReader(message: ResetInstanceFeaturesResponse, reader: jspb.BinaryReader): ResetInstanceFeaturesResponse;
}

export namespace ResetInstanceFeaturesResponse {
  export type AsObject = {
    details?: zitadel_object_v2_object_pb.Details.AsObject,
  }
}

export class GetInstanceFeaturesRequest extends jspb.Message {
  getInheritance(): boolean;
  setInheritance(value: boolean): GetInstanceFeaturesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetInstanceFeaturesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetInstanceFeaturesRequest): GetInstanceFeaturesRequest.AsObject;
  static serializeBinaryToWriter(message: GetInstanceFeaturesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetInstanceFeaturesRequest;
  static deserializeBinaryFromReader(message: GetInstanceFeaturesRequest, reader: jspb.BinaryReader): GetInstanceFeaturesRequest;
}

export namespace GetInstanceFeaturesRequest {
  export type AsObject = {
    inheritance: boolean,
  }
}

export class GetInstanceFeaturesResponse extends jspb.Message {
  getDetails(): zitadel_object_v2_object_pb.Details | undefined;
  setDetails(value?: zitadel_object_v2_object_pb.Details): GetInstanceFeaturesResponse;
  hasDetails(): boolean;
  clearDetails(): GetInstanceFeaturesResponse;

  getLoginDefaultOrg(): zitadel_feature_v2_feature_pb.FeatureFlag | undefined;
  setLoginDefaultOrg(value?: zitadel_feature_v2_feature_pb.FeatureFlag): GetInstanceFeaturesResponse;
  hasLoginDefaultOrg(): boolean;
  clearLoginDefaultOrg(): GetInstanceFeaturesResponse;

  getUserSchema(): zitadel_feature_v2_feature_pb.FeatureFlag | undefined;
  setUserSchema(value?: zitadel_feature_v2_feature_pb.FeatureFlag): GetInstanceFeaturesResponse;
  hasUserSchema(): boolean;
  clearUserSchema(): GetInstanceFeaturesResponse;

  getOidcTokenExchange(): zitadel_feature_v2_feature_pb.FeatureFlag | undefined;
  setOidcTokenExchange(value?: zitadel_feature_v2_feature_pb.FeatureFlag): GetInstanceFeaturesResponse;
  hasOidcTokenExchange(): boolean;
  clearOidcTokenExchange(): GetInstanceFeaturesResponse;

  getImprovedPerformance(): zitadel_feature_v2_feature_pb.ImprovedPerformanceFeatureFlag | undefined;
  setImprovedPerformance(value?: zitadel_feature_v2_feature_pb.ImprovedPerformanceFeatureFlag): GetInstanceFeaturesResponse;
  hasImprovedPerformance(): boolean;
  clearImprovedPerformance(): GetInstanceFeaturesResponse;

  getDebugOidcParentError(): zitadel_feature_v2_feature_pb.FeatureFlag | undefined;
  setDebugOidcParentError(value?: zitadel_feature_v2_feature_pb.FeatureFlag): GetInstanceFeaturesResponse;
  hasDebugOidcParentError(): boolean;
  clearDebugOidcParentError(): GetInstanceFeaturesResponse;

  getOidcSingleV1SessionTermination(): zitadel_feature_v2_feature_pb.FeatureFlag | undefined;
  setOidcSingleV1SessionTermination(value?: zitadel_feature_v2_feature_pb.FeatureFlag): GetInstanceFeaturesResponse;
  hasOidcSingleV1SessionTermination(): boolean;
  clearOidcSingleV1SessionTermination(): GetInstanceFeaturesResponse;

  getEnableBackChannelLogout(): zitadel_feature_v2_feature_pb.FeatureFlag | undefined;
  setEnableBackChannelLogout(value?: zitadel_feature_v2_feature_pb.FeatureFlag): GetInstanceFeaturesResponse;
  hasEnableBackChannelLogout(): boolean;
  clearEnableBackChannelLogout(): GetInstanceFeaturesResponse;

  getLoginV2(): zitadel_feature_v2_feature_pb.LoginV2FeatureFlag | undefined;
  setLoginV2(value?: zitadel_feature_v2_feature_pb.LoginV2FeatureFlag): GetInstanceFeaturesResponse;
  hasLoginV2(): boolean;
  clearLoginV2(): GetInstanceFeaturesResponse;

  getPermissionCheckV2(): zitadel_feature_v2_feature_pb.FeatureFlag | undefined;
  setPermissionCheckV2(value?: zitadel_feature_v2_feature_pb.FeatureFlag): GetInstanceFeaturesResponse;
  hasPermissionCheckV2(): boolean;
  clearPermissionCheckV2(): GetInstanceFeaturesResponse;

  getConsoleUseV2UserApi(): zitadel_feature_v2_feature_pb.FeatureFlag | undefined;
  setConsoleUseV2UserApi(value?: zitadel_feature_v2_feature_pb.FeatureFlag): GetInstanceFeaturesResponse;
  hasConsoleUseV2UserApi(): boolean;
  clearConsoleUseV2UserApi(): GetInstanceFeaturesResponse;

  getEnableRelationalTables(): zitadel_feature_v2_feature_pb.FeatureFlag | undefined;
  setEnableRelationalTables(value?: zitadel_feature_v2_feature_pb.FeatureFlag): GetInstanceFeaturesResponse;
  hasEnableRelationalTables(): boolean;
  clearEnableRelationalTables(): GetInstanceFeaturesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetInstanceFeaturesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetInstanceFeaturesResponse): GetInstanceFeaturesResponse.AsObject;
  static serializeBinaryToWriter(message: GetInstanceFeaturesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetInstanceFeaturesResponse;
  static deserializeBinaryFromReader(message: GetInstanceFeaturesResponse, reader: jspb.BinaryReader): GetInstanceFeaturesResponse;
}

export namespace GetInstanceFeaturesResponse {
  export type AsObject = {
    details?: zitadel_object_v2_object_pb.Details.AsObject,
    loginDefaultOrg?: zitadel_feature_v2_feature_pb.FeatureFlag.AsObject,
    userSchema?: zitadel_feature_v2_feature_pb.FeatureFlag.AsObject,
    oidcTokenExchange?: zitadel_feature_v2_feature_pb.FeatureFlag.AsObject,
    improvedPerformance?: zitadel_feature_v2_feature_pb.ImprovedPerformanceFeatureFlag.AsObject,
    debugOidcParentError?: zitadel_feature_v2_feature_pb.FeatureFlag.AsObject,
    oidcSingleV1SessionTermination?: zitadel_feature_v2_feature_pb.FeatureFlag.AsObject,
    enableBackChannelLogout?: zitadel_feature_v2_feature_pb.FeatureFlag.AsObject,
    loginV2?: zitadel_feature_v2_feature_pb.LoginV2FeatureFlag.AsObject,
    permissionCheckV2?: zitadel_feature_v2_feature_pb.FeatureFlag.AsObject,
    consoleUseV2UserApi?: zitadel_feature_v2_feature_pb.FeatureFlag.AsObject,
    enableRelationalTables?: zitadel_feature_v2_feature_pb.FeatureFlag.AsObject,
  }
}

