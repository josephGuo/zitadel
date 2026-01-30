// source: zitadel/system.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global =
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    (function () { return this; }).call(null) ||
    Function('return this')();

var zitadel_object_pb = require('../zitadel/object_pb.js');
goog.object.extend(proto, zitadel_object_pb);
var zitadel_options_pb = require('../zitadel/options_pb.js');
goog.object.extend(proto, zitadel_options_pb);
var zitadel_instance_pb = require('../zitadel/instance_pb.js');
goog.object.extend(proto, zitadel_instance_pb);
var zitadel_member_pb = require('../zitadel/member_pb.js');
goog.object.extend(proto, zitadel_member_pb);
var zitadel_quota_pb = require('../zitadel/quota_pb.js');
goog.object.extend(proto, zitadel_quota_pb);
var zitadel_auth_n_key_pb = require('../zitadel/auth_n_key_pb.js');
goog.object.extend(proto, zitadel_auth_n_key_pb);
var zitadel_feature_pb = require('../zitadel/feature_pb.js');
goog.object.extend(proto, zitadel_feature_pb);
var google_api_annotations_pb = require('../google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
goog.object.extend(proto, google_protobuf_duration_pb);
var protoc$gen$openapiv2_options_annotations_pb = require('../protoc-gen-openapiv2/options/annotations_pb.js');
goog.object.extend(proto, protoc$gen$openapiv2_options_annotations_pb);
var validate_validate_pb = require('../validate/validate_pb.js');
goog.object.extend(proto, validate_validate_pb);
goog.exportSymbol('proto.zitadel.system.v1.AddDomainRequest', null, global);
goog.exportSymbol('proto.zitadel.system.v1.AddDomainResponse', null, global);
goog.exportSymbol('proto.zitadel.system.v1.AddInstanceRequest', null, global);
goog.exportSymbol('proto.zitadel.system.v1.AddInstanceRequest.Email', null, global);
goog.exportSymbol('proto.zitadel.system.v1.AddInstanceRequest.Password', null, global);
goog.exportSymbol('proto.zitadel.system.v1.AddInstanceRequest.Profile', null, global);
goog.exportSymbol('proto.zitadel.system.v1.AddInstanceResponse', null, global);
goog.exportSymbol('proto.zitadel.system.v1.AddQuotaRequest', null, global);
goog.exportSymbol('proto.zitadel.system.v1.AddQuotaResponse', null, global);
goog.exportSymbol('proto.zitadel.system.v1.BulkSetLimitsRequest', null, global);
goog.exportSymbol('proto.zitadel.system.v1.BulkSetLimitsResponse', null, global);
goog.exportSymbol('proto.zitadel.system.v1.ChangeSubscriptionRequest', null, global);
goog.exportSymbol('proto.zitadel.system.v1.ChangeSubscriptionResponse', null, global);
goog.exportSymbol('proto.zitadel.system.v1.ClearViewRequest', null, global);
goog.exportSymbol('proto.zitadel.system.v1.ClearViewResponse', null, global);
goog.exportSymbol('proto.zitadel.system.v1.CreateInstanceRequest', null, global);
goog.exportSymbol('proto.zitadel.system.v1.CreateInstanceRequest.Email', null, global);
goog.exportSymbol('proto.zitadel.system.v1.CreateInstanceRequest.Human', null, global);
goog.exportSymbol('proto.zitadel.system.v1.CreateInstanceRequest.Machine', null, global);
goog.exportSymbol('proto.zitadel.system.v1.CreateInstanceRequest.MachineKey', null, global);
goog.exportSymbol('proto.zitadel.system.v1.CreateInstanceRequest.OwnerCase', null, global);
goog.exportSymbol('proto.zitadel.system.v1.CreateInstanceRequest.Password', null, global);
goog.exportSymbol('proto.zitadel.system.v1.CreateInstanceRequest.PersonalAccessToken', null, global);
goog.exportSymbol('proto.zitadel.system.v1.CreateInstanceRequest.Profile', null, global);
goog.exportSymbol('proto.zitadel.system.v1.CreateInstanceResponse', null, global);
goog.exportSymbol('proto.zitadel.system.v1.ExistsDomainRequest', null, global);
goog.exportSymbol('proto.zitadel.system.v1.ExistsDomainResponse', null, global);
goog.exportSymbol('proto.zitadel.system.v1.FailedEvent', null, global);
goog.exportSymbol('proto.zitadel.system.v1.GetInstanceRequest', null, global);
goog.exportSymbol('proto.zitadel.system.v1.GetInstanceResponse', null, global);
goog.exportSymbol('proto.zitadel.system.v1.GetUsageRequest', null, global);
goog.exportSymbol('proto.zitadel.system.v1.HealthzRequest', null, global);
goog.exportSymbol('proto.zitadel.system.v1.HealthzResponse', null, global);
goog.exportSymbol('proto.zitadel.system.v1.ListDomainsRequest', null, global);
goog.exportSymbol('proto.zitadel.system.v1.ListDomainsResponse', null, global);
goog.exportSymbol('proto.zitadel.system.v1.ListFailedEventsRequest', null, global);
goog.exportSymbol('proto.zitadel.system.v1.ListFailedEventsResponse', null, global);
goog.exportSymbol('proto.zitadel.system.v1.ListIAMMembersRequest', null, global);
goog.exportSymbol('proto.zitadel.system.v1.ListIAMMembersResponse', null, global);
goog.exportSymbol('proto.zitadel.system.v1.ListInstancesRequest', null, global);
goog.exportSymbol('proto.zitadel.system.v1.ListInstancesResponse', null, global);
goog.exportSymbol('proto.zitadel.system.v1.ListViewsRequest', null, global);
goog.exportSymbol('proto.zitadel.system.v1.ListViewsResponse', null, global);
goog.exportSymbol('proto.zitadel.system.v1.RemoveDomainRequest', null, global);
goog.exportSymbol('proto.zitadel.system.v1.RemoveDomainResponse', null, global);
goog.exportSymbol('proto.zitadel.system.v1.RemoveFailedEventRequest', null, global);
goog.exportSymbol('proto.zitadel.system.v1.RemoveFailedEventResponse', null, global);
goog.exportSymbol('proto.zitadel.system.v1.RemoveInstanceRequest', null, global);
goog.exportSymbol('proto.zitadel.system.v1.RemoveInstanceResponse', null, global);
goog.exportSymbol('proto.zitadel.system.v1.RemoveQuotaRequest', null, global);
goog.exportSymbol('proto.zitadel.system.v1.RemoveQuotaResponse', null, global);
goog.exportSymbol('proto.zitadel.system.v1.ResetLimitsRequest', null, global);
goog.exportSymbol('proto.zitadel.system.v1.ResetLimitsResponse', null, global);
goog.exportSymbol('proto.zitadel.system.v1.SetInstanceFeatureRequest', null, global);
goog.exportSymbol('proto.zitadel.system.v1.SetInstanceFeatureRequest.ValueCase', null, global);
goog.exportSymbol('proto.zitadel.system.v1.SetInstanceFeatureResponse', null, global);
goog.exportSymbol('proto.zitadel.system.v1.SetLimitsRequest', null, global);
goog.exportSymbol('proto.zitadel.system.v1.SetLimitsResponse', null, global);
goog.exportSymbol('proto.zitadel.system.v1.SetPrimaryDomainRequest', null, global);
goog.exportSymbol('proto.zitadel.system.v1.SetPrimaryDomainResponse', null, global);
goog.exportSymbol('proto.zitadel.system.v1.SetQuotaRequest', null, global);
goog.exportSymbol('proto.zitadel.system.v1.SetQuotaResponse', null, global);
goog.exportSymbol('proto.zitadel.system.v1.UpdateInstanceRequest', null, global);
goog.exportSymbol('proto.zitadel.system.v1.UpdateInstanceResponse', null, global);
goog.exportSymbol('proto.zitadel.system.v1.View', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.system.v1.HealthzRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.system.v1.HealthzRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.system.v1.HealthzRequest.displayName = 'proto.zitadel.system.v1.HealthzRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.system.v1.HealthzResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.system.v1.HealthzResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.system.v1.HealthzResponse.displayName = 'proto.zitadel.system.v1.HealthzResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.system.v1.ListInstancesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.system.v1.ListInstancesRequest.repeatedFields_, null);
};
goog.inherits(proto.zitadel.system.v1.ListInstancesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.system.v1.ListInstancesRequest.displayName = 'proto.zitadel.system.v1.ListInstancesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.system.v1.ListInstancesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.system.v1.ListInstancesResponse.repeatedFields_, null);
};
goog.inherits(proto.zitadel.system.v1.ListInstancesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.system.v1.ListInstancesResponse.displayName = 'proto.zitadel.system.v1.ListInstancesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.system.v1.GetInstanceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.system.v1.GetInstanceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.system.v1.GetInstanceRequest.displayName = 'proto.zitadel.system.v1.GetInstanceRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.system.v1.GetInstanceResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.system.v1.GetInstanceResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.system.v1.GetInstanceResponse.displayName = 'proto.zitadel.system.v1.GetInstanceResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.system.v1.AddInstanceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.system.v1.AddInstanceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.system.v1.AddInstanceRequest.displayName = 'proto.zitadel.system.v1.AddInstanceRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.system.v1.AddInstanceRequest.Profile = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.system.v1.AddInstanceRequest.Profile, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.system.v1.AddInstanceRequest.Profile.displayName = 'proto.zitadel.system.v1.AddInstanceRequest.Profile';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.system.v1.AddInstanceRequest.Email = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.system.v1.AddInstanceRequest.Email, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.system.v1.AddInstanceRequest.Email.displayName = 'proto.zitadel.system.v1.AddInstanceRequest.Email';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.system.v1.AddInstanceRequest.Password = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.system.v1.AddInstanceRequest.Password, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.system.v1.AddInstanceRequest.Password.displayName = 'proto.zitadel.system.v1.AddInstanceRequest.Password';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.system.v1.AddInstanceResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.system.v1.AddInstanceResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.system.v1.AddInstanceResponse.displayName = 'proto.zitadel.system.v1.AddInstanceResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.system.v1.CreateInstanceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.zitadel.system.v1.CreateInstanceRequest.oneofGroups_);
};
goog.inherits(proto.zitadel.system.v1.CreateInstanceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.system.v1.CreateInstanceRequest.displayName = 'proto.zitadel.system.v1.CreateInstanceRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.system.v1.CreateInstanceRequest.Profile = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.system.v1.CreateInstanceRequest.Profile, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.system.v1.CreateInstanceRequest.Profile.displayName = 'proto.zitadel.system.v1.CreateInstanceRequest.Profile';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.system.v1.CreateInstanceRequest.Email = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.system.v1.CreateInstanceRequest.Email, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.system.v1.CreateInstanceRequest.Email.displayName = 'proto.zitadel.system.v1.CreateInstanceRequest.Email';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.system.v1.CreateInstanceRequest.Password = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.system.v1.CreateInstanceRequest.Password, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.system.v1.CreateInstanceRequest.Password.displayName = 'proto.zitadel.system.v1.CreateInstanceRequest.Password';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.system.v1.CreateInstanceRequest.Human = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.system.v1.CreateInstanceRequest.Human, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.system.v1.CreateInstanceRequest.Human.displayName = 'proto.zitadel.system.v1.CreateInstanceRequest.Human';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.system.v1.CreateInstanceRequest.PersonalAccessToken = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.system.v1.CreateInstanceRequest.PersonalAccessToken, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.system.v1.CreateInstanceRequest.PersonalAccessToken.displayName = 'proto.zitadel.system.v1.CreateInstanceRequest.PersonalAccessToken';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.system.v1.CreateInstanceRequest.MachineKey = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.system.v1.CreateInstanceRequest.MachineKey, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.system.v1.CreateInstanceRequest.MachineKey.displayName = 'proto.zitadel.system.v1.CreateInstanceRequest.MachineKey';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.system.v1.CreateInstanceRequest.Machine = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.system.v1.CreateInstanceRequest.Machine, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.system.v1.CreateInstanceRequest.Machine.displayName = 'proto.zitadel.system.v1.CreateInstanceRequest.Machine';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.system.v1.CreateInstanceResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.system.v1.CreateInstanceResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.system.v1.CreateInstanceResponse.displayName = 'proto.zitadel.system.v1.CreateInstanceResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.system.v1.UpdateInstanceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.system.v1.UpdateInstanceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.system.v1.UpdateInstanceRequest.displayName = 'proto.zitadel.system.v1.UpdateInstanceRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.system.v1.UpdateInstanceResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.system.v1.UpdateInstanceResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.system.v1.UpdateInstanceResponse.displayName = 'proto.zitadel.system.v1.UpdateInstanceResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.system.v1.RemoveInstanceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.system.v1.RemoveInstanceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.system.v1.RemoveInstanceRequest.displayName = 'proto.zitadel.system.v1.RemoveInstanceRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.system.v1.RemoveInstanceResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.system.v1.RemoveInstanceResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.system.v1.RemoveInstanceResponse.displayName = 'proto.zitadel.system.v1.RemoveInstanceResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.system.v1.ListIAMMembersRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.system.v1.ListIAMMembersRequest.repeatedFields_, null);
};
goog.inherits(proto.zitadel.system.v1.ListIAMMembersRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.system.v1.ListIAMMembersRequest.displayName = 'proto.zitadel.system.v1.ListIAMMembersRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.system.v1.ListIAMMembersResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.system.v1.ListIAMMembersResponse.repeatedFields_, null);
};
goog.inherits(proto.zitadel.system.v1.ListIAMMembersResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.system.v1.ListIAMMembersResponse.displayName = 'proto.zitadel.system.v1.ListIAMMembersResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.system.v1.GetUsageRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.system.v1.GetUsageRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.system.v1.GetUsageRequest.displayName = 'proto.zitadel.system.v1.GetUsageRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.system.v1.AddQuotaRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.system.v1.AddQuotaRequest.repeatedFields_, null);
};
goog.inherits(proto.zitadel.system.v1.AddQuotaRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.system.v1.AddQuotaRequest.displayName = 'proto.zitadel.system.v1.AddQuotaRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.system.v1.AddQuotaResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.system.v1.AddQuotaResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.system.v1.AddQuotaResponse.displayName = 'proto.zitadel.system.v1.AddQuotaResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.system.v1.SetQuotaRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.system.v1.SetQuotaRequest.repeatedFields_, null);
};
goog.inherits(proto.zitadel.system.v1.SetQuotaRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.system.v1.SetQuotaRequest.displayName = 'proto.zitadel.system.v1.SetQuotaRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.system.v1.SetQuotaResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.system.v1.SetQuotaResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.system.v1.SetQuotaResponse.displayName = 'proto.zitadel.system.v1.SetQuotaResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.system.v1.RemoveQuotaRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.system.v1.RemoveQuotaRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.system.v1.RemoveQuotaRequest.displayName = 'proto.zitadel.system.v1.RemoveQuotaRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.system.v1.RemoveQuotaResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.system.v1.RemoveQuotaResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.system.v1.RemoveQuotaResponse.displayName = 'proto.zitadel.system.v1.RemoveQuotaResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.system.v1.SetLimitsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.system.v1.SetLimitsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.system.v1.SetLimitsRequest.displayName = 'proto.zitadel.system.v1.SetLimitsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.system.v1.SetLimitsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.system.v1.SetLimitsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.system.v1.SetLimitsResponse.displayName = 'proto.zitadel.system.v1.SetLimitsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.system.v1.BulkSetLimitsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.system.v1.BulkSetLimitsRequest.repeatedFields_, null);
};
goog.inherits(proto.zitadel.system.v1.BulkSetLimitsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.system.v1.BulkSetLimitsRequest.displayName = 'proto.zitadel.system.v1.BulkSetLimitsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.system.v1.BulkSetLimitsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.system.v1.BulkSetLimitsResponse.repeatedFields_, null);
};
goog.inherits(proto.zitadel.system.v1.BulkSetLimitsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.system.v1.BulkSetLimitsResponse.displayName = 'proto.zitadel.system.v1.BulkSetLimitsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.system.v1.ResetLimitsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.system.v1.ResetLimitsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.system.v1.ResetLimitsRequest.displayName = 'proto.zitadel.system.v1.ResetLimitsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.system.v1.ResetLimitsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.system.v1.ResetLimitsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.system.v1.ResetLimitsResponse.displayName = 'proto.zitadel.system.v1.ResetLimitsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.system.v1.ExistsDomainRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.system.v1.ExistsDomainRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.system.v1.ExistsDomainRequest.displayName = 'proto.zitadel.system.v1.ExistsDomainRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.system.v1.ExistsDomainResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.system.v1.ExistsDomainResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.system.v1.ExistsDomainResponse.displayName = 'proto.zitadel.system.v1.ExistsDomainResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.system.v1.ListDomainsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.system.v1.ListDomainsRequest.repeatedFields_, null);
};
goog.inherits(proto.zitadel.system.v1.ListDomainsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.system.v1.ListDomainsRequest.displayName = 'proto.zitadel.system.v1.ListDomainsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.system.v1.ListDomainsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.system.v1.ListDomainsResponse.repeatedFields_, null);
};
goog.inherits(proto.zitadel.system.v1.ListDomainsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.system.v1.ListDomainsResponse.displayName = 'proto.zitadel.system.v1.ListDomainsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.system.v1.AddDomainRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.system.v1.AddDomainRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.system.v1.AddDomainRequest.displayName = 'proto.zitadel.system.v1.AddDomainRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.system.v1.AddDomainResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.system.v1.AddDomainResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.system.v1.AddDomainResponse.displayName = 'proto.zitadel.system.v1.AddDomainResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.system.v1.RemoveDomainRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.system.v1.RemoveDomainRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.system.v1.RemoveDomainRequest.displayName = 'proto.zitadel.system.v1.RemoveDomainRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.system.v1.RemoveDomainResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.system.v1.RemoveDomainResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.system.v1.RemoveDomainResponse.displayName = 'proto.zitadel.system.v1.RemoveDomainResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.system.v1.SetPrimaryDomainRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.system.v1.SetPrimaryDomainRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.system.v1.SetPrimaryDomainRequest.displayName = 'proto.zitadel.system.v1.SetPrimaryDomainRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.system.v1.SetPrimaryDomainResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.system.v1.SetPrimaryDomainResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.system.v1.SetPrimaryDomainResponse.displayName = 'proto.zitadel.system.v1.SetPrimaryDomainResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.system.v1.ChangeSubscriptionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.system.v1.ChangeSubscriptionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.system.v1.ChangeSubscriptionRequest.displayName = 'proto.zitadel.system.v1.ChangeSubscriptionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.system.v1.ChangeSubscriptionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.system.v1.ChangeSubscriptionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.system.v1.ChangeSubscriptionResponse.displayName = 'proto.zitadel.system.v1.ChangeSubscriptionResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.system.v1.ListViewsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.system.v1.ListViewsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.system.v1.ListViewsRequest.displayName = 'proto.zitadel.system.v1.ListViewsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.system.v1.ListViewsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.system.v1.ListViewsResponse.repeatedFields_, null);
};
goog.inherits(proto.zitadel.system.v1.ListViewsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.system.v1.ListViewsResponse.displayName = 'proto.zitadel.system.v1.ListViewsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.system.v1.ClearViewRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.system.v1.ClearViewRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.system.v1.ClearViewRequest.displayName = 'proto.zitadel.system.v1.ClearViewRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.system.v1.ClearViewResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.system.v1.ClearViewResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.system.v1.ClearViewResponse.displayName = 'proto.zitadel.system.v1.ClearViewResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.system.v1.ListFailedEventsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.system.v1.ListFailedEventsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.system.v1.ListFailedEventsRequest.displayName = 'proto.zitadel.system.v1.ListFailedEventsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.system.v1.ListFailedEventsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.system.v1.ListFailedEventsResponse.repeatedFields_, null);
};
goog.inherits(proto.zitadel.system.v1.ListFailedEventsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.system.v1.ListFailedEventsResponse.displayName = 'proto.zitadel.system.v1.ListFailedEventsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.system.v1.RemoveFailedEventRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.system.v1.RemoveFailedEventRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.system.v1.RemoveFailedEventRequest.displayName = 'proto.zitadel.system.v1.RemoveFailedEventRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.system.v1.RemoveFailedEventResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.system.v1.RemoveFailedEventResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.system.v1.RemoveFailedEventResponse.displayName = 'proto.zitadel.system.v1.RemoveFailedEventResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.system.v1.View = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.system.v1.View, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.system.v1.View.displayName = 'proto.zitadel.system.v1.View';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.system.v1.FailedEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.system.v1.FailedEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.system.v1.FailedEvent.displayName = 'proto.zitadel.system.v1.FailedEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.system.v1.SetInstanceFeatureRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.zitadel.system.v1.SetInstanceFeatureRequest.oneofGroups_);
};
goog.inherits(proto.zitadel.system.v1.SetInstanceFeatureRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.system.v1.SetInstanceFeatureRequest.displayName = 'proto.zitadel.system.v1.SetInstanceFeatureRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.system.v1.SetInstanceFeatureResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.system.v1.SetInstanceFeatureResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.system.v1.SetInstanceFeatureResponse.displayName = 'proto.zitadel.system.v1.SetInstanceFeatureResponse';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.system.v1.HealthzRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.system.v1.HealthzRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.system.v1.HealthzRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.HealthzRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.system.v1.HealthzRequest}
 */
proto.zitadel.system.v1.HealthzRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.system.v1.HealthzRequest;
  return proto.zitadel.system.v1.HealthzRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.system.v1.HealthzRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.system.v1.HealthzRequest}
 */
