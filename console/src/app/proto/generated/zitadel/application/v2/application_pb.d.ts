import * as jspb from 'google-protobuf'

import * as google_api_field_behavior_pb from '../../../google/api/field_behavior_pb'; // proto import: "google/api/field_behavior.proto"
import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb'; // proto import: "google/protobuf/duration.proto"
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"
import * as protoc$gen$openapiv2_options_annotations_pb from '../../../protoc-gen-openapiv2/options/annotations_pb'; // proto import: "protoc-gen-openapiv2/options/annotations.proto"
import * as validate_validate_pb from '../../../validate/validate_pb'; // proto import: "validate/validate.proto"
import * as zitadel_application_v2_api_pb from '../../../zitadel/application/v2/api_pb'; // proto import: "zitadel/application/v2/api.proto"
import * as zitadel_application_v2_oidc_pb from '../../../zitadel/application/v2/oidc_pb'; // proto import: "zitadel/application/v2/oidc.proto"
import * as zitadel_application_v2_saml_pb from '../../../zitadel/application/v2/saml_pb'; // proto import: "zitadel/application/v2/saml.proto"
import * as zitadel_filter_v2_filter_pb from '../../../zitadel/filter/v2/filter_pb'; // proto import: "zitadel/filter/v2/filter.proto"


export class Application extends jspb.Message {
  getApplicationId(): string;
  setApplicationId(value: string): Application;

  getCreationDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreationDate(value?: google_protobuf_timestamp_pb.Timestamp): Application;
  hasCreationDate(): boolean;
  clearCreationDate(): Application;

  getChangeDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setChangeDate(value?: google_protobuf_timestamp_pb.Timestamp): Application;
  hasChangeDate(): boolean;
  clearChangeDate(): Application;

  getState(): ApplicationState;
  setState(value: ApplicationState): Application;

  getName(): string;
  setName(value: string): Application;

  getOidcConfiguration(): zitadel_application_v2_oidc_pb.OIDCConfiguration | undefined;
  setOidcConfiguration(value?: zitadel_application_v2_oidc_pb.OIDCConfiguration): Application;
  hasOidcConfiguration(): boolean;
  clearOidcConfiguration(): Application;

  getApiConfiguration(): zitadel_application_v2_api_pb.APIConfiguration | undefined;
  setApiConfiguration(value?: zitadel_application_v2_api_pb.APIConfiguration): Application;
  hasApiConfiguration(): boolean;
  clearApiConfiguration(): Application;

  getSamlConfiguration(): zitadel_application_v2_saml_pb.SAMLConfiguration | undefined;
  setSamlConfiguration(value?: zitadel_application_v2_saml_pb.SAMLConfiguration): Application;
  hasSamlConfiguration(): boolean;
  clearSamlConfiguration(): Application;

  getProjectId(): string;
  setProjectId(value: string): Application;

  getConfigurationCase(): Application.ConfigurationCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Application.AsObject;
  static toObject(includeInstance: boolean, msg: Application): Application.AsObject;
  static serializeBinaryToWriter(message: Application, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Application;
  static deserializeBinaryFromReader(message: Application, reader: jspb.BinaryReader): Application;
}

export namespace Application {
  export type AsObject = {
    applicationId: string,
    creationDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    changeDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    state: ApplicationState,
    name: string,
    oidcConfiguration?: zitadel_application_v2_oidc_pb.OIDCConfiguration.AsObject,
    apiConfiguration?: zitadel_application_v2_api_pb.APIConfiguration.AsObject,
    samlConfiguration?: zitadel_application_v2_saml_pb.SAMLConfiguration.AsObject,
    projectId: string,
  }

  export enum ConfigurationCase { 
    CONFIGURATION_NOT_SET = 0,
    OIDC_CONFIGURATION = 6,
    API_CONFIGURATION = 7,
    SAML_CONFIGURATION = 8,
  }
}

export class ApplicationSearchFilter extends jspb.Message {
  getProjectIdFilter(): ProjectIDFilter | undefined;
  setProjectIdFilter(value?: ProjectIDFilter): ApplicationSearchFilter;
  hasProjectIdFilter(): boolean;
  clearProjectIdFilter(): ApplicationSearchFilter;

  getNameFilter(): ApplicationNameFilter | undefined;
  setNameFilter(value?: ApplicationNameFilter): ApplicationSearchFilter;
  hasNameFilter(): boolean;
  clearNameFilter(): ApplicationSearchFilter;

  getStateFilter(): ApplicationState;
  setStateFilter(value: ApplicationState): ApplicationSearchFilter;

  getTypeFilter(): ApplicationType;
  setTypeFilter(value: ApplicationType): ApplicationSearchFilter;

