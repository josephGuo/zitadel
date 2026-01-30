import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"
import * as protoc$gen$openapiv2_options_annotations_pb from '../../../protoc-gen-openapiv2/options/annotations_pb'; // proto import: "protoc-gen-openapiv2/options/annotations.proto"
import * as validate_validate_pb from '../../../validate/validate_pb'; // proto import: "validate/validate.proto"


export class Owner extends jspb.Message {
  getType(): OwnerType;
  setType(value: OwnerType): Owner;

  getId(): string;
  setId(value: string): Owner;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Owner.AsObject;
  static toObject(includeInstance: boolean, msg: Owner): Owner.AsObject;
  static serializeBinaryToWriter(message: Owner, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Owner;
  static deserializeBinaryFromReader(message: Owner, reader: jspb.BinaryReader): Owner;
}

export namespace Owner {
  export type AsObject = {
    type: OwnerType,
    id: string,
  }
}

export class Instance extends jspb.Message {
  getId(): string;
  setId(value: string): Instance;

  getDomain(): string;
  setDomain(value: string): Instance;

  getPropertyCase(): Instance.PropertyCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Instance.AsObject;
  static toObject(includeInstance: boolean, msg: Instance): Instance.AsObject;
  static serializeBinaryToWriter(message: Instance, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Instance;
  static deserializeBinaryFromReader(message: Instance, reader: jspb.BinaryReader): Instance;
}

export namespace Instance {
  export type AsObject = {
    id: string,
    domain: string,
  }

  export enum PropertyCase { 
    PROPERTY_NOT_SET = 0,
    ID = 1,
    DOMAIN = 2,
  }
}

export class Organization extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): Organization;

  getOrgDomain(): string;
  setOrgDomain(value: string): Organization;

  getPropertyCase(): Organization.PropertyCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Organization.AsObject;
  static toObject(includeInstance: boolean, msg: Organization): Organization.AsObject;
  static serializeBinaryToWriter(message: Organization, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Organization;
  static deserializeBinaryFromReader(message: Organization, reader: jspb.BinaryReader): Organization;
}

export namespace Organization {
  export type AsObject = {
    orgId: string,
    orgDomain: string,
  }

  export enum PropertyCase { 
    PROPERTY_NOT_SET = 0,
    ORG_ID = 1,
    ORG_DOMAIN = 2,
  }
}

export enum OwnerType { 
  OWNER_TYPE_UNSPECIFIED = 0,
  OWNER_TYPE_SYSTEM = 1,
  OWNER_TYPE_INSTANCE = 2,
  OWNER_TYPE_ORG = 3,
}
