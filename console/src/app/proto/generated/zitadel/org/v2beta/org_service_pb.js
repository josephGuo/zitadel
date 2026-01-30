// source: zitadel/org/v2beta/org_service.proto
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

var zitadel_object_v2beta_object_pb = require('../../../zitadel/object/v2beta/object_pb.js');
goog.object.extend(proto, zitadel_object_v2beta_object_pb);
var zitadel_protoc_gen_zitadel_v2_options_pb = require('../../../zitadel/protoc_gen_zitadel/v2/options_pb.js');
goog.object.extend(proto, zitadel_protoc_gen_zitadel_v2_options_pb);
var zitadel_user_v2beta_auth_pb = require('../../../zitadel/user/v2beta/auth_pb.js');
goog.object.extend(proto, zitadel_user_v2beta_auth_pb);
var zitadel_org_v2beta_org_pb = require('../../../zitadel/org/v2beta/org_pb.js');
goog.object.extend(proto, zitadel_org_v2beta_org_pb);
var zitadel_metadata_v2beta_metadata_pb = require('../../../zitadel/metadata/v2beta/metadata_pb.js');
goog.object.extend(proto, zitadel_metadata_v2beta_metadata_pb);
var zitadel_user_v2beta_user_service_pb = require('../../../zitadel/user/v2beta/user_service_pb.js');
goog.object.extend(proto, zitadel_user_v2beta_user_service_pb);
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
var google_api_field_behavior_pb = require('../../../google/api/field_behavior_pb.js');
goog.object.extend(proto, google_api_field_behavior_pb);
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
goog.object.extend(proto, google_protobuf_struct_pb);
var protoc$gen$openapiv2_options_annotations_pb = require('../../../protoc-gen-openapiv2/options/annotations_pb.js');
goog.object.extend(proto, protoc$gen$openapiv2_options_annotations_pb);
var validate_validate_pb = require('../../../validate/validate_pb.js');
goog.object.extend(proto, validate_validate_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var zitadel_filter_v2beta_filter_pb = require('../../../zitadel/filter/v2beta/filter_pb.js');
goog.object.extend(proto, zitadel_filter_v2beta_filter_pb);
goog.exportSymbol('proto.zitadel.org.v2beta.ActivateOrganizationRequest', null, global);
goog.exportSymbol('proto.zitadel.org.v2beta.ActivateOrganizationResponse', null, global);
goog.exportSymbol('proto.zitadel.org.v2beta.AddOrganizationDomainRequest', null, global);
goog.exportSymbol('proto.zitadel.org.v2beta.AddOrganizationDomainResponse', null, global);
goog.exportSymbol('proto.zitadel.org.v2beta.AssignedAdmin', null, global);
goog.exportSymbol('proto.zitadel.org.v2beta.CreateOrganizationRequest', null, global);
goog.exportSymbol('proto.zitadel.org.v2beta.CreateOrganizationRequest.Admin', null, global);
goog.exportSymbol('proto.zitadel.org.v2beta.CreateOrganizationRequest.Admin.UserTypeCase', null, global);
goog.exportSymbol('proto.zitadel.org.v2beta.CreateOrganizationResponse', null, global);
goog.exportSymbol('proto.zitadel.org.v2beta.CreatedAdmin', null, global);
goog.exportSymbol('proto.zitadel.org.v2beta.DeactivateOrganizationRequest', null, global);
goog.exportSymbol('proto.zitadel.org.v2beta.DeactivateOrganizationResponse', null, global);
goog.exportSymbol('proto.zitadel.org.v2beta.DeleteOrganizationDomainRequest', null, global);
goog.exportSymbol('proto.zitadel.org.v2beta.DeleteOrganizationDomainResponse', null, global);
goog.exportSymbol('proto.zitadel.org.v2beta.DeleteOrganizationMetadataRequest', null, global);
goog.exportSymbol('proto.zitadel.org.v2beta.DeleteOrganizationMetadataResponse', null, global);
goog.exportSymbol('proto.zitadel.org.v2beta.DeleteOrganizationRequest', null, global);
goog.exportSymbol('proto.zitadel.org.v2beta.DeleteOrganizationResponse', null, global);
goog.exportSymbol('proto.zitadel.org.v2beta.GenerateOrganizationDomainValidationRequest', null, global);
goog.exportSymbol('proto.zitadel.org.v2beta.GenerateOrganizationDomainValidationResponse', null, global);
goog.exportSymbol('proto.zitadel.org.v2beta.ListOrganizationDomainsRequest', null, global);
goog.exportSymbol('proto.zitadel.org.v2beta.ListOrganizationDomainsResponse', null, global);
goog.exportSymbol('proto.zitadel.org.v2beta.ListOrganizationMetadataRequest', null, global);
goog.exportSymbol('proto.zitadel.org.v2beta.ListOrganizationMetadataResponse', null, global);
goog.exportSymbol('proto.zitadel.org.v2beta.ListOrganizationsRequest', null, global);
goog.exportSymbol('proto.zitadel.org.v2beta.ListOrganizationsResponse', null, global);
goog.exportSymbol('proto.zitadel.org.v2beta.Metadata', null, global);
goog.exportSymbol('proto.zitadel.org.v2beta.OrganizationAdmin', null, global);
goog.exportSymbol('proto.zitadel.org.v2beta.OrganizationAdmin.OrganizationadminCase', null, global);
goog.exportSymbol('proto.zitadel.org.v2beta.SetOrganizationMetadataRequest', null, global);
goog.exportSymbol('proto.zitadel.org.v2beta.SetOrganizationMetadataResponse', null, global);
goog.exportSymbol('proto.zitadel.org.v2beta.UpdateOrganizationRequest', null, global);
goog.exportSymbol('proto.zitadel.org.v2beta.UpdateOrganizationResponse', null, global);
goog.exportSymbol('proto.zitadel.org.v2beta.VerifyOrganizationDomainRequest', null, global);
goog.exportSymbol('proto.zitadel.org.v2beta.VerifyOrganizationDomainResponse', null, global);
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
proto.zitadel.org.v2beta.CreateOrganizationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.org.v2beta.CreateOrganizationRequest.repeatedFields_, null);
};
goog.inherits(proto.zitadel.org.v2beta.CreateOrganizationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.org.v2beta.CreateOrganizationRequest.displayName = 'proto.zitadel.org.v2beta.CreateOrganizationRequest';
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
proto.zitadel.org.v2beta.CreateOrganizationRequest.Admin = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.org.v2beta.CreateOrganizationRequest.Admin.repeatedFields_, proto.zitadel.org.v2beta.CreateOrganizationRequest.Admin.oneofGroups_);
};
goog.inherits(proto.zitadel.org.v2beta.CreateOrganizationRequest.Admin, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.org.v2beta.CreateOrganizationRequest.Admin.displayName = 'proto.zitadel.org.v2beta.CreateOrganizationRequest.Admin';
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
proto.zitadel.org.v2beta.CreatedAdmin = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.org.v2beta.CreatedAdmin, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.org.v2beta.CreatedAdmin.displayName = 'proto.zitadel.org.v2beta.CreatedAdmin';
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
proto.zitadel.org.v2beta.AssignedAdmin = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.org.v2beta.AssignedAdmin, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.org.v2beta.AssignedAdmin.displayName = 'proto.zitadel.org.v2beta.AssignedAdmin';
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
proto.zitadel.org.v2beta.OrganizationAdmin = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.zitadel.org.v2beta.OrganizationAdmin.oneofGroups_);
};
goog.inherits(proto.zitadel.org.v2beta.OrganizationAdmin, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.org.v2beta.OrganizationAdmin.displayName = 'proto.zitadel.org.v2beta.OrganizationAdmin';
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
proto.zitadel.org.v2beta.CreateOrganizationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.org.v2beta.CreateOrganizationResponse.repeatedFields_, null);
};
goog.inherits(proto.zitadel.org.v2beta.CreateOrganizationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.org.v2beta.CreateOrganizationResponse.displayName = 'proto.zitadel.org.v2beta.CreateOrganizationResponse';
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
proto.zitadel.org.v2beta.UpdateOrganizationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.org.v2beta.UpdateOrganizationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.org.v2beta.UpdateOrganizationRequest.displayName = 'proto.zitadel.org.v2beta.UpdateOrganizationRequest';
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
proto.zitadel.org.v2beta.UpdateOrganizationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.org.v2beta.UpdateOrganizationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.org.v2beta.UpdateOrganizationResponse.displayName = 'proto.zitadel.org.v2beta.UpdateOrganizationResponse';
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
proto.zitadel.org.v2beta.ListOrganizationsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.org.v2beta.ListOrganizationsRequest.repeatedFields_, null);
};
goog.inherits(proto.zitadel.org.v2beta.ListOrganizationsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.org.v2beta.ListOrganizationsRequest.displayName = 'proto.zitadel.org.v2beta.ListOrganizationsRequest';
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
proto.zitadel.org.v2beta.ListOrganizationsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.org.v2beta.ListOrganizationsResponse.repeatedFields_, null);
};
goog.inherits(proto.zitadel.org.v2beta.ListOrganizationsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.org.v2beta.ListOrganizationsResponse.displayName = 'proto.zitadel.org.v2beta.ListOrganizationsResponse';
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
proto.zitadel.org.v2beta.DeleteOrganizationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.org.v2beta.DeleteOrganizationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.org.v2beta.DeleteOrganizationRequest.displayName = 'proto.zitadel.org.v2beta.DeleteOrganizationRequest';
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
proto.zitadel.org.v2beta.DeleteOrganizationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.org.v2beta.DeleteOrganizationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.org.v2beta.DeleteOrganizationResponse.displayName = 'proto.zitadel.org.v2beta.DeleteOrganizationResponse';
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
proto.zitadel.org.v2beta.DeactivateOrganizationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.org.v2beta.DeactivateOrganizationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.org.v2beta.DeactivateOrganizationRequest.displayName = 'proto.zitadel.org.v2beta.DeactivateOrganizationRequest';
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
proto.zitadel.org.v2beta.DeactivateOrganizationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.org.v2beta.DeactivateOrganizationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.org.v2beta.DeactivateOrganizationResponse.displayName = 'proto.zitadel.org.v2beta.DeactivateOrganizationResponse';
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
proto.zitadel.org.v2beta.ActivateOrganizationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.org.v2beta.ActivateOrganizationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.org.v2beta.ActivateOrganizationRequest.displayName = 'proto.zitadel.org.v2beta.ActivateOrganizationRequest';
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
proto.zitadel.org.v2beta.ActivateOrganizationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.org.v2beta.ActivateOrganizationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.org.v2beta.ActivateOrganizationResponse.displayName = 'proto.zitadel.org.v2beta.ActivateOrganizationResponse';
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
proto.zitadel.org.v2beta.AddOrganizationDomainRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.org.v2beta.AddOrganizationDomainRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.org.v2beta.AddOrganizationDomainRequest.displayName = 'proto.zitadel.org.v2beta.AddOrganizationDomainRequest';
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
proto.zitadel.org.v2beta.AddOrganizationDomainResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.org.v2beta.AddOrganizationDomainResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.org.v2beta.AddOrganizationDomainResponse.displayName = 'proto.zitadel.org.v2beta.AddOrganizationDomainResponse';
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
proto.zitadel.org.v2beta.ListOrganizationDomainsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.org.v2beta.ListOrganizationDomainsRequest.repeatedFields_, null);
};
goog.inherits(proto.zitadel.org.v2beta.ListOrganizationDomainsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.org.v2beta.ListOrganizationDomainsRequest.displayName = 'proto.zitadel.org.v2beta.ListOrganizationDomainsRequest';
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
proto.zitadel.org.v2beta.ListOrganizationDomainsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.org.v2beta.ListOrganizationDomainsResponse.repeatedFields_, null);
};
goog.inherits(proto.zitadel.org.v2beta.ListOrganizationDomainsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.org.v2beta.ListOrganizationDomainsResponse.displayName = 'proto.zitadel.org.v2beta.ListOrganizationDomainsResponse';
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
proto.zitadel.org.v2beta.DeleteOrganizationDomainRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.org.v2beta.DeleteOrganizationDomainRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.org.v2beta.DeleteOrganizationDomainRequest.displayName = 'proto.zitadel.org.v2beta.DeleteOrganizationDomainRequest';
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
proto.zitadel.org.v2beta.DeleteOrganizationDomainResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.org.v2beta.DeleteOrganizationDomainResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.org.v2beta.DeleteOrganizationDomainResponse.displayName = 'proto.zitadel.org.v2beta.DeleteOrganizationDomainResponse';
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
proto.zitadel.org.v2beta.GenerateOrganizationDomainValidationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.org.v2beta.GenerateOrganizationDomainValidationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.org.v2beta.GenerateOrganizationDomainValidationRequest.displayName = 'proto.zitadel.org.v2beta.GenerateOrganizationDomainValidationRequest';
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
proto.zitadel.org.v2beta.GenerateOrganizationDomainValidationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.org.v2beta.GenerateOrganizationDomainValidationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.org.v2beta.GenerateOrganizationDomainValidationResponse.displayName = 'proto.zitadel.org.v2beta.GenerateOrganizationDomainValidationResponse';
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
proto.zitadel.org.v2beta.VerifyOrganizationDomainRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.org.v2beta.VerifyOrganizationDomainRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.org.v2beta.VerifyOrganizationDomainRequest.displayName = 'proto.zitadel.org.v2beta.VerifyOrganizationDomainRequest';
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
proto.zitadel.org.v2beta.VerifyOrganizationDomainResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.org.v2beta.VerifyOrganizationDomainResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.org.v2beta.VerifyOrganizationDomainResponse.displayName = 'proto.zitadel.org.v2beta.VerifyOrganizationDomainResponse';
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
proto.zitadel.org.v2beta.Metadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.org.v2beta.Metadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.org.v2beta.Metadata.displayName = 'proto.zitadel.org.v2beta.Metadata';
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
proto.zitadel.org.v2beta.SetOrganizationMetadataRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.org.v2beta.SetOrganizationMetadataRequest.repeatedFields_, null);
};
goog.inherits(proto.zitadel.org.v2beta.SetOrganizationMetadataRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.org.v2beta.SetOrganizationMetadataRequest.displayName = 'proto.zitadel.org.v2beta.SetOrganizationMetadataRequest';
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
proto.zitadel.org.v2beta.SetOrganizationMetadataResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.org.v2beta.SetOrganizationMetadataResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.org.v2beta.SetOrganizationMetadataResponse.displayName = 'proto.zitadel.org.v2beta.SetOrganizationMetadataResponse';
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
proto.zitadel.org.v2beta.ListOrganizationMetadataRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.org.v2beta.ListOrganizationMetadataRequest.repeatedFields_, null);
};
goog.inherits(proto.zitadel.org.v2beta.ListOrganizationMetadataRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.org.v2beta.ListOrganizationMetadataRequest.displayName = 'proto.zitadel.org.v2beta.ListOrganizationMetadataRequest';
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
proto.zitadel.org.v2beta.ListOrganizationMetadataResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.org.v2beta.ListOrganizationMetadataResponse.repeatedFields_, null);
};
goog.inherits(proto.zitadel.org.v2beta.ListOrganizationMetadataResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.org.v2beta.ListOrganizationMetadataResponse.displayName = 'proto.zitadel.org.v2beta.ListOrganizationMetadataResponse';
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
proto.zitadel.org.v2beta.DeleteOrganizationMetadataRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.org.v2beta.DeleteOrganizationMetadataRequest.repeatedFields_, null);
};
goog.inherits(proto.zitadel.org.v2beta.DeleteOrganizationMetadataRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.org.v2beta.DeleteOrganizationMetadataRequest.displayName = 'proto.zitadel.org.v2beta.DeleteOrganizationMetadataRequest';
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
proto.zitadel.org.v2beta.DeleteOrganizationMetadataResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.org.v2beta.DeleteOrganizationMetadataResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.org.v2beta.DeleteOrganizationMetadataResponse.displayName = 'proto.zitadel.org.v2beta.DeleteOrganizationMetadataResponse';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.org.v2beta.CreateOrganizationRequest.repeatedFields_ = [3];



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
proto.zitadel.org.v2beta.CreateOrganizationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.org.v2beta.CreateOrganizationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.org.v2beta.CreateOrganizationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2beta.CreateOrganizationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
name: jspb.Message.getFieldWithDefault(msg, 1, ""),
id: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
adminsList: jspb.Message.toObjectList(msg.getAdminsList(),
    proto.zitadel.org.v2beta.CreateOrganizationRequest.Admin.toObject, includeInstance)
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
 * @return {!proto.zitadel.org.v2beta.CreateOrganizationRequest}
 */
proto.zitadel.org.v2beta.CreateOrganizationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.org.v2beta.CreateOrganizationRequest;
  return proto.zitadel.org.v2beta.CreateOrganizationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.org.v2beta.CreateOrganizationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.org.v2beta.CreateOrganizationRequest}
 */
