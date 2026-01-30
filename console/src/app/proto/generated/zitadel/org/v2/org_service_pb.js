// source: zitadel/org/v2/org_service.proto
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

var zitadel_object_v2_object_pb = require('../../../zitadel/object/v2/object_pb.js');
goog.object.extend(proto, zitadel_object_v2_object_pb);
var zitadel_protoc_gen_zitadel_v2_options_pb = require('../../../zitadel/protoc_gen_zitadel/v2/options_pb.js');
goog.object.extend(proto, zitadel_protoc_gen_zitadel_v2_options_pb);
var zitadel_user_v2_auth_pb = require('../../../zitadel/user/v2/auth_pb.js');
goog.object.extend(proto, zitadel_user_v2_auth_pb);
var zitadel_user_v2_email_pb = require('../../../zitadel/user/v2/email_pb.js');
goog.object.extend(proto, zitadel_user_v2_email_pb);
var zitadel_user_v2_phone_pb = require('../../../zitadel/user/v2/phone_pb.js');
goog.object.extend(proto, zitadel_user_v2_phone_pb);
var zitadel_user_v2_idp_pb = require('../../../zitadel/user/v2/idp_pb.js');
goog.object.extend(proto, zitadel_user_v2_idp_pb);
var zitadel_user_v2_password_pb = require('../../../zitadel/user/v2/password_pb.js');
goog.object.extend(proto, zitadel_user_v2_password_pb);
var zitadel_user_v2_user_pb = require('../../../zitadel/user/v2/user_pb.js');
goog.object.extend(proto, zitadel_user_v2_user_pb);
var zitadel_user_v2_user_service_pb = require('../../../zitadel/user/v2/user_service_pb.js');
goog.object.extend(proto, zitadel_user_v2_user_service_pb);
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
var google_api_field_behavior_pb = require('../../../google/api/field_behavior_pb.js');
goog.object.extend(proto, google_api_field_behavior_pb);
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
goog.object.extend(proto, google_protobuf_duration_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
goog.object.extend(proto, google_protobuf_struct_pb);
var protoc$gen$openapiv2_options_annotations_pb = require('../../../protoc-gen-openapiv2/options/annotations_pb.js');
goog.object.extend(proto, protoc$gen$openapiv2_options_annotations_pb);
var validate_validate_pb = require('../../../validate/validate_pb.js');
goog.object.extend(proto, validate_validate_pb);
var zitadel_org_v2_org_pb = require('../../../zitadel/org/v2/org_pb.js');
goog.object.extend(proto, zitadel_org_v2_org_pb);
var zitadel_org_v2_query_pb = require('../../../zitadel/org/v2/query_pb.js');
goog.object.extend(proto, zitadel_org_v2_query_pb);
var zitadel_filter_v2_filter_pb = require('../../../zitadel/filter/v2/filter_pb.js');
goog.object.extend(proto, zitadel_filter_v2_filter_pb);
var zitadel_metadata_v2_metadata_pb = require('../../../zitadel/metadata/v2/metadata_pb.js');
goog.object.extend(proto, zitadel_metadata_v2_metadata_pb);
goog.exportSymbol('proto.zitadel.org.v2.ActivateOrganizationRequest', null, global);
goog.exportSymbol('proto.zitadel.org.v2.ActivateOrganizationResponse', null, global);
goog.exportSymbol('proto.zitadel.org.v2.AddOrganizationDomainRequest', null, global);
goog.exportSymbol('proto.zitadel.org.v2.AddOrganizationDomainResponse', null, global);
goog.exportSymbol('proto.zitadel.org.v2.AddOrganizationRequest', null, global);
goog.exportSymbol('proto.zitadel.org.v2.AddOrganizationRequest.Admin', null, global);
goog.exportSymbol('proto.zitadel.org.v2.AddOrganizationRequest.Admin.UserTypeCase', null, global);
goog.exportSymbol('proto.zitadel.org.v2.AddOrganizationResponse', null, global);
goog.exportSymbol('proto.zitadel.org.v2.AddOrganizationResponse.CreatedAdmin', null, global);
goog.exportSymbol('proto.zitadel.org.v2.DeactivateOrganizationRequest', null, global);
goog.exportSymbol('proto.zitadel.org.v2.DeactivateOrganizationResponse', null, global);
goog.exportSymbol('proto.zitadel.org.v2.DeleteOrganizationDomainRequest', null, global);
goog.exportSymbol('proto.zitadel.org.v2.DeleteOrganizationDomainResponse', null, global);
goog.exportSymbol('proto.zitadel.org.v2.DeleteOrganizationMetadataRequest', null, global);
goog.exportSymbol('proto.zitadel.org.v2.DeleteOrganizationMetadataResponse', null, global);
goog.exportSymbol('proto.zitadel.org.v2.DeleteOrganizationRequest', null, global);
goog.exportSymbol('proto.zitadel.org.v2.DeleteOrganizationResponse', null, global);
goog.exportSymbol('proto.zitadel.org.v2.GenerateOrganizationDomainValidationRequest', null, global);
goog.exportSymbol('proto.zitadel.org.v2.GenerateOrganizationDomainValidationResponse', null, global);
goog.exportSymbol('proto.zitadel.org.v2.ListOrganizationDomainsRequest', null, global);
goog.exportSymbol('proto.zitadel.org.v2.ListOrganizationDomainsResponse', null, global);
goog.exportSymbol('proto.zitadel.org.v2.ListOrganizationMetadataRequest', null, global);
goog.exportSymbol('proto.zitadel.org.v2.ListOrganizationMetadataResponse', null, global);
goog.exportSymbol('proto.zitadel.org.v2.ListOrganizationsRequest', null, global);
goog.exportSymbol('proto.zitadel.org.v2.ListOrganizationsResponse', null, global);
goog.exportSymbol('proto.zitadel.org.v2.Metadata', null, global);
goog.exportSymbol('proto.zitadel.org.v2.SetOrganizationMetadataRequest', null, global);
goog.exportSymbol('proto.zitadel.org.v2.SetOrganizationMetadataResponse', null, global);
goog.exportSymbol('proto.zitadel.org.v2.UpdateOrganizationRequest', null, global);
goog.exportSymbol('proto.zitadel.org.v2.UpdateOrganizationResponse', null, global);
goog.exportSymbol('proto.zitadel.org.v2.VerifyOrganizationDomainRequest', null, global);
goog.exportSymbol('proto.zitadel.org.v2.VerifyOrganizationDomainResponse', null, global);
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
proto.zitadel.org.v2.AddOrganizationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.org.v2.AddOrganizationRequest.repeatedFields_, null);
};
goog.inherits(proto.zitadel.org.v2.AddOrganizationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.org.v2.AddOrganizationRequest.displayName = 'proto.zitadel.org.v2.AddOrganizationRequest';
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
proto.zitadel.org.v2.AddOrganizationRequest.Admin = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.org.v2.AddOrganizationRequest.Admin.repeatedFields_, proto.zitadel.org.v2.AddOrganizationRequest.Admin.oneofGroups_);
};
goog.inherits(proto.zitadel.org.v2.AddOrganizationRequest.Admin, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.org.v2.AddOrganizationRequest.Admin.displayName = 'proto.zitadel.org.v2.AddOrganizationRequest.Admin';
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
proto.zitadel.org.v2.AddOrganizationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.org.v2.AddOrganizationResponse.repeatedFields_, null);
};
goog.inherits(proto.zitadel.org.v2.AddOrganizationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.org.v2.AddOrganizationResponse.displayName = 'proto.zitadel.org.v2.AddOrganizationResponse';
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
proto.zitadel.org.v2.AddOrganizationResponse.CreatedAdmin = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.org.v2.AddOrganizationResponse.CreatedAdmin, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.org.v2.AddOrganizationResponse.CreatedAdmin.displayName = 'proto.zitadel.org.v2.AddOrganizationResponse.CreatedAdmin';
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
proto.zitadel.org.v2.UpdateOrganizationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.org.v2.UpdateOrganizationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.org.v2.UpdateOrganizationRequest.displayName = 'proto.zitadel.org.v2.UpdateOrganizationRequest';
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
proto.zitadel.org.v2.UpdateOrganizationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.org.v2.UpdateOrganizationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.org.v2.UpdateOrganizationResponse.displayName = 'proto.zitadel.org.v2.UpdateOrganizationResponse';
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
proto.zitadel.org.v2.ListOrganizationsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.org.v2.ListOrganizationsRequest.repeatedFields_, null);
};
goog.inherits(proto.zitadel.org.v2.ListOrganizationsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.org.v2.ListOrganizationsRequest.displayName = 'proto.zitadel.org.v2.ListOrganizationsRequest';
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
proto.zitadel.org.v2.ListOrganizationsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.org.v2.ListOrganizationsResponse.repeatedFields_, null);
};
goog.inherits(proto.zitadel.org.v2.ListOrganizationsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.org.v2.ListOrganizationsResponse.displayName = 'proto.zitadel.org.v2.ListOrganizationsResponse';
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
proto.zitadel.org.v2.DeleteOrganizationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.org.v2.DeleteOrganizationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.org.v2.DeleteOrganizationRequest.displayName = 'proto.zitadel.org.v2.DeleteOrganizationRequest';
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
proto.zitadel.org.v2.DeleteOrganizationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.org.v2.DeleteOrganizationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.org.v2.DeleteOrganizationResponse.displayName = 'proto.zitadel.org.v2.DeleteOrganizationResponse';
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
proto.zitadel.org.v2.DeactivateOrganizationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.org.v2.DeactivateOrganizationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.org.v2.DeactivateOrganizationRequest.displayName = 'proto.zitadel.org.v2.DeactivateOrganizationRequest';
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
proto.zitadel.org.v2.DeactivateOrganizationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.org.v2.DeactivateOrganizationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.org.v2.DeactivateOrganizationResponse.displayName = 'proto.zitadel.org.v2.DeactivateOrganizationResponse';
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
proto.zitadel.org.v2.ActivateOrganizationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.org.v2.ActivateOrganizationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.org.v2.ActivateOrganizationRequest.displayName = 'proto.zitadel.org.v2.ActivateOrganizationRequest';
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
proto.zitadel.org.v2.ActivateOrganizationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.org.v2.ActivateOrganizationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.org.v2.ActivateOrganizationResponse.displayName = 'proto.zitadel.org.v2.ActivateOrganizationResponse';
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
proto.zitadel.org.v2.AddOrganizationDomainRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.org.v2.AddOrganizationDomainRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.org.v2.AddOrganizationDomainRequest.displayName = 'proto.zitadel.org.v2.AddOrganizationDomainRequest';
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
proto.zitadel.org.v2.AddOrganizationDomainResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.org.v2.AddOrganizationDomainResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.org.v2.AddOrganizationDomainResponse.displayName = 'proto.zitadel.org.v2.AddOrganizationDomainResponse';
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
proto.zitadel.org.v2.ListOrganizationDomainsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.org.v2.ListOrganizationDomainsRequest.repeatedFields_, null);
};
goog.inherits(proto.zitadel.org.v2.ListOrganizationDomainsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.org.v2.ListOrganizationDomainsRequest.displayName = 'proto.zitadel.org.v2.ListOrganizationDomainsRequest';
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
proto.zitadel.org.v2.ListOrganizationDomainsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.org.v2.ListOrganizationDomainsResponse.repeatedFields_, null);
};
goog.inherits(proto.zitadel.org.v2.ListOrganizationDomainsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.org.v2.ListOrganizationDomainsResponse.displayName = 'proto.zitadel.org.v2.ListOrganizationDomainsResponse';
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
proto.zitadel.org.v2.DeleteOrganizationDomainRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.org.v2.DeleteOrganizationDomainRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.org.v2.DeleteOrganizationDomainRequest.displayName = 'proto.zitadel.org.v2.DeleteOrganizationDomainRequest';
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
proto.zitadel.org.v2.DeleteOrganizationDomainResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.org.v2.DeleteOrganizationDomainResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.org.v2.DeleteOrganizationDomainResponse.displayName = 'proto.zitadel.org.v2.DeleteOrganizationDomainResponse';
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
proto.zitadel.org.v2.GenerateOrganizationDomainValidationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.org.v2.GenerateOrganizationDomainValidationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.org.v2.GenerateOrganizationDomainValidationRequest.displayName = 'proto.zitadel.org.v2.GenerateOrganizationDomainValidationRequest';
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
proto.zitadel.org.v2.GenerateOrganizationDomainValidationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.org.v2.GenerateOrganizationDomainValidationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.org.v2.GenerateOrganizationDomainValidationResponse.displayName = 'proto.zitadel.org.v2.GenerateOrganizationDomainValidationResponse';
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
proto.zitadel.org.v2.VerifyOrganizationDomainRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.org.v2.VerifyOrganizationDomainRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.org.v2.VerifyOrganizationDomainRequest.displayName = 'proto.zitadel.org.v2.VerifyOrganizationDomainRequest';
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
proto.zitadel.org.v2.VerifyOrganizationDomainResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.org.v2.VerifyOrganizationDomainResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.org.v2.VerifyOrganizationDomainResponse.displayName = 'proto.zitadel.org.v2.VerifyOrganizationDomainResponse';
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
proto.zitadel.org.v2.Metadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.org.v2.Metadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.org.v2.Metadata.displayName = 'proto.zitadel.org.v2.Metadata';
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
proto.zitadel.org.v2.SetOrganizationMetadataRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.org.v2.SetOrganizationMetadataRequest.repeatedFields_, null);
};
goog.inherits(proto.zitadel.org.v2.SetOrganizationMetadataRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.org.v2.SetOrganizationMetadataRequest.displayName = 'proto.zitadel.org.v2.SetOrganizationMetadataRequest';
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
proto.zitadel.org.v2.SetOrganizationMetadataResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.org.v2.SetOrganizationMetadataResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.org.v2.SetOrganizationMetadataResponse.displayName = 'proto.zitadel.org.v2.SetOrganizationMetadataResponse';
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
proto.zitadel.org.v2.ListOrganizationMetadataRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.org.v2.ListOrganizationMetadataRequest.repeatedFields_, null);
};
goog.inherits(proto.zitadel.org.v2.ListOrganizationMetadataRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.org.v2.ListOrganizationMetadataRequest.displayName = 'proto.zitadel.org.v2.ListOrganizationMetadataRequest';
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
proto.zitadel.org.v2.ListOrganizationMetadataResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.org.v2.ListOrganizationMetadataResponse.repeatedFields_, null);
};
goog.inherits(proto.zitadel.org.v2.ListOrganizationMetadataResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.org.v2.ListOrganizationMetadataResponse.displayName = 'proto.zitadel.org.v2.ListOrganizationMetadataResponse';
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
proto.zitadel.org.v2.DeleteOrganizationMetadataRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.org.v2.DeleteOrganizationMetadataRequest.repeatedFields_, null);
};
goog.inherits(proto.zitadel.org.v2.DeleteOrganizationMetadataRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.org.v2.DeleteOrganizationMetadataRequest.displayName = 'proto.zitadel.org.v2.DeleteOrganizationMetadataRequest';
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
proto.zitadel.org.v2.DeleteOrganizationMetadataResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.org.v2.DeleteOrganizationMetadataResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.org.v2.DeleteOrganizationMetadataResponse.displayName = 'proto.zitadel.org.v2.DeleteOrganizationMetadataResponse';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.org.v2.AddOrganizationRequest.repeatedFields_ = [2];



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
proto.zitadel.org.v2.AddOrganizationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.org.v2.AddOrganizationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.org.v2.AddOrganizationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2.AddOrganizationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
name: jspb.Message.getFieldWithDefault(msg, 1, ""),
adminsList: jspb.Message.toObjectList(msg.getAdminsList(),
    proto.zitadel.org.v2.AddOrganizationRequest.Admin.toObject, includeInstance),
organizationId: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
orgId: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f
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
 * @return {!proto.zitadel.org.v2.AddOrganizationRequest}
 */
proto.zitadel.org.v2.AddOrganizationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.org.v2.AddOrganizationRequest;
  return proto.zitadel.org.v2.AddOrganizationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.org.v2.AddOrganizationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.org.v2.AddOrganizationRequest}
 */
