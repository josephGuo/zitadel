import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../google/api/annotations_pb'; // proto import: "google/api/annotations.proto"
import * as google_api_field_behavior_pb from '../../../google/api/field_behavior_pb'; // proto import: "google/api/field_behavior.proto"
import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb'; // proto import: "google/protobuf/duration.proto"
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb'; // proto import: "google/protobuf/struct.proto"
import * as protoc$gen$openapiv2_options_annotations_pb from '../../../protoc-gen-openapiv2/options/annotations_pb'; // proto import: "protoc-gen-openapiv2/options/annotations.proto"
import * as validate_validate_pb from '../../../validate/validate_pb'; // proto import: "validate/validate.proto"
import * as zitadel_protoc_gen_zitadel_v2_options_pb from '../../../zitadel/protoc_gen_zitadel/v2/options_pb'; // proto import: "zitadel/protoc_gen_zitadel/v2/options.proto"
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"


export class Execution extends jspb.Message {
  getCondition(): Condition | undefined;
  setCondition(value?: Condition): Execution;
  hasCondition(): boolean;
  clearCondition(): Execution;

  getCreationDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreationDate(value?: google_protobuf_timestamp_pb.Timestamp): Execution;
  hasCreationDate(): boolean;
  clearCreationDate(): Execution;

  getChangeDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setChangeDate(value?: google_protobuf_timestamp_pb.Timestamp): Execution;
  hasChangeDate(): boolean;
  clearChangeDate(): Execution;

  getTargetsList(): Array<string>;
  setTargetsList(value: Array<string>): Execution;
  clearTargetsList(): Execution;
  addTargets(value: string, index?: number): Execution;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Execution.AsObject;
  static toObject(includeInstance: boolean, msg: Execution): Execution.AsObject;
  static serializeBinaryToWriter(message: Execution, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Execution;
  static deserializeBinaryFromReader(message: Execution, reader: jspb.BinaryReader): Execution;
}

export namespace Execution {
  export type AsObject = {
    condition?: Condition.AsObject,
    creationDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    changeDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    targetsList: Array<string>,
  }
}

export class Condition extends jspb.Message {
  getRequest(): RequestExecution | undefined;
  setRequest(value?: RequestExecution): Condition;
  hasRequest(): boolean;
  clearRequest(): Condition;

  getResponse(): ResponseExecution | undefined;
  setResponse(value?: ResponseExecution): Condition;
  hasResponse(): boolean;
  clearResponse(): Condition;

  getFunction(): FunctionExecution | undefined;
  setFunction(value?: FunctionExecution): Condition;
  hasFunction(): boolean;
  clearFunction(): Condition;

  getEvent(): EventExecution | undefined;
  setEvent(value?: EventExecution): Condition;
  hasEvent(): boolean;
  clearEvent(): Condition;

  getConditionTypeCase(): Condition.ConditionTypeCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Condition.AsObject;
  static toObject(includeInstance: boolean, msg: Condition): Condition.AsObject;
  static serializeBinaryToWriter(message: Condition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Condition;
  static deserializeBinaryFromReader(message: Condition, reader: jspb.BinaryReader): Condition;
}

export namespace Condition {
  export type AsObject = {
    request?: RequestExecution.AsObject,
    response?: ResponseExecution.AsObject,
    pb_function?: FunctionExecution.AsObject,
    event?: EventExecution.AsObject,
  }

  export enum ConditionTypeCase { 
    CONDITION_TYPE_NOT_SET = 0,
    REQUEST = 1,
    RESPONSE = 2,
    FUNCTION = 3,
    EVENT = 4,
  }
}

export class RequestExecution extends jspb.Message {
  getMethod(): string;
  setMethod(value: string): RequestExecution;

  getService(): string;
  setService(value: string): RequestExecution;

  getAll(): boolean;
  setAll(value: boolean): RequestExecution;

  getConditionCase(): RequestExecution.ConditionCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestExecution.AsObject;
  static toObject(includeInstance: boolean, msg: RequestExecution): RequestExecution.AsObject;
  static serializeBinaryToWriter(message: RequestExecution, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestExecution;
  static deserializeBinaryFromReader(message: RequestExecution, reader: jspb.BinaryReader): RequestExecution;
}

export namespace RequestExecution {
  export type AsObject = {
    method: string,
    service: string,
    all: boolean,
  }

  export enum ConditionCase { 
    CONDITION_NOT_SET = 0,
    METHOD = 1,
    SERVICE = 2,
    ALL = 3,
  }
}

export class ResponseExecution extends jspb.Message {
  getMethod(): string;
  setMethod(value: string): ResponseExecution;

  getService(): string;
  setService(value: string): ResponseExecution;

  getAll(): boolean;
  setAll(value: boolean): ResponseExecution;

  getConditionCase(): ResponseExecution.ConditionCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseExecution.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseExecution): ResponseExecution.AsObject;
  static serializeBinaryToWriter(message: ResponseExecution, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseExecution;
  static deserializeBinaryFromReader(message: ResponseExecution, reader: jspb.BinaryReader): ResponseExecution;
}

export namespace ResponseExecution {
  export type AsObject = {
    method: string,
    service: string,
    all: boolean,
  }

  export enum ConditionCase { 
    CONDITION_NOT_SET = 0,
    METHOD = 1,
    SERVICE = 2,
    ALL = 3,
  }
}

export class FunctionExecution extends jspb.Message {
  getName(): string;
  setName(value: string): FunctionExecution;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FunctionExecution.AsObject;
  static toObject(includeInstance: boolean, msg: FunctionExecution): FunctionExecution.AsObject;
  static serializeBinaryToWriter(message: FunctionExecution, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FunctionExecution;
  static deserializeBinaryFromReader(message: FunctionExecution, reader: jspb.BinaryReader): FunctionExecution;
}

export namespace FunctionExecution {
  export type AsObject = {
    name: string,
  }
}

export class EventExecution extends jspb.Message {
  getEvent(): string;
  setEvent(value: string): EventExecution;

  getGroup(): string;
  setGroup(value: string): EventExecution;

  getAll(): boolean;
  setAll(value: boolean): EventExecution;

  getConditionCase(): EventExecution.ConditionCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventExecution.AsObject;
  static toObject(includeInstance: boolean, msg: EventExecution): EventExecution.AsObject;
  static serializeBinaryToWriter(message: EventExecution, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventExecution;
  static deserializeBinaryFromReader(message: EventExecution, reader: jspb.BinaryReader): EventExecution;
}

export namespace EventExecution {
  export type AsObject = {
    event: string,
    group: string,
    all: boolean,
  }

  export enum ConditionCase { 
    CONDITION_NOT_SET = 0,
    EVENT = 1,
    GROUP = 2,
    ALL = 3,
  }
}

