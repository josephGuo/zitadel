import * as jspb from 'google-protobuf'

import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb'; // proto import: "google/protobuf/duration.proto"
import * as protoc$gen$openapiv2_options_annotations_pb from '../../../protoc-gen-openapiv2/options/annotations_pb'; // proto import: "protoc-gen-openapiv2/options/annotations.proto"
import * as zitadel_application_v2_login_pb from '../../../zitadel/application/v2/login_pb'; // proto import: "zitadel/application/v2/login.proto"


export class OIDCLocalizedMessage extends jspb.Message {
  getKey(): string;
  setKey(value: string): OIDCLocalizedMessage;

  getLocalizedMessage(): string;
  setLocalizedMessage(value: string): OIDCLocalizedMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OIDCLocalizedMessage.AsObject;
  static toObject(includeInstance: boolean, msg: OIDCLocalizedMessage): OIDCLocalizedMessage.AsObject;
  static serializeBinaryToWriter(message: OIDCLocalizedMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OIDCLocalizedMessage;
  static deserializeBinaryFromReader(message: OIDCLocalizedMessage, reader: jspb.BinaryReader): OIDCLocalizedMessage;
}

export namespace OIDCLocalizedMessage {
  export type AsObject = {
    key: string,
    localizedMessage: string,
  }
}

export class OIDCConfiguration extends jspb.Message {
  getRedirectUrisList(): Array<string>;
  setRedirectUrisList(value: Array<string>): OIDCConfiguration;
  clearRedirectUrisList(): OIDCConfiguration;
  addRedirectUris(value: string, index?: number): OIDCConfiguration;

  getResponseTypesList(): Array<OIDCResponseType>;
  setResponseTypesList(value: Array<OIDCResponseType>): OIDCConfiguration;
  clearResponseTypesList(): OIDCConfiguration;
  addResponseTypes(value: OIDCResponseType, index?: number): OIDCConfiguration;

  getGrantTypesList(): Array<OIDCGrantType>;
  setGrantTypesList(value: Array<OIDCGrantType>): OIDCConfiguration;
  clearGrantTypesList(): OIDCConfiguration;
  addGrantTypes(value: OIDCGrantType, index?: number): OIDCConfiguration;

  getApplicationType(): OIDCApplicationType;
  setApplicationType(value: OIDCApplicationType): OIDCConfiguration;

  getClientId(): string;
  setClientId(value: string): OIDCConfiguration;

  getAuthMethodType(): OIDCAuthMethodType;
  setAuthMethodType(value: OIDCAuthMethodType): OIDCConfiguration;

  getPostLogoutRedirectUrisList(): Array<string>;
  setPostLogoutRedirectUrisList(value: Array<string>): OIDCConfiguration;
  clearPostLogoutRedirectUrisList(): OIDCConfiguration;
  addPostLogoutRedirectUris(value: string, index?: number): OIDCConfiguration;

  getVersion(): OIDCVersion;
  setVersion(value: OIDCVersion): OIDCConfiguration;

  getNonCompliant(): boolean;
  setNonCompliant(value: boolean): OIDCConfiguration;

  getComplianceProblemsList(): Array<OIDCLocalizedMessage>;
  setComplianceProblemsList(value: Array<OIDCLocalizedMessage>): OIDCConfiguration;
  clearComplianceProblemsList(): OIDCConfiguration;
  addComplianceProblems(value?: OIDCLocalizedMessage, index?: number): OIDCLocalizedMessage;

  getDevelopmentMode(): boolean;
  setDevelopmentMode(value: boolean): OIDCConfiguration;

  getAccessTokenType(): OIDCTokenType;
  setAccessTokenType(value: OIDCTokenType): OIDCConfiguration;

  getAccessTokenRoleAssertion(): boolean;
  setAccessTokenRoleAssertion(value: boolean): OIDCConfiguration;

  getIdTokenRoleAssertion(): boolean;
  setIdTokenRoleAssertion(value: boolean): OIDCConfiguration;

  getIdTokenUserinfoAssertion(): boolean;
  setIdTokenUserinfoAssertion(value: boolean): OIDCConfiguration;

  getClockSkew(): google_protobuf_duration_pb.Duration | undefined;
  setClockSkew(value?: google_protobuf_duration_pb.Duration): OIDCConfiguration;
  hasClockSkew(): boolean;
  clearClockSkew(): OIDCConfiguration;