proto.zitadel.org.v2.AddOrganizationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = new proto.zitadel.org.v2.AddOrganizationRequest.Admin;
      reader.readMessage(value,proto.zitadel.org.v2.AddOrganizationRequest.Admin.deserializeBinaryFromReader);
      msg.addAdmins(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganizationId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrgId(value);
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
proto.zitadel.org.v2.AddOrganizationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.org.v2.AddOrganizationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.org.v2.AddOrganizationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2.AddOrganizationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAdminsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.zitadel.org.v2.AddOrganizationRequest.Admin.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.org.v2.AddOrganizationRequest.Admin.repeatedFields_ = [3];

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.zitadel.org.v2.AddOrganizationRequest.Admin.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.zitadel.org.v2.AddOrganizationRequest.Admin.UserTypeCase = {
  USER_TYPE_NOT_SET: 0,
  USER_ID: 1,
  HUMAN: 2
};

/**
 * @return {proto.zitadel.org.v2.AddOrganizationRequest.Admin.UserTypeCase}
 */
proto.zitadel.org.v2.AddOrganizationRequest.Admin.prototype.getUserTypeCase = function() {
  return /** @type {proto.zitadel.org.v2.AddOrganizationRequest.Admin.UserTypeCase} */(jspb.Message.computeOneofCase(this, proto.zitadel.org.v2.AddOrganizationRequest.Admin.oneofGroups_[0]));
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
proto.zitadel.org.v2.AddOrganizationRequest.Admin.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.org.v2.AddOrganizationRequest.Admin.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.org.v2.AddOrganizationRequest.Admin} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2.AddOrganizationRequest.Admin.toObject = function(includeInstance, msg) {
  var f, obj = {
userId: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
human: (f = msg.getHuman()) && zitadel_user_v2_user_service_pb.AddHumanUserRequest.toObject(includeInstance, f),
rolesList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
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
 * @return {!proto.zitadel.org.v2.AddOrganizationRequest.Admin}
 */
proto.zitadel.org.v2.AddOrganizationRequest.Admin.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.org.v2.AddOrganizationRequest.Admin;
  return proto.zitadel.org.v2.AddOrganizationRequest.Admin.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.org.v2.AddOrganizationRequest.Admin} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.org.v2.AddOrganizationRequest.Admin}
 */
proto.zitadel.org.v2.AddOrganizationRequest.Admin.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 2:
      var value = new zitadel_user_v2_user_service_pb.AddHumanUserRequest;
      reader.readMessage(value,zitadel_user_v2_user_service_pb.AddHumanUserRequest.deserializeBinaryFromReader);
      msg.setHuman(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addRoles(value);
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
proto.zitadel.org.v2.AddOrganizationRequest.Admin.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.org.v2.AddOrganizationRequest.Admin.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.org.v2.AddOrganizationRequest.Admin} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2.AddOrganizationRequest.Admin.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getHuman();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      zitadel_user_v2_user_service_pb.AddHumanUserRequest.serializeBinaryToWriter
    );
  }
  f = message.getRolesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.zitadel.org.v2.AddOrganizationRequest.Admin.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.org.v2.AddOrganizationRequest.Admin} returns this
 */
proto.zitadel.org.v2.AddOrganizationRequest.Admin.prototype.setUserId = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.zitadel.org.v2.AddOrganizationRequest.Admin.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.org.v2.AddOrganizationRequest.Admin} returns this
 */
proto.zitadel.org.v2.AddOrganizationRequest.Admin.prototype.clearUserId = function() {
  return jspb.Message.setOneofField(this, 1, proto.zitadel.org.v2.AddOrganizationRequest.Admin.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.org.v2.AddOrganizationRequest.Admin.prototype.hasUserId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional zitadel.user.v2.AddHumanUserRequest human = 2;
 * @return {?proto.zitadel.user.v2.AddHumanUserRequest}
 */
proto.zitadel.org.v2.AddOrganizationRequest.Admin.prototype.getHuman = function() {
  return /** @type{?proto.zitadel.user.v2.AddHumanUserRequest} */ (
    jspb.Message.getWrapperField(this, zitadel_user_v2_user_service_pb.AddHumanUserRequest, 2));
};


/**
 * @param {?proto.zitadel.user.v2.AddHumanUserRequest|undefined} value
 * @return {!proto.zitadel.org.v2.AddOrganizationRequest.Admin} returns this
*/
proto.zitadel.org.v2.AddOrganizationRequest.Admin.prototype.setHuman = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.zitadel.org.v2.AddOrganizationRequest.Admin.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.org.v2.AddOrganizationRequest.Admin} returns this
 */
proto.zitadel.org.v2.AddOrganizationRequest.Admin.prototype.clearHuman = function() {
  return this.setHuman(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.org.v2.AddOrganizationRequest.Admin.prototype.hasHuman = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated string roles = 3;
 * @return {!Array<string>}
 */
proto.zitadel.org.v2.AddOrganizationRequest.Admin.prototype.getRolesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.zitadel.org.v2.AddOrganizationRequest.Admin} returns this
 */
proto.zitadel.org.v2.AddOrganizationRequest.Admin.prototype.setRolesList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.zitadel.org.v2.AddOrganizationRequest.Admin} returns this
 */
proto.zitadel.org.v2.AddOrganizationRequest.Admin.prototype.addRoles = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.org.v2.AddOrganizationRequest.Admin} returns this
 */
proto.zitadel.org.v2.AddOrganizationRequest.Admin.prototype.clearRolesList = function() {
  return this.setRolesList([]);
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.zitadel.org.v2.AddOrganizationRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.org.v2.AddOrganizationRequest} returns this
 */
proto.zitadel.org.v2.AddOrganizationRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated Admin admins = 2;
 * @return {!Array<!proto.zitadel.org.v2.AddOrganizationRequest.Admin>}
 */
proto.zitadel.org.v2.AddOrganizationRequest.prototype.getAdminsList = function() {
  return /** @type{!Array<!proto.zitadel.org.v2.AddOrganizationRequest.Admin>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.zitadel.org.v2.AddOrganizationRequest.Admin, 2));
};


/**
 * @param {!Array<!proto.zitadel.org.v2.AddOrganizationRequest.Admin>} value
 * @return {!proto.zitadel.org.v2.AddOrganizationRequest} returns this
*/
proto.zitadel.org.v2.AddOrganizationRequest.prototype.setAdminsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.zitadel.org.v2.AddOrganizationRequest.Admin=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zitadel.org.v2.AddOrganizationRequest.Admin}
 */
