import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"


export class InstanceInformation extends jspb.Message {
  getId(): string;
  setId(value: string): InstanceInformation;

  getDomainsList(): Array<string>;
  setDomainsList(value: Array<string>): InstanceInformation;
  clearDomainsList(): InstanceInformation;
  addDomains(value: string, index?: number): InstanceInformation;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): InstanceInformation;
  hasCreatedAt(): boolean;
  clearCreatedAt(): InstanceInformation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InstanceInformation.AsObject;
  static toObject(includeInstance: boolean, msg: InstanceInformation): InstanceInformation.AsObject;
  static serializeBinaryToWriter(message: InstanceInformation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InstanceInformation;
  static deserializeBinaryFromReader(message: InstanceInformation, reader: jspb.BinaryReader): InstanceInformation;
}

export namespace InstanceInformation {
  export type AsObject = {
    id: string,
    domainsList: Array<string>,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class ResourceCount extends jspb.Message {
  getInstanceId(): string;
  setInstanceId(value: string): ResourceCount;

  getParentType(): CountParentType;
  setParentType(value: CountParentType): ResourceCount;

  getParentId(): string;
  setParentId(value: string): ResourceCount;

  getResourceName(): string;
  setResourceName(value: string): ResourceCount;

  getTableName(): string;
  setTableName(value: string): ResourceCount;

  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): ResourceCount;
  hasUpdatedAt(): boolean;
  clearUpdatedAt(): ResourceCount;

  getAmount(): number;
  setAmount(value: number): ResourceCount;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResourceCount.AsObject;
  static toObject(includeInstance: boolean, msg: ResourceCount): ResourceCount.AsObject;
  static serializeBinaryToWriter(message: ResourceCount, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResourceCount;
  static deserializeBinaryFromReader(message: ResourceCount, reader: jspb.BinaryReader): ResourceCount;
}

export namespace ResourceCount {
  export type AsObject = {
    instanceId: string,
    parentType: CountParentType,
    parentId: string,
    resourceName: string,
    tableName: string,
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    amount: number,
  }
}

export enum CountParentType { 
  COUNT_PARENT_TYPE_UNSPECIFIED = 0,
  COUNT_PARENT_TYPE_INSTANCE = 1,
  COUNT_PARENT_TYPE_ORGANIZATION = 2,
}