proto.zitadel.org.v2beta.CreateOrganizationRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 3:
      var value = new proto.zitadel.org.v2beta.CreateOrganizationRequest.Admin;
      reader.readMessage(value,proto.zitadel.org.v2beta.CreateOrganizationRequest.Admin.deserializeBinaryFromReader);
      msg.addAdmins(value);
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
proto.zitadel.org.v2beta.CreateOrganizationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.org.v2beta.CreateOrganizationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.org.v2beta.CreateOrganizationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2beta.CreateOrganizationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
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
  f = message.getAdminsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.zitadel.org.v2beta.CreateOrganizationRequest.Admin.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.org.v2beta.CreateOrganizationRequest.Admin.repeatedFields_ = [3];

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.zitadel.org.v2beta.CreateOrganizationRequest.Admin.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.zitadel.org.v2beta.CreateOrganizationRequest.Admin.UserTypeCase = {
  USER_TYPE_NOT_SET: 0,
  USER_ID: 1,
  HUMAN: 2
};

/**
 * @return {proto.zitadel.org.v2beta.CreateOrganizationRequest.Admin.UserTypeCase}
 */
proto.zitadel.org.v2beta.CreateOrganizationRequest.Admin.prototype.getUserTypeCase = function() {
  return /** @type {proto.zitadel.org.v2beta.CreateOrganizationRequest.Admin.UserTypeCase} */(jspb.Message.computeOneofCase(this, proto.zitadel.org.v2beta.CreateOrganizationRequest.Admin.oneofGroups_[0]));
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
proto.zitadel.org.v2beta.CreateOrganizationRequest.Admin.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.org.v2beta.CreateOrganizationRequest.Admin.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.org.v2beta.CreateOrganizationRequest.Admin} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2beta.CreateOrganizationRequest.Admin.toObject = function(includeInstance, msg) {
  var f, obj = {
userId: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
human: (f = msg.getHuman()) && zitadel_user_v2beta_user_service_pb.AddHumanUserRequest.toObject(includeInstance, f),
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
 * @return {!proto.zitadel.org.v2beta.CreateOrganizationRequest.Admin}
 */
proto.zitadel.org.v2beta.CreateOrganizationRequest.Admin.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.org.v2beta.CreateOrganizationRequest.Admin;
  return proto.zitadel.org.v2beta.CreateOrganizationRequest.Admin.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.org.v2beta.CreateOrganizationRequest.Admin} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.org.v2beta.CreateOrganizationRequest.Admin}
 */
proto.zitadel.org.v2beta.CreateOrganizationRequest.Admin.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new zitadel_user_v2beta_user_service_pb.AddHumanUserRequest;
      reader.readMessage(value,zitadel_user_v2beta_user_service_pb.AddHumanUserRequest.deserializeBinaryFromReader);
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
proto.zitadel.org.v2beta.CreateOrganizationRequest.Admin.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.org.v2beta.CreateOrganizationRequest.Admin.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.org.v2beta.CreateOrganizationRequest.Admin} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2beta.CreateOrganizationRequest.Admin.serializeBinaryToWriter = function(message, writer) {
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
      zitadel_user_v2beta_user_service_pb.AddHumanUserRequest.serializeBinaryToWriter
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
proto.zitadel.org.v2beta.CreateOrganizationRequest.Admin.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.org.v2beta.CreateOrganizationRequest.Admin} returns this
 */
proto.zitadel.org.v2beta.CreateOrganizationRequest.Admin.prototype.setUserId = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.zitadel.org.v2beta.CreateOrganizationRequest.Admin.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.org.v2beta.CreateOrganizationRequest.Admin} returns this
 */
proto.zitadel.org.v2beta.CreateOrganizationRequest.Admin.prototype.clearUserId = function() {
  return jspb.Message.setOneofField(this, 1, proto.zitadel.org.v2beta.CreateOrganizationRequest.Admin.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.org.v2beta.CreateOrganizationRequest.Admin.prototype.hasUserId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional zitadel.user.v2beta.AddHumanUserRequest human = 2;
 * @return {?proto.zitadel.user.v2beta.AddHumanUserRequest}
 */
proto.zitadel.org.v2beta.CreateOrganizationRequest.Admin.prototype.getHuman = function() {
  return /** @type{?proto.zitadel.user.v2beta.AddHumanUserRequest} */ (
    jspb.Message.getWrapperField(this, zitadel_user_v2beta_user_service_pb.AddHumanUserRequest, 2));
};


/**
 * @param {?proto.zitadel.user.v2beta.AddHumanUserRequest|undefined} value
 * @return {!proto.zitadel.org.v2beta.CreateOrganizationRequest.Admin} returns this
*/
proto.zitadel.org.v2beta.CreateOrganizationRequest.Admin.prototype.setHuman = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.zitadel.org.v2beta.CreateOrganizationRequest.Admin.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.org.v2beta.CreateOrganizationRequest.Admin} returns this
 */
proto.zitadel.org.v2beta.CreateOrganizationRequest.Admin.prototype.clearHuman = function() {
  return this.setHuman(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.org.v2beta.CreateOrganizationRequest.Admin.prototype.hasHuman = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated string roles = 3;
 * @return {!Array<string>}
 */
proto.zitadel.org.v2beta.CreateOrganizationRequest.Admin.prototype.getRolesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.zitadel.org.v2beta.CreateOrganizationRequest.Admin} returns this
 */
proto.zitadel.org.v2beta.CreateOrganizationRequest.Admin.prototype.setRolesList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.zitadel.org.v2beta.CreateOrganizationRequest.Admin} returns this
 */
proto.zitadel.org.v2beta.CreateOrganizationRequest.Admin.prototype.addRoles = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.org.v2beta.CreateOrganizationRequest.Admin} returns this
 */
proto.zitadel.org.v2beta.CreateOrganizationRequest.Admin.prototype.clearRolesList = function() {
  return this.setRolesList([]);
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.zitadel.org.v2beta.CreateOrganizationRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.org.v2beta.CreateOrganizationRequest} returns this
 */
proto.zitadel.org.v2beta.CreateOrganizationRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string id = 2;
 * @return {string}
 */
proto.zitadel.org.v2beta.CreateOrganizationRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.org.v2beta.CreateOrganizationRequest} returns this
 */
proto.zitadel.org.v2beta.CreateOrganizationRequest.prototype.setId = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.org.v2beta.CreateOrganizationRequest} returns this
 */
proto.zitadel.org.v2beta.CreateOrganizationRequest.prototype.clearId = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.org.v2beta.CreateOrganizationRequest.prototype.hasId = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated Admin admins = 3;
 * @return {!Array<!proto.zitadel.org.v2beta.CreateOrganizationRequest.Admin>}
 */