proto.zitadel.org.v2.AddOrganizationRequest.prototype.addAdmins = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.zitadel.org.v2.AddOrganizationRequest.Admin, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.org.v2.AddOrganizationRequest} returns this
 */
proto.zitadel.org.v2.AddOrganizationRequest.prototype.clearAdminsList = function() {
  return this.setAdminsList([]);
};


/**
 * optional string organization_id = 4;
 * @return {string}
 */
proto.zitadel.org.v2.AddOrganizationRequest.prototype.getOrganizationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.org.v2.AddOrganizationRequest} returns this
 */
proto.zitadel.org.v2.AddOrganizationRequest.prototype.setOrganizationId = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.org.v2.AddOrganizationRequest} returns this
 */
proto.zitadel.org.v2.AddOrganizationRequest.prototype.clearOrganizationId = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.org.v2.AddOrganizationRequest.prototype.hasOrganizationId = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string org_id = 3;
 * @return {string}
 */
proto.zitadel.org.v2.AddOrganizationRequest.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.org.v2.AddOrganizationRequest} returns this
 */
proto.zitadel.org.v2.AddOrganizationRequest.prototype.setOrgId = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.org.v2.AddOrganizationRequest} returns this
 */
proto.zitadel.org.v2.AddOrganizationRequest.prototype.clearOrgId = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.org.v2.AddOrganizationRequest.prototype.hasOrgId = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.org.v2.AddOrganizationResponse.repeatedFields_ = [3];



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
proto.zitadel.org.v2.AddOrganizationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.org.v2.AddOrganizationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.org.v2.AddOrganizationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2.AddOrganizationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_v2_object_pb.Details.toObject(includeInstance, f),
organizationId: jspb.Message.getFieldWithDefault(msg, 2, ""),
createdAdminsList: jspb.Message.toObjectList(msg.getCreatedAdminsList(),
    proto.zitadel.org.v2.AddOrganizationResponse.CreatedAdmin.toObject, includeInstance)
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
 * @return {!proto.zitadel.org.v2.AddOrganizationResponse}
 */
proto.zitadel.org.v2.AddOrganizationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.org.v2.AddOrganizationResponse;
  return proto.zitadel.org.v2.AddOrganizationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.org.v2.AddOrganizationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.org.v2.AddOrganizationResponse}
 */
proto.zitadel.org.v2.AddOrganizationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_v2_object_pb.Details;
      reader.readMessage(value,zitadel_object_v2_object_pb.Details.deserializeBinaryFromReader);
      msg.setDetails(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganizationId(value);
      break;
    case 3:
      var value = new proto.zitadel.org.v2.AddOrganizationResponse.CreatedAdmin;
      reader.readMessage(value,proto.zitadel.org.v2.AddOrganizationResponse.CreatedAdmin.deserializeBinaryFromReader);
      msg.addCreatedAdmins(value);
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
proto.zitadel.org.v2.AddOrganizationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.org.v2.AddOrganizationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.org.v2.AddOrganizationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2.AddOrganizationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v2_object_pb.Details.serializeBinaryToWriter
    );
  }
  f = message.getOrganizationId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCreatedAdminsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.zitadel.org.v2.AddOrganizationResponse.CreatedAdmin.serializeBinaryToWriter
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
proto.zitadel.org.v2.AddOrganizationResponse.CreatedAdmin.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.org.v2.AddOrganizationResponse.CreatedAdmin.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.org.v2.AddOrganizationResponse.CreatedAdmin} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2.AddOrganizationResponse.CreatedAdmin.toObject = function(includeInstance, msg) {
  var f, obj = {
userId: jspb.Message.getFieldWithDefault(msg, 1, ""),
emailCode: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
phoneCode: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f
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
 * @return {!proto.zitadel.org.v2.AddOrganizationResponse.CreatedAdmin}
 */
proto.zitadel.org.v2.AddOrganizationResponse.CreatedAdmin.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.org.v2.AddOrganizationResponse.CreatedAdmin;
  return proto.zitadel.org.v2.AddOrganizationResponse.CreatedAdmin.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.org.v2.AddOrganizationResponse.CreatedAdmin} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.org.v2.AddOrganizationResponse.CreatedAdmin}
 */
proto.zitadel.org.v2.AddOrganizationResponse.CreatedAdmin.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmailCode(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhoneCode(value);
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
proto.zitadel.org.v2.AddOrganizationResponse.CreatedAdmin.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.org.v2.AddOrganizationResponse.CreatedAdmin.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.org.v2.AddOrganizationResponse.CreatedAdmin} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2.AddOrganizationResponse.CreatedAdmin.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.zitadel.org.v2.AddOrganizationResponse.CreatedAdmin.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.org.v2.AddOrganizationResponse.CreatedAdmin} returns this
 */
proto.zitadel.org.v2.AddOrganizationResponse.CreatedAdmin.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string email_code = 2;
 * @return {string}
 */
proto.zitadel.org.v2.AddOrganizationResponse.CreatedAdmin.prototype.getEmailCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.org.v2.AddOrganizationResponse.CreatedAdmin} returns this
 */
proto.zitadel.org.v2.AddOrganizationResponse.CreatedAdmin.prototype.setEmailCode = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.org.v2.AddOrganizationResponse.CreatedAdmin} returns this
 */
proto.zitadel.org.v2.AddOrganizationResponse.CreatedAdmin.prototype.clearEmailCode = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.org.v2.AddOrganizationResponse.CreatedAdmin.prototype.hasEmailCode = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string phone_code = 3;
 * @return {string}
 */
proto.zitadel.org.v2.AddOrganizationResponse.CreatedAdmin.prototype.getPhoneCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.org.v2.AddOrganizationResponse.CreatedAdmin} returns this
 */
proto.zitadel.org.v2.AddOrganizationResponse.CreatedAdmin.prototype.setPhoneCode = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.org.v2.AddOrganizationResponse.CreatedAdmin} returns this
 */
proto.zitadel.org.v2.AddOrganizationResponse.CreatedAdmin.prototype.clearPhoneCode = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.org.v2.AddOrganizationResponse.CreatedAdmin.prototype.hasPhoneCode = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional zitadel.object.v2.Details details = 1;
 * @return {?proto.zitadel.object.v2.Details}
 */
proto.zitadel.org.v2.AddOrganizationResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.object.v2.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.object.v2.Details|undefined} value
 * @return {!proto.zitadel.org.v2.AddOrganizationResponse} returns this
*/
proto.zitadel.org.v2.AddOrganizationResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.org.v2.AddOrganizationResponse} returns this
 */
proto.zitadel.org.v2.AddOrganizationResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.org.v2.AddOrganizationResponse.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string organization_id = 2;
 * @return {string}
 */
proto.zitadel.org.v2.AddOrganizationResponse.prototype.getOrganizationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.org.v2.AddOrganizationResponse} returns this
 */
proto.zitadel.org.v2.AddOrganizationResponse.prototype.setOrganizationId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated CreatedAdmin created_admins = 3;
 * @return {!Array<!proto.zitadel.org.v2.AddOrganizationResponse.CreatedAdmin>}
 */
proto.zitadel.org.v2.AddOrganizationResponse.prototype.getCreatedAdminsList = function() {
  return /** @type{!Array<!proto.zitadel.org.v2.AddOrganizationResponse.CreatedAdmin>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.zitadel.org.v2.AddOrganizationResponse.CreatedAdmin, 3));
};


/**
 * @param {!Array<!proto.zitadel.org.v2.AddOrganizationResponse.CreatedAdmin>} value
 * @return {!proto.zitadel.org.v2.AddOrganizationResponse} returns this
*/
proto.zitadel.org.v2.AddOrganizationResponse.prototype.setCreatedAdminsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.zitadel.org.v2.AddOrganizationResponse.CreatedAdmin=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zitadel.org.v2.AddOrganizationResponse.CreatedAdmin}
 */
proto.zitadel.org.v2.AddOrganizationResponse.prototype.addCreatedAdmins = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.zitadel.org.v2.AddOrganizationResponse.CreatedAdmin, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.org.v2.AddOrganizationResponse} returns this
 */
proto.zitadel.org.v2.AddOrganizationResponse.prototype.clearCreatedAdminsList = function() {
  return this.setCreatedAdminsList([]);
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
proto.zitadel.org.v2.UpdateOrganizationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.org.v2.UpdateOrganizationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.org.v2.UpdateOrganizationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2.UpdateOrganizationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
organizationId: jspb.Message.getFieldWithDefault(msg, 1, ""),
name: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.zitadel.org.v2.UpdateOrganizationRequest}
 */
proto.zitadel.org.v2.UpdateOrganizationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.org.v2.UpdateOrganizationRequest;
  return proto.zitadel.org.v2.UpdateOrganizationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.org.v2.UpdateOrganizationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.org.v2.UpdateOrganizationRequest}
 */
proto.zitadel.org.v2.UpdateOrganizationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganizationId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
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
proto.zitadel.org.v2.UpdateOrganizationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.org.v2.UpdateOrganizationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.org.v2.UpdateOrganizationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2.UpdateOrganizationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrganizationId();
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
};


/**
 * optional string organization_id = 1;
 * @return {string}
 */
proto.zitadel.org.v2.UpdateOrganizationRequest.prototype.getOrganizationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.org.v2.UpdateOrganizationRequest} returns this
 */
proto.zitadel.org.v2.UpdateOrganizationRequest.prototype.setOrganizationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.zitadel.org.v2.UpdateOrganizationRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.org.v2.UpdateOrganizationRequest} returns this
 */
proto.zitadel.org.v2.UpdateOrganizationRequest.prototype.setName = function(value) {
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
proto.zitadel.org.v2.UpdateOrganizationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.org.v2.UpdateOrganizationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.org.v2.UpdateOrganizationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2.UpdateOrganizationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
changeDate: (f = msg.getChangeDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.org.v2.UpdateOrganizationResponse}
 */
proto.zitadel.org.v2.UpdateOrganizationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.org.v2.UpdateOrganizationResponse;
  return proto.zitadel.org.v2.UpdateOrganizationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.org.v2.UpdateOrganizationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.org.v2.UpdateOrganizationResponse}
 */
proto.zitadel.org.v2.UpdateOrganizationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setChangeDate(value);
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
proto.zitadel.org.v2.UpdateOrganizationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.org.v2.UpdateOrganizationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.org.v2.UpdateOrganizationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2.UpdateOrganizationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChangeDate();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Timestamp change_date = 1;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.zitadel.org.v2.UpdateOrganizationResponse.prototype.getChangeDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.zitadel.org.v2.UpdateOrganizationResponse} returns this
*/
proto.zitadel.org.v2.UpdateOrganizationResponse.prototype.setChangeDate = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.org.v2.UpdateOrganizationResponse} returns this
 */
proto.zitadel.org.v2.UpdateOrganizationResponse.prototype.clearChangeDate = function() {
  return this.setChangeDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.org.v2.UpdateOrganizationResponse.prototype.hasChangeDate = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.org.v2.ListOrganizationsRequest.repeatedFields_ = [3];



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
proto.zitadel.org.v2.ListOrganizationsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.org.v2.ListOrganizationsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.org.v2.ListOrganizationsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2.ListOrganizationsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
query: (f = msg.getQuery()) && zitadel_object_v2_object_pb.ListQuery.toObject(includeInstance, f),
sortingColumn: jspb.Message.getFieldWithDefault(msg, 2, 0),
queriesList: jspb.Message.toObjectList(msg.getQueriesList(),
    zitadel_org_v2_query_pb.SearchQuery.toObject, includeInstance)
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
 * @return {!proto.zitadel.org.v2.ListOrganizationsRequest}
 */
proto.zitadel.org.v2.ListOrganizationsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.org.v2.ListOrganizationsRequest;
  return proto.zitadel.org.v2.ListOrganizationsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.org.v2.ListOrganizationsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.org.v2.ListOrganizationsRequest}
 */