proto.zitadel.system.v1.HealthzRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.system.v1.HealthzRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.system.v1.HealthzRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.system.v1.HealthzRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.HealthzRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.system.v1.HealthzResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.system.v1.HealthzResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.system.v1.HealthzResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.HealthzResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.system.v1.HealthzResponse}
 */
proto.zitadel.system.v1.HealthzResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.system.v1.HealthzResponse;
  return proto.zitadel.system.v1.HealthzResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.system.v1.HealthzResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.system.v1.HealthzResponse}
 */
proto.zitadel.system.v1.HealthzResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.system.v1.HealthzResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.system.v1.HealthzResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.system.v1.HealthzResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.HealthzResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.system.v1.ListInstancesRequest.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.system.v1.ListInstancesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.system.v1.ListInstancesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.system.v1.ListInstancesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.ListInstancesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
query: (f = msg.getQuery()) && zitadel_object_pb.ListQuery.toObject(includeInstance, f),
sortingColumn: jspb.Message.getFieldWithDefault(msg, 2, 0),
queriesList: jspb.Message.toObjectList(msg.getQueriesList(),
    zitadel_instance_pb.Query.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.system.v1.ListInstancesRequest}
 */
proto.zitadel.system.v1.ListInstancesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.system.v1.ListInstancesRequest;
  return proto.zitadel.system.v1.ListInstancesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.system.v1.ListInstancesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.system.v1.ListInstancesRequest}
 */
proto.zitadel.system.v1.ListInstancesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_pb.ListQuery;
      reader.readMessage(value,zitadel_object_pb.ListQuery.deserializeBinaryFromReader);
      msg.setQuery(value);
      break;
    case 2:
      var value = /** @type {!proto.zitadel.instance.v1.FieldName} */ (reader.readEnum());
      msg.setSortingColumn(value);
      break;
    case 3:
      var value = new zitadel_instance_pb.Query;
      reader.readMessage(value,zitadel_instance_pb.Query.deserializeBinaryFromReader);
      msg.addQueries(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.system.v1.ListInstancesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.system.v1.ListInstancesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.system.v1.ListInstancesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.ListInstancesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQuery();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_pb.ListQuery.serializeBinaryToWriter
    );
  }
  f = message.getSortingColumn();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getQueriesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      zitadel_instance_pb.Query.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.v1.ListQuery query = 1;
 * @return {?proto.zitadel.v1.ListQuery}
 */
proto.zitadel.system.v1.ListInstancesRequest.prototype.getQuery = function() {
  return /** @type{?proto.zitadel.v1.ListQuery} */ (
    jspb.Message.getWrapperField(this, zitadel_object_pb.ListQuery, 1));
};


/**
 * @param {?proto.zitadel.v1.ListQuery|undefined} value
 * @return {!proto.zitadel.system.v1.ListInstancesRequest} returns this
*/
proto.zitadel.system.v1.ListInstancesRequest.prototype.setQuery = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.system.v1.ListInstancesRequest} returns this
 */
proto.zitadel.system.v1.ListInstancesRequest.prototype.clearQuery = function() {
  return this.setQuery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.system.v1.ListInstancesRequest.prototype.hasQuery = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional zitadel.instance.v1.FieldName sorting_column = 2;
 * @return {!proto.zitadel.instance.v1.FieldName}
 */
proto.zitadel.system.v1.ListInstancesRequest.prototype.getSortingColumn = function() {
  return /** @type {!proto.zitadel.instance.v1.FieldName} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.zitadel.instance.v1.FieldName} value
 * @return {!proto.zitadel.system.v1.ListInstancesRequest} returns this
 */
proto.zitadel.system.v1.ListInstancesRequest.prototype.setSortingColumn = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * repeated zitadel.instance.v1.Query queries = 3;
 * @return {!Array<!proto.zitadel.instance.v1.Query>}
 */
proto.zitadel.system.v1.ListInstancesRequest.prototype.getQueriesList = function() {
  return /** @type{!Array<!proto.zitadel.instance.v1.Query>} */ (
    jspb.Message.getRepeatedWrapperField(this, zitadel_instance_pb.Query, 3));
};


/**
 * @param {!Array<!proto.zitadel.instance.v1.Query>} value
 * @return {!proto.zitadel.system.v1.ListInstancesRequest} returns this
*/
proto.zitadel.system.v1.ListInstancesRequest.prototype.setQueriesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.zitadel.instance.v1.Query=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zitadel.instance.v1.Query}
 */
proto.zitadel.system.v1.ListInstancesRequest.prototype.addQueries = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.zitadel.instance.v1.Query, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.system.v1.ListInstancesRequest} returns this
 */
proto.zitadel.system.v1.ListInstancesRequest.prototype.clearQueriesList = function() {
  return this.setQueriesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.system.v1.ListInstancesResponse.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.system.v1.ListInstancesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.system.v1.ListInstancesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.system.v1.ListInstancesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.ListInstancesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_pb.ListDetails.toObject(includeInstance, f),
sortingColumn: jspb.Message.getFieldWithDefault(msg, 2, 0),
resultList: jspb.Message.toObjectList(msg.getResultList(),
    zitadel_instance_pb.Instance.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.system.v1.ListInstancesResponse}
 */
proto.zitadel.system.v1.ListInstancesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.system.v1.ListInstancesResponse;
  return proto.zitadel.system.v1.ListInstancesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.system.v1.ListInstancesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.system.v1.ListInstancesResponse}
 */
proto.zitadel.system.v1.ListInstancesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_pb.ListDetails;
      reader.readMessage(value,zitadel_object_pb.ListDetails.deserializeBinaryFromReader);
      msg.setDetails(value);
      break;
    case 2:
      var value = /** @type {!proto.zitadel.instance.v1.FieldName} */ (reader.readEnum());
      msg.setSortingColumn(value);
      break;
    case 3:
      var value = new zitadel_instance_pb.Instance;
      reader.readMessage(value,zitadel_instance_pb.Instance.deserializeBinaryFromReader);
      msg.addResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.system.v1.ListInstancesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.system.v1.ListInstancesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.system.v1.ListInstancesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.ListInstancesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_pb.ListDetails.serializeBinaryToWriter
    );
  }
  f = message.getSortingColumn();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getResultList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      zitadel_instance_pb.Instance.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.v1.ListDetails details = 1;
 * @return {?proto.zitadel.v1.ListDetails}
 */
proto.zitadel.system.v1.ListInstancesResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.v1.ListDetails} */ (
    jspb.Message.getWrapperField(this, zitadel_object_pb.ListDetails, 1));
};


/**
 * @param {?proto.zitadel.v1.ListDetails|undefined} value
 * @return {!proto.zitadel.system.v1.ListInstancesResponse} returns this
*/
proto.zitadel.system.v1.ListInstancesResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.system.v1.ListInstancesResponse} returns this
 */
proto.zitadel.system.v1.ListInstancesResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.system.v1.ListInstancesResponse.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional zitadel.instance.v1.FieldName sorting_column = 2;
 * @return {!proto.zitadel.instance.v1.FieldName}
 */
proto.zitadel.system.v1.ListInstancesResponse.prototype.getSortingColumn = function() {
  return /** @type {!proto.zitadel.instance.v1.FieldName} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.zitadel.instance.v1.FieldName} value
 * @return {!proto.zitadel.system.v1.ListInstancesResponse} returns this
 */
proto.zitadel.system.v1.ListInstancesResponse.prototype.setSortingColumn = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * repeated zitadel.instance.v1.Instance result = 3;
 * @return {!Array<!proto.zitadel.instance.v1.Instance>}
 */
proto.zitadel.system.v1.ListInstancesResponse.prototype.getResultList = function() {
  return /** @type{!Array<!proto.zitadel.instance.v1.Instance>} */ (
    jspb.Message.getRepeatedWrapperField(this, zitadel_instance_pb.Instance, 3));
};


/**
 * @param {!Array<!proto.zitadel.instance.v1.Instance>} value
 * @return {!proto.zitadel.system.v1.ListInstancesResponse} returns this
*/
proto.zitadel.system.v1.ListInstancesResponse.prototype.setResultList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.zitadel.instance.v1.Instance=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zitadel.instance.v1.Instance}
 */
proto.zitadel.system.v1.ListInstancesResponse.prototype.addResult = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.zitadel.instance.v1.Instance, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.system.v1.ListInstancesResponse} returns this
 */
proto.zitadel.system.v1.ListInstancesResponse.prototype.clearResultList = function() {
  return this.setResultList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.system.v1.GetInstanceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.system.v1.GetInstanceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.system.v1.GetInstanceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.GetInstanceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
instanceId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.system.v1.GetInstanceRequest}
 */
proto.zitadel.system.v1.GetInstanceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.system.v1.GetInstanceRequest;
  return proto.zitadel.system.v1.GetInstanceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.system.v1.GetInstanceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.system.v1.GetInstanceRequest}
 */
proto.zitadel.system.v1.GetInstanceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstanceId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.system.v1.GetInstanceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.system.v1.GetInstanceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.system.v1.GetInstanceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.GetInstanceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstanceId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string instance_id = 1;
 * @return {string}
 */
proto.zitadel.system.v1.GetInstanceRequest.prototype.getInstanceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.system.v1.GetInstanceRequest} returns this
 */
proto.zitadel.system.v1.GetInstanceRequest.prototype.setInstanceId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.system.v1.GetInstanceResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.system.v1.GetInstanceResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.system.v1.GetInstanceResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.GetInstanceResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
instance: (f = msg.getInstance()) && zitadel_instance_pb.InstanceDetail.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.system.v1.GetInstanceResponse}
 */
proto.zitadel.system.v1.GetInstanceResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.system.v1.GetInstanceResponse;
  return proto.zitadel.system.v1.GetInstanceResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.system.v1.GetInstanceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.system.v1.GetInstanceResponse}
 */
proto.zitadel.system.v1.GetInstanceResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_instance_pb.InstanceDetail;
      reader.readMessage(value,zitadel_instance_pb.InstanceDetail.deserializeBinaryFromReader);
      msg.setInstance(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.system.v1.GetInstanceResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.system.v1.GetInstanceResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.system.v1.GetInstanceResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.GetInstanceResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstance();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_instance_pb.InstanceDetail.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.instance.v1.InstanceDetail instance = 1;
 * @return {?proto.zitadel.instance.v1.InstanceDetail}
 */
proto.zitadel.system.v1.GetInstanceResponse.prototype.getInstance = function() {
  return /** @type{?proto.zitadel.instance.v1.InstanceDetail} */ (
    jspb.Message.getWrapperField(this, zitadel_instance_pb.InstanceDetail, 1));
};


/**
 * @param {?proto.zitadel.instance.v1.InstanceDetail|undefined} value
 * @return {!proto.zitadel.system.v1.GetInstanceResponse} returns this
*/
proto.zitadel.system.v1.GetInstanceResponse.prototype.setInstance = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.system.v1.GetInstanceResponse} returns this
 */
proto.zitadel.system.v1.GetInstanceResponse.prototype.clearInstance = function() {
  return this.setInstance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.system.v1.GetInstanceResponse.prototype.hasInstance = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.system.v1.AddInstanceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.system.v1.AddInstanceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.system.v1.AddInstanceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.AddInstanceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
instanceName: jspb.Message.getFieldWithDefault(msg, 1, ""),
firstOrgName: jspb.Message.getFieldWithDefault(msg, 2, ""),
customDomain: jspb.Message.getFieldWithDefault(msg, 3, ""),
ownerUserName: jspb.Message.getFieldWithDefault(msg, 4, ""),
ownerEmail: (f = msg.getOwnerEmail()) && proto.zitadel.system.v1.AddInstanceRequest.Email.toObject(includeInstance, f),
ownerProfile: (f = msg.getOwnerProfile()) && proto.zitadel.system.v1.AddInstanceRequest.Profile.toObject(includeInstance, f),
ownerPassword: (f = msg.getOwnerPassword()) && proto.zitadel.system.v1.AddInstanceRequest.Password.toObject(includeInstance, f),
defaultLanguage: jspb.Message.getFieldWithDefault(msg, 8, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.system.v1.AddInstanceRequest}
 */
proto.zitadel.system.v1.AddInstanceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.system.v1.AddInstanceRequest;
  return proto.zitadel.system.v1.AddInstanceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.system.v1.AddInstanceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.system.v1.AddInstanceRequest}
 */
proto.zitadel.system.v1.AddInstanceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstanceName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFirstOrgName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomDomain(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setOwnerUserName(value);
      break;
    case 5:
      var value = new proto.zitadel.system.v1.AddInstanceRequest.Email;
      reader.readMessage(value,proto.zitadel.system.v1.AddInstanceRequest.Email.deserializeBinaryFromReader);
      msg.setOwnerEmail(value);
      break;
    case 6:
      var value = new proto.zitadel.system.v1.AddInstanceRequest.Profile;
      reader.readMessage(value,proto.zitadel.system.v1.AddInstanceRequest.Profile.deserializeBinaryFromReader);
      msg.setOwnerProfile(value);
      break;
    case 7:
      var value = new proto.zitadel.system.v1.AddInstanceRequest.Password;
      reader.readMessage(value,proto.zitadel.system.v1.AddInstanceRequest.Password.deserializeBinaryFromReader);
      msg.setOwnerPassword(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setDefaultLanguage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.system.v1.AddInstanceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.system.v1.AddInstanceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.system.v1.AddInstanceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.AddInstanceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstanceName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFirstOrgName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCustomDomain();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getOwnerUserName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getOwnerEmail();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.zitadel.system.v1.AddInstanceRequest.Email.serializeBinaryToWriter
    );
  }
  f = message.getOwnerProfile();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.zitadel.system.v1.AddInstanceRequest.Profile.serializeBinaryToWriter
    );
  }
  f = message.getOwnerPassword();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.zitadel.system.v1.AddInstanceRequest.Password.serializeBinaryToWriter
    );
  }
  f = message.getDefaultLanguage();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.system.v1.AddInstanceRequest.Profile.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.system.v1.AddInstanceRequest.Profile.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.system.v1.AddInstanceRequest.Profile} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.AddInstanceRequest.Profile.toObject = function(includeInstance, msg) {
  var f, obj = {
firstName: jspb.Message.getFieldWithDefault(msg, 1, ""),
lastName: jspb.Message.getFieldWithDefault(msg, 2, ""),
preferredLanguage: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.system.v1.AddInstanceRequest.Profile}
 */
proto.zitadel.system.v1.AddInstanceRequest.Profile.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.system.v1.AddInstanceRequest.Profile;
  return proto.zitadel.system.v1.AddInstanceRequest.Profile.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.system.v1.AddInstanceRequest.Profile} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.system.v1.AddInstanceRequest.Profile}
 */
proto.zitadel.system.v1.AddInstanceRequest.Profile.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFirstName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setLastName(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPreferredLanguage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.system.v1.AddInstanceRequest.Profile.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.system.v1.AddInstanceRequest.Profile.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.system.v1.AddInstanceRequest.Profile} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.AddInstanceRequest.Profile.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFirstName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLastName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPreferredLanguage();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string first_name = 1;
 * @return {string}
 */
proto.zitadel.system.v1.AddInstanceRequest.Profile.prototype.getFirstName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.system.v1.AddInstanceRequest.Profile} returns this
 */
proto.zitadel.system.v1.AddInstanceRequest.Profile.prototype.setFirstName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string last_name = 2;
 * @return {string}
 */
proto.zitadel.system.v1.AddInstanceRequest.Profile.prototype.getLastName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.system.v1.AddInstanceRequest.Profile} returns this
 */
proto.zitadel.system.v1.AddInstanceRequest.Profile.prototype.setLastName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string preferred_language = 5;
 * @return {string}
 */
proto.zitadel.system.v1.AddInstanceRequest.Profile.prototype.getPreferredLanguage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.system.v1.AddInstanceRequest.Profile} returns this
 */
proto.zitadel.system.v1.AddInstanceRequest.Profile.prototype.setPreferredLanguage = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.system.v1.AddInstanceRequest.Email.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.system.v1.AddInstanceRequest.Email.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.system.v1.AddInstanceRequest.Email} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.AddInstanceRequest.Email.toObject = function(includeInstance, msg) {
  var f, obj = {
email: jspb.Message.getFieldWithDefault(msg, 1, ""),
isEmailVerified: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.system.v1.AddInstanceRequest.Email}
 */
proto.zitadel.system.v1.AddInstanceRequest.Email.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.system.v1.AddInstanceRequest.Email;
  return proto.zitadel.system.v1.AddInstanceRequest.Email.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.system.v1.AddInstanceRequest.Email} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.system.v1.AddInstanceRequest.Email}
 */
proto.zitadel.system.v1.AddInstanceRequest.Email.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsEmailVerified(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.system.v1.AddInstanceRequest.Email.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.system.v1.AddInstanceRequest.Email.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.system.v1.AddInstanceRequest.Email} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.AddInstanceRequest.Email.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getIsEmailVerified();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional string email = 1;
 * @return {string}
 */
proto.zitadel.system.v1.AddInstanceRequest.Email.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.system.v1.AddInstanceRequest.Email} returns this
 */
proto.zitadel.system.v1.AddInstanceRequest.Email.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool is_email_verified = 2;
 * @return {boolean}
 */
proto.zitadel.system.v1.AddInstanceRequest.Email.prototype.getIsEmailVerified = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.zitadel.system.v1.AddInstanceRequest.Email} returns this
 */
proto.zitadel.system.v1.AddInstanceRequest.Email.prototype.setIsEmailVerified = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.system.v1.AddInstanceRequest.Password.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.system.v1.AddInstanceRequest.Password.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.system.v1.AddInstanceRequest.Password} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.AddInstanceRequest.Password.toObject = function(includeInstance, msg) {
  var f, obj = {
password: jspb.Message.getFieldWithDefault(msg, 1, ""),
passwordChangeRequired: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.system.v1.AddInstanceRequest.Password}
 */
proto.zitadel.system.v1.AddInstanceRequest.Password.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.system.v1.AddInstanceRequest.Password;
  return proto.zitadel.system.v1.AddInstanceRequest.Password.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.system.v1.AddInstanceRequest.Password} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.system.v1.AddInstanceRequest.Password}
 */
proto.zitadel.system.v1.AddInstanceRequest.Password.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPasswordChangeRequired(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.system.v1.AddInstanceRequest.Password.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.system.v1.AddInstanceRequest.Password.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.system.v1.AddInstanceRequest.Password} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.AddInstanceRequest.Password.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPasswordChangeRequired();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional string password = 1;
 * @return {string}
 */
proto.zitadel.system.v1.AddInstanceRequest.Password.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.system.v1.AddInstanceRequest.Password} returns this
 */
proto.zitadel.system.v1.AddInstanceRequest.Password.prototype.setPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool password_change_required = 2;
 * @return {boolean}
 */
proto.zitadel.system.v1.AddInstanceRequest.Password.prototype.getPasswordChangeRequired = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.zitadel.system.v1.AddInstanceRequest.Password} returns this
 */
proto.zitadel.system.v1.AddInstanceRequest.Password.prototype.setPasswordChangeRequired = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional string instance_name = 1;
 * @return {string}
 */
proto.zitadel.system.v1.AddInstanceRequest.prototype.getInstanceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.system.v1.AddInstanceRequest} returns this
 */
proto.zitadel.system.v1.AddInstanceRequest.prototype.setInstanceName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string first_org_name = 2;
 * @return {string}
 */