proto.zitadel.org.v2beta.CreateOrganizationRequest.prototype.getAdminsList = function() {
  return /** @type{!Array<!proto.zitadel.org.v2beta.CreateOrganizationRequest.Admin>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.zitadel.org.v2beta.CreateOrganizationRequest.Admin, 3));
};


/**
 * @param {!Array<!proto.zitadel.org.v2beta.CreateOrganizationRequest.Admin>} value
 * @return {!proto.zitadel.org.v2beta.CreateOrganizationRequest} returns this
*/
proto.zitadel.org.v2beta.CreateOrganizationRequest.prototype.setAdminsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.zitadel.org.v2beta.CreateOrganizationRequest.Admin=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zitadel.org.v2beta.CreateOrganizationRequest.Admin}
 */
proto.zitadel.org.v2beta.CreateOrganizationRequest.prototype.addAdmins = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.zitadel.org.v2beta.CreateOrganizationRequest.Admin, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.org.v2beta.CreateOrganizationRequest} returns this
 */
proto.zitadel.org.v2beta.CreateOrganizationRequest.prototype.clearAdminsList = function() {
  return this.setAdminsList([]);
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
proto.zitadel.org.v2beta.CreatedAdmin.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.org.v2beta.CreatedAdmin.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.org.v2beta.CreatedAdmin} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2beta.CreatedAdmin.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.org.v2beta.CreatedAdmin}
 */
proto.zitadel.org.v2beta.CreatedAdmin.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.org.v2beta.CreatedAdmin;
  return proto.zitadel.org.v2beta.CreatedAdmin.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.org.v2beta.CreatedAdmin} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.org.v2beta.CreatedAdmin}
 */
proto.zitadel.org.v2beta.CreatedAdmin.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.org.v2beta.CreatedAdmin.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.org.v2beta.CreatedAdmin.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.org.v2beta.CreatedAdmin} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2beta.CreatedAdmin.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.org.v2beta.CreatedAdmin.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.org.v2beta.CreatedAdmin} returns this
 */
proto.zitadel.org.v2beta.CreatedAdmin.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string email_code = 2;
 * @return {string}
 */
proto.zitadel.org.v2beta.CreatedAdmin.prototype.getEmailCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.org.v2beta.CreatedAdmin} returns this
 */
proto.zitadel.org.v2beta.CreatedAdmin.prototype.setEmailCode = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.org.v2beta.CreatedAdmin} returns this
 */
proto.zitadel.org.v2beta.CreatedAdmin.prototype.clearEmailCode = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.org.v2beta.CreatedAdmin.prototype.hasEmailCode = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string phone_code = 3;
 * @return {string}
 */
proto.zitadel.org.v2beta.CreatedAdmin.prototype.getPhoneCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.org.v2beta.CreatedAdmin} returns this
 */
proto.zitadel.org.v2beta.CreatedAdmin.prototype.setPhoneCode = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.org.v2beta.CreatedAdmin} returns this
 */
proto.zitadel.org.v2beta.CreatedAdmin.prototype.clearPhoneCode = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.org.v2beta.CreatedAdmin.prototype.hasPhoneCode = function() {
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
proto.zitadel.org.v2beta.AssignedAdmin.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.org.v2beta.AssignedAdmin.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.org.v2beta.AssignedAdmin} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2beta.AssignedAdmin.toObject = function(includeInstance, msg) {
  var f, obj = {
userId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.zitadel.org.v2beta.AssignedAdmin}
 */
proto.zitadel.org.v2beta.AssignedAdmin.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.org.v2beta.AssignedAdmin;
  return proto.zitadel.org.v2beta.AssignedAdmin.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.org.v2beta.AssignedAdmin} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.org.v2beta.AssignedAdmin}
 */
proto.zitadel.org.v2beta.AssignedAdmin.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.org.v2beta.AssignedAdmin.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.org.v2beta.AssignedAdmin.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.org.v2beta.AssignedAdmin} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2beta.AssignedAdmin.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.zitadel.org.v2beta.AssignedAdmin.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.org.v2beta.AssignedAdmin} returns this
 */
proto.zitadel.org.v2beta.AssignedAdmin.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.zitadel.org.v2beta.OrganizationAdmin.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.zitadel.org.v2beta.OrganizationAdmin.OrganizationadminCase = {
  ORGANIZATIONADMIN_NOT_SET: 0,
  CREATED_ADMIN: 1,
  ASSIGNED_ADMIN: 2
};

/**
 * @return {proto.zitadel.org.v2beta.OrganizationAdmin.OrganizationadminCase}
 */
proto.zitadel.org.v2beta.OrganizationAdmin.prototype.getOrganizationadminCase = function() {
  return /** @type {proto.zitadel.org.v2beta.OrganizationAdmin.OrganizationadminCase} */(jspb.Message.computeOneofCase(this, proto.zitadel.org.v2beta.OrganizationAdmin.oneofGroups_[0]));
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
proto.zitadel.org.v2beta.OrganizationAdmin.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.org.v2beta.OrganizationAdmin.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.org.v2beta.OrganizationAdmin} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2beta.OrganizationAdmin.toObject = function(includeInstance, msg) {
  var f, obj = {
createdAdmin: (f = msg.getCreatedAdmin()) && proto.zitadel.org.v2beta.CreatedAdmin.toObject(includeInstance, f),
assignedAdmin: (f = msg.getAssignedAdmin()) && proto.zitadel.org.v2beta.AssignedAdmin.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.org.v2beta.OrganizationAdmin}
 */
proto.zitadel.org.v2beta.OrganizationAdmin.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.org.v2beta.OrganizationAdmin;
  return proto.zitadel.org.v2beta.OrganizationAdmin.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.org.v2beta.OrganizationAdmin} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.org.v2beta.OrganizationAdmin}
 */
proto.zitadel.org.v2beta.OrganizationAdmin.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.zitadel.org.v2beta.CreatedAdmin;
      reader.readMessage(value,proto.zitadel.org.v2beta.CreatedAdmin.deserializeBinaryFromReader);
      msg.setCreatedAdmin(value);
      break;
    case 2:
      var value = new proto.zitadel.org.v2beta.AssignedAdmin;
      reader.readMessage(value,proto.zitadel.org.v2beta.AssignedAdmin.deserializeBinaryFromReader);
      msg.setAssignedAdmin(value);
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
proto.zitadel.org.v2beta.OrganizationAdmin.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.org.v2beta.OrganizationAdmin.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.org.v2beta.OrganizationAdmin} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2beta.OrganizationAdmin.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCreatedAdmin();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.zitadel.org.v2beta.CreatedAdmin.serializeBinaryToWriter
    );
  }
  f = message.getAssignedAdmin();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.zitadel.org.v2beta.AssignedAdmin.serializeBinaryToWriter
    );
  }
};


/**
 * optional CreatedAdmin created_admin = 1;
 * @return {?proto.zitadel.org.v2beta.CreatedAdmin}
 */
proto.zitadel.org.v2beta.OrganizationAdmin.prototype.getCreatedAdmin = function() {
  return /** @type{?proto.zitadel.org.v2beta.CreatedAdmin} */ (
    jspb.Message.getWrapperField(this, proto.zitadel.org.v2beta.CreatedAdmin, 1));
};


/**
 * @param {?proto.zitadel.org.v2beta.CreatedAdmin|undefined} value
 * @return {!proto.zitadel.org.v2beta.OrganizationAdmin} returns this
*/
proto.zitadel.org.v2beta.OrganizationAdmin.prototype.setCreatedAdmin = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.zitadel.org.v2beta.OrganizationAdmin.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.org.v2beta.OrganizationAdmin} returns this
 */
proto.zitadel.org.v2beta.OrganizationAdmin.prototype.clearCreatedAdmin = function() {
  return this.setCreatedAdmin(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.org.v2beta.OrganizationAdmin.prototype.hasCreatedAdmin = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional AssignedAdmin assigned_admin = 2;
 * @return {?proto.zitadel.org.v2beta.AssignedAdmin}
 */
proto.zitadel.org.v2beta.OrganizationAdmin.prototype.getAssignedAdmin = function() {
  return /** @type{?proto.zitadel.org.v2beta.AssignedAdmin} */ (
    jspb.Message.getWrapperField(this, proto.zitadel.org.v2beta.AssignedAdmin, 2));
};


/**
 * @param {?proto.zitadel.org.v2beta.AssignedAdmin|undefined} value
 * @return {!proto.zitadel.org.v2beta.OrganizationAdmin} returns this
*/
proto.zitadel.org.v2beta.OrganizationAdmin.prototype.setAssignedAdmin = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.zitadel.org.v2beta.OrganizationAdmin.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.org.v2beta.OrganizationAdmin} returns this
 */
proto.zitadel.org.v2beta.OrganizationAdmin.prototype.clearAssignedAdmin = function() {
  return this.setAssignedAdmin(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.org.v2beta.OrganizationAdmin.prototype.hasAssignedAdmin = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.org.v2beta.CreateOrganizationResponse.repeatedFields_ = [3];



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
proto.zitadel.org.v2beta.CreateOrganizationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.org.v2beta.CreateOrganizationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.org.v2beta.CreateOrganizationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2beta.CreateOrganizationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
creationDate: (f = msg.getCreationDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
id: jspb.Message.getFieldWithDefault(msg, 2, ""),
organizationAdminsList: jspb.Message.toObjectList(msg.getOrganizationAdminsList(),
    proto.zitadel.org.v2beta.OrganizationAdmin.toObject, includeInstance)
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
 * @return {!proto.zitadel.org.v2beta.CreateOrganizationResponse}
 */
proto.zitadel.org.v2beta.CreateOrganizationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.org.v2beta.CreateOrganizationResponse;
  return proto.zitadel.org.v2beta.CreateOrganizationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.org.v2beta.CreateOrganizationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.org.v2beta.CreateOrganizationResponse}
 */
proto.zitadel.org.v2beta.CreateOrganizationResponse.deserializeBinaryFromReader = function(msg, reader) {
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
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 3:
      var value = new proto.zitadel.org.v2beta.OrganizationAdmin;
      reader.readMessage(value,proto.zitadel.org.v2beta.OrganizationAdmin.deserializeBinaryFromReader);
      msg.addOrganizationAdmins(value);
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
proto.zitadel.org.v2beta.CreateOrganizationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.org.v2beta.CreateOrganizationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.org.v2beta.CreateOrganizationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2beta.CreateOrganizationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCreationDate();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getOrganizationAdminsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.zitadel.org.v2beta.OrganizationAdmin.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Timestamp creation_date = 1;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.zitadel.org.v2beta.CreateOrganizationResponse.prototype.getCreationDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.zitadel.org.v2beta.CreateOrganizationResponse} returns this
*/
proto.zitadel.org.v2beta.CreateOrganizationResponse.prototype.setCreationDate = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.org.v2beta.CreateOrganizationResponse} returns this
 */
proto.zitadel.org.v2beta.CreateOrganizationResponse.prototype.clearCreationDate = function() {
  return this.setCreationDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.org.v2beta.CreateOrganizationResponse.prototype.hasCreationDate = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string id = 2;
 * @return {string}
 */
proto.zitadel.org.v2beta.CreateOrganizationResponse.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.org.v2beta.CreateOrganizationResponse} returns this
 */
proto.zitadel.org.v2beta.CreateOrganizationResponse.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated OrganizationAdmin organization_admins = 3;
 * @return {!Array<!proto.zitadel.org.v2beta.OrganizationAdmin>}
 */
proto.zitadel.org.v2beta.CreateOrganizationResponse.prototype.getOrganizationAdminsList = function() {
  return /** @type{!Array<!proto.zitadel.org.v2beta.OrganizationAdmin>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.zitadel.org.v2beta.OrganizationAdmin, 3));
};


/**
 * @param {!Array<!proto.zitadel.org.v2beta.OrganizationAdmin>} value
 * @return {!proto.zitadel.org.v2beta.CreateOrganizationResponse} returns this
*/
proto.zitadel.org.v2beta.CreateOrganizationResponse.prototype.setOrganizationAdminsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.zitadel.org.v2beta.OrganizationAdmin=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zitadel.org.v2beta.OrganizationAdmin}
 */
proto.zitadel.org.v2beta.CreateOrganizationResponse.prototype.addOrganizationAdmins = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.zitadel.org.v2beta.OrganizationAdmin, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.org.v2beta.CreateOrganizationResponse} returns this
 */
proto.zitadel.org.v2beta.CreateOrganizationResponse.prototype.clearOrganizationAdminsList = function() {
  return this.setOrganizationAdminsList([]);
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
proto.zitadel.org.v2beta.UpdateOrganizationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.org.v2beta.UpdateOrganizationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.org.v2beta.UpdateOrganizationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2beta.UpdateOrganizationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 1, ""),
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
 * @return {!proto.zitadel.org.v2beta.UpdateOrganizationRequest}
 */
proto.zitadel.org.v2beta.UpdateOrganizationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.org.v2beta.UpdateOrganizationRequest;
  return proto.zitadel.org.v2beta.UpdateOrganizationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.org.v2beta.UpdateOrganizationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.org.v2beta.UpdateOrganizationRequest}
 */