proto.zitadel.org.v2.ListOrganizationsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_v2_object_pb.ListQuery;
      reader.readMessage(value,zitadel_object_v2_object_pb.ListQuery.deserializeBinaryFromReader);
      msg.setQuery(value);
      break;
    case 2:
      var value = /** @type {!proto.zitadel.org.v2.OrganizationFieldName} */ (reader.readEnum());
      msg.setSortingColumn(value);
      break;
    case 3:
      var value = new zitadel_org_v2_query_pb.SearchQuery;
      reader.readMessage(value,zitadel_org_v2_query_pb.SearchQuery.deserializeBinaryFromReader);
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
proto.zitadel.org.v2.ListOrganizationsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.org.v2.ListOrganizationsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.org.v2.ListOrganizationsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2.ListOrganizationsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQuery();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v2_object_pb.ListQuery.serializeBinaryToWriter
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
      zitadel_org_v2_query_pb.SearchQuery.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.object.v2.ListQuery query = 1;
 * @return {?proto.zitadel.object.v2.ListQuery}
 */
proto.zitadel.org.v2.ListOrganizationsRequest.prototype.getQuery = function() {
  return /** @type{?proto.zitadel.object.v2.ListQuery} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2_object_pb.ListQuery, 1));
};


/**
 * @param {?proto.zitadel.object.v2.ListQuery|undefined} value
 * @return {!proto.zitadel.org.v2.ListOrganizationsRequest} returns this
*/
proto.zitadel.org.v2.ListOrganizationsRequest.prototype.setQuery = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.org.v2.ListOrganizationsRequest} returns this
 */
proto.zitadel.org.v2.ListOrganizationsRequest.prototype.clearQuery = function() {
  return this.setQuery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.org.v2.ListOrganizationsRequest.prototype.hasQuery = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional OrganizationFieldName sorting_column = 2;
 * @return {!proto.zitadel.org.v2.OrganizationFieldName}
 */
proto.zitadel.org.v2.ListOrganizationsRequest.prototype.getSortingColumn = function() {
  return /** @type {!proto.zitadel.org.v2.OrganizationFieldName} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.zitadel.org.v2.OrganizationFieldName} value
 * @return {!proto.zitadel.org.v2.ListOrganizationsRequest} returns this
 */
proto.zitadel.org.v2.ListOrganizationsRequest.prototype.setSortingColumn = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * repeated SearchQuery queries = 3;
 * @return {!Array<!proto.zitadel.org.v2.SearchQuery>}
 */
proto.zitadel.org.v2.ListOrganizationsRequest.prototype.getQueriesList = function() {
  return /** @type{!Array<!proto.zitadel.org.v2.SearchQuery>} */ (
    jspb.Message.getRepeatedWrapperField(this, zitadel_org_v2_query_pb.SearchQuery, 3));
};


/**
 * @param {!Array<!proto.zitadel.org.v2.SearchQuery>} value
 * @return {!proto.zitadel.org.v2.ListOrganizationsRequest} returns this
*/
proto.zitadel.org.v2.ListOrganizationsRequest.prototype.setQueriesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.zitadel.org.v2.SearchQuery=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zitadel.org.v2.SearchQuery}
 */
proto.zitadel.org.v2.ListOrganizationsRequest.prototype.addQueries = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.zitadel.org.v2.SearchQuery, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.org.v2.ListOrganizationsRequest} returns this
 */
proto.zitadel.org.v2.ListOrganizationsRequest.prototype.clearQueriesList = function() {
  return this.setQueriesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.org.v2.ListOrganizationsResponse.repeatedFields_ = [3];



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
proto.zitadel.org.v2.ListOrganizationsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.org.v2.ListOrganizationsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.org.v2.ListOrganizationsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2.ListOrganizationsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_v2_object_pb.ListDetails.toObject(includeInstance, f),
sortingColumn: jspb.Message.getFieldWithDefault(msg, 2, 0),
resultList: jspb.Message.toObjectList(msg.getResultList(),
    zitadel_org_v2_org_pb.Organization.toObject, includeInstance)
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
 * @return {!proto.zitadel.org.v2.ListOrganizationsResponse}
 */
proto.zitadel.org.v2.ListOrganizationsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.org.v2.ListOrganizationsResponse;
  return proto.zitadel.org.v2.ListOrganizationsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.org.v2.ListOrganizationsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.org.v2.ListOrganizationsResponse}
 */
proto.zitadel.org.v2.ListOrganizationsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_v2_object_pb.ListDetails;
      reader.readMessage(value,zitadel_object_v2_object_pb.ListDetails.deserializeBinaryFromReader);
      msg.setDetails(value);
      break;
    case 2:
      var value = /** @type {!proto.zitadel.org.v2.OrganizationFieldName} */ (reader.readEnum());
      msg.setSortingColumn(value);
      break;
    case 3:
      var value = new zitadel_org_v2_org_pb.Organization;
      reader.readMessage(value,zitadel_org_v2_org_pb.Organization.deserializeBinaryFromReader);
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
proto.zitadel.org.v2.ListOrganizationsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.org.v2.ListOrganizationsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.org.v2.ListOrganizationsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2.ListOrganizationsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v2_object_pb.ListDetails.serializeBinaryToWriter
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
      zitadel_org_v2_org_pb.Organization.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.object.v2.ListDetails details = 1;
 * @return {?proto.zitadel.object.v2.ListDetails}
 */
proto.zitadel.org.v2.ListOrganizationsResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.object.v2.ListDetails} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2_object_pb.ListDetails, 1));
};


/**
 * @param {?proto.zitadel.object.v2.ListDetails|undefined} value
 * @return {!proto.zitadel.org.v2.ListOrganizationsResponse} returns this
*/
proto.zitadel.org.v2.ListOrganizationsResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.org.v2.ListOrganizationsResponse} returns this
 */
proto.zitadel.org.v2.ListOrganizationsResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.org.v2.ListOrganizationsResponse.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional OrganizationFieldName sorting_column = 2;
 * @return {!proto.zitadel.org.v2.OrganizationFieldName}
 */
proto.zitadel.org.v2.ListOrganizationsResponse.prototype.getSortingColumn = function() {
  return /** @type {!proto.zitadel.org.v2.OrganizationFieldName} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.zitadel.org.v2.OrganizationFieldName} value
 * @return {!proto.zitadel.org.v2.ListOrganizationsResponse} returns this
 */
proto.zitadel.org.v2.ListOrganizationsResponse.prototype.setSortingColumn = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * repeated Organization result = 3;
 * @return {!Array<!proto.zitadel.org.v2.Organization>}
 */
proto.zitadel.org.v2.ListOrganizationsResponse.prototype.getResultList = function() {
  return /** @type{!Array<!proto.zitadel.org.v2.Organization>} */ (
    jspb.Message.getRepeatedWrapperField(this, zitadel_org_v2_org_pb.Organization, 3));
};


/**
 * @param {!Array<!proto.zitadel.org.v2.Organization>} value
 * @return {!proto.zitadel.org.v2.ListOrganizationsResponse} returns this
*/
proto.zitadel.org.v2.ListOrganizationsResponse.prototype.setResultList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.zitadel.org.v2.Organization=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zitadel.org.v2.Organization}
 */
proto.zitadel.org.v2.ListOrganizationsResponse.prototype.addResult = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.zitadel.org.v2.Organization, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.org.v2.ListOrganizationsResponse} returns this
 */
proto.zitadel.org.v2.ListOrganizationsResponse.prototype.clearResultList = function() {
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
proto.zitadel.org.v2.DeleteOrganizationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.org.v2.DeleteOrganizationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.org.v2.DeleteOrganizationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2.DeleteOrganizationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
organizationId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.zitadel.org.v2.DeleteOrganizationRequest}
 */
proto.zitadel.org.v2.DeleteOrganizationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.org.v2.DeleteOrganizationRequest;
  return proto.zitadel.org.v2.DeleteOrganizationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.org.v2.DeleteOrganizationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.org.v2.DeleteOrganizationRequest}
 */
proto.zitadel.org.v2.DeleteOrganizationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganizationId(value);
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
proto.zitadel.org.v2.DeleteOrganizationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.org.v2.DeleteOrganizationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.org.v2.DeleteOrganizationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2.DeleteOrganizationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrganizationId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string organization_id = 1;
 * @return {string}
 */
proto.zitadel.org.v2.DeleteOrganizationRequest.prototype.getOrganizationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.org.v2.DeleteOrganizationRequest} returns this
 */
proto.zitadel.org.v2.DeleteOrganizationRequest.prototype.setOrganizationId = function(value) {
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
proto.zitadel.org.v2.DeleteOrganizationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.org.v2.DeleteOrganizationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.org.v2.DeleteOrganizationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2.DeleteOrganizationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
deletionDate: (f = msg.getDeletionDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.org.v2.DeleteOrganizationResponse}
 */
proto.zitadel.org.v2.DeleteOrganizationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.org.v2.DeleteOrganizationResponse;
  return proto.zitadel.org.v2.DeleteOrganizationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.org.v2.DeleteOrganizationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.org.v2.DeleteOrganizationResponse}
 */
proto.zitadel.org.v2.DeleteOrganizationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDeletionDate(value);
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
proto.zitadel.org.v2.DeleteOrganizationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.org.v2.DeleteOrganizationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.org.v2.DeleteOrganizationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2.DeleteOrganizationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDeletionDate();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Timestamp deletion_date = 1;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.zitadel.org.v2.DeleteOrganizationResponse.prototype.getDeletionDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.zitadel.org.v2.DeleteOrganizationResponse} returns this
*/
proto.zitadel.org.v2.DeleteOrganizationResponse.prototype.setDeletionDate = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.org.v2.DeleteOrganizationResponse} returns this
 */
proto.zitadel.org.v2.DeleteOrganizationResponse.prototype.clearDeletionDate = function() {
  return this.setDeletionDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.org.v2.DeleteOrganizationResponse.prototype.hasDeletionDate = function() {
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
proto.zitadel.org.v2.DeactivateOrganizationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.org.v2.DeactivateOrganizationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.org.v2.DeactivateOrganizationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2.DeactivateOrganizationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
organizationId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.zitadel.org.v2.DeactivateOrganizationRequest}
 */
proto.zitadel.org.v2.DeactivateOrganizationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.org.v2.DeactivateOrganizationRequest;
  return proto.zitadel.org.v2.DeactivateOrganizationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.org.v2.DeactivateOrganizationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.org.v2.DeactivateOrganizationRequest}
 */
proto.zitadel.org.v2.DeactivateOrganizationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganizationId(value);
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
proto.zitadel.org.v2.DeactivateOrganizationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.org.v2.DeactivateOrganizationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.org.v2.DeactivateOrganizationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2.DeactivateOrganizationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrganizationId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string organization_id = 1;
 * @return {string}
 */
proto.zitadel.org.v2.DeactivateOrganizationRequest.prototype.getOrganizationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.org.v2.DeactivateOrganizationRequest} returns this
 */