proto.zitadel.system.v1.AddInstanceRequest.prototype.getFirstOrgName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.system.v1.AddInstanceRequest} returns this
 */
proto.zitadel.system.v1.AddInstanceRequest.prototype.setFirstOrgName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string custom_domain = 3;
 * @return {string}
 */
proto.zitadel.system.v1.AddInstanceRequest.prototype.getCustomDomain = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.system.v1.AddInstanceRequest} returns this
 */
proto.zitadel.system.v1.AddInstanceRequest.prototype.setCustomDomain = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string owner_user_name = 4;
 * @return {string}
 */
proto.zitadel.system.v1.AddInstanceRequest.prototype.getOwnerUserName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.system.v1.AddInstanceRequest} returns this
 */
proto.zitadel.system.v1.AddInstanceRequest.prototype.setOwnerUserName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional Email owner_email = 5;
 * @return {?proto.zitadel.system.v1.AddInstanceRequest.Email}
 */
proto.zitadel.system.v1.AddInstanceRequest.prototype.getOwnerEmail = function() {
  return /** @type{?proto.zitadel.system.v1.AddInstanceRequest.Email} */ (
    jspb.Message.getWrapperField(this, proto.zitadel.system.v1.AddInstanceRequest.Email, 5));
};


/**
 * @param {?proto.zitadel.system.v1.AddInstanceRequest.Email|undefined} value
 * @return {!proto.zitadel.system.v1.AddInstanceRequest} returns this
*/
proto.zitadel.system.v1.AddInstanceRequest.prototype.setOwnerEmail = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.system.v1.AddInstanceRequest} returns this
 */
proto.zitadel.system.v1.AddInstanceRequest.prototype.clearOwnerEmail = function() {
  return this.setOwnerEmail(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.system.v1.AddInstanceRequest.prototype.hasOwnerEmail = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional Profile owner_profile = 6;
 * @return {?proto.zitadel.system.v1.AddInstanceRequest.Profile}
 */
proto.zitadel.system.v1.AddInstanceRequest.prototype.getOwnerProfile = function() {
  return /** @type{?proto.zitadel.system.v1.AddInstanceRequest.Profile} */ (
    jspb.Message.getWrapperField(this, proto.zitadel.system.v1.AddInstanceRequest.Profile, 6));
};


/**
 * @param {?proto.zitadel.system.v1.AddInstanceRequest.Profile|undefined} value
 * @return {!proto.zitadel.system.v1.AddInstanceRequest} returns this
*/
proto.zitadel.system.v1.AddInstanceRequest.prototype.setOwnerProfile = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.system.v1.AddInstanceRequest} returns this
 */
proto.zitadel.system.v1.AddInstanceRequest.prototype.clearOwnerProfile = function() {
  return this.setOwnerProfile(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.system.v1.AddInstanceRequest.prototype.hasOwnerProfile = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional Password owner_password = 7;
 * @return {?proto.zitadel.system.v1.AddInstanceRequest.Password}
 */
proto.zitadel.system.v1.AddInstanceRequest.prototype.getOwnerPassword = function() {
  return /** @type{?proto.zitadel.system.v1.AddInstanceRequest.Password} */ (
    jspb.Message.getWrapperField(this, proto.zitadel.system.v1.AddInstanceRequest.Password, 7));
};


/**
 * @param {?proto.zitadel.system.v1.AddInstanceRequest.Password|undefined} value
 * @return {!proto.zitadel.system.v1.AddInstanceRequest} returns this
*/
proto.zitadel.system.v1.AddInstanceRequest.prototype.setOwnerPassword = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.system.v1.AddInstanceRequest} returns this
 */
proto.zitadel.system.v1.AddInstanceRequest.prototype.clearOwnerPassword = function() {
  return this.setOwnerPassword(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.system.v1.AddInstanceRequest.prototype.hasOwnerPassword = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string default_language = 8;
 * @return {string}
 */
proto.zitadel.system.v1.AddInstanceRequest.prototype.getDefaultLanguage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.system.v1.AddInstanceRequest} returns this
 */
proto.zitadel.system.v1.AddInstanceRequest.prototype.setDefaultLanguage = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.system.v1.AddInstanceResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.system.v1.AddInstanceResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.system.v1.AddInstanceResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.AddInstanceResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
instanceId: jspb.Message.getFieldWithDefault(msg, 1, ""),
details: (f = msg.getDetails()) && zitadel_object_pb.ObjectDetails.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.system.v1.AddInstanceResponse}
 */
proto.zitadel.system.v1.AddInstanceResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.system.v1.AddInstanceResponse;
  return proto.zitadel.system.v1.AddInstanceResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.system.v1.AddInstanceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.system.v1.AddInstanceResponse}
 */
proto.zitadel.system.v1.AddInstanceResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstanceId(value);
      break;
    case 2:
      var value = new zitadel_object_pb.ObjectDetails;
      reader.readMessage(value,zitadel_object_pb.ObjectDetails.deserializeBinaryFromReader);
      msg.setDetails(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.system.v1.AddInstanceResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.system.v1.AddInstanceResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.system.v1.AddInstanceResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.AddInstanceResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstanceId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      zitadel_object_pb.ObjectDetails.serializeBinaryToWriter
    );
  }
};


/**
 * optional string instance_id = 1;
 * @return {string}
 */
proto.zitadel.system.v1.AddInstanceResponse.prototype.getInstanceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.system.v1.AddInstanceResponse} returns this
 */
proto.zitadel.system.v1.AddInstanceResponse.prototype.setInstanceId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional zitadel.v1.ObjectDetails details = 2;
 * @return {?proto.zitadel.v1.ObjectDetails}
 */
proto.zitadel.system.v1.AddInstanceResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.v1.ObjectDetails} */ (
    jspb.Message.getWrapperField(this, zitadel_object_pb.ObjectDetails, 2));
};


/**
 * @param {?proto.zitadel.v1.ObjectDetails|undefined} value
 * @return {!proto.zitadel.system.v1.AddInstanceResponse} returns this
*/
proto.zitadel.system.v1.AddInstanceResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.system.v1.AddInstanceResponse} returns this
 */
proto.zitadel.system.v1.AddInstanceResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.system.v1.AddInstanceResponse.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.zitadel.system.v1.CreateInstanceRequest.oneofGroups_ = [[4,5]];

/**
 * @enum {number}
 */
proto.zitadel.system.v1.CreateInstanceRequest.OwnerCase = {
  OWNER_NOT_SET: 0,
  HUMAN: 4,
  MACHINE: 5
};

/**
 * @return {proto.zitadel.system.v1.CreateInstanceRequest.OwnerCase}
 */
proto.zitadel.system.v1.CreateInstanceRequest.prototype.getOwnerCase = function() {
  return /** @type {proto.zitadel.system.v1.CreateInstanceRequest.OwnerCase} */(jspb.Message.computeOneofCase(this, proto.zitadel.system.v1.CreateInstanceRequest.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.system.v1.CreateInstanceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.system.v1.CreateInstanceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.system.v1.CreateInstanceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.CreateInstanceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
instanceName: jspb.Message.getFieldWithDefault(msg, 1, ""),
firstOrgName: jspb.Message.getFieldWithDefault(msg, 2, ""),
customDomain: jspb.Message.getFieldWithDefault(msg, 3, ""),
human: (f = msg.getHuman()) && proto.zitadel.system.v1.CreateInstanceRequest.Human.toObject(includeInstance, f),
machine: (f = msg.getMachine()) && proto.zitadel.system.v1.CreateInstanceRequest.Machine.toObject(includeInstance, f),
defaultLanguage: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.system.v1.CreateInstanceRequest}
 */
proto.zitadel.system.v1.CreateInstanceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.system.v1.CreateInstanceRequest;
  return proto.zitadel.system.v1.CreateInstanceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.system.v1.CreateInstanceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.system.v1.CreateInstanceRequest}
 */
proto.zitadel.system.v1.CreateInstanceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstanceName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFirstOrgName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomDomain(value);
      break;
    case 4:
      var value = new proto.zitadel.system.v1.CreateInstanceRequest.Human;
      reader.readMessage(value,proto.zitadel.system.v1.CreateInstanceRequest.Human.deserializeBinaryFromReader);
      msg.setHuman(value);
      break;
    case 5:
      var value = new proto.zitadel.system.v1.CreateInstanceRequest.Machine;
      reader.readMessage(value,proto.zitadel.system.v1.CreateInstanceRequest.Machine.deserializeBinaryFromReader);
      msg.setMachine(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setDefaultLanguage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.system.v1.CreateInstanceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.system.v1.CreateInstanceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.system.v1.CreateInstanceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.CreateInstanceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstanceName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFirstOrgName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCustomDomain();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getHuman();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.zitadel.system.v1.CreateInstanceRequest.Human.serializeBinaryToWriter
    );
  }
  f = message.getMachine();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.zitadel.system.v1.CreateInstanceRequest.Machine.serializeBinaryToWriter
    );
  }
  f = message.getDefaultLanguage();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.system.v1.CreateInstanceRequest.Profile.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.system.v1.CreateInstanceRequest.Profile.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.system.v1.CreateInstanceRequest.Profile} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.CreateInstanceRequest.Profile.toObject = function(includeInstance, msg) {
  var f, obj = {
firstName: jspb.Message.getFieldWithDefault(msg, 1, ""),
lastName: jspb.Message.getFieldWithDefault(msg, 2, ""),
preferredLanguage: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.system.v1.CreateInstanceRequest.Profile}
 */
proto.zitadel.system.v1.CreateInstanceRequest.Profile.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.system.v1.CreateInstanceRequest.Profile;
  return proto.zitadel.system.v1.CreateInstanceRequest.Profile.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.system.v1.CreateInstanceRequest.Profile} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.system.v1.CreateInstanceRequest.Profile}
 */
proto.zitadel.system.v1.CreateInstanceRequest.Profile.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFirstName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setLastName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPreferredLanguage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.system.v1.CreateInstanceRequest.Profile.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.system.v1.CreateInstanceRequest.Profile.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.system.v1.CreateInstanceRequest.Profile} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.CreateInstanceRequest.Profile.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFirstName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLastName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPreferredLanguage();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string first_name = 1;
 * @return {string}
 */
proto.zitadel.system.v1.CreateInstanceRequest.Profile.prototype.getFirstName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.system.v1.CreateInstanceRequest.Profile} returns this
 */
proto.zitadel.system.v1.CreateInstanceRequest.Profile.prototype.setFirstName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string last_name = 2;
 * @return {string}
 */
proto.zitadel.system.v1.CreateInstanceRequest.Profile.prototype.getLastName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.system.v1.CreateInstanceRequest.Profile} returns this
 */
proto.zitadel.system.v1.CreateInstanceRequest.Profile.prototype.setLastName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string preferred_language = 3;
 * @return {string}
 */
proto.zitadel.system.v1.CreateInstanceRequest.Profile.prototype.getPreferredLanguage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.system.v1.CreateInstanceRequest.Profile} returns this
 */
proto.zitadel.system.v1.CreateInstanceRequest.Profile.prototype.setPreferredLanguage = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.system.v1.CreateInstanceRequest.Email.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.system.v1.CreateInstanceRequest.Email.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.system.v1.CreateInstanceRequest.Email} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.CreateInstanceRequest.Email.toObject = function(includeInstance, msg) {
  var f, obj = {
email: jspb.Message.getFieldWithDefault(msg, 1, ""),
isEmailVerified: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.system.v1.CreateInstanceRequest.Email}
 */
proto.zitadel.system.v1.CreateInstanceRequest.Email.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.system.v1.CreateInstanceRequest.Email;
  return proto.zitadel.system.v1.CreateInstanceRequest.Email.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.system.v1.CreateInstanceRequest.Email} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.system.v1.CreateInstanceRequest.Email}
 */
proto.zitadel.system.v1.CreateInstanceRequest.Email.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsEmailVerified(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.system.v1.CreateInstanceRequest.Email.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.system.v1.CreateInstanceRequest.Email.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.system.v1.CreateInstanceRequest.Email} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.CreateInstanceRequest.Email.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getIsEmailVerified();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional string email = 1;
 * @return {string}
 */
proto.zitadel.system.v1.CreateInstanceRequest.Email.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.system.v1.CreateInstanceRequest.Email} returns this
 */
proto.zitadel.system.v1.CreateInstanceRequest.Email.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool is_email_verified = 2;
 * @return {boolean}
 */
proto.zitadel.system.v1.CreateInstanceRequest.Email.prototype.getIsEmailVerified = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.zitadel.system.v1.CreateInstanceRequest.Email} returns this
 */
proto.zitadel.system.v1.CreateInstanceRequest.Email.prototype.setIsEmailVerified = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.system.v1.CreateInstanceRequest.Password.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.system.v1.CreateInstanceRequest.Password.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.system.v1.CreateInstanceRequest.Password} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.CreateInstanceRequest.Password.toObject = function(includeInstance, msg) {
  var f, obj = {
password: jspb.Message.getFieldWithDefault(msg, 1, ""),
passwordChangeRequired: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.system.v1.CreateInstanceRequest.Password}
 */
proto.zitadel.system.v1.CreateInstanceRequest.Password.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.system.v1.CreateInstanceRequest.Password;
  return proto.zitadel.system.v1.CreateInstanceRequest.Password.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.system.v1.CreateInstanceRequest.Password} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.system.v1.CreateInstanceRequest.Password}
 */
proto.zitadel.system.v1.CreateInstanceRequest.Password.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPasswordChangeRequired(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.system.v1.CreateInstanceRequest.Password.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.system.v1.CreateInstanceRequest.Password.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.system.v1.CreateInstanceRequest.Password} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.CreateInstanceRequest.Password.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPasswordChangeRequired();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional string password = 1;
 * @return {string}
 */
proto.zitadel.system.v1.CreateInstanceRequest.Password.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.system.v1.CreateInstanceRequest.Password} returns this
 */
proto.zitadel.system.v1.CreateInstanceRequest.Password.prototype.setPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool password_change_required = 2;
 * @return {boolean}
 */
proto.zitadel.system.v1.CreateInstanceRequest.Password.prototype.getPasswordChangeRequired = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.zitadel.system.v1.CreateInstanceRequest.Password} returns this
 */
proto.zitadel.system.v1.CreateInstanceRequest.Password.prototype.setPasswordChangeRequired = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.system.v1.CreateInstanceRequest.Human.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.system.v1.CreateInstanceRequest.Human.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.system.v1.CreateInstanceRequest.Human} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.CreateInstanceRequest.Human.toObject = function(includeInstance, msg) {
  var f, obj = {
userName: jspb.Message.getFieldWithDefault(msg, 1, ""),
email: (f = msg.getEmail()) && proto.zitadel.system.v1.CreateInstanceRequest.Email.toObject(includeInstance, f),
profile: (f = msg.getProfile()) && proto.zitadel.system.v1.CreateInstanceRequest.Profile.toObject(includeInstance, f),
password: (f = msg.getPassword()) && proto.zitadel.system.v1.CreateInstanceRequest.Password.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.system.v1.CreateInstanceRequest.Human}
 */
proto.zitadel.system.v1.CreateInstanceRequest.Human.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.system.v1.CreateInstanceRequest.Human;
  return proto.zitadel.system.v1.CreateInstanceRequest.Human.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.system.v1.CreateInstanceRequest.Human} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.system.v1.CreateInstanceRequest.Human}
 */
proto.zitadel.system.v1.CreateInstanceRequest.Human.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserName(value);
      break;
    case 2:
      var value = new proto.zitadel.system.v1.CreateInstanceRequest.Email;
      reader.readMessage(value,proto.zitadel.system.v1.CreateInstanceRequest.Email.deserializeBinaryFromReader);
      msg.setEmail(value);
      break;
    case 3:
      var value = new proto.zitadel.system.v1.CreateInstanceRequest.Profile;
      reader.readMessage(value,proto.zitadel.system.v1.CreateInstanceRequest.Profile.deserializeBinaryFromReader);
      msg.setProfile(value);
      break;
    case 4:
      var value = new proto.zitadel.system.v1.CreateInstanceRequest.Password;
      reader.readMessage(value,proto.zitadel.system.v1.CreateInstanceRequest.Password.deserializeBinaryFromReader);
      msg.setPassword(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.system.v1.CreateInstanceRequest.Human.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.system.v1.CreateInstanceRequest.Human.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.system.v1.CreateInstanceRequest.Human} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.CreateInstanceRequest.Human.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEmail();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.zitadel.system.v1.CreateInstanceRequest.Email.serializeBinaryToWriter
    );
  }
  f = message.getProfile();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.zitadel.system.v1.CreateInstanceRequest.Profile.serializeBinaryToWriter
    );
  }
  f = message.getPassword();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.zitadel.system.v1.CreateInstanceRequest.Password.serializeBinaryToWriter
    );
  }
};


/**
 * optional string user_name = 1;
 * @return {string}
 */
proto.zitadel.system.v1.CreateInstanceRequest.Human.prototype.getUserName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.system.v1.CreateInstanceRequest.Human} returns this
 */
proto.zitadel.system.v1.CreateInstanceRequest.Human.prototype.setUserName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Email email = 2;
 * @return {?proto.zitadel.system.v1.CreateInstanceRequest.Email}
 */
proto.zitadel.system.v1.CreateInstanceRequest.Human.prototype.getEmail = function() {
  return /** @type{?proto.zitadel.system.v1.CreateInstanceRequest.Email} */ (
    jspb.Message.getWrapperField(this, proto.zitadel.system.v1.CreateInstanceRequest.Email, 2));
};


/**
 * @param {?proto.zitadel.system.v1.CreateInstanceRequest.Email|undefined} value
 * @return {!proto.zitadel.system.v1.CreateInstanceRequest.Human} returns this
*/
proto.zitadel.system.v1.CreateInstanceRequest.Human.prototype.setEmail = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.system.v1.CreateInstanceRequest.Human} returns this
 */
proto.zitadel.system.v1.CreateInstanceRequest.Human.prototype.clearEmail = function() {
  return this.setEmail(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.system.v1.CreateInstanceRequest.Human.prototype.hasEmail = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Profile profile = 3;
 * @return {?proto.zitadel.system.v1.CreateInstanceRequest.Profile}
 */
proto.zitadel.system.v1.CreateInstanceRequest.Human.prototype.getProfile = function() {
  return /** @type{?proto.zitadel.system.v1.CreateInstanceRequest.Profile} */ (
    jspb.Message.getWrapperField(this, proto.zitadel.system.v1.CreateInstanceRequest.Profile, 3));
};


/**
 * @param {?proto.zitadel.system.v1.CreateInstanceRequest.Profile|undefined} value
 * @return {!proto.zitadel.system.v1.CreateInstanceRequest.Human} returns this
*/
proto.zitadel.system.v1.CreateInstanceRequest.Human.prototype.setProfile = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.system.v1.CreateInstanceRequest.Human} returns this
 */
proto.zitadel.system.v1.CreateInstanceRequest.Human.prototype.clearProfile = function() {
  return this.setProfile(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.system.v1.CreateInstanceRequest.Human.prototype.hasProfile = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Password password = 4;
 * @return {?proto.zitadel.system.v1.CreateInstanceRequest.Password}
 */
proto.zitadel.system.v1.CreateInstanceRequest.Human.prototype.getPassword = function() {
  return /** @type{?proto.zitadel.system.v1.CreateInstanceRequest.Password} */ (
    jspb.Message.getWrapperField(this, proto.zitadel.system.v1.CreateInstanceRequest.Password, 4));
};


/**
 * @param {?proto.zitadel.system.v1.CreateInstanceRequest.Password|undefined} value
 * @return {!proto.zitadel.system.v1.CreateInstanceRequest.Human} returns this
*/
proto.zitadel.system.v1.CreateInstanceRequest.Human.prototype.setPassword = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.system.v1.CreateInstanceRequest.Human} returns this
 */
proto.zitadel.system.v1.CreateInstanceRequest.Human.prototype.clearPassword = function() {
  return this.setPassword(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.system.v1.CreateInstanceRequest.Human.prototype.hasPassword = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.system.v1.CreateInstanceRequest.PersonalAccessToken.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.system.v1.CreateInstanceRequest.PersonalAccessToken.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.system.v1.CreateInstanceRequest.PersonalAccessToken} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.CreateInstanceRequest.PersonalAccessToken.toObject = function(includeInstance, msg) {
  var f, obj = {
expirationDate: (f = msg.getExpirationDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.system.v1.CreateInstanceRequest.PersonalAccessToken}
 */
proto.zitadel.system.v1.CreateInstanceRequest.PersonalAccessToken.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.system.v1.CreateInstanceRequest.PersonalAccessToken;
  return proto.zitadel.system.v1.CreateInstanceRequest.PersonalAccessToken.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.system.v1.CreateInstanceRequest.PersonalAccessToken} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.system.v1.CreateInstanceRequest.PersonalAccessToken}
 */
proto.zitadel.system.v1.CreateInstanceRequest.PersonalAccessToken.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setExpirationDate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.system.v1.CreateInstanceRequest.PersonalAccessToken.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.system.v1.CreateInstanceRequest.PersonalAccessToken.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.system.v1.CreateInstanceRequest.PersonalAccessToken} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.CreateInstanceRequest.PersonalAccessToken.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getExpirationDate();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Timestamp expiration_date = 1;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.zitadel.system.v1.CreateInstanceRequest.PersonalAccessToken.prototype.getExpirationDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.zitadel.system.v1.CreateInstanceRequest.PersonalAccessToken} returns this
*/
proto.zitadel.system.v1.CreateInstanceRequest.PersonalAccessToken.prototype.setExpirationDate = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.system.v1.CreateInstanceRequest.PersonalAccessToken} returns this
 */
