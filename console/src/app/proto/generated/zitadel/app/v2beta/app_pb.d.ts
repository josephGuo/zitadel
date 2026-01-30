import * as jspb from 'google-protobuf'

import * as zitadel_app_v2beta_oidc_pb from '../../../zitadel/app/v2beta/oidc_pb'; // proto import: "zitadel/app/v2beta/oidc.proto"
import * as zitadel_app_v2beta_saml_pb from '../../../zitadel/app/v2beta/saml_pb'; // proto import: "zitadel/app/v2beta/saml.proto"
import * as zitadel_app_v2beta_api_pb from '../../../zitadel/app/v2beta/api_pb'; // proto import: "zitadel/app/v2beta/api.proto"
import * as zitadel_filter_v2_filter_pb from '../../../zitadel/filter/v2/filter_pb'; // proto import: "zitadel/filter/v2/filter.proto"
import * as protoc$gen$openapiv2_options_annotations_pb from '../../../protoc-gen-openapiv2/options/annotations_pb'; // proto import: "protoc-gen-openapiv2/options/annotations.proto"
import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb'; // proto import: "google/protobuf/duration.proto"
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"
import * as validate_validate_pb from '../../../validate/validate_pb'; // proto import: "validate/validate.proto"


export class Application extends jspb.Message {
  getId(): string;
  setId(value: string): Application;

  getCreationDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreationDate(value?: google_protobuf_timestamp_pb.Timestamp): Application;
  hasCreationDate(): boolean;
  clearCreationDate(): Application;

  getChangeDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setChangeDate(value?: google_protobuf_timestamp_pb.Timestamp): Application;
  hasChangeDate(): boolean;
  clearChangeDate(): Application;

  getState(): AppState;
  setState(value: AppState): Application;

  getName(): string;
  setName(value: string): Application;

  getOidcConfig(): zitadel_app_v2beta_oidc_pb.OIDCConfig | undefined;
  setOidcConfig(value?: zitadel_app_v2beta_oidc_pb.OIDCConfig): Application;
  hasOidcConfig(): boolean;
  clearOidcConfig(): Application;

  getApiConfig(): zitadel_app_v2beta_api_pb.APIConfig | undefined;
  setApiConfig(value?: zitadel_app_v2beta_api_pb.APIConfig): Application;
  hasApiConfig(): boolean;
  clearApiConfig(): Application;

  getSamlConfig(): zitadel_app_v2beta_saml_pb.SAMLConfig | undefined;
  setSamlConfig(value?: zitadel_app_v2beta_saml_pb.SAMLConfig): Application;
  hasSamlConfig(): boolean;
  clearSamlConfig(): Application;

  getConfigCase(): Application.ConfigCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Application.AsObject;
  static toObject(includeInstance: boolean, msg: Application): Application.AsObject;
  static serializeBinaryToWriter(message: Application, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Application;
  static deserializeBinaryFromReader(message: Application, reader: jspb.BinaryReader): Application;
}

export namespace Application {
  export type AsObject = {
    id: string,
    creationDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    changeDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    state: AppState,
    name: string,
    oidcConfig?: zitadel_app_v2beta_oidc_pb.OIDCConfig.AsObject,
    apiConfig?: zitadel_app_v2beta_api_pb.APIConfig.AsObject,
    samlConfig?: zitadel_app_v2beta_saml_pb.SAMLConfig.AsObject,
  }

  export enum ConfigCase { 
    CONFIG_NOT_SET = 0,
    OIDC_CONFIG = 6,
    API_CONFIG = 7,
    SAML_CONFIG = 8,
  }
}

export class ApplicationSearchFilter extends jspb.Message {
  getNameFilter(): ApplicationNameQuery | undefined;
  setNameFilter(value?: ApplicationNameQuery): ApplicationSearchFilter;
  hasNameFilter(): boolean;
  clearNameFilter(): ApplicationSearchFilter;

  getStateFilter(): AppState;
  setStateFilter(value: AppState): ApplicationSearchFilter;

  getApiAppOnly(): boolean;
  setApiAppOnly(value: boolean): ApplicationSearchFilter;

  getOidcAppOnly(): boolean;
  setOidcAppOnly(value: boolean): ApplicationSearchFilter;

  getSamlAppOnly(): boolean;
  setSamlAppOnly(value: boolean): ApplicationSearchFilter;