proto.zitadel.org.v2.DeactivateOrganizationRequest.prototype.setOrganizationId = function(value) {
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
proto.zitadel.org.v2.DeactivateOrganizationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.org.v2.DeactivateOrganizationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.org.v2.DeactivateOrganizationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2.DeactivateOrganizationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
changeDate: (f = msg.getChangeDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.org.v2.DeactivateOrganizationResponse}
 */
proto.zitadel.org.v2.DeactivateOrganizationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.org.v2.DeactivateOrganizationResponse;
  return proto.zitadel.org.v2.DeactivateOrganizationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.org.v2.DeactivateOrganizationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.org.v2.DeactivateOrganizationResponse}
 */
proto.zitadel.org.v2.DeactivateOrganizationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setChangeDate(value);
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
proto.zitadel.org.v2.DeactivateOrganizationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.org.v2.DeactivateOrganizationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.org.v2.DeactivateOrganizationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2.DeactivateOrganizationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChangeDate();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Timestamp change_date = 1;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.zitadel.org.v2.DeactivateOrganizationResponse.prototype.getChangeDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.zitadel.org.v2.DeactivateOrganizationResponse} returns this
*/
proto.zitadel.org.v2.DeactivateOrganizationResponse.prototype.setChangeDate = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.org.v2.DeactivateOrganizationResponse} returns this
 */
proto.zitadel.org.v2.DeactivateOrganizationResponse.prototype.clearChangeDate = function() {
  return this.setChangeDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.org.v2.DeactivateOrganizationResponse.prototype.hasChangeDate = function() {
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
proto.zitadel.org.v2.ActivateOrganizationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.org.v2.ActivateOrganizationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.org.v2.ActivateOrganizationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2.ActivateOrganizationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
organizationId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.zitadel.org.v2.ActivateOrganizationRequest}
 */
proto.zitadel.org.v2.ActivateOrganizationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.org.v2.ActivateOrganizationRequest;
  return proto.zitadel.org.v2.ActivateOrganizationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.org.v2.ActivateOrganizationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.org.v2.ActivateOrganizationRequest}
 */
proto.zitadel.org.v2.ActivateOrganizationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganizationId(value);
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
proto.zitadel.org.v2.ActivateOrganizationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.org.v2.ActivateOrganizationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.org.v2.ActivateOrganizationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2.ActivateOrganizationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrganizationId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string organization_id = 1;
 * @return {string}
 */
proto.zitadel.org.v2.ActivateOrganizationRequest.prototype.getOrganizationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.org.v2.ActivateOrganizationRequest} returns this
 */
proto.zitadel.org.v2.ActivateOrganizationRequest.prototype.setOrganizationId = function(value) {
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
proto.zitadel.org.v2.ActivateOrganizationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.org.v2.ActivateOrganizationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.org.v2.ActivateOrganizationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2.ActivateOrganizationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
changeDate: (f = msg.getChangeDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.org.v2.ActivateOrganizationResponse}
 */
proto.zitadel.org.v2.ActivateOrganizationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.org.v2.ActivateOrganizationResponse;
  return proto.zitadel.org.v2.ActivateOrganizationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.org.v2.ActivateOrganizationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.org.v2.ActivateOrganizationResponse}
 */
proto.zitadel.org.v2.ActivateOrganizationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setChangeDate(value);
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
proto.zitadel.org.v2.ActivateOrganizationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.org.v2.ActivateOrganizationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.org.v2.ActivateOrganizationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2.ActivateOrganizationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChangeDate();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Timestamp change_date = 1;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.zitadel.org.v2.ActivateOrganizationResponse.prototype.getChangeDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.zitadel.org.v2.ActivateOrganizationResponse} returns this
*/
proto.zitadel.org.v2.ActivateOrganizationResponse.prototype.setChangeDate = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.org.v2.ActivateOrganizationResponse} returns this
 */
proto.zitadel.org.v2.ActivateOrganizationResponse.prototype.clearChangeDate = function() {
  return this.setChangeDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.org.v2.ActivateOrganizationResponse.prototype.hasChangeDate = function() {
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
proto.zitadel.org.v2.AddOrganizationDomainRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.org.v2.AddOrganizationDomainRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.org.v2.AddOrganizationDomainRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2.AddOrganizationDomainRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
organizationId: jspb.Message.getFieldWithDefault(msg, 1, ""),
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
 * @return {!proto.zitadel.org.v2.AddOrganizationDomainRequest}
 */
proto.zitadel.org.v2.AddOrganizationDomainRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.org.v2.AddOrganizationDomainRequest;
  return proto.zitadel.org.v2.AddOrganizationDomainRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.org.v2.AddOrganizationDomainRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.org.v2.AddOrganizationDomainRequest}
 */
proto.zitadel.org.v2.AddOrganizationDomainRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganizationId(value);
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
proto.zitadel.org.v2.AddOrganizationDomainRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.org.v2.AddOrganizationDomainRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.org.v2.AddOrganizationDomainRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2.AddOrganizationDomainRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrganizationId();
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
 * optional string organization_id = 1;
 * @return {string}
 */
proto.zitadel.org.v2.AddOrganizationDomainRequest.prototype.getOrganizationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.org.v2.AddOrganizationDomainRequest} returns this
 */
proto.zitadel.org.v2.AddOrganizationDomainRequest.prototype.setOrganizationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string domain = 2;
 * @return {string}
 */
proto.zitadel.org.v2.AddOrganizationDomainRequest.prototype.getDomain = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.org.v2.AddOrganizationDomainRequest} returns this
 */
proto.zitadel.org.v2.AddOrganizationDomainRequest.prototype.setDomain = function(value) {
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
proto.zitadel.org.v2.AddOrganizationDomainResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.org.v2.AddOrganizationDomainResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.org.v2.AddOrganizationDomainResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2.AddOrganizationDomainResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
creationDate: (f = msg.getCreationDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.org.v2.AddOrganizationDomainResponse}
 */
proto.zitadel.org.v2.AddOrganizationDomainResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.org.v2.AddOrganizationDomainResponse;
  return proto.zitadel.org.v2.AddOrganizationDomainResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.org.v2.AddOrganizationDomainResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.org.v2.AddOrganizationDomainResponse}
 */
proto.zitadel.org.v2.AddOrganizationDomainResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreationDate(value);
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
proto.zitadel.org.v2.AddOrganizationDomainResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.org.v2.AddOrganizationDomainResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.org.v2.AddOrganizationDomainResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2.AddOrganizationDomainResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCreationDate();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Timestamp creation_date = 1;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.zitadel.org.v2.AddOrganizationDomainResponse.prototype.getCreationDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.zitadel.org.v2.AddOrganizationDomainResponse} returns this
*/
proto.zitadel.org.v2.AddOrganizationDomainResponse.prototype.setCreationDate = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.org.v2.AddOrganizationDomainResponse} returns this
 */
proto.zitadel.org.v2.AddOrganizationDomainResponse.prototype.clearCreationDate = function() {
  return this.setCreationDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.org.v2.AddOrganizationDomainResponse.prototype.hasCreationDate = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.org.v2.ListOrganizationDomainsRequest.repeatedFields_ = [3];



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
proto.zitadel.org.v2.ListOrganizationDomainsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.org.v2.ListOrganizationDomainsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.org.v2.ListOrganizationDomainsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2.ListOrganizationDomainsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
organizationId: jspb.Message.getFieldWithDefault(msg, 1, ""),
pagination: (f = msg.getPagination()) && zitadel_filter_v2_filter_pb.PaginationRequest.toObject(includeInstance, f),
filtersList: jspb.Message.toObjectList(msg.getFiltersList(),
    zitadel_org_v2_query_pb.DomainSearchFilter.toObject, includeInstance),
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
 * @return {!proto.zitadel.org.v2.ListOrganizationDomainsRequest}
 */
proto.zitadel.org.v2.ListOrganizationDomainsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.org.v2.ListOrganizationDomainsRequest;
  return proto.zitadel.org.v2.ListOrganizationDomainsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.org.v2.ListOrganizationDomainsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.org.v2.ListOrganizationDomainsRequest}
 */
proto.zitadel.org.v2.ListOrganizationDomainsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganizationId(value);
      break;
    case 2:
      var value = new zitadel_filter_v2_filter_pb.PaginationRequest;
      reader.readMessage(value,zitadel_filter_v2_filter_pb.PaginationRequest.deserializeBinaryFromReader);
      msg.setPagination(value);
      break;
    case 3:
      var value = new zitadel_org_v2_query_pb.DomainSearchFilter;
      reader.readMessage(value,zitadel_org_v2_query_pb.DomainSearchFilter.deserializeBinaryFromReader);
      msg.addFilters(value);
      break;
    case 4:
      var value = /** @type {!proto.zitadel.org.v2.DomainFieldName} */ (reader.readEnum());
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
proto.zitadel.org.v2.ListOrganizationDomainsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.org.v2.ListOrganizationDomainsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.org.v2.ListOrganizationDomainsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2.ListOrganizationDomainsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrganizationId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      zitadel_filter_v2_filter_pb.PaginationRequest.serializeBinaryToWriter
    );
  }
  f = message.getFiltersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      zitadel_org_v2_query_pb.DomainSearchFilter.serializeBinaryToWriter
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
 * optional string organization_id = 1;
 * @return {string}
 */
proto.zitadel.org.v2.ListOrganizationDomainsRequest.prototype.getOrganizationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.org.v2.ListOrganizationDomainsRequest} returns this
 */
proto.zitadel.org.v2.ListOrganizationDomainsRequest.prototype.setOrganizationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional zitadel.filter.v2.PaginationRequest pagination = 2;
 * @return {?proto.zitadel.filter.v2.PaginationRequest}
 */
proto.zitadel.org.v2.ListOrganizationDomainsRequest.prototype.getPagination = function() {
  return /** @type{?proto.zitadel.filter.v2.PaginationRequest} */ (
    jspb.Message.getWrapperField(this, zitadel_filter_v2_filter_pb.PaginationRequest, 2));
};


/**
 * @param {?proto.zitadel.filter.v2.PaginationRequest|undefined} value
 * @return {!proto.zitadel.org.v2.ListOrganizationDomainsRequest} returns this
*/
proto.zitadel.org.v2.ListOrganizationDomainsRequest.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.org.v2.ListOrganizationDomainsRequest} returns this
 */
proto.zitadel.org.v2.ListOrganizationDomainsRequest.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.org.v2.ListOrganizationDomainsRequest.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated DomainSearchFilter filters = 3;
 * @return {!Array<!proto.zitadel.org.v2.DomainSearchFilter>}
 */
proto.zitadel.org.v2.ListOrganizationDomainsRequest.prototype.getFiltersList = function() {
  return /** @type{!Array<!proto.zitadel.org.v2.DomainSearchFilter>} */ (
    jspb.Message.getRepeatedWrapperField(this, zitadel_org_v2_query_pb.DomainSearchFilter, 3));
};


/**
 * @param {!Array<!proto.zitadel.org.v2.DomainSearchFilter>} value
 * @return {!proto.zitadel.org.v2.ListOrganizationDomainsRequest} returns this
*/
proto.zitadel.org.v2.ListOrganizationDomainsRequest.prototype.setFiltersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.zitadel.org.v2.DomainSearchFilter=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zitadel.org.v2.DomainSearchFilter}
 */
proto.zitadel.org.v2.ListOrganizationDomainsRequest.prototype.addFilters = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.zitadel.org.v2.DomainSearchFilter, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.org.v2.ListOrganizationDomainsRequest} returns this
 */