  getClientIdFilter(): ClientIDFilter | undefined;
  setClientIdFilter(value?: ClientIDFilter): ApplicationSearchFilter;
  hasClientIdFilter(): boolean;
  clearClientIdFilter(): ApplicationSearchFilter;

  getEntityIdFilter(): EntityIDFilter | undefined;
  setEntityIdFilter(value?: EntityIDFilter): ApplicationSearchFilter;
  hasEntityIdFilter(): boolean;
  clearEntityIdFilter(): ApplicationSearchFilter;

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
    projectIdFilter?: ProjectIDFilter.AsObject,
    nameFilter?: ApplicationNameFilter.AsObject,
    stateFilter: ApplicationState,
    typeFilter: ApplicationType,
    clientIdFilter?: ClientIDFilter.AsObject,
    entityIdFilter?: EntityIDFilter.AsObject,
  }

  export enum FilterCase { 
    FILTER_NOT_SET = 0,
    PROJECT_ID_FILTER = 1,
    NAME_FILTER = 2,
    STATE_FILTER = 3,
    TYPE_FILTER = 4,
    CLIENT_ID_FILTER = 5,
    ENTITY_ID_FILTER = 6,
  }
}

export class ProjectIDFilter extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): ProjectIDFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProjectIDFilter.AsObject;
  static toObject(includeInstance: boolean, msg: ProjectIDFilter): ProjectIDFilter.AsObject;
  static serializeBinaryToWriter(message: ProjectIDFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProjectIDFilter;
  static deserializeBinaryFromReader(message: ProjectIDFilter, reader: jspb.BinaryReader): ProjectIDFilter;
}

export namespace ProjectIDFilter {
  export type AsObject = {
    projectId: string,
  }
}

export class ApplicationNameFilter extends jspb.Message {
  getName(): string;
  setName(value: string): ApplicationNameFilter;

  getMethod(): zitadel_filter_v2_filter_pb.TextFilterMethod;
  setMethod(value: zitadel_filter_v2_filter_pb.TextFilterMethod): ApplicationNameFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApplicationNameFilter.AsObject;
  static toObject(includeInstance: boolean, msg: ApplicationNameFilter): ApplicationNameFilter.AsObject;
  static serializeBinaryToWriter(message: ApplicationNameFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApplicationNameFilter;
  static deserializeBinaryFromReader(message: ApplicationNameFilter, reader: jspb.BinaryReader): ApplicationNameFilter;
}

export namespace ApplicationNameFilter {
  export type AsObject = {
    name: string,
    method: zitadel_filter_v2_filter_pb.TextFilterMethod,
  }
}

export class ClientIDFilter extends jspb.Message {
  getClientId(): string;
  setClientId(value: string): ClientIDFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientIDFilter.AsObject;
  static toObject(includeInstance: boolean, msg: ClientIDFilter): ClientIDFilter.AsObject;
  static serializeBinaryToWriter(message: ClientIDFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientIDFilter;
  static deserializeBinaryFromReader(message: ClientIDFilter, reader: jspb.BinaryReader): ClientIDFilter;
}

export namespace ClientIDFilter {
  export type AsObject = {
    clientId: string,
  }
}

export class EntityIDFilter extends jspb.Message {
  getEntityId(): string;
  setEntityId(value: string): EntityIDFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EntityIDFilter.AsObject;
  static toObject(includeInstance: boolean, msg: EntityIDFilter): EntityIDFilter.AsObject;
  static serializeBinaryToWriter(message: EntityIDFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EntityIDFilter;
  static deserializeBinaryFromReader(message: EntityIDFilter, reader: jspb.BinaryReader): EntityIDFilter;
}

export namespace EntityIDFilter {
  export type AsObject = {
    entityId: string,
  }
}

export class ApplicationKeySearchFilter extends jspb.Message {
  getApplicationIdFilter(): ApplicationKeyApplicationIDFilter | undefined;
  setApplicationIdFilter(value?: ApplicationKeyApplicationIDFilter): ApplicationKeySearchFilter;
  hasApplicationIdFilter(): boolean;
  clearApplicationIdFilter(): ApplicationKeySearchFilter;

  getProjectIdFilter(): ApplicationKeyProjectIDFilter | undefined;
  setProjectIdFilter(value?: ApplicationKeyProjectIDFilter): ApplicationKeySearchFilter;
  hasProjectIdFilter(): boolean;
  clearProjectIdFilter(): ApplicationKeySearchFilter;

  getOrganizationIdFilter(): ApplicationKeyOrganizationIDFilter | undefined;
  setOrganizationIdFilter(value?: ApplicationKeyOrganizationIDFilter): ApplicationKeySearchFilter;
  hasOrganizationIdFilter(): boolean;
  clearOrganizationIdFilter(): ApplicationKeySearchFilter;