proto.zitadel.system.v1.CreateInstanceRequest.PersonalAccessToken.prototype.clearExpirationDate = function() {
  return this.setExpirationDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.system.v1.CreateInstanceRequest.PersonalAccessToken.prototype.hasExpirationDate = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.system.v1.CreateInstanceRequest.MachineKey.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.system.v1.CreateInstanceRequest.MachineKey.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.system.v1.CreateInstanceRequest.MachineKey} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.CreateInstanceRequest.MachineKey.toObject = function(includeInstance, msg) {
  var f, obj = {
type: jspb.Message.getFieldWithDefault(msg, 1, 0),
expirationDate: (f = msg.getExpirationDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.system.v1.CreateInstanceRequest.MachineKey}
 */
proto.zitadel.system.v1.CreateInstanceRequest.MachineKey.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.system.v1.CreateInstanceRequest.MachineKey;
  return proto.zitadel.system.v1.CreateInstanceRequest.MachineKey.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.system.v1.CreateInstanceRequest.MachineKey} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.system.v1.CreateInstanceRequest.MachineKey}
 */
proto.zitadel.system.v1.CreateInstanceRequest.MachineKey.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.zitadel.authn.v1.KeyType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setExpirationDate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.system.v1.CreateInstanceRequest.MachineKey.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.system.v1.CreateInstanceRequest.MachineKey.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.system.v1.CreateInstanceRequest.MachineKey} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.CreateInstanceRequest.MachineKey.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getExpirationDate();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.authn.v1.KeyType type = 1;
 * @return {!proto.zitadel.authn.v1.KeyType}
 */
proto.zitadel.system.v1.CreateInstanceRequest.MachineKey.prototype.getType = function() {
  return /** @type {!proto.zitadel.authn.v1.KeyType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.zitadel.authn.v1.KeyType} value
 * @return {!proto.zitadel.system.v1.CreateInstanceRequest.MachineKey} returns this
 */
proto.zitadel.system.v1.CreateInstanceRequest.MachineKey.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp expiration_date = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.zitadel.system.v1.CreateInstanceRequest.MachineKey.prototype.getExpirationDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.zitadel.system.v1.CreateInstanceRequest.MachineKey} returns this
*/
proto.zitadel.system.v1.CreateInstanceRequest.MachineKey.prototype.setExpirationDate = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.system.v1.CreateInstanceRequest.MachineKey} returns this
 */
proto.zitadel.system.v1.CreateInstanceRequest.MachineKey.prototype.clearExpirationDate = function() {
  return this.setExpirationDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.system.v1.CreateInstanceRequest.MachineKey.prototype.hasExpirationDate = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.system.v1.CreateInstanceRequest.Machine.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.system.v1.CreateInstanceRequest.Machine.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.system.v1.CreateInstanceRequest.Machine} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.CreateInstanceRequest.Machine.toObject = function(includeInstance, msg) {
  var f, obj = {
userName: jspb.Message.getFieldWithDefault(msg, 1, ""),
name: jspb.Message.getFieldWithDefault(msg, 2, ""),
personalAccessToken: (f = msg.getPersonalAccessToken()) && proto.zitadel.system.v1.CreateInstanceRequest.PersonalAccessToken.toObject(includeInstance, f),
machineKey: (f = msg.getMachineKey()) && proto.zitadel.system.v1.CreateInstanceRequest.MachineKey.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.system.v1.CreateInstanceRequest.Machine}
 */
proto.zitadel.system.v1.CreateInstanceRequest.Machine.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.system.v1.CreateInstanceRequest.Machine;
  return proto.zitadel.system.v1.CreateInstanceRequest.Machine.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.system.v1.CreateInstanceRequest.Machine} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.system.v1.CreateInstanceRequest.Machine}
 */
proto.zitadel.system.v1.CreateInstanceRequest.Machine.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = new proto.zitadel.system.v1.CreateInstanceRequest.PersonalAccessToken;
      reader.readMessage(value,proto.zitadel.system.v1.CreateInstanceRequest.PersonalAccessToken.deserializeBinaryFromReader);
      msg.setPersonalAccessToken(value);
      break;
    case 4:
      var value = new proto.zitadel.system.v1.CreateInstanceRequest.MachineKey;
      reader.readMessage(value,proto.zitadel.system.v1.CreateInstanceRequest.MachineKey.deserializeBinaryFromReader);
      msg.setMachineKey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.system.v1.CreateInstanceRequest.Machine.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.system.v1.CreateInstanceRequest.Machine.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.system.v1.CreateInstanceRequest.Machine} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.CreateInstanceRequest.Machine.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPersonalAccessToken();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.zitadel.system.v1.CreateInstanceRequest.PersonalAccessToken.serializeBinaryToWriter
    );
  }
  f = message.getMachineKey();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.zitadel.system.v1.CreateInstanceRequest.MachineKey.serializeBinaryToWriter
    );
  }
};


/**
 * optional string user_name = 1;
 * @return {string}
 */
proto.zitadel.system.v1.CreateInstanceRequest.Machine.prototype.getUserName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.system.v1.CreateInstanceRequest.Machine} returns this
 */
proto.zitadel.system.v1.CreateInstanceRequest.Machine.prototype.setUserName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.zitadel.system.v1.CreateInstanceRequest.Machine.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.system.v1.CreateInstanceRequest.Machine} returns this
 */
proto.zitadel.system.v1.CreateInstanceRequest.Machine.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional PersonalAccessToken personal_access_token = 3;
 * @return {?proto.zitadel.system.v1.CreateInstanceRequest.PersonalAccessToken}
 */
proto.zitadel.system.v1.CreateInstanceRequest.Machine.prototype.getPersonalAccessToken = function() {
  return /** @type{?proto.zitadel.system.v1.CreateInstanceRequest.PersonalAccessToken} */ (
    jspb.Message.getWrapperField(this, proto.zitadel.system.v1.CreateInstanceRequest.PersonalAccessToken, 3));
};


/**
 * @param {?proto.zitadel.system.v1.CreateInstanceRequest.PersonalAccessToken|undefined} value
 * @return {!proto.zitadel.system.v1.CreateInstanceRequest.Machine} returns this
*/
proto.zitadel.system.v1.CreateInstanceRequest.Machine.prototype.setPersonalAccessToken = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.system.v1.CreateInstanceRequest.Machine} returns this
 */
proto.zitadel.system.v1.CreateInstanceRequest.Machine.prototype.clearPersonalAccessToken = function() {
  return this.setPersonalAccessToken(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.system.v1.CreateInstanceRequest.Machine.prototype.hasPersonalAccessToken = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional MachineKey machine_key = 4;
 * @return {?proto.zitadel.system.v1.CreateInstanceRequest.MachineKey}
 */
proto.zitadel.system.v1.CreateInstanceRequest.Machine.prototype.getMachineKey = function() {
  return /** @type{?proto.zitadel.system.v1.CreateInstanceRequest.MachineKey} */ (
    jspb.Message.getWrapperField(this, proto.zitadel.system.v1.CreateInstanceRequest.MachineKey, 4));
};


/**
 * @param {?proto.zitadel.system.v1.CreateInstanceRequest.MachineKey|undefined} value
 * @return {!proto.zitadel.system.v1.CreateInstanceRequest.Machine} returns this
*/
proto.zitadel.system.v1.CreateInstanceRequest.Machine.prototype.setMachineKey = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.system.v1.CreateInstanceRequest.Machine} returns this
 */
proto.zitadel.system.v1.CreateInstanceRequest.Machine.prototype.clearMachineKey = function() {
  return this.setMachineKey(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.system.v1.CreateInstanceRequest.Machine.prototype.hasMachineKey = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string instance_name = 1;
 * @return {string}
 */
proto.zitadel.system.v1.CreateInstanceRequest.prototype.getInstanceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.system.v1.CreateInstanceRequest} returns this
 */
proto.zitadel.system.v1.CreateInstanceRequest.prototype.setInstanceName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string first_org_name = 2;
 * @return {string}
 */
proto.zitadel.system.v1.CreateInstanceRequest.prototype.getFirstOrgName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.system.v1.CreateInstanceRequest} returns this
 */
proto.zitadel.system.v1.CreateInstanceRequest.prototype.setFirstOrgName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string custom_domain = 3;
 * @return {string}
 */
proto.zitadel.system.v1.CreateInstanceRequest.prototype.getCustomDomain = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.system.v1.CreateInstanceRequest} returns this
 */
proto.zitadel.system.v1.CreateInstanceRequest.prototype.setCustomDomain = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional Human human = 4;
 * @return {?proto.zitadel.system.v1.CreateInstanceRequest.Human}
 */
proto.zitadel.system.v1.CreateInstanceRequest.prototype.getHuman = function() {
  return /** @type{?proto.zitadel.system.v1.CreateInstanceRequest.Human} */ (
    jspb.Message.getWrapperField(this, proto.zitadel.system.v1.CreateInstanceRequest.Human, 4));
};


/**
 * @param {?proto.zitadel.system.v1.CreateInstanceRequest.Human|undefined} value
 * @return {!proto.zitadel.system.v1.CreateInstanceRequest} returns this
*/
proto.zitadel.system.v1.CreateInstanceRequest.prototype.setHuman = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.zitadel.system.v1.CreateInstanceRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.system.v1.CreateInstanceRequest} returns this
 */
proto.zitadel.system.v1.CreateInstanceRequest.prototype.clearHuman = function() {
  return this.setHuman(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.system.v1.CreateInstanceRequest.prototype.hasHuman = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Machine machine = 5;
 * @return {?proto.zitadel.system.v1.CreateInstanceRequest.Machine}
 */
proto.zitadel.system.v1.CreateInstanceRequest.prototype.getMachine = function() {
  return /** @type{?proto.zitadel.system.v1.CreateInstanceRequest.Machine} */ (
    jspb.Message.getWrapperField(this, proto.zitadel.system.v1.CreateInstanceRequest.Machine, 5));
};


/**
 * @param {?proto.zitadel.system.v1.CreateInstanceRequest.Machine|undefined} value
 * @return {!proto.zitadel.system.v1.CreateInstanceRequest} returns this
*/
proto.zitadel.system.v1.CreateInstanceRequest.prototype.setMachine = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.zitadel.system.v1.CreateInstanceRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.system.v1.CreateInstanceRequest} returns this
 */
proto.zitadel.system.v1.CreateInstanceRequest.prototype.clearMachine = function() {
  return this.setMachine(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.system.v1.CreateInstanceRequest.prototype.hasMachine = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string default_language = 6;
 * @return {string}
 */
proto.zitadel.system.v1.CreateInstanceRequest.prototype.getDefaultLanguage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.system.v1.CreateInstanceRequest} returns this
 */
proto.zitadel.system.v1.CreateInstanceRequest.prototype.setDefaultLanguage = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.system.v1.CreateInstanceResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.system.v1.CreateInstanceResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.system.v1.CreateInstanceResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.CreateInstanceResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
instanceId: jspb.Message.getFieldWithDefault(msg, 1, ""),
details: (f = msg.getDetails()) && zitadel_object_pb.ObjectDetails.toObject(includeInstance, f),
pat: jspb.Message.getFieldWithDefault(msg, 3, ""),
machineKey: msg.getMachineKey_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.system.v1.CreateInstanceResponse}
 */
proto.zitadel.system.v1.CreateInstanceResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.system.v1.CreateInstanceResponse;
  return proto.zitadel.system.v1.CreateInstanceResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.system.v1.CreateInstanceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.system.v1.CreateInstanceResponse}
 */
proto.zitadel.system.v1.CreateInstanceResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstanceId(value);
      break;
    case 2:
      var value = new zitadel_object_pb.ObjectDetails;
      reader.readMessage(value,zitadel_object_pb.ObjectDetails.deserializeBinaryFromReader);
      msg.setDetails(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPat(value);
      break;
    case 4:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setMachineKey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.system.v1.CreateInstanceResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.system.v1.CreateInstanceResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.system.v1.CreateInstanceResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.CreateInstanceResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstanceId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      zitadel_object_pb.ObjectDetails.serializeBinaryToWriter
    );
  }
  f = message.getPat();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getMachineKey_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      4,
      f
    );
  }
};


/**
 * optional string instance_id = 1;
 * @return {string}
 */
proto.zitadel.system.v1.CreateInstanceResponse.prototype.getInstanceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.system.v1.CreateInstanceResponse} returns this
 */
proto.zitadel.system.v1.CreateInstanceResponse.prototype.setInstanceId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional zitadel.v1.ObjectDetails details = 2;
 * @return {?proto.zitadel.v1.ObjectDetails}
 */
proto.zitadel.system.v1.CreateInstanceResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.v1.ObjectDetails} */ (
    jspb.Message.getWrapperField(this, zitadel_object_pb.ObjectDetails, 2));
};


/**
 * @param {?proto.zitadel.v1.ObjectDetails|undefined} value
 * @return {!proto.zitadel.system.v1.CreateInstanceResponse} returns this
*/
proto.zitadel.system.v1.CreateInstanceResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.system.v1.CreateInstanceResponse} returns this
 */
proto.zitadel.system.v1.CreateInstanceResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.system.v1.CreateInstanceResponse.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string pat = 3;
 * @return {string}
 */
proto.zitadel.system.v1.CreateInstanceResponse.prototype.getPat = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.system.v1.CreateInstanceResponse} returns this
 */
proto.zitadel.system.v1.CreateInstanceResponse.prototype.setPat = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bytes machine_key = 4;
 * @return {!(string|Uint8Array)}
 */
proto.zitadel.system.v1.CreateInstanceResponse.prototype.getMachineKey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * optional bytes machine_key = 4;
 * This is a type-conversion wrapper around `getMachineKey()`
 * @return {string}
 */
proto.zitadel.system.v1.CreateInstanceResponse.prototype.getMachineKey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getMachineKey()));
};


/**
 * optional bytes machine_key = 4;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getMachineKey()`
 * @return {!Uint8Array}
 */
proto.zitadel.system.v1.CreateInstanceResponse.prototype.getMachineKey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getMachineKey()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.zitadel.system.v1.CreateInstanceResponse} returns this
 */
proto.zitadel.system.v1.CreateInstanceResponse.prototype.setMachineKey = function(value) {
  return jspb.Message.setProto3BytesField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.system.v1.UpdateInstanceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.system.v1.UpdateInstanceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.system.v1.UpdateInstanceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.UpdateInstanceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
instanceId: jspb.Message.getFieldWithDefault(msg, 1, ""),
instanceName: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.system.v1.UpdateInstanceRequest}
 */
proto.zitadel.system.v1.UpdateInstanceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.system.v1.UpdateInstanceRequest;
  return proto.zitadel.system.v1.UpdateInstanceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.system.v1.UpdateInstanceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.system.v1.UpdateInstanceRequest}
 */
proto.zitadel.system.v1.UpdateInstanceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstanceId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstanceName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.system.v1.UpdateInstanceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.system.v1.UpdateInstanceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.system.v1.UpdateInstanceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.UpdateInstanceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstanceId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getInstanceName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string instance_id = 1;
 * @return {string}
 */
proto.zitadel.system.v1.UpdateInstanceRequest.prototype.getInstanceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.system.v1.UpdateInstanceRequest} returns this
 */
proto.zitadel.system.v1.UpdateInstanceRequest.prototype.setInstanceId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string instance_name = 2;
 * @return {string}
 */
proto.zitadel.system.v1.UpdateInstanceRequest.prototype.getInstanceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.system.v1.UpdateInstanceRequest} returns this
 */
proto.zitadel.system.v1.UpdateInstanceRequest.prototype.setInstanceName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.system.v1.UpdateInstanceResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.system.v1.UpdateInstanceResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.system.v1.UpdateInstanceResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.UpdateInstanceResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_pb.ObjectDetails.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.system.v1.UpdateInstanceResponse}
 */
proto.zitadel.system.v1.UpdateInstanceResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.system.v1.UpdateInstanceResponse;
  return proto.zitadel.system.v1.UpdateInstanceResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.system.v1.UpdateInstanceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.system.v1.UpdateInstanceResponse}
 */
proto.zitadel.system.v1.UpdateInstanceResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_pb.ObjectDetails;
      reader.readMessage(value,zitadel_object_pb.ObjectDetails.deserializeBinaryFromReader);
      msg.setDetails(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.system.v1.UpdateInstanceResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.system.v1.UpdateInstanceResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.system.v1.UpdateInstanceResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.UpdateInstanceResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_pb.ObjectDetails.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.v1.ObjectDetails details = 1;
 * @return {?proto.zitadel.v1.ObjectDetails}
 */
proto.zitadel.system.v1.UpdateInstanceResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.v1.ObjectDetails} */ (
    jspb.Message.getWrapperField(this, zitadel_object_pb.ObjectDetails, 1));
};


/**
 * @param {?proto.zitadel.v1.ObjectDetails|undefined} value
 * @return {!proto.zitadel.system.v1.UpdateInstanceResponse} returns this
*/
proto.zitadel.system.v1.UpdateInstanceResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.system.v1.UpdateInstanceResponse} returns this
 */
proto.zitadel.system.v1.UpdateInstanceResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.system.v1.UpdateInstanceResponse.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.system.v1.RemoveInstanceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.system.v1.RemoveInstanceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.system.v1.RemoveInstanceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.RemoveInstanceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
instanceId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.system.v1.RemoveInstanceRequest}
 */
proto.zitadel.system.v1.RemoveInstanceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.system.v1.RemoveInstanceRequest;
  return proto.zitadel.system.v1.RemoveInstanceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.system.v1.RemoveInstanceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.system.v1.RemoveInstanceRequest}
 */
proto.zitadel.system.v1.RemoveInstanceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstanceId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.system.v1.RemoveInstanceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.system.v1.RemoveInstanceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.system.v1.RemoveInstanceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.RemoveInstanceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstanceId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string instance_id = 1;
 * @return {string}
 */
proto.zitadel.system.v1.RemoveInstanceRequest.prototype.getInstanceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.system.v1.RemoveInstanceRequest} returns this
 */
proto.zitadel.system.v1.RemoveInstanceRequest.prototype.setInstanceId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.system.v1.RemoveInstanceResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.system.v1.RemoveInstanceResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.system.v1.RemoveInstanceResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.RemoveInstanceResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_pb.ObjectDetails.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.system.v1.RemoveInstanceResponse}
 */
proto.zitadel.system.v1.RemoveInstanceResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.system.v1.RemoveInstanceResponse;
  return proto.zitadel.system.v1.RemoveInstanceResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.system.v1.RemoveInstanceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.system.v1.RemoveInstanceResponse}
 */
proto.zitadel.system.v1.RemoveInstanceResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_pb.ObjectDetails;
      reader.readMessage(value,zitadel_object_pb.ObjectDetails.deserializeBinaryFromReader);
      msg.setDetails(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.system.v1.RemoveInstanceResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.system.v1.RemoveInstanceResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.system.v1.RemoveInstanceResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.RemoveInstanceResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_pb.ObjectDetails.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.v1.ObjectDetails details = 1;
 * @return {?proto.zitadel.v1.ObjectDetails}
 */
proto.zitadel.system.v1.RemoveInstanceResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.v1.ObjectDetails} */ (
    jspb.Message.getWrapperField(this, zitadel_object_pb.ObjectDetails, 1));
};