  getFilterCase(): ApplicationSearchFilter.FilterCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApplicationSearchFilter.AsObject;
  static toObject(includeInstance: boolean, msg: ApplicationSearchFilter): ApplicationSearchFilter.AsObject;
  static serializeBinaryToWriter(message: ApplicationSearchFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApplicationSearchFilter;
  static deserializeBinaryFromReader(message: ApplicationSearchFilter, reader: jspb.BinaryReader): ApplicationSearchFilter;
}

export namespace ApplicationSearchFilter {
  export type AsObject = {
    nameFilter?: ApplicationNameQuery.AsObject,
    stateFilter: AppState,
    apiAppOnly: boolean,
    oidcAppOnly: boolean,
    samlAppOnly: boolean,
  }

  export enum FilterCase { 
    FILTER_NOT_SET = 0,
    NAME_FILTER = 1,
    STATE_FILTER = 2,
    API_APP_ONLY = 3,
    OIDC_APP_ONLY = 4,
    SAML_APP_ONLY = 5,
  }
}

export class ApplicationNameQuery extends jspb.Message {
  getName(): string;
  setName(value: string): ApplicationNameQuery;

  getMethod(): zitadel_filter_v2_filter_pb.TextFilterMethod;
  setMethod(value: zitadel_filter_v2_filter_pb.TextFilterMethod): ApplicationNameQuery;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApplicationNameQuery.AsObject;
  static toObject(includeInstance: boolean, msg: ApplicationNameQuery): ApplicationNameQuery.AsObject;
  static serializeBinaryToWriter(message: ApplicationNameQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApplicationNameQuery;
  static deserializeBinaryFromReader(message: ApplicationNameQuery, reader: jspb.BinaryReader): ApplicationNameQuery;
}

export namespace ApplicationNameQuery {
  export type AsObject = {
    name: string,
    method: zitadel_filter_v2_filter_pb.TextFilterMethod,
  }
}

export class ApplicationKey extends jspb.Message {
  getId(): string;
  setId(value: string): ApplicationKey;

  getApplicationId(): string;
  setApplicationId(value: string): ApplicationKey;

  getProjectId(): string;
  setProjectId(value: string): ApplicationKey;

  getCreationDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreationDate(value?: google_protobuf_timestamp_pb.Timestamp): ApplicationKey;
  hasCreationDate(): boolean;
  clearCreationDate(): ApplicationKey;

  getOrganizationId(): string;
  setOrganizationId(value: string): ApplicationKey;

  getExpirationDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpirationDate(value?: google_protobuf_timestamp_pb.Timestamp): ApplicationKey;
  hasExpirationDate(): boolean;
  clearExpirationDate(): ApplicationKey;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApplicationKey.AsObject;
  static toObject(includeInstance: boolean, msg: ApplicationKey): ApplicationKey.AsObject;
  static serializeBinaryToWriter(message: ApplicationKey, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApplicationKey;
  static deserializeBinaryFromReader(message: ApplicationKey, reader: jspb.BinaryReader): ApplicationKey;
}

export namespace ApplicationKey {
  export type AsObject = {
    id: string,
    applicationId: string,
    projectId: string,
    creationDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    organizationId: string,
    expirationDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export enum AppState { 
  APP_STATE_UNSPECIFIED = 0,
  APP_STATE_ACTIVE = 1,
  APP_STATE_INACTIVE = 2,
  APP_STATE_REMOVED = 3,
}
export enum AppSorting { 
  APP_SORT_BY_ID = 0,
  APP_SORT_BY_NAME = 1,
  APP_SORT_BY_STATE = 2,
  APP_SORT_BY_CREATION_DATE = 3,
  APP_SORT_BY_CHANGE_DATE = 4,
}
export enum ApplicationKeysSorting { 
  APPLICATION_KEYS_SORT_BY_ID = 0,
  APPLICATION_KEYS_SORT_BY_PROJECT_ID = 1,
  APPLICATION_KEYS_SORT_BY_APPLICATION_ID = 2,
  APPLICATION_KEYS_SORT_BY_CREATION_DATE = 3,
  APPLICATION_KEYS_SORT_BY_ORGANIZATION_ID = 4,
  APPLICATION_KEYS_SORT_BY_EXPIRATION = 5,
  APPLICATION_KEYS_SORT_BY_TYPE = 6,
}