proto.zitadel.org.v2beta.UpdateOrganizationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
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
proto.zitadel.org.v2beta.UpdateOrganizationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.org.v2beta.UpdateOrganizationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.org.v2beta.UpdateOrganizationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2beta.UpdateOrganizationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
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
 * optional string id = 1;
 * @return {string}
 */
proto.zitadel.org.v2beta.UpdateOrganizationRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.org.v2beta.UpdateOrganizationRequest} returns this
 */
proto.zitadel.org.v2beta.UpdateOrganizationRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.zitadel.org.v2beta.UpdateOrganizationRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.org.v2beta.UpdateOrganizationRequest} returns this
 */
proto.zitadel.org.v2beta.UpdateOrganizationRequest.prototype.setName = function(value) {
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
proto.zitadel.org.v2beta.UpdateOrganizationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.org.v2beta.UpdateOrganizationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.org.v2beta.UpdateOrganizationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2beta.UpdateOrganizationResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.org.v2beta.UpdateOrganizationResponse}
 */
proto.zitadel.org.v2beta.UpdateOrganizationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.org.v2beta.UpdateOrganizationResponse;
  return proto.zitadel.org.v2beta.UpdateOrganizationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.org.v2beta.UpdateOrganizationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.org.v2beta.UpdateOrganizationResponse}
 */
proto.zitadel.org.v2beta.UpdateOrganizationResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.org.v2beta.UpdateOrganizationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.org.v2beta.UpdateOrganizationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.org.v2beta.UpdateOrganizationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2beta.UpdateOrganizationResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.org.v2beta.UpdateOrganizationResponse.prototype.getChangeDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.zitadel.org.v2beta.UpdateOrganizationResponse} returns this
*/
proto.zitadel.org.v2beta.UpdateOrganizationResponse.prototype.setChangeDate = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.org.v2beta.UpdateOrganizationResponse} returns this
 */
proto.zitadel.org.v2beta.UpdateOrganizationResponse.prototype.clearChangeDate = function() {
  return this.setChangeDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.org.v2beta.UpdateOrganizationResponse.prototype.hasChangeDate = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.org.v2beta.ListOrganizationsRequest.repeatedFields_ = [3];



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
proto.zitadel.org.v2beta.ListOrganizationsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.org.v2beta.ListOrganizationsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.org.v2beta.ListOrganizationsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2beta.ListOrganizationsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
pagination: (f = msg.getPagination()) && zitadel_filter_v2beta_filter_pb.PaginationRequest.toObject(includeInstance, f),
sortingColumn: jspb.Message.getFieldWithDefault(msg, 2, 0),
filterList: jspb.Message.toObjectList(msg.getFilterList(),
    zitadel_org_v2beta_org_pb.OrganizationSearchFilter.toObject, includeInstance)
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
 * @return {!proto.zitadel.org.v2beta.ListOrganizationsRequest}
 */
proto.zitadel.org.v2beta.ListOrganizationsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.org.v2beta.ListOrganizationsRequest;
  return proto.zitadel.org.v2beta.ListOrganizationsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.org.v2beta.ListOrganizationsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.org.v2beta.ListOrganizationsRequest}
 */
proto.zitadel.org.v2beta.ListOrganizationsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_filter_v2beta_filter_pb.PaginationRequest;
      reader.readMessage(value,zitadel_filter_v2beta_filter_pb.PaginationRequest.deserializeBinaryFromReader);
      msg.setPagination(value);
      break;
    case 2:
      var value = /** @type {!proto.zitadel.org.v2beta.OrgFieldName} */ (reader.readEnum());
      msg.setSortingColumn(value);
      break;
    case 3:
      var value = new zitadel_org_v2beta_org_pb.OrganizationSearchFilter;
      reader.readMessage(value,zitadel_org_v2beta_org_pb.OrganizationSearchFilter.deserializeBinaryFromReader);
      msg.addFilter(value);
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
proto.zitadel.org.v2beta.ListOrganizationsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.org.v2beta.ListOrganizationsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.org.v2beta.ListOrganizationsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2beta.ListOrganizationsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_filter_v2beta_filter_pb.PaginationRequest.serializeBinaryToWriter
    );
  }
  f = message.getSortingColumn();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getFilterList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      zitadel_org_v2beta_org_pb.OrganizationSearchFilter.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.filter.v2beta.PaginationRequest pagination = 1;
 * @return {?proto.zitadel.filter.v2beta.PaginationRequest}
 */
proto.zitadel.org.v2beta.ListOrganizationsRequest.prototype.getPagination = function() {
  return /** @type{?proto.zitadel.filter.v2beta.PaginationRequest} */ (
    jspb.Message.getWrapperField(this, zitadel_filter_v2beta_filter_pb.PaginationRequest, 1));
};


/**
 * @param {?proto.zitadel.filter.v2beta.PaginationRequest|undefined} value
 * @return {!proto.zitadel.org.v2beta.ListOrganizationsRequest} returns this
*/
proto.zitadel.org.v2beta.ListOrganizationsRequest.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.org.v2beta.ListOrganizationsRequest} returns this
 */
proto.zitadel.org.v2beta.ListOrganizationsRequest.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.org.v2beta.ListOrganizationsRequest.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional OrgFieldName sorting_column = 2;
 * @return {!proto.zitadel.org.v2beta.OrgFieldName}
 */
proto.zitadel.org.v2beta.ListOrganizationsRequest.prototype.getSortingColumn = function() {
  return /** @type {!proto.zitadel.org.v2beta.OrgFieldName} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.zitadel.org.v2beta.OrgFieldName} value
 * @return {!proto.zitadel.org.v2beta.ListOrganizationsRequest} returns this
 */
proto.zitadel.org.v2beta.ListOrganizationsRequest.prototype.setSortingColumn = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * repeated OrganizationSearchFilter filter = 3;
 * @return {!Array<!proto.zitadel.org.v2beta.OrganizationSearchFilter>}
 */
proto.zitadel.org.v2beta.ListOrganizationsRequest.prototype.getFilterList = function() {
  return /** @type{!Array<!proto.zitadel.org.v2beta.OrganizationSearchFilter>} */ (
    jspb.Message.getRepeatedWrapperField(this, zitadel_org_v2beta_org_pb.OrganizationSearchFilter, 3));
};


/**
 * @param {!Array<!proto.zitadel.org.v2beta.OrganizationSearchFilter>} value
 * @return {!proto.zitadel.org.v2beta.ListOrganizationsRequest} returns this
*/
proto.zitadel.org.v2beta.ListOrganizationsRequest.prototype.setFilterList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.zitadel.org.v2beta.OrganizationSearchFilter=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zitadel.org.v2beta.OrganizationSearchFilter}
 */
proto.zitadel.org.v2beta.ListOrganizationsRequest.prototype.addFilter = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.zitadel.org.v2beta.OrganizationSearchFilter, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.org.v2beta.ListOrganizationsRequest} returns this
 */
proto.zitadel.org.v2beta.ListOrganizationsRequest.prototype.clearFilterList = function() {
  return this.setFilterList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.org.v2beta.ListOrganizationsResponse.repeatedFields_ = [2];



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
proto.zitadel.org.v2beta.ListOrganizationsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.org.v2beta.ListOrganizationsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.org.v2beta.ListOrganizationsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2beta.ListOrganizationsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
pagination: (f = msg.getPagination()) && zitadel_filter_v2beta_filter_pb.PaginationResponse.toObject(includeInstance, f),
organizationsList: jspb.Message.toObjectList(msg.getOrganizationsList(),
    zitadel_org_v2beta_org_pb.Organization.toObject, includeInstance)
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
 * @return {!proto.zitadel.org.v2beta.ListOrganizationsResponse}
 */
proto.zitadel.org.v2beta.ListOrganizationsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.org.v2beta.ListOrganizationsResponse;
  return proto.zitadel.org.v2beta.ListOrganizationsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.org.v2beta.ListOrganizationsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.org.v2beta.ListOrganizationsResponse}
 */
proto.zitadel.org.v2beta.ListOrganizationsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_filter_v2beta_filter_pb.PaginationResponse;
      reader.readMessage(value,zitadel_filter_v2beta_filter_pb.PaginationResponse.deserializeBinaryFromReader);
      msg.setPagination(value);
      break;
    case 2:
      var value = new zitadel_org_v2beta_org_pb.Organization;
      reader.readMessage(value,zitadel_org_v2beta_org_pb.Organization.deserializeBinaryFromReader);
      msg.addOrganizations(value);
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
proto.zitadel.org.v2beta.ListOrganizationsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.org.v2beta.ListOrganizationsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.org.v2beta.ListOrganizationsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2beta.ListOrganizationsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_filter_v2beta_filter_pb.PaginationResponse.serializeBinaryToWriter
    );
  }
  f = message.getOrganizationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      zitadel_org_v2beta_org_pb.Organization.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.filter.v2beta.PaginationResponse pagination = 1;
 * @return {?proto.zitadel.filter.v2beta.PaginationResponse}
 */
proto.zitadel.org.v2beta.ListOrganizationsResponse.prototype.getPagination = function() {
  return /** @type{?proto.zitadel.filter.v2beta.PaginationResponse} */ (
    jspb.Message.getWrapperField(this, zitadel_filter_v2beta_filter_pb.PaginationResponse, 1));
};


/**
 * @param {?proto.zitadel.filter.v2beta.PaginationResponse|undefined} value
 * @return {!proto.zitadel.org.v2beta.ListOrganizationsResponse} returns this
*/
proto.zitadel.org.v2beta.ListOrganizationsResponse.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.org.v2beta.ListOrganizationsResponse} returns this
 */
proto.zitadel.org.v2beta.ListOrganizationsResponse.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.org.v2beta.ListOrganizationsResponse.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Organization organizations = 2;
 * @return {!Array<!proto.zitadel.org.v2beta.Organization>}
 */
proto.zitadel.org.v2beta.ListOrganizationsResponse.prototype.getOrganizationsList = function() {
  return /** @type{!Array<!proto.zitadel.org.v2beta.Organization>} */ (
    jspb.Message.getRepeatedWrapperField(this, zitadel_org_v2beta_org_pb.Organization, 2));
};


/**
 * @param {!Array<!proto.zitadel.org.v2beta.Organization>} value
 * @return {!proto.zitadel.org.v2beta.ListOrganizationsResponse} returns this
*/
proto.zitadel.org.v2beta.ListOrganizationsResponse.prototype.setOrganizationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.zitadel.org.v2beta.Organization=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zitadel.org.v2beta.Organization}
 */
proto.zitadel.org.v2beta.ListOrganizationsResponse.prototype.addOrganizations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.zitadel.org.v2beta.Organization, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.org.v2beta.ListOrganizationsResponse} returns this
 */