/**
 * @param {?proto.zitadel.v1.ObjectDetails|undefined} value
 * @return {!proto.zitadel.system.v1.RemoveInstanceResponse} returns this
*/
proto.zitadel.system.v1.RemoveInstanceResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.system.v1.RemoveInstanceResponse} returns this
 */
proto.zitadel.system.v1.RemoveInstanceResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.system.v1.RemoveInstanceResponse.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.system.v1.ListIAMMembersRequest.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.system.v1.ListIAMMembersRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.system.v1.ListIAMMembersRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.system.v1.ListIAMMembersRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.ListIAMMembersRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
query: (f = msg.getQuery()) && zitadel_object_pb.ListQuery.toObject(includeInstance, f),
instanceId: jspb.Message.getFieldWithDefault(msg, 2, ""),
queriesList: jspb.Message.toObjectList(msg.getQueriesList(),
    zitadel_member_pb.SearchQuery.toObject, includeInstance),
sortingColumn: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.system.v1.ListIAMMembersRequest}
 */
proto.zitadel.system.v1.ListIAMMembersRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.system.v1.ListIAMMembersRequest;
  return proto.zitadel.system.v1.ListIAMMembersRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.system.v1.ListIAMMembersRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.system.v1.ListIAMMembersRequest}
 */
proto.zitadel.system.v1.ListIAMMembersRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_pb.ListQuery;
      reader.readMessage(value,zitadel_object_pb.ListQuery.deserializeBinaryFromReader);
      msg.setQuery(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstanceId(value);
      break;
    case 3:
      var value = new zitadel_member_pb.SearchQuery;
      reader.readMessage(value,zitadel_member_pb.SearchQuery.deserializeBinaryFromReader);
      msg.addQueries(value);
      break;
    case 4:
      var value = /** @type {!proto.zitadel.member.v1.MemberFieldColumnName} */ (reader.readEnum());
      msg.setSortingColumn(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.system.v1.ListIAMMembersRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.system.v1.ListIAMMembersRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.system.v1.ListIAMMembersRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.ListIAMMembersRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQuery();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_pb.ListQuery.serializeBinaryToWriter
    );
  }
  f = message.getInstanceId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getQueriesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      zitadel_member_pb.SearchQuery.serializeBinaryToWriter
    );
  }
  f = message.getSortingColumn();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
};


/**
 * optional zitadel.v1.ListQuery query = 1;
 * @return {?proto.zitadel.v1.ListQuery}
 */
proto.zitadel.system.v1.ListIAMMembersRequest.prototype.getQuery = function() {
  return /** @type{?proto.zitadel.v1.ListQuery} */ (
    jspb.Message.getWrapperField(this, zitadel_object_pb.ListQuery, 1));
};


/**
 * @param {?proto.zitadel.v1.ListQuery|undefined} value
 * @return {!proto.zitadel.system.v1.ListIAMMembersRequest} returns this
*/
proto.zitadel.system.v1.ListIAMMembersRequest.prototype.setQuery = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.system.v1.ListIAMMembersRequest} returns this
 */
proto.zitadel.system.v1.ListIAMMembersRequest.prototype.clearQuery = function() {
  return this.setQuery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.system.v1.ListIAMMembersRequest.prototype.hasQuery = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string instance_id = 2;
 * @return {string}
 */
proto.zitadel.system.v1.ListIAMMembersRequest.prototype.getInstanceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.system.v1.ListIAMMembersRequest} returns this
 */
proto.zitadel.system.v1.ListIAMMembersRequest.prototype.setInstanceId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated zitadel.member.v1.SearchQuery queries = 3;
 * @return {!Array<!proto.zitadel.member.v1.SearchQuery>}
 */
proto.zitadel.system.v1.ListIAMMembersRequest.prototype.getQueriesList = function() {
  return /** @type{!Array<!proto.zitadel.member.v1.SearchQuery>} */ (
    jspb.Message.getRepeatedWrapperField(this, zitadel_member_pb.SearchQuery, 3));
};


/**
 * @param {!Array<!proto.zitadel.member.v1.SearchQuery>} value
 * @return {!proto.zitadel.system.v1.ListIAMMembersRequest} returns this
*/
proto.zitadel.system.v1.ListIAMMembersRequest.prototype.setQueriesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.zitadel.member.v1.SearchQuery=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zitadel.member.v1.SearchQuery}
 */
proto.zitadel.system.v1.ListIAMMembersRequest.prototype.addQueries = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.zitadel.member.v1.SearchQuery, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.system.v1.ListIAMMembersRequest} returns this
 */
proto.zitadel.system.v1.ListIAMMembersRequest.prototype.clearQueriesList = function() {
  return this.setQueriesList([]);
};


/**
 * optional zitadel.member.v1.MemberFieldColumnName sorting_column = 4;
 * @return {!proto.zitadel.member.v1.MemberFieldColumnName}
 */
proto.zitadel.system.v1.ListIAMMembersRequest.prototype.getSortingColumn = function() {
  return /** @type {!proto.zitadel.member.v1.MemberFieldColumnName} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.zitadel.member.v1.MemberFieldColumnName} value
 * @return {!proto.zitadel.system.v1.ListIAMMembersRequest} returns this
 */
proto.zitadel.system.v1.ListIAMMembersRequest.prototype.setSortingColumn = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.system.v1.ListIAMMembersResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.system.v1.ListIAMMembersResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.system.v1.ListIAMMembersResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.system.v1.ListIAMMembersResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.ListIAMMembersResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_pb.ListDetails.toObject(includeInstance, f),
resultList: jspb.Message.toObjectList(msg.getResultList(),
    zitadel_member_pb.Member.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.system.v1.ListIAMMembersResponse}
 */
proto.zitadel.system.v1.ListIAMMembersResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.system.v1.ListIAMMembersResponse;
  return proto.zitadel.system.v1.ListIAMMembersResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.system.v1.ListIAMMembersResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.system.v1.ListIAMMembersResponse}
 */
proto.zitadel.system.v1.ListIAMMembersResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_pb.ListDetails;
      reader.readMessage(value,zitadel_object_pb.ListDetails.deserializeBinaryFromReader);
      msg.setDetails(value);
      break;
    case 2:
      var value = new zitadel_member_pb.Member;
      reader.readMessage(value,zitadel_member_pb.Member.deserializeBinaryFromReader);
      msg.addResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.system.v1.ListIAMMembersResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.system.v1.ListIAMMembersResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.system.v1.ListIAMMembersResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.ListIAMMembersResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_pb.ListDetails.serializeBinaryToWriter
    );
  }
  f = message.getResultList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      zitadel_member_pb.Member.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.v1.ListDetails details = 1;
 * @return {?proto.zitadel.v1.ListDetails}
 */
proto.zitadel.system.v1.ListIAMMembersResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.v1.ListDetails} */ (
    jspb.Message.getWrapperField(this, zitadel_object_pb.ListDetails, 1));
};


/**
 * @param {?proto.zitadel.v1.ListDetails|undefined} value
 * @return {!proto.zitadel.system.v1.ListIAMMembersResponse} returns this
*/
proto.zitadel.system.v1.ListIAMMembersResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.system.v1.ListIAMMembersResponse} returns this
 */
proto.zitadel.system.v1.ListIAMMembersResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.system.v1.ListIAMMembersResponse.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated zitadel.member.v1.Member result = 2;
 * @return {!Array<!proto.zitadel.member.v1.Member>}
 */
proto.zitadel.system.v1.ListIAMMembersResponse.prototype.getResultList = function() {
  return /** @type{!Array<!proto.zitadel.member.v1.Member>} */ (
    jspb.Message.getRepeatedWrapperField(this, zitadel_member_pb.Member, 2));
};


/**
 * @param {!Array<!proto.zitadel.member.v1.Member>} value
 * @return {!proto.zitadel.system.v1.ListIAMMembersResponse} returns this
*/
proto.zitadel.system.v1.ListIAMMembersResponse.prototype.setResultList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.zitadel.member.v1.Member=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zitadel.member.v1.Member}
 */
proto.zitadel.system.v1.ListIAMMembersResponse.prototype.addResult = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.zitadel.member.v1.Member, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.system.v1.ListIAMMembersResponse} returns this
 */
proto.zitadel.system.v1.ListIAMMembersResponse.prototype.clearResultList = function() {
  return this.setResultList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.system.v1.GetUsageRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.system.v1.GetUsageRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.system.v1.GetUsageRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.GetUsageRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
instanceId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.system.v1.GetUsageRequest}
 */
proto.zitadel.system.v1.GetUsageRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.system.v1.GetUsageRequest;
  return proto.zitadel.system.v1.GetUsageRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.system.v1.GetUsageRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.system.v1.GetUsageRequest}
 */
proto.zitadel.system.v1.GetUsageRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstanceId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.system.v1.GetUsageRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.system.v1.GetUsageRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.system.v1.GetUsageRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.GetUsageRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstanceId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string instance_id = 1;
 * @return {string}
 */
proto.zitadel.system.v1.GetUsageRequest.prototype.getInstanceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.system.v1.GetUsageRequest} returns this
 */
proto.zitadel.system.v1.GetUsageRequest.prototype.setInstanceId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.system.v1.AddQuotaRequest.repeatedFields_ = [7];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.system.v1.AddQuotaRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.system.v1.AddQuotaRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.system.v1.AddQuotaRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.AddQuotaRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
instanceId: jspb.Message.getFieldWithDefault(msg, 1, ""),
unit: jspb.Message.getFieldWithDefault(msg, 2, 0),
from: (f = msg.getFrom()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
resetInterval: (f = msg.getResetInterval()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
amount: jspb.Message.getFieldWithDefault(msg, 5, 0),
limit: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
notificationsList: jspb.Message.toObjectList(msg.getNotificationsList(),
    zitadel_quota_pb.Notification.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.system.v1.AddQuotaRequest}
 */
proto.zitadel.system.v1.AddQuotaRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.system.v1.AddQuotaRequest;
  return proto.zitadel.system.v1.AddQuotaRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.system.v1.AddQuotaRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.system.v1.AddQuotaRequest}
 */
proto.zitadel.system.v1.AddQuotaRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstanceId(value);
      break;
    case 2:
      var value = /** @type {!proto.zitadel.quota.v1.Unit} */ (reader.readEnum());
      msg.setUnit(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setFrom(value);
      break;
    case 4:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setResetInterval(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAmount(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setLimit(value);
      break;
    case 7:
      var value = new zitadel_quota_pb.Notification;
      reader.readMessage(value,zitadel_quota_pb.Notification.deserializeBinaryFromReader);
      msg.addNotifications(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.system.v1.AddQuotaRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.system.v1.AddQuotaRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.system.v1.AddQuotaRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.AddQuotaRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstanceId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUnit();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getFrom();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getResetInterval();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getAmount();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
  f = message.getLimit();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getNotificationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      zitadel_quota_pb.Notification.serializeBinaryToWriter
    );
  }
};


/**
 * optional string instance_id = 1;
 * @return {string}
 */
proto.zitadel.system.v1.AddQuotaRequest.prototype.getInstanceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.system.v1.AddQuotaRequest} returns this
 */
proto.zitadel.system.v1.AddQuotaRequest.prototype.setInstanceId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional zitadel.quota.v1.Unit unit = 2;
 * @return {!proto.zitadel.quota.v1.Unit}
 */
proto.zitadel.system.v1.AddQuotaRequest.prototype.getUnit = function() {
  return /** @type {!proto.zitadel.quota.v1.Unit} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.zitadel.quota.v1.Unit} value
 * @return {!proto.zitadel.system.v1.AddQuotaRequest} returns this
 */
proto.zitadel.system.v1.AddQuotaRequest.prototype.setUnit = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional google.protobuf.Timestamp from = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.zitadel.system.v1.AddQuotaRequest.prototype.getFrom = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.zitadel.system.v1.AddQuotaRequest} returns this
*/
proto.zitadel.system.v1.AddQuotaRequest.prototype.setFrom = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.system.v1.AddQuotaRequest} returns this
 */
proto.zitadel.system.v1.AddQuotaRequest.prototype.clearFrom = function() {
  return this.setFrom(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.system.v1.AddQuotaRequest.prototype.hasFrom = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Duration reset_interval = 4;
 * @return {?proto.google.protobuf.Duration}
 */
proto.zitadel.system.v1.AddQuotaRequest.prototype.getResetInterval = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 4));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.zitadel.system.v1.AddQuotaRequest} returns this
*/
proto.zitadel.system.v1.AddQuotaRequest.prototype.setResetInterval = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.system.v1.AddQuotaRequest} returns this
 */
proto.zitadel.system.v1.AddQuotaRequest.prototype.clearResetInterval = function() {
  return this.setResetInterval(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.system.v1.AddQuotaRequest.prototype.hasResetInterval = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional uint64 amount = 5;
 * @return {number}
 */
proto.zitadel.system.v1.AddQuotaRequest.prototype.getAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.zitadel.system.v1.AddQuotaRequest} returns this
 */
proto.zitadel.system.v1.AddQuotaRequest.prototype.setAmount = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional bool limit = 6;
 * @return {boolean}
 */
proto.zitadel.system.v1.AddQuotaRequest.prototype.getLimit = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.zitadel.system.v1.AddQuotaRequest} returns this
 */
proto.zitadel.system.v1.AddQuotaRequest.prototype.setLimit = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * repeated zitadel.quota.v1.Notification notifications = 7;
 * @return {!Array<!proto.zitadel.quota.v1.Notification>}
 */
proto.zitadel.system.v1.AddQuotaRequest.prototype.getNotificationsList = function() {
  return /** @type{!Array<!proto.zitadel.quota.v1.Notification>} */ (
    jspb.Message.getRepeatedWrapperField(this, zitadel_quota_pb.Notification, 7));
};


/**
 * @param {!Array<!proto.zitadel.quota.v1.Notification>} value
 * @return {!proto.zitadel.system.v1.AddQuotaRequest} returns this
*/
proto.zitadel.system.v1.AddQuotaRequest.prototype.setNotificationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.zitadel.quota.v1.Notification=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zitadel.quota.v1.Notification}
 */
proto.zitadel.system.v1.AddQuotaRequest.prototype.addNotifications = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.zitadel.quota.v1.Notification, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.system.v1.AddQuotaRequest} returns this
 */
proto.zitadel.system.v1.AddQuotaRequest.prototype.clearNotificationsList = function() {
  return this.setNotificationsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.system.v1.AddQuotaResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.system.v1.AddQuotaResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.system.v1.AddQuotaResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.AddQuotaResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_pb.ObjectDetails.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.system.v1.AddQuotaResponse}
 */
proto.zitadel.system.v1.AddQuotaResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.system.v1.AddQuotaResponse;
  return proto.zitadel.system.v1.AddQuotaResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.system.v1.AddQuotaResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.system.v1.AddQuotaResponse}
 */
proto.zitadel.system.v1.AddQuotaResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_pb.ObjectDetails;
      reader.readMessage(value,zitadel_object_pb.ObjectDetails.deserializeBinaryFromReader);
      msg.setDetails(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.system.v1.AddQuotaResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.system.v1.AddQuotaResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.system.v1.AddQuotaResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.AddQuotaResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_pb.ObjectDetails.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.v1.ObjectDetails details = 1;
 * @return {?proto.zitadel.v1.ObjectDetails}
 */
proto.zitadel.system.v1.AddQuotaResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.v1.ObjectDetails} */ (
    jspb.Message.getWrapperField(this, zitadel_object_pb.ObjectDetails, 1));
};


/**
 * @param {?proto.zitadel.v1.ObjectDetails|undefined} value
 * @return {!proto.zitadel.system.v1.AddQuotaResponse} returns this
*/
proto.zitadel.system.v1.AddQuotaResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.system.v1.AddQuotaResponse} returns this
 */
proto.zitadel.system.v1.AddQuotaResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.system.v1.AddQuotaResponse.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.system.v1.SetQuotaRequest.repeatedFields_ = [7];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.system.v1.SetQuotaRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.system.v1.SetQuotaRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.system.v1.SetQuotaRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.SetQuotaRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
instanceId: jspb.Message.getFieldWithDefault(msg, 1, ""),
unit: jspb.Message.getFieldWithDefault(msg, 2, 0),
from: (f = msg.getFrom()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
resetInterval: (f = msg.getResetInterval()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
amount: jspb.Message.getFieldWithDefault(msg, 5, 0),
limit: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
notificationsList: jspb.Message.toObjectList(msg.getNotificationsList(),
    zitadel_quota_pb.Notification.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.system.v1.SetQuotaRequest}
 */
proto.zitadel.system.v1.SetQuotaRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.system.v1.SetQuotaRequest;
  return proto.zitadel.system.v1.SetQuotaRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.system.v1.SetQuotaRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.system.v1.SetQuotaRequest}
 */
proto.zitadel.system.v1.SetQuotaRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstanceId(value);
      break;
    case 2:
      var value = /** @type {!proto.zitadel.quota.v1.Unit} */ (reader.readEnum());
      msg.setUnit(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setFrom(value);
      break;
    case 4:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setResetInterval(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAmount(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setLimit(value);
      break;
    case 7:
      var value = new zitadel_quota_pb.Notification;
      reader.readMessage(value,zitadel_quota_pb.Notification.deserializeBinaryFromReader);
      msg.addNotifications(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.system.v1.SetQuotaRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.system.v1.SetQuotaRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.system.v1.SetQuotaRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.SetQuotaRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstanceId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUnit();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getFrom();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getResetInterval();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getAmount();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
  f = message.getLimit();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getNotificationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      zitadel_quota_pb.Notification.serializeBinaryToWriter
    );
  }
};


/**
 * optional string instance_id = 1;
 * @return {string}
 */
proto.zitadel.system.v1.SetQuotaRequest.prototype.getInstanceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.system.v1.SetQuotaRequest} returns this
 */
proto.zitadel.system.v1.SetQuotaRequest.prototype.setInstanceId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional zitadel.quota.v1.Unit unit = 2;
 * @return {!proto.zitadel.quota.v1.Unit}
 */
proto.zitadel.system.v1.SetQuotaRequest.prototype.getUnit = function() {
  return /** @type {!proto.zitadel.quota.v1.Unit} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.zitadel.quota.v1.Unit} value
 * @return {!proto.zitadel.system.v1.SetQuotaRequest} returns this
 */
proto.zitadel.system.v1.SetQuotaRequest.prototype.setUnit = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional google.protobuf.Timestamp from = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.zitadel.system.v1.SetQuotaRequest.prototype.getFrom = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.zitadel.system.v1.SetQuotaRequest} returns this
*/
proto.zitadel.system.v1.SetQuotaRequest.prototype.setFrom = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.system.v1.SetQuotaRequest} returns this
 */
proto.zitadel.system.v1.SetQuotaRequest.prototype.clearFrom = function() {
  return this.setFrom(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.system.v1.SetQuotaRequest.prototype.hasFrom = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Duration reset_interval = 4;
 * @return {?proto.google.protobuf.Duration}
 */
proto.zitadel.system.v1.SetQuotaRequest.prototype.getResetInterval = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 4));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.zitadel.system.v1.SetQuotaRequest} returns this
*/
proto.zitadel.system.v1.SetQuotaRequest.prototype.setResetInterval = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.system.v1.SetQuotaRequest} returns this
 */
proto.zitadel.system.v1.SetQuotaRequest.prototype.clearResetInterval = function() {
  return this.setResetInterval(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.system.v1.SetQuotaRequest.prototype.hasResetInterval = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional uint64 amount = 5;
 * @return {number}
 */
proto.zitadel.system.v1.SetQuotaRequest.prototype.getAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.zitadel.system.v1.SetQuotaRequest} returns this
 */
proto.zitadel.system.v1.SetQuotaRequest.prototype.setAmount = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional bool limit = 6;
 * @return {boolean}
 */
proto.zitadel.system.v1.SetQuotaRequest.prototype.getLimit = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.zitadel.system.v1.SetQuotaRequest} returns this
 */
proto.zitadel.system.v1.SetQuotaRequest.prototype.setLimit = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * repeated zitadel.quota.v1.Notification notifications = 7;
 * @return {!Array<!proto.zitadel.quota.v1.Notification>}
 */