proto.zitadel.org.v2.ListOrganizationDomainsRequest.prototype.clearFiltersList = function() {
  return this.setFiltersList([]);
};


/**
 * optional DomainFieldName sorting_column = 4;
 * @return {!proto.zitadel.org.v2.DomainFieldName}
 */
proto.zitadel.org.v2.ListOrganizationDomainsRequest.prototype.getSortingColumn = function() {
  return /** @type {!proto.zitadel.org.v2.DomainFieldName} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.zitadel.org.v2.DomainFieldName} value
 * @return {!proto.zitadel.org.v2.ListOrganizationDomainsRequest} returns this
 */
proto.zitadel.org.v2.ListOrganizationDomainsRequest.prototype.setSortingColumn = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.org.v2.ListOrganizationDomainsResponse.repeatedFields_ = [2];



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
proto.zitadel.org.v2.ListOrganizationDomainsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.org.v2.ListOrganizationDomainsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.org.v2.ListOrganizationDomainsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2.ListOrganizationDomainsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
pagination: (f = msg.getPagination()) && zitadel_filter_v2_filter_pb.PaginationResponse.toObject(includeInstance, f),
domainsList: jspb.Message.toObjectList(msg.getDomainsList(),
    zitadel_org_v2_org_pb.Domain.toObject, includeInstance)
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
 * @return {!proto.zitadel.org.v2.ListOrganizationDomainsResponse}
 */
proto.zitadel.org.v2.ListOrganizationDomainsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.org.v2.ListOrganizationDomainsResponse;
  return proto.zitadel.org.v2.ListOrganizationDomainsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.org.v2.ListOrganizationDomainsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.org.v2.ListOrganizationDomainsResponse}
 */
proto.zitadel.org.v2.ListOrganizationDomainsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_filter_v2_filter_pb.PaginationResponse;
      reader.readMessage(value,zitadel_filter_v2_filter_pb.PaginationResponse.deserializeBinaryFromReader);
      msg.setPagination(value);
      break;
    case 2:
      var value = new zitadel_org_v2_org_pb.Domain;
      reader.readMessage(value,zitadel_org_v2_org_pb.Domain.deserializeBinaryFromReader);
      msg.addDomains(value);
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
proto.zitadel.org.v2.ListOrganizationDomainsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.org.v2.ListOrganizationDomainsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.org.v2.ListOrganizationDomainsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2.ListOrganizationDomainsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_filter_v2_filter_pb.PaginationResponse.serializeBinaryToWriter
    );
  }
  f = message.getDomainsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      zitadel_org_v2_org_pb.Domain.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.filter.v2.PaginationResponse pagination = 1;
 * @return {?proto.zitadel.filter.v2.PaginationResponse}
 */
proto.zitadel.org.v2.ListOrganizationDomainsResponse.prototype.getPagination = function() {
  return /** @type{?proto.zitadel.filter.v2.PaginationResponse} */ (
    jspb.Message.getWrapperField(this, zitadel_filter_v2_filter_pb.PaginationResponse, 1));
};


/**
 * @param {?proto.zitadel.filter.v2.PaginationResponse|undefined} value
 * @return {!proto.zitadel.org.v2.ListOrganizationDomainsResponse} returns this
*/
proto.zitadel.org.v2.ListOrganizationDomainsResponse.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.org.v2.ListOrganizationDomainsResponse} returns this
 */
proto.zitadel.org.v2.ListOrganizationDomainsResponse.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.org.v2.ListOrganizationDomainsResponse.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Domain domains = 2;
 * @return {!Array<!proto.zitadel.org.v2.Domain>}
 */
proto.zitadel.org.v2.ListOrganizationDomainsResponse.prototype.getDomainsList = function() {
  return /** @type{!Array<!proto.zitadel.org.v2.Domain>} */ (
    jspb.Message.getRepeatedWrapperField(this, zitadel_org_v2_org_pb.Domain, 2));
};


/**
 * @param {!Array<!proto.zitadel.org.v2.Domain>} value
 * @return {!proto.zitadel.org.v2.ListOrganizationDomainsResponse} returns this
*/
proto.zitadel.org.v2.ListOrganizationDomainsResponse.prototype.setDomainsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.zitadel.org.v2.Domain=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zitadel.org.v2.Domain}
 */
proto.zitadel.org.v2.ListOrganizationDomainsResponse.prototype.addDomains = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.zitadel.org.v2.Domain, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.org.v2.ListOrganizationDomainsResponse} returns this
 */
proto.zitadel.org.v2.ListOrganizationDomainsResponse.prototype.clearDomainsList = function() {
  return this.setDomainsList([]);
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
proto.zitadel.org.v2.DeleteOrganizationDomainRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.org.v2.DeleteOrganizationDomainRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.org.v2.DeleteOrganizationDomainRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2.DeleteOrganizationDomainRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
organizationId: jspb.Message.getFieldWithDefault(msg, 1, ""),
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
 * @return {!proto.zitadel.org.v2.DeleteOrganizationDomainRequest}
 */
proto.zitadel.org.v2.DeleteOrganizationDomainRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.org.v2.DeleteOrganizationDomainRequest;
  return proto.zitadel.org.v2.DeleteOrganizationDomainRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.org.v2.DeleteOrganizationDomainRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.org.v2.DeleteOrganizationDomainRequest}
 */
proto.zitadel.org.v2.DeleteOrganizationDomainRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganizationId(value);
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
proto.zitadel.org.v2.DeleteOrganizationDomainRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.org.v2.DeleteOrganizationDomainRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.org.v2.DeleteOrganizationDomainRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2.DeleteOrganizationDomainRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrganizationId();
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
 * optional string organization_id = 1;
 * @return {string}
 */
proto.zitadel.org.v2.DeleteOrganizationDomainRequest.prototype.getOrganizationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.org.v2.DeleteOrganizationDomainRequest} returns this
 */
proto.zitadel.org.v2.DeleteOrganizationDomainRequest.prototype.setOrganizationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string domain = 2;
 * @return {string}
 */
proto.zitadel.org.v2.DeleteOrganizationDomainRequest.prototype.getDomain = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.org.v2.DeleteOrganizationDomainRequest} returns this
 */
proto.zitadel.org.v2.DeleteOrganizationDomainRequest.prototype.setDomain = function(value) {
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
proto.zitadel.org.v2.DeleteOrganizationDomainResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.org.v2.DeleteOrganizationDomainResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.org.v2.DeleteOrganizationDomainResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2.DeleteOrganizationDomainResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
deletionDate: (f = msg.getDeletionDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.org.v2.DeleteOrganizationDomainResponse}
 */
proto.zitadel.org.v2.DeleteOrganizationDomainResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.org.v2.DeleteOrganizationDomainResponse;
  return proto.zitadel.org.v2.DeleteOrganizationDomainResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.org.v2.DeleteOrganizationDomainResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.org.v2.DeleteOrganizationDomainResponse}
 */
proto.zitadel.org.v2.DeleteOrganizationDomainResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDeletionDate(value);
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
proto.zitadel.org.v2.DeleteOrganizationDomainResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.org.v2.DeleteOrganizationDomainResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.org.v2.DeleteOrganizationDomainResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2.DeleteOrganizationDomainResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDeletionDate();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Timestamp deletion_date = 1;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.zitadel.org.v2.DeleteOrganizationDomainResponse.prototype.getDeletionDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.zitadel.org.v2.DeleteOrganizationDomainResponse} returns this
*/
proto.zitadel.org.v2.DeleteOrganizationDomainResponse.prototype.setDeletionDate = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.org.v2.DeleteOrganizationDomainResponse} returns this
 */
proto.zitadel.org.v2.DeleteOrganizationDomainResponse.prototype.clearDeletionDate = function() {
  return this.setDeletionDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.org.v2.DeleteOrganizationDomainResponse.prototype.hasDeletionDate = function() {
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
proto.zitadel.org.v2.GenerateOrganizationDomainValidationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.org.v2.GenerateOrganizationDomainValidationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.org.v2.GenerateOrganizationDomainValidationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2.GenerateOrganizationDomainValidationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
organizationId: jspb.Message.getFieldWithDefault(msg, 1, ""),
domain: jspb.Message.getFieldWithDefault(msg, 2, ""),
type: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.zitadel.org.v2.GenerateOrganizationDomainValidationRequest}
 */
proto.zitadel.org.v2.GenerateOrganizationDomainValidationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.org.v2.GenerateOrganizationDomainValidationRequest;
  return proto.zitadel.org.v2.GenerateOrganizationDomainValidationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.org.v2.GenerateOrganizationDomainValidationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.org.v2.GenerateOrganizationDomainValidationRequest}
 */
proto.zitadel.org.v2.GenerateOrganizationDomainValidationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganizationId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDomain(value);
      break;
    case 3:
      var value = /** @type {!proto.zitadel.org.v2.DomainValidationType} */ (reader.readEnum());
      msg.setType(value);
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
proto.zitadel.org.v2.GenerateOrganizationDomainValidationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.org.v2.GenerateOrganizationDomainValidationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.org.v2.GenerateOrganizationDomainValidationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2.GenerateOrganizationDomainValidationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrganizationId();
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
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * optional string organization_id = 1;
 * @return {string}
 */
proto.zitadel.org.v2.GenerateOrganizationDomainValidationRequest.prototype.getOrganizationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.org.v2.GenerateOrganizationDomainValidationRequest} returns this
 */
proto.zitadel.org.v2.GenerateOrganizationDomainValidationRequest.prototype.setOrganizationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string domain = 2;
 * @return {string}
 */
proto.zitadel.org.v2.GenerateOrganizationDomainValidationRequest.prototype.getDomain = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.org.v2.GenerateOrganizationDomainValidationRequest} returns this
 */
proto.zitadel.org.v2.GenerateOrganizationDomainValidationRequest.prototype.setDomain = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional DomainValidationType type = 3;
 * @return {!proto.zitadel.org.v2.DomainValidationType}
 */
proto.zitadel.org.v2.GenerateOrganizationDomainValidationRequest.prototype.getType = function() {
  return /** @type {!proto.zitadel.org.v2.DomainValidationType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.zitadel.org.v2.DomainValidationType} value
 * @return {!proto.zitadel.org.v2.GenerateOrganizationDomainValidationRequest} returns this
 */
proto.zitadel.org.v2.GenerateOrganizationDomainValidationRequest.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
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
proto.zitadel.org.v2.GenerateOrganizationDomainValidationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.org.v2.GenerateOrganizationDomainValidationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.org.v2.GenerateOrganizationDomainValidationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2.GenerateOrganizationDomainValidationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
token: jspb.Message.getFieldWithDefault(msg, 1, ""),
url: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.zitadel.org.v2.GenerateOrganizationDomainValidationResponse}
 */
proto.zitadel.org.v2.GenerateOrganizationDomainValidationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.org.v2.GenerateOrganizationDomainValidationResponse;
  return proto.zitadel.org.v2.GenerateOrganizationDomainValidationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.org.v2.GenerateOrganizationDomainValidationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.org.v2.GenerateOrganizationDomainValidationResponse}
 */
proto.zitadel.org.v2.GenerateOrganizationDomainValidationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
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
proto.zitadel.org.v2.GenerateOrganizationDomainValidationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.org.v2.GenerateOrganizationDomainValidationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.org.v2.GenerateOrganizationDomainValidationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2.GenerateOrganizationDomainValidationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string token = 1;
 * @return {string}
 */