proto.zitadel.org.v2beta.ListOrganizationsResponse.prototype.clearOrganizationsList = function() {
  return this.setOrganizationsList([]);
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
proto.zitadel.org.v2beta.DeleteOrganizationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.org.v2beta.DeleteOrganizationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.org.v2beta.DeleteOrganizationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2beta.DeleteOrganizationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.zitadel.org.v2beta.DeleteOrganizationRequest}
 */
proto.zitadel.org.v2beta.DeleteOrganizationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.org.v2beta.DeleteOrganizationRequest;
  return proto.zitadel.org.v2beta.DeleteOrganizationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.org.v2beta.DeleteOrganizationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.org.v2beta.DeleteOrganizationRequest}
 */
proto.zitadel.org.v2beta.DeleteOrganizationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
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
proto.zitadel.org.v2beta.DeleteOrganizationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.org.v2beta.DeleteOrganizationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.org.v2beta.DeleteOrganizationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2beta.DeleteOrganizationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.zitadel.org.v2beta.DeleteOrganizationRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.org.v2beta.DeleteOrganizationRequest} returns this
 */
proto.zitadel.org.v2beta.DeleteOrganizationRequest.prototype.setId = function(value) {
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
proto.zitadel.org.v2beta.DeleteOrganizationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.org.v2beta.DeleteOrganizationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.org.v2beta.DeleteOrganizationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2beta.DeleteOrganizationResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.org.v2beta.DeleteOrganizationResponse}
 */
proto.zitadel.org.v2beta.DeleteOrganizationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.org.v2beta.DeleteOrganizationResponse;
  return proto.zitadel.org.v2beta.DeleteOrganizationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.org.v2beta.DeleteOrganizationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.org.v2beta.DeleteOrganizationResponse}
 */
proto.zitadel.org.v2beta.DeleteOrganizationResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.org.v2beta.DeleteOrganizationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.org.v2beta.DeleteOrganizationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.org.v2beta.DeleteOrganizationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2beta.DeleteOrganizationResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.org.v2beta.DeleteOrganizationResponse.prototype.getDeletionDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.zitadel.org.v2beta.DeleteOrganizationResponse} returns this
*/
proto.zitadel.org.v2beta.DeleteOrganizationResponse.prototype.setDeletionDate = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.org.v2beta.DeleteOrganizationResponse} returns this
 */
proto.zitadel.org.v2beta.DeleteOrganizationResponse.prototype.clearDeletionDate = function() {
  return this.setDeletionDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.org.v2beta.DeleteOrganizationResponse.prototype.hasDeletionDate = function() {
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
proto.zitadel.org.v2beta.DeactivateOrganizationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.org.v2beta.DeactivateOrganizationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.org.v2beta.DeactivateOrganizationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2beta.DeactivateOrganizationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.zitadel.org.v2beta.DeactivateOrganizationRequest}
 */
proto.zitadel.org.v2beta.DeactivateOrganizationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.org.v2beta.DeactivateOrganizationRequest;
  return proto.zitadel.org.v2beta.DeactivateOrganizationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.org.v2beta.DeactivateOrganizationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.org.v2beta.DeactivateOrganizationRequest}
 */
proto.zitadel.org.v2beta.DeactivateOrganizationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
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
proto.zitadel.org.v2beta.DeactivateOrganizationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.org.v2beta.DeactivateOrganizationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.org.v2beta.DeactivateOrganizationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2beta.DeactivateOrganizationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.zitadel.org.v2beta.DeactivateOrganizationRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.org.v2beta.DeactivateOrganizationRequest} returns this
 */
proto.zitadel.org.v2beta.DeactivateOrganizationRequest.prototype.setId = function(value) {
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
proto.zitadel.org.v2beta.DeactivateOrganizationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.org.v2beta.DeactivateOrganizationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.org.v2beta.DeactivateOrganizationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2beta.DeactivateOrganizationResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.org.v2beta.DeactivateOrganizationResponse}
 */
proto.zitadel.org.v2beta.DeactivateOrganizationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.org.v2beta.DeactivateOrganizationResponse;
  return proto.zitadel.org.v2beta.DeactivateOrganizationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.org.v2beta.DeactivateOrganizationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.org.v2beta.DeactivateOrganizationResponse}
 */
proto.zitadel.org.v2beta.DeactivateOrganizationResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.org.v2beta.DeactivateOrganizationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.org.v2beta.DeactivateOrganizationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.org.v2beta.DeactivateOrganizationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2beta.DeactivateOrganizationResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.org.v2beta.DeactivateOrganizationResponse.prototype.getChangeDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.zitadel.org.v2beta.DeactivateOrganizationResponse} returns this
*/
proto.zitadel.org.v2beta.DeactivateOrganizationResponse.prototype.setChangeDate = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.org.v2beta.DeactivateOrganizationResponse} returns this
 */
proto.zitadel.org.v2beta.DeactivateOrganizationResponse.prototype.clearChangeDate = function() {
  return this.setChangeDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.org.v2beta.DeactivateOrganizationResponse.prototype.hasChangeDate = function() {
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
proto.zitadel.org.v2beta.ActivateOrganizationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.org.v2beta.ActivateOrganizationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.org.v2beta.ActivateOrganizationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2beta.ActivateOrganizationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.zitadel.org.v2beta.ActivateOrganizationRequest}
 */
proto.zitadel.org.v2beta.ActivateOrganizationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.org.v2beta.ActivateOrganizationRequest;
  return proto.zitadel.org.v2beta.ActivateOrganizationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.org.v2beta.ActivateOrganizationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.org.v2beta.ActivateOrganizationRequest}
 */
proto.zitadel.org.v2beta.ActivateOrganizationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
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
proto.zitadel.org.v2beta.ActivateOrganizationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.org.v2beta.ActivateOrganizationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.org.v2beta.ActivateOrganizationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2beta.ActivateOrganizationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.zitadel.org.v2beta.ActivateOrganizationRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.org.v2beta.ActivateOrganizationRequest} returns this
 */
proto.zitadel.org.v2beta.ActivateOrganizationRequest.prototype.setId = function(value) {
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
proto.zitadel.org.v2beta.ActivateOrganizationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.org.v2beta.ActivateOrganizationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.org.v2beta.ActivateOrganizationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2beta.ActivateOrganizationResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.org.v2beta.ActivateOrganizationResponse}
 */
proto.zitadel.org.v2beta.ActivateOrganizationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.org.v2beta.ActivateOrganizationResponse;
  return proto.zitadel.org.v2beta.ActivateOrganizationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.org.v2beta.ActivateOrganizationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.org.v2beta.ActivateOrganizationResponse}
 */
proto.zitadel.org.v2beta.ActivateOrganizationResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.org.v2beta.ActivateOrganizationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.org.v2beta.ActivateOrganizationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.org.v2beta.ActivateOrganizationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2beta.ActivateOrganizationResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.org.v2beta.ActivateOrganizationResponse.prototype.getChangeDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.zitadel.org.v2beta.ActivateOrganizationResponse} returns this
*/
proto.zitadel.org.v2beta.ActivateOrganizationResponse.prototype.setChangeDate = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.org.v2beta.ActivateOrganizationResponse} returns this
 */
proto.zitadel.org.v2beta.ActivateOrganizationResponse.prototype.clearChangeDate = function() {
  return this.setChangeDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.org.v2beta.ActivateOrganizationResponse.prototype.hasChangeDate = function() {
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
proto.zitadel.org.v2beta.AddOrganizationDomainRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.org.v2beta.AddOrganizationDomainRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.org.v2beta.AddOrganizationDomainRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2beta.AddOrganizationDomainRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.org.v2beta.AddOrganizationDomainRequest}
 */
proto.zitadel.org.v2beta.AddOrganizationDomainRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.org.v2beta.AddOrganizationDomainRequest;
  return proto.zitadel.org.v2beta.AddOrganizationDomainRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.org.v2beta.AddOrganizationDomainRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.org.v2beta.AddOrganizationDomainRequest}
 */
proto.zitadel.org.v2beta.AddOrganizationDomainRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.org.v2beta.AddOrganizationDomainRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.org.v2beta.AddOrganizationDomainRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.org.v2beta.AddOrganizationDomainRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2beta.AddOrganizationDomainRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.org.v2beta.AddOrganizationDomainRequest.prototype.getOrganizationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.org.v2beta.AddOrganizationDomainRequest} returns this
 */
proto.zitadel.org.v2beta.AddOrganizationDomainRequest.prototype.setOrganizationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string domain = 2;
 * @return {string}
 */
proto.zitadel.org.v2beta.AddOrganizationDomainRequest.prototype.getDomain = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.org.v2beta.AddOrganizationDomainRequest} returns this
 */
proto.zitadel.org.v2beta.AddOrganizationDomainRequest.prototype.setDomain = function(value) {
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
proto.zitadel.org.v2beta.AddOrganizationDomainResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.org.v2beta.AddOrganizationDomainResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.org.v2beta.AddOrganizationDomainResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2beta.AddOrganizationDomainResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.org.v2beta.AddOrganizationDomainResponse}
 */
proto.zitadel.org.v2beta.AddOrganizationDomainResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.org.v2beta.AddOrganizationDomainResponse;
  return proto.zitadel.org.v2beta.AddOrganizationDomainResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.org.v2beta.AddOrganizationDomainResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.org.v2beta.AddOrganizationDomainResponse}
 */
proto.zitadel.org.v2beta.AddOrganizationDomainResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.org.v2beta.AddOrganizationDomainResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.org.v2beta.AddOrganizationDomainResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.org.v2beta.AddOrganizationDomainResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2beta.AddOrganizationDomainResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.org.v2beta.AddOrganizationDomainResponse.prototype.getCreationDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.zitadel.org.v2beta.AddOrganizationDomainResponse} returns this
*/
proto.zitadel.org.v2beta.AddOrganizationDomainResponse.prototype.setCreationDate = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.org.v2beta.AddOrganizationDomainResponse} returns this
 */
proto.zitadel.org.v2beta.AddOrganizationDomainResponse.prototype.clearCreationDate = function() {
  return this.setCreationDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.org.v2beta.AddOrganizationDomainResponse.prototype.hasCreationDate = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.org.v2beta.ListOrganizationDomainsRequest.repeatedFields_ = [3];



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
proto.zitadel.org.v2beta.ListOrganizationDomainsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.org.v2beta.ListOrganizationDomainsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.org.v2beta.ListOrganizationDomainsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2beta.ListOrganizationDomainsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
organizationId: jspb.Message.getFieldWithDefault(msg, 1, ""),
pagination: (f = msg.getPagination()) && zitadel_filter_v2beta_filter_pb.PaginationRequest.toObject(includeInstance, f),
filtersList: jspb.Message.toObjectList(msg.getFiltersList(),
    zitadel_org_v2beta_org_pb.DomainSearchFilter.toObject, includeInstance)
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
 * @return {!proto.zitadel.org.v2beta.ListOrganizationDomainsRequest}
 */
proto.zitadel.org.v2beta.ListOrganizationDomainsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.org.v2beta.ListOrganizationDomainsRequest;
  return proto.zitadel.org.v2beta.ListOrganizationDomainsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.org.v2beta.ListOrganizationDomainsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.org.v2beta.ListOrganizationDomainsRequest}
 */
proto.zitadel.org.v2beta.ListOrganizationDomainsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new zitadel_filter_v2beta_filter_pb.PaginationRequest;
      reader.readMessage(value,zitadel_filter_v2beta_filter_pb.PaginationRequest.deserializeBinaryFromReader);
      msg.setPagination(value);
      break;
    case 3:
      var value = new zitadel_org_v2beta_org_pb.DomainSearchFilter;
      reader.readMessage(value,zitadel_org_v2beta_org_pb.DomainSearchFilter.deserializeBinaryFromReader);
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
proto.zitadel.org.v2beta.ListOrganizationDomainsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.org.v2beta.ListOrganizationDomainsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.org.v2beta.ListOrganizationDomainsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2beta.ListOrganizationDomainsRequest.serializeBinaryToWriter = function(message, writer) {
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
      zitadel_filter_v2beta_filter_pb.PaginationRequest.serializeBinaryToWriter
    );
  }
  f = message.getFiltersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      zitadel_org_v2beta_org_pb.DomainSearchFilter.serializeBinaryToWriter
    );
  }
};