proto.zitadel.system.v1.SetQuotaRequest.prototype.getNotificationsList = function() {
  return /** @type{!Array<!proto.zitadel.quota.v1.Notification>} */ (
    jspb.Message.getRepeatedWrapperField(this, zitadel_quota_pb.Notification, 7));
};


/**
 * @param {!Array<!proto.zitadel.quota.v1.Notification>} value
 * @return {!proto.zitadel.system.v1.SetQuotaRequest} returns this
*/
proto.zitadel.system.v1.SetQuotaRequest.prototype.setNotificationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.zitadel.quota.v1.Notification=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zitadel.quota.v1.Notification}
 */
proto.zitadel.system.v1.SetQuotaRequest.prototype.addNotifications = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.zitadel.quota.v1.Notification, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.system.v1.SetQuotaRequest} returns this
 */
proto.zitadel.system.v1.SetQuotaRequest.prototype.clearNotificationsList = function() {
  return this.setNotificationsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.system.v1.SetQuotaResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.system.v1.SetQuotaResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.system.v1.SetQuotaResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.SetQuotaResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_pb.ObjectDetails.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.system.v1.SetQuotaResponse}
 */
proto.zitadel.system.v1.SetQuotaResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.system.v1.SetQuotaResponse;
  return proto.zitadel.system.v1.SetQuotaResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.system.v1.SetQuotaResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.system.v1.SetQuotaResponse}
 */
proto.zitadel.system.v1.SetQuotaResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_pb.ObjectDetails;
      reader.readMessage(value,zitadel_object_pb.ObjectDetails.deserializeBinaryFromReader);
      msg.setDetails(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.system.v1.SetQuotaResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.system.v1.SetQuotaResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.system.v1.SetQuotaResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.SetQuotaResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_pb.ObjectDetails.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.v1.ObjectDetails details = 1;
 * @return {?proto.zitadel.v1.ObjectDetails}
 */
proto.zitadel.system.v1.SetQuotaResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.v1.ObjectDetails} */ (
    jspb.Message.getWrapperField(this, zitadel_object_pb.ObjectDetails, 1));
};


/**
 * @param {?proto.zitadel.v1.ObjectDetails|undefined} value
 * @return {!proto.zitadel.system.v1.SetQuotaResponse} returns this
*/
proto.zitadel.system.v1.SetQuotaResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.system.v1.SetQuotaResponse} returns this
 */
proto.zitadel.system.v1.SetQuotaResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.system.v1.SetQuotaResponse.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.system.v1.RemoveQuotaRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.system.v1.RemoveQuotaRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.system.v1.RemoveQuotaRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.RemoveQuotaRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
instanceId: jspb.Message.getFieldWithDefault(msg, 1, ""),
unit: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.system.v1.RemoveQuotaRequest}
 */
proto.zitadel.system.v1.RemoveQuotaRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.system.v1.RemoveQuotaRequest;
  return proto.zitadel.system.v1.RemoveQuotaRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.system.v1.RemoveQuotaRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.system.v1.RemoveQuotaRequest}
 */
proto.zitadel.system.v1.RemoveQuotaRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstanceId(value);
      break;
    case 2:
      var value = /** @type {!proto.zitadel.quota.v1.Unit} */ (reader.readEnum());
      msg.setUnit(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.system.v1.RemoveQuotaRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.system.v1.RemoveQuotaRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.system.v1.RemoveQuotaRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.RemoveQuotaRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstanceId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUnit();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional string instance_id = 1;
 * @return {string}
 */
proto.zitadel.system.v1.RemoveQuotaRequest.prototype.getInstanceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.system.v1.RemoveQuotaRequest} returns this
 */
proto.zitadel.system.v1.RemoveQuotaRequest.prototype.setInstanceId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional zitadel.quota.v1.Unit unit = 2;
 * @return {!proto.zitadel.quota.v1.Unit}
 */
proto.zitadel.system.v1.RemoveQuotaRequest.prototype.getUnit = function() {
  return /** @type {!proto.zitadel.quota.v1.Unit} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.zitadel.quota.v1.Unit} value
 * @return {!proto.zitadel.system.v1.RemoveQuotaRequest} returns this
 */
proto.zitadel.system.v1.RemoveQuotaRequest.prototype.setUnit = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.system.v1.RemoveQuotaResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.system.v1.RemoveQuotaResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.system.v1.RemoveQuotaResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.RemoveQuotaResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_pb.ObjectDetails.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.system.v1.RemoveQuotaResponse}
 */
proto.zitadel.system.v1.RemoveQuotaResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.system.v1.RemoveQuotaResponse;
  return proto.zitadel.system.v1.RemoveQuotaResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.system.v1.RemoveQuotaResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.system.v1.RemoveQuotaResponse}
 */
proto.zitadel.system.v1.RemoveQuotaResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_pb.ObjectDetails;
      reader.readMessage(value,zitadel_object_pb.ObjectDetails.deserializeBinaryFromReader);
      msg.setDetails(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.system.v1.RemoveQuotaResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.system.v1.RemoveQuotaResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.system.v1.RemoveQuotaResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.RemoveQuotaResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_pb.ObjectDetails.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.v1.ObjectDetails details = 1;
 * @return {?proto.zitadel.v1.ObjectDetails}
 */
proto.zitadel.system.v1.RemoveQuotaResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.v1.ObjectDetails} */ (
    jspb.Message.getWrapperField(this, zitadel_object_pb.ObjectDetails, 1));
};


/**
 * @param {?proto.zitadel.v1.ObjectDetails|undefined} value
 * @return {!proto.zitadel.system.v1.RemoveQuotaResponse} returns this
*/
proto.zitadel.system.v1.RemoveQuotaResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.system.v1.RemoveQuotaResponse} returns this
 */
proto.zitadel.system.v1.RemoveQuotaResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.system.v1.RemoveQuotaResponse.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.system.v1.SetLimitsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.system.v1.SetLimitsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.system.v1.SetLimitsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.SetLimitsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
instanceId: jspb.Message.getFieldWithDefault(msg, 1, ""),
auditLogRetention: (f = msg.getAuditLogRetention()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
block: (f = jspb.Message.getBooleanField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.system.v1.SetLimitsRequest}
 */
proto.zitadel.system.v1.SetLimitsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.system.v1.SetLimitsRequest;
  return proto.zitadel.system.v1.SetLimitsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.system.v1.SetLimitsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.system.v1.SetLimitsRequest}
 */
proto.zitadel.system.v1.SetLimitsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstanceId(value);
      break;
    case 2:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setAuditLogRetention(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBlock(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.system.v1.SetLimitsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.system.v1.SetLimitsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.system.v1.SetLimitsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.SetLimitsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstanceId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAuditLogRetention();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional string instance_id = 1;
 * @return {string}
 */
proto.zitadel.system.v1.SetLimitsRequest.prototype.getInstanceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.system.v1.SetLimitsRequest} returns this
 */
proto.zitadel.system.v1.SetLimitsRequest.prototype.setInstanceId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Duration audit_log_retention = 2;
 * @return {?proto.google.protobuf.Duration}
 */
proto.zitadel.system.v1.SetLimitsRequest.prototype.getAuditLogRetention = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 2));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.zitadel.system.v1.SetLimitsRequest} returns this
*/
proto.zitadel.system.v1.SetLimitsRequest.prototype.setAuditLogRetention = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.system.v1.SetLimitsRequest} returns this
 */
proto.zitadel.system.v1.SetLimitsRequest.prototype.clearAuditLogRetention = function() {
  return this.setAuditLogRetention(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.system.v1.SetLimitsRequest.prototype.hasAuditLogRetention = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool block = 3;
 * @return {boolean}
 */
proto.zitadel.system.v1.SetLimitsRequest.prototype.getBlock = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.zitadel.system.v1.SetLimitsRequest} returns this
 */
proto.zitadel.system.v1.SetLimitsRequest.prototype.setBlock = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.system.v1.SetLimitsRequest} returns this
 */
proto.zitadel.system.v1.SetLimitsRequest.prototype.clearBlock = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.system.v1.SetLimitsRequest.prototype.hasBlock = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.system.v1.SetLimitsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.system.v1.SetLimitsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.system.v1.SetLimitsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.SetLimitsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_pb.ObjectDetails.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.system.v1.SetLimitsResponse}
 */
proto.zitadel.system.v1.SetLimitsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.system.v1.SetLimitsResponse;
  return proto.zitadel.system.v1.SetLimitsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.system.v1.SetLimitsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.system.v1.SetLimitsResponse}
 */
proto.zitadel.system.v1.SetLimitsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_pb.ObjectDetails;
      reader.readMessage(value,zitadel_object_pb.ObjectDetails.deserializeBinaryFromReader);
      msg.setDetails(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.system.v1.SetLimitsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.system.v1.SetLimitsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.system.v1.SetLimitsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.SetLimitsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_pb.ObjectDetails.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.v1.ObjectDetails details = 1;
 * @return {?proto.zitadel.v1.ObjectDetails}
 */
proto.zitadel.system.v1.SetLimitsResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.v1.ObjectDetails} */ (
    jspb.Message.getWrapperField(this, zitadel_object_pb.ObjectDetails, 1));
};


/**
 * @param {?proto.zitadel.v1.ObjectDetails|undefined} value
 * @return {!proto.zitadel.system.v1.SetLimitsResponse} returns this
*/
proto.zitadel.system.v1.SetLimitsResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.system.v1.SetLimitsResponse} returns this
 */
proto.zitadel.system.v1.SetLimitsResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.system.v1.SetLimitsResponse.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.system.v1.BulkSetLimitsRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.system.v1.BulkSetLimitsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.system.v1.BulkSetLimitsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.system.v1.BulkSetLimitsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.BulkSetLimitsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
limitsList: jspb.Message.toObjectList(msg.getLimitsList(),
    proto.zitadel.system.v1.SetLimitsRequest.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.system.v1.BulkSetLimitsRequest}
 */
proto.zitadel.system.v1.BulkSetLimitsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.system.v1.BulkSetLimitsRequest;
  return proto.zitadel.system.v1.BulkSetLimitsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.system.v1.BulkSetLimitsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.system.v1.BulkSetLimitsRequest}
 */
proto.zitadel.system.v1.BulkSetLimitsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.zitadel.system.v1.SetLimitsRequest;
      reader.readMessage(value,proto.zitadel.system.v1.SetLimitsRequest.deserializeBinaryFromReader);
      msg.addLimits(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.system.v1.BulkSetLimitsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.system.v1.BulkSetLimitsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.system.v1.BulkSetLimitsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.BulkSetLimitsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLimitsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.zitadel.system.v1.SetLimitsRequest.serializeBinaryToWriter
    );
  }
};


/**
 * repeated SetLimitsRequest limits = 1;
 * @return {!Array<!proto.zitadel.system.v1.SetLimitsRequest>}
 */
proto.zitadel.system.v1.BulkSetLimitsRequest.prototype.getLimitsList = function() {
  return /** @type{!Array<!proto.zitadel.system.v1.SetLimitsRequest>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.zitadel.system.v1.SetLimitsRequest, 1));
};


/**
 * @param {!Array<!proto.zitadel.system.v1.SetLimitsRequest>} value
 * @return {!proto.zitadel.system.v1.BulkSetLimitsRequest} returns this
*/
proto.zitadel.system.v1.BulkSetLimitsRequest.prototype.setLimitsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.zitadel.system.v1.SetLimitsRequest=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zitadel.system.v1.SetLimitsRequest}
 */
proto.zitadel.system.v1.BulkSetLimitsRequest.prototype.addLimits = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.zitadel.system.v1.SetLimitsRequest, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.system.v1.BulkSetLimitsRequest} returns this
 */
proto.zitadel.system.v1.BulkSetLimitsRequest.prototype.clearLimitsList = function() {
  return this.setLimitsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.system.v1.BulkSetLimitsResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.system.v1.BulkSetLimitsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.system.v1.BulkSetLimitsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.system.v1.BulkSetLimitsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.BulkSetLimitsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_pb.ObjectDetails.toObject(includeInstance, f),
targetDetailsList: jspb.Message.toObjectList(msg.getTargetDetailsList(),
    zitadel_object_pb.ObjectDetails.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.system.v1.BulkSetLimitsResponse}
 */
proto.zitadel.system.v1.BulkSetLimitsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.system.v1.BulkSetLimitsResponse;
  return proto.zitadel.system.v1.BulkSetLimitsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.system.v1.BulkSetLimitsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.system.v1.BulkSetLimitsResponse}
 */
proto.zitadel.system.v1.BulkSetLimitsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_pb.ObjectDetails;
      reader.readMessage(value,zitadel_object_pb.ObjectDetails.deserializeBinaryFromReader);
      msg.setDetails(value);
      break;
    case 2:
      var value = new zitadel_object_pb.ObjectDetails;
      reader.readMessage(value,zitadel_object_pb.ObjectDetails.deserializeBinaryFromReader);
      msg.addTargetDetails(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.system.v1.BulkSetLimitsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.system.v1.BulkSetLimitsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.system.v1.BulkSetLimitsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.BulkSetLimitsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_pb.ObjectDetails.serializeBinaryToWriter
    );
  }
  f = message.getTargetDetailsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      zitadel_object_pb.ObjectDetails.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.v1.ObjectDetails details = 1;
 * @return {?proto.zitadel.v1.ObjectDetails}
 */
proto.zitadel.system.v1.BulkSetLimitsResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.v1.ObjectDetails} */ (
    jspb.Message.getWrapperField(this, zitadel_object_pb.ObjectDetails, 1));
};


/**
 * @param {?proto.zitadel.v1.ObjectDetails|undefined} value
 * @return {!proto.zitadel.system.v1.BulkSetLimitsResponse} returns this
*/
proto.zitadel.system.v1.BulkSetLimitsResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.system.v1.BulkSetLimitsResponse} returns this
 */
proto.zitadel.system.v1.BulkSetLimitsResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.system.v1.BulkSetLimitsResponse.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated zitadel.v1.ObjectDetails target_details = 2;
 * @return {!Array<!proto.zitadel.v1.ObjectDetails>}
 */
proto.zitadel.system.v1.BulkSetLimitsResponse.prototype.getTargetDetailsList = function() {
  return /** @type{!Array<!proto.zitadel.v1.ObjectDetails>} */ (
    jspb.Message.getRepeatedWrapperField(this, zitadel_object_pb.ObjectDetails, 2));
};


/**
 * @param {!Array<!proto.zitadel.v1.ObjectDetails>} value
 * @return {!proto.zitadel.system.v1.BulkSetLimitsResponse} returns this
*/
proto.zitadel.system.v1.BulkSetLimitsResponse.prototype.setTargetDetailsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.zitadel.v1.ObjectDetails=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zitadel.v1.ObjectDetails}
 */
proto.zitadel.system.v1.BulkSetLimitsResponse.prototype.addTargetDetails = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.zitadel.v1.ObjectDetails, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.system.v1.BulkSetLimitsResponse} returns this
 */
proto.zitadel.system.v1.BulkSetLimitsResponse.prototype.clearTargetDetailsList = function() {
  return this.setTargetDetailsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.system.v1.ResetLimitsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.system.v1.ResetLimitsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.system.v1.ResetLimitsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.ResetLimitsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
instanceId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.system.v1.ResetLimitsRequest}
 */
proto.zitadel.system.v1.ResetLimitsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.system.v1.ResetLimitsRequest;
  return proto.zitadel.system.v1.ResetLimitsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.system.v1.ResetLimitsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.system.v1.ResetLimitsRequest}
 */
proto.zitadel.system.v1.ResetLimitsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstanceId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.system.v1.ResetLimitsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.system.v1.ResetLimitsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.system.v1.ResetLimitsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.ResetLimitsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstanceId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string instance_id = 1;
 * @return {string}
 */
proto.zitadel.system.v1.ResetLimitsRequest.prototype.getInstanceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.system.v1.ResetLimitsRequest} returns this
 */
proto.zitadel.system.v1.ResetLimitsRequest.prototype.setInstanceId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.system.v1.ResetLimitsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.system.v1.ResetLimitsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.system.v1.ResetLimitsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.ResetLimitsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_pb.ObjectDetails.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.system.v1.ResetLimitsResponse}
 */
proto.zitadel.system.v1.ResetLimitsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.system.v1.ResetLimitsResponse;
  return proto.zitadel.system.v1.ResetLimitsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.system.v1.ResetLimitsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.system.v1.ResetLimitsResponse}
 */
proto.zitadel.system.v1.ResetLimitsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_pb.ObjectDetails;
      reader.readMessage(value,zitadel_object_pb.ObjectDetails.deserializeBinaryFromReader);
      msg.setDetails(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.system.v1.ResetLimitsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.system.v1.ResetLimitsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.system.v1.ResetLimitsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.ResetLimitsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_pb.ObjectDetails.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.v1.ObjectDetails details = 1;
 * @return {?proto.zitadel.v1.ObjectDetails}
 */
proto.zitadel.system.v1.ResetLimitsResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.v1.ObjectDetails} */ (
    jspb.Message.getWrapperField(this, zitadel_object_pb.ObjectDetails, 1));
};


/**
 * @param {?proto.zitadel.v1.ObjectDetails|undefined} value
 * @return {!proto.zitadel.system.v1.ResetLimitsResponse} returns this
*/
proto.zitadel.system.v1.ResetLimitsResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.system.v1.ResetLimitsResponse} returns this
 */
proto.zitadel.system.v1.ResetLimitsResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.system.v1.ResetLimitsResponse.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.system.v1.ExistsDomainRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.system.v1.ExistsDomainRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.system.v1.ExistsDomainRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.ExistsDomainRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
domain: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.system.v1.ExistsDomainRequest}
 */
proto.zitadel.system.v1.ExistsDomainRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.system.v1.ExistsDomainRequest;
  return proto.zitadel.system.v1.ExistsDomainRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.system.v1.ExistsDomainRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.system.v1.ExistsDomainRequest}
 */
proto.zitadel.system.v1.ExistsDomainRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDomain(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.system.v1.ExistsDomainRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.system.v1.ExistsDomainRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.system.v1.ExistsDomainRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.ExistsDomainRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDomain();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string domain = 1;
 * @return {string}
 */
proto.zitadel.system.v1.ExistsDomainRequest.prototype.getDomain = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.system.v1.ExistsDomainRequest} returns this
 */
proto.zitadel.system.v1.ExistsDomainRequest.prototype.setDomain = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.system.v1.ExistsDomainResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.system.v1.ExistsDomainResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.system.v1.ExistsDomainResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.ExistsDomainResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
exists: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.system.v1.ExistsDomainResponse}
 */
proto.zitadel.system.v1.ExistsDomainResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.system.v1.ExistsDomainResponse;
  return proto.zitadel.system.v1.ExistsDomainResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.system.v1.ExistsDomainResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.system.v1.ExistsDomainResponse}
 */
proto.zitadel.system.v1.ExistsDomainResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setExists(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.system.v1.ExistsDomainResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.system.v1.ExistsDomainResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.system.v1.ExistsDomainResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.ExistsDomainResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getExists();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool exists = 1;
 * @return {boolean}
 */
proto.zitadel.system.v1.ExistsDomainResponse.prototype.getExists = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.zitadel.system.v1.ExistsDomainResponse} returns this
 */
proto.zitadel.system.v1.ExistsDomainResponse.prototype.setExists = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.system.v1.ListDomainsRequest.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.system.v1.ListDomainsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.system.v1.ListDomainsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.system.v1.ListDomainsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.ListDomainsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
instanceId: jspb.Message.getFieldWithDefault(msg, 1, ""),
query: (f = msg.getQuery()) && zitadel_object_pb.ListQuery.toObject(includeInstance, f),
sortingColumn: jspb.Message.getFieldWithDefault(msg, 3, 0),
queriesList: jspb.Message.toObjectList(msg.getQueriesList(),
    zitadel_instance_pb.DomainSearchQuery.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.system.v1.ListDomainsRequest}
 */
proto.zitadel.system.v1.ListDomainsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.system.v1.ListDomainsRequest;
  return proto.zitadel.system.v1.ListDomainsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.system.v1.ListDomainsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.system.v1.ListDomainsRequest}
 */