proto.zitadel.org.v2.GenerateOrganizationDomainValidationResponse.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.org.v2.GenerateOrganizationDomainValidationResponse} returns this
 */
proto.zitadel.org.v2.GenerateOrganizationDomainValidationResponse.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string url = 2;
 * @return {string}
 */
proto.zitadel.org.v2.GenerateOrganizationDomainValidationResponse.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.org.v2.GenerateOrganizationDomainValidationResponse} returns this
 */
proto.zitadel.org.v2.GenerateOrganizationDomainValidationResponse.prototype.setUrl = function(value) {
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
proto.zitadel.org.v2.VerifyOrganizationDomainRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.org.v2.VerifyOrganizationDomainRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.org.v2.VerifyOrganizationDomainRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2.VerifyOrganizationDomainRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
organizationId: jspb.Message.getFieldWithDefault(msg, 1, ""),
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
 * @return {!proto.zitadel.org.v2.VerifyOrganizationDomainRequest}
 */
proto.zitadel.org.v2.VerifyOrganizationDomainRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.org.v2.VerifyOrganizationDomainRequest;
  return proto.zitadel.org.v2.VerifyOrganizationDomainRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.org.v2.VerifyOrganizationDomainRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.org.v2.VerifyOrganizationDomainRequest}
 */
proto.zitadel.org.v2.VerifyOrganizationDomainRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganizationId(value);
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
proto.zitadel.org.v2.VerifyOrganizationDomainRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.org.v2.VerifyOrganizationDomainRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.org.v2.VerifyOrganizationDomainRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2.VerifyOrganizationDomainRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrganizationId();
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
 * optional string organization_id = 1;
 * @return {string}
 */
proto.zitadel.org.v2.VerifyOrganizationDomainRequest.prototype.getOrganizationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.org.v2.VerifyOrganizationDomainRequest} returns this
 */
proto.zitadel.org.v2.VerifyOrganizationDomainRequest.prototype.setOrganizationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string domain = 2;
 * @return {string}
 */
proto.zitadel.org.v2.VerifyOrganizationDomainRequest.prototype.getDomain = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.org.v2.VerifyOrganizationDomainRequest} returns this
 */
proto.zitadel.org.v2.VerifyOrganizationDomainRequest.prototype.setDomain = function(value) {
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
proto.zitadel.org.v2.VerifyOrganizationDomainResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.org.v2.VerifyOrganizationDomainResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.org.v2.VerifyOrganizationDomainResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2.VerifyOrganizationDomainResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
changeDate: (f = msg.getChangeDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.org.v2.VerifyOrganizationDomainResponse}
 */
proto.zitadel.org.v2.VerifyOrganizationDomainResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.org.v2.VerifyOrganizationDomainResponse;
  return proto.zitadel.org.v2.VerifyOrganizationDomainResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.org.v2.VerifyOrganizationDomainResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.org.v2.VerifyOrganizationDomainResponse}
 */
proto.zitadel.org.v2.VerifyOrganizationDomainResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setChangeDate(value);
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
proto.zitadel.org.v2.VerifyOrganizationDomainResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.org.v2.VerifyOrganizationDomainResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.org.v2.VerifyOrganizationDomainResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2.VerifyOrganizationDomainResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChangeDate();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Timestamp change_date = 1;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.zitadel.org.v2.VerifyOrganizationDomainResponse.prototype.getChangeDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.zitadel.org.v2.VerifyOrganizationDomainResponse} returns this
*/
proto.zitadel.org.v2.VerifyOrganizationDomainResponse.prototype.setChangeDate = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.org.v2.VerifyOrganizationDomainResponse} returns this
 */
proto.zitadel.org.v2.VerifyOrganizationDomainResponse.prototype.clearChangeDate = function() {
  return this.setChangeDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.org.v2.VerifyOrganizationDomainResponse.prototype.hasChangeDate = function() {
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
proto.zitadel.org.v2.Metadata.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.org.v2.Metadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.org.v2.Metadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2.Metadata.toObject = function(includeInstance, msg) {
  var f, obj = {
key: jspb.Message.getFieldWithDefault(msg, 1, ""),
value: msg.getValue_asB64()
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
 * @return {!proto.zitadel.org.v2.Metadata}
 */
proto.zitadel.org.v2.Metadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.org.v2.Metadata;
  return proto.zitadel.org.v2.Metadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.org.v2.Metadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.org.v2.Metadata}
 */
proto.zitadel.org.v2.Metadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setValue(value);
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
proto.zitadel.org.v2.Metadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.org.v2.Metadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.org.v2.Metadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2.Metadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getValue_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional string key = 1;
 * @return {string}
 */
proto.zitadel.org.v2.Metadata.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.org.v2.Metadata} returns this
 */
proto.zitadel.org.v2.Metadata.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bytes value = 2;
 * @return {!(string|Uint8Array)}
 */
proto.zitadel.org.v2.Metadata.prototype.getValue = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes value = 2;
 * This is a type-conversion wrapper around `getValue()`
 * @return {string}
 */
proto.zitadel.org.v2.Metadata.prototype.getValue_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getValue()));
};


/**
 * optional bytes value = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getValue()`
 * @return {!Uint8Array}
 */
proto.zitadel.org.v2.Metadata.prototype.getValue_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getValue()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.zitadel.org.v2.Metadata} returns this
 */
proto.zitadel.org.v2.Metadata.prototype.setValue = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.org.v2.SetOrganizationMetadataRequest.repeatedFields_ = [2];



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
proto.zitadel.org.v2.SetOrganizationMetadataRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.org.v2.SetOrganizationMetadataRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.org.v2.SetOrganizationMetadataRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2.SetOrganizationMetadataRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
organizationId: jspb.Message.getFieldWithDefault(msg, 1, ""),
metadataList: jspb.Message.toObjectList(msg.getMetadataList(),
    proto.zitadel.org.v2.Metadata.toObject, includeInstance)
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
 * @return {!proto.zitadel.org.v2.SetOrganizationMetadataRequest}
 */
proto.zitadel.org.v2.SetOrganizationMetadataRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.org.v2.SetOrganizationMetadataRequest;
  return proto.zitadel.org.v2.SetOrganizationMetadataRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.org.v2.SetOrganizationMetadataRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.org.v2.SetOrganizationMetadataRequest}
 */
proto.zitadel.org.v2.SetOrganizationMetadataRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganizationId(value);
      break;
    case 2:
      var value = new proto.zitadel.org.v2.Metadata;
      reader.readMessage(value,proto.zitadel.org.v2.Metadata.deserializeBinaryFromReader);
      msg.addMetadata(value);
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
proto.zitadel.org.v2.SetOrganizationMetadataRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.org.v2.SetOrganizationMetadataRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.org.v2.SetOrganizationMetadataRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2.SetOrganizationMetadataRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrganizationId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMetadataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.zitadel.org.v2.Metadata.serializeBinaryToWriter
    );
  }
};


/**
 * optional string organization_id = 1;
 * @return {string}
 */
proto.zitadel.org.v2.SetOrganizationMetadataRequest.prototype.getOrganizationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.org.v2.SetOrganizationMetadataRequest} returns this
 */
proto.zitadel.org.v2.SetOrganizationMetadataRequest.prototype.setOrganizationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated Metadata metadata = 2;
 * @return {!Array<!proto.zitadel.org.v2.Metadata>}
 */
proto.zitadel.org.v2.SetOrganizationMetadataRequest.prototype.getMetadataList = function() {
  return /** @type{!Array<!proto.zitadel.org.v2.Metadata>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.zitadel.org.v2.Metadata, 2));
};


/**
 * @param {!Array<!proto.zitadel.org.v2.Metadata>} value
 * @return {!proto.zitadel.org.v2.SetOrganizationMetadataRequest} returns this
*/
proto.zitadel.org.v2.SetOrganizationMetadataRequest.prototype.setMetadataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.zitadel.org.v2.Metadata=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zitadel.org.v2.Metadata}
 */
proto.zitadel.org.v2.SetOrganizationMetadataRequest.prototype.addMetadata = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.zitadel.org.v2.Metadata, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.org.v2.SetOrganizationMetadataRequest} returns this
 */
proto.zitadel.org.v2.SetOrganizationMetadataRequest.prototype.clearMetadataList = function() {
  return this.setMetadataList([]);
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
proto.zitadel.org.v2.SetOrganizationMetadataResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.org.v2.SetOrganizationMetadataResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.org.v2.SetOrganizationMetadataResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2.SetOrganizationMetadataResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
setDate: (f = msg.getSetDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.org.v2.SetOrganizationMetadataResponse}
 */
proto.zitadel.org.v2.SetOrganizationMetadataResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.org.v2.SetOrganizationMetadataResponse;
  return proto.zitadel.org.v2.SetOrganizationMetadataResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.org.v2.SetOrganizationMetadataResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.org.v2.SetOrganizationMetadataResponse}
 */
proto.zitadel.org.v2.SetOrganizationMetadataResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setSetDate(value);
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
proto.zitadel.org.v2.SetOrganizationMetadataResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.org.v2.SetOrganizationMetadataResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.org.v2.SetOrganizationMetadataResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2.SetOrganizationMetadataResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSetDate();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Timestamp set_date = 1;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.zitadel.org.v2.SetOrganizationMetadataResponse.prototype.getSetDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.zitadel.org.v2.SetOrganizationMetadataResponse} returns this
*/
proto.zitadel.org.v2.SetOrganizationMetadataResponse.prototype.setSetDate = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.org.v2.SetOrganizationMetadataResponse} returns this
 */
proto.zitadel.org.v2.SetOrganizationMetadataResponse.prototype.clearSetDate = function() {
  return this.setSetDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.org.v2.SetOrganizationMetadataResponse.prototype.hasSetDate = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.org.v2.ListOrganizationMetadataRequest.repeatedFields_ = [3];



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
proto.zitadel.org.v2.ListOrganizationMetadataRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.org.v2.ListOrganizationMetadataRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.org.v2.ListOrganizationMetadataRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2.ListOrganizationMetadataRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
organizationId: jspb.Message.getFieldWithDefault(msg, 1, ""),
pagination: (f = msg.getPagination()) && zitadel_filter_v2_filter_pb.PaginationRequest.toObject(includeInstance, f),
filtersList: jspb.Message.toObjectList(msg.getFiltersList(),
    zitadel_metadata_v2_metadata_pb.MetadataSearchFilter.toObject, includeInstance)
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
 * @return {!proto.zitadel.org.v2.ListOrganizationMetadataRequest}
 */
proto.zitadel.org.v2.ListOrganizationMetadataRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.org.v2.ListOrganizationMetadataRequest;
  return proto.zitadel.org.v2.ListOrganizationMetadataRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.org.v2.ListOrganizationMetadataRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.org.v2.ListOrganizationMetadataRequest}
 */