  getAdditionalOriginsList(): Array<string>;
  setAdditionalOriginsList(value: Array<string>): OIDCConfiguration;
  clearAdditionalOriginsList(): OIDCConfiguration;
  addAdditionalOrigins(value: string, index?: number): OIDCConfiguration;

  getAllowedOriginsList(): Array<string>;
  setAllowedOriginsList(value: Array<string>): OIDCConfiguration;
  clearAllowedOriginsList(): OIDCConfiguration;
  addAllowedOrigins(value: string, index?: number): OIDCConfiguration;

  getSkipNativeAppSuccessPage(): boolean;
  setSkipNativeAppSuccessPage(value: boolean): OIDCConfiguration;

  getBackChannelLogoutUri(): string;
  setBackChannelLogoutUri(value: string): OIDCConfiguration;

  getLoginVersion(): zitadel_application_v2_login_pb.LoginVersion | undefined;
  setLoginVersion(value?: zitadel_application_v2_login_pb.LoginVersion): OIDCConfiguration;
  hasLoginVersion(): boolean;
  clearLoginVersion(): OIDCConfiguration;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OIDCConfiguration.AsObject;
  static toObject(includeInstance: boolean, msg: OIDCConfiguration): OIDCConfiguration.AsObject;
  static serializeBinaryToWriter(message: OIDCConfiguration, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OIDCConfiguration;
  static deserializeBinaryFromReader(message: OIDCConfiguration, reader: jspb.BinaryReader): OIDCConfiguration;
}

export namespace OIDCConfiguration {
  export type AsObject = {
    redirectUrisList: Array<string>,
    responseTypesList: Array<OIDCResponseType>,
    grantTypesList: Array<OIDCGrantType>,
    applicationType: OIDCApplicationType,
    clientId: string,
    authMethodType: OIDCAuthMethodType,
    postLogoutRedirectUrisList: Array<string>,
    version: OIDCVersion,
    nonCompliant: boolean,
    complianceProblemsList: Array<OIDCLocalizedMessage.AsObject>,
    developmentMode: boolean,
    accessTokenType: OIDCTokenType,
    accessTokenRoleAssertion: boolean,
    idTokenRoleAssertion: boolean,
    idTokenUserinfoAssertion: boolean,
    clockSkew?: google_protobuf_duration_pb.Duration.AsObject,
    additionalOriginsList: Array<string>,
    allowedOriginsList: Array<string>,
    skipNativeAppSuccessPage: boolean,
    backChannelLogoutUri: string,
    loginVersion?: zitadel_application_v2_login_pb.LoginVersion.AsObject,
  }
}

export enum OIDCResponseType { 
  OIDC_RESPONSE_TYPE_UNSPECIFIED = 0,
  OIDC_RESPONSE_TYPE_CODE = 1,
  OIDC_RESPONSE_TYPE_ID_TOKEN = 2,
  OIDC_RESPONSE_TYPE_ID_TOKEN_TOKEN = 3,
}
export enum OIDCGrantType { 
  OIDC_GRANT_TYPE_AUTHORIZATION_CODE = 0,
  OIDC_GRANT_TYPE_IMPLICIT = 1,
  OIDC_GRANT_TYPE_REFRESH_TOKEN = 2,
  OIDC_GRANT_TYPE_DEVICE_CODE = 3,
  OIDC_GRANT_TYPE_TOKEN_EXCHANGE = 4,
}
export enum OIDCApplicationType { 
  OIDC_APP_TYPE_WEB = 0,
  OIDC_APP_TYPE_USER_AGENT = 1,
  OIDC_APP_TYPE_NATIVE = 2,
}
export enum OIDCAuthMethodType { 
  OIDC_AUTH_METHOD_TYPE_BASIC = 0,
  OIDC_AUTH_METHOD_TYPE_POST = 1,
  OIDC_AUTH_METHOD_TYPE_NONE = 2,
  OIDC_AUTH_METHOD_TYPE_PRIVATE_KEY_JWT = 3,
}
export enum OIDCVersion { 
  OIDC_VERSION_1_0 = 0,
}
export enum OIDCTokenType { 
  OIDC_TOKEN_TYPE_BEARER = 0,
  OIDC_TOKEN_TYPE_JWT = 1,
}