proto.zitadel.system.v1.ListDomainsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstanceId(value);
      break;
    case 2:
      var value = new zitadel_object_pb.ListQuery;
      reader.readMessage(value,zitadel_object_pb.ListQuery.deserializeBinaryFromReader);
      msg.setQuery(value);
      break;
    case 3:
      var value = /** @type {!proto.zitadel.instance.v1.DomainFieldName} */ (reader.readEnum());
      msg.setSortingColumn(value);
      break;
    case 4:
      var value = new zitadel_instance_pb.DomainSearchQuery;
      reader.readMessage(value,zitadel_instance_pb.DomainSearchQuery.deserializeBinaryFromReader);
      msg.addQueries(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.system.v1.ListDomainsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.system.v1.ListDomainsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.system.v1.ListDomainsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.ListDomainsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstanceId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getQuery();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      zitadel_object_pb.ListQuery.serializeBinaryToWriter
    );
  }
  f = message.getSortingColumn();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getQueriesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      zitadel_instance_pb.DomainSearchQuery.serializeBinaryToWriter
    );
  }
};


/**
 * optional string instance_id = 1;
 * @return {string}
 */
proto.zitadel.system.v1.ListDomainsRequest.prototype.getInstanceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.system.v1.ListDomainsRequest} returns this
 */
proto.zitadel.system.v1.ListDomainsRequest.prototype.setInstanceId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional zitadel.v1.ListQuery query = 2;
 * @return {?proto.zitadel.v1.ListQuery}
 */
proto.zitadel.system.v1.ListDomainsRequest.prototype.getQuery = function() {
  return /** @type{?proto.zitadel.v1.ListQuery} */ (
    jspb.Message.getWrapperField(this, zitadel_object_pb.ListQuery, 2));
};


/**
 * @param {?proto.zitadel.v1.ListQuery|undefined} value
 * @return {!proto.zitadel.system.v1.ListDomainsRequest} returns this
*/
proto.zitadel.system.v1.ListDomainsRequest.prototype.setQuery = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.system.v1.ListDomainsRequest} returns this
 */
proto.zitadel.system.v1.ListDomainsRequest.prototype.clearQuery = function() {
  return this.setQuery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.system.v1.ListDomainsRequest.prototype.hasQuery = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional zitadel.instance.v1.DomainFieldName sorting_column = 3;
 * @return {!proto.zitadel.instance.v1.DomainFieldName}
 */
proto.zitadel.system.v1.ListDomainsRequest.prototype.getSortingColumn = function() {
  return /** @type {!proto.zitadel.instance.v1.DomainFieldName} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.zitadel.instance.v1.DomainFieldName} value
 * @return {!proto.zitadel.system.v1.ListDomainsRequest} returns this
 */
proto.zitadel.system.v1.ListDomainsRequest.prototype.setSortingColumn = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * repeated zitadel.instance.v1.DomainSearchQuery queries = 4;
 * @return {!Array<!proto.zitadel.instance.v1.DomainSearchQuery>}
 */
proto.zitadel.system.v1.ListDomainsRequest.prototype.getQueriesList = function() {
  return /** @type{!Array<!proto.zitadel.instance.v1.DomainSearchQuery>} */ (
    jspb.Message.getRepeatedWrapperField(this, zitadel_instance_pb.DomainSearchQuery, 4));
};


/**
 * @param {!Array<!proto.zitadel.instance.v1.DomainSearchQuery>} value
 * @return {!proto.zitadel.system.v1.ListDomainsRequest} returns this
*/
proto.zitadel.system.v1.ListDomainsRequest.prototype.setQueriesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.zitadel.instance.v1.DomainSearchQuery=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zitadel.instance.v1.DomainSearchQuery}
 */
proto.zitadel.system.v1.ListDomainsRequest.prototype.addQueries = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.zitadel.instance.v1.DomainSearchQuery, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.system.v1.ListDomainsRequest} returns this
 */
proto.zitadel.system.v1.ListDomainsRequest.prototype.clearQueriesList = function() {
  return this.setQueriesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.system.v1.ListDomainsResponse.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.system.v1.ListDomainsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.system.v1.ListDomainsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.system.v1.ListDomainsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.ListDomainsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_pb.ListDetails.toObject(includeInstance, f),
sortingColumn: jspb.Message.getFieldWithDefault(msg, 2, 0),
resultList: jspb.Message.toObjectList(msg.getResultList(),
    zitadel_instance_pb.Domain.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.system.v1.ListDomainsResponse}
 */
proto.zitadel.system.v1.ListDomainsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.system.v1.ListDomainsResponse;
  return proto.zitadel.system.v1.ListDomainsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.system.v1.ListDomainsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.system.v1.ListDomainsResponse}
 */
proto.zitadel.system.v1.ListDomainsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_pb.ListDetails;
      reader.readMessage(value,zitadel_object_pb.ListDetails.deserializeBinaryFromReader);
      msg.setDetails(value);
      break;
    case 2:
      var value = /** @type {!proto.zitadel.instance.v1.DomainFieldName} */ (reader.readEnum());
      msg.setSortingColumn(value);
      break;
    case 3:
      var value = new zitadel_instance_pb.Domain;
      reader.readMessage(value,zitadel_instance_pb.Domain.deserializeBinaryFromReader);
      msg.addResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.system.v1.ListDomainsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.system.v1.ListDomainsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.system.v1.ListDomainsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.ListDomainsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_pb.ListDetails.serializeBinaryToWriter
    );
  }
  f = message.getSortingColumn();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getResultList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      zitadel_instance_pb.Domain.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.v1.ListDetails details = 1;
 * @return {?proto.zitadel.v1.ListDetails}
 */
proto.zitadel.system.v1.ListDomainsResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.v1.ListDetails} */ (
    jspb.Message.getWrapperField(this, zitadel_object_pb.ListDetails, 1));
};


/**
 * @param {?proto.zitadel.v1.ListDetails|undefined} value
 * @return {!proto.zitadel.system.v1.ListDomainsResponse} returns this
*/
proto.zitadel.system.v1.ListDomainsResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.system.v1.ListDomainsResponse} returns this
 */
proto.zitadel.system.v1.ListDomainsResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.system.v1.ListDomainsResponse.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional zitadel.instance.v1.DomainFieldName sorting_column = 2;
 * @return {!proto.zitadel.instance.v1.DomainFieldName}
 */
proto.zitadel.system.v1.ListDomainsResponse.prototype.getSortingColumn = function() {
  return /** @type {!proto.zitadel.instance.v1.DomainFieldName} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.zitadel.instance.v1.DomainFieldName} value
 * @return {!proto.zitadel.system.v1.ListDomainsResponse} returns this
 */
proto.zitadel.system.v1.ListDomainsResponse.prototype.setSortingColumn = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * repeated zitadel.instance.v1.Domain result = 3;
 * @return {!Array<!proto.zitadel.instance.v1.Domain>}
 */
proto.zitadel.system.v1.ListDomainsResponse.prototype.getResultList = function() {
  return /** @type{!Array<!proto.zitadel.instance.v1.Domain>} */ (
    jspb.Message.getRepeatedWrapperField(this, zitadel_instance_pb.Domain, 3));
};


/**
 * @param {!Array<!proto.zitadel.instance.v1.Domain>} value
 * @return {!proto.zitadel.system.v1.ListDomainsResponse} returns this
*/
proto.zitadel.system.v1.ListDomainsResponse.prototype.setResultList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.zitadel.instance.v1.Domain=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zitadel.instance.v1.Domain}
 */
proto.zitadel.system.v1.ListDomainsResponse.prototype.addResult = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.zitadel.instance.v1.Domain, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.system.v1.ListDomainsResponse} returns this
 */
proto.zitadel.system.v1.ListDomainsResponse.prototype.clearResultList = function() {
  return this.setResultList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.system.v1.AddDomainRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.system.v1.AddDomainRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.system.v1.AddDomainRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.AddDomainRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
instanceId: jspb.Message.getFieldWithDefault(msg, 1, ""),
domain: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.system.v1.AddDomainRequest}
 */
proto.zitadel.system.v1.AddDomainRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.system.v1.AddDomainRequest;
  return proto.zitadel.system.v1.AddDomainRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.system.v1.AddDomainRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.system.v1.AddDomainRequest}
 */
proto.zitadel.system.v1.AddDomainRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstanceId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDomain(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.system.v1.AddDomainRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.system.v1.AddDomainRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.system.v1.AddDomainRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.AddDomainRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstanceId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDomain();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string instance_id = 1;
 * @return {string}
 */
proto.zitadel.system.v1.AddDomainRequest.prototype.getInstanceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.system.v1.AddDomainRequest} returns this
 */
proto.zitadel.system.v1.AddDomainRequest.prototype.setInstanceId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string domain = 2;
 * @return {string}
 */
proto.zitadel.system.v1.AddDomainRequest.prototype.getDomain = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.system.v1.AddDomainRequest} returns this
 */
proto.zitadel.system.v1.AddDomainRequest.prototype.setDomain = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.system.v1.AddDomainResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.system.v1.AddDomainResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.system.v1.AddDomainResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.AddDomainResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_pb.ObjectDetails.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.system.v1.AddDomainResponse}
 */
proto.zitadel.system.v1.AddDomainResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.system.v1.AddDomainResponse;
  return proto.zitadel.system.v1.AddDomainResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.system.v1.AddDomainResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.system.v1.AddDomainResponse}
 */
proto.zitadel.system.v1.AddDomainResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_pb.ObjectDetails;
      reader.readMessage(value,zitadel_object_pb.ObjectDetails.deserializeBinaryFromReader);
      msg.setDetails(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.system.v1.AddDomainResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.system.v1.AddDomainResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.system.v1.AddDomainResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.AddDomainResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_pb.ObjectDetails.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.v1.ObjectDetails details = 1;
 * @return {?proto.zitadel.v1.ObjectDetails}
 */
proto.zitadel.system.v1.AddDomainResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.v1.ObjectDetails} */ (
    jspb.Message.getWrapperField(this, zitadel_object_pb.ObjectDetails, 1));
};


/**
 * @param {?proto.zitadel.v1.ObjectDetails|undefined} value
 * @return {!proto.zitadel.system.v1.AddDomainResponse} returns this
*/
proto.zitadel.system.v1.AddDomainResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.system.v1.AddDomainResponse} returns this
 */
proto.zitadel.system.v1.AddDomainResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.system.v1.AddDomainResponse.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.system.v1.RemoveDomainRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.system.v1.RemoveDomainRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.system.v1.RemoveDomainRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.RemoveDomainRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
instanceId: jspb.Message.getFieldWithDefault(msg, 1, ""),
domain: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.system.v1.RemoveDomainRequest}
 */
proto.zitadel.system.v1.RemoveDomainRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.system.v1.RemoveDomainRequest;
  return proto.zitadel.system.v1.RemoveDomainRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.system.v1.RemoveDomainRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.system.v1.RemoveDomainRequest}
 */
proto.zitadel.system.v1.RemoveDomainRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstanceId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDomain(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.system.v1.RemoveDomainRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.system.v1.RemoveDomainRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.system.v1.RemoveDomainRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.RemoveDomainRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstanceId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDomain();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string instance_id = 1;
 * @return {string}
 */
proto.zitadel.system.v1.RemoveDomainRequest.prototype.getInstanceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.system.v1.RemoveDomainRequest} returns this
 */
proto.zitadel.system.v1.RemoveDomainRequest.prototype.setInstanceId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string domain = 2;
 * @return {string}
 */
proto.zitadel.system.v1.RemoveDomainRequest.prototype.getDomain = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.system.v1.RemoveDomainRequest} returns this
 */
proto.zitadel.system.v1.RemoveDomainRequest.prototype.setDomain = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.system.v1.RemoveDomainResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.system.v1.RemoveDomainResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.system.v1.RemoveDomainResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.RemoveDomainResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_pb.ObjectDetails.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.system.v1.RemoveDomainResponse}
 */
proto.zitadel.system.v1.RemoveDomainResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.system.v1.RemoveDomainResponse;
  return proto.zitadel.system.v1.RemoveDomainResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.system.v1.RemoveDomainResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.system.v1.RemoveDomainResponse}
 */
proto.zitadel.system.v1.RemoveDomainResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_pb.ObjectDetails;
      reader.readMessage(value,zitadel_object_pb.ObjectDetails.deserializeBinaryFromReader);
      msg.setDetails(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.system.v1.RemoveDomainResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.system.v1.RemoveDomainResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.system.v1.RemoveDomainResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.RemoveDomainResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_pb.ObjectDetails.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.v1.ObjectDetails details = 1;
 * @return {?proto.zitadel.v1.ObjectDetails}
 */
proto.zitadel.system.v1.RemoveDomainResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.v1.ObjectDetails} */ (
    jspb.Message.getWrapperField(this, zitadel_object_pb.ObjectDetails, 1));
};


/**
 * @param {?proto.zitadel.v1.ObjectDetails|undefined} value
 * @return {!proto.zitadel.system.v1.RemoveDomainResponse} returns this
*/
proto.zitadel.system.v1.RemoveDomainResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.system.v1.RemoveDomainResponse} returns this
 */
proto.zitadel.system.v1.RemoveDomainResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.system.v1.RemoveDomainResponse.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.system.v1.SetPrimaryDomainRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.system.v1.SetPrimaryDomainRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.system.v1.SetPrimaryDomainRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.SetPrimaryDomainRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
instanceId: jspb.Message.getFieldWithDefault(msg, 1, ""),
domain: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.system.v1.SetPrimaryDomainRequest}
 */
proto.zitadel.system.v1.SetPrimaryDomainRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.system.v1.SetPrimaryDomainRequest;
  return proto.zitadel.system.v1.SetPrimaryDomainRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.system.v1.SetPrimaryDomainRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.system.v1.SetPrimaryDomainRequest}
 */
proto.zitadel.system.v1.SetPrimaryDomainRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstanceId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDomain(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.system.v1.SetPrimaryDomainRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.system.v1.SetPrimaryDomainRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.system.v1.SetPrimaryDomainRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.SetPrimaryDomainRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstanceId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDomain();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string instance_id = 1;
 * @return {string}
 */
proto.zitadel.system.v1.SetPrimaryDomainRequest.prototype.getInstanceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.system.v1.SetPrimaryDomainRequest} returns this
 */
proto.zitadel.system.v1.SetPrimaryDomainRequest.prototype.setInstanceId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string domain = 2;
 * @return {string}
 */
proto.zitadel.system.v1.SetPrimaryDomainRequest.prototype.getDomain = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.system.v1.SetPrimaryDomainRequest} returns this
 */
proto.zitadel.system.v1.SetPrimaryDomainRequest.prototype.setDomain = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.system.v1.SetPrimaryDomainResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.system.v1.SetPrimaryDomainResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.system.v1.SetPrimaryDomainResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.SetPrimaryDomainResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_pb.ObjectDetails.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.system.v1.SetPrimaryDomainResponse}
 */
proto.zitadel.system.v1.SetPrimaryDomainResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.system.v1.SetPrimaryDomainResponse;
  return proto.zitadel.system.v1.SetPrimaryDomainResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.system.v1.SetPrimaryDomainResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.system.v1.SetPrimaryDomainResponse}
 */
proto.zitadel.system.v1.SetPrimaryDomainResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_pb.ObjectDetails;
      reader.readMessage(value,zitadel_object_pb.ObjectDetails.deserializeBinaryFromReader);
      msg.setDetails(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.system.v1.SetPrimaryDomainResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.system.v1.SetPrimaryDomainResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.system.v1.SetPrimaryDomainResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.SetPrimaryDomainResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_pb.ObjectDetails.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.v1.ObjectDetails details = 1;
 * @return {?proto.zitadel.v1.ObjectDetails}
 */
proto.zitadel.system.v1.SetPrimaryDomainResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.v1.ObjectDetails} */ (
    jspb.Message.getWrapperField(this, zitadel_object_pb.ObjectDetails, 1));
};


/**
 * @param {?proto.zitadel.v1.ObjectDetails|undefined} value
 * @return {!proto.zitadel.system.v1.SetPrimaryDomainResponse} returns this
*/
proto.zitadel.system.v1.SetPrimaryDomainResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.system.v1.SetPrimaryDomainResponse} returns this
 */
proto.zitadel.system.v1.SetPrimaryDomainResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.system.v1.SetPrimaryDomainResponse.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.system.v1.ChangeSubscriptionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.system.v1.ChangeSubscriptionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.system.v1.ChangeSubscriptionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.ChangeSubscriptionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
domain: jspb.Message.getFieldWithDefault(msg, 1, ""),
subscriptionName: jspb.Message.getFieldWithDefault(msg, 2, ""),
requestLimit: jspb.Message.getFieldWithDefault(msg, 3, 0),
actionMinsLimit: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.system.v1.ChangeSubscriptionRequest}
 */
proto.zitadel.system.v1.ChangeSubscriptionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.system.v1.ChangeSubscriptionRequest;
  return proto.zitadel.system.v1.ChangeSubscriptionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.system.v1.ChangeSubscriptionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.system.v1.ChangeSubscriptionRequest}
 */
proto.zitadel.system.v1.ChangeSubscriptionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDomain(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSubscriptionName(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setRequestLimit(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setActionMinsLimit(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.system.v1.ChangeSubscriptionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.system.v1.ChangeSubscriptionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.system.v1.ChangeSubscriptionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.ChangeSubscriptionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDomain();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSubscriptionName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRequestLimit();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getActionMinsLimit();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
};


/**
 * optional string domain = 1;
 * @return {string}
 */
proto.zitadel.system.v1.ChangeSubscriptionRequest.prototype.getDomain = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.system.v1.ChangeSubscriptionRequest} returns this
 */
proto.zitadel.system.v1.ChangeSubscriptionRequest.prototype.setDomain = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string subscription_name = 2;
 * @return {string}
 */
proto.zitadel.system.v1.ChangeSubscriptionRequest.prototype.getSubscriptionName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.system.v1.ChangeSubscriptionRequest} returns this
 */
proto.zitadel.system.v1.ChangeSubscriptionRequest.prototype.setSubscriptionName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint64 request_limit = 3;
 * @return {number}
 */
proto.zitadel.system.v1.ChangeSubscriptionRequest.prototype.getRequestLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.zitadel.system.v1.ChangeSubscriptionRequest} returns this
 */
proto.zitadel.system.v1.ChangeSubscriptionRequest.prototype.setRequestLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint64 action_mins_limit = 4;
 * @return {number}
 */
proto.zitadel.system.v1.ChangeSubscriptionRequest.prototype.getActionMinsLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.zitadel.system.v1.ChangeSubscriptionRequest} returns this
 */
proto.zitadel.system.v1.ChangeSubscriptionRequest.prototype.setActionMinsLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.system.v1.ChangeSubscriptionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.system.v1.ChangeSubscriptionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.system.v1.ChangeSubscriptionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.ChangeSubscriptionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_pb.ObjectDetails.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.system.v1.ChangeSubscriptionResponse}
 */
proto.zitadel.system.v1.ChangeSubscriptionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.system.v1.ChangeSubscriptionResponse;
  return proto.zitadel.system.v1.ChangeSubscriptionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.system.v1.ChangeSubscriptionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.system.v1.ChangeSubscriptionResponse}
 */
proto.zitadel.system.v1.ChangeSubscriptionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_pb.ObjectDetails;
      reader.readMessage(value,zitadel_object_pb.ObjectDetails.deserializeBinaryFromReader);
      msg.setDetails(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.system.v1.ChangeSubscriptionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.system.v1.ChangeSubscriptionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.system.v1.ChangeSubscriptionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.ChangeSubscriptionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_pb.ObjectDetails.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.v1.ObjectDetails details = 1;
 * @return {?proto.zitadel.v1.ObjectDetails}
 */
proto.zitadel.system.v1.ChangeSubscriptionResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.v1.ObjectDetails} */ (
    jspb.Message.getWrapperField(this, zitadel_object_pb.ObjectDetails, 1));
};


/**
 * @param {?proto.zitadel.v1.ObjectDetails|undefined} value
 * @return {!proto.zitadel.system.v1.ChangeSubscriptionResponse} returns this
*/
proto.zitadel.system.v1.ChangeSubscriptionResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.system.v1.ChangeSubscriptionResponse} returns this
 */
proto.zitadel.system.v1.ChangeSubscriptionResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.system.v1.ChangeSubscriptionResponse.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.system.v1.ListViewsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.system.v1.ListViewsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.system.v1.ListViewsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.ListViewsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.system.v1.ListViewsRequest}
 */
proto.zitadel.system.v1.ListViewsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.system.v1.ListViewsRequest;
  return proto.zitadel.system.v1.ListViewsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.system.v1.ListViewsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.system.v1.ListViewsRequest}
 */