/**
 * optional string organization_id = 1;
 * @return {string}
 */
proto.zitadel.org.v2beta.ListOrganizationDomainsRequest.prototype.getOrganizationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.org.v2beta.ListOrganizationDomainsRequest} returns this
 */
proto.zitadel.org.v2beta.ListOrganizationDomainsRequest.prototype.setOrganizationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional zitadel.filter.v2beta.PaginationRequest pagination = 2;
 * @return {?proto.zitadel.filter.v2beta.PaginationRequest}
 */
proto.zitadel.org.v2beta.ListOrganizationDomainsRequest.prototype.getPagination = function() {
  return /** @type{?proto.zitadel.filter.v2beta.PaginationRequest} */ (
    jspb.Message.getWrapperField(this, zitadel_filter_v2beta_filter_pb.PaginationRequest, 2));
};


/**
 * @param {?proto.zitadel.filter.v2beta.PaginationRequest|undefined} value
 * @return {!proto.zitadel.org.v2beta.ListOrganizationDomainsRequest} returns this
*/
proto.zitadel.org.v2beta.ListOrganizationDomainsRequest.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.org.v2beta.ListOrganizationDomainsRequest} returns this
 */
proto.zitadel.org.v2beta.ListOrganizationDomainsRequest.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.org.v2beta.ListOrganizationDomainsRequest.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated DomainSearchFilter filters = 3;
 * @return {!Array<!proto.zitadel.org.v2beta.DomainSearchFilter>}
 */
proto.zitadel.org.v2beta.ListOrganizationDomainsRequest.prototype.getFiltersList = function() {
  return /** @type{!Array<!proto.zitadel.org.v2beta.DomainSearchFilter>} */ (
    jspb.Message.getRepeatedWrapperField(this, zitadel_org_v2beta_org_pb.DomainSearchFilter, 3));
};


/**
 * @param {!Array<!proto.zitadel.org.v2beta.DomainSearchFilter>} value
 * @return {!proto.zitadel.org.v2beta.ListOrganizationDomainsRequest} returns this
*/
proto.zitadel.org.v2beta.ListOrganizationDomainsRequest.prototype.setFiltersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.zitadel.org.v2beta.DomainSearchFilter=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zitadel.org.v2beta.DomainSearchFilter}
 */
proto.zitadel.org.v2beta.ListOrganizationDomainsRequest.prototype.addFilters = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.zitadel.org.v2beta.DomainSearchFilter, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.org.v2beta.ListOrganizationDomainsRequest} returns this
 */
proto.zitadel.org.v2beta.ListOrganizationDomainsRequest.prototype.clearFiltersList = function() {
  return this.setFiltersList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.org.v2beta.ListOrganizationDomainsResponse.repeatedFields_ = [2];



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
proto.zitadel.org.v2beta.ListOrganizationDomainsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.org.v2beta.ListOrganizationDomainsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.org.v2beta.ListOrganizationDomainsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2beta.ListOrganizationDomainsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
pagination: (f = msg.getPagination()) && zitadel_filter_v2beta_filter_pb.PaginationResponse.toObject(includeInstance, f),
domainsList: jspb.Message.toObjectList(msg.getDomainsList(),
    zitadel_org_v2beta_org_pb.Domain.toObject, includeInstance)
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
 * @return {!proto.zitadel.org.v2beta.ListOrganizationDomainsResponse}
 */
proto.zitadel.org.v2beta.ListOrganizationDomainsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.org.v2beta.ListOrganizationDomainsResponse;
  return proto.zitadel.org.v2beta.ListOrganizationDomainsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.org.v2beta.ListOrganizationDomainsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.org.v2beta.ListOrganizationDomainsResponse}
 */
proto.zitadel.org.v2beta.ListOrganizationDomainsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_filter_v2beta_filter_pb.PaginationResponse;
      reader.readMessage(value,zitadel_filter_v2beta_filter_pb.PaginationResponse.deserializeBinaryFromReader);
      msg.setPagination(value);
      break;
    case 2:
      var value = new zitadel_org_v2beta_org_pb.Domain;
      reader.readMessage(value,zitadel_org_v2beta_org_pb.Domain.deserializeBinaryFromReader);
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
proto.zitadel.org.v2beta.ListOrganizationDomainsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.org.v2beta.ListOrganizationDomainsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.org.v2beta.ListOrganizationDomainsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2beta.ListOrganizationDomainsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_filter_v2beta_filter_pb.PaginationResponse.serializeBinaryToWriter
    );
  }
  f = message.getDomainsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      zitadel_org_v2beta_org_pb.Domain.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.filter.v2beta.PaginationResponse pagination = 1;
 * @return {?proto.zitadel.filter.v2beta.PaginationResponse}
 */
proto.zitadel.org.v2beta.ListOrganizationDomainsResponse.prototype.getPagination = function() {
  return /** @type{?proto.zitadel.filter.v2beta.PaginationResponse} */ (
    jspb.Message.getWrapperField(this, zitadel_filter_v2beta_filter_pb.PaginationResponse, 1));
};


/**
 * @param {?proto.zitadel.filter.v2beta.PaginationResponse|undefined} value
 * @return {!proto.zitadel.org.v2beta.ListOrganizationDomainsResponse} returns this
*/
proto.zitadel.org.v2beta.ListOrganizationDomainsResponse.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.org.v2beta.ListOrganizationDomainsResponse} returns this
 */
proto.zitadel.org.v2beta.ListOrganizationDomainsResponse.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.org.v2beta.ListOrganizationDomainsResponse.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Domain domains = 2;
 * @return {!Array<!proto.zitadel.org.v2beta.Domain>}
 */
proto.zitadel.org.v2beta.ListOrganizationDomainsResponse.prototype.getDomainsList = function() {
  return /** @type{!Array<!proto.zitadel.org.v2beta.Domain>} */ (
    jspb.Message.getRepeatedWrapperField(this, zitadel_org_v2beta_org_pb.Domain, 2));
};


/**
 * @param {!Array<!proto.zitadel.org.v2beta.Domain>} value
 * @return {!proto.zitadel.org.v2beta.ListOrganizationDomainsResponse} returns this
*/
proto.zitadel.org.v2beta.ListOrganizationDomainsResponse.prototype.setDomainsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.zitadel.org.v2beta.Domain=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zitadel.org.v2beta.Domain}
 */
proto.zitadel.org.v2beta.ListOrganizationDomainsResponse.prototype.addDomains = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.zitadel.org.v2beta.Domain, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.org.v2beta.ListOrganizationDomainsResponse} returns this
 */
proto.zitadel.org.v2beta.ListOrganizationDomainsResponse.prototype.clearDomainsList = function() {
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
proto.zitadel.org.v2beta.DeleteOrganizationDomainRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.org.v2beta.DeleteOrganizationDomainRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.org.v2beta.DeleteOrganizationDomainRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2beta.DeleteOrganizationDomainRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.org.v2beta.DeleteOrganizationDomainRequest}
 */
proto.zitadel.org.v2beta.DeleteOrganizationDomainRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.org.v2beta.DeleteOrganizationDomainRequest;
  return proto.zitadel.org.v2beta.DeleteOrganizationDomainRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.org.v2beta.DeleteOrganizationDomainRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.org.v2beta.DeleteOrganizationDomainRequest}
 */
proto.zitadel.org.v2beta.DeleteOrganizationDomainRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.org.v2beta.DeleteOrganizationDomainRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.org.v2beta.DeleteOrganizationDomainRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.org.v2beta.DeleteOrganizationDomainRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2beta.DeleteOrganizationDomainRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.org.v2beta.DeleteOrganizationDomainRequest.prototype.getOrganizationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.org.v2beta.DeleteOrganizationDomainRequest} returns this
 */
proto.zitadel.org.v2beta.DeleteOrganizationDomainRequest.prototype.setOrganizationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string domain = 2;
 * @return {string}
 */
proto.zitadel.org.v2beta.DeleteOrganizationDomainRequest.prototype.getDomain = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.org.v2beta.DeleteOrganizationDomainRequest} returns this
 */
proto.zitadel.org.v2beta.DeleteOrganizationDomainRequest.prototype.setDomain = function(value) {
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
proto.zitadel.org.v2beta.DeleteOrganizationDomainResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.org.v2beta.DeleteOrganizationDomainResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.org.v2beta.DeleteOrganizationDomainResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2beta.DeleteOrganizationDomainResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.org.v2beta.DeleteOrganizationDomainResponse}
 */
proto.zitadel.org.v2beta.DeleteOrganizationDomainResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.org.v2beta.DeleteOrganizationDomainResponse;
  return proto.zitadel.org.v2beta.DeleteOrganizationDomainResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.org.v2beta.DeleteOrganizationDomainResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.org.v2beta.DeleteOrganizationDomainResponse}
 */
proto.zitadel.org.v2beta.DeleteOrganizationDomainResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.org.v2beta.DeleteOrganizationDomainResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.org.v2beta.DeleteOrganizationDomainResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.org.v2beta.DeleteOrganizationDomainResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2beta.DeleteOrganizationDomainResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.org.v2beta.DeleteOrganizationDomainResponse.prototype.getDeletionDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.zitadel.org.v2beta.DeleteOrganizationDomainResponse} returns this
*/
proto.zitadel.org.v2beta.DeleteOrganizationDomainResponse.prototype.setDeletionDate = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.org.v2beta.DeleteOrganizationDomainResponse} returns this
 */
proto.zitadel.org.v2beta.DeleteOrganizationDomainResponse.prototype.clearDeletionDate = function() {
  return this.setDeletionDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.org.v2beta.DeleteOrganizationDomainResponse.prototype.hasDeletionDate = function() {
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
proto.zitadel.org.v2beta.GenerateOrganizationDomainValidationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.org.v2beta.GenerateOrganizationDomainValidationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.org.v2beta.GenerateOrganizationDomainValidationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2beta.GenerateOrganizationDomainValidationRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.org.v2beta.GenerateOrganizationDomainValidationRequest}
 */
proto.zitadel.org.v2beta.GenerateOrganizationDomainValidationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.org.v2beta.GenerateOrganizationDomainValidationRequest;
  return proto.zitadel.org.v2beta.GenerateOrganizationDomainValidationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.org.v2beta.GenerateOrganizationDomainValidationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.org.v2beta.GenerateOrganizationDomainValidationRequest}
 */
proto.zitadel.org.v2beta.GenerateOrganizationDomainValidationRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.zitadel.org.v2beta.DomainValidationType} */ (reader.readEnum());
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
proto.zitadel.org.v2beta.GenerateOrganizationDomainValidationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.org.v2beta.GenerateOrganizationDomainValidationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.org.v2beta.GenerateOrganizationDomainValidationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2beta.GenerateOrganizationDomainValidationRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.org.v2beta.GenerateOrganizationDomainValidationRequest.prototype.getOrganizationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.org.v2beta.GenerateOrganizationDomainValidationRequest} returns this
 */
proto.zitadel.org.v2beta.GenerateOrganizationDomainValidationRequest.prototype.setOrganizationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string domain = 2;
 * @return {string}
 */
proto.zitadel.org.v2beta.GenerateOrganizationDomainValidationRequest.prototype.getDomain = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.org.v2beta.GenerateOrganizationDomainValidationRequest} returns this
 */
proto.zitadel.org.v2beta.GenerateOrganizationDomainValidationRequest.prototype.setDomain = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional DomainValidationType type = 3;
 * @return {!proto.zitadel.org.v2beta.DomainValidationType}
 */
