import * as jspb from 'google-protobuf'

import * as google_api_field_behavior_pb from '../../../../google/api/field_behavior_pb'; // proto import: "google/api/field_behavior.proto"
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb'; // proto import: "google/protobuf/struct.proto"
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"
import * as protoc$gen$openapiv2_options_annotations_pb from '../../../../protoc-gen-openapiv2/options/annotations_pb'; // proto import: "protoc-gen-openapiv2/options/annotations.proto"
import * as validate_validate_pb from '../../../../validate/validate_pb'; // proto import: "validate/validate.proto"
import * as zitadel_resources_object_v3alpha_object_pb from '../../../../zitadel/resources/object/v3alpha/object_pb'; // proto import: "zitadel/resources/object/v3alpha/object.proto"
import * as zitadel_resources_user_v3alpha_authenticator_pb from '../../../../zitadel/resources/user/v3alpha/authenticator_pb'; // proto import: "zitadel/resources/user/v3alpha/authenticator.proto"
import * as zitadel_resources_user_v3alpha_communication_pb from '../../../../zitadel/resources/user/v3alpha/communication_pb'; // proto import: "zitadel/resources/user/v3alpha/communication.proto"


export class CreateUser extends jspb.Message {
  getSchemaId(): string;
  setSchemaId(value: string): CreateUser;

  getData(): google_protobuf_struct_pb.Struct | undefined;
  setData(value?: google_protobuf_struct_pb.Struct): CreateUser;
  hasData(): boolean;
  clearData(): CreateUser;

  getContact(): zitadel_resources_user_v3alpha_communication_pb.SetContact | undefined;
  setContact(value?: zitadel_resources_user_v3alpha_communication_pb.SetContact): CreateUser;
  hasContact(): boolean;
  clearContact(): CreateUser;

  getAuthenticators(): zitadel_resources_user_v3alpha_authenticator_pb.SetAuthenticators | undefined;
  setAuthenticators(value?: zitadel_resources_user_v3alpha_authenticator_pb.SetAuthenticators): CreateUser;
  hasAuthenticators(): boolean;
  clearAuthenticators(): CreateUser;

  getUserId(): string;
  setUserId(value: string): CreateUser;
  hasUserId(): boolean;
  clearUserId(): CreateUser;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateUser.AsObject;
  static toObject(includeInstance: boolean, msg: CreateUser): CreateUser.AsObject;
  static serializeBinaryToWriter(message: CreateUser, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateUser;
  static deserializeBinaryFromReader(message: CreateUser, reader: jspb.BinaryReader): CreateUser;
}

export namespace CreateUser {
  export type AsObject = {
    schemaId: string,
    data?: google_protobuf_struct_pb.Struct.AsObject,
    contact?: zitadel_resources_user_v3alpha_communication_pb.SetContact.AsObject,
    authenticators?: zitadel_resources_user_v3alpha_authenticator_pb.SetAuthenticators.AsObject,
    userId?: string,
  }

  export enum UserIdCase { 
    _USER_ID_NOT_SET = 0,
    USER_ID = 5,
  }
}

export class PatchUser extends jspb.Message {
  getSchemaId(): string;
  setSchemaId(value: string): PatchUser;
  hasSchemaId(): boolean;
  clearSchemaId(): PatchUser;

  getData(): google_protobuf_struct_pb.Struct | undefined;
  setData(value?: google_protobuf_struct_pb.Struct): PatchUser;
  hasData(): boolean;
  clearData(): PatchUser;

  getContact(): zitadel_resources_user_v3alpha_communication_pb.SetContact | undefined;
  setContact(value?: zitadel_resources_user_v3alpha_communication_pb.SetContact): PatchUser;
  hasContact(): boolean;
  clearContact(): PatchUser;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PatchUser.AsObject;
  static toObject(includeInstance: boolean, msg: PatchUser): PatchUser.AsObject;
  static serializeBinaryToWriter(message: PatchUser, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PatchUser;
  static deserializeBinaryFromReader(message: PatchUser, reader: jspb.BinaryReader): PatchUser;
}

export namespace PatchUser {
  export type AsObject = {
    schemaId?: string,
    data?: google_protobuf_struct_pb.Struct.AsObject,
    contact?: zitadel_resources_user_v3alpha_communication_pb.SetContact.AsObject,
  }

  export enum SchemaIdCase { 
    _SCHEMA_ID_NOT_SET = 0,
    SCHEMA_ID = 1,
  }

  export enum DataCase { 
    _DATA_NOT_SET = 0,
    DATA = 2,
  }

  export enum ContactCase { 
    _CONTACT_NOT_SET = 0,
    CONTACT = 3,
  }
}

export class GetUser extends jspb.Message {
  getDetails(): zitadel_resources_object_v3alpha_object_pb.Details | undefined;
  setDetails(value?: zitadel_resources_object_v3alpha_object_pb.Details): GetUser;
  hasDetails(): boolean;
  clearDetails(): GetUser;

  getSchema(): GetSchema | undefined;
  setSchema(value?: GetSchema): GetUser;
  hasSchema(): boolean;
  clearSchema(): GetUser;

  getData(): google_protobuf_struct_pb.Struct | undefined;
  setData(value?: google_protobuf_struct_pb.Struct): GetUser;
  hasData(): boolean;
  clearData(): GetUser;

  getContact(): zitadel_resources_user_v3alpha_communication_pb.Contact | undefined;
  setContact(value?: zitadel_resources_user_v3alpha_communication_pb.Contact): GetUser;
  hasContact(): boolean;
  clearContact(): GetUser;

  getAuthenticators(): zitadel_resources_user_v3alpha_authenticator_pb.Authenticators | undefined;
  setAuthenticators(value?: zitadel_resources_user_v3alpha_authenticator_pb.Authenticators): GetUser;
  hasAuthenticators(): boolean;
  clearAuthenticators(): GetUser;

  getState(): State;
  setState(value: State): GetUser;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUser.AsObject;
  static toObject(includeInstance: boolean, msg: GetUser): GetUser.AsObject;
  static serializeBinaryToWriter(message: GetUser, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUser;
  static deserializeBinaryFromReader(message: GetUser, reader: jspb.BinaryReader): GetUser;
}

export namespace GetUser {
  export type AsObject = {
    details?: zitadel_resources_object_v3alpha_object_pb.Details.AsObject,
    schema?: GetSchema.AsObject,
    data?: google_protobuf_struct_pb.Struct.AsObject,
    contact?: zitadel_resources_user_v3alpha_communication_pb.Contact.AsObject,
    authenticators?: zitadel_resources_user_v3alpha_authenticator_pb.Authenticators.AsObject,
    state: State,
  }
}

export class GetSchema extends jspb.Message {
  getId(): string;
  setId(value: string): GetSchema;

  getType(): string;
  setType(value: string): GetSchema;

  getRevision(): number;
  setRevision(value: number): GetSchema;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSchema.AsObject;
  static toObject(includeInstance: boolean, msg: GetSchema): GetSchema.AsObject;
  static serializeBinaryToWriter(message: GetSchema, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSchema;
  static deserializeBinaryFromReader(message: GetSchema, reader: jspb.BinaryReader): GetSchema;
}

export namespace GetSchema {
  export type AsObject = {
    id: string,
    type: string,
    revision: number,
  }
}

export enum State { 
  USER_STATE_UNSPECIFIED = 0,
  USER_STATE_ACTIVE = 1,
  USER_STATE_INACTIVE = 2,
  USER_STATE_DELETED = 3,
  USER_STATE_LOCKED = 4,
}