proto.zitadel.org.v2.ListOrganizationMetadataRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganizationId(value);
      break;
    case 2:
      var value = new zitadel_filter_v2_filter_pb.PaginationRequest;
      reader.readMessage(value,zitadel_filter_v2_filter_pb.PaginationRequest.deserializeBinaryFromReader);
      msg.setPagination(value);
      break;
    case 3:
      var value = new zitadel_metadata_v2_metadata_pb.MetadataSearchFilter;
      reader.readMessage(value,zitadel_metadata_v2_metadata_pb.MetadataSearchFilter.deserializeBinaryFromReader);
      msg.addFilters(value);
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
proto.zitadel.org.v2.ListOrganizationMetadataRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.org.v2.ListOrganizationMetadataRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.org.v2.ListOrganizationMetadataRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2.ListOrganizationMetadataRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrganizationId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      zitadel_filter_v2_filter_pb.PaginationRequest.serializeBinaryToWriter
    );
  }
  f = message.getFiltersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      zitadel_metadata_v2_metadata_pb.MetadataSearchFilter.serializeBinaryToWriter
    );
  }
};


/**
 * optional string organization_id = 1;
 * @return {string}
 */
proto.zitadel.org.v2.ListOrganizationMetadataRequest.prototype.getOrganizationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.org.v2.ListOrganizationMetadataRequest} returns this
 */
proto.zitadel.org.v2.ListOrganizationMetadataRequest.prototype.setOrganizationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional zitadel.filter.v2.PaginationRequest pagination = 2;
 * @return {?proto.zitadel.filter.v2.PaginationRequest}
 */
proto.zitadel.org.v2.ListOrganizationMetadataRequest.prototype.getPagination = function() {
  return /** @type{?proto.zitadel.filter.v2.PaginationRequest} */ (
    jspb.Message.getWrapperField(this, zitadel_filter_v2_filter_pb.PaginationRequest, 2));
};


/**
 * @param {?proto.zitadel.filter.v2.PaginationRequest|undefined} value
 * @return {!proto.zitadel.org.v2.ListOrganizationMetadataRequest} returns this
*/
proto.zitadel.org.v2.ListOrganizationMetadataRequest.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.org.v2.ListOrganizationMetadataRequest} returns this
 */
proto.zitadel.org.v2.ListOrganizationMetadataRequest.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.org.v2.ListOrganizationMetadataRequest.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated zitadel.metadata.v2.MetadataSearchFilter filters = 3;
 * @return {!Array<!proto.zitadel.metadata.v2.MetadataSearchFilter>}
 */
proto.zitadel.org.v2.ListOrganizationMetadataRequest.prototype.getFiltersList = function() {
  return /** @type{!Array<!proto.zitadel.metadata.v2.MetadataSearchFilter>} */ (
    jspb.Message.getRepeatedWrapperField(this, zitadel_metadata_v2_metadata_pb.MetadataSearchFilter, 3));
};


/**
 * @param {!Array<!proto.zitadel.metadata.v2.MetadataSearchFilter>} value
 * @return {!proto.zitadel.org.v2.ListOrganizationMetadataRequest} returns this
*/
proto.zitadel.org.v2.ListOrganizationMetadataRequest.prototype.setFiltersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.zitadel.metadata.v2.MetadataSearchFilter=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zitadel.metadata.v2.MetadataSearchFilter}
 */
proto.zitadel.org.v2.ListOrganizationMetadataRequest.prototype.addFilters = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.zitadel.metadata.v2.MetadataSearchFilter, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.org.v2.ListOrganizationMetadataRequest} returns this
 */
proto.zitadel.org.v2.ListOrganizationMetadataRequest.prototype.clearFiltersList = function() {
  return this.setFiltersList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.org.v2.ListOrganizationMetadataResponse.repeatedFields_ = [2];



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
proto.zitadel.org.v2.ListOrganizationMetadataResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.org.v2.ListOrganizationMetadataResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.org.v2.ListOrganizationMetadataResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2.ListOrganizationMetadataResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
pagination: (f = msg.getPagination()) && zitadel_filter_v2_filter_pb.PaginationResponse.toObject(includeInstance, f),
metadataList: jspb.Message.toObjectList(msg.getMetadataList(),
    zitadel_metadata_v2_metadata_pb.Metadata.toObject, includeInstance)
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
 * @return {!proto.zitadel.org.v2.ListOrganizationMetadataResponse}
 */
proto.zitadel.org.v2.ListOrganizationMetadataResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.org.v2.ListOrganizationMetadataResponse;
  return proto.zitadel.org.v2.ListOrganizationMetadataResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.org.v2.ListOrganizationMetadataResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.org.v2.ListOrganizationMetadataResponse}
 */
proto.zitadel.org.v2.ListOrganizationMetadataResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_filter_v2_filter_pb.PaginationResponse;
      reader.readMessage(value,zitadel_filter_v2_filter_pb.PaginationResponse.deserializeBinaryFromReader);
      msg.setPagination(value);
      break;
    case 2:
      var value = new zitadel_metadata_v2_metadata_pb.Metadata;
      reader.readMessage(value,zitadel_metadata_v2_metadata_pb.Metadata.deserializeBinaryFromReader);
      msg.addMetadata(value);
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
proto.zitadel.org.v2.ListOrganizationMetadataResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.org.v2.ListOrganizationMetadataResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.org.v2.ListOrganizationMetadataResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2.ListOrganizationMetadataResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_filter_v2_filter_pb.PaginationResponse.serializeBinaryToWriter
    );
  }
  f = message.getMetadataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      zitadel_metadata_v2_metadata_pb.Metadata.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.filter.v2.PaginationResponse pagination = 1;
 * @return {?proto.zitadel.filter.v2.PaginationResponse}
 */
proto.zitadel.org.v2.ListOrganizationMetadataResponse.prototype.getPagination = function() {
  return /** @type{?proto.zitadel.filter.v2.PaginationResponse} */ (
    jspb.Message.getWrapperField(this, zitadel_filter_v2_filter_pb.PaginationResponse, 1));
};


/**
 * @param {?proto.zitadel.filter.v2.PaginationResponse|undefined} value
 * @return {!proto.zitadel.org.v2.ListOrganizationMetadataResponse} returns this
*/
proto.zitadel.org.v2.ListOrganizationMetadataResponse.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.org.v2.ListOrganizationMetadataResponse} returns this
 */
proto.zitadel.org.v2.ListOrganizationMetadataResponse.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.org.v2.ListOrganizationMetadataResponse.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated zitadel.metadata.v2.Metadata metadata = 2;
 * @return {!Array<!proto.zitadel.metadata.v2.Metadata>}
 */
proto.zitadel.org.v2.ListOrganizationMetadataResponse.prototype.getMetadataList = function() {
  return /** @type{!Array<!proto.zitadel.metadata.v2.Metadata>} */ (
    jspb.Message.getRepeatedWrapperField(this, zitadel_metadata_v2_metadata_pb.Metadata, 2));
};


/**
 * @param {!Array<!proto.zitadel.metadata.v2.Metadata>} value
 * @return {!proto.zitadel.org.v2.ListOrganizationMetadataResponse} returns this
*/
proto.zitadel.org.v2.ListOrganizationMetadataResponse.prototype.setMetadataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.zitadel.metadata.v2.Metadata=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zitadel.metadata.v2.Metadata}
 */
proto.zitadel.org.v2.ListOrganizationMetadataResponse.prototype.addMetadata = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.zitadel.metadata.v2.Metadata, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.org.v2.ListOrganizationMetadataResponse} returns this
 */
proto.zitadel.org.v2.ListOrganizationMetadataResponse.prototype.clearMetadataList = function() {
  return this.setMetadataList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.org.v2.DeleteOrganizationMetadataRequest.repeatedFields_ = [2];



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
proto.zitadel.org.v2.DeleteOrganizationMetadataRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.org.v2.DeleteOrganizationMetadataRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.org.v2.DeleteOrganizationMetadataRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2.DeleteOrganizationMetadataRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
organizationId: jspb.Message.getFieldWithDefault(msg, 1, ""),
keysList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.zitadel.org.v2.DeleteOrganizationMetadataRequest}
 */
proto.zitadel.org.v2.DeleteOrganizationMetadataRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.org.v2.DeleteOrganizationMetadataRequest;
  return proto.zitadel.org.v2.DeleteOrganizationMetadataRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.org.v2.DeleteOrganizationMetadataRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.org.v2.DeleteOrganizationMetadataRequest}
 */
proto.zitadel.org.v2.DeleteOrganizationMetadataRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganizationId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addKeys(value);
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
proto.zitadel.org.v2.DeleteOrganizationMetadataRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.org.v2.DeleteOrganizationMetadataRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.org.v2.DeleteOrganizationMetadataRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2.DeleteOrganizationMetadataRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrganizationId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getKeysList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * optional string organization_id = 1;
 * @return {string}
 */
proto.zitadel.org.v2.DeleteOrganizationMetadataRequest.prototype.getOrganizationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.org.v2.DeleteOrganizationMetadataRequest} returns this
 */
proto.zitadel.org.v2.DeleteOrganizationMetadataRequest.prototype.setOrganizationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string keys = 2;
 * @return {!Array<string>}
 */
proto.zitadel.org.v2.DeleteOrganizationMetadataRequest.prototype.getKeysList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.zitadel.org.v2.DeleteOrganizationMetadataRequest} returns this
 */
proto.zitadel.org.v2.DeleteOrganizationMetadataRequest.prototype.setKeysList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.zitadel.org.v2.DeleteOrganizationMetadataRequest} returns this
 */
proto.zitadel.org.v2.DeleteOrganizationMetadataRequest.prototype.addKeys = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.org.v2.DeleteOrganizationMetadataRequest} returns this
 */
proto.zitadel.org.v2.DeleteOrganizationMetadataRequest.prototype.clearKeysList = function() {
  return this.setKeysList([]);
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
proto.zitadel.org.v2.DeleteOrganizationMetadataResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.org.v2.DeleteOrganizationMetadataResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.org.v2.DeleteOrganizationMetadataResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2.DeleteOrganizationMetadataResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
deletionDate: (f = msg.getDeletionDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.org.v2.DeleteOrganizationMetadataResponse}
 */
proto.zitadel.org.v2.DeleteOrganizationMetadataResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.org.v2.DeleteOrganizationMetadataResponse;
  return proto.zitadel.org.v2.DeleteOrganizationMetadataResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.org.v2.DeleteOrganizationMetadataResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.org.v2.DeleteOrganizationMetadataResponse}
 */
proto.zitadel.org.v2.DeleteOrganizationMetadataResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDeletionDate(value);
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
proto.zitadel.org.v2.DeleteOrganizationMetadataResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.org.v2.DeleteOrganizationMetadataResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.org.v2.DeleteOrganizationMetadataResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2.DeleteOrganizationMetadataResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDeletionDate();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Timestamp deletion_date = 1;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.zitadel.org.v2.DeleteOrganizationMetadataResponse.prototype.getDeletionDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.zitadel.org.v2.DeleteOrganizationMetadataResponse} returns this
*/
proto.zitadel.org.v2.DeleteOrganizationMetadataResponse.prototype.setDeletionDate = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.org.v2.DeleteOrganizationMetadataResponse} returns this
 */
proto.zitadel.org.v2.DeleteOrganizationMetadataResponse.prototype.clearDeletionDate = function() {
  return this.setDeletionDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.org.v2.DeleteOrganizationMetadataResponse.prototype.hasDeletionDate = function() {
  return jspb.Message.getField(this, 1) != null;
};


goog.object.extend(exports, proto.zitadel.org.v2);