proto.zitadel.org.v2beta.GenerateOrganizationDomainValidationRequest.prototype.getType = function() {
  return /** @type {!proto.zitadel.org.v2beta.DomainValidationType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.zitadel.org.v2beta.DomainValidationType} value
 * @return {!proto.zitadel.org.v2beta.GenerateOrganizationDomainValidationRequest} returns this
 */
proto.zitadel.org.v2beta.GenerateOrganizationDomainValidationRequest.prototype.setType = function(value) {
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
proto.zitadel.org.v2beta.GenerateOrganizationDomainValidationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.org.v2beta.GenerateOrganizationDomainValidationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.org.v2beta.GenerateOrganizationDomainValidationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2beta.GenerateOrganizationDomainValidationResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.org.v2beta.GenerateOrganizationDomainValidationResponse}
 */
proto.zitadel.org.v2beta.GenerateOrganizationDomainValidationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.org.v2beta.GenerateOrganizationDomainValidationResponse;
  return proto.zitadel.org.v2beta.GenerateOrganizationDomainValidationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.org.v2beta.GenerateOrganizationDomainValidationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.org.v2beta.GenerateOrganizationDomainValidationResponse}
 */
proto.zitadel.org.v2beta.GenerateOrganizationDomainValidationResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.org.v2beta.GenerateOrganizationDomainValidationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.org.v2beta.GenerateOrganizationDomainValidationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.org.v2beta.GenerateOrganizationDomainValidationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2beta.GenerateOrganizationDomainValidationResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.org.v2beta.GenerateOrganizationDomainValidationResponse.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.org.v2beta.GenerateOrganizationDomainValidationResponse} returns this
 */
proto.zitadel.org.v2beta.GenerateOrganizationDomainValidationResponse.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string url = 2;
 * @return {string}
 */
proto.zitadel.org.v2beta.GenerateOrganizationDomainValidationResponse.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.org.v2beta.GenerateOrganizationDomainValidationResponse} returns this
 */
proto.zitadel.org.v2beta.GenerateOrganizationDomainValidationResponse.prototype.setUrl = function(value) {
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
proto.zitadel.org.v2beta.VerifyOrganizationDomainRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.org.v2beta.VerifyOrganizationDomainRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.org.v2beta.VerifyOrganizationDomainRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2beta.VerifyOrganizationDomainRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.org.v2beta.VerifyOrganizationDomainRequest}
 */
proto.zitadel.org.v2beta.VerifyOrganizationDomainRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.org.v2beta.VerifyOrganizationDomainRequest;
  return proto.zitadel.org.v2beta.VerifyOrganizationDomainRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.org.v2beta.VerifyOrganizationDomainRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.org.v2beta.VerifyOrganizationDomainRequest}
 */
proto.zitadel.org.v2beta.VerifyOrganizationDomainRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.org.v2beta.VerifyOrganizationDomainRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.org.v2beta.VerifyOrganizationDomainRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.org.v2beta.VerifyOrganizationDomainRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2beta.VerifyOrganizationDomainRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.org.v2beta.VerifyOrganizationDomainRequest.prototype.getOrganizationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.org.v2beta.VerifyOrganizationDomainRequest} returns this
 */
proto.zitadel.org.v2beta.VerifyOrganizationDomainRequest.prototype.setOrganizationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string domain = 2;
 * @return {string}
 */
proto.zitadel.org.v2beta.VerifyOrganizationDomainRequest.prototype.getDomain = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.org.v2beta.VerifyOrganizationDomainRequest} returns this
 */
proto.zitadel.org.v2beta.VerifyOrganizationDomainRequest.prototype.setDomain = function(value) {
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
proto.zitadel.org.v2beta.VerifyOrganizationDomainResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.org.v2beta.VerifyOrganizationDomainResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.org.v2beta.VerifyOrganizationDomainResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2beta.VerifyOrganizationDomainResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.org.v2beta.VerifyOrganizationDomainResponse}
 */
proto.zitadel.org.v2beta.VerifyOrganizationDomainResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.org.v2beta.VerifyOrganizationDomainResponse;
  return proto.zitadel.org.v2beta.VerifyOrganizationDomainResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.org.v2beta.VerifyOrganizationDomainResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.org.v2beta.VerifyOrganizationDomainResponse}
 */
proto.zitadel.org.v2beta.VerifyOrganizationDomainResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.org.v2beta.VerifyOrganizationDomainResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.org.v2beta.VerifyOrganizationDomainResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.org.v2beta.VerifyOrganizationDomainResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2beta.VerifyOrganizationDomainResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.org.v2beta.VerifyOrganizationDomainResponse.prototype.getChangeDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.zitadel.org.v2beta.VerifyOrganizationDomainResponse} returns this
*/
proto.zitadel.org.v2beta.VerifyOrganizationDomainResponse.prototype.setChangeDate = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.org.v2beta.VerifyOrganizationDomainResponse} returns this
 */
proto.zitadel.org.v2beta.VerifyOrganizationDomainResponse.prototype.clearChangeDate = function() {
  return this.setChangeDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.org.v2beta.VerifyOrganizationDomainResponse.prototype.hasChangeDate = function() {
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
proto.zitadel.org.v2beta.Metadata.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.org.v2beta.Metadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.org.v2beta.Metadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2beta.Metadata.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.org.v2beta.Metadata}
 */
proto.zitadel.org.v2beta.Metadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.org.v2beta.Metadata;
  return proto.zitadel.org.v2beta.Metadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.org.v2beta.Metadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.org.v2beta.Metadata}
 */
proto.zitadel.org.v2beta.Metadata.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.org.v2beta.Metadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.org.v2beta.Metadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.org.v2beta.Metadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2beta.Metadata.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.org.v2beta.Metadata.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.org.v2beta.Metadata} returns this
 */
proto.zitadel.org.v2beta.Metadata.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bytes value = 2;
 * @return {!(string|Uint8Array)}
 */
proto.zitadel.org.v2beta.Metadata.prototype.getValue = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes value = 2;
 * This is a type-conversion wrapper around `getValue()`
 * @return {string}
 */
proto.zitadel.org.v2beta.Metadata.prototype.getValue_asB64 = function() {
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
proto.zitadel.org.v2beta.Metadata.prototype.getValue_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getValue()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.zitadel.org.v2beta.Metadata} returns this
 */
proto.zitadel.org.v2beta.Metadata.prototype.setValue = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.org.v2beta.SetOrganizationMetadataRequest.repeatedFields_ = [2];



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
proto.zitadel.org.v2beta.SetOrganizationMetadataRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.org.v2beta.SetOrganizationMetadataRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.org.v2beta.SetOrganizationMetadataRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2beta.SetOrganizationMetadataRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
organizationId: jspb.Message.getFieldWithDefault(msg, 1, ""),
metadataList: jspb.Message.toObjectList(msg.getMetadataList(),
    proto.zitadel.org.v2beta.Metadata.toObject, includeInstance)
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
 * @return {!proto.zitadel.org.v2beta.SetOrganizationMetadataRequest}
 */
proto.zitadel.org.v2beta.SetOrganizationMetadataRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.org.v2beta.SetOrganizationMetadataRequest;
  return proto.zitadel.org.v2beta.SetOrganizationMetadataRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.org.v2beta.SetOrganizationMetadataRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.org.v2beta.SetOrganizationMetadataRequest}
 */
proto.zitadel.org.v2beta.SetOrganizationMetadataRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.zitadel.org.v2beta.Metadata;
      reader.readMessage(value,proto.zitadel.org.v2beta.Metadata.deserializeBinaryFromReader);
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
proto.zitadel.org.v2beta.SetOrganizationMetadataRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.org.v2beta.SetOrganizationMetadataRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.org.v2beta.SetOrganizationMetadataRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2beta.SetOrganizationMetadataRequest.serializeBinaryToWriter = function(message, writer) {
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
      proto.zitadel.org.v2beta.Metadata.serializeBinaryToWriter
    );
  }
};


/**
 * optional string organization_id = 1;
 * @return {string}
 */
proto.zitadel.org.v2beta.SetOrganizationMetadataRequest.prototype.getOrganizationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.org.v2beta.SetOrganizationMetadataRequest} returns this
 */
proto.zitadel.org.v2beta.SetOrganizationMetadataRequest.prototype.setOrganizationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated Metadata metadata = 2;
 * @return {!Array<!proto.zitadel.org.v2beta.Metadata>}
 */
proto.zitadel.org.v2beta.SetOrganizationMetadataRequest.prototype.getMetadataList = function() {
  return /** @type{!Array<!proto.zitadel.org.v2beta.Metadata>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.zitadel.org.v2beta.Metadata, 2));
};


/**
 * @param {!Array<!proto.zitadel.org.v2beta.Metadata>} value
 * @return {!proto.zitadel.org.v2beta.SetOrganizationMetadataRequest} returns this
*/
proto.zitadel.org.v2beta.SetOrganizationMetadataRequest.prototype.setMetadataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.zitadel.org.v2beta.Metadata=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zitadel.org.v2beta.Metadata}
 */
proto.zitadel.org.v2beta.SetOrganizationMetadataRequest.prototype.addMetadata = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.zitadel.org.v2beta.Metadata, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.org.v2beta.SetOrganizationMetadataRequest} returns this
 */
proto.zitadel.org.v2beta.SetOrganizationMetadataRequest.prototype.clearMetadataList = function() {
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
proto.zitadel.org.v2beta.SetOrganizationMetadataResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.org.v2beta.SetOrganizationMetadataResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.org.v2beta.SetOrganizationMetadataResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2beta.SetOrganizationMetadataResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.org.v2beta.SetOrganizationMetadataResponse}
 */
proto.zitadel.org.v2beta.SetOrganizationMetadataResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.org.v2beta.SetOrganizationMetadataResponse;
  return proto.zitadel.org.v2beta.SetOrganizationMetadataResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.org.v2beta.SetOrganizationMetadataResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.org.v2beta.SetOrganizationMetadataResponse}
 */
proto.zitadel.org.v2beta.SetOrganizationMetadataResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.org.v2beta.SetOrganizationMetadataResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.org.v2beta.SetOrganizationMetadataResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.org.v2beta.SetOrganizationMetadataResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2beta.SetOrganizationMetadataResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.org.v2beta.SetOrganizationMetadataResponse.prototype.getSetDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.zitadel.org.v2beta.SetOrganizationMetadataResponse} returns this
*/
proto.zitadel.org.v2beta.SetOrganizationMetadataResponse.prototype.setSetDate = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.org.v2beta.SetOrganizationMetadataResponse} returns this
 */
proto.zitadel.org.v2beta.SetOrganizationMetadataResponse.prototype.clearSetDate = function() {
  return this.setSetDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.org.v2beta.SetOrganizationMetadataResponse.prototype.hasSetDate = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.org.v2beta.ListOrganizationMetadataRequest.repeatedFields_ = [3];



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
proto.zitadel.org.v2beta.ListOrganizationMetadataRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.org.v2beta.ListOrganizationMetadataRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.org.v2beta.ListOrganizationMetadataRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2beta.ListOrganizationMetadataRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
organizationId: jspb.Message.getFieldWithDefault(msg, 1, ""),
pagination: (f = msg.getPagination()) && zitadel_filter_v2beta_filter_pb.PaginationRequest.toObject(includeInstance, f),
filterList: jspb.Message.toObjectList(msg.getFilterList(),
    zitadel_metadata_v2beta_metadata_pb.MetadataQuery.toObject, includeInstance)
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
 * @return {!proto.zitadel.org.v2beta.ListOrganizationMetadataRequest}
 */
proto.zitadel.org.v2beta.ListOrganizationMetadataRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.org.v2beta.ListOrganizationMetadataRequest;
  return proto.zitadel.org.v2beta.ListOrganizationMetadataRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.org.v2beta.ListOrganizationMetadataRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.org.v2beta.ListOrganizationMetadataRequest}
 */