  getFilterCase(): ApplicationKeySearchFilter.FilterCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApplicationKeySearchFilter.AsObject;
  static toObject(includeInstance: boolean, msg: ApplicationKeySearchFilter): ApplicationKeySearchFilter.AsObject;
  static serializeBinaryToWriter(message: ApplicationKeySearchFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApplicationKeySearchFilter;
  static deserializeBinaryFromReader(message: ApplicationKeySearchFilter, reader: jspb.BinaryReader): ApplicationKeySearchFilter;
}

export namespace ApplicationKeySearchFilter {
  export type AsObject = {
    applicationIdFilter?: ApplicationKeyApplicationIDFilter.AsObject,
    projectIdFilter?: ApplicationKeyProjectIDFilter.AsObject,
    organizationIdFilter?: ApplicationKeyOrganizationIDFilter.AsObject,
  }

  export enum FilterCase { 
    FILTER_NOT_SET = 0,
    APPLICATION_ID_FILTER = 1,
    PROJECT_ID_FILTER = 2,
    ORGANIZATION_ID_FILTER = 3,
  }
}

export class ApplicationKeyApplicationIDFilter extends jspb.Message {
  getApplicationId(): string;
  setApplicationId(value: string): ApplicationKeyApplicationIDFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApplicationKeyApplicationIDFilter.AsObject;
  static toObject(includeInstance: boolean, msg: ApplicationKeyApplicationIDFilter): ApplicationKeyApplicationIDFilter.AsObject;
  static serializeBinaryToWriter(message: ApplicationKeyApplicationIDFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApplicationKeyApplicationIDFilter;
  static deserializeBinaryFromReader(message: ApplicationKeyApplicationIDFilter, reader: jspb.BinaryReader): ApplicationKeyApplicationIDFilter;
}

export namespace ApplicationKeyApplicationIDFilter {
  export type AsObject = {
    applicationId: string,
  }
}

export class ApplicationKeyProjectIDFilter extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): ApplicationKeyProjectIDFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApplicationKeyProjectIDFilter.AsObject;
  static toObject(includeInstance: boolean, msg: ApplicationKeyProjectIDFilter): ApplicationKeyProjectIDFilter.AsObject;
  static serializeBinaryToWriter(message: ApplicationKeyProjectIDFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApplicationKeyProjectIDFilter;
  static deserializeBinaryFromReader(message: ApplicationKeyProjectIDFilter, reader: jspb.BinaryReader): ApplicationKeyProjectIDFilter;
}

export namespace ApplicationKeyProjectIDFilter {
  export type AsObject = {
    projectId: string,
  }
}

export class ApplicationKeyOrganizationIDFilter extends jspb.Message {
  getOrganizationId(): string;
  setOrganizationId(value: string): ApplicationKeyOrganizationIDFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApplicationKeyOrganizationIDFilter.AsObject;
  static toObject(includeInstance: boolean, msg: ApplicationKeyOrganizationIDFilter): ApplicationKeyOrganizationIDFilter.AsObject;
  static serializeBinaryToWriter(message: ApplicationKeyOrganizationIDFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApplicationKeyOrganizationIDFilter;
  static deserializeBinaryFromReader(message: ApplicationKeyOrganizationIDFilter, reader: jspb.BinaryReader): ApplicationKeyOrganizationIDFilter;
}

export namespace ApplicationKeyOrganizationIDFilter {
  export type AsObject = {
    organizationId: string,
  }
}

export class ApplicationKey extends jspb.Message {
  getKeyId(): string;
  setKeyId(value: string): ApplicationKey;

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
    keyId: string,
    applicationId: string,
    projectId: string,
    creationDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    organizationId: string,
    expirationDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export enum ApplicationState { 
  APPLICATION_STATE_UNSPECIFIED = 0,
  APPLICATION_STATE_ACTIVE = 1,
  APPLICATION_STATE_INACTIVE = 2,
  APPLICATION_STATE_REMOVED = 3,
}
export enum ApplicationSorting { 
  APPLICATION_SORT_BY_ID = 0,
  APPLICATION_SORT_BY_NAME = 1,
  APPLICATION_SORT_BY_STATE = 2,
  APPLICATION_SORT_BY_CREATION_DATE = 3,
  APPLICATION_SORT_BY_CHANGE_DATE = 4,
}
export enum ApplicationType { 
  APPLICATION_TYPE_UNSPECIFIED = 0,
  APPLICATION_TYPE_OIDC = 1,
  APPLICATION_TYPE_API = 2,
  APPLICATION_TYPE_SAML = 3,
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