proto.zitadel.system.v1.ListViewsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.system.v1.ListViewsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.system.v1.ListViewsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.system.v1.ListViewsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.ListViewsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.system.v1.ListViewsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.system.v1.ListViewsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.system.v1.ListViewsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.system.v1.ListViewsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.ListViewsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
resultList: jspb.Message.toObjectList(msg.getResultList(),
    proto.zitadel.system.v1.View.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.system.v1.ListViewsResponse}
 */
proto.zitadel.system.v1.ListViewsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.system.v1.ListViewsResponse;
  return proto.zitadel.system.v1.ListViewsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.system.v1.ListViewsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.system.v1.ListViewsResponse}
 */
proto.zitadel.system.v1.ListViewsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.zitadel.system.v1.View;
      reader.readMessage(value,proto.zitadel.system.v1.View.deserializeBinaryFromReader);
      msg.addResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.system.v1.ListViewsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.system.v1.ListViewsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.system.v1.ListViewsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.ListViewsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResultList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.zitadel.system.v1.View.serializeBinaryToWriter
    );
  }
};


/**
 * repeated View result = 1;
 * @return {!Array<!proto.zitadel.system.v1.View>}
 */
proto.zitadel.system.v1.ListViewsResponse.prototype.getResultList = function() {
  return /** @type{!Array<!proto.zitadel.system.v1.View>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.zitadel.system.v1.View, 1));
};


/**
 * @param {!Array<!proto.zitadel.system.v1.View>} value
 * @return {!proto.zitadel.system.v1.ListViewsResponse} returns this
*/
proto.zitadel.system.v1.ListViewsResponse.prototype.setResultList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.zitadel.system.v1.View=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zitadel.system.v1.View}
 */
proto.zitadel.system.v1.ListViewsResponse.prototype.addResult = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.zitadel.system.v1.View, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.system.v1.ListViewsResponse} returns this
 */
proto.zitadel.system.v1.ListViewsResponse.prototype.clearResultList = function() {
  return this.setResultList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.system.v1.ClearViewRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.system.v1.ClearViewRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.system.v1.ClearViewRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.ClearViewRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
database: jspb.Message.getFieldWithDefault(msg, 1, ""),
viewName: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.system.v1.ClearViewRequest}
 */
proto.zitadel.system.v1.ClearViewRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.system.v1.ClearViewRequest;
  return proto.zitadel.system.v1.ClearViewRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.system.v1.ClearViewRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.system.v1.ClearViewRequest}
 */
proto.zitadel.system.v1.ClearViewRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDatabase(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setViewName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.system.v1.ClearViewRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.system.v1.ClearViewRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.system.v1.ClearViewRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.ClearViewRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDatabase();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getViewName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string database = 1;
 * @return {string}
 */
proto.zitadel.system.v1.ClearViewRequest.prototype.getDatabase = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.system.v1.ClearViewRequest} returns this
 */
proto.zitadel.system.v1.ClearViewRequest.prototype.setDatabase = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string view_name = 2;
 * @return {string}
 */
proto.zitadel.system.v1.ClearViewRequest.prototype.getViewName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.system.v1.ClearViewRequest} returns this
 */
proto.zitadel.system.v1.ClearViewRequest.prototype.setViewName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.system.v1.ClearViewResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.system.v1.ClearViewResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.system.v1.ClearViewResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.ClearViewResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.system.v1.ClearViewResponse}
 */
proto.zitadel.system.v1.ClearViewResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.system.v1.ClearViewResponse;
  return proto.zitadel.system.v1.ClearViewResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.system.v1.ClearViewResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.system.v1.ClearViewResponse}
 */
proto.zitadel.system.v1.ClearViewResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.system.v1.ClearViewResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.system.v1.ClearViewResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.system.v1.ClearViewResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.ClearViewResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.system.v1.ListFailedEventsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.system.v1.ListFailedEventsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.system.v1.ListFailedEventsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.ListFailedEventsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.system.v1.ListFailedEventsRequest}
 */
proto.zitadel.system.v1.ListFailedEventsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.system.v1.ListFailedEventsRequest;
  return proto.zitadel.system.v1.ListFailedEventsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.system.v1.ListFailedEventsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.system.v1.ListFailedEventsRequest}
 */
proto.zitadel.system.v1.ListFailedEventsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.system.v1.ListFailedEventsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.system.v1.ListFailedEventsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.system.v1.ListFailedEventsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.ListFailedEventsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.system.v1.ListFailedEventsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.system.v1.ListFailedEventsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.system.v1.ListFailedEventsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.system.v1.ListFailedEventsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.ListFailedEventsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
resultList: jspb.Message.toObjectList(msg.getResultList(),
    proto.zitadel.system.v1.FailedEvent.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.system.v1.ListFailedEventsResponse}
 */
proto.zitadel.system.v1.ListFailedEventsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.system.v1.ListFailedEventsResponse;
  return proto.zitadel.system.v1.ListFailedEventsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.system.v1.ListFailedEventsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.system.v1.ListFailedEventsResponse}
 */
proto.zitadel.system.v1.ListFailedEventsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.zitadel.system.v1.FailedEvent;
      reader.readMessage(value,proto.zitadel.system.v1.FailedEvent.deserializeBinaryFromReader);
      msg.addResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.system.v1.ListFailedEventsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.system.v1.ListFailedEventsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.system.v1.ListFailedEventsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.ListFailedEventsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResultList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.zitadel.system.v1.FailedEvent.serializeBinaryToWriter
    );
  }
};


/**
 * repeated FailedEvent result = 1;
 * @return {!Array<!proto.zitadel.system.v1.FailedEvent>}
 */
proto.zitadel.system.v1.ListFailedEventsResponse.prototype.getResultList = function() {
  return /** @type{!Array<!proto.zitadel.system.v1.FailedEvent>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.zitadel.system.v1.FailedEvent, 1));
};


/**
 * @param {!Array<!proto.zitadel.system.v1.FailedEvent>} value
 * @return {!proto.zitadel.system.v1.ListFailedEventsResponse} returns this
*/
proto.zitadel.system.v1.ListFailedEventsResponse.prototype.setResultList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.zitadel.system.v1.FailedEvent=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zitadel.system.v1.FailedEvent}
 */
proto.zitadel.system.v1.ListFailedEventsResponse.prototype.addResult = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.zitadel.system.v1.FailedEvent, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.system.v1.ListFailedEventsResponse} returns this
 */
proto.zitadel.system.v1.ListFailedEventsResponse.prototype.clearResultList = function() {
  return this.setResultList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.system.v1.RemoveFailedEventRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.system.v1.RemoveFailedEventRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.system.v1.RemoveFailedEventRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.RemoveFailedEventRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
database: jspb.Message.getFieldWithDefault(msg, 1, ""),
viewName: jspb.Message.getFieldWithDefault(msg, 2, ""),
failedSequence: jspb.Message.getFieldWithDefault(msg, 3, 0),
instanceId: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.system.v1.RemoveFailedEventRequest}
 */
proto.zitadel.system.v1.RemoveFailedEventRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.system.v1.RemoveFailedEventRequest;
  return proto.zitadel.system.v1.RemoveFailedEventRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.system.v1.RemoveFailedEventRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.system.v1.RemoveFailedEventRequest}
 */
proto.zitadel.system.v1.RemoveFailedEventRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDatabase(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setViewName(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setFailedSequence(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstanceId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.system.v1.RemoveFailedEventRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.system.v1.RemoveFailedEventRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.system.v1.RemoveFailedEventRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.RemoveFailedEventRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDatabase();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getViewName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getFailedSequence();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getInstanceId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string database = 1;
 * @return {string}
 */
proto.zitadel.system.v1.RemoveFailedEventRequest.prototype.getDatabase = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.system.v1.RemoveFailedEventRequest} returns this
 */
proto.zitadel.system.v1.RemoveFailedEventRequest.prototype.setDatabase = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string view_name = 2;
 * @return {string}
 */
proto.zitadel.system.v1.RemoveFailedEventRequest.prototype.getViewName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.system.v1.RemoveFailedEventRequest} returns this
 */
proto.zitadel.system.v1.RemoveFailedEventRequest.prototype.setViewName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint64 failed_sequence = 3;
 * @return {number}
 */
proto.zitadel.system.v1.RemoveFailedEventRequest.prototype.getFailedSequence = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.zitadel.system.v1.RemoveFailedEventRequest} returns this
 */
proto.zitadel.system.v1.RemoveFailedEventRequest.prototype.setFailedSequence = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string instance_id = 4;
 * @return {string}
 */
proto.zitadel.system.v1.RemoveFailedEventRequest.prototype.getInstanceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.system.v1.RemoveFailedEventRequest} returns this
 */
proto.zitadel.system.v1.RemoveFailedEventRequest.prototype.setInstanceId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.system.v1.RemoveFailedEventResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.system.v1.RemoveFailedEventResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.system.v1.RemoveFailedEventResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.RemoveFailedEventResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.system.v1.RemoveFailedEventResponse}
 */
proto.zitadel.system.v1.RemoveFailedEventResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.system.v1.RemoveFailedEventResponse;
  return proto.zitadel.system.v1.RemoveFailedEventResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.system.v1.RemoveFailedEventResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.system.v1.RemoveFailedEventResponse}
 */
proto.zitadel.system.v1.RemoveFailedEventResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.system.v1.RemoveFailedEventResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.system.v1.RemoveFailedEventResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.system.v1.RemoveFailedEventResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.RemoveFailedEventResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.system.v1.View.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.system.v1.View.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.system.v1.View} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.View.toObject = function(includeInstance, msg) {
  var f, obj = {
database: jspb.Message.getFieldWithDefault(msg, 1, ""),
viewName: jspb.Message.getFieldWithDefault(msg, 2, ""),
processedSequence: jspb.Message.getFieldWithDefault(msg, 3, 0),
eventTimestamp: (f = msg.getEventTimestamp()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
lastSuccessfulSpoolerRun: (f = msg.getLastSuccessfulSpoolerRun()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
instance: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.system.v1.View}
 */
proto.zitadel.system.v1.View.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.system.v1.View;
  return proto.zitadel.system.v1.View.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.system.v1.View} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.system.v1.View}
 */
proto.zitadel.system.v1.View.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDatabase(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setViewName(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setProcessedSequence(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setEventTimestamp(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setLastSuccessfulSpoolerRun(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstance(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.system.v1.View.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.system.v1.View.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.system.v1.View} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.View.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDatabase();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getViewName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getProcessedSequence();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getEventTimestamp();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getLastSuccessfulSpoolerRun();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getInstance();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string database = 1;
 * @return {string}
 */
proto.zitadel.system.v1.View.prototype.getDatabase = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.system.v1.View} returns this
 */
proto.zitadel.system.v1.View.prototype.setDatabase = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string view_name = 2;
 * @return {string}
 */
proto.zitadel.system.v1.View.prototype.getViewName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.system.v1.View} returns this
 */
proto.zitadel.system.v1.View.prototype.setViewName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint64 processed_sequence = 3;
 * @return {number}
 */
proto.zitadel.system.v1.View.prototype.getProcessedSequence = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.zitadel.system.v1.View} returns this
 */
proto.zitadel.system.v1.View.prototype.setProcessedSequence = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional google.protobuf.Timestamp event_timestamp = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.zitadel.system.v1.View.prototype.getEventTimestamp = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.zitadel.system.v1.View} returns this
*/
proto.zitadel.system.v1.View.prototype.setEventTimestamp = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.system.v1.View} returns this
 */
proto.zitadel.system.v1.View.prototype.clearEventTimestamp = function() {
  return this.setEventTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.system.v1.View.prototype.hasEventTimestamp = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Timestamp last_successful_spooler_run = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.zitadel.system.v1.View.prototype.getLastSuccessfulSpoolerRun = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.zitadel.system.v1.View} returns this
*/
proto.zitadel.system.v1.View.prototype.setLastSuccessfulSpoolerRun = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.system.v1.View} returns this
 */
proto.zitadel.system.v1.View.prototype.clearLastSuccessfulSpoolerRun = function() {
  return this.setLastSuccessfulSpoolerRun(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.system.v1.View.prototype.hasLastSuccessfulSpoolerRun = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string instance = 6;
 * @return {string}
 */
proto.zitadel.system.v1.View.prototype.getInstance = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.system.v1.View} returns this
 */
proto.zitadel.system.v1.View.prototype.setInstance = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.system.v1.FailedEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.system.v1.FailedEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.system.v1.FailedEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.FailedEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
database: jspb.Message.getFieldWithDefault(msg, 1, ""),
viewName: jspb.Message.getFieldWithDefault(msg, 2, ""),
failedSequence: jspb.Message.getFieldWithDefault(msg, 3, 0),
failureCount: jspb.Message.getFieldWithDefault(msg, 4, 0),
errorMessage: jspb.Message.getFieldWithDefault(msg, 5, ""),
lastFailed: (f = msg.getLastFailed()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.system.v1.FailedEvent}
 */
proto.zitadel.system.v1.FailedEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.system.v1.FailedEvent;
  return proto.zitadel.system.v1.FailedEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.system.v1.FailedEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.system.v1.FailedEvent}
 */
proto.zitadel.system.v1.FailedEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDatabase(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setViewName(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setFailedSequence(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setFailureCount(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setErrorMessage(value);
      break;
    case 6:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setLastFailed(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.system.v1.FailedEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.system.v1.FailedEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.system.v1.FailedEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.FailedEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDatabase();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getViewName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getFailedSequence();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getFailureCount();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getErrorMessage();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getLastFailed();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string database = 1;
 * @return {string}
 */
proto.zitadel.system.v1.FailedEvent.prototype.getDatabase = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.system.v1.FailedEvent} returns this
 */
proto.zitadel.system.v1.FailedEvent.prototype.setDatabase = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string view_name = 2;
 * @return {string}
 */
proto.zitadel.system.v1.FailedEvent.prototype.getViewName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.system.v1.FailedEvent} returns this
 */
proto.zitadel.system.v1.FailedEvent.prototype.setViewName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint64 failed_sequence = 3;
 * @return {number}
 */
proto.zitadel.system.v1.FailedEvent.prototype.getFailedSequence = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.zitadel.system.v1.FailedEvent} returns this
 */
proto.zitadel.system.v1.FailedEvent.prototype.setFailedSequence = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint64 failure_count = 4;
 * @return {number}
 */
proto.zitadel.system.v1.FailedEvent.prototype.getFailureCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.zitadel.system.v1.FailedEvent} returns this
 */
proto.zitadel.system.v1.FailedEvent.prototype.setFailureCount = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string error_message = 5;
 * @return {string}
 */
proto.zitadel.system.v1.FailedEvent.prototype.getErrorMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.system.v1.FailedEvent} returns this
 */
proto.zitadel.system.v1.FailedEvent.prototype.setErrorMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional google.protobuf.Timestamp last_failed = 6;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.zitadel.system.v1.FailedEvent.prototype.getLastFailed = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 6));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.zitadel.system.v1.FailedEvent} returns this
*/
proto.zitadel.system.v1.FailedEvent.prototype.setLastFailed = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.system.v1.FailedEvent} returns this
 */
proto.zitadel.system.v1.FailedEvent.prototype.clearLastFailed = function() {
  return this.setLastFailed(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.system.v1.FailedEvent.prototype.hasLastFailed = function() {
  return jspb.Message.getField(this, 6) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.zitadel.system.v1.SetInstanceFeatureRequest.oneofGroups_ = [[3]];

/**
 * @enum {number}
 */
proto.zitadel.system.v1.SetInstanceFeatureRequest.ValueCase = {
  VALUE_NOT_SET: 0,
  BOOL: 3
};

/**
 * @return {proto.zitadel.system.v1.SetInstanceFeatureRequest.ValueCase}
 */
proto.zitadel.system.v1.SetInstanceFeatureRequest.prototype.getValueCase = function() {
  return /** @type {proto.zitadel.system.v1.SetInstanceFeatureRequest.ValueCase} */(jspb.Message.computeOneofCase(this, proto.zitadel.system.v1.SetInstanceFeatureRequest.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.system.v1.SetInstanceFeatureRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.system.v1.SetInstanceFeatureRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.system.v1.SetInstanceFeatureRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.SetInstanceFeatureRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
instanceId: jspb.Message.getFieldWithDefault(msg, 1, ""),
featureId: jspb.Message.getFieldWithDefault(msg, 2, 0),
bool: (f = jspb.Message.getBooleanField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.system.v1.SetInstanceFeatureRequest}
 */
proto.zitadel.system.v1.SetInstanceFeatureRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.system.v1.SetInstanceFeatureRequest;
  return proto.zitadel.system.v1.SetInstanceFeatureRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.system.v1.SetInstanceFeatureRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.system.v1.SetInstanceFeatureRequest}
 */
proto.zitadel.system.v1.SetInstanceFeatureRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstanceId(value);
      break;
    case 2:
      var value = /** @type {!proto.zitadel.feature.v1.InstanceFeature} */ (reader.readEnum());
      msg.setFeatureId(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBool(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.system.v1.SetInstanceFeatureRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.system.v1.SetInstanceFeatureRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.system.v1.SetInstanceFeatureRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.SetInstanceFeatureRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstanceId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFeatureId();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional string instance_id = 1;
 * @return {string}
 */
proto.zitadel.system.v1.SetInstanceFeatureRequest.prototype.getInstanceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.system.v1.SetInstanceFeatureRequest} returns this
 */
proto.zitadel.system.v1.SetInstanceFeatureRequest.prototype.setInstanceId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional zitadel.feature.v1.InstanceFeature feature_id = 2;
 * @return {!proto.zitadel.feature.v1.InstanceFeature}
 */
proto.zitadel.system.v1.SetInstanceFeatureRequest.prototype.getFeatureId = function() {
  return /** @type {!proto.zitadel.feature.v1.InstanceFeature} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.zitadel.feature.v1.InstanceFeature} value
 * @return {!proto.zitadel.system.v1.SetInstanceFeatureRequest} returns this
 */
proto.zitadel.system.v1.SetInstanceFeatureRequest.prototype.setFeatureId = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional bool bool = 3;
 * @return {boolean}
 */
proto.zitadel.system.v1.SetInstanceFeatureRequest.prototype.getBool = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.zitadel.system.v1.SetInstanceFeatureRequest} returns this
 */
proto.zitadel.system.v1.SetInstanceFeatureRequest.prototype.setBool = function(value) {
  return jspb.Message.setOneofField(this, 3, proto.zitadel.system.v1.SetInstanceFeatureRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.system.v1.SetInstanceFeatureRequest} returns this
 */
proto.zitadel.system.v1.SetInstanceFeatureRequest.prototype.clearBool = function() {
  return jspb.Message.setOneofField(this, 3, proto.zitadel.system.v1.SetInstanceFeatureRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.system.v1.SetInstanceFeatureRequest.prototype.hasBool = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.system.v1.SetInstanceFeatureResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.system.v1.SetInstanceFeatureResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.system.v1.SetInstanceFeatureResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.SetInstanceFeatureResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_pb.ObjectDetails.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.system.v1.SetInstanceFeatureResponse}
 */
proto.zitadel.system.v1.SetInstanceFeatureResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.system.v1.SetInstanceFeatureResponse;
  return proto.zitadel.system.v1.SetInstanceFeatureResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.system.v1.SetInstanceFeatureResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.system.v1.SetInstanceFeatureResponse}
 */
proto.zitadel.system.v1.SetInstanceFeatureResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_pb.ObjectDetails;
      reader.readMessage(value,zitadel_object_pb.ObjectDetails.deserializeBinaryFromReader);
      msg.setDetails(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.system.v1.SetInstanceFeatureResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.system.v1.SetInstanceFeatureResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.system.v1.SetInstanceFeatureResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.system.v1.SetInstanceFeatureResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_pb.ObjectDetails.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.v1.ObjectDetails details = 1;
 * @return {?proto.zitadel.v1.ObjectDetails}
 */
proto.zitadel.system.v1.SetInstanceFeatureResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.v1.ObjectDetails} */ (
    jspb.Message.getWrapperField(this, zitadel_object_pb.ObjectDetails, 1));
};


/**
 * @param {?proto.zitadel.v1.ObjectDetails|undefined} value
 * @return {!proto.zitadel.system.v1.SetInstanceFeatureResponse} returns this
*/
proto.zitadel.system.v1.SetInstanceFeatureResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.system.v1.SetInstanceFeatureResponse} returns this
 */
proto.zitadel.system.v1.SetInstanceFeatureResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.system.v1.SetInstanceFeatureResponse.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};


goog.object.extend(exports, proto.zitadel.system.v1);