proto.zitadel.org.v2beta.ListOrganizationMetadataRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new zitadel_filter_v2beta_filter_pb.PaginationRequest;
      reader.readMessage(value,zitadel_filter_v2beta_filter_pb.PaginationRequest.deserializeBinaryFromReader);
      msg.setPagination(value);
      break;
    case 3:
      var value = new zitadel_metadata_v2beta_metadata_pb.MetadataQuery;
      reader.readMessage(value,zitadel_metadata_v2beta_metadata_pb.MetadataQuery.deserializeBinaryFromReader);
      msg.addFilter(value);
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
proto.zitadel.org.v2beta.ListOrganizationMetadataRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.org.v2beta.ListOrganizationMetadataRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.org.v2beta.ListOrganizationMetadataRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2beta.ListOrganizationMetadataRequest.serializeBinaryToWriter = function(message, writer) {
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
      zitadel_filter_v2beta_filter_pb.PaginationRequest.serializeBinaryToWriter
    );
  }
  f = message.getFilterList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      zitadel_metadata_v2beta_metadata_pb.MetadataQuery.serializeBinaryToWriter
    );
  }
};


/**
 * optional string organization_id = 1;
 * @return {string}
 */
proto.zitadel.org.v2beta.ListOrganizationMetadataRequest.prototype.getOrganizationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.org.v2beta.ListOrganizationMetadataRequest} returns this
 */
proto.zitadel.org.v2beta.ListOrganizationMetadataRequest.prototype.setOrganizationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional zitadel.filter.v2beta.PaginationRequest pagination = 2;
 * @return {?proto.zitadel.filter.v2beta.PaginationRequest}
 */
proto.zitadel.org.v2beta.ListOrganizationMetadataRequest.prototype.getPagination = function() {
  return /** @type{?proto.zitadel.filter.v2beta.PaginationRequest} */ (
    jspb.Message.getWrapperField(this, zitadel_filter_v2beta_filter_pb.PaginationRequest, 2));
};


/**
 * @param {?proto.zitadel.filter.v2beta.PaginationRequest|undefined} value
 * @return {!proto.zitadel.org.v2beta.ListOrganizationMetadataRequest} returns this
*/
proto.zitadel.org.v2beta.ListOrganizationMetadataRequest.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.org.v2beta.ListOrganizationMetadataRequest} returns this
 */
proto.zitadel.org.v2beta.ListOrganizationMetadataRequest.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.org.v2beta.ListOrganizationMetadataRequest.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated zitadel.metadata.v2beta.MetadataQuery filter = 3;
 * @return {!Array<!proto.zitadel.metadata.v2beta.MetadataQuery>}
 */
proto.zitadel.org.v2beta.ListOrganizationMetadataRequest.prototype.getFilterList = function() {
  return /** @type{!Array<!proto.zitadel.metadata.v2beta.MetadataQuery>} */ (
    jspb.Message.getRepeatedWrapperField(this, zitadel_metadata_v2beta_metadata_pb.MetadataQuery, 3));
};


/**
 * @param {!Array<!proto.zitadel.metadata.v2beta.MetadataQuery>} value
 * @return {!proto.zitadel.org.v2beta.ListOrganizationMetadataRequest} returns this
*/
proto.zitadel.org.v2beta.ListOrganizationMetadataRequest.prototype.setFilterList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.zitadel.metadata.v2beta.MetadataQuery=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zitadel.metadata.v2beta.MetadataQuery}
 */
proto.zitadel.org.v2beta.ListOrganizationMetadataRequest.prototype.addFilter = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.zitadel.metadata.v2beta.MetadataQuery, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.org.v2beta.ListOrganizationMetadataRequest} returns this
 */
proto.zitadel.org.v2beta.ListOrganizationMetadataRequest.prototype.clearFilterList = function() {
  return this.setFilterList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.org.v2beta.ListOrganizationMetadataResponse.repeatedFields_ = [2];



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
proto.zitadel.org.v2beta.ListOrganizationMetadataResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.org.v2beta.ListOrganizationMetadataResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.org.v2beta.ListOrganizationMetadataResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2beta.ListOrganizationMetadataResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
pagination: (f = msg.getPagination()) && zitadel_filter_v2beta_filter_pb.PaginationResponse.toObject(includeInstance, f),
metadataList: jspb.Message.toObjectList(msg.getMetadataList(),
    zitadel_metadata_v2beta_metadata_pb.Metadata.toObject, includeInstance)
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
 * @return {!proto.zitadel.org.v2beta.ListOrganizationMetadataResponse}
 */
proto.zitadel.org.v2beta.ListOrganizationMetadataResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.org.v2beta.ListOrganizationMetadataResponse;
  return proto.zitadel.org.v2beta.ListOrganizationMetadataResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.org.v2beta.ListOrganizationMetadataResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.org.v2beta.ListOrganizationMetadataResponse}
 */
proto.zitadel.org.v2beta.ListOrganizationMetadataResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_filter_v2beta_filter_pb.PaginationResponse;
      reader.readMessage(value,zitadel_filter_v2beta_filter_pb.PaginationResponse.deserializeBinaryFromReader);
      msg.setPagination(value);
      break;
    case 2:
      var value = new zitadel_metadata_v2beta_metadata_pb.Metadata;
      reader.readMessage(value,zitadel_metadata_v2beta_metadata_pb.Metadata.deserializeBinaryFromReader);
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
proto.zitadel.org.v2beta.ListOrganizationMetadataResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.org.v2beta.ListOrganizationMetadataResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.org.v2beta.ListOrganizationMetadataResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2beta.ListOrganizationMetadataResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_filter_v2beta_filter_pb.PaginationResponse.serializeBinaryToWriter
    );
  }
  f = message.getMetadataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      zitadel_metadata_v2beta_metadata_pb.Metadata.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.filter.v2beta.PaginationResponse pagination = 1;
 * @return {?proto.zitadel.filter.v2beta.PaginationResponse}
 */
proto.zitadel.org.v2beta.ListOrganizationMetadataResponse.prototype.getPagination = function() {
  return /** @type{?proto.zitadel.filter.v2beta.PaginationResponse} */ (
    jspb.Message.getWrapperField(this, zitadel_filter_v2beta_filter_pb.PaginationResponse, 1));
};


/**
 * @param {?proto.zitadel.filter.v2beta.PaginationResponse|undefined} value
 * @return {!proto.zitadel.org.v2beta.ListOrganizationMetadataResponse} returns this
*/
proto.zitadel.org.v2beta.ListOrganizationMetadataResponse.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.org.v2beta.ListOrganizationMetadataResponse} returns this
 */
proto.zitadel.org.v2beta.ListOrganizationMetadataResponse.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.org.v2beta.ListOrganizationMetadataResponse.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated zitadel.metadata.v2beta.Metadata metadata = 2;
 * @return {!Array<!proto.zitadel.metadata.v2beta.Metadata>}
 */
proto.zitadel.org.v2beta.ListOrganizationMetadataResponse.prototype.getMetadataList = function() {
  return /** @type{!Array<!proto.zitadel.metadata.v2beta.Metadata>} */ (
    jspb.Message.getRepeatedWrapperField(this, zitadel_metadata_v2beta_metadata_pb.Metadata, 2));
};


/**
 * @param {!Array<!proto.zitadel.metadata.v2beta.Metadata>} value
 * @return {!proto.zitadel.org.v2beta.ListOrganizationMetadataResponse} returns this
*/
proto.zitadel.org.v2beta.ListOrganizationMetadataResponse.prototype.setMetadataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.zitadel.metadata.v2beta.Metadata=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zitadel.metadata.v2beta.Metadata}
 */
proto.zitadel.org.v2beta.ListOrganizationMetadataResponse.prototype.addMetadata = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.zitadel.metadata.v2beta.Metadata, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.org.v2beta.ListOrganizationMetadataResponse} returns this
 */
proto.zitadel.org.v2beta.ListOrganizationMetadataResponse.prototype.clearMetadataList = function() {
  return this.setMetadataList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.org.v2beta.DeleteOrganizationMetadataRequest.repeatedFields_ = [2];



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
proto.zitadel.org.v2beta.DeleteOrganizationMetadataRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.org.v2beta.DeleteOrganizationMetadataRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.org.v2beta.DeleteOrganizationMetadataRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2beta.DeleteOrganizationMetadataRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.org.v2beta.DeleteOrganizationMetadataRequest}
 */
proto.zitadel.org.v2beta.DeleteOrganizationMetadataRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.org.v2beta.DeleteOrganizationMetadataRequest;
  return proto.zitadel.org.v2beta.DeleteOrganizationMetadataRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.org.v2beta.DeleteOrganizationMetadataRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.org.v2beta.DeleteOrganizationMetadataRequest}
 */
proto.zitadel.org.v2beta.DeleteOrganizationMetadataRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.org.v2beta.DeleteOrganizationMetadataRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.org.v2beta.DeleteOrganizationMetadataRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.org.v2beta.DeleteOrganizationMetadataRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2beta.DeleteOrganizationMetadataRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.org.v2beta.DeleteOrganizationMetadataRequest.prototype.getOrganizationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.org.v2beta.DeleteOrganizationMetadataRequest} returns this
 */
proto.zitadel.org.v2beta.DeleteOrganizationMetadataRequest.prototype.setOrganizationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string keys = 2;
 * @return {!Array<string>}
 */
proto.zitadel.org.v2beta.DeleteOrganizationMetadataRequest.prototype.getKeysList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.zitadel.org.v2beta.DeleteOrganizationMetadataRequest} returns this
 */
proto.zitadel.org.v2beta.DeleteOrganizationMetadataRequest.prototype.setKeysList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.zitadel.org.v2beta.DeleteOrganizationMetadataRequest} returns this
 */
proto.zitadel.org.v2beta.DeleteOrganizationMetadataRequest.prototype.addKeys = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.org.v2beta.DeleteOrganizationMetadataRequest} returns this
 */
proto.zitadel.org.v2beta.DeleteOrganizationMetadataRequest.prototype.clearKeysList = function() {
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
proto.zitadel.org.v2beta.DeleteOrganizationMetadataResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.org.v2beta.DeleteOrganizationMetadataResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.org.v2beta.DeleteOrganizationMetadataResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2beta.DeleteOrganizationMetadataResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.org.v2beta.DeleteOrganizationMetadataResponse}
 */
proto.zitadel.org.v2beta.DeleteOrganizationMetadataResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.org.v2beta.DeleteOrganizationMetadataResponse;
  return proto.zitadel.org.v2beta.DeleteOrganizationMetadataResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.org.v2beta.DeleteOrganizationMetadataResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.org.v2beta.DeleteOrganizationMetadataResponse}
 */
proto.zitadel.org.v2beta.DeleteOrganizationMetadataResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.org.v2beta.DeleteOrganizationMetadataResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.org.v2beta.DeleteOrganizationMetadataResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.org.v2beta.DeleteOrganizationMetadataResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.org.v2beta.DeleteOrganizationMetadataResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.org.v2beta.DeleteOrganizationMetadataResponse.prototype.getDeletionDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.zitadel.org.v2beta.DeleteOrganizationMetadataResponse} returns this
*/
proto.zitadel.org.v2beta.DeleteOrganizationMetadataResponse.prototype.setDeletionDate = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.org.v2beta.DeleteOrganizationMetadataResponse} returns this
 */
proto.zitadel.org.v2beta.DeleteOrganizationMetadataResponse.prototype.clearDeletionDate = function() {
  return this.setDeletionDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.org.v2beta.DeleteOrganizationMetadataResponse.prototype.hasDeletionDate = function() {
  return jspb.Message.getField(this, 1) != null;
};


goog.object.extend(exports, proto.zitadel.org.v2beta);
