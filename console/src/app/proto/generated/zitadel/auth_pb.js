// source: zitadel/auth.proto
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

var zitadel_user_pb = require('../zitadel/user_pb.js');
goog.object.extend(proto, zitadel_user_pb);
var zitadel_org_pb = require('../zitadel/org_pb.js');
goog.object.extend(proto, zitadel_org_pb);
var zitadel_change_pb = require('../zitadel/change_pb.js');
goog.object.extend(proto, zitadel_change_pb);
var zitadel_object_pb = require('../zitadel/object_pb.js');
goog.object.extend(proto, zitadel_object_pb);
var zitadel_options_pb = require('../zitadel/options_pb.js');
goog.object.extend(proto, zitadel_options_pb);
var zitadel_policy_pb = require('../zitadel/policy_pb.js');
goog.object.extend(proto, zitadel_policy_pb);
var zitadel_idp_pb = require('../zitadel/idp_pb.js');
goog.object.extend(proto, zitadel_idp_pb);
var zitadel_metadata_pb = require('../zitadel/metadata_pb.js');
goog.object.extend(proto, zitadel_metadata_pb);
var validate_validate_pb = require('../validate/validate_pb.js');
goog.object.extend(proto, validate_validate_pb);
var google_api_annotations_pb = require('../google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
var google_api_field_behavior_pb = require('../google/api/field_behavior_pb.js');
goog.object.extend(proto, google_api_field_behavior_pb);
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
goog.object.extend(proto, google_protobuf_duration_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var protoc$gen$openapiv2_options_annotations_pb = require('../protoc-gen-openapiv2/options/annotations_pb.js');
goog.object.extend(proto, protoc$gen$openapiv2_options_annotations_pb);
goog.exportSymbol('proto.zitadel.auth.v1.AddMyAuthFactorOTPEmailRequest', null, global);
goog.exportSymbol('proto.zitadel.auth.v1.AddMyAuthFactorOTPEmailResponse', null, global);
goog.exportSymbol('proto.zitadel.auth.v1.AddMyAuthFactorOTPRequest', null, global);
goog.exportSymbol('proto.zitadel.auth.v1.AddMyAuthFactorOTPResponse', null, global);
goog.exportSymbol('proto.zitadel.auth.v1.AddMyAuthFactorOTPSMSRequest', null, global);
goog.exportSymbol('proto.zitadel.auth.v1.AddMyAuthFactorOTPSMSResponse', null, global);
goog.exportSymbol('proto.zitadel.auth.v1.AddMyAuthFactorU2FRequest', null, global);
goog.exportSymbol('proto.zitadel.auth.v1.AddMyAuthFactorU2FResponse', null, global);
goog.exportSymbol('proto.zitadel.auth.v1.AddMyPasswordlessLinkRequest', null, global);
goog.exportSymbol('proto.zitadel.auth.v1.AddMyPasswordlessLinkResponse', null, global);
goog.exportSymbol('proto.zitadel.auth.v1.AddMyPasswordlessRequest', null, global);
goog.exportSymbol('proto.zitadel.auth.v1.AddMyPasswordlessResponse', null, global);
goog.exportSymbol('proto.zitadel.auth.v1.BulkRemoveMyMetadataRequest', null, global);
goog.exportSymbol('proto.zitadel.auth.v1.BulkRemoveMyMetadataResponse', null, global);
goog.exportSymbol('proto.zitadel.auth.v1.BulkSetMyMetadataRequest', null, global);
goog.exportSymbol('proto.zitadel.auth.v1.BulkSetMyMetadataRequest.Metadata', null, global);
goog.exportSymbol('proto.zitadel.auth.v1.BulkSetMyMetadataResponse', null, global);
goog.exportSymbol('proto.zitadel.auth.v1.GetMyEmailRequest', null, global);
goog.exportSymbol('proto.zitadel.auth.v1.GetMyEmailResponse', null, global);
goog.exportSymbol('proto.zitadel.auth.v1.GetMyLabelPolicyRequest', null, global);
goog.exportSymbol('proto.zitadel.auth.v1.GetMyLabelPolicyResponse', null, global);
goog.exportSymbol('proto.zitadel.auth.v1.GetMyLoginPolicyRequest', null, global);
goog.exportSymbol('proto.zitadel.auth.v1.GetMyLoginPolicyResponse', null, global);
goog.exportSymbol('proto.zitadel.auth.v1.GetMyMetadataRequest', null, global);
goog.exportSymbol('proto.zitadel.auth.v1.GetMyMetadataResponse', null, global);
goog.exportSymbol('proto.zitadel.auth.v1.GetMyPasswordComplexityPolicyRequest', null, global);
goog.exportSymbol('proto.zitadel.auth.v1.GetMyPasswordComplexityPolicyResponse', null, global);
goog.exportSymbol('proto.zitadel.auth.v1.GetMyPhoneRequest', null, global);
goog.exportSymbol('proto.zitadel.auth.v1.GetMyPhoneResponse', null, global);
goog.exportSymbol('proto.zitadel.auth.v1.GetMyPrivacyPolicyRequest', null, global);
goog.exportSymbol('proto.zitadel.auth.v1.GetMyPrivacyPolicyResponse', null, global);
goog.exportSymbol('proto.zitadel.auth.v1.GetMyProfileRequest', null, global);
goog.exportSymbol('proto.zitadel.auth.v1.GetMyProfileResponse', null, global);
goog.exportSymbol('proto.zitadel.auth.v1.GetMyUserRequest', null, global);
goog.exportSymbol('proto.zitadel.auth.v1.GetMyUserResponse', null, global);
goog.exportSymbol('proto.zitadel.auth.v1.GetSupportedLanguagesRequest', null, global);
goog.exportSymbol('proto.zitadel.auth.v1.GetSupportedLanguagesResponse', null, global);
goog.exportSymbol('proto.zitadel.auth.v1.HealthzRequest', null, global);
goog.exportSymbol('proto.zitadel.auth.v1.HealthzResponse', null, global);
goog.exportSymbol('proto.zitadel.auth.v1.ListMyAuthFactorsRequest', null, global);
goog.exportSymbol('proto.zitadel.auth.v1.ListMyAuthFactorsResponse', null, global);
goog.exportSymbol('proto.zitadel.auth.v1.ListMyLinkedIDPsRequest', null, global);
goog.exportSymbol('proto.zitadel.auth.v1.ListMyLinkedIDPsResponse', null, global);
goog.exportSymbol('proto.zitadel.auth.v1.ListMyMembershipsRequest', null, global);
goog.exportSymbol('proto.zitadel.auth.v1.ListMyMembershipsResponse', null, global);
goog.exportSymbol('proto.zitadel.auth.v1.ListMyMetadataRequest', null, global);
goog.exportSymbol('proto.zitadel.auth.v1.ListMyMetadataResponse', null, global);
goog.exportSymbol('proto.zitadel.auth.v1.ListMyPasswordlessRequest', null, global);
goog.exportSymbol('proto.zitadel.auth.v1.ListMyPasswordlessResponse', null, global);
goog.exportSymbol('proto.zitadel.auth.v1.ListMyProjectOrgsRequest', null, global);
goog.exportSymbol('proto.zitadel.auth.v1.ListMyProjectOrgsResponse', null, global);
goog.exportSymbol('proto.zitadel.auth.v1.ListMyProjectPermissionsRequest', null, global);
goog.exportSymbol('proto.zitadel.auth.v1.ListMyProjectPermissionsResponse', null, global);
goog.exportSymbol('proto.zitadel.auth.v1.ListMyRefreshTokensRequest', null, global);
goog.exportSymbol('proto.zitadel.auth.v1.ListMyRefreshTokensResponse', null, global);
goog.exportSymbol('proto.zitadel.auth.v1.ListMyUserChangesRequest', null, global);
goog.exportSymbol('proto.zitadel.auth.v1.ListMyUserChangesResponse', null, global);
goog.exportSymbol('proto.zitadel.auth.v1.ListMyUserGrantsRequest', null, global);
goog.exportSymbol('proto.zitadel.auth.v1.ListMyUserGrantsResponse', null, global);
goog.exportSymbol('proto.zitadel.auth.v1.ListMyUserSessionsRequest', null, global);
goog.exportSymbol('proto.zitadel.auth.v1.ListMyUserSessionsResponse', null, global);
goog.exportSymbol('proto.zitadel.auth.v1.ListMyZitadelPermissionsRequest', null, global);
goog.exportSymbol('proto.zitadel.auth.v1.ListMyZitadelPermissionsResponse', null, global);
goog.exportSymbol('proto.zitadel.auth.v1.RemoveMyAuthFactorOTPEmailRequest', null, global);
goog.exportSymbol('proto.zitadel.auth.v1.RemoveMyAuthFactorOTPEmailResponse', null, global);
goog.exportSymbol('proto.zitadel.auth.v1.RemoveMyAuthFactorOTPRequest', null, global);
goog.exportSymbol('proto.zitadel.auth.v1.RemoveMyAuthFactorOTPResponse', null, global);
goog.exportSymbol('proto.zitadel.auth.v1.RemoveMyAuthFactorOTPSMSRequest', null, global);
goog.exportSymbol('proto.zitadel.auth.v1.RemoveMyAuthFactorOTPSMSResponse', null, global);
goog.exportSymbol('proto.zitadel.auth.v1.RemoveMyAuthFactorU2FRequest', null, global);
goog.exportSymbol('proto.zitadel.auth.v1.RemoveMyAuthFactorU2FResponse', null, global);
goog.exportSymbol('proto.zitadel.auth.v1.RemoveMyAvatarRequest', null, global);
goog.exportSymbol('proto.zitadel.auth.v1.RemoveMyAvatarResponse', null, global);
goog.exportSymbol('proto.zitadel.auth.v1.RemoveMyLinkedIDPRequest', null, global);
goog.exportSymbol('proto.zitadel.auth.v1.RemoveMyLinkedIDPResponse', null, global);
goog.exportSymbol('proto.zitadel.auth.v1.RemoveMyMetadataRequest', null, global);
goog.exportSymbol('proto.zitadel.auth.v1.RemoveMyMetadataResponse', null, global);
goog.exportSymbol('proto.zitadel.auth.v1.RemoveMyPasswordlessRequest', null, global);
goog.exportSymbol('proto.zitadel.auth.v1.RemoveMyPasswordlessResponse', null, global);
goog.exportSymbol('proto.zitadel.auth.v1.RemoveMyPhoneRequest', null, global);
goog.exportSymbol('proto.zitadel.auth.v1.RemoveMyPhoneResponse', null, global);
goog.exportSymbol('proto.zitadel.auth.v1.RemoveMyUserRequest', null, global);
goog.exportSymbol('proto.zitadel.auth.v1.RemoveMyUserResponse', null, global);
goog.exportSymbol('proto.zitadel.auth.v1.ResendMyEmailVerificationRequest', null, global);
goog.exportSymbol('proto.zitadel.auth.v1.ResendMyEmailVerificationResponse', null, global);
goog.exportSymbol('proto.zitadel.auth.v1.ResendMyPhoneVerificationRequest', null, global);
goog.exportSymbol('proto.zitadel.auth.v1.ResendMyPhoneVerificationResponse', null, global);
goog.exportSymbol('proto.zitadel.auth.v1.RevokeAllMyRefreshTokensRequest', null, global);
goog.exportSymbol('proto.zitadel.auth.v1.RevokeAllMyRefreshTokensResponse', null, global);
goog.exportSymbol('proto.zitadel.auth.v1.RevokeMyRefreshTokenRequest', null, global);
goog.exportSymbol('proto.zitadel.auth.v1.RevokeMyRefreshTokenResponse', null, global);
goog.exportSymbol('proto.zitadel.auth.v1.SendMyPasswordlessLinkRequest', null, global);
goog.exportSymbol('proto.zitadel.auth.v1.SendMyPasswordlessLinkResponse', null, global);
goog.exportSymbol('proto.zitadel.auth.v1.SetMyEmailRequest', null, global);
goog.exportSymbol('proto.zitadel.auth.v1.SetMyEmailResponse', null, global);
goog.exportSymbol('proto.zitadel.auth.v1.SetMyMetadataRequest', null, global);
goog.exportSymbol('proto.zitadel.auth.v1.SetMyMetadataResponse', null, global);
goog.exportSymbol('proto.zitadel.auth.v1.SetMyPhoneRequest', null, global);
goog.exportSymbol('proto.zitadel.auth.v1.SetMyPhoneResponse', null, global);
goog.exportSymbol('proto.zitadel.auth.v1.UpdateMyPasswordRequest', null, global);
goog.exportSymbol('proto.zitadel.auth.v1.UpdateMyPasswordResponse', null, global);
goog.exportSymbol('proto.zitadel.auth.v1.UpdateMyProfileRequest', null, global);
goog.exportSymbol('proto.zitadel.auth.v1.UpdateMyProfileResponse', null, global);
goog.exportSymbol('proto.zitadel.auth.v1.UpdateMyUserNameRequest', null, global);
goog.exportSymbol('proto.zitadel.auth.v1.UpdateMyUserNameResponse', null, global);
goog.exportSymbol('proto.zitadel.auth.v1.UserGrant', null, global);
goog.exportSymbol('proto.zitadel.auth.v1.VerifyMyAuthFactorOTPRequest', null, global);
goog.exportSymbol('proto.zitadel.auth.v1.VerifyMyAuthFactorOTPResponse', null, global);
goog.exportSymbol('proto.zitadel.auth.v1.VerifyMyAuthFactorU2FRequest', null, global);
goog.exportSymbol('proto.zitadel.auth.v1.VerifyMyAuthFactorU2FResponse', null, global);
goog.exportSymbol('proto.zitadel.auth.v1.VerifyMyEmailRequest', null, global);
goog.exportSymbol('proto.zitadel.auth.v1.VerifyMyEmailResponse', null, global);
goog.exportSymbol('proto.zitadel.auth.v1.VerifyMyPasswordlessRequest', null, global);
goog.exportSymbol('proto.zitadel.auth.v1.VerifyMyPasswordlessResponse', null, global);
goog.exportSymbol('proto.zitadel.auth.v1.VerifyMyPhoneRequest', null, global);
goog.exportSymbol('proto.zitadel.auth.v1.VerifyMyPhoneResponse', null, global);
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
proto.zitadel.auth.v1.HealthzRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.auth.v1.HealthzRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.auth.v1.HealthzRequest.displayName = 'proto.zitadel.auth.v1.HealthzRequest';
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
proto.zitadel.auth.v1.HealthzResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.auth.v1.HealthzResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.auth.v1.HealthzResponse.displayName = 'proto.zitadel.auth.v1.HealthzResponse';
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
proto.zitadel.auth.v1.GetSupportedLanguagesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.auth.v1.GetSupportedLanguagesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.auth.v1.GetSupportedLanguagesRequest.displayName = 'proto.zitadel.auth.v1.GetSupportedLanguagesRequest';
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
proto.zitadel.auth.v1.GetSupportedLanguagesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.auth.v1.GetSupportedLanguagesResponse.repeatedFields_, null);
};
goog.inherits(proto.zitadel.auth.v1.GetSupportedLanguagesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.auth.v1.GetSupportedLanguagesResponse.displayName = 'proto.zitadel.auth.v1.GetSupportedLanguagesResponse';
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
proto.zitadel.auth.v1.GetMyUserRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.auth.v1.GetMyUserRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.auth.v1.GetMyUserRequest.displayName = 'proto.zitadel.auth.v1.GetMyUserRequest';
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
proto.zitadel.auth.v1.GetMyUserResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.auth.v1.GetMyUserResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.auth.v1.GetMyUserResponse.displayName = 'proto.zitadel.auth.v1.GetMyUserResponse';
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
proto.zitadel.auth.v1.RemoveMyUserRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.auth.v1.RemoveMyUserRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.auth.v1.RemoveMyUserRequest.displayName = 'proto.zitadel.auth.v1.RemoveMyUserRequest';
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
proto.zitadel.auth.v1.RemoveMyUserResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.auth.v1.RemoveMyUserResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.auth.v1.RemoveMyUserResponse.displayName = 'proto.zitadel.auth.v1.RemoveMyUserResponse';
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
proto.zitadel.auth.v1.ListMyUserChangesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.auth.v1.ListMyUserChangesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.auth.v1.ListMyUserChangesRequest.displayName = 'proto.zitadel.auth.v1.ListMyUserChangesRequest';
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
proto.zitadel.auth.v1.ListMyUserChangesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.auth.v1.ListMyUserChangesResponse.repeatedFields_, null);
};
goog.inherits(proto.zitadel.auth.v1.ListMyUserChangesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.auth.v1.ListMyUserChangesResponse.displayName = 'proto.zitadel.auth.v1.ListMyUserChangesResponse';
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
proto.zitadel.auth.v1.ListMyUserSessionsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.auth.v1.ListMyUserSessionsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.auth.v1.ListMyUserSessionsRequest.displayName = 'proto.zitadel.auth.v1.ListMyUserSessionsRequest';
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
proto.zitadel.auth.v1.ListMyUserSessionsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.auth.v1.ListMyUserSessionsResponse.repeatedFields_, null);
};
goog.inherits(proto.zitadel.auth.v1.ListMyUserSessionsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.auth.v1.ListMyUserSessionsResponse.displayName = 'proto.zitadel.auth.v1.ListMyUserSessionsResponse';
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
proto.zitadel.auth.v1.ListMyMetadataRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.auth.v1.ListMyMetadataRequest.repeatedFields_, null);
};
goog.inherits(proto.zitadel.auth.v1.ListMyMetadataRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.auth.v1.ListMyMetadataRequest.displayName = 'proto.zitadel.auth.v1.ListMyMetadataRequest';
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
proto.zitadel.auth.v1.ListMyMetadataResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.auth.v1.ListMyMetadataResponse.repeatedFields_, null);
};
goog.inherits(proto.zitadel.auth.v1.ListMyMetadataResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.auth.v1.ListMyMetadataResponse.displayName = 'proto.zitadel.auth.v1.ListMyMetadataResponse';
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
proto.zitadel.auth.v1.GetMyMetadataRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.auth.v1.GetMyMetadataRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.auth.v1.GetMyMetadataRequest.displayName = 'proto.zitadel.auth.v1.GetMyMetadataRequest';
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
proto.zitadel.auth.v1.GetMyMetadataResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.auth.v1.GetMyMetadataResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.auth.v1.GetMyMetadataResponse.displayName = 'proto.zitadel.auth.v1.GetMyMetadataResponse';
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
proto.zitadel.auth.v1.SetMyMetadataRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.auth.v1.SetMyMetadataRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.auth.v1.SetMyMetadataRequest.displayName = 'proto.zitadel.auth.v1.SetMyMetadataRequest';
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
proto.zitadel.auth.v1.SetMyMetadataResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.auth.v1.SetMyMetadataResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.auth.v1.SetMyMetadataResponse.displayName = 'proto.zitadel.auth.v1.SetMyMetadataResponse';
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
proto.zitadel.auth.v1.BulkSetMyMetadataRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.auth.v1.BulkSetMyMetadataRequest.repeatedFields_, null);
};
goog.inherits(proto.zitadel.auth.v1.BulkSetMyMetadataRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.auth.v1.BulkSetMyMetadataRequest.displayName = 'proto.zitadel.auth.v1.BulkSetMyMetadataRequest';
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
proto.zitadel.auth.v1.BulkSetMyMetadataRequest.Metadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.auth.v1.BulkSetMyMetadataRequest.Metadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.auth.v1.BulkSetMyMetadataRequest.Metadata.displayName = 'proto.zitadel.auth.v1.BulkSetMyMetadataRequest.Metadata';
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
proto.zitadel.auth.v1.BulkSetMyMetadataResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.auth.v1.BulkSetMyMetadataResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.auth.v1.BulkSetMyMetadataResponse.displayName = 'proto.zitadel.auth.v1.BulkSetMyMetadataResponse';
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
proto.zitadel.auth.v1.RemoveMyMetadataRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.auth.v1.RemoveMyMetadataRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.auth.v1.RemoveMyMetadataRequest.displayName = 'proto.zitadel.auth.v1.RemoveMyMetadataRequest';
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
proto.zitadel.auth.v1.RemoveMyMetadataResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.auth.v1.RemoveMyMetadataResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.auth.v1.RemoveMyMetadataResponse.displayName = 'proto.zitadel.auth.v1.RemoveMyMetadataResponse';
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
proto.zitadel.auth.v1.BulkRemoveMyMetadataRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.auth.v1.BulkRemoveMyMetadataRequest.repeatedFields_, null);
};
goog.inherits(proto.zitadel.auth.v1.BulkRemoveMyMetadataRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.auth.v1.BulkRemoveMyMetadataRequest.displayName = 'proto.zitadel.auth.v1.BulkRemoveMyMetadataRequest';
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
proto.zitadel.auth.v1.BulkRemoveMyMetadataResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.auth.v1.BulkRemoveMyMetadataResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.auth.v1.BulkRemoveMyMetadataResponse.displayName = 'proto.zitadel.auth.v1.BulkRemoveMyMetadataResponse';
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
proto.zitadel.auth.v1.ListMyRefreshTokensRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.auth.v1.ListMyRefreshTokensRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.auth.v1.ListMyRefreshTokensRequest.displayName = 'proto.zitadel.auth.v1.ListMyRefreshTokensRequest';
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
proto.zitadel.auth.v1.ListMyRefreshTokensResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.auth.v1.ListMyRefreshTokensResponse.repeatedFields_, null);
};
goog.inherits(proto.zitadel.auth.v1.ListMyRefreshTokensResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.auth.v1.ListMyRefreshTokensResponse.displayName = 'proto.zitadel.auth.v1.ListMyRefreshTokensResponse';
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
proto.zitadel.auth.v1.RevokeMyRefreshTokenRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.auth.v1.RevokeMyRefreshTokenRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.auth.v1.RevokeMyRefreshTokenRequest.displayName = 'proto.zitadel.auth.v1.RevokeMyRefreshTokenRequest';
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
proto.zitadel.auth.v1.RevokeMyRefreshTokenResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.auth.v1.RevokeMyRefreshTokenResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.auth.v1.RevokeMyRefreshTokenResponse.displayName = 'proto.zitadel.auth.v1.RevokeMyRefreshTokenResponse';
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
proto.zitadel.auth.v1.RevokeAllMyRefreshTokensRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.auth.v1.RevokeAllMyRefreshTokensRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.auth.v1.RevokeAllMyRefreshTokensRequest.displayName = 'proto.zitadel.auth.v1.RevokeAllMyRefreshTokensRequest';
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
proto.zitadel.auth.v1.RevokeAllMyRefreshTokensResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.auth.v1.RevokeAllMyRefreshTokensResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.auth.v1.RevokeAllMyRefreshTokensResponse.displayName = 'proto.zitadel.auth.v1.RevokeAllMyRefreshTokensResponse';
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
proto.zitadel.auth.v1.UpdateMyUserNameRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.auth.v1.UpdateMyUserNameRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.auth.v1.UpdateMyUserNameRequest.displayName = 'proto.zitadel.auth.v1.UpdateMyUserNameRequest';
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
proto.zitadel.auth.v1.UpdateMyUserNameResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.auth.v1.UpdateMyUserNameResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.auth.v1.UpdateMyUserNameResponse.displayName = 'proto.zitadel.auth.v1.UpdateMyUserNameResponse';
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
proto.zitadel.auth.v1.GetMyPasswordComplexityPolicyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.auth.v1.GetMyPasswordComplexityPolicyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.auth.v1.GetMyPasswordComplexityPolicyRequest.displayName = 'proto.zitadel.auth.v1.GetMyPasswordComplexityPolicyRequest';
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
proto.zitadel.auth.v1.GetMyPasswordComplexityPolicyResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.auth.v1.GetMyPasswordComplexityPolicyResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.auth.v1.GetMyPasswordComplexityPolicyResponse.displayName = 'proto.zitadel.auth.v1.GetMyPasswordComplexityPolicyResponse';
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
proto.zitadel.auth.v1.UpdateMyPasswordRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.auth.v1.UpdateMyPasswordRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.auth.v1.UpdateMyPasswordRequest.displayName = 'proto.zitadel.auth.v1.UpdateMyPasswordRequest';
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
proto.zitadel.auth.v1.UpdateMyPasswordResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.auth.v1.UpdateMyPasswordResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.auth.v1.UpdateMyPasswordResponse.displayName = 'proto.zitadel.auth.v1.UpdateMyPasswordResponse';
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
proto.zitadel.auth.v1.GetMyProfileRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.auth.v1.GetMyProfileRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.auth.v1.GetMyProfileRequest.displayName = 'proto.zitadel.auth.v1.GetMyProfileRequest';
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
proto.zitadel.auth.v1.GetMyProfileResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.auth.v1.GetMyProfileResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.auth.v1.GetMyProfileResponse.displayName = 'proto.zitadel.auth.v1.GetMyProfileResponse';
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
proto.zitadel.auth.v1.UpdateMyProfileRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.auth.v1.UpdateMyProfileRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.auth.v1.UpdateMyProfileRequest.displayName = 'proto.zitadel.auth.v1.UpdateMyProfileRequest';
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
proto.zitadel.auth.v1.UpdateMyProfileResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.auth.v1.UpdateMyProfileResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.auth.v1.UpdateMyProfileResponse.displayName = 'proto.zitadel.auth.v1.UpdateMyProfileResponse';
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
proto.zitadel.auth.v1.GetMyEmailRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.auth.v1.GetMyEmailRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.auth.v1.GetMyEmailRequest.displayName = 'proto.zitadel.auth.v1.GetMyEmailRequest';
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
proto.zitadel.auth.v1.GetMyEmailResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.auth.v1.GetMyEmailResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.auth.v1.GetMyEmailResponse.displayName = 'proto.zitadel.auth.v1.GetMyEmailResponse';
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
proto.zitadel.auth.v1.SetMyEmailRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.auth.v1.SetMyEmailRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.auth.v1.SetMyEmailRequest.displayName = 'proto.zitadel.auth.v1.SetMyEmailRequest';
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
proto.zitadel.auth.v1.SetMyEmailResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.auth.v1.SetMyEmailResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.auth.v1.SetMyEmailResponse.displayName = 'proto.zitadel.auth.v1.SetMyEmailResponse';
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
proto.zitadel.auth.v1.VerifyMyEmailRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.auth.v1.VerifyMyEmailRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.auth.v1.VerifyMyEmailRequest.displayName = 'proto.zitadel.auth.v1.VerifyMyEmailRequest';
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
proto.zitadel.auth.v1.VerifyMyEmailResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.auth.v1.VerifyMyEmailResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.auth.v1.VerifyMyEmailResponse.displayName = 'proto.zitadel.auth.v1.VerifyMyEmailResponse';
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
proto.zitadel.auth.v1.ResendMyEmailVerificationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.auth.v1.ResendMyEmailVerificationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.auth.v1.ResendMyEmailVerificationRequest.displayName = 'proto.zitadel.auth.v1.ResendMyEmailVerificationRequest';
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
proto.zitadel.auth.v1.ResendMyEmailVerificationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.auth.v1.ResendMyEmailVerificationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.auth.v1.ResendMyEmailVerificationResponse.displayName = 'proto.zitadel.auth.v1.ResendMyEmailVerificationResponse';
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
proto.zitadel.auth.v1.GetMyPhoneRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.auth.v1.GetMyPhoneRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.auth.v1.GetMyPhoneRequest.displayName = 'proto.zitadel.auth.v1.GetMyPhoneRequest';
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
proto.zitadel.auth.v1.GetMyPhoneResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.auth.v1.GetMyPhoneResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.auth.v1.GetMyPhoneResponse.displayName = 'proto.zitadel.auth.v1.GetMyPhoneResponse';
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
proto.zitadel.auth.v1.SetMyPhoneRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.auth.v1.SetMyPhoneRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.auth.v1.SetMyPhoneRequest.displayName = 'proto.zitadel.auth.v1.SetMyPhoneRequest';
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
proto.zitadel.auth.v1.SetMyPhoneResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.auth.v1.SetMyPhoneResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.auth.v1.SetMyPhoneResponse.displayName = 'proto.zitadel.auth.v1.SetMyPhoneResponse';
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
proto.zitadel.auth.v1.VerifyMyPhoneRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.auth.v1.VerifyMyPhoneRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.auth.v1.VerifyMyPhoneRequest.displayName = 'proto.zitadel.auth.v1.VerifyMyPhoneRequest';
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
proto.zitadel.auth.v1.VerifyMyPhoneResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.auth.v1.VerifyMyPhoneResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.auth.v1.VerifyMyPhoneResponse.displayName = 'proto.zitadel.auth.v1.VerifyMyPhoneResponse';
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
proto.zitadel.auth.v1.ResendMyPhoneVerificationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.auth.v1.ResendMyPhoneVerificationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.auth.v1.ResendMyPhoneVerificationRequest.displayName = 'proto.zitadel.auth.v1.ResendMyPhoneVerificationRequest';
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
proto.zitadel.auth.v1.ResendMyPhoneVerificationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.auth.v1.ResendMyPhoneVerificationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.auth.v1.ResendMyPhoneVerificationResponse.displayName = 'proto.zitadel.auth.v1.ResendMyPhoneVerificationResponse';
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
proto.zitadel.auth.v1.RemoveMyPhoneRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.auth.v1.RemoveMyPhoneRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.auth.v1.RemoveMyPhoneRequest.displayName = 'proto.zitadel.auth.v1.RemoveMyPhoneRequest';
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
proto.zitadel.auth.v1.RemoveMyPhoneResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.auth.v1.RemoveMyPhoneResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.auth.v1.RemoveMyPhoneResponse.displayName = 'proto.zitadel.auth.v1.RemoveMyPhoneResponse';
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
proto.zitadel.auth.v1.RemoveMyAvatarRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.auth.v1.RemoveMyAvatarRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.auth.v1.RemoveMyAvatarRequest.displayName = 'proto.zitadel.auth.v1.RemoveMyAvatarRequest';
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
proto.zitadel.auth.v1.RemoveMyAvatarResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.auth.v1.RemoveMyAvatarResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.auth.v1.RemoveMyAvatarResponse.displayName = 'proto.zitadel.auth.v1.RemoveMyAvatarResponse';
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
proto.zitadel.auth.v1.ListMyLinkedIDPsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.auth.v1.ListMyLinkedIDPsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.auth.v1.ListMyLinkedIDPsRequest.displayName = 'proto.zitadel.auth.v1.ListMyLinkedIDPsRequest';
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
proto.zitadel.auth.v1.ListMyLinkedIDPsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.auth.v1.ListMyLinkedIDPsResponse.repeatedFields_, null);
};
goog.inherits(proto.zitadel.auth.v1.ListMyLinkedIDPsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.auth.v1.ListMyLinkedIDPsResponse.displayName = 'proto.zitadel.auth.v1.ListMyLinkedIDPsResponse';
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
proto.zitadel.auth.v1.RemoveMyLinkedIDPRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.auth.v1.RemoveMyLinkedIDPRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.auth.v1.RemoveMyLinkedIDPRequest.displayName = 'proto.zitadel.auth.v1.RemoveMyLinkedIDPRequest';
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
proto.zitadel.auth.v1.RemoveMyLinkedIDPResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.auth.v1.RemoveMyLinkedIDPResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.auth.v1.RemoveMyLinkedIDPResponse.displayName = 'proto.zitadel.auth.v1.RemoveMyLinkedIDPResponse';
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
proto.zitadel.auth.v1.ListMyAuthFactorsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.auth.v1.ListMyAuthFactorsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.auth.v1.ListMyAuthFactorsRequest.displayName = 'proto.zitadel.auth.v1.ListMyAuthFactorsRequest';
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
proto.zitadel.auth.v1.ListMyAuthFactorsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.auth.v1.ListMyAuthFactorsResponse.repeatedFields_, null);
};
goog.inherits(proto.zitadel.auth.v1.ListMyAuthFactorsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.auth.v1.ListMyAuthFactorsResponse.displayName = 'proto.zitadel.auth.v1.ListMyAuthFactorsResponse';
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
proto.zitadel.auth.v1.AddMyAuthFactorU2FRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.auth.v1.AddMyAuthFactorU2FRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.auth.v1.AddMyAuthFactorU2FRequest.displayName = 'proto.zitadel.auth.v1.AddMyAuthFactorU2FRequest';
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
proto.zitadel.auth.v1.AddMyAuthFactorU2FResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.auth.v1.AddMyAuthFactorU2FResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.auth.v1.AddMyAuthFactorU2FResponse.displayName = 'proto.zitadel.auth.v1.AddMyAuthFactorU2FResponse';
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
proto.zitadel.auth.v1.AddMyAuthFactorOTPRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.auth.v1.AddMyAuthFactorOTPRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.auth.v1.AddMyAuthFactorOTPRequest.displayName = 'proto.zitadel.auth.v1.AddMyAuthFactorOTPRequest';
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
proto.zitadel.auth.v1.AddMyAuthFactorOTPResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.auth.v1.AddMyAuthFactorOTPResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.auth.v1.AddMyAuthFactorOTPResponse.displayName = 'proto.zitadel.auth.v1.AddMyAuthFactorOTPResponse';
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
proto.zitadel.auth.v1.VerifyMyAuthFactorOTPRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.auth.v1.VerifyMyAuthFactorOTPRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.auth.v1.VerifyMyAuthFactorOTPRequest.displayName = 'proto.zitadel.auth.v1.VerifyMyAuthFactorOTPRequest';
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
proto.zitadel.auth.v1.VerifyMyAuthFactorOTPResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.auth.v1.VerifyMyAuthFactorOTPResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.auth.v1.VerifyMyAuthFactorOTPResponse.displayName = 'proto.zitadel.auth.v1.VerifyMyAuthFactorOTPResponse';
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
proto.zitadel.auth.v1.VerifyMyAuthFactorU2FRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.auth.v1.VerifyMyAuthFactorU2FRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.auth.v1.VerifyMyAuthFactorU2FRequest.displayName = 'proto.zitadel.auth.v1.VerifyMyAuthFactorU2FRequest';
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
proto.zitadel.auth.v1.VerifyMyAuthFactorU2FResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.auth.v1.VerifyMyAuthFactorU2FResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.auth.v1.VerifyMyAuthFactorU2FResponse.displayName = 'proto.zitadel.auth.v1.VerifyMyAuthFactorU2FResponse';
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
proto.zitadel.auth.v1.RemoveMyAuthFactorOTPRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.auth.v1.RemoveMyAuthFactorOTPRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.auth.v1.RemoveMyAuthFactorOTPRequest.displayName = 'proto.zitadel.auth.v1.RemoveMyAuthFactorOTPRequest';
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
proto.zitadel.auth.v1.RemoveMyAuthFactorOTPResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.auth.v1.RemoveMyAuthFactorOTPResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.auth.v1.RemoveMyAuthFactorOTPResponse.displayName = 'proto.zitadel.auth.v1.RemoveMyAuthFactorOTPResponse';
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
proto.zitadel.auth.v1.AddMyAuthFactorOTPSMSRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.auth.v1.AddMyAuthFactorOTPSMSRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.auth.v1.AddMyAuthFactorOTPSMSRequest.displayName = 'proto.zitadel.auth.v1.AddMyAuthFactorOTPSMSRequest';
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
proto.zitadel.auth.v1.AddMyAuthFactorOTPSMSResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.auth.v1.AddMyAuthFactorOTPSMSResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.auth.v1.AddMyAuthFactorOTPSMSResponse.displayName = 'proto.zitadel.auth.v1.AddMyAuthFactorOTPSMSResponse';
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
proto.zitadel.auth.v1.RemoveMyAuthFactorOTPSMSRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.auth.v1.RemoveMyAuthFactorOTPSMSRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.auth.v1.RemoveMyAuthFactorOTPSMSRequest.displayName = 'proto.zitadel.auth.v1.RemoveMyAuthFactorOTPSMSRequest';
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
proto.zitadel.auth.v1.RemoveMyAuthFactorOTPSMSResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.auth.v1.RemoveMyAuthFactorOTPSMSResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.auth.v1.RemoveMyAuthFactorOTPSMSResponse.displayName = 'proto.zitadel.auth.v1.RemoveMyAuthFactorOTPSMSResponse';
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
proto.zitadel.auth.v1.AddMyAuthFactorOTPEmailRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.auth.v1.AddMyAuthFactorOTPEmailRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.auth.v1.AddMyAuthFactorOTPEmailRequest.displayName = 'proto.zitadel.auth.v1.AddMyAuthFactorOTPEmailRequest';
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
proto.zitadel.auth.v1.AddMyAuthFactorOTPEmailResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.auth.v1.AddMyAuthFactorOTPEmailResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.auth.v1.AddMyAuthFactorOTPEmailResponse.displayName = 'proto.zitadel.auth.v1.AddMyAuthFactorOTPEmailResponse';
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
proto.zitadel.auth.v1.RemoveMyAuthFactorOTPEmailRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.auth.v1.RemoveMyAuthFactorOTPEmailRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.auth.v1.RemoveMyAuthFactorOTPEmailRequest.displayName = 'proto.zitadel.auth.v1.RemoveMyAuthFactorOTPEmailRequest';
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
proto.zitadel.auth.v1.RemoveMyAuthFactorOTPEmailResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.auth.v1.RemoveMyAuthFactorOTPEmailResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.auth.v1.RemoveMyAuthFactorOTPEmailResponse.displayName = 'proto.zitadel.auth.v1.RemoveMyAuthFactorOTPEmailResponse';
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
proto.zitadel.auth.v1.RemoveMyAuthFactorU2FRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.auth.v1.RemoveMyAuthFactorU2FRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.auth.v1.RemoveMyAuthFactorU2FRequest.displayName = 'proto.zitadel.auth.v1.RemoveMyAuthFactorU2FRequest';
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
proto.zitadel.auth.v1.RemoveMyAuthFactorU2FResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.auth.v1.RemoveMyAuthFactorU2FResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.auth.v1.RemoveMyAuthFactorU2FResponse.displayName = 'proto.zitadel.auth.v1.RemoveMyAuthFactorU2FResponse';
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
proto.zitadel.auth.v1.ListMyPasswordlessRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.auth.v1.ListMyPasswordlessRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.auth.v1.ListMyPasswordlessRequest.displayName = 'proto.zitadel.auth.v1.ListMyPasswordlessRequest';
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
proto.zitadel.auth.v1.ListMyPasswordlessResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.auth.v1.ListMyPasswordlessResponse.repeatedFields_, null);
};
goog.inherits(proto.zitadel.auth.v1.ListMyPasswordlessResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.auth.v1.ListMyPasswordlessResponse.displayName = 'proto.zitadel.auth.v1.ListMyPasswordlessResponse';
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
proto.zitadel.auth.v1.AddMyPasswordlessRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.auth.v1.AddMyPasswordlessRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.auth.v1.AddMyPasswordlessRequest.displayName = 'proto.zitadel.auth.v1.AddMyPasswordlessRequest';
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
proto.zitadel.auth.v1.AddMyPasswordlessResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.auth.v1.AddMyPasswordlessResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.auth.v1.AddMyPasswordlessResponse.displayName = 'proto.zitadel.auth.v1.AddMyPasswordlessResponse';
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
proto.zitadel.auth.v1.AddMyPasswordlessLinkRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.auth.v1.AddMyPasswordlessLinkRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.auth.v1.AddMyPasswordlessLinkRequest.displayName = 'proto.zitadel.auth.v1.AddMyPasswordlessLinkRequest';
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
proto.zitadel.auth.v1.AddMyPasswordlessLinkResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.auth.v1.AddMyPasswordlessLinkResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.auth.v1.AddMyPasswordlessLinkResponse.displayName = 'proto.zitadel.auth.v1.AddMyPasswordlessLinkResponse';
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
proto.zitadel.auth.v1.SendMyPasswordlessLinkRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.auth.v1.SendMyPasswordlessLinkRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.auth.v1.SendMyPasswordlessLinkRequest.displayName = 'proto.zitadel.auth.v1.SendMyPasswordlessLinkRequest';
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
proto.zitadel.auth.v1.SendMyPasswordlessLinkResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.auth.v1.SendMyPasswordlessLinkResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.auth.v1.SendMyPasswordlessLinkResponse.displayName = 'proto.zitadel.auth.v1.SendMyPasswordlessLinkResponse';
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
proto.zitadel.auth.v1.VerifyMyPasswordlessRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.auth.v1.VerifyMyPasswordlessRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.auth.v1.VerifyMyPasswordlessRequest.displayName = 'proto.zitadel.auth.v1.VerifyMyPasswordlessRequest';
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
proto.zitadel.auth.v1.VerifyMyPasswordlessResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.auth.v1.VerifyMyPasswordlessResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.auth.v1.VerifyMyPasswordlessResponse.displayName = 'proto.zitadel.auth.v1.VerifyMyPasswordlessResponse';
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
proto.zitadel.auth.v1.RemoveMyPasswordlessRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.auth.v1.RemoveMyPasswordlessRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.auth.v1.RemoveMyPasswordlessRequest.displayName = 'proto.zitadel.auth.v1.RemoveMyPasswordlessRequest';
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
proto.zitadel.auth.v1.RemoveMyPasswordlessResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.auth.v1.RemoveMyPasswordlessResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.auth.v1.RemoveMyPasswordlessResponse.displayName = 'proto.zitadel.auth.v1.RemoveMyPasswordlessResponse';
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
proto.zitadel.auth.v1.ListMyUserGrantsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.auth.v1.ListMyUserGrantsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.auth.v1.ListMyUserGrantsRequest.displayName = 'proto.zitadel.auth.v1.ListMyUserGrantsRequest';
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
proto.zitadel.auth.v1.ListMyUserGrantsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.auth.v1.ListMyUserGrantsResponse.repeatedFields_, null);
};
goog.inherits(proto.zitadel.auth.v1.ListMyUserGrantsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.auth.v1.ListMyUserGrantsResponse.displayName = 'proto.zitadel.auth.v1.ListMyUserGrantsResponse';
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
proto.zitadel.auth.v1.UserGrant = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.auth.v1.UserGrant.repeatedFields_, null);
};
goog.inherits(proto.zitadel.auth.v1.UserGrant, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.auth.v1.UserGrant.displayName = 'proto.zitadel.auth.v1.UserGrant';
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
proto.zitadel.auth.v1.ListMyProjectOrgsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.auth.v1.ListMyProjectOrgsRequest.repeatedFields_, null);
};
goog.inherits(proto.zitadel.auth.v1.ListMyProjectOrgsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.auth.v1.ListMyProjectOrgsRequest.displayName = 'proto.zitadel.auth.v1.ListMyProjectOrgsRequest';
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
proto.zitadel.auth.v1.ListMyProjectOrgsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.auth.v1.ListMyProjectOrgsResponse.repeatedFields_, null);
};
goog.inherits(proto.zitadel.auth.v1.ListMyProjectOrgsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.auth.v1.ListMyProjectOrgsResponse.displayName = 'proto.zitadel.auth.v1.ListMyProjectOrgsResponse';
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
proto.zitadel.auth.v1.ListMyZitadelPermissionsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.auth.v1.ListMyZitadelPermissionsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.auth.v1.ListMyZitadelPermissionsRequest.displayName = 'proto.zitadel.auth.v1.ListMyZitadelPermissionsRequest';
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
proto.zitadel.auth.v1.ListMyZitadelPermissionsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.auth.v1.ListMyZitadelPermissionsResponse.repeatedFields_, null);
};
goog.inherits(proto.zitadel.auth.v1.ListMyZitadelPermissionsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.auth.v1.ListMyZitadelPermissionsResponse.displayName = 'proto.zitadel.auth.v1.ListMyZitadelPermissionsResponse';
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
proto.zitadel.auth.v1.ListMyProjectPermissionsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.auth.v1.ListMyProjectPermissionsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.auth.v1.ListMyProjectPermissionsRequest.displayName = 'proto.zitadel.auth.v1.ListMyProjectPermissionsRequest';
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
proto.zitadel.auth.v1.ListMyProjectPermissionsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.auth.v1.ListMyProjectPermissionsResponse.repeatedFields_, null);
};
goog.inherits(proto.zitadel.auth.v1.ListMyProjectPermissionsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.auth.v1.ListMyProjectPermissionsResponse.displayName = 'proto.zitadel.auth.v1.ListMyProjectPermissionsResponse';
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
proto.zitadel.auth.v1.ListMyMembershipsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.auth.v1.ListMyMembershipsRequest.repeatedFields_, null);
};
goog.inherits(proto.zitadel.auth.v1.ListMyMembershipsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.auth.v1.ListMyMembershipsRequest.displayName = 'proto.zitadel.auth.v1.ListMyMembershipsRequest';
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
proto.zitadel.auth.v1.ListMyMembershipsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.auth.v1.ListMyMembershipsResponse.repeatedFields_, null);
};
goog.inherits(proto.zitadel.auth.v1.ListMyMembershipsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.auth.v1.ListMyMembershipsResponse.displayName = 'proto.zitadel.auth.v1.ListMyMembershipsResponse';
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
proto.zitadel.auth.v1.GetMyLabelPolicyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.auth.v1.GetMyLabelPolicyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.auth.v1.GetMyLabelPolicyRequest.displayName = 'proto.zitadel.auth.v1.GetMyLabelPolicyRequest';
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
proto.zitadel.auth.v1.GetMyLabelPolicyResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.auth.v1.GetMyLabelPolicyResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.auth.v1.GetMyLabelPolicyResponse.displayName = 'proto.zitadel.auth.v1.GetMyLabelPolicyResponse';
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
proto.zitadel.auth.v1.GetMyPrivacyPolicyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.auth.v1.GetMyPrivacyPolicyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.auth.v1.GetMyPrivacyPolicyRequest.displayName = 'proto.zitadel.auth.v1.GetMyPrivacyPolicyRequest';
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
proto.zitadel.auth.v1.GetMyPrivacyPolicyResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.auth.v1.GetMyPrivacyPolicyResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.auth.v1.GetMyPrivacyPolicyResponse.displayName = 'proto.zitadel.auth.v1.GetMyPrivacyPolicyResponse';
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
proto.zitadel.auth.v1.GetMyLoginPolicyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.auth.v1.GetMyLoginPolicyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.auth.v1.GetMyLoginPolicyRequest.displayName = 'proto.zitadel.auth.v1.GetMyLoginPolicyRequest';
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
proto.zitadel.auth.v1.GetMyLoginPolicyResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.auth.v1.GetMyLoginPolicyResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.auth.v1.GetMyLoginPolicyResponse.displayName = 'proto.zitadel.auth.v1.GetMyLoginPolicyResponse';
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
proto.zitadel.auth.v1.HealthzRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.auth.v1.HealthzRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.auth.v1.HealthzRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.HealthzRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.auth.v1.HealthzRequest}
 */
proto.zitadel.auth.v1.HealthzRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.auth.v1.HealthzRequest;
  return proto.zitadel.auth.v1.HealthzRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.auth.v1.HealthzRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.auth.v1.HealthzRequest}
 */
proto.zitadel.auth.v1.HealthzRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.auth.v1.HealthzRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.auth.v1.HealthzRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.auth.v1.HealthzRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.HealthzRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.auth.v1.HealthzResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.auth.v1.HealthzResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.auth.v1.HealthzResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.HealthzResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.auth.v1.HealthzResponse}
 */
proto.zitadel.auth.v1.HealthzResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.auth.v1.HealthzResponse;
  return proto.zitadel.auth.v1.HealthzResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.auth.v1.HealthzResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.auth.v1.HealthzResponse}
 */
proto.zitadel.auth.v1.HealthzResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.auth.v1.HealthzResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.auth.v1.HealthzResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.auth.v1.HealthzResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.HealthzResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.auth.v1.GetSupportedLanguagesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.auth.v1.GetSupportedLanguagesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.auth.v1.GetSupportedLanguagesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.GetSupportedLanguagesRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.auth.v1.GetSupportedLanguagesRequest}
 */
proto.zitadel.auth.v1.GetSupportedLanguagesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.auth.v1.GetSupportedLanguagesRequest;
  return proto.zitadel.auth.v1.GetSupportedLanguagesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.auth.v1.GetSupportedLanguagesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.auth.v1.GetSupportedLanguagesRequest}
 */
proto.zitadel.auth.v1.GetSupportedLanguagesRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.auth.v1.GetSupportedLanguagesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.auth.v1.GetSupportedLanguagesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.auth.v1.GetSupportedLanguagesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.GetSupportedLanguagesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.auth.v1.GetSupportedLanguagesResponse.repeatedFields_ = [1];



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
proto.zitadel.auth.v1.GetSupportedLanguagesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.auth.v1.GetSupportedLanguagesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.auth.v1.GetSupportedLanguagesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.GetSupportedLanguagesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
languagesList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
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
 * @return {!proto.zitadel.auth.v1.GetSupportedLanguagesResponse}
 */
proto.zitadel.auth.v1.GetSupportedLanguagesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.auth.v1.GetSupportedLanguagesResponse;
  return proto.zitadel.auth.v1.GetSupportedLanguagesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.auth.v1.GetSupportedLanguagesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.auth.v1.GetSupportedLanguagesResponse}
 */
proto.zitadel.auth.v1.GetSupportedLanguagesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addLanguages(value);
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
proto.zitadel.auth.v1.GetSupportedLanguagesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.auth.v1.GetSupportedLanguagesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.auth.v1.GetSupportedLanguagesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.GetSupportedLanguagesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLanguagesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string languages = 1;
 * @return {!Array<string>}
 */
proto.zitadel.auth.v1.GetSupportedLanguagesResponse.prototype.getLanguagesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.zitadel.auth.v1.GetSupportedLanguagesResponse} returns this
 */
proto.zitadel.auth.v1.GetSupportedLanguagesResponse.prototype.setLanguagesList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.zitadel.auth.v1.GetSupportedLanguagesResponse} returns this
 */
proto.zitadel.auth.v1.GetSupportedLanguagesResponse.prototype.addLanguages = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.auth.v1.GetSupportedLanguagesResponse} returns this
 */
proto.zitadel.auth.v1.GetSupportedLanguagesResponse.prototype.clearLanguagesList = function() {
  return this.setLanguagesList([]);
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
proto.zitadel.auth.v1.GetMyUserRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.auth.v1.GetMyUserRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.auth.v1.GetMyUserRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.GetMyUserRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.auth.v1.GetMyUserRequest}
 */
proto.zitadel.auth.v1.GetMyUserRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.auth.v1.GetMyUserRequest;
  return proto.zitadel.auth.v1.GetMyUserRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.auth.v1.GetMyUserRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.auth.v1.GetMyUserRequest}
 */
proto.zitadel.auth.v1.GetMyUserRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.auth.v1.GetMyUserRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.auth.v1.GetMyUserRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.auth.v1.GetMyUserRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.GetMyUserRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.auth.v1.GetMyUserResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.auth.v1.GetMyUserResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.auth.v1.GetMyUserResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.GetMyUserResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
user: (f = msg.getUser()) && zitadel_user_pb.User.toObject(includeInstance, f),
lastLogin: (f = msg.getLastLogin()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.auth.v1.GetMyUserResponse}
 */
proto.zitadel.auth.v1.GetMyUserResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.auth.v1.GetMyUserResponse;
  return proto.zitadel.auth.v1.GetMyUserResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.auth.v1.GetMyUserResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.auth.v1.GetMyUserResponse}
 */
proto.zitadel.auth.v1.GetMyUserResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_user_pb.User;
      reader.readMessage(value,zitadel_user_pb.User.deserializeBinaryFromReader);
      msg.setUser(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setLastLogin(value);
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
proto.zitadel.auth.v1.GetMyUserResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.auth.v1.GetMyUserResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.auth.v1.GetMyUserResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.GetMyUserResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUser();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_user_pb.User.serializeBinaryToWriter
    );
  }
  f = message.getLastLogin();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.user.v1.User user = 1;
 * @return {?proto.zitadel.user.v1.User}
 */
proto.zitadel.auth.v1.GetMyUserResponse.prototype.getUser = function() {
  return /** @type{?proto.zitadel.user.v1.User} */ (
    jspb.Message.getWrapperField(this, zitadel_user_pb.User, 1));
};


/**
 * @param {?proto.zitadel.user.v1.User|undefined} value
 * @return {!proto.zitadel.auth.v1.GetMyUserResponse} returns this
*/
proto.zitadel.auth.v1.GetMyUserResponse.prototype.setUser = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.auth.v1.GetMyUserResponse} returns this
 */
proto.zitadel.auth.v1.GetMyUserResponse.prototype.clearUser = function() {
  return this.setUser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.auth.v1.GetMyUserResponse.prototype.hasUser = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Timestamp last_login = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.zitadel.auth.v1.GetMyUserResponse.prototype.getLastLogin = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.zitadel.auth.v1.GetMyUserResponse} returns this
*/
proto.zitadel.auth.v1.GetMyUserResponse.prototype.setLastLogin = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.auth.v1.GetMyUserResponse} returns this
 */
proto.zitadel.auth.v1.GetMyUserResponse.prototype.clearLastLogin = function() {
  return this.setLastLogin(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.auth.v1.GetMyUserResponse.prototype.hasLastLogin = function() {
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
proto.zitadel.auth.v1.RemoveMyUserRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.auth.v1.RemoveMyUserRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.auth.v1.RemoveMyUserRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.RemoveMyUserRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.auth.v1.RemoveMyUserRequest}
 */
proto.zitadel.auth.v1.RemoveMyUserRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.auth.v1.RemoveMyUserRequest;
  return proto.zitadel.auth.v1.RemoveMyUserRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.auth.v1.RemoveMyUserRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.auth.v1.RemoveMyUserRequest}
 */
proto.zitadel.auth.v1.RemoveMyUserRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.auth.v1.RemoveMyUserRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.auth.v1.RemoveMyUserRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.auth.v1.RemoveMyUserRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.RemoveMyUserRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.auth.v1.RemoveMyUserResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.auth.v1.RemoveMyUserResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.auth.v1.RemoveMyUserResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.RemoveMyUserResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.auth.v1.RemoveMyUserResponse}
 */
proto.zitadel.auth.v1.RemoveMyUserResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.auth.v1.RemoveMyUserResponse;
  return proto.zitadel.auth.v1.RemoveMyUserResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.auth.v1.RemoveMyUserResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.auth.v1.RemoveMyUserResponse}
 */
proto.zitadel.auth.v1.RemoveMyUserResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.auth.v1.RemoveMyUserResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.auth.v1.RemoveMyUserResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.auth.v1.RemoveMyUserResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.RemoveMyUserResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.auth.v1.RemoveMyUserResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.v1.ObjectDetails} */ (
    jspb.Message.getWrapperField(this, zitadel_object_pb.ObjectDetails, 1));
};


/**
 * @param {?proto.zitadel.v1.ObjectDetails|undefined} value
 * @return {!proto.zitadel.auth.v1.RemoveMyUserResponse} returns this
*/
proto.zitadel.auth.v1.RemoveMyUserResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.auth.v1.RemoveMyUserResponse} returns this
 */
proto.zitadel.auth.v1.RemoveMyUserResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.auth.v1.RemoveMyUserResponse.prototype.hasDetails = function() {
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
proto.zitadel.auth.v1.ListMyUserChangesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.auth.v1.ListMyUserChangesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.auth.v1.ListMyUserChangesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.ListMyUserChangesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
query: (f = msg.getQuery()) && zitadel_change_pb.ChangeQuery.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.auth.v1.ListMyUserChangesRequest}
 */
proto.zitadel.auth.v1.ListMyUserChangesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.auth.v1.ListMyUserChangesRequest;
  return proto.zitadel.auth.v1.ListMyUserChangesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.auth.v1.ListMyUserChangesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.auth.v1.ListMyUserChangesRequest}
 */
proto.zitadel.auth.v1.ListMyUserChangesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_change_pb.ChangeQuery;
      reader.readMessage(value,zitadel_change_pb.ChangeQuery.deserializeBinaryFromReader);
      msg.setQuery(value);
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
proto.zitadel.auth.v1.ListMyUserChangesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.auth.v1.ListMyUserChangesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.auth.v1.ListMyUserChangesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.ListMyUserChangesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQuery();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_change_pb.ChangeQuery.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.change.v1.ChangeQuery query = 1;
 * @return {?proto.zitadel.change.v1.ChangeQuery}
 */
proto.zitadel.auth.v1.ListMyUserChangesRequest.prototype.getQuery = function() {
  return /** @type{?proto.zitadel.change.v1.ChangeQuery} */ (
    jspb.Message.getWrapperField(this, zitadel_change_pb.ChangeQuery, 1));
};


/**
 * @param {?proto.zitadel.change.v1.ChangeQuery|undefined} value
 * @return {!proto.zitadel.auth.v1.ListMyUserChangesRequest} returns this
*/
proto.zitadel.auth.v1.ListMyUserChangesRequest.prototype.setQuery = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.auth.v1.ListMyUserChangesRequest} returns this
 */
proto.zitadel.auth.v1.ListMyUserChangesRequest.prototype.clearQuery = function() {
  return this.setQuery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.auth.v1.ListMyUserChangesRequest.prototype.hasQuery = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.auth.v1.ListMyUserChangesResponse.repeatedFields_ = [2];



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
proto.zitadel.auth.v1.ListMyUserChangesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.auth.v1.ListMyUserChangesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.auth.v1.ListMyUserChangesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.ListMyUserChangesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
resultList: jspb.Message.toObjectList(msg.getResultList(),
    zitadel_change_pb.Change.toObject, includeInstance)
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
 * @return {!proto.zitadel.auth.v1.ListMyUserChangesResponse}
 */
proto.zitadel.auth.v1.ListMyUserChangesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.auth.v1.ListMyUserChangesResponse;
  return proto.zitadel.auth.v1.ListMyUserChangesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.auth.v1.ListMyUserChangesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.auth.v1.ListMyUserChangesResponse}
 */
proto.zitadel.auth.v1.ListMyUserChangesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = new zitadel_change_pb.Change;
      reader.readMessage(value,zitadel_change_pb.Change.deserializeBinaryFromReader);
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
proto.zitadel.auth.v1.ListMyUserChangesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.auth.v1.ListMyUserChangesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.auth.v1.ListMyUserChangesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.ListMyUserChangesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResultList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      zitadel_change_pb.Change.serializeBinaryToWriter
    );
  }
};


/**
 * repeated zitadel.change.v1.Change result = 2;
 * @return {!Array<!proto.zitadel.change.v1.Change>}
 */
proto.zitadel.auth.v1.ListMyUserChangesResponse.prototype.getResultList = function() {
  return /** @type{!Array<!proto.zitadel.change.v1.Change>} */ (
    jspb.Message.getRepeatedWrapperField(this, zitadel_change_pb.Change, 2));
};


/**
 * @param {!Array<!proto.zitadel.change.v1.Change>} value
 * @return {!proto.zitadel.auth.v1.ListMyUserChangesResponse} returns this
*/
proto.zitadel.auth.v1.ListMyUserChangesResponse.prototype.setResultList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.zitadel.change.v1.Change=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zitadel.change.v1.Change}
 */
proto.zitadel.auth.v1.ListMyUserChangesResponse.prototype.addResult = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.zitadel.change.v1.Change, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.auth.v1.ListMyUserChangesResponse} returns this
 */
proto.zitadel.auth.v1.ListMyUserChangesResponse.prototype.clearResultList = function() {
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
proto.zitadel.auth.v1.ListMyUserSessionsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.auth.v1.ListMyUserSessionsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.auth.v1.ListMyUserSessionsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.ListMyUserSessionsRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.auth.v1.ListMyUserSessionsRequest}
 */
proto.zitadel.auth.v1.ListMyUserSessionsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.auth.v1.ListMyUserSessionsRequest;
  return proto.zitadel.auth.v1.ListMyUserSessionsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.auth.v1.ListMyUserSessionsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.auth.v1.ListMyUserSessionsRequest}
 */
proto.zitadel.auth.v1.ListMyUserSessionsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.auth.v1.ListMyUserSessionsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.auth.v1.ListMyUserSessionsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.auth.v1.ListMyUserSessionsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.ListMyUserSessionsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.auth.v1.ListMyUserSessionsResponse.repeatedFields_ = [1];



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
proto.zitadel.auth.v1.ListMyUserSessionsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.auth.v1.ListMyUserSessionsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.auth.v1.ListMyUserSessionsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.ListMyUserSessionsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
resultList: jspb.Message.toObjectList(msg.getResultList(),
    zitadel_user_pb.Session.toObject, includeInstance)
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
 * @return {!proto.zitadel.auth.v1.ListMyUserSessionsResponse}
 */
proto.zitadel.auth.v1.ListMyUserSessionsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.auth.v1.ListMyUserSessionsResponse;
  return proto.zitadel.auth.v1.ListMyUserSessionsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.auth.v1.ListMyUserSessionsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.auth.v1.ListMyUserSessionsResponse}
 */
proto.zitadel.auth.v1.ListMyUserSessionsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_user_pb.Session;
      reader.readMessage(value,zitadel_user_pb.Session.deserializeBinaryFromReader);
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
proto.zitadel.auth.v1.ListMyUserSessionsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.auth.v1.ListMyUserSessionsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.auth.v1.ListMyUserSessionsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.ListMyUserSessionsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResultList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      zitadel_user_pb.Session.serializeBinaryToWriter
    );
  }
};


/**
 * repeated zitadel.user.v1.Session result = 1;
 * @return {!Array<!proto.zitadel.user.v1.Session>}
 */
proto.zitadel.auth.v1.ListMyUserSessionsResponse.prototype.getResultList = function() {
  return /** @type{!Array<!proto.zitadel.user.v1.Session>} */ (
    jspb.Message.getRepeatedWrapperField(this, zitadel_user_pb.Session, 1));
};


/**
 * @param {!Array<!proto.zitadel.user.v1.Session>} value
 * @return {!proto.zitadel.auth.v1.ListMyUserSessionsResponse} returns this
*/
proto.zitadel.auth.v1.ListMyUserSessionsResponse.prototype.setResultList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.zitadel.user.v1.Session=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zitadel.user.v1.Session}
 */
proto.zitadel.auth.v1.ListMyUserSessionsResponse.prototype.addResult = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.zitadel.user.v1.Session, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.auth.v1.ListMyUserSessionsResponse} returns this
 */
proto.zitadel.auth.v1.ListMyUserSessionsResponse.prototype.clearResultList = function() {
  return this.setResultList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.auth.v1.ListMyMetadataRequest.repeatedFields_ = [2];



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
proto.zitadel.auth.v1.ListMyMetadataRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.auth.v1.ListMyMetadataRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.auth.v1.ListMyMetadataRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.ListMyMetadataRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
query: (f = msg.getQuery()) && zitadel_object_pb.ListQuery.toObject(includeInstance, f),
queriesList: jspb.Message.toObjectList(msg.getQueriesList(),
    zitadel_metadata_pb.MetadataQuery.toObject, includeInstance)
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
 * @return {!proto.zitadel.auth.v1.ListMyMetadataRequest}
 */
proto.zitadel.auth.v1.ListMyMetadataRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.auth.v1.ListMyMetadataRequest;
  return proto.zitadel.auth.v1.ListMyMetadataRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.auth.v1.ListMyMetadataRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.auth.v1.ListMyMetadataRequest}
 */
proto.zitadel.auth.v1.ListMyMetadataRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new zitadel_metadata_pb.MetadataQuery;
      reader.readMessage(value,zitadel_metadata_pb.MetadataQuery.deserializeBinaryFromReader);
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
proto.zitadel.auth.v1.ListMyMetadataRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.auth.v1.ListMyMetadataRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.auth.v1.ListMyMetadataRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.ListMyMetadataRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQuery();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_pb.ListQuery.serializeBinaryToWriter
    );
  }
  f = message.getQueriesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      zitadel_metadata_pb.MetadataQuery.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.v1.ListQuery query = 1;
 * @return {?proto.zitadel.v1.ListQuery}
 */
proto.zitadel.auth.v1.ListMyMetadataRequest.prototype.getQuery = function() {
  return /** @type{?proto.zitadel.v1.ListQuery} */ (
    jspb.Message.getWrapperField(this, zitadel_object_pb.ListQuery, 1));
};


/**
 * @param {?proto.zitadel.v1.ListQuery|undefined} value
 * @return {!proto.zitadel.auth.v1.ListMyMetadataRequest} returns this
*/
proto.zitadel.auth.v1.ListMyMetadataRequest.prototype.setQuery = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.auth.v1.ListMyMetadataRequest} returns this
 */
proto.zitadel.auth.v1.ListMyMetadataRequest.prototype.clearQuery = function() {
  return this.setQuery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.auth.v1.ListMyMetadataRequest.prototype.hasQuery = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated zitadel.metadata.v1.MetadataQuery queries = 2;
 * @return {!Array<!proto.zitadel.metadata.v1.MetadataQuery>}
 */
proto.zitadel.auth.v1.ListMyMetadataRequest.prototype.getQueriesList = function() {
  return /** @type{!Array<!proto.zitadel.metadata.v1.MetadataQuery>} */ (
    jspb.Message.getRepeatedWrapperField(this, zitadel_metadata_pb.MetadataQuery, 2));
};


/**
 * @param {!Array<!proto.zitadel.metadata.v1.MetadataQuery>} value
 * @return {!proto.zitadel.auth.v1.ListMyMetadataRequest} returns this
*/
proto.zitadel.auth.v1.ListMyMetadataRequest.prototype.setQueriesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.zitadel.metadata.v1.MetadataQuery=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zitadel.metadata.v1.MetadataQuery}
 */
proto.zitadel.auth.v1.ListMyMetadataRequest.prototype.addQueries = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.zitadel.metadata.v1.MetadataQuery, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.auth.v1.ListMyMetadataRequest} returns this
 */
proto.zitadel.auth.v1.ListMyMetadataRequest.prototype.clearQueriesList = function() {
  return this.setQueriesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.auth.v1.ListMyMetadataResponse.repeatedFields_ = [2];



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
proto.zitadel.auth.v1.ListMyMetadataResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.auth.v1.ListMyMetadataResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.auth.v1.ListMyMetadataResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.ListMyMetadataResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_pb.ListDetails.toObject(includeInstance, f),
resultList: jspb.Message.toObjectList(msg.getResultList(),
    zitadel_metadata_pb.Metadata.toObject, includeInstance)
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
 * @return {!proto.zitadel.auth.v1.ListMyMetadataResponse}
 */
proto.zitadel.auth.v1.ListMyMetadataResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.auth.v1.ListMyMetadataResponse;
  return proto.zitadel.auth.v1.ListMyMetadataResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.auth.v1.ListMyMetadataResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.auth.v1.ListMyMetadataResponse}
 */
proto.zitadel.auth.v1.ListMyMetadataResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new zitadel_metadata_pb.Metadata;
      reader.readMessage(value,zitadel_metadata_pb.Metadata.deserializeBinaryFromReader);
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
proto.zitadel.auth.v1.ListMyMetadataResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.auth.v1.ListMyMetadataResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.auth.v1.ListMyMetadataResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.ListMyMetadataResponse.serializeBinaryToWriter = function(message, writer) {
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
      zitadel_metadata_pb.Metadata.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.v1.ListDetails details = 1;
 * @return {?proto.zitadel.v1.ListDetails}
 */
proto.zitadel.auth.v1.ListMyMetadataResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.v1.ListDetails} */ (
    jspb.Message.getWrapperField(this, zitadel_object_pb.ListDetails, 1));
};


/**
 * @param {?proto.zitadel.v1.ListDetails|undefined} value
 * @return {!proto.zitadel.auth.v1.ListMyMetadataResponse} returns this
*/
proto.zitadel.auth.v1.ListMyMetadataResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.auth.v1.ListMyMetadataResponse} returns this
 */
proto.zitadel.auth.v1.ListMyMetadataResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.auth.v1.ListMyMetadataResponse.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated zitadel.metadata.v1.Metadata result = 2;
 * @return {!Array<!proto.zitadel.metadata.v1.Metadata>}
 */
proto.zitadel.auth.v1.ListMyMetadataResponse.prototype.getResultList = function() {
  return /** @type{!Array<!proto.zitadel.metadata.v1.Metadata>} */ (
    jspb.Message.getRepeatedWrapperField(this, zitadel_metadata_pb.Metadata, 2));
};


/**
 * @param {!Array<!proto.zitadel.metadata.v1.Metadata>} value
 * @return {!proto.zitadel.auth.v1.ListMyMetadataResponse} returns this
*/
proto.zitadel.auth.v1.ListMyMetadataResponse.prototype.setResultList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.zitadel.metadata.v1.Metadata=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zitadel.metadata.v1.Metadata}
 */
proto.zitadel.auth.v1.ListMyMetadataResponse.prototype.addResult = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.zitadel.metadata.v1.Metadata, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.auth.v1.ListMyMetadataResponse} returns this
 */
proto.zitadel.auth.v1.ListMyMetadataResponse.prototype.clearResultList = function() {
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
proto.zitadel.auth.v1.GetMyMetadataRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.auth.v1.GetMyMetadataRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.auth.v1.GetMyMetadataRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.GetMyMetadataRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
key: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.zitadel.auth.v1.GetMyMetadataRequest}
 */
proto.zitadel.auth.v1.GetMyMetadataRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.auth.v1.GetMyMetadataRequest;
  return proto.zitadel.auth.v1.GetMyMetadataRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.auth.v1.GetMyMetadataRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.auth.v1.GetMyMetadataRequest}
 */
proto.zitadel.auth.v1.GetMyMetadataRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.auth.v1.GetMyMetadataRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.auth.v1.GetMyMetadataRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.auth.v1.GetMyMetadataRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.GetMyMetadataRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string key = 1;
 * @return {string}
 */
proto.zitadel.auth.v1.GetMyMetadataRequest.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.auth.v1.GetMyMetadataRequest} returns this
 */
proto.zitadel.auth.v1.GetMyMetadataRequest.prototype.setKey = function(value) {
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
proto.zitadel.auth.v1.GetMyMetadataResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.auth.v1.GetMyMetadataResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.auth.v1.GetMyMetadataResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.GetMyMetadataResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
metadata: (f = msg.getMetadata()) && zitadel_metadata_pb.Metadata.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.auth.v1.GetMyMetadataResponse}
 */
proto.zitadel.auth.v1.GetMyMetadataResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.auth.v1.GetMyMetadataResponse;
  return proto.zitadel.auth.v1.GetMyMetadataResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.auth.v1.GetMyMetadataResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.auth.v1.GetMyMetadataResponse}
 */
proto.zitadel.auth.v1.GetMyMetadataResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_metadata_pb.Metadata;
      reader.readMessage(value,zitadel_metadata_pb.Metadata.deserializeBinaryFromReader);
      msg.setMetadata(value);
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
proto.zitadel.auth.v1.GetMyMetadataResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.auth.v1.GetMyMetadataResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.auth.v1.GetMyMetadataResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.GetMyMetadataResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_metadata_pb.Metadata.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.metadata.v1.Metadata metadata = 1;
 * @return {?proto.zitadel.metadata.v1.Metadata}
 */
proto.zitadel.auth.v1.GetMyMetadataResponse.prototype.getMetadata = function() {
  return /** @type{?proto.zitadel.metadata.v1.Metadata} */ (
    jspb.Message.getWrapperField(this, zitadel_metadata_pb.Metadata, 1));
};


/**
 * @param {?proto.zitadel.metadata.v1.Metadata|undefined} value
 * @return {!proto.zitadel.auth.v1.GetMyMetadataResponse} returns this
*/
proto.zitadel.auth.v1.GetMyMetadataResponse.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.auth.v1.GetMyMetadataResponse} returns this
 */
proto.zitadel.auth.v1.GetMyMetadataResponse.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.auth.v1.GetMyMetadataResponse.prototype.hasMetadata = function() {
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
proto.zitadel.auth.v1.SetMyMetadataRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.auth.v1.SetMyMetadataRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.auth.v1.SetMyMetadataRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.SetMyMetadataRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.auth.v1.SetMyMetadataRequest}
 */
proto.zitadel.auth.v1.SetMyMetadataRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.auth.v1.SetMyMetadataRequest;
  return proto.zitadel.auth.v1.SetMyMetadataRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.auth.v1.SetMyMetadataRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.auth.v1.SetMyMetadataRequest}
 */
proto.zitadel.auth.v1.SetMyMetadataRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.auth.v1.SetMyMetadataRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.auth.v1.SetMyMetadataRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.auth.v1.SetMyMetadataRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.SetMyMetadataRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.auth.v1.SetMyMetadataRequest.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.auth.v1.SetMyMetadataRequest} returns this
 */
proto.zitadel.auth.v1.SetMyMetadataRequest.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bytes value = 2;
 * @return {!(string|Uint8Array)}
 */
proto.zitadel.auth.v1.SetMyMetadataRequest.prototype.getValue = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes value = 2;
 * This is a type-conversion wrapper around `getValue()`
 * @return {string}
 */
proto.zitadel.auth.v1.SetMyMetadataRequest.prototype.getValue_asB64 = function() {
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
proto.zitadel.auth.v1.SetMyMetadataRequest.prototype.getValue_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getValue()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.zitadel.auth.v1.SetMyMetadataRequest} returns this
 */
proto.zitadel.auth.v1.SetMyMetadataRequest.prototype.setValue = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
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
proto.zitadel.auth.v1.SetMyMetadataResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.auth.v1.SetMyMetadataResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.auth.v1.SetMyMetadataResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.SetMyMetadataResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.auth.v1.SetMyMetadataResponse}
 */
proto.zitadel.auth.v1.SetMyMetadataResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.auth.v1.SetMyMetadataResponse;
  return proto.zitadel.auth.v1.SetMyMetadataResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.auth.v1.SetMyMetadataResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.auth.v1.SetMyMetadataResponse}
 */
proto.zitadel.auth.v1.SetMyMetadataResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.auth.v1.SetMyMetadataResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.auth.v1.SetMyMetadataResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.auth.v1.SetMyMetadataResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.SetMyMetadataResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.auth.v1.SetMyMetadataResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.v1.ObjectDetails} */ (
    jspb.Message.getWrapperField(this, zitadel_object_pb.ObjectDetails, 1));
};


/**
 * @param {?proto.zitadel.v1.ObjectDetails|undefined} value
 * @return {!proto.zitadel.auth.v1.SetMyMetadataResponse} returns this
*/
proto.zitadel.auth.v1.SetMyMetadataResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.auth.v1.SetMyMetadataResponse} returns this
 */
proto.zitadel.auth.v1.SetMyMetadataResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.auth.v1.SetMyMetadataResponse.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.auth.v1.BulkSetMyMetadataRequest.repeatedFields_ = [1];



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
proto.zitadel.auth.v1.BulkSetMyMetadataRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.auth.v1.BulkSetMyMetadataRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.auth.v1.BulkSetMyMetadataRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.BulkSetMyMetadataRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
metadataList: jspb.Message.toObjectList(msg.getMetadataList(),
    proto.zitadel.auth.v1.BulkSetMyMetadataRequest.Metadata.toObject, includeInstance)
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
 * @return {!proto.zitadel.auth.v1.BulkSetMyMetadataRequest}
 */
proto.zitadel.auth.v1.BulkSetMyMetadataRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.auth.v1.BulkSetMyMetadataRequest;
  return proto.zitadel.auth.v1.BulkSetMyMetadataRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.auth.v1.BulkSetMyMetadataRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.auth.v1.BulkSetMyMetadataRequest}
 */
proto.zitadel.auth.v1.BulkSetMyMetadataRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.zitadel.auth.v1.BulkSetMyMetadataRequest.Metadata;
      reader.readMessage(value,proto.zitadel.auth.v1.BulkSetMyMetadataRequest.Metadata.deserializeBinaryFromReader);
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
proto.zitadel.auth.v1.BulkSetMyMetadataRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.auth.v1.BulkSetMyMetadataRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.auth.v1.BulkSetMyMetadataRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.BulkSetMyMetadataRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMetadataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.zitadel.auth.v1.BulkSetMyMetadataRequest.Metadata.serializeBinaryToWriter
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
proto.zitadel.auth.v1.BulkSetMyMetadataRequest.Metadata.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.auth.v1.BulkSetMyMetadataRequest.Metadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.auth.v1.BulkSetMyMetadataRequest.Metadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.BulkSetMyMetadataRequest.Metadata.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.auth.v1.BulkSetMyMetadataRequest.Metadata}
 */
proto.zitadel.auth.v1.BulkSetMyMetadataRequest.Metadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.auth.v1.BulkSetMyMetadataRequest.Metadata;
  return proto.zitadel.auth.v1.BulkSetMyMetadataRequest.Metadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.auth.v1.BulkSetMyMetadataRequest.Metadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.auth.v1.BulkSetMyMetadataRequest.Metadata}
 */
proto.zitadel.auth.v1.BulkSetMyMetadataRequest.Metadata.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.auth.v1.BulkSetMyMetadataRequest.Metadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.auth.v1.BulkSetMyMetadataRequest.Metadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.auth.v1.BulkSetMyMetadataRequest.Metadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.BulkSetMyMetadataRequest.Metadata.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.auth.v1.BulkSetMyMetadataRequest.Metadata.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.auth.v1.BulkSetMyMetadataRequest.Metadata} returns this
 */
proto.zitadel.auth.v1.BulkSetMyMetadataRequest.Metadata.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bytes value = 2;
 * @return {!(string|Uint8Array)}
 */
proto.zitadel.auth.v1.BulkSetMyMetadataRequest.Metadata.prototype.getValue = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes value = 2;
 * This is a type-conversion wrapper around `getValue()`
 * @return {string}
 */
proto.zitadel.auth.v1.BulkSetMyMetadataRequest.Metadata.prototype.getValue_asB64 = function() {
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
proto.zitadel.auth.v1.BulkSetMyMetadataRequest.Metadata.prototype.getValue_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getValue()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.zitadel.auth.v1.BulkSetMyMetadataRequest.Metadata} returns this
 */
proto.zitadel.auth.v1.BulkSetMyMetadataRequest.Metadata.prototype.setValue = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * repeated Metadata metadata = 1;
 * @return {!Array<!proto.zitadel.auth.v1.BulkSetMyMetadataRequest.Metadata>}
 */
proto.zitadel.auth.v1.BulkSetMyMetadataRequest.prototype.getMetadataList = function() {
  return /** @type{!Array<!proto.zitadel.auth.v1.BulkSetMyMetadataRequest.Metadata>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.zitadel.auth.v1.BulkSetMyMetadataRequest.Metadata, 1));
};


/**
 * @param {!Array<!proto.zitadel.auth.v1.BulkSetMyMetadataRequest.Metadata>} value
 * @return {!proto.zitadel.auth.v1.BulkSetMyMetadataRequest} returns this
*/
proto.zitadel.auth.v1.BulkSetMyMetadataRequest.prototype.setMetadataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.zitadel.auth.v1.BulkSetMyMetadataRequest.Metadata=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zitadel.auth.v1.BulkSetMyMetadataRequest.Metadata}
 */
proto.zitadel.auth.v1.BulkSetMyMetadataRequest.prototype.addMetadata = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.zitadel.auth.v1.BulkSetMyMetadataRequest.Metadata, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.auth.v1.BulkSetMyMetadataRequest} returns this
 */
proto.zitadel.auth.v1.BulkSetMyMetadataRequest.prototype.clearMetadataList = function() {
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
proto.zitadel.auth.v1.BulkSetMyMetadataResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.auth.v1.BulkSetMyMetadataResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.auth.v1.BulkSetMyMetadataResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.BulkSetMyMetadataResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.auth.v1.BulkSetMyMetadataResponse}
 */
proto.zitadel.auth.v1.BulkSetMyMetadataResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.auth.v1.BulkSetMyMetadataResponse;
  return proto.zitadel.auth.v1.BulkSetMyMetadataResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.auth.v1.BulkSetMyMetadataResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.auth.v1.BulkSetMyMetadataResponse}
 */
proto.zitadel.auth.v1.BulkSetMyMetadataResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.auth.v1.BulkSetMyMetadataResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.auth.v1.BulkSetMyMetadataResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.auth.v1.BulkSetMyMetadataResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.BulkSetMyMetadataResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.auth.v1.BulkSetMyMetadataResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.v1.ObjectDetails} */ (
    jspb.Message.getWrapperField(this, zitadel_object_pb.ObjectDetails, 1));
};


/**
 * @param {?proto.zitadel.v1.ObjectDetails|undefined} value
 * @return {!proto.zitadel.auth.v1.BulkSetMyMetadataResponse} returns this
*/
proto.zitadel.auth.v1.BulkSetMyMetadataResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.auth.v1.BulkSetMyMetadataResponse} returns this
 */
proto.zitadel.auth.v1.BulkSetMyMetadataResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.auth.v1.BulkSetMyMetadataResponse.prototype.hasDetails = function() {
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
proto.zitadel.auth.v1.RemoveMyMetadataRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.auth.v1.RemoveMyMetadataRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.auth.v1.RemoveMyMetadataRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.RemoveMyMetadataRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
key: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.zitadel.auth.v1.RemoveMyMetadataRequest}
 */
proto.zitadel.auth.v1.RemoveMyMetadataRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.auth.v1.RemoveMyMetadataRequest;
  return proto.zitadel.auth.v1.RemoveMyMetadataRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.auth.v1.RemoveMyMetadataRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.auth.v1.RemoveMyMetadataRequest}
 */
proto.zitadel.auth.v1.RemoveMyMetadataRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.auth.v1.RemoveMyMetadataRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.auth.v1.RemoveMyMetadataRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.auth.v1.RemoveMyMetadataRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.RemoveMyMetadataRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string key = 1;
 * @return {string}
 */
proto.zitadel.auth.v1.RemoveMyMetadataRequest.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.auth.v1.RemoveMyMetadataRequest} returns this
 */
proto.zitadel.auth.v1.RemoveMyMetadataRequest.prototype.setKey = function(value) {
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
proto.zitadel.auth.v1.RemoveMyMetadataResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.auth.v1.RemoveMyMetadataResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.auth.v1.RemoveMyMetadataResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.RemoveMyMetadataResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.auth.v1.RemoveMyMetadataResponse}
 */
proto.zitadel.auth.v1.RemoveMyMetadataResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.auth.v1.RemoveMyMetadataResponse;
  return proto.zitadel.auth.v1.RemoveMyMetadataResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.auth.v1.RemoveMyMetadataResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.auth.v1.RemoveMyMetadataResponse}
 */
proto.zitadel.auth.v1.RemoveMyMetadataResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.auth.v1.RemoveMyMetadataResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.auth.v1.RemoveMyMetadataResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.auth.v1.RemoveMyMetadataResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.RemoveMyMetadataResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.auth.v1.RemoveMyMetadataResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.v1.ObjectDetails} */ (
    jspb.Message.getWrapperField(this, zitadel_object_pb.ObjectDetails, 1));
};


/**
 * @param {?proto.zitadel.v1.ObjectDetails|undefined} value
 * @return {!proto.zitadel.auth.v1.RemoveMyMetadataResponse} returns this
*/
proto.zitadel.auth.v1.RemoveMyMetadataResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.auth.v1.RemoveMyMetadataResponse} returns this
 */
proto.zitadel.auth.v1.RemoveMyMetadataResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.auth.v1.RemoveMyMetadataResponse.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.auth.v1.BulkRemoveMyMetadataRequest.repeatedFields_ = [1];



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
proto.zitadel.auth.v1.BulkRemoveMyMetadataRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.auth.v1.BulkRemoveMyMetadataRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.auth.v1.BulkRemoveMyMetadataRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.BulkRemoveMyMetadataRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
keysList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
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
 * @return {!proto.zitadel.auth.v1.BulkRemoveMyMetadataRequest}
 */
proto.zitadel.auth.v1.BulkRemoveMyMetadataRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.auth.v1.BulkRemoveMyMetadataRequest;
  return proto.zitadel.auth.v1.BulkRemoveMyMetadataRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.auth.v1.BulkRemoveMyMetadataRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.auth.v1.BulkRemoveMyMetadataRequest}
 */
proto.zitadel.auth.v1.BulkRemoveMyMetadataRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
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
proto.zitadel.auth.v1.BulkRemoveMyMetadataRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.auth.v1.BulkRemoveMyMetadataRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.auth.v1.BulkRemoveMyMetadataRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.BulkRemoveMyMetadataRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKeysList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string keys = 1;
 * @return {!Array<string>}
 */
proto.zitadel.auth.v1.BulkRemoveMyMetadataRequest.prototype.getKeysList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.zitadel.auth.v1.BulkRemoveMyMetadataRequest} returns this
 */
proto.zitadel.auth.v1.BulkRemoveMyMetadataRequest.prototype.setKeysList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.zitadel.auth.v1.BulkRemoveMyMetadataRequest} returns this
 */
proto.zitadel.auth.v1.BulkRemoveMyMetadataRequest.prototype.addKeys = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.auth.v1.BulkRemoveMyMetadataRequest} returns this
 */
proto.zitadel.auth.v1.BulkRemoveMyMetadataRequest.prototype.clearKeysList = function() {
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
proto.zitadel.auth.v1.BulkRemoveMyMetadataResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.auth.v1.BulkRemoveMyMetadataResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.auth.v1.BulkRemoveMyMetadataResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.BulkRemoveMyMetadataResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.auth.v1.BulkRemoveMyMetadataResponse}
 */
proto.zitadel.auth.v1.BulkRemoveMyMetadataResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.auth.v1.BulkRemoveMyMetadataResponse;
  return proto.zitadel.auth.v1.BulkRemoveMyMetadataResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.auth.v1.BulkRemoveMyMetadataResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.auth.v1.BulkRemoveMyMetadataResponse}
 */
proto.zitadel.auth.v1.BulkRemoveMyMetadataResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.auth.v1.BulkRemoveMyMetadataResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.auth.v1.BulkRemoveMyMetadataResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.auth.v1.BulkRemoveMyMetadataResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.BulkRemoveMyMetadataResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.auth.v1.BulkRemoveMyMetadataResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.v1.ObjectDetails} */ (
    jspb.Message.getWrapperField(this, zitadel_object_pb.ObjectDetails, 1));
};


/**
 * @param {?proto.zitadel.v1.ObjectDetails|undefined} value
 * @return {!proto.zitadel.auth.v1.BulkRemoveMyMetadataResponse} returns this
*/
proto.zitadel.auth.v1.BulkRemoveMyMetadataResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.auth.v1.BulkRemoveMyMetadataResponse} returns this
 */
proto.zitadel.auth.v1.BulkRemoveMyMetadataResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.auth.v1.BulkRemoveMyMetadataResponse.prototype.hasDetails = function() {
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
proto.zitadel.auth.v1.ListMyRefreshTokensRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.auth.v1.ListMyRefreshTokensRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.auth.v1.ListMyRefreshTokensRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.ListMyRefreshTokensRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.auth.v1.ListMyRefreshTokensRequest}
 */
proto.zitadel.auth.v1.ListMyRefreshTokensRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.auth.v1.ListMyRefreshTokensRequest;
  return proto.zitadel.auth.v1.ListMyRefreshTokensRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.auth.v1.ListMyRefreshTokensRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.auth.v1.ListMyRefreshTokensRequest}
 */
proto.zitadel.auth.v1.ListMyRefreshTokensRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.auth.v1.ListMyRefreshTokensRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.auth.v1.ListMyRefreshTokensRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.auth.v1.ListMyRefreshTokensRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.ListMyRefreshTokensRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.auth.v1.ListMyRefreshTokensResponse.repeatedFields_ = [2];



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
proto.zitadel.auth.v1.ListMyRefreshTokensResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.auth.v1.ListMyRefreshTokensResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.auth.v1.ListMyRefreshTokensResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.ListMyRefreshTokensResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_pb.ListDetails.toObject(includeInstance, f),
resultList: jspb.Message.toObjectList(msg.getResultList(),
    zitadel_user_pb.RefreshToken.toObject, includeInstance)
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
 * @return {!proto.zitadel.auth.v1.ListMyRefreshTokensResponse}
 */
proto.zitadel.auth.v1.ListMyRefreshTokensResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.auth.v1.ListMyRefreshTokensResponse;
  return proto.zitadel.auth.v1.ListMyRefreshTokensResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.auth.v1.ListMyRefreshTokensResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.auth.v1.ListMyRefreshTokensResponse}
 */
proto.zitadel.auth.v1.ListMyRefreshTokensResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new zitadel_user_pb.RefreshToken;
      reader.readMessage(value,zitadel_user_pb.RefreshToken.deserializeBinaryFromReader);
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
proto.zitadel.auth.v1.ListMyRefreshTokensResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.auth.v1.ListMyRefreshTokensResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.auth.v1.ListMyRefreshTokensResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.ListMyRefreshTokensResponse.serializeBinaryToWriter = function(message, writer) {
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
      zitadel_user_pb.RefreshToken.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.v1.ListDetails details = 1;
 * @return {?proto.zitadel.v1.ListDetails}
 */
proto.zitadel.auth.v1.ListMyRefreshTokensResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.v1.ListDetails} */ (
    jspb.Message.getWrapperField(this, zitadel_object_pb.ListDetails, 1));
};


/**
 * @param {?proto.zitadel.v1.ListDetails|undefined} value
 * @return {!proto.zitadel.auth.v1.ListMyRefreshTokensResponse} returns this
*/
proto.zitadel.auth.v1.ListMyRefreshTokensResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.auth.v1.ListMyRefreshTokensResponse} returns this
 */
proto.zitadel.auth.v1.ListMyRefreshTokensResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.auth.v1.ListMyRefreshTokensResponse.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated zitadel.user.v1.RefreshToken result = 2;
 * @return {!Array<!proto.zitadel.user.v1.RefreshToken>}
 */
proto.zitadel.auth.v1.ListMyRefreshTokensResponse.prototype.getResultList = function() {
  return /** @type{!Array<!proto.zitadel.user.v1.RefreshToken>} */ (
    jspb.Message.getRepeatedWrapperField(this, zitadel_user_pb.RefreshToken, 2));
};


/**
 * @param {!Array<!proto.zitadel.user.v1.RefreshToken>} value
 * @return {!proto.zitadel.auth.v1.ListMyRefreshTokensResponse} returns this
*/
proto.zitadel.auth.v1.ListMyRefreshTokensResponse.prototype.setResultList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.zitadel.user.v1.RefreshToken=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zitadel.user.v1.RefreshToken}
 */
proto.zitadel.auth.v1.ListMyRefreshTokensResponse.prototype.addResult = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.zitadel.user.v1.RefreshToken, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.auth.v1.ListMyRefreshTokensResponse} returns this
 */
proto.zitadel.auth.v1.ListMyRefreshTokensResponse.prototype.clearResultList = function() {
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
proto.zitadel.auth.v1.RevokeMyRefreshTokenRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.auth.v1.RevokeMyRefreshTokenRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.auth.v1.RevokeMyRefreshTokenRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.RevokeMyRefreshTokenRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.auth.v1.RevokeMyRefreshTokenRequest}
 */
proto.zitadel.auth.v1.RevokeMyRefreshTokenRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.auth.v1.RevokeMyRefreshTokenRequest;
  return proto.zitadel.auth.v1.RevokeMyRefreshTokenRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.auth.v1.RevokeMyRefreshTokenRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.auth.v1.RevokeMyRefreshTokenRequest}
 */
proto.zitadel.auth.v1.RevokeMyRefreshTokenRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.auth.v1.RevokeMyRefreshTokenRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.auth.v1.RevokeMyRefreshTokenRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.auth.v1.RevokeMyRefreshTokenRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.RevokeMyRefreshTokenRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.auth.v1.RevokeMyRefreshTokenRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.auth.v1.RevokeMyRefreshTokenRequest} returns this
 */
proto.zitadel.auth.v1.RevokeMyRefreshTokenRequest.prototype.setId = function(value) {
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
proto.zitadel.auth.v1.RevokeMyRefreshTokenResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.auth.v1.RevokeMyRefreshTokenResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.auth.v1.RevokeMyRefreshTokenResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.RevokeMyRefreshTokenResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.auth.v1.RevokeMyRefreshTokenResponse}
 */
proto.zitadel.auth.v1.RevokeMyRefreshTokenResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.auth.v1.RevokeMyRefreshTokenResponse;
  return proto.zitadel.auth.v1.RevokeMyRefreshTokenResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.auth.v1.RevokeMyRefreshTokenResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.auth.v1.RevokeMyRefreshTokenResponse}
 */
proto.zitadel.auth.v1.RevokeMyRefreshTokenResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.auth.v1.RevokeMyRefreshTokenResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.auth.v1.RevokeMyRefreshTokenResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.auth.v1.RevokeMyRefreshTokenResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.RevokeMyRefreshTokenResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.auth.v1.RevokeMyRefreshTokenResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.v1.ObjectDetails} */ (
    jspb.Message.getWrapperField(this, zitadel_object_pb.ObjectDetails, 1));
};


/**
 * @param {?proto.zitadel.v1.ObjectDetails|undefined} value
 * @return {!proto.zitadel.auth.v1.RevokeMyRefreshTokenResponse} returns this
*/
proto.zitadel.auth.v1.RevokeMyRefreshTokenResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.auth.v1.RevokeMyRefreshTokenResponse} returns this
 */
proto.zitadel.auth.v1.RevokeMyRefreshTokenResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.auth.v1.RevokeMyRefreshTokenResponse.prototype.hasDetails = function() {
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
proto.zitadel.auth.v1.RevokeAllMyRefreshTokensRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.auth.v1.RevokeAllMyRefreshTokensRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.auth.v1.RevokeAllMyRefreshTokensRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.RevokeAllMyRefreshTokensRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.auth.v1.RevokeAllMyRefreshTokensRequest}
 */
proto.zitadel.auth.v1.RevokeAllMyRefreshTokensRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.auth.v1.RevokeAllMyRefreshTokensRequest;
  return proto.zitadel.auth.v1.RevokeAllMyRefreshTokensRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.auth.v1.RevokeAllMyRefreshTokensRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.auth.v1.RevokeAllMyRefreshTokensRequest}
 */
proto.zitadel.auth.v1.RevokeAllMyRefreshTokensRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.auth.v1.RevokeAllMyRefreshTokensRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.auth.v1.RevokeAllMyRefreshTokensRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.auth.v1.RevokeAllMyRefreshTokensRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.RevokeAllMyRefreshTokensRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.auth.v1.RevokeAllMyRefreshTokensResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.auth.v1.RevokeAllMyRefreshTokensResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.auth.v1.RevokeAllMyRefreshTokensResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.RevokeAllMyRefreshTokensResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.auth.v1.RevokeAllMyRefreshTokensResponse}
 */
proto.zitadel.auth.v1.RevokeAllMyRefreshTokensResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.auth.v1.RevokeAllMyRefreshTokensResponse;
  return proto.zitadel.auth.v1.RevokeAllMyRefreshTokensResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.auth.v1.RevokeAllMyRefreshTokensResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.auth.v1.RevokeAllMyRefreshTokensResponse}
 */
proto.zitadel.auth.v1.RevokeAllMyRefreshTokensResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.auth.v1.RevokeAllMyRefreshTokensResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.auth.v1.RevokeAllMyRefreshTokensResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.auth.v1.RevokeAllMyRefreshTokensResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.RevokeAllMyRefreshTokensResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.auth.v1.UpdateMyUserNameRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.auth.v1.UpdateMyUserNameRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.auth.v1.UpdateMyUserNameRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.UpdateMyUserNameRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
userName: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.zitadel.auth.v1.UpdateMyUserNameRequest}
 */
proto.zitadel.auth.v1.UpdateMyUserNameRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.auth.v1.UpdateMyUserNameRequest;
  return proto.zitadel.auth.v1.UpdateMyUserNameRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.auth.v1.UpdateMyUserNameRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.auth.v1.UpdateMyUserNameRequest}
 */
proto.zitadel.auth.v1.UpdateMyUserNameRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.auth.v1.UpdateMyUserNameRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.auth.v1.UpdateMyUserNameRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.auth.v1.UpdateMyUserNameRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.UpdateMyUserNameRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string user_name = 1;
 * @return {string}
 */
proto.zitadel.auth.v1.UpdateMyUserNameRequest.prototype.getUserName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.auth.v1.UpdateMyUserNameRequest} returns this
 */
proto.zitadel.auth.v1.UpdateMyUserNameRequest.prototype.setUserName = function(value) {
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
proto.zitadel.auth.v1.UpdateMyUserNameResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.auth.v1.UpdateMyUserNameResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.auth.v1.UpdateMyUserNameResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.UpdateMyUserNameResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.auth.v1.UpdateMyUserNameResponse}
 */
proto.zitadel.auth.v1.UpdateMyUserNameResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.auth.v1.UpdateMyUserNameResponse;
  return proto.zitadel.auth.v1.UpdateMyUserNameResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.auth.v1.UpdateMyUserNameResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.auth.v1.UpdateMyUserNameResponse}
 */
proto.zitadel.auth.v1.UpdateMyUserNameResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.auth.v1.UpdateMyUserNameResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.auth.v1.UpdateMyUserNameResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.auth.v1.UpdateMyUserNameResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.UpdateMyUserNameResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.auth.v1.UpdateMyUserNameResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.v1.ObjectDetails} */ (
    jspb.Message.getWrapperField(this, zitadel_object_pb.ObjectDetails, 1));
};


/**
 * @param {?proto.zitadel.v1.ObjectDetails|undefined} value
 * @return {!proto.zitadel.auth.v1.UpdateMyUserNameResponse} returns this
*/
proto.zitadel.auth.v1.UpdateMyUserNameResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.auth.v1.UpdateMyUserNameResponse} returns this
 */
proto.zitadel.auth.v1.UpdateMyUserNameResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.auth.v1.UpdateMyUserNameResponse.prototype.hasDetails = function() {
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
proto.zitadel.auth.v1.GetMyPasswordComplexityPolicyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.auth.v1.GetMyPasswordComplexityPolicyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.auth.v1.GetMyPasswordComplexityPolicyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.GetMyPasswordComplexityPolicyRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.auth.v1.GetMyPasswordComplexityPolicyRequest}
 */
proto.zitadel.auth.v1.GetMyPasswordComplexityPolicyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.auth.v1.GetMyPasswordComplexityPolicyRequest;
  return proto.zitadel.auth.v1.GetMyPasswordComplexityPolicyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.auth.v1.GetMyPasswordComplexityPolicyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.auth.v1.GetMyPasswordComplexityPolicyRequest}
 */
proto.zitadel.auth.v1.GetMyPasswordComplexityPolicyRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.auth.v1.GetMyPasswordComplexityPolicyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.auth.v1.GetMyPasswordComplexityPolicyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.auth.v1.GetMyPasswordComplexityPolicyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.GetMyPasswordComplexityPolicyRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.auth.v1.GetMyPasswordComplexityPolicyResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.auth.v1.GetMyPasswordComplexityPolicyResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.auth.v1.GetMyPasswordComplexityPolicyResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.GetMyPasswordComplexityPolicyResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
policy: (f = msg.getPolicy()) && zitadel_policy_pb.PasswordComplexityPolicy.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.auth.v1.GetMyPasswordComplexityPolicyResponse}
 */
proto.zitadel.auth.v1.GetMyPasswordComplexityPolicyResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.auth.v1.GetMyPasswordComplexityPolicyResponse;
  return proto.zitadel.auth.v1.GetMyPasswordComplexityPolicyResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.auth.v1.GetMyPasswordComplexityPolicyResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.auth.v1.GetMyPasswordComplexityPolicyResponse}
 */
proto.zitadel.auth.v1.GetMyPasswordComplexityPolicyResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_policy_pb.PasswordComplexityPolicy;
      reader.readMessage(value,zitadel_policy_pb.PasswordComplexityPolicy.deserializeBinaryFromReader);
      msg.setPolicy(value);
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
proto.zitadel.auth.v1.GetMyPasswordComplexityPolicyResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.auth.v1.GetMyPasswordComplexityPolicyResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.auth.v1.GetMyPasswordComplexityPolicyResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.GetMyPasswordComplexityPolicyResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPolicy();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_policy_pb.PasswordComplexityPolicy.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.policy.v1.PasswordComplexityPolicy policy = 1;
 * @return {?proto.zitadel.policy.v1.PasswordComplexityPolicy}
 */
proto.zitadel.auth.v1.GetMyPasswordComplexityPolicyResponse.prototype.getPolicy = function() {
  return /** @type{?proto.zitadel.policy.v1.PasswordComplexityPolicy} */ (
    jspb.Message.getWrapperField(this, zitadel_policy_pb.PasswordComplexityPolicy, 1));
};


/**
 * @param {?proto.zitadel.policy.v1.PasswordComplexityPolicy|undefined} value
 * @return {!proto.zitadel.auth.v1.GetMyPasswordComplexityPolicyResponse} returns this
*/
proto.zitadel.auth.v1.GetMyPasswordComplexityPolicyResponse.prototype.setPolicy = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.auth.v1.GetMyPasswordComplexityPolicyResponse} returns this
 */
proto.zitadel.auth.v1.GetMyPasswordComplexityPolicyResponse.prototype.clearPolicy = function() {
  return this.setPolicy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.auth.v1.GetMyPasswordComplexityPolicyResponse.prototype.hasPolicy = function() {
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
proto.zitadel.auth.v1.UpdateMyPasswordRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.auth.v1.UpdateMyPasswordRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.auth.v1.UpdateMyPasswordRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.UpdateMyPasswordRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
oldPassword: jspb.Message.getFieldWithDefault(msg, 1, ""),
newPassword: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.zitadel.auth.v1.UpdateMyPasswordRequest}
 */
proto.zitadel.auth.v1.UpdateMyPasswordRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.auth.v1.UpdateMyPasswordRequest;
  return proto.zitadel.auth.v1.UpdateMyPasswordRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.auth.v1.UpdateMyPasswordRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.auth.v1.UpdateMyPasswordRequest}
 */
proto.zitadel.auth.v1.UpdateMyPasswordRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOldPassword(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNewPassword(value);
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
proto.zitadel.auth.v1.UpdateMyPasswordRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.auth.v1.UpdateMyPasswordRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.auth.v1.UpdateMyPasswordRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.UpdateMyPasswordRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOldPassword();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getNewPassword();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string old_password = 1;
 * @return {string}
 */
proto.zitadel.auth.v1.UpdateMyPasswordRequest.prototype.getOldPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.auth.v1.UpdateMyPasswordRequest} returns this
 */
proto.zitadel.auth.v1.UpdateMyPasswordRequest.prototype.setOldPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string new_password = 2;
 * @return {string}
 */
proto.zitadel.auth.v1.UpdateMyPasswordRequest.prototype.getNewPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.auth.v1.UpdateMyPasswordRequest} returns this
 */
proto.zitadel.auth.v1.UpdateMyPasswordRequest.prototype.setNewPassword = function(value) {
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
proto.zitadel.auth.v1.UpdateMyPasswordResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.auth.v1.UpdateMyPasswordResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.auth.v1.UpdateMyPasswordResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.UpdateMyPasswordResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.auth.v1.UpdateMyPasswordResponse}
 */
proto.zitadel.auth.v1.UpdateMyPasswordResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.auth.v1.UpdateMyPasswordResponse;
  return proto.zitadel.auth.v1.UpdateMyPasswordResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.auth.v1.UpdateMyPasswordResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.auth.v1.UpdateMyPasswordResponse}
 */
proto.zitadel.auth.v1.UpdateMyPasswordResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.auth.v1.UpdateMyPasswordResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.auth.v1.UpdateMyPasswordResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.auth.v1.UpdateMyPasswordResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.UpdateMyPasswordResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.auth.v1.UpdateMyPasswordResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.v1.ObjectDetails} */ (
    jspb.Message.getWrapperField(this, zitadel_object_pb.ObjectDetails, 1));
};


/**
 * @param {?proto.zitadel.v1.ObjectDetails|undefined} value
 * @return {!proto.zitadel.auth.v1.UpdateMyPasswordResponse} returns this
*/
proto.zitadel.auth.v1.UpdateMyPasswordResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.auth.v1.UpdateMyPasswordResponse} returns this
 */
proto.zitadel.auth.v1.UpdateMyPasswordResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.auth.v1.UpdateMyPasswordResponse.prototype.hasDetails = function() {
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
proto.zitadel.auth.v1.GetMyProfileRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.auth.v1.GetMyProfileRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.auth.v1.GetMyProfileRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.GetMyProfileRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.auth.v1.GetMyProfileRequest}
 */
proto.zitadel.auth.v1.GetMyProfileRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.auth.v1.GetMyProfileRequest;
  return proto.zitadel.auth.v1.GetMyProfileRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.auth.v1.GetMyProfileRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.auth.v1.GetMyProfileRequest}
 */
proto.zitadel.auth.v1.GetMyProfileRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.auth.v1.GetMyProfileRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.auth.v1.GetMyProfileRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.auth.v1.GetMyProfileRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.GetMyProfileRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.auth.v1.GetMyProfileResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.auth.v1.GetMyProfileResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.auth.v1.GetMyProfileResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.GetMyProfileResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_pb.ObjectDetails.toObject(includeInstance, f),
profile: (f = msg.getProfile()) && zitadel_user_pb.Profile.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.auth.v1.GetMyProfileResponse}
 */
proto.zitadel.auth.v1.GetMyProfileResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.auth.v1.GetMyProfileResponse;
  return proto.zitadel.auth.v1.GetMyProfileResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.auth.v1.GetMyProfileResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.auth.v1.GetMyProfileResponse}
 */
proto.zitadel.auth.v1.GetMyProfileResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new zitadel_user_pb.Profile;
      reader.readMessage(value,zitadel_user_pb.Profile.deserializeBinaryFromReader);
      msg.setProfile(value);
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
proto.zitadel.auth.v1.GetMyProfileResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.auth.v1.GetMyProfileResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.auth.v1.GetMyProfileResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.GetMyProfileResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_pb.ObjectDetails.serializeBinaryToWriter
    );
  }
  f = message.getProfile();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      zitadel_user_pb.Profile.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.v1.ObjectDetails details = 1;
 * @return {?proto.zitadel.v1.ObjectDetails}
 */
proto.zitadel.auth.v1.GetMyProfileResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.v1.ObjectDetails} */ (
    jspb.Message.getWrapperField(this, zitadel_object_pb.ObjectDetails, 1));
};


/**
 * @param {?proto.zitadel.v1.ObjectDetails|undefined} value
 * @return {!proto.zitadel.auth.v1.GetMyProfileResponse} returns this
*/
proto.zitadel.auth.v1.GetMyProfileResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.auth.v1.GetMyProfileResponse} returns this
 */
proto.zitadel.auth.v1.GetMyProfileResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.auth.v1.GetMyProfileResponse.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional zitadel.user.v1.Profile profile = 2;
 * @return {?proto.zitadel.user.v1.Profile}
 */
proto.zitadel.auth.v1.GetMyProfileResponse.prototype.getProfile = function() {
  return /** @type{?proto.zitadel.user.v1.Profile} */ (
    jspb.Message.getWrapperField(this, zitadel_user_pb.Profile, 2));
};


/**
 * @param {?proto.zitadel.user.v1.Profile|undefined} value
 * @return {!proto.zitadel.auth.v1.GetMyProfileResponse} returns this
*/
proto.zitadel.auth.v1.GetMyProfileResponse.prototype.setProfile = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.auth.v1.GetMyProfileResponse} returns this
 */
proto.zitadel.auth.v1.GetMyProfileResponse.prototype.clearProfile = function() {
  return this.setProfile(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.auth.v1.GetMyProfileResponse.prototype.hasProfile = function() {
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
proto.zitadel.auth.v1.UpdateMyProfileRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.auth.v1.UpdateMyProfileRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.auth.v1.UpdateMyProfileRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.UpdateMyProfileRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
firstName: jspb.Message.getFieldWithDefault(msg, 1, ""),
lastName: jspb.Message.getFieldWithDefault(msg, 2, ""),
nickName: jspb.Message.getFieldWithDefault(msg, 3, ""),
displayName: jspb.Message.getFieldWithDefault(msg, 4, ""),
preferredLanguage: jspb.Message.getFieldWithDefault(msg, 5, ""),
gender: jspb.Message.getFieldWithDefault(msg, 6, 0)
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
 * @return {!proto.zitadel.auth.v1.UpdateMyProfileRequest}
 */
proto.zitadel.auth.v1.UpdateMyProfileRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.auth.v1.UpdateMyProfileRequest;
  return proto.zitadel.auth.v1.UpdateMyProfileRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.auth.v1.UpdateMyProfileRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.auth.v1.UpdateMyProfileRequest}
 */
proto.zitadel.auth.v1.UpdateMyProfileRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setNickName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisplayName(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPreferredLanguage(value);
      break;
    case 6:
      var value = /** @type {!proto.zitadel.user.v1.Gender} */ (reader.readEnum());
      msg.setGender(value);
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
proto.zitadel.auth.v1.UpdateMyProfileRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.auth.v1.UpdateMyProfileRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.auth.v1.UpdateMyProfileRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.UpdateMyProfileRequest.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getNickName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDisplayName();
  if (f.length > 0) {
    writer.writeString(
      4,
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
  f = message.getGender();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
};


/**
 * optional string first_name = 1;
 * @return {string}
 */
proto.zitadel.auth.v1.UpdateMyProfileRequest.prototype.getFirstName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.auth.v1.UpdateMyProfileRequest} returns this
 */
proto.zitadel.auth.v1.UpdateMyProfileRequest.prototype.setFirstName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string last_name = 2;
 * @return {string}
 */
proto.zitadel.auth.v1.UpdateMyProfileRequest.prototype.getLastName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.auth.v1.UpdateMyProfileRequest} returns this
 */
proto.zitadel.auth.v1.UpdateMyProfileRequest.prototype.setLastName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string nick_name = 3;
 * @return {string}
 */
proto.zitadel.auth.v1.UpdateMyProfileRequest.prototype.getNickName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.auth.v1.UpdateMyProfileRequest} returns this
 */
proto.zitadel.auth.v1.UpdateMyProfileRequest.prototype.setNickName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string display_name = 4;
 * @return {string}
 */
proto.zitadel.auth.v1.UpdateMyProfileRequest.prototype.getDisplayName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.auth.v1.UpdateMyProfileRequest} returns this
 */
proto.zitadel.auth.v1.UpdateMyProfileRequest.prototype.setDisplayName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string preferred_language = 5;
 * @return {string}
 */
proto.zitadel.auth.v1.UpdateMyProfileRequest.prototype.getPreferredLanguage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.auth.v1.UpdateMyProfileRequest} returns this
 */
proto.zitadel.auth.v1.UpdateMyProfileRequest.prototype.setPreferredLanguage = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional zitadel.user.v1.Gender gender = 6;
 * @return {!proto.zitadel.user.v1.Gender}
 */
proto.zitadel.auth.v1.UpdateMyProfileRequest.prototype.getGender = function() {
  return /** @type {!proto.zitadel.user.v1.Gender} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.zitadel.user.v1.Gender} value
 * @return {!proto.zitadel.auth.v1.UpdateMyProfileRequest} returns this
 */
proto.zitadel.auth.v1.UpdateMyProfileRequest.prototype.setGender = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
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
proto.zitadel.auth.v1.UpdateMyProfileResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.auth.v1.UpdateMyProfileResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.auth.v1.UpdateMyProfileResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.UpdateMyProfileResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.auth.v1.UpdateMyProfileResponse}
 */
proto.zitadel.auth.v1.UpdateMyProfileResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.auth.v1.UpdateMyProfileResponse;
  return proto.zitadel.auth.v1.UpdateMyProfileResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.auth.v1.UpdateMyProfileResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.auth.v1.UpdateMyProfileResponse}
 */
proto.zitadel.auth.v1.UpdateMyProfileResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.auth.v1.UpdateMyProfileResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.auth.v1.UpdateMyProfileResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.auth.v1.UpdateMyProfileResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.UpdateMyProfileResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.auth.v1.UpdateMyProfileResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.v1.ObjectDetails} */ (
    jspb.Message.getWrapperField(this, zitadel_object_pb.ObjectDetails, 1));
};


/**
 * @param {?proto.zitadel.v1.ObjectDetails|undefined} value
 * @return {!proto.zitadel.auth.v1.UpdateMyProfileResponse} returns this
*/
proto.zitadel.auth.v1.UpdateMyProfileResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.auth.v1.UpdateMyProfileResponse} returns this
 */
proto.zitadel.auth.v1.UpdateMyProfileResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.auth.v1.UpdateMyProfileResponse.prototype.hasDetails = function() {
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
proto.zitadel.auth.v1.GetMyEmailRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.auth.v1.GetMyEmailRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.auth.v1.GetMyEmailRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.GetMyEmailRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.auth.v1.GetMyEmailRequest}
 */
proto.zitadel.auth.v1.GetMyEmailRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.auth.v1.GetMyEmailRequest;
  return proto.zitadel.auth.v1.GetMyEmailRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.auth.v1.GetMyEmailRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.auth.v1.GetMyEmailRequest}
 */
proto.zitadel.auth.v1.GetMyEmailRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.auth.v1.GetMyEmailRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.auth.v1.GetMyEmailRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.auth.v1.GetMyEmailRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.GetMyEmailRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.auth.v1.GetMyEmailResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.auth.v1.GetMyEmailResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.auth.v1.GetMyEmailResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.GetMyEmailResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_pb.ObjectDetails.toObject(includeInstance, f),
email: (f = msg.getEmail()) && zitadel_user_pb.Email.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.auth.v1.GetMyEmailResponse}
 */
proto.zitadel.auth.v1.GetMyEmailResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.auth.v1.GetMyEmailResponse;
  return proto.zitadel.auth.v1.GetMyEmailResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.auth.v1.GetMyEmailResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.auth.v1.GetMyEmailResponse}
 */
proto.zitadel.auth.v1.GetMyEmailResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new zitadel_user_pb.Email;
      reader.readMessage(value,zitadel_user_pb.Email.deserializeBinaryFromReader);
      msg.setEmail(value);
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
proto.zitadel.auth.v1.GetMyEmailResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.auth.v1.GetMyEmailResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.auth.v1.GetMyEmailResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.GetMyEmailResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_pb.ObjectDetails.serializeBinaryToWriter
    );
  }
  f = message.getEmail();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      zitadel_user_pb.Email.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.v1.ObjectDetails details = 1;
 * @return {?proto.zitadel.v1.ObjectDetails}
 */
proto.zitadel.auth.v1.GetMyEmailResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.v1.ObjectDetails} */ (
    jspb.Message.getWrapperField(this, zitadel_object_pb.ObjectDetails, 1));
};


/**
 * @param {?proto.zitadel.v1.ObjectDetails|undefined} value
 * @return {!proto.zitadel.auth.v1.GetMyEmailResponse} returns this
*/
proto.zitadel.auth.v1.GetMyEmailResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.auth.v1.GetMyEmailResponse} returns this
 */
proto.zitadel.auth.v1.GetMyEmailResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.auth.v1.GetMyEmailResponse.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional zitadel.user.v1.Email email = 2;
 * @return {?proto.zitadel.user.v1.Email}
 */
proto.zitadel.auth.v1.GetMyEmailResponse.prototype.getEmail = function() {
  return /** @type{?proto.zitadel.user.v1.Email} */ (
    jspb.Message.getWrapperField(this, zitadel_user_pb.Email, 2));
};


/**
 * @param {?proto.zitadel.user.v1.Email|undefined} value
 * @return {!proto.zitadel.auth.v1.GetMyEmailResponse} returns this
*/
proto.zitadel.auth.v1.GetMyEmailResponse.prototype.setEmail = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.auth.v1.GetMyEmailResponse} returns this
 */
proto.zitadel.auth.v1.GetMyEmailResponse.prototype.clearEmail = function() {
  return this.setEmail(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.auth.v1.GetMyEmailResponse.prototype.hasEmail = function() {
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
proto.zitadel.auth.v1.SetMyEmailRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.auth.v1.SetMyEmailRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.auth.v1.SetMyEmailRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.SetMyEmailRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
email: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.zitadel.auth.v1.SetMyEmailRequest}
 */
proto.zitadel.auth.v1.SetMyEmailRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.auth.v1.SetMyEmailRequest;
  return proto.zitadel.auth.v1.SetMyEmailRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.auth.v1.SetMyEmailRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.auth.v1.SetMyEmailRequest}
 */
proto.zitadel.auth.v1.SetMyEmailRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.auth.v1.SetMyEmailRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.auth.v1.SetMyEmailRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.auth.v1.SetMyEmailRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.SetMyEmailRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string email = 1;
 * @return {string}
 */
proto.zitadel.auth.v1.SetMyEmailRequest.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.auth.v1.SetMyEmailRequest} returns this
 */
proto.zitadel.auth.v1.SetMyEmailRequest.prototype.setEmail = function(value) {
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
proto.zitadel.auth.v1.SetMyEmailResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.auth.v1.SetMyEmailResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.auth.v1.SetMyEmailResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.SetMyEmailResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.auth.v1.SetMyEmailResponse}
 */
proto.zitadel.auth.v1.SetMyEmailResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.auth.v1.SetMyEmailResponse;
  return proto.zitadel.auth.v1.SetMyEmailResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.auth.v1.SetMyEmailResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.auth.v1.SetMyEmailResponse}
 */
proto.zitadel.auth.v1.SetMyEmailResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.auth.v1.SetMyEmailResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.auth.v1.SetMyEmailResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.auth.v1.SetMyEmailResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.SetMyEmailResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.auth.v1.SetMyEmailResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.v1.ObjectDetails} */ (
    jspb.Message.getWrapperField(this, zitadel_object_pb.ObjectDetails, 1));
};


/**
 * @param {?proto.zitadel.v1.ObjectDetails|undefined} value
 * @return {!proto.zitadel.auth.v1.SetMyEmailResponse} returns this
*/
proto.zitadel.auth.v1.SetMyEmailResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.auth.v1.SetMyEmailResponse} returns this
 */
proto.zitadel.auth.v1.SetMyEmailResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.auth.v1.SetMyEmailResponse.prototype.hasDetails = function() {
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
proto.zitadel.auth.v1.VerifyMyEmailRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.auth.v1.VerifyMyEmailRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.auth.v1.VerifyMyEmailRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.VerifyMyEmailRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
code: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.zitadel.auth.v1.VerifyMyEmailRequest}
 */
proto.zitadel.auth.v1.VerifyMyEmailRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.auth.v1.VerifyMyEmailRequest;
  return proto.zitadel.auth.v1.VerifyMyEmailRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.auth.v1.VerifyMyEmailRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.auth.v1.VerifyMyEmailRequest}
 */
proto.zitadel.auth.v1.VerifyMyEmailRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCode(value);
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
proto.zitadel.auth.v1.VerifyMyEmailRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.auth.v1.VerifyMyEmailRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.auth.v1.VerifyMyEmailRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.VerifyMyEmailRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string code = 1;
 * @return {string}
 */
proto.zitadel.auth.v1.VerifyMyEmailRequest.prototype.getCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.auth.v1.VerifyMyEmailRequest} returns this
 */
proto.zitadel.auth.v1.VerifyMyEmailRequest.prototype.setCode = function(value) {
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
proto.zitadel.auth.v1.VerifyMyEmailResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.auth.v1.VerifyMyEmailResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.auth.v1.VerifyMyEmailResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.VerifyMyEmailResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.auth.v1.VerifyMyEmailResponse}
 */
proto.zitadel.auth.v1.VerifyMyEmailResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.auth.v1.VerifyMyEmailResponse;
  return proto.zitadel.auth.v1.VerifyMyEmailResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.auth.v1.VerifyMyEmailResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.auth.v1.VerifyMyEmailResponse}
 */
proto.zitadel.auth.v1.VerifyMyEmailResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.auth.v1.VerifyMyEmailResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.auth.v1.VerifyMyEmailResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.auth.v1.VerifyMyEmailResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.VerifyMyEmailResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.auth.v1.VerifyMyEmailResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.v1.ObjectDetails} */ (
    jspb.Message.getWrapperField(this, zitadel_object_pb.ObjectDetails, 1));
};


/**
 * @param {?proto.zitadel.v1.ObjectDetails|undefined} value
 * @return {!proto.zitadel.auth.v1.VerifyMyEmailResponse} returns this
*/
proto.zitadel.auth.v1.VerifyMyEmailResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.auth.v1.VerifyMyEmailResponse} returns this
 */
proto.zitadel.auth.v1.VerifyMyEmailResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.auth.v1.VerifyMyEmailResponse.prototype.hasDetails = function() {
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
proto.zitadel.auth.v1.ResendMyEmailVerificationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.auth.v1.ResendMyEmailVerificationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.auth.v1.ResendMyEmailVerificationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.ResendMyEmailVerificationRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.auth.v1.ResendMyEmailVerificationRequest}
 */
proto.zitadel.auth.v1.ResendMyEmailVerificationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.auth.v1.ResendMyEmailVerificationRequest;
  return proto.zitadel.auth.v1.ResendMyEmailVerificationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.auth.v1.ResendMyEmailVerificationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.auth.v1.ResendMyEmailVerificationRequest}
 */
proto.zitadel.auth.v1.ResendMyEmailVerificationRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.auth.v1.ResendMyEmailVerificationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.auth.v1.ResendMyEmailVerificationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.auth.v1.ResendMyEmailVerificationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.ResendMyEmailVerificationRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.auth.v1.ResendMyEmailVerificationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.auth.v1.ResendMyEmailVerificationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.auth.v1.ResendMyEmailVerificationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.ResendMyEmailVerificationResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.auth.v1.ResendMyEmailVerificationResponse}
 */
proto.zitadel.auth.v1.ResendMyEmailVerificationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.auth.v1.ResendMyEmailVerificationResponse;
  return proto.zitadel.auth.v1.ResendMyEmailVerificationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.auth.v1.ResendMyEmailVerificationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.auth.v1.ResendMyEmailVerificationResponse}
 */
proto.zitadel.auth.v1.ResendMyEmailVerificationResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.auth.v1.ResendMyEmailVerificationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.auth.v1.ResendMyEmailVerificationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.auth.v1.ResendMyEmailVerificationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.ResendMyEmailVerificationResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.auth.v1.ResendMyEmailVerificationResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.v1.ObjectDetails} */ (
    jspb.Message.getWrapperField(this, zitadel_object_pb.ObjectDetails, 1));
};


/**
 * @param {?proto.zitadel.v1.ObjectDetails|undefined} value
 * @return {!proto.zitadel.auth.v1.ResendMyEmailVerificationResponse} returns this
*/
proto.zitadel.auth.v1.ResendMyEmailVerificationResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.auth.v1.ResendMyEmailVerificationResponse} returns this
 */
proto.zitadel.auth.v1.ResendMyEmailVerificationResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.auth.v1.ResendMyEmailVerificationResponse.prototype.hasDetails = function() {
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
proto.zitadel.auth.v1.GetMyPhoneRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.auth.v1.GetMyPhoneRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.auth.v1.GetMyPhoneRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.GetMyPhoneRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.auth.v1.GetMyPhoneRequest}
 */
proto.zitadel.auth.v1.GetMyPhoneRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.auth.v1.GetMyPhoneRequest;
  return proto.zitadel.auth.v1.GetMyPhoneRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.auth.v1.GetMyPhoneRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.auth.v1.GetMyPhoneRequest}
 */
proto.zitadel.auth.v1.GetMyPhoneRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.auth.v1.GetMyPhoneRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.auth.v1.GetMyPhoneRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.auth.v1.GetMyPhoneRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.GetMyPhoneRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.auth.v1.GetMyPhoneResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.auth.v1.GetMyPhoneResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.auth.v1.GetMyPhoneResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.GetMyPhoneResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_pb.ObjectDetails.toObject(includeInstance, f),
phone: (f = msg.getPhone()) && zitadel_user_pb.Phone.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.auth.v1.GetMyPhoneResponse}
 */
proto.zitadel.auth.v1.GetMyPhoneResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.auth.v1.GetMyPhoneResponse;
  return proto.zitadel.auth.v1.GetMyPhoneResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.auth.v1.GetMyPhoneResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.auth.v1.GetMyPhoneResponse}
 */
proto.zitadel.auth.v1.GetMyPhoneResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new zitadel_user_pb.Phone;
      reader.readMessage(value,zitadel_user_pb.Phone.deserializeBinaryFromReader);
      msg.setPhone(value);
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
proto.zitadel.auth.v1.GetMyPhoneResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.auth.v1.GetMyPhoneResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.auth.v1.GetMyPhoneResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.GetMyPhoneResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_pb.ObjectDetails.serializeBinaryToWriter
    );
  }
  f = message.getPhone();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      zitadel_user_pb.Phone.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.v1.ObjectDetails details = 1;
 * @return {?proto.zitadel.v1.ObjectDetails}
 */
proto.zitadel.auth.v1.GetMyPhoneResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.v1.ObjectDetails} */ (
    jspb.Message.getWrapperField(this, zitadel_object_pb.ObjectDetails, 1));
};


/**
 * @param {?proto.zitadel.v1.ObjectDetails|undefined} value
 * @return {!proto.zitadel.auth.v1.GetMyPhoneResponse} returns this
*/
proto.zitadel.auth.v1.GetMyPhoneResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.auth.v1.GetMyPhoneResponse} returns this
 */
proto.zitadel.auth.v1.GetMyPhoneResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.auth.v1.GetMyPhoneResponse.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional zitadel.user.v1.Phone phone = 2;
 * @return {?proto.zitadel.user.v1.Phone}
 */
proto.zitadel.auth.v1.GetMyPhoneResponse.prototype.getPhone = function() {
  return /** @type{?proto.zitadel.user.v1.Phone} */ (
    jspb.Message.getWrapperField(this, zitadel_user_pb.Phone, 2));
};


/**
 * @param {?proto.zitadel.user.v1.Phone|undefined} value
 * @return {!proto.zitadel.auth.v1.GetMyPhoneResponse} returns this
*/
proto.zitadel.auth.v1.GetMyPhoneResponse.prototype.setPhone = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.auth.v1.GetMyPhoneResponse} returns this
 */
proto.zitadel.auth.v1.GetMyPhoneResponse.prototype.clearPhone = function() {
  return this.setPhone(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.auth.v1.GetMyPhoneResponse.prototype.hasPhone = function() {
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
proto.zitadel.auth.v1.SetMyPhoneRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.auth.v1.SetMyPhoneRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.auth.v1.SetMyPhoneRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.SetMyPhoneRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
phone: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.zitadel.auth.v1.SetMyPhoneRequest}
 */
proto.zitadel.auth.v1.SetMyPhoneRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.auth.v1.SetMyPhoneRequest;
  return proto.zitadel.auth.v1.SetMyPhoneRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.auth.v1.SetMyPhoneRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.auth.v1.SetMyPhoneRequest}
 */
proto.zitadel.auth.v1.SetMyPhoneRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhone(value);
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
proto.zitadel.auth.v1.SetMyPhoneRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.auth.v1.SetMyPhoneRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.auth.v1.SetMyPhoneRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.SetMyPhoneRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPhone();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string phone = 1;
 * @return {string}
 */
proto.zitadel.auth.v1.SetMyPhoneRequest.prototype.getPhone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.auth.v1.SetMyPhoneRequest} returns this
 */
proto.zitadel.auth.v1.SetMyPhoneRequest.prototype.setPhone = function(value) {
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
proto.zitadel.auth.v1.SetMyPhoneResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.auth.v1.SetMyPhoneResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.auth.v1.SetMyPhoneResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.SetMyPhoneResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.auth.v1.SetMyPhoneResponse}
 */
proto.zitadel.auth.v1.SetMyPhoneResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.auth.v1.SetMyPhoneResponse;
  return proto.zitadel.auth.v1.SetMyPhoneResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.auth.v1.SetMyPhoneResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.auth.v1.SetMyPhoneResponse}
 */
proto.zitadel.auth.v1.SetMyPhoneResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.auth.v1.SetMyPhoneResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.auth.v1.SetMyPhoneResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.auth.v1.SetMyPhoneResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.SetMyPhoneResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.auth.v1.SetMyPhoneResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.v1.ObjectDetails} */ (
    jspb.Message.getWrapperField(this, zitadel_object_pb.ObjectDetails, 1));
};


/**
 * @param {?proto.zitadel.v1.ObjectDetails|undefined} value
 * @return {!proto.zitadel.auth.v1.SetMyPhoneResponse} returns this
*/
proto.zitadel.auth.v1.SetMyPhoneResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.auth.v1.SetMyPhoneResponse} returns this
 */
proto.zitadel.auth.v1.SetMyPhoneResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.auth.v1.SetMyPhoneResponse.prototype.hasDetails = function() {
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
proto.zitadel.auth.v1.VerifyMyPhoneRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.auth.v1.VerifyMyPhoneRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.auth.v1.VerifyMyPhoneRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.VerifyMyPhoneRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
code: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.zitadel.auth.v1.VerifyMyPhoneRequest}
 */
proto.zitadel.auth.v1.VerifyMyPhoneRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.auth.v1.VerifyMyPhoneRequest;
  return proto.zitadel.auth.v1.VerifyMyPhoneRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.auth.v1.VerifyMyPhoneRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.auth.v1.VerifyMyPhoneRequest}
 */
proto.zitadel.auth.v1.VerifyMyPhoneRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCode(value);
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
proto.zitadel.auth.v1.VerifyMyPhoneRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.auth.v1.VerifyMyPhoneRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.auth.v1.VerifyMyPhoneRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.VerifyMyPhoneRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string code = 1;
 * @return {string}
 */
proto.zitadel.auth.v1.VerifyMyPhoneRequest.prototype.getCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.auth.v1.VerifyMyPhoneRequest} returns this
 */
proto.zitadel.auth.v1.VerifyMyPhoneRequest.prototype.setCode = function(value) {
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
proto.zitadel.auth.v1.VerifyMyPhoneResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.auth.v1.VerifyMyPhoneResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.auth.v1.VerifyMyPhoneResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.VerifyMyPhoneResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.auth.v1.VerifyMyPhoneResponse}
 */
proto.zitadel.auth.v1.VerifyMyPhoneResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.auth.v1.VerifyMyPhoneResponse;
  return proto.zitadel.auth.v1.VerifyMyPhoneResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.auth.v1.VerifyMyPhoneResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.auth.v1.VerifyMyPhoneResponse}
 */
proto.zitadel.auth.v1.VerifyMyPhoneResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.auth.v1.VerifyMyPhoneResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.auth.v1.VerifyMyPhoneResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.auth.v1.VerifyMyPhoneResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.VerifyMyPhoneResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.auth.v1.VerifyMyPhoneResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.v1.ObjectDetails} */ (
    jspb.Message.getWrapperField(this, zitadel_object_pb.ObjectDetails, 1));
};


/**
 * @param {?proto.zitadel.v1.ObjectDetails|undefined} value
 * @return {!proto.zitadel.auth.v1.VerifyMyPhoneResponse} returns this
*/
proto.zitadel.auth.v1.VerifyMyPhoneResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.auth.v1.VerifyMyPhoneResponse} returns this
 */
proto.zitadel.auth.v1.VerifyMyPhoneResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.auth.v1.VerifyMyPhoneResponse.prototype.hasDetails = function() {
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
proto.zitadel.auth.v1.ResendMyPhoneVerificationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.auth.v1.ResendMyPhoneVerificationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.auth.v1.ResendMyPhoneVerificationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.ResendMyPhoneVerificationRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.auth.v1.ResendMyPhoneVerificationRequest}
 */
proto.zitadel.auth.v1.ResendMyPhoneVerificationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.auth.v1.ResendMyPhoneVerificationRequest;
  return proto.zitadel.auth.v1.ResendMyPhoneVerificationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.auth.v1.ResendMyPhoneVerificationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.auth.v1.ResendMyPhoneVerificationRequest}
 */
proto.zitadel.auth.v1.ResendMyPhoneVerificationRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.auth.v1.ResendMyPhoneVerificationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.auth.v1.ResendMyPhoneVerificationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.auth.v1.ResendMyPhoneVerificationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.ResendMyPhoneVerificationRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.auth.v1.ResendMyPhoneVerificationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.auth.v1.ResendMyPhoneVerificationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.auth.v1.ResendMyPhoneVerificationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.ResendMyPhoneVerificationResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.auth.v1.ResendMyPhoneVerificationResponse}
 */
proto.zitadel.auth.v1.ResendMyPhoneVerificationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.auth.v1.ResendMyPhoneVerificationResponse;
  return proto.zitadel.auth.v1.ResendMyPhoneVerificationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.auth.v1.ResendMyPhoneVerificationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.auth.v1.ResendMyPhoneVerificationResponse}
 */
proto.zitadel.auth.v1.ResendMyPhoneVerificationResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.auth.v1.ResendMyPhoneVerificationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.auth.v1.ResendMyPhoneVerificationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.auth.v1.ResendMyPhoneVerificationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.ResendMyPhoneVerificationResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.auth.v1.ResendMyPhoneVerificationResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.v1.ObjectDetails} */ (
    jspb.Message.getWrapperField(this, zitadel_object_pb.ObjectDetails, 1));
};


/**
 * @param {?proto.zitadel.v1.ObjectDetails|undefined} value
 * @return {!proto.zitadel.auth.v1.ResendMyPhoneVerificationResponse} returns this
*/
proto.zitadel.auth.v1.ResendMyPhoneVerificationResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.auth.v1.ResendMyPhoneVerificationResponse} returns this
 */
proto.zitadel.auth.v1.ResendMyPhoneVerificationResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.auth.v1.ResendMyPhoneVerificationResponse.prototype.hasDetails = function() {
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
proto.zitadel.auth.v1.RemoveMyPhoneRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.auth.v1.RemoveMyPhoneRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.auth.v1.RemoveMyPhoneRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.RemoveMyPhoneRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.auth.v1.RemoveMyPhoneRequest}
 */
proto.zitadel.auth.v1.RemoveMyPhoneRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.auth.v1.RemoveMyPhoneRequest;
  return proto.zitadel.auth.v1.RemoveMyPhoneRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.auth.v1.RemoveMyPhoneRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.auth.v1.RemoveMyPhoneRequest}
 */
proto.zitadel.auth.v1.RemoveMyPhoneRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.auth.v1.RemoveMyPhoneRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.auth.v1.RemoveMyPhoneRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.auth.v1.RemoveMyPhoneRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.RemoveMyPhoneRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.auth.v1.RemoveMyPhoneResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.auth.v1.RemoveMyPhoneResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.auth.v1.RemoveMyPhoneResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.RemoveMyPhoneResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.auth.v1.RemoveMyPhoneResponse}
 */
proto.zitadel.auth.v1.RemoveMyPhoneResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.auth.v1.RemoveMyPhoneResponse;
  return proto.zitadel.auth.v1.RemoveMyPhoneResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.auth.v1.RemoveMyPhoneResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.auth.v1.RemoveMyPhoneResponse}
 */
proto.zitadel.auth.v1.RemoveMyPhoneResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.auth.v1.RemoveMyPhoneResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.auth.v1.RemoveMyPhoneResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.auth.v1.RemoveMyPhoneResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.RemoveMyPhoneResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.auth.v1.RemoveMyPhoneResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.v1.ObjectDetails} */ (
    jspb.Message.getWrapperField(this, zitadel_object_pb.ObjectDetails, 1));
};


/**
 * @param {?proto.zitadel.v1.ObjectDetails|undefined} value
 * @return {!proto.zitadel.auth.v1.RemoveMyPhoneResponse} returns this
*/
proto.zitadel.auth.v1.RemoveMyPhoneResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.auth.v1.RemoveMyPhoneResponse} returns this
 */
proto.zitadel.auth.v1.RemoveMyPhoneResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.auth.v1.RemoveMyPhoneResponse.prototype.hasDetails = function() {
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
proto.zitadel.auth.v1.RemoveMyAvatarRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.auth.v1.RemoveMyAvatarRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.auth.v1.RemoveMyAvatarRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.RemoveMyAvatarRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.auth.v1.RemoveMyAvatarRequest}
 */
proto.zitadel.auth.v1.RemoveMyAvatarRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.auth.v1.RemoveMyAvatarRequest;
  return proto.zitadel.auth.v1.RemoveMyAvatarRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.auth.v1.RemoveMyAvatarRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.auth.v1.RemoveMyAvatarRequest}
 */
proto.zitadel.auth.v1.RemoveMyAvatarRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.auth.v1.RemoveMyAvatarRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.auth.v1.RemoveMyAvatarRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.auth.v1.RemoveMyAvatarRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.RemoveMyAvatarRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.auth.v1.RemoveMyAvatarResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.auth.v1.RemoveMyAvatarResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.auth.v1.RemoveMyAvatarResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.RemoveMyAvatarResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.auth.v1.RemoveMyAvatarResponse}
 */
proto.zitadel.auth.v1.RemoveMyAvatarResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.auth.v1.RemoveMyAvatarResponse;
  return proto.zitadel.auth.v1.RemoveMyAvatarResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.auth.v1.RemoveMyAvatarResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.auth.v1.RemoveMyAvatarResponse}
 */
proto.zitadel.auth.v1.RemoveMyAvatarResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.auth.v1.RemoveMyAvatarResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.auth.v1.RemoveMyAvatarResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.auth.v1.RemoveMyAvatarResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.RemoveMyAvatarResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.auth.v1.RemoveMyAvatarResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.v1.ObjectDetails} */ (
    jspb.Message.getWrapperField(this, zitadel_object_pb.ObjectDetails, 1));
};


/**
 * @param {?proto.zitadel.v1.ObjectDetails|undefined} value
 * @return {!proto.zitadel.auth.v1.RemoveMyAvatarResponse} returns this
*/
proto.zitadel.auth.v1.RemoveMyAvatarResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.auth.v1.RemoveMyAvatarResponse} returns this
 */
proto.zitadel.auth.v1.RemoveMyAvatarResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.auth.v1.RemoveMyAvatarResponse.prototype.hasDetails = function() {
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
proto.zitadel.auth.v1.ListMyLinkedIDPsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.auth.v1.ListMyLinkedIDPsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.auth.v1.ListMyLinkedIDPsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.ListMyLinkedIDPsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
query: (f = msg.getQuery()) && zitadel_object_pb.ListQuery.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.auth.v1.ListMyLinkedIDPsRequest}
 */
proto.zitadel.auth.v1.ListMyLinkedIDPsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.auth.v1.ListMyLinkedIDPsRequest;
  return proto.zitadel.auth.v1.ListMyLinkedIDPsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.auth.v1.ListMyLinkedIDPsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.auth.v1.ListMyLinkedIDPsRequest}
 */
proto.zitadel.auth.v1.ListMyLinkedIDPsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.auth.v1.ListMyLinkedIDPsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.auth.v1.ListMyLinkedIDPsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.auth.v1.ListMyLinkedIDPsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.ListMyLinkedIDPsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQuery();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_pb.ListQuery.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.v1.ListQuery query = 1;
 * @return {?proto.zitadel.v1.ListQuery}
 */
proto.zitadel.auth.v1.ListMyLinkedIDPsRequest.prototype.getQuery = function() {
  return /** @type{?proto.zitadel.v1.ListQuery} */ (
    jspb.Message.getWrapperField(this, zitadel_object_pb.ListQuery, 1));
};


/**
 * @param {?proto.zitadel.v1.ListQuery|undefined} value
 * @return {!proto.zitadel.auth.v1.ListMyLinkedIDPsRequest} returns this
*/
proto.zitadel.auth.v1.ListMyLinkedIDPsRequest.prototype.setQuery = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.auth.v1.ListMyLinkedIDPsRequest} returns this
 */
proto.zitadel.auth.v1.ListMyLinkedIDPsRequest.prototype.clearQuery = function() {
  return this.setQuery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.auth.v1.ListMyLinkedIDPsRequest.prototype.hasQuery = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.auth.v1.ListMyLinkedIDPsResponse.repeatedFields_ = [2];



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
proto.zitadel.auth.v1.ListMyLinkedIDPsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.auth.v1.ListMyLinkedIDPsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.auth.v1.ListMyLinkedIDPsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.ListMyLinkedIDPsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_pb.ListDetails.toObject(includeInstance, f),
resultList: jspb.Message.toObjectList(msg.getResultList(),
    zitadel_idp_pb.IDPUserLink.toObject, includeInstance)
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
 * @return {!proto.zitadel.auth.v1.ListMyLinkedIDPsResponse}
 */
proto.zitadel.auth.v1.ListMyLinkedIDPsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.auth.v1.ListMyLinkedIDPsResponse;
  return proto.zitadel.auth.v1.ListMyLinkedIDPsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.auth.v1.ListMyLinkedIDPsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.auth.v1.ListMyLinkedIDPsResponse}
 */
proto.zitadel.auth.v1.ListMyLinkedIDPsResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new zitadel_idp_pb.IDPUserLink;
      reader.readMessage(value,zitadel_idp_pb.IDPUserLink.deserializeBinaryFromReader);
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
proto.zitadel.auth.v1.ListMyLinkedIDPsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.auth.v1.ListMyLinkedIDPsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.auth.v1.ListMyLinkedIDPsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.ListMyLinkedIDPsResponse.serializeBinaryToWriter = function(message, writer) {
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
      zitadel_idp_pb.IDPUserLink.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.v1.ListDetails details = 1;
 * @return {?proto.zitadel.v1.ListDetails}
 */
proto.zitadel.auth.v1.ListMyLinkedIDPsResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.v1.ListDetails} */ (
    jspb.Message.getWrapperField(this, zitadel_object_pb.ListDetails, 1));
};


/**
 * @param {?proto.zitadel.v1.ListDetails|undefined} value
 * @return {!proto.zitadel.auth.v1.ListMyLinkedIDPsResponse} returns this
*/
proto.zitadel.auth.v1.ListMyLinkedIDPsResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.auth.v1.ListMyLinkedIDPsResponse} returns this
 */
proto.zitadel.auth.v1.ListMyLinkedIDPsResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.auth.v1.ListMyLinkedIDPsResponse.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated zitadel.idp.v1.IDPUserLink result = 2;
 * @return {!Array<!proto.zitadel.idp.v1.IDPUserLink>}
 */
proto.zitadel.auth.v1.ListMyLinkedIDPsResponse.prototype.getResultList = function() {
  return /** @type{!Array<!proto.zitadel.idp.v1.IDPUserLink>} */ (
    jspb.Message.getRepeatedWrapperField(this, zitadel_idp_pb.IDPUserLink, 2));
};


/**
 * @param {!Array<!proto.zitadel.idp.v1.IDPUserLink>} value
 * @return {!proto.zitadel.auth.v1.ListMyLinkedIDPsResponse} returns this
*/
proto.zitadel.auth.v1.ListMyLinkedIDPsResponse.prototype.setResultList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.zitadel.idp.v1.IDPUserLink=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zitadel.idp.v1.IDPUserLink}
 */
proto.zitadel.auth.v1.ListMyLinkedIDPsResponse.prototype.addResult = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.zitadel.idp.v1.IDPUserLink, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.auth.v1.ListMyLinkedIDPsResponse} returns this
 */
proto.zitadel.auth.v1.ListMyLinkedIDPsResponse.prototype.clearResultList = function() {
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
proto.zitadel.auth.v1.RemoveMyLinkedIDPRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.auth.v1.RemoveMyLinkedIDPRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.auth.v1.RemoveMyLinkedIDPRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.RemoveMyLinkedIDPRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
idpId: jspb.Message.getFieldWithDefault(msg, 1, ""),
linkedUserId: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.zitadel.auth.v1.RemoveMyLinkedIDPRequest}
 */
proto.zitadel.auth.v1.RemoveMyLinkedIDPRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.auth.v1.RemoveMyLinkedIDPRequest;
  return proto.zitadel.auth.v1.RemoveMyLinkedIDPRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.auth.v1.RemoveMyLinkedIDPRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.auth.v1.RemoveMyLinkedIDPRequest}
 */
proto.zitadel.auth.v1.RemoveMyLinkedIDPRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setIdpId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setLinkedUserId(value);
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
proto.zitadel.auth.v1.RemoveMyLinkedIDPRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.auth.v1.RemoveMyLinkedIDPRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.auth.v1.RemoveMyLinkedIDPRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.RemoveMyLinkedIDPRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIdpId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLinkedUserId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string idp_id = 1;
 * @return {string}
 */
proto.zitadel.auth.v1.RemoveMyLinkedIDPRequest.prototype.getIdpId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.auth.v1.RemoveMyLinkedIDPRequest} returns this
 */
proto.zitadel.auth.v1.RemoveMyLinkedIDPRequest.prototype.setIdpId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string linked_user_id = 2;
 * @return {string}
 */
proto.zitadel.auth.v1.RemoveMyLinkedIDPRequest.prototype.getLinkedUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.auth.v1.RemoveMyLinkedIDPRequest} returns this
 */
proto.zitadel.auth.v1.RemoveMyLinkedIDPRequest.prototype.setLinkedUserId = function(value) {
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
proto.zitadel.auth.v1.RemoveMyLinkedIDPResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.auth.v1.RemoveMyLinkedIDPResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.auth.v1.RemoveMyLinkedIDPResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.RemoveMyLinkedIDPResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.auth.v1.RemoveMyLinkedIDPResponse}
 */
proto.zitadel.auth.v1.RemoveMyLinkedIDPResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.auth.v1.RemoveMyLinkedIDPResponse;
  return proto.zitadel.auth.v1.RemoveMyLinkedIDPResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.auth.v1.RemoveMyLinkedIDPResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.auth.v1.RemoveMyLinkedIDPResponse}
 */
proto.zitadel.auth.v1.RemoveMyLinkedIDPResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.auth.v1.RemoveMyLinkedIDPResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.auth.v1.RemoveMyLinkedIDPResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.auth.v1.RemoveMyLinkedIDPResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.RemoveMyLinkedIDPResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.auth.v1.RemoveMyLinkedIDPResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.v1.ObjectDetails} */ (
    jspb.Message.getWrapperField(this, zitadel_object_pb.ObjectDetails, 1));
};


/**
 * @param {?proto.zitadel.v1.ObjectDetails|undefined} value
 * @return {!proto.zitadel.auth.v1.RemoveMyLinkedIDPResponse} returns this
*/
proto.zitadel.auth.v1.RemoveMyLinkedIDPResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.auth.v1.RemoveMyLinkedIDPResponse} returns this
 */
proto.zitadel.auth.v1.RemoveMyLinkedIDPResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.auth.v1.RemoveMyLinkedIDPResponse.prototype.hasDetails = function() {
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
proto.zitadel.auth.v1.ListMyAuthFactorsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.auth.v1.ListMyAuthFactorsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.auth.v1.ListMyAuthFactorsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.ListMyAuthFactorsRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.auth.v1.ListMyAuthFactorsRequest}
 */
proto.zitadel.auth.v1.ListMyAuthFactorsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.auth.v1.ListMyAuthFactorsRequest;
  return proto.zitadel.auth.v1.ListMyAuthFactorsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.auth.v1.ListMyAuthFactorsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.auth.v1.ListMyAuthFactorsRequest}
 */
proto.zitadel.auth.v1.ListMyAuthFactorsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.auth.v1.ListMyAuthFactorsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.auth.v1.ListMyAuthFactorsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.auth.v1.ListMyAuthFactorsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.ListMyAuthFactorsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.auth.v1.ListMyAuthFactorsResponse.repeatedFields_ = [1];



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
proto.zitadel.auth.v1.ListMyAuthFactorsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.auth.v1.ListMyAuthFactorsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.auth.v1.ListMyAuthFactorsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.ListMyAuthFactorsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
resultList: jspb.Message.toObjectList(msg.getResultList(),
    zitadel_user_pb.AuthFactor.toObject, includeInstance)
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
 * @return {!proto.zitadel.auth.v1.ListMyAuthFactorsResponse}
 */
proto.zitadel.auth.v1.ListMyAuthFactorsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.auth.v1.ListMyAuthFactorsResponse;
  return proto.zitadel.auth.v1.ListMyAuthFactorsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.auth.v1.ListMyAuthFactorsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.auth.v1.ListMyAuthFactorsResponse}
 */
proto.zitadel.auth.v1.ListMyAuthFactorsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_user_pb.AuthFactor;
      reader.readMessage(value,zitadel_user_pb.AuthFactor.deserializeBinaryFromReader);
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
proto.zitadel.auth.v1.ListMyAuthFactorsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.auth.v1.ListMyAuthFactorsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.auth.v1.ListMyAuthFactorsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.ListMyAuthFactorsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResultList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      zitadel_user_pb.AuthFactor.serializeBinaryToWriter
    );
  }
};


/**
 * repeated zitadel.user.v1.AuthFactor result = 1;
 * @return {!Array<!proto.zitadel.user.v1.AuthFactor>}
 */
proto.zitadel.auth.v1.ListMyAuthFactorsResponse.prototype.getResultList = function() {
  return /** @type{!Array<!proto.zitadel.user.v1.AuthFactor>} */ (
    jspb.Message.getRepeatedWrapperField(this, zitadel_user_pb.AuthFactor, 1));
};


/**
 * @param {!Array<!proto.zitadel.user.v1.AuthFactor>} value
 * @return {!proto.zitadel.auth.v1.ListMyAuthFactorsResponse} returns this
*/
proto.zitadel.auth.v1.ListMyAuthFactorsResponse.prototype.setResultList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.zitadel.user.v1.AuthFactor=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zitadel.user.v1.AuthFactor}
 */
proto.zitadel.auth.v1.ListMyAuthFactorsResponse.prototype.addResult = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.zitadel.user.v1.AuthFactor, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.auth.v1.ListMyAuthFactorsResponse} returns this
 */
proto.zitadel.auth.v1.ListMyAuthFactorsResponse.prototype.clearResultList = function() {
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
proto.zitadel.auth.v1.AddMyAuthFactorU2FRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.auth.v1.AddMyAuthFactorU2FRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.auth.v1.AddMyAuthFactorU2FRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.AddMyAuthFactorU2FRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.auth.v1.AddMyAuthFactorU2FRequest}
 */
proto.zitadel.auth.v1.AddMyAuthFactorU2FRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.auth.v1.AddMyAuthFactorU2FRequest;
  return proto.zitadel.auth.v1.AddMyAuthFactorU2FRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.auth.v1.AddMyAuthFactorU2FRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.auth.v1.AddMyAuthFactorU2FRequest}
 */
proto.zitadel.auth.v1.AddMyAuthFactorU2FRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.auth.v1.AddMyAuthFactorU2FRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.auth.v1.AddMyAuthFactorU2FRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.auth.v1.AddMyAuthFactorU2FRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.AddMyAuthFactorU2FRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.auth.v1.AddMyAuthFactorU2FResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.auth.v1.AddMyAuthFactorU2FResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.auth.v1.AddMyAuthFactorU2FResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.AddMyAuthFactorU2FResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
key: (f = msg.getKey()) && zitadel_user_pb.WebAuthNKey.toObject(includeInstance, f),
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
 * @return {!proto.zitadel.auth.v1.AddMyAuthFactorU2FResponse}
 */
proto.zitadel.auth.v1.AddMyAuthFactorU2FResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.auth.v1.AddMyAuthFactorU2FResponse;
  return proto.zitadel.auth.v1.AddMyAuthFactorU2FResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.auth.v1.AddMyAuthFactorU2FResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.auth.v1.AddMyAuthFactorU2FResponse}
 */
proto.zitadel.auth.v1.AddMyAuthFactorU2FResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_user_pb.WebAuthNKey;
      reader.readMessage(value,zitadel_user_pb.WebAuthNKey.deserializeBinaryFromReader);
      msg.setKey(value);
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
proto.zitadel.auth.v1.AddMyAuthFactorU2FResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.auth.v1.AddMyAuthFactorU2FResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.auth.v1.AddMyAuthFactorU2FResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.AddMyAuthFactorU2FResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_user_pb.WebAuthNKey.serializeBinaryToWriter
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
 * optional zitadel.user.v1.WebAuthNKey key = 1;
 * @return {?proto.zitadel.user.v1.WebAuthNKey}
 */
proto.zitadel.auth.v1.AddMyAuthFactorU2FResponse.prototype.getKey = function() {
  return /** @type{?proto.zitadel.user.v1.WebAuthNKey} */ (
    jspb.Message.getWrapperField(this, zitadel_user_pb.WebAuthNKey, 1));
};


/**
 * @param {?proto.zitadel.user.v1.WebAuthNKey|undefined} value
 * @return {!proto.zitadel.auth.v1.AddMyAuthFactorU2FResponse} returns this
*/
proto.zitadel.auth.v1.AddMyAuthFactorU2FResponse.prototype.setKey = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.auth.v1.AddMyAuthFactorU2FResponse} returns this
 */
proto.zitadel.auth.v1.AddMyAuthFactorU2FResponse.prototype.clearKey = function() {
  return this.setKey(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.auth.v1.AddMyAuthFactorU2FResponse.prototype.hasKey = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional zitadel.v1.ObjectDetails details = 2;
 * @return {?proto.zitadel.v1.ObjectDetails}
 */
proto.zitadel.auth.v1.AddMyAuthFactorU2FResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.v1.ObjectDetails} */ (
    jspb.Message.getWrapperField(this, zitadel_object_pb.ObjectDetails, 2));
};


/**
 * @param {?proto.zitadel.v1.ObjectDetails|undefined} value
 * @return {!proto.zitadel.auth.v1.AddMyAuthFactorU2FResponse} returns this
*/
proto.zitadel.auth.v1.AddMyAuthFactorU2FResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.auth.v1.AddMyAuthFactorU2FResponse} returns this
 */
proto.zitadel.auth.v1.AddMyAuthFactorU2FResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.auth.v1.AddMyAuthFactorU2FResponse.prototype.hasDetails = function() {
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
proto.zitadel.auth.v1.AddMyAuthFactorOTPRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.auth.v1.AddMyAuthFactorOTPRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.auth.v1.AddMyAuthFactorOTPRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.AddMyAuthFactorOTPRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.auth.v1.AddMyAuthFactorOTPRequest}
 */
proto.zitadel.auth.v1.AddMyAuthFactorOTPRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.auth.v1.AddMyAuthFactorOTPRequest;
  return proto.zitadel.auth.v1.AddMyAuthFactorOTPRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.auth.v1.AddMyAuthFactorOTPRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.auth.v1.AddMyAuthFactorOTPRequest}
 */
proto.zitadel.auth.v1.AddMyAuthFactorOTPRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.auth.v1.AddMyAuthFactorOTPRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.auth.v1.AddMyAuthFactorOTPRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.auth.v1.AddMyAuthFactorOTPRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.AddMyAuthFactorOTPRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.auth.v1.AddMyAuthFactorOTPResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.auth.v1.AddMyAuthFactorOTPResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.auth.v1.AddMyAuthFactorOTPResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.AddMyAuthFactorOTPResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
url: jspb.Message.getFieldWithDefault(msg, 1, ""),
secret: jspb.Message.getFieldWithDefault(msg, 2, ""),
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
 * @return {!proto.zitadel.auth.v1.AddMyAuthFactorOTPResponse}
 */
proto.zitadel.auth.v1.AddMyAuthFactorOTPResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.auth.v1.AddMyAuthFactorOTPResponse;
  return proto.zitadel.auth.v1.AddMyAuthFactorOTPResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.auth.v1.AddMyAuthFactorOTPResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.auth.v1.AddMyAuthFactorOTPResponse}
 */
proto.zitadel.auth.v1.AddMyAuthFactorOTPResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSecret(value);
      break;
    case 3:
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
proto.zitadel.auth.v1.AddMyAuthFactorOTPResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.auth.v1.AddMyAuthFactorOTPResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.auth.v1.AddMyAuthFactorOTPResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.AddMyAuthFactorOTPResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSecret();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      zitadel_object_pb.ObjectDetails.serializeBinaryToWriter
    );
  }
};


/**
 * optional string url = 1;
 * @return {string}
 */
proto.zitadel.auth.v1.AddMyAuthFactorOTPResponse.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.auth.v1.AddMyAuthFactorOTPResponse} returns this
 */
proto.zitadel.auth.v1.AddMyAuthFactorOTPResponse.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string secret = 2;
 * @return {string}
 */
proto.zitadel.auth.v1.AddMyAuthFactorOTPResponse.prototype.getSecret = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.auth.v1.AddMyAuthFactorOTPResponse} returns this
 */
proto.zitadel.auth.v1.AddMyAuthFactorOTPResponse.prototype.setSecret = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional zitadel.v1.ObjectDetails details = 3;
 * @return {?proto.zitadel.v1.ObjectDetails}
 */
proto.zitadel.auth.v1.AddMyAuthFactorOTPResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.v1.ObjectDetails} */ (
    jspb.Message.getWrapperField(this, zitadel_object_pb.ObjectDetails, 3));
};


/**
 * @param {?proto.zitadel.v1.ObjectDetails|undefined} value
 * @return {!proto.zitadel.auth.v1.AddMyAuthFactorOTPResponse} returns this
*/
proto.zitadel.auth.v1.AddMyAuthFactorOTPResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.auth.v1.AddMyAuthFactorOTPResponse} returns this
 */
proto.zitadel.auth.v1.AddMyAuthFactorOTPResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.auth.v1.AddMyAuthFactorOTPResponse.prototype.hasDetails = function() {
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
proto.zitadel.auth.v1.VerifyMyAuthFactorOTPRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.auth.v1.VerifyMyAuthFactorOTPRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.auth.v1.VerifyMyAuthFactorOTPRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.VerifyMyAuthFactorOTPRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
code: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.zitadel.auth.v1.VerifyMyAuthFactorOTPRequest}
 */
proto.zitadel.auth.v1.VerifyMyAuthFactorOTPRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.auth.v1.VerifyMyAuthFactorOTPRequest;
  return proto.zitadel.auth.v1.VerifyMyAuthFactorOTPRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.auth.v1.VerifyMyAuthFactorOTPRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.auth.v1.VerifyMyAuthFactorOTPRequest}
 */
proto.zitadel.auth.v1.VerifyMyAuthFactorOTPRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCode(value);
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
proto.zitadel.auth.v1.VerifyMyAuthFactorOTPRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.auth.v1.VerifyMyAuthFactorOTPRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.auth.v1.VerifyMyAuthFactorOTPRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.VerifyMyAuthFactorOTPRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string code = 1;
 * @return {string}
 */
proto.zitadel.auth.v1.VerifyMyAuthFactorOTPRequest.prototype.getCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.auth.v1.VerifyMyAuthFactorOTPRequest} returns this
 */
proto.zitadel.auth.v1.VerifyMyAuthFactorOTPRequest.prototype.setCode = function(value) {
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
proto.zitadel.auth.v1.VerifyMyAuthFactorOTPResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.auth.v1.VerifyMyAuthFactorOTPResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.auth.v1.VerifyMyAuthFactorOTPResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.VerifyMyAuthFactorOTPResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.auth.v1.VerifyMyAuthFactorOTPResponse}
 */
proto.zitadel.auth.v1.VerifyMyAuthFactorOTPResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.auth.v1.VerifyMyAuthFactorOTPResponse;
  return proto.zitadel.auth.v1.VerifyMyAuthFactorOTPResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.auth.v1.VerifyMyAuthFactorOTPResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.auth.v1.VerifyMyAuthFactorOTPResponse}
 */
proto.zitadel.auth.v1.VerifyMyAuthFactorOTPResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.auth.v1.VerifyMyAuthFactorOTPResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.auth.v1.VerifyMyAuthFactorOTPResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.auth.v1.VerifyMyAuthFactorOTPResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.VerifyMyAuthFactorOTPResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.auth.v1.VerifyMyAuthFactorOTPResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.v1.ObjectDetails} */ (
    jspb.Message.getWrapperField(this, zitadel_object_pb.ObjectDetails, 1));
};


/**
 * @param {?proto.zitadel.v1.ObjectDetails|undefined} value
 * @return {!proto.zitadel.auth.v1.VerifyMyAuthFactorOTPResponse} returns this
*/
proto.zitadel.auth.v1.VerifyMyAuthFactorOTPResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.auth.v1.VerifyMyAuthFactorOTPResponse} returns this
 */
proto.zitadel.auth.v1.VerifyMyAuthFactorOTPResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.auth.v1.VerifyMyAuthFactorOTPResponse.prototype.hasDetails = function() {
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
proto.zitadel.auth.v1.VerifyMyAuthFactorU2FRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.auth.v1.VerifyMyAuthFactorU2FRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.auth.v1.VerifyMyAuthFactorU2FRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.VerifyMyAuthFactorU2FRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
verification: (f = msg.getVerification()) && zitadel_user_pb.WebAuthNVerification.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.auth.v1.VerifyMyAuthFactorU2FRequest}
 */
proto.zitadel.auth.v1.VerifyMyAuthFactorU2FRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.auth.v1.VerifyMyAuthFactorU2FRequest;
  return proto.zitadel.auth.v1.VerifyMyAuthFactorU2FRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.auth.v1.VerifyMyAuthFactorU2FRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.auth.v1.VerifyMyAuthFactorU2FRequest}
 */
proto.zitadel.auth.v1.VerifyMyAuthFactorU2FRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_user_pb.WebAuthNVerification;
      reader.readMessage(value,zitadel_user_pb.WebAuthNVerification.deserializeBinaryFromReader);
      msg.setVerification(value);
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
proto.zitadel.auth.v1.VerifyMyAuthFactorU2FRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.auth.v1.VerifyMyAuthFactorU2FRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.auth.v1.VerifyMyAuthFactorU2FRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.VerifyMyAuthFactorU2FRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVerification();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_user_pb.WebAuthNVerification.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.user.v1.WebAuthNVerification verification = 1;
 * @return {?proto.zitadel.user.v1.WebAuthNVerification}
 */
proto.zitadel.auth.v1.VerifyMyAuthFactorU2FRequest.prototype.getVerification = function() {
  return /** @type{?proto.zitadel.user.v1.WebAuthNVerification} */ (
    jspb.Message.getWrapperField(this, zitadel_user_pb.WebAuthNVerification, 1));
};


/**
 * @param {?proto.zitadel.user.v1.WebAuthNVerification|undefined} value
 * @return {!proto.zitadel.auth.v1.VerifyMyAuthFactorU2FRequest} returns this
*/
proto.zitadel.auth.v1.VerifyMyAuthFactorU2FRequest.prototype.setVerification = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.auth.v1.VerifyMyAuthFactorU2FRequest} returns this
 */
proto.zitadel.auth.v1.VerifyMyAuthFactorU2FRequest.prototype.clearVerification = function() {
  return this.setVerification(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.auth.v1.VerifyMyAuthFactorU2FRequest.prototype.hasVerification = function() {
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
proto.zitadel.auth.v1.VerifyMyAuthFactorU2FResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.auth.v1.VerifyMyAuthFactorU2FResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.auth.v1.VerifyMyAuthFactorU2FResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.VerifyMyAuthFactorU2FResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.auth.v1.VerifyMyAuthFactorU2FResponse}
 */
proto.zitadel.auth.v1.VerifyMyAuthFactorU2FResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.auth.v1.VerifyMyAuthFactorU2FResponse;
  return proto.zitadel.auth.v1.VerifyMyAuthFactorU2FResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.auth.v1.VerifyMyAuthFactorU2FResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.auth.v1.VerifyMyAuthFactorU2FResponse}
 */
proto.zitadel.auth.v1.VerifyMyAuthFactorU2FResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.auth.v1.VerifyMyAuthFactorU2FResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.auth.v1.VerifyMyAuthFactorU2FResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.auth.v1.VerifyMyAuthFactorU2FResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.VerifyMyAuthFactorU2FResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.auth.v1.VerifyMyAuthFactorU2FResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.v1.ObjectDetails} */ (
    jspb.Message.getWrapperField(this, zitadel_object_pb.ObjectDetails, 1));
};


/**
 * @param {?proto.zitadel.v1.ObjectDetails|undefined} value
 * @return {!proto.zitadel.auth.v1.VerifyMyAuthFactorU2FResponse} returns this
*/
proto.zitadel.auth.v1.VerifyMyAuthFactorU2FResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.auth.v1.VerifyMyAuthFactorU2FResponse} returns this
 */
proto.zitadel.auth.v1.VerifyMyAuthFactorU2FResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.auth.v1.VerifyMyAuthFactorU2FResponse.prototype.hasDetails = function() {
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
proto.zitadel.auth.v1.RemoveMyAuthFactorOTPRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.auth.v1.RemoveMyAuthFactorOTPRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.auth.v1.RemoveMyAuthFactorOTPRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.RemoveMyAuthFactorOTPRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.auth.v1.RemoveMyAuthFactorOTPRequest}
 */
proto.zitadel.auth.v1.RemoveMyAuthFactorOTPRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.auth.v1.RemoveMyAuthFactorOTPRequest;
  return proto.zitadel.auth.v1.RemoveMyAuthFactorOTPRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.auth.v1.RemoveMyAuthFactorOTPRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.auth.v1.RemoveMyAuthFactorOTPRequest}
 */
proto.zitadel.auth.v1.RemoveMyAuthFactorOTPRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.auth.v1.RemoveMyAuthFactorOTPRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.auth.v1.RemoveMyAuthFactorOTPRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.auth.v1.RemoveMyAuthFactorOTPRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.RemoveMyAuthFactorOTPRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.auth.v1.RemoveMyAuthFactorOTPResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.auth.v1.RemoveMyAuthFactorOTPResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.auth.v1.RemoveMyAuthFactorOTPResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.RemoveMyAuthFactorOTPResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.auth.v1.RemoveMyAuthFactorOTPResponse}
 */
proto.zitadel.auth.v1.RemoveMyAuthFactorOTPResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.auth.v1.RemoveMyAuthFactorOTPResponse;
  return proto.zitadel.auth.v1.RemoveMyAuthFactorOTPResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.auth.v1.RemoveMyAuthFactorOTPResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.auth.v1.RemoveMyAuthFactorOTPResponse}
 */
proto.zitadel.auth.v1.RemoveMyAuthFactorOTPResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.auth.v1.RemoveMyAuthFactorOTPResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.auth.v1.RemoveMyAuthFactorOTPResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.auth.v1.RemoveMyAuthFactorOTPResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.RemoveMyAuthFactorOTPResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.auth.v1.RemoveMyAuthFactorOTPResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.v1.ObjectDetails} */ (
    jspb.Message.getWrapperField(this, zitadel_object_pb.ObjectDetails, 1));
};


/**
 * @param {?proto.zitadel.v1.ObjectDetails|undefined} value
 * @return {!proto.zitadel.auth.v1.RemoveMyAuthFactorOTPResponse} returns this
*/
proto.zitadel.auth.v1.RemoveMyAuthFactorOTPResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.auth.v1.RemoveMyAuthFactorOTPResponse} returns this
 */
proto.zitadel.auth.v1.RemoveMyAuthFactorOTPResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.auth.v1.RemoveMyAuthFactorOTPResponse.prototype.hasDetails = function() {
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
proto.zitadel.auth.v1.AddMyAuthFactorOTPSMSRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.auth.v1.AddMyAuthFactorOTPSMSRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.auth.v1.AddMyAuthFactorOTPSMSRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.AddMyAuthFactorOTPSMSRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.auth.v1.AddMyAuthFactorOTPSMSRequest}
 */
proto.zitadel.auth.v1.AddMyAuthFactorOTPSMSRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.auth.v1.AddMyAuthFactorOTPSMSRequest;
  return proto.zitadel.auth.v1.AddMyAuthFactorOTPSMSRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.auth.v1.AddMyAuthFactorOTPSMSRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.auth.v1.AddMyAuthFactorOTPSMSRequest}
 */
proto.zitadel.auth.v1.AddMyAuthFactorOTPSMSRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.auth.v1.AddMyAuthFactorOTPSMSRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.auth.v1.AddMyAuthFactorOTPSMSRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.auth.v1.AddMyAuthFactorOTPSMSRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.AddMyAuthFactorOTPSMSRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.auth.v1.AddMyAuthFactorOTPSMSResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.auth.v1.AddMyAuthFactorOTPSMSResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.auth.v1.AddMyAuthFactorOTPSMSResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.AddMyAuthFactorOTPSMSResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.auth.v1.AddMyAuthFactorOTPSMSResponse}
 */
proto.zitadel.auth.v1.AddMyAuthFactorOTPSMSResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.auth.v1.AddMyAuthFactorOTPSMSResponse;
  return proto.zitadel.auth.v1.AddMyAuthFactorOTPSMSResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.auth.v1.AddMyAuthFactorOTPSMSResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.auth.v1.AddMyAuthFactorOTPSMSResponse}
 */
proto.zitadel.auth.v1.AddMyAuthFactorOTPSMSResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.auth.v1.AddMyAuthFactorOTPSMSResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.auth.v1.AddMyAuthFactorOTPSMSResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.auth.v1.AddMyAuthFactorOTPSMSResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.AddMyAuthFactorOTPSMSResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.auth.v1.AddMyAuthFactorOTPSMSResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.v1.ObjectDetails} */ (
    jspb.Message.getWrapperField(this, zitadel_object_pb.ObjectDetails, 1));
};


/**
 * @param {?proto.zitadel.v1.ObjectDetails|undefined} value
 * @return {!proto.zitadel.auth.v1.AddMyAuthFactorOTPSMSResponse} returns this
*/
proto.zitadel.auth.v1.AddMyAuthFactorOTPSMSResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.auth.v1.AddMyAuthFactorOTPSMSResponse} returns this
 */
proto.zitadel.auth.v1.AddMyAuthFactorOTPSMSResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.auth.v1.AddMyAuthFactorOTPSMSResponse.prototype.hasDetails = function() {
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
proto.zitadel.auth.v1.RemoveMyAuthFactorOTPSMSRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.auth.v1.RemoveMyAuthFactorOTPSMSRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.auth.v1.RemoveMyAuthFactorOTPSMSRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.RemoveMyAuthFactorOTPSMSRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.auth.v1.RemoveMyAuthFactorOTPSMSRequest}
 */
proto.zitadel.auth.v1.RemoveMyAuthFactorOTPSMSRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.auth.v1.RemoveMyAuthFactorOTPSMSRequest;
  return proto.zitadel.auth.v1.RemoveMyAuthFactorOTPSMSRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.auth.v1.RemoveMyAuthFactorOTPSMSRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.auth.v1.RemoveMyAuthFactorOTPSMSRequest}
 */
proto.zitadel.auth.v1.RemoveMyAuthFactorOTPSMSRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.auth.v1.RemoveMyAuthFactorOTPSMSRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.auth.v1.RemoveMyAuthFactorOTPSMSRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.auth.v1.RemoveMyAuthFactorOTPSMSRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.RemoveMyAuthFactorOTPSMSRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.auth.v1.RemoveMyAuthFactorOTPSMSResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.auth.v1.RemoveMyAuthFactorOTPSMSResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.auth.v1.RemoveMyAuthFactorOTPSMSResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.RemoveMyAuthFactorOTPSMSResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.auth.v1.RemoveMyAuthFactorOTPSMSResponse}
 */
proto.zitadel.auth.v1.RemoveMyAuthFactorOTPSMSResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.auth.v1.RemoveMyAuthFactorOTPSMSResponse;
  return proto.zitadel.auth.v1.RemoveMyAuthFactorOTPSMSResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.auth.v1.RemoveMyAuthFactorOTPSMSResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.auth.v1.RemoveMyAuthFactorOTPSMSResponse}
 */
proto.zitadel.auth.v1.RemoveMyAuthFactorOTPSMSResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.auth.v1.RemoveMyAuthFactorOTPSMSResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.auth.v1.RemoveMyAuthFactorOTPSMSResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.auth.v1.RemoveMyAuthFactorOTPSMSResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.RemoveMyAuthFactorOTPSMSResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.auth.v1.RemoveMyAuthFactorOTPSMSResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.v1.ObjectDetails} */ (
    jspb.Message.getWrapperField(this, zitadel_object_pb.ObjectDetails, 1));
};


/**
 * @param {?proto.zitadel.v1.ObjectDetails|undefined} value
 * @return {!proto.zitadel.auth.v1.RemoveMyAuthFactorOTPSMSResponse} returns this
*/
proto.zitadel.auth.v1.RemoveMyAuthFactorOTPSMSResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.auth.v1.RemoveMyAuthFactorOTPSMSResponse} returns this
 */
proto.zitadel.auth.v1.RemoveMyAuthFactorOTPSMSResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.auth.v1.RemoveMyAuthFactorOTPSMSResponse.prototype.hasDetails = function() {
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
proto.zitadel.auth.v1.AddMyAuthFactorOTPEmailRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.auth.v1.AddMyAuthFactorOTPEmailRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.auth.v1.AddMyAuthFactorOTPEmailRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.AddMyAuthFactorOTPEmailRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.auth.v1.AddMyAuthFactorOTPEmailRequest}
 */
proto.zitadel.auth.v1.AddMyAuthFactorOTPEmailRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.auth.v1.AddMyAuthFactorOTPEmailRequest;
  return proto.zitadel.auth.v1.AddMyAuthFactorOTPEmailRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.auth.v1.AddMyAuthFactorOTPEmailRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.auth.v1.AddMyAuthFactorOTPEmailRequest}
 */
proto.zitadel.auth.v1.AddMyAuthFactorOTPEmailRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.auth.v1.AddMyAuthFactorOTPEmailRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.auth.v1.AddMyAuthFactorOTPEmailRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.auth.v1.AddMyAuthFactorOTPEmailRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.AddMyAuthFactorOTPEmailRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.auth.v1.AddMyAuthFactorOTPEmailResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.auth.v1.AddMyAuthFactorOTPEmailResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.auth.v1.AddMyAuthFactorOTPEmailResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.AddMyAuthFactorOTPEmailResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.auth.v1.AddMyAuthFactorOTPEmailResponse}
 */
proto.zitadel.auth.v1.AddMyAuthFactorOTPEmailResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.auth.v1.AddMyAuthFactorOTPEmailResponse;
  return proto.zitadel.auth.v1.AddMyAuthFactorOTPEmailResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.auth.v1.AddMyAuthFactorOTPEmailResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.auth.v1.AddMyAuthFactorOTPEmailResponse}
 */
proto.zitadel.auth.v1.AddMyAuthFactorOTPEmailResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.auth.v1.AddMyAuthFactorOTPEmailResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.auth.v1.AddMyAuthFactorOTPEmailResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.auth.v1.AddMyAuthFactorOTPEmailResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.AddMyAuthFactorOTPEmailResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.auth.v1.AddMyAuthFactorOTPEmailResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.v1.ObjectDetails} */ (
    jspb.Message.getWrapperField(this, zitadel_object_pb.ObjectDetails, 1));
};


/**
 * @param {?proto.zitadel.v1.ObjectDetails|undefined} value
 * @return {!proto.zitadel.auth.v1.AddMyAuthFactorOTPEmailResponse} returns this
*/
proto.zitadel.auth.v1.AddMyAuthFactorOTPEmailResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.auth.v1.AddMyAuthFactorOTPEmailResponse} returns this
 */
proto.zitadel.auth.v1.AddMyAuthFactorOTPEmailResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.auth.v1.AddMyAuthFactorOTPEmailResponse.prototype.hasDetails = function() {
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
proto.zitadel.auth.v1.RemoveMyAuthFactorOTPEmailRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.auth.v1.RemoveMyAuthFactorOTPEmailRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.auth.v1.RemoveMyAuthFactorOTPEmailRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.RemoveMyAuthFactorOTPEmailRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.auth.v1.RemoveMyAuthFactorOTPEmailRequest}
 */
proto.zitadel.auth.v1.RemoveMyAuthFactorOTPEmailRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.auth.v1.RemoveMyAuthFactorOTPEmailRequest;
  return proto.zitadel.auth.v1.RemoveMyAuthFactorOTPEmailRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.auth.v1.RemoveMyAuthFactorOTPEmailRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.auth.v1.RemoveMyAuthFactorOTPEmailRequest}
 */
proto.zitadel.auth.v1.RemoveMyAuthFactorOTPEmailRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.auth.v1.RemoveMyAuthFactorOTPEmailRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.auth.v1.RemoveMyAuthFactorOTPEmailRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.auth.v1.RemoveMyAuthFactorOTPEmailRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.RemoveMyAuthFactorOTPEmailRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.auth.v1.RemoveMyAuthFactorOTPEmailResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.auth.v1.RemoveMyAuthFactorOTPEmailResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.auth.v1.RemoveMyAuthFactorOTPEmailResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.RemoveMyAuthFactorOTPEmailResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.auth.v1.RemoveMyAuthFactorOTPEmailResponse}
 */
proto.zitadel.auth.v1.RemoveMyAuthFactorOTPEmailResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.auth.v1.RemoveMyAuthFactorOTPEmailResponse;
  return proto.zitadel.auth.v1.RemoveMyAuthFactorOTPEmailResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.auth.v1.RemoveMyAuthFactorOTPEmailResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.auth.v1.RemoveMyAuthFactorOTPEmailResponse}
 */
proto.zitadel.auth.v1.RemoveMyAuthFactorOTPEmailResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.auth.v1.RemoveMyAuthFactorOTPEmailResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.auth.v1.RemoveMyAuthFactorOTPEmailResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.auth.v1.RemoveMyAuthFactorOTPEmailResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.RemoveMyAuthFactorOTPEmailResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.auth.v1.RemoveMyAuthFactorOTPEmailResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.v1.ObjectDetails} */ (
    jspb.Message.getWrapperField(this, zitadel_object_pb.ObjectDetails, 1));
};


/**
 * @param {?proto.zitadel.v1.ObjectDetails|undefined} value
 * @return {!proto.zitadel.auth.v1.RemoveMyAuthFactorOTPEmailResponse} returns this
*/
proto.zitadel.auth.v1.RemoveMyAuthFactorOTPEmailResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.auth.v1.RemoveMyAuthFactorOTPEmailResponse} returns this
 */
proto.zitadel.auth.v1.RemoveMyAuthFactorOTPEmailResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.auth.v1.RemoveMyAuthFactorOTPEmailResponse.prototype.hasDetails = function() {
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
proto.zitadel.auth.v1.RemoveMyAuthFactorU2FRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.auth.v1.RemoveMyAuthFactorU2FRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.auth.v1.RemoveMyAuthFactorU2FRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.RemoveMyAuthFactorU2FRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
tokenId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.zitadel.auth.v1.RemoveMyAuthFactorU2FRequest}
 */
proto.zitadel.auth.v1.RemoveMyAuthFactorU2FRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.auth.v1.RemoveMyAuthFactorU2FRequest;
  return proto.zitadel.auth.v1.RemoveMyAuthFactorU2FRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.auth.v1.RemoveMyAuthFactorU2FRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.auth.v1.RemoveMyAuthFactorU2FRequest}
 */
proto.zitadel.auth.v1.RemoveMyAuthFactorU2FRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTokenId(value);
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
proto.zitadel.auth.v1.RemoveMyAuthFactorU2FRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.auth.v1.RemoveMyAuthFactorU2FRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.auth.v1.RemoveMyAuthFactorU2FRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.RemoveMyAuthFactorU2FRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTokenId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string token_id = 1;
 * @return {string}
 */
proto.zitadel.auth.v1.RemoveMyAuthFactorU2FRequest.prototype.getTokenId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.auth.v1.RemoveMyAuthFactorU2FRequest} returns this
 */
proto.zitadel.auth.v1.RemoveMyAuthFactorU2FRequest.prototype.setTokenId = function(value) {
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
proto.zitadel.auth.v1.RemoveMyAuthFactorU2FResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.auth.v1.RemoveMyAuthFactorU2FResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.auth.v1.RemoveMyAuthFactorU2FResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.RemoveMyAuthFactorU2FResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.auth.v1.RemoveMyAuthFactorU2FResponse}
 */
proto.zitadel.auth.v1.RemoveMyAuthFactorU2FResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.auth.v1.RemoveMyAuthFactorU2FResponse;
  return proto.zitadel.auth.v1.RemoveMyAuthFactorU2FResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.auth.v1.RemoveMyAuthFactorU2FResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.auth.v1.RemoveMyAuthFactorU2FResponse}
 */
proto.zitadel.auth.v1.RemoveMyAuthFactorU2FResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.auth.v1.RemoveMyAuthFactorU2FResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.auth.v1.RemoveMyAuthFactorU2FResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.auth.v1.RemoveMyAuthFactorU2FResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.RemoveMyAuthFactorU2FResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.auth.v1.RemoveMyAuthFactorU2FResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.v1.ObjectDetails} */ (
    jspb.Message.getWrapperField(this, zitadel_object_pb.ObjectDetails, 1));
};


/**
 * @param {?proto.zitadel.v1.ObjectDetails|undefined} value
 * @return {!proto.zitadel.auth.v1.RemoveMyAuthFactorU2FResponse} returns this
*/
proto.zitadel.auth.v1.RemoveMyAuthFactorU2FResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.auth.v1.RemoveMyAuthFactorU2FResponse} returns this
 */
proto.zitadel.auth.v1.RemoveMyAuthFactorU2FResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.auth.v1.RemoveMyAuthFactorU2FResponse.prototype.hasDetails = function() {
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
proto.zitadel.auth.v1.ListMyPasswordlessRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.auth.v1.ListMyPasswordlessRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.auth.v1.ListMyPasswordlessRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.ListMyPasswordlessRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.auth.v1.ListMyPasswordlessRequest}
 */
proto.zitadel.auth.v1.ListMyPasswordlessRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.auth.v1.ListMyPasswordlessRequest;
  return proto.zitadel.auth.v1.ListMyPasswordlessRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.auth.v1.ListMyPasswordlessRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.auth.v1.ListMyPasswordlessRequest}
 */
proto.zitadel.auth.v1.ListMyPasswordlessRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.auth.v1.ListMyPasswordlessRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.auth.v1.ListMyPasswordlessRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.auth.v1.ListMyPasswordlessRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.ListMyPasswordlessRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.auth.v1.ListMyPasswordlessResponse.repeatedFields_ = [1];



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
proto.zitadel.auth.v1.ListMyPasswordlessResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.auth.v1.ListMyPasswordlessResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.auth.v1.ListMyPasswordlessResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.ListMyPasswordlessResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
resultList: jspb.Message.toObjectList(msg.getResultList(),
    zitadel_user_pb.WebAuthNToken.toObject, includeInstance)
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
 * @return {!proto.zitadel.auth.v1.ListMyPasswordlessResponse}
 */
proto.zitadel.auth.v1.ListMyPasswordlessResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.auth.v1.ListMyPasswordlessResponse;
  return proto.zitadel.auth.v1.ListMyPasswordlessResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.auth.v1.ListMyPasswordlessResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.auth.v1.ListMyPasswordlessResponse}
 */
proto.zitadel.auth.v1.ListMyPasswordlessResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_user_pb.WebAuthNToken;
      reader.readMessage(value,zitadel_user_pb.WebAuthNToken.deserializeBinaryFromReader);
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
proto.zitadel.auth.v1.ListMyPasswordlessResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.auth.v1.ListMyPasswordlessResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.auth.v1.ListMyPasswordlessResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.ListMyPasswordlessResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResultList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      zitadel_user_pb.WebAuthNToken.serializeBinaryToWriter
    );
  }
};


/**
 * repeated zitadel.user.v1.WebAuthNToken result = 1;
 * @return {!Array<!proto.zitadel.user.v1.WebAuthNToken>}
 */
proto.zitadel.auth.v1.ListMyPasswordlessResponse.prototype.getResultList = function() {
  return /** @type{!Array<!proto.zitadel.user.v1.WebAuthNToken>} */ (
    jspb.Message.getRepeatedWrapperField(this, zitadel_user_pb.WebAuthNToken, 1));
};


/**
 * @param {!Array<!proto.zitadel.user.v1.WebAuthNToken>} value
 * @return {!proto.zitadel.auth.v1.ListMyPasswordlessResponse} returns this
*/
proto.zitadel.auth.v1.ListMyPasswordlessResponse.prototype.setResultList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.zitadel.user.v1.WebAuthNToken=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zitadel.user.v1.WebAuthNToken}
 */
proto.zitadel.auth.v1.ListMyPasswordlessResponse.prototype.addResult = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.zitadel.user.v1.WebAuthNToken, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.auth.v1.ListMyPasswordlessResponse} returns this
 */
proto.zitadel.auth.v1.ListMyPasswordlessResponse.prototype.clearResultList = function() {
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
proto.zitadel.auth.v1.AddMyPasswordlessRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.auth.v1.AddMyPasswordlessRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.auth.v1.AddMyPasswordlessRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.AddMyPasswordlessRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.auth.v1.AddMyPasswordlessRequest}
 */
proto.zitadel.auth.v1.AddMyPasswordlessRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.auth.v1.AddMyPasswordlessRequest;
  return proto.zitadel.auth.v1.AddMyPasswordlessRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.auth.v1.AddMyPasswordlessRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.auth.v1.AddMyPasswordlessRequest}
 */
proto.zitadel.auth.v1.AddMyPasswordlessRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.auth.v1.AddMyPasswordlessRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.auth.v1.AddMyPasswordlessRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.auth.v1.AddMyPasswordlessRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.AddMyPasswordlessRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.auth.v1.AddMyPasswordlessResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.auth.v1.AddMyPasswordlessResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.auth.v1.AddMyPasswordlessResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.AddMyPasswordlessResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
key: (f = msg.getKey()) && zitadel_user_pb.WebAuthNKey.toObject(includeInstance, f),
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
 * @return {!proto.zitadel.auth.v1.AddMyPasswordlessResponse}
 */
proto.zitadel.auth.v1.AddMyPasswordlessResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.auth.v1.AddMyPasswordlessResponse;
  return proto.zitadel.auth.v1.AddMyPasswordlessResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.auth.v1.AddMyPasswordlessResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.auth.v1.AddMyPasswordlessResponse}
 */
proto.zitadel.auth.v1.AddMyPasswordlessResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_user_pb.WebAuthNKey;
      reader.readMessage(value,zitadel_user_pb.WebAuthNKey.deserializeBinaryFromReader);
      msg.setKey(value);
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
proto.zitadel.auth.v1.AddMyPasswordlessResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.auth.v1.AddMyPasswordlessResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.auth.v1.AddMyPasswordlessResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.AddMyPasswordlessResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_user_pb.WebAuthNKey.serializeBinaryToWriter
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
 * optional zitadel.user.v1.WebAuthNKey key = 1;
 * @return {?proto.zitadel.user.v1.WebAuthNKey}
 */
proto.zitadel.auth.v1.AddMyPasswordlessResponse.prototype.getKey = function() {
  return /** @type{?proto.zitadel.user.v1.WebAuthNKey} */ (
    jspb.Message.getWrapperField(this, zitadel_user_pb.WebAuthNKey, 1));
};


/**
 * @param {?proto.zitadel.user.v1.WebAuthNKey|undefined} value
 * @return {!proto.zitadel.auth.v1.AddMyPasswordlessResponse} returns this
*/
proto.zitadel.auth.v1.AddMyPasswordlessResponse.prototype.setKey = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.auth.v1.AddMyPasswordlessResponse} returns this
 */
proto.zitadel.auth.v1.AddMyPasswordlessResponse.prototype.clearKey = function() {
  return this.setKey(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.auth.v1.AddMyPasswordlessResponse.prototype.hasKey = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional zitadel.v1.ObjectDetails details = 2;
 * @return {?proto.zitadel.v1.ObjectDetails}
 */
proto.zitadel.auth.v1.AddMyPasswordlessResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.v1.ObjectDetails} */ (
    jspb.Message.getWrapperField(this, zitadel_object_pb.ObjectDetails, 2));
};


/**
 * @param {?proto.zitadel.v1.ObjectDetails|undefined} value
 * @return {!proto.zitadel.auth.v1.AddMyPasswordlessResponse} returns this
*/
proto.zitadel.auth.v1.AddMyPasswordlessResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.auth.v1.AddMyPasswordlessResponse} returns this
 */
proto.zitadel.auth.v1.AddMyPasswordlessResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.auth.v1.AddMyPasswordlessResponse.prototype.hasDetails = function() {
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
proto.zitadel.auth.v1.AddMyPasswordlessLinkRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.auth.v1.AddMyPasswordlessLinkRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.auth.v1.AddMyPasswordlessLinkRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.AddMyPasswordlessLinkRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.auth.v1.AddMyPasswordlessLinkRequest}
 */
proto.zitadel.auth.v1.AddMyPasswordlessLinkRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.auth.v1.AddMyPasswordlessLinkRequest;
  return proto.zitadel.auth.v1.AddMyPasswordlessLinkRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.auth.v1.AddMyPasswordlessLinkRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.auth.v1.AddMyPasswordlessLinkRequest}
 */
proto.zitadel.auth.v1.AddMyPasswordlessLinkRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.auth.v1.AddMyPasswordlessLinkRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.auth.v1.AddMyPasswordlessLinkRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.auth.v1.AddMyPasswordlessLinkRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.AddMyPasswordlessLinkRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.auth.v1.AddMyPasswordlessLinkResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.auth.v1.AddMyPasswordlessLinkResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.auth.v1.AddMyPasswordlessLinkResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.AddMyPasswordlessLinkResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_pb.ObjectDetails.toObject(includeInstance, f),
link: jspb.Message.getFieldWithDefault(msg, 2, ""),
expiration: (f = msg.getExpiration()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.auth.v1.AddMyPasswordlessLinkResponse}
 */
proto.zitadel.auth.v1.AddMyPasswordlessLinkResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.auth.v1.AddMyPasswordlessLinkResponse;
  return proto.zitadel.auth.v1.AddMyPasswordlessLinkResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.auth.v1.AddMyPasswordlessLinkResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.auth.v1.AddMyPasswordlessLinkResponse}
 */
proto.zitadel.auth.v1.AddMyPasswordlessLinkResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setLink(value);
      break;
    case 3:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setExpiration(value);
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
proto.zitadel.auth.v1.AddMyPasswordlessLinkResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.auth.v1.AddMyPasswordlessLinkResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.auth.v1.AddMyPasswordlessLinkResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.AddMyPasswordlessLinkResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_pb.ObjectDetails.serializeBinaryToWriter
    );
  }
  f = message.getLink();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getExpiration();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.v1.ObjectDetails details = 1;
 * @return {?proto.zitadel.v1.ObjectDetails}
 */
proto.zitadel.auth.v1.AddMyPasswordlessLinkResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.v1.ObjectDetails} */ (
    jspb.Message.getWrapperField(this, zitadel_object_pb.ObjectDetails, 1));
};


/**
 * @param {?proto.zitadel.v1.ObjectDetails|undefined} value
 * @return {!proto.zitadel.auth.v1.AddMyPasswordlessLinkResponse} returns this
*/
proto.zitadel.auth.v1.AddMyPasswordlessLinkResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.auth.v1.AddMyPasswordlessLinkResponse} returns this
 */
proto.zitadel.auth.v1.AddMyPasswordlessLinkResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.auth.v1.AddMyPasswordlessLinkResponse.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string link = 2;
 * @return {string}
 */
proto.zitadel.auth.v1.AddMyPasswordlessLinkResponse.prototype.getLink = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.auth.v1.AddMyPasswordlessLinkResponse} returns this
 */
proto.zitadel.auth.v1.AddMyPasswordlessLinkResponse.prototype.setLink = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.Duration expiration = 3;
 * @return {?proto.google.protobuf.Duration}
 */
proto.zitadel.auth.v1.AddMyPasswordlessLinkResponse.prototype.getExpiration = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 3));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.zitadel.auth.v1.AddMyPasswordlessLinkResponse} returns this
*/
proto.zitadel.auth.v1.AddMyPasswordlessLinkResponse.prototype.setExpiration = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.auth.v1.AddMyPasswordlessLinkResponse} returns this
 */
proto.zitadel.auth.v1.AddMyPasswordlessLinkResponse.prototype.clearExpiration = function() {
  return this.setExpiration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.auth.v1.AddMyPasswordlessLinkResponse.prototype.hasExpiration = function() {
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
proto.zitadel.auth.v1.SendMyPasswordlessLinkRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.auth.v1.SendMyPasswordlessLinkRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.auth.v1.SendMyPasswordlessLinkRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.SendMyPasswordlessLinkRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.auth.v1.SendMyPasswordlessLinkRequest}
 */
proto.zitadel.auth.v1.SendMyPasswordlessLinkRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.auth.v1.SendMyPasswordlessLinkRequest;
  return proto.zitadel.auth.v1.SendMyPasswordlessLinkRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.auth.v1.SendMyPasswordlessLinkRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.auth.v1.SendMyPasswordlessLinkRequest}
 */
proto.zitadel.auth.v1.SendMyPasswordlessLinkRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.auth.v1.SendMyPasswordlessLinkRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.auth.v1.SendMyPasswordlessLinkRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.auth.v1.SendMyPasswordlessLinkRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.SendMyPasswordlessLinkRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.auth.v1.SendMyPasswordlessLinkResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.auth.v1.SendMyPasswordlessLinkResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.auth.v1.SendMyPasswordlessLinkResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.SendMyPasswordlessLinkResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.auth.v1.SendMyPasswordlessLinkResponse}
 */
proto.zitadel.auth.v1.SendMyPasswordlessLinkResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.auth.v1.SendMyPasswordlessLinkResponse;
  return proto.zitadel.auth.v1.SendMyPasswordlessLinkResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.auth.v1.SendMyPasswordlessLinkResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.auth.v1.SendMyPasswordlessLinkResponse}
 */
proto.zitadel.auth.v1.SendMyPasswordlessLinkResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.auth.v1.SendMyPasswordlessLinkResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.auth.v1.SendMyPasswordlessLinkResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.auth.v1.SendMyPasswordlessLinkResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.SendMyPasswordlessLinkResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.auth.v1.SendMyPasswordlessLinkResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.v1.ObjectDetails} */ (
    jspb.Message.getWrapperField(this, zitadel_object_pb.ObjectDetails, 1));
};


/**
 * @param {?proto.zitadel.v1.ObjectDetails|undefined} value
 * @return {!proto.zitadel.auth.v1.SendMyPasswordlessLinkResponse} returns this
*/
proto.zitadel.auth.v1.SendMyPasswordlessLinkResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.auth.v1.SendMyPasswordlessLinkResponse} returns this
 */
proto.zitadel.auth.v1.SendMyPasswordlessLinkResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.auth.v1.SendMyPasswordlessLinkResponse.prototype.hasDetails = function() {
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
proto.zitadel.auth.v1.VerifyMyPasswordlessRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.auth.v1.VerifyMyPasswordlessRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.auth.v1.VerifyMyPasswordlessRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.VerifyMyPasswordlessRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
verification: (f = msg.getVerification()) && zitadel_user_pb.WebAuthNVerification.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.auth.v1.VerifyMyPasswordlessRequest}
 */
proto.zitadel.auth.v1.VerifyMyPasswordlessRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.auth.v1.VerifyMyPasswordlessRequest;
  return proto.zitadel.auth.v1.VerifyMyPasswordlessRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.auth.v1.VerifyMyPasswordlessRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.auth.v1.VerifyMyPasswordlessRequest}
 */
proto.zitadel.auth.v1.VerifyMyPasswordlessRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_user_pb.WebAuthNVerification;
      reader.readMessage(value,zitadel_user_pb.WebAuthNVerification.deserializeBinaryFromReader);
      msg.setVerification(value);
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
proto.zitadel.auth.v1.VerifyMyPasswordlessRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.auth.v1.VerifyMyPasswordlessRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.auth.v1.VerifyMyPasswordlessRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.VerifyMyPasswordlessRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVerification();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_user_pb.WebAuthNVerification.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.user.v1.WebAuthNVerification verification = 1;
 * @return {?proto.zitadel.user.v1.WebAuthNVerification}
 */
proto.zitadel.auth.v1.VerifyMyPasswordlessRequest.prototype.getVerification = function() {
  return /** @type{?proto.zitadel.user.v1.WebAuthNVerification} */ (
    jspb.Message.getWrapperField(this, zitadel_user_pb.WebAuthNVerification, 1));
};


/**
 * @param {?proto.zitadel.user.v1.WebAuthNVerification|undefined} value
 * @return {!proto.zitadel.auth.v1.VerifyMyPasswordlessRequest} returns this
*/
proto.zitadel.auth.v1.VerifyMyPasswordlessRequest.prototype.setVerification = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.auth.v1.VerifyMyPasswordlessRequest} returns this
 */
proto.zitadel.auth.v1.VerifyMyPasswordlessRequest.prototype.clearVerification = function() {
  return this.setVerification(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.auth.v1.VerifyMyPasswordlessRequest.prototype.hasVerification = function() {
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
proto.zitadel.auth.v1.VerifyMyPasswordlessResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.auth.v1.VerifyMyPasswordlessResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.auth.v1.VerifyMyPasswordlessResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.VerifyMyPasswordlessResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.auth.v1.VerifyMyPasswordlessResponse}
 */
proto.zitadel.auth.v1.VerifyMyPasswordlessResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.auth.v1.VerifyMyPasswordlessResponse;
  return proto.zitadel.auth.v1.VerifyMyPasswordlessResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.auth.v1.VerifyMyPasswordlessResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.auth.v1.VerifyMyPasswordlessResponse}
 */
proto.zitadel.auth.v1.VerifyMyPasswordlessResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.auth.v1.VerifyMyPasswordlessResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.auth.v1.VerifyMyPasswordlessResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.auth.v1.VerifyMyPasswordlessResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.VerifyMyPasswordlessResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.auth.v1.VerifyMyPasswordlessResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.v1.ObjectDetails} */ (
    jspb.Message.getWrapperField(this, zitadel_object_pb.ObjectDetails, 1));
};


/**
 * @param {?proto.zitadel.v1.ObjectDetails|undefined} value
 * @return {!proto.zitadel.auth.v1.VerifyMyPasswordlessResponse} returns this
*/
proto.zitadel.auth.v1.VerifyMyPasswordlessResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.auth.v1.VerifyMyPasswordlessResponse} returns this
 */
proto.zitadel.auth.v1.VerifyMyPasswordlessResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.auth.v1.VerifyMyPasswordlessResponse.prototype.hasDetails = function() {
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
proto.zitadel.auth.v1.RemoveMyPasswordlessRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.auth.v1.RemoveMyPasswordlessRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.auth.v1.RemoveMyPasswordlessRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.RemoveMyPasswordlessRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
tokenId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.zitadel.auth.v1.RemoveMyPasswordlessRequest}
 */
proto.zitadel.auth.v1.RemoveMyPasswordlessRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.auth.v1.RemoveMyPasswordlessRequest;
  return proto.zitadel.auth.v1.RemoveMyPasswordlessRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.auth.v1.RemoveMyPasswordlessRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.auth.v1.RemoveMyPasswordlessRequest}
 */
proto.zitadel.auth.v1.RemoveMyPasswordlessRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTokenId(value);
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
proto.zitadel.auth.v1.RemoveMyPasswordlessRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.auth.v1.RemoveMyPasswordlessRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.auth.v1.RemoveMyPasswordlessRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.RemoveMyPasswordlessRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTokenId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string token_id = 1;
 * @return {string}
 */
proto.zitadel.auth.v1.RemoveMyPasswordlessRequest.prototype.getTokenId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.auth.v1.RemoveMyPasswordlessRequest} returns this
 */
proto.zitadel.auth.v1.RemoveMyPasswordlessRequest.prototype.setTokenId = function(value) {
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
proto.zitadel.auth.v1.RemoveMyPasswordlessResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.auth.v1.RemoveMyPasswordlessResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.auth.v1.RemoveMyPasswordlessResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.RemoveMyPasswordlessResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.auth.v1.RemoveMyPasswordlessResponse}
 */
proto.zitadel.auth.v1.RemoveMyPasswordlessResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.auth.v1.RemoveMyPasswordlessResponse;
  return proto.zitadel.auth.v1.RemoveMyPasswordlessResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.auth.v1.RemoveMyPasswordlessResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.auth.v1.RemoveMyPasswordlessResponse}
 */
proto.zitadel.auth.v1.RemoveMyPasswordlessResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.auth.v1.RemoveMyPasswordlessResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.auth.v1.RemoveMyPasswordlessResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.auth.v1.RemoveMyPasswordlessResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.RemoveMyPasswordlessResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.auth.v1.RemoveMyPasswordlessResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.v1.ObjectDetails} */ (
    jspb.Message.getWrapperField(this, zitadel_object_pb.ObjectDetails, 1));
};


/**
 * @param {?proto.zitadel.v1.ObjectDetails|undefined} value
 * @return {!proto.zitadel.auth.v1.RemoveMyPasswordlessResponse} returns this
*/
proto.zitadel.auth.v1.RemoveMyPasswordlessResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.auth.v1.RemoveMyPasswordlessResponse} returns this
 */
proto.zitadel.auth.v1.RemoveMyPasswordlessResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.auth.v1.RemoveMyPasswordlessResponse.prototype.hasDetails = function() {
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
proto.zitadel.auth.v1.ListMyUserGrantsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.auth.v1.ListMyUserGrantsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.auth.v1.ListMyUserGrantsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.ListMyUserGrantsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
query: (f = msg.getQuery()) && zitadel_object_pb.ListQuery.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.auth.v1.ListMyUserGrantsRequest}
 */
proto.zitadel.auth.v1.ListMyUserGrantsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.auth.v1.ListMyUserGrantsRequest;
  return proto.zitadel.auth.v1.ListMyUserGrantsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.auth.v1.ListMyUserGrantsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.auth.v1.ListMyUserGrantsRequest}
 */
proto.zitadel.auth.v1.ListMyUserGrantsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.auth.v1.ListMyUserGrantsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.auth.v1.ListMyUserGrantsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.auth.v1.ListMyUserGrantsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.ListMyUserGrantsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQuery();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_pb.ListQuery.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.v1.ListQuery query = 1;
 * @return {?proto.zitadel.v1.ListQuery}
 */
proto.zitadel.auth.v1.ListMyUserGrantsRequest.prototype.getQuery = function() {
  return /** @type{?proto.zitadel.v1.ListQuery} */ (
    jspb.Message.getWrapperField(this, zitadel_object_pb.ListQuery, 1));
};


/**
 * @param {?proto.zitadel.v1.ListQuery|undefined} value
 * @return {!proto.zitadel.auth.v1.ListMyUserGrantsRequest} returns this
*/
proto.zitadel.auth.v1.ListMyUserGrantsRequest.prototype.setQuery = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.auth.v1.ListMyUserGrantsRequest} returns this
 */
proto.zitadel.auth.v1.ListMyUserGrantsRequest.prototype.clearQuery = function() {
  return this.setQuery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.auth.v1.ListMyUserGrantsRequest.prototype.hasQuery = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.auth.v1.ListMyUserGrantsResponse.repeatedFields_ = [2];



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
proto.zitadel.auth.v1.ListMyUserGrantsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.auth.v1.ListMyUserGrantsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.auth.v1.ListMyUserGrantsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.ListMyUserGrantsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_pb.ListDetails.toObject(includeInstance, f),
resultList: jspb.Message.toObjectList(msg.getResultList(),
    proto.zitadel.auth.v1.UserGrant.toObject, includeInstance)
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
 * @return {!proto.zitadel.auth.v1.ListMyUserGrantsResponse}
 */
proto.zitadel.auth.v1.ListMyUserGrantsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.auth.v1.ListMyUserGrantsResponse;
  return proto.zitadel.auth.v1.ListMyUserGrantsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.auth.v1.ListMyUserGrantsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.auth.v1.ListMyUserGrantsResponse}
 */
proto.zitadel.auth.v1.ListMyUserGrantsResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.zitadel.auth.v1.UserGrant;
      reader.readMessage(value,proto.zitadel.auth.v1.UserGrant.deserializeBinaryFromReader);
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
proto.zitadel.auth.v1.ListMyUserGrantsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.auth.v1.ListMyUserGrantsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.auth.v1.ListMyUserGrantsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.ListMyUserGrantsResponse.serializeBinaryToWriter = function(message, writer) {
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
      proto.zitadel.auth.v1.UserGrant.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.v1.ListDetails details = 1;
 * @return {?proto.zitadel.v1.ListDetails}
 */
proto.zitadel.auth.v1.ListMyUserGrantsResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.v1.ListDetails} */ (
    jspb.Message.getWrapperField(this, zitadel_object_pb.ListDetails, 1));
};


/**
 * @param {?proto.zitadel.v1.ListDetails|undefined} value
 * @return {!proto.zitadel.auth.v1.ListMyUserGrantsResponse} returns this
*/
proto.zitadel.auth.v1.ListMyUserGrantsResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.auth.v1.ListMyUserGrantsResponse} returns this
 */
proto.zitadel.auth.v1.ListMyUserGrantsResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.auth.v1.ListMyUserGrantsResponse.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated UserGrant result = 2;
 * @return {!Array<!proto.zitadel.auth.v1.UserGrant>}
 */
proto.zitadel.auth.v1.ListMyUserGrantsResponse.prototype.getResultList = function() {
  return /** @type{!Array<!proto.zitadel.auth.v1.UserGrant>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.zitadel.auth.v1.UserGrant, 2));
};


/**
 * @param {!Array<!proto.zitadel.auth.v1.UserGrant>} value
 * @return {!proto.zitadel.auth.v1.ListMyUserGrantsResponse} returns this
*/
proto.zitadel.auth.v1.ListMyUserGrantsResponse.prototype.setResultList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.zitadel.auth.v1.UserGrant=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zitadel.auth.v1.UserGrant}
 */
proto.zitadel.auth.v1.ListMyUserGrantsResponse.prototype.addResult = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.zitadel.auth.v1.UserGrant, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.auth.v1.ListMyUserGrantsResponse} returns this
 */
proto.zitadel.auth.v1.ListMyUserGrantsResponse.prototype.clearResultList = function() {
  return this.setResultList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.auth.v1.UserGrant.repeatedFields_ = [4,11];



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
proto.zitadel.auth.v1.UserGrant.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.auth.v1.UserGrant.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.auth.v1.UserGrant} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.UserGrant.toObject = function(includeInstance, msg) {
  var f, obj = {
orgId: jspb.Message.getFieldWithDefault(msg, 1, ""),
projectId: jspb.Message.getFieldWithDefault(msg, 2, ""),
userId: jspb.Message.getFieldWithDefault(msg, 3, ""),
rolesList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
orgName: jspb.Message.getFieldWithDefault(msg, 5, ""),
grantId: jspb.Message.getFieldWithDefault(msg, 6, ""),
details: (f = msg.getDetails()) && zitadel_object_pb.ObjectDetails.toObject(includeInstance, f),
orgDomain: jspb.Message.getFieldWithDefault(msg, 8, ""),
projectName: jspb.Message.getFieldWithDefault(msg, 9, ""),
projectGrantId: jspb.Message.getFieldWithDefault(msg, 10, ""),
roleKeysList: (f = jspb.Message.getRepeatedField(msg, 11)) == null ? undefined : f,
userType: jspb.Message.getFieldWithDefault(msg, 12, 0),
state: jspb.Message.getFieldWithDefault(msg, 13, 0)
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
 * @return {!proto.zitadel.auth.v1.UserGrant}
 */
proto.zitadel.auth.v1.UserGrant.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.auth.v1.UserGrant;
  return proto.zitadel.auth.v1.UserGrant.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.auth.v1.UserGrant} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.auth.v1.UserGrant}
 */
proto.zitadel.auth.v1.UserGrant.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrgId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addRoles(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrgName(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setGrantId(value);
      break;
    case 7:
      var value = new zitadel_object_pb.ObjectDetails;
      reader.readMessage(value,zitadel_object_pb.ObjectDetails.deserializeBinaryFromReader);
      msg.setDetails(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrgDomain(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectName(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectGrantId(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.addRoleKeys(value);
      break;
    case 12:
      var value = /** @type {!proto.zitadel.user.v1.Type} */ (reader.readEnum());
      msg.setUserType(value);
      break;
    case 13:
      var value = /** @type {!proto.zitadel.user.v1.UserGrantState} */ (reader.readEnum());
      msg.setState(value);
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
proto.zitadel.auth.v1.UserGrant.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.auth.v1.UserGrant.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.auth.v1.UserGrant} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.UserGrant.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrgId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getRolesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getOrgName();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getGrantId();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      zitadel_object_pb.ObjectDetails.serializeBinaryToWriter
    );
  }
  f = message.getOrgDomain();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getProjectName();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getProjectGrantId();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getRoleKeysList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      11,
      f
    );
  }
  f = message.getUserType();
  if (f !== 0.0) {
    writer.writeEnum(
      12,
      f
    );
  }
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      13,
      f
    );
  }
};


/**
 * optional string org_id = 1;
 * @return {string}
 */
proto.zitadel.auth.v1.UserGrant.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.auth.v1.UserGrant} returns this
 */
proto.zitadel.auth.v1.UserGrant.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string project_id = 2;
 * @return {string}
 */
proto.zitadel.auth.v1.UserGrant.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.auth.v1.UserGrant} returns this
 */
proto.zitadel.auth.v1.UserGrant.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string user_id = 3;
 * @return {string}
 */
proto.zitadel.auth.v1.UserGrant.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.auth.v1.UserGrant} returns this
 */
proto.zitadel.auth.v1.UserGrant.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated string roles = 4;
 * @return {!Array<string>}
 */
proto.zitadel.auth.v1.UserGrant.prototype.getRolesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.zitadel.auth.v1.UserGrant} returns this
 */
proto.zitadel.auth.v1.UserGrant.prototype.setRolesList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.zitadel.auth.v1.UserGrant} returns this
 */
proto.zitadel.auth.v1.UserGrant.prototype.addRoles = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.auth.v1.UserGrant} returns this
 */
proto.zitadel.auth.v1.UserGrant.prototype.clearRolesList = function() {
  return this.setRolesList([]);
};


/**
 * optional string org_name = 5;
 * @return {string}
 */
proto.zitadel.auth.v1.UserGrant.prototype.getOrgName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.auth.v1.UserGrant} returns this
 */
proto.zitadel.auth.v1.UserGrant.prototype.setOrgName = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string grant_id = 6;
 * @return {string}
 */
proto.zitadel.auth.v1.UserGrant.prototype.getGrantId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.auth.v1.UserGrant} returns this
 */
proto.zitadel.auth.v1.UserGrant.prototype.setGrantId = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional zitadel.v1.ObjectDetails details = 7;
 * @return {?proto.zitadel.v1.ObjectDetails}
 */
proto.zitadel.auth.v1.UserGrant.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.v1.ObjectDetails} */ (
    jspb.Message.getWrapperField(this, zitadel_object_pb.ObjectDetails, 7));
};


/**
 * @param {?proto.zitadel.v1.ObjectDetails|undefined} value
 * @return {!proto.zitadel.auth.v1.UserGrant} returns this
*/
proto.zitadel.auth.v1.UserGrant.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.auth.v1.UserGrant} returns this
 */
proto.zitadel.auth.v1.UserGrant.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.auth.v1.UserGrant.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string org_domain = 8;
 * @return {string}
 */
proto.zitadel.auth.v1.UserGrant.prototype.getOrgDomain = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.auth.v1.UserGrant} returns this
 */
proto.zitadel.auth.v1.UserGrant.prototype.setOrgDomain = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string project_name = 9;
 * @return {string}
 */
proto.zitadel.auth.v1.UserGrant.prototype.getProjectName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.auth.v1.UserGrant} returns this
 */
proto.zitadel.auth.v1.UserGrant.prototype.setProjectName = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string project_grant_id = 10;
 * @return {string}
 */
proto.zitadel.auth.v1.UserGrant.prototype.getProjectGrantId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.auth.v1.UserGrant} returns this
 */
proto.zitadel.auth.v1.UserGrant.prototype.setProjectGrantId = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * repeated string role_keys = 11;
 * @return {!Array<string>}
 */
proto.zitadel.auth.v1.UserGrant.prototype.getRoleKeysList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 11));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.zitadel.auth.v1.UserGrant} returns this
 */
proto.zitadel.auth.v1.UserGrant.prototype.setRoleKeysList = function(value) {
  return jspb.Message.setField(this, 11, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.zitadel.auth.v1.UserGrant} returns this
 */
proto.zitadel.auth.v1.UserGrant.prototype.addRoleKeys = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 11, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.auth.v1.UserGrant} returns this
 */
proto.zitadel.auth.v1.UserGrant.prototype.clearRoleKeysList = function() {
  return this.setRoleKeysList([]);
};


/**
 * optional zitadel.user.v1.Type user_type = 12;
 * @return {!proto.zitadel.user.v1.Type}
 */
proto.zitadel.auth.v1.UserGrant.prototype.getUserType = function() {
  return /** @type {!proto.zitadel.user.v1.Type} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {!proto.zitadel.user.v1.Type} value
 * @return {!proto.zitadel.auth.v1.UserGrant} returns this
 */
proto.zitadel.auth.v1.UserGrant.prototype.setUserType = function(value) {
  return jspb.Message.setProto3EnumField(this, 12, value);
};


/**
 * optional zitadel.user.v1.UserGrantState state = 13;
 * @return {!proto.zitadel.user.v1.UserGrantState}
 */
proto.zitadel.auth.v1.UserGrant.prototype.getState = function() {
  return /** @type {!proto.zitadel.user.v1.UserGrantState} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {!proto.zitadel.user.v1.UserGrantState} value
 * @return {!proto.zitadel.auth.v1.UserGrant} returns this
 */
proto.zitadel.auth.v1.UserGrant.prototype.setState = function(value) {
  return jspb.Message.setProto3EnumField(this, 13, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.auth.v1.ListMyProjectOrgsRequest.repeatedFields_ = [2];



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
proto.zitadel.auth.v1.ListMyProjectOrgsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.auth.v1.ListMyProjectOrgsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.auth.v1.ListMyProjectOrgsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.ListMyProjectOrgsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
query: (f = msg.getQuery()) && zitadel_object_pb.ListQuery.toObject(includeInstance, f),
queriesList: jspb.Message.toObjectList(msg.getQueriesList(),
    zitadel_org_pb.OrgQuery.toObject, includeInstance),
sortingColumn: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.zitadel.auth.v1.ListMyProjectOrgsRequest}
 */
proto.zitadel.auth.v1.ListMyProjectOrgsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.auth.v1.ListMyProjectOrgsRequest;
  return proto.zitadel.auth.v1.ListMyProjectOrgsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.auth.v1.ListMyProjectOrgsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.auth.v1.ListMyProjectOrgsRequest}
 */
proto.zitadel.auth.v1.ListMyProjectOrgsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new zitadel_org_pb.OrgQuery;
      reader.readMessage(value,zitadel_org_pb.OrgQuery.deserializeBinaryFromReader);
      msg.addQueries(value);
      break;
    case 3:
      var value = /** @type {!proto.zitadel.org.v1.OrgFieldName} */ (reader.readEnum());
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
proto.zitadel.auth.v1.ListMyProjectOrgsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.auth.v1.ListMyProjectOrgsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.auth.v1.ListMyProjectOrgsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.ListMyProjectOrgsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQuery();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_pb.ListQuery.serializeBinaryToWriter
    );
  }
  f = message.getQueriesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      zitadel_org_pb.OrgQuery.serializeBinaryToWriter
    );
  }
  f = message.getSortingColumn();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * optional zitadel.v1.ListQuery query = 1;
 * @return {?proto.zitadel.v1.ListQuery}
 */
proto.zitadel.auth.v1.ListMyProjectOrgsRequest.prototype.getQuery = function() {
  return /** @type{?proto.zitadel.v1.ListQuery} */ (
    jspb.Message.getWrapperField(this, zitadel_object_pb.ListQuery, 1));
};


/**
 * @param {?proto.zitadel.v1.ListQuery|undefined} value
 * @return {!proto.zitadel.auth.v1.ListMyProjectOrgsRequest} returns this
*/
proto.zitadel.auth.v1.ListMyProjectOrgsRequest.prototype.setQuery = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.auth.v1.ListMyProjectOrgsRequest} returns this
 */
proto.zitadel.auth.v1.ListMyProjectOrgsRequest.prototype.clearQuery = function() {
  return this.setQuery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.auth.v1.ListMyProjectOrgsRequest.prototype.hasQuery = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated zitadel.org.v1.OrgQuery queries = 2;
 * @return {!Array<!proto.zitadel.org.v1.OrgQuery>}
 */
proto.zitadel.auth.v1.ListMyProjectOrgsRequest.prototype.getQueriesList = function() {
  return /** @type{!Array<!proto.zitadel.org.v1.OrgQuery>} */ (
    jspb.Message.getRepeatedWrapperField(this, zitadel_org_pb.OrgQuery, 2));
};


/**
 * @param {!Array<!proto.zitadel.org.v1.OrgQuery>} value
 * @return {!proto.zitadel.auth.v1.ListMyProjectOrgsRequest} returns this
*/
proto.zitadel.auth.v1.ListMyProjectOrgsRequest.prototype.setQueriesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.zitadel.org.v1.OrgQuery=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zitadel.org.v1.OrgQuery}
 */
proto.zitadel.auth.v1.ListMyProjectOrgsRequest.prototype.addQueries = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.zitadel.org.v1.OrgQuery, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.auth.v1.ListMyProjectOrgsRequest} returns this
 */
proto.zitadel.auth.v1.ListMyProjectOrgsRequest.prototype.clearQueriesList = function() {
  return this.setQueriesList([]);
};


/**
 * optional zitadel.org.v1.OrgFieldName sorting_column = 3;
 * @return {!proto.zitadel.org.v1.OrgFieldName}
 */
proto.zitadel.auth.v1.ListMyProjectOrgsRequest.prototype.getSortingColumn = function() {
  return /** @type {!proto.zitadel.org.v1.OrgFieldName} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.zitadel.org.v1.OrgFieldName} value
 * @return {!proto.zitadel.auth.v1.ListMyProjectOrgsRequest} returns this
 */
proto.zitadel.auth.v1.ListMyProjectOrgsRequest.prototype.setSortingColumn = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.auth.v1.ListMyProjectOrgsResponse.repeatedFields_ = [2];



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
proto.zitadel.auth.v1.ListMyProjectOrgsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.auth.v1.ListMyProjectOrgsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.auth.v1.ListMyProjectOrgsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.ListMyProjectOrgsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_pb.ListDetails.toObject(includeInstance, f),
resultList: jspb.Message.toObjectList(msg.getResultList(),
    zitadel_org_pb.Org.toObject, includeInstance)
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
 * @return {!proto.zitadel.auth.v1.ListMyProjectOrgsResponse}
 */
proto.zitadel.auth.v1.ListMyProjectOrgsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.auth.v1.ListMyProjectOrgsResponse;
  return proto.zitadel.auth.v1.ListMyProjectOrgsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.auth.v1.ListMyProjectOrgsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.auth.v1.ListMyProjectOrgsResponse}
 */
proto.zitadel.auth.v1.ListMyProjectOrgsResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new zitadel_org_pb.Org;
      reader.readMessage(value,zitadel_org_pb.Org.deserializeBinaryFromReader);
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
proto.zitadel.auth.v1.ListMyProjectOrgsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.auth.v1.ListMyProjectOrgsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.auth.v1.ListMyProjectOrgsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.ListMyProjectOrgsResponse.serializeBinaryToWriter = function(message, writer) {
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
      zitadel_org_pb.Org.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.v1.ListDetails details = 1;
 * @return {?proto.zitadel.v1.ListDetails}
 */
proto.zitadel.auth.v1.ListMyProjectOrgsResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.v1.ListDetails} */ (
    jspb.Message.getWrapperField(this, zitadel_object_pb.ListDetails, 1));
};


/**
 * @param {?proto.zitadel.v1.ListDetails|undefined} value
 * @return {!proto.zitadel.auth.v1.ListMyProjectOrgsResponse} returns this
*/
proto.zitadel.auth.v1.ListMyProjectOrgsResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.auth.v1.ListMyProjectOrgsResponse} returns this
 */
proto.zitadel.auth.v1.ListMyProjectOrgsResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.auth.v1.ListMyProjectOrgsResponse.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated zitadel.org.v1.Org result = 2;
 * @return {!Array<!proto.zitadel.org.v1.Org>}
 */
proto.zitadel.auth.v1.ListMyProjectOrgsResponse.prototype.getResultList = function() {
  return /** @type{!Array<!proto.zitadel.org.v1.Org>} */ (
    jspb.Message.getRepeatedWrapperField(this, zitadel_org_pb.Org, 2));
};


/**
 * @param {!Array<!proto.zitadel.org.v1.Org>} value
 * @return {!proto.zitadel.auth.v1.ListMyProjectOrgsResponse} returns this
*/
proto.zitadel.auth.v1.ListMyProjectOrgsResponse.prototype.setResultList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.zitadel.org.v1.Org=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zitadel.org.v1.Org}
 */
proto.zitadel.auth.v1.ListMyProjectOrgsResponse.prototype.addResult = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.zitadel.org.v1.Org, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.auth.v1.ListMyProjectOrgsResponse} returns this
 */
proto.zitadel.auth.v1.ListMyProjectOrgsResponse.prototype.clearResultList = function() {
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
proto.zitadel.auth.v1.ListMyZitadelPermissionsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.auth.v1.ListMyZitadelPermissionsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.auth.v1.ListMyZitadelPermissionsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.ListMyZitadelPermissionsRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.auth.v1.ListMyZitadelPermissionsRequest}
 */
proto.zitadel.auth.v1.ListMyZitadelPermissionsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.auth.v1.ListMyZitadelPermissionsRequest;
  return proto.zitadel.auth.v1.ListMyZitadelPermissionsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.auth.v1.ListMyZitadelPermissionsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.auth.v1.ListMyZitadelPermissionsRequest}
 */
proto.zitadel.auth.v1.ListMyZitadelPermissionsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.auth.v1.ListMyZitadelPermissionsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.auth.v1.ListMyZitadelPermissionsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.auth.v1.ListMyZitadelPermissionsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.ListMyZitadelPermissionsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.auth.v1.ListMyZitadelPermissionsResponse.repeatedFields_ = [1];



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
proto.zitadel.auth.v1.ListMyZitadelPermissionsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.auth.v1.ListMyZitadelPermissionsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.auth.v1.ListMyZitadelPermissionsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.ListMyZitadelPermissionsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
resultList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
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
 * @return {!proto.zitadel.auth.v1.ListMyZitadelPermissionsResponse}
 */
proto.zitadel.auth.v1.ListMyZitadelPermissionsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.auth.v1.ListMyZitadelPermissionsResponse;
  return proto.zitadel.auth.v1.ListMyZitadelPermissionsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.auth.v1.ListMyZitadelPermissionsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.auth.v1.ListMyZitadelPermissionsResponse}
 */
proto.zitadel.auth.v1.ListMyZitadelPermissionsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
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
proto.zitadel.auth.v1.ListMyZitadelPermissionsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.auth.v1.ListMyZitadelPermissionsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.auth.v1.ListMyZitadelPermissionsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.ListMyZitadelPermissionsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResultList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string result = 1;
 * @return {!Array<string>}
 */
proto.zitadel.auth.v1.ListMyZitadelPermissionsResponse.prototype.getResultList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.zitadel.auth.v1.ListMyZitadelPermissionsResponse} returns this
 */
proto.zitadel.auth.v1.ListMyZitadelPermissionsResponse.prototype.setResultList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.zitadel.auth.v1.ListMyZitadelPermissionsResponse} returns this
 */
proto.zitadel.auth.v1.ListMyZitadelPermissionsResponse.prototype.addResult = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.auth.v1.ListMyZitadelPermissionsResponse} returns this
 */
proto.zitadel.auth.v1.ListMyZitadelPermissionsResponse.prototype.clearResultList = function() {
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
proto.zitadel.auth.v1.ListMyProjectPermissionsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.auth.v1.ListMyProjectPermissionsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.auth.v1.ListMyProjectPermissionsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.ListMyProjectPermissionsRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.auth.v1.ListMyProjectPermissionsRequest}
 */
proto.zitadel.auth.v1.ListMyProjectPermissionsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.auth.v1.ListMyProjectPermissionsRequest;
  return proto.zitadel.auth.v1.ListMyProjectPermissionsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.auth.v1.ListMyProjectPermissionsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.auth.v1.ListMyProjectPermissionsRequest}
 */
proto.zitadel.auth.v1.ListMyProjectPermissionsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.auth.v1.ListMyProjectPermissionsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.auth.v1.ListMyProjectPermissionsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.auth.v1.ListMyProjectPermissionsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.ListMyProjectPermissionsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.auth.v1.ListMyProjectPermissionsResponse.repeatedFields_ = [1];



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
proto.zitadel.auth.v1.ListMyProjectPermissionsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.auth.v1.ListMyProjectPermissionsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.auth.v1.ListMyProjectPermissionsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.ListMyProjectPermissionsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
resultList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
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
 * @return {!proto.zitadel.auth.v1.ListMyProjectPermissionsResponse}
 */
proto.zitadel.auth.v1.ListMyProjectPermissionsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.auth.v1.ListMyProjectPermissionsResponse;
  return proto.zitadel.auth.v1.ListMyProjectPermissionsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.auth.v1.ListMyProjectPermissionsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.auth.v1.ListMyProjectPermissionsResponse}
 */
proto.zitadel.auth.v1.ListMyProjectPermissionsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
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
proto.zitadel.auth.v1.ListMyProjectPermissionsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.auth.v1.ListMyProjectPermissionsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.auth.v1.ListMyProjectPermissionsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.ListMyProjectPermissionsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResultList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string result = 1;
 * @return {!Array<string>}
 */
proto.zitadel.auth.v1.ListMyProjectPermissionsResponse.prototype.getResultList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.zitadel.auth.v1.ListMyProjectPermissionsResponse} returns this
 */
proto.zitadel.auth.v1.ListMyProjectPermissionsResponse.prototype.setResultList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.zitadel.auth.v1.ListMyProjectPermissionsResponse} returns this
 */
proto.zitadel.auth.v1.ListMyProjectPermissionsResponse.prototype.addResult = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.auth.v1.ListMyProjectPermissionsResponse} returns this
 */
proto.zitadel.auth.v1.ListMyProjectPermissionsResponse.prototype.clearResultList = function() {
  return this.setResultList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.auth.v1.ListMyMembershipsRequest.repeatedFields_ = [2];



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
proto.zitadel.auth.v1.ListMyMembershipsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.auth.v1.ListMyMembershipsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.auth.v1.ListMyMembershipsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.ListMyMembershipsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
query: (f = msg.getQuery()) && zitadel_object_pb.ListQuery.toObject(includeInstance, f),
queriesList: jspb.Message.toObjectList(msg.getQueriesList(),
    zitadel_user_pb.MembershipQuery.toObject, includeInstance)
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
 * @return {!proto.zitadel.auth.v1.ListMyMembershipsRequest}
 */
proto.zitadel.auth.v1.ListMyMembershipsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.auth.v1.ListMyMembershipsRequest;
  return proto.zitadel.auth.v1.ListMyMembershipsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.auth.v1.ListMyMembershipsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.auth.v1.ListMyMembershipsRequest}
 */
proto.zitadel.auth.v1.ListMyMembershipsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new zitadel_user_pb.MembershipQuery;
      reader.readMessage(value,zitadel_user_pb.MembershipQuery.deserializeBinaryFromReader);
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
proto.zitadel.auth.v1.ListMyMembershipsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.auth.v1.ListMyMembershipsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.auth.v1.ListMyMembershipsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.ListMyMembershipsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQuery();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_pb.ListQuery.serializeBinaryToWriter
    );
  }
  f = message.getQueriesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      zitadel_user_pb.MembershipQuery.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.v1.ListQuery query = 1;
 * @return {?proto.zitadel.v1.ListQuery}
 */
proto.zitadel.auth.v1.ListMyMembershipsRequest.prototype.getQuery = function() {
  return /** @type{?proto.zitadel.v1.ListQuery} */ (
    jspb.Message.getWrapperField(this, zitadel_object_pb.ListQuery, 1));
};


/**
 * @param {?proto.zitadel.v1.ListQuery|undefined} value
 * @return {!proto.zitadel.auth.v1.ListMyMembershipsRequest} returns this
*/
proto.zitadel.auth.v1.ListMyMembershipsRequest.prototype.setQuery = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.auth.v1.ListMyMembershipsRequest} returns this
 */
proto.zitadel.auth.v1.ListMyMembershipsRequest.prototype.clearQuery = function() {
  return this.setQuery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.auth.v1.ListMyMembershipsRequest.prototype.hasQuery = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated zitadel.user.v1.MembershipQuery queries = 2;
 * @return {!Array<!proto.zitadel.user.v1.MembershipQuery>}
 */
proto.zitadel.auth.v1.ListMyMembershipsRequest.prototype.getQueriesList = function() {
  return /** @type{!Array<!proto.zitadel.user.v1.MembershipQuery>} */ (
    jspb.Message.getRepeatedWrapperField(this, zitadel_user_pb.MembershipQuery, 2));
};


/**
 * @param {!Array<!proto.zitadel.user.v1.MembershipQuery>} value
 * @return {!proto.zitadel.auth.v1.ListMyMembershipsRequest} returns this
*/
proto.zitadel.auth.v1.ListMyMembershipsRequest.prototype.setQueriesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.zitadel.user.v1.MembershipQuery=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zitadel.user.v1.MembershipQuery}
 */
proto.zitadel.auth.v1.ListMyMembershipsRequest.prototype.addQueries = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.zitadel.user.v1.MembershipQuery, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.auth.v1.ListMyMembershipsRequest} returns this
 */
proto.zitadel.auth.v1.ListMyMembershipsRequest.prototype.clearQueriesList = function() {
  return this.setQueriesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.auth.v1.ListMyMembershipsResponse.repeatedFields_ = [2];



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
proto.zitadel.auth.v1.ListMyMembershipsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.auth.v1.ListMyMembershipsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.auth.v1.ListMyMembershipsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.ListMyMembershipsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_pb.ListDetails.toObject(includeInstance, f),
resultList: jspb.Message.toObjectList(msg.getResultList(),
    zitadel_user_pb.Membership.toObject, includeInstance)
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
 * @return {!proto.zitadel.auth.v1.ListMyMembershipsResponse}
 */
proto.zitadel.auth.v1.ListMyMembershipsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.auth.v1.ListMyMembershipsResponse;
  return proto.zitadel.auth.v1.ListMyMembershipsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.auth.v1.ListMyMembershipsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.auth.v1.ListMyMembershipsResponse}
 */
proto.zitadel.auth.v1.ListMyMembershipsResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new zitadel_user_pb.Membership;
      reader.readMessage(value,zitadel_user_pb.Membership.deserializeBinaryFromReader);
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
proto.zitadel.auth.v1.ListMyMembershipsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.auth.v1.ListMyMembershipsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.auth.v1.ListMyMembershipsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.ListMyMembershipsResponse.serializeBinaryToWriter = function(message, writer) {
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
      zitadel_user_pb.Membership.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.v1.ListDetails details = 1;
 * @return {?proto.zitadel.v1.ListDetails}
 */
proto.zitadel.auth.v1.ListMyMembershipsResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.v1.ListDetails} */ (
    jspb.Message.getWrapperField(this, zitadel_object_pb.ListDetails, 1));
};


/**
 * @param {?proto.zitadel.v1.ListDetails|undefined} value
 * @return {!proto.zitadel.auth.v1.ListMyMembershipsResponse} returns this
*/
proto.zitadel.auth.v1.ListMyMembershipsResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.auth.v1.ListMyMembershipsResponse} returns this
 */
proto.zitadel.auth.v1.ListMyMembershipsResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.auth.v1.ListMyMembershipsResponse.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated zitadel.user.v1.Membership result = 2;
 * @return {!Array<!proto.zitadel.user.v1.Membership>}
 */
proto.zitadel.auth.v1.ListMyMembershipsResponse.prototype.getResultList = function() {
  return /** @type{!Array<!proto.zitadel.user.v1.Membership>} */ (
    jspb.Message.getRepeatedWrapperField(this, zitadel_user_pb.Membership, 2));
};


/**
 * @param {!Array<!proto.zitadel.user.v1.Membership>} value
 * @return {!proto.zitadel.auth.v1.ListMyMembershipsResponse} returns this
*/
proto.zitadel.auth.v1.ListMyMembershipsResponse.prototype.setResultList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.zitadel.user.v1.Membership=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zitadel.user.v1.Membership}
 */
proto.zitadel.auth.v1.ListMyMembershipsResponse.prototype.addResult = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.zitadel.user.v1.Membership, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.auth.v1.ListMyMembershipsResponse} returns this
 */
proto.zitadel.auth.v1.ListMyMembershipsResponse.prototype.clearResultList = function() {
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
proto.zitadel.auth.v1.GetMyLabelPolicyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.auth.v1.GetMyLabelPolicyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.auth.v1.GetMyLabelPolicyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.GetMyLabelPolicyRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.auth.v1.GetMyLabelPolicyRequest}
 */
proto.zitadel.auth.v1.GetMyLabelPolicyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.auth.v1.GetMyLabelPolicyRequest;
  return proto.zitadel.auth.v1.GetMyLabelPolicyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.auth.v1.GetMyLabelPolicyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.auth.v1.GetMyLabelPolicyRequest}
 */
proto.zitadel.auth.v1.GetMyLabelPolicyRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.auth.v1.GetMyLabelPolicyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.auth.v1.GetMyLabelPolicyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.auth.v1.GetMyLabelPolicyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.GetMyLabelPolicyRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.auth.v1.GetMyLabelPolicyResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.auth.v1.GetMyLabelPolicyResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.auth.v1.GetMyLabelPolicyResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.GetMyLabelPolicyResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
policy: (f = msg.getPolicy()) && zitadel_policy_pb.LabelPolicy.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.auth.v1.GetMyLabelPolicyResponse}
 */
proto.zitadel.auth.v1.GetMyLabelPolicyResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.auth.v1.GetMyLabelPolicyResponse;
  return proto.zitadel.auth.v1.GetMyLabelPolicyResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.auth.v1.GetMyLabelPolicyResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.auth.v1.GetMyLabelPolicyResponse}
 */
proto.zitadel.auth.v1.GetMyLabelPolicyResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_policy_pb.LabelPolicy;
      reader.readMessage(value,zitadel_policy_pb.LabelPolicy.deserializeBinaryFromReader);
      msg.setPolicy(value);
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
proto.zitadel.auth.v1.GetMyLabelPolicyResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.auth.v1.GetMyLabelPolicyResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.auth.v1.GetMyLabelPolicyResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.GetMyLabelPolicyResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPolicy();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_policy_pb.LabelPolicy.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.policy.v1.LabelPolicy policy = 1;
 * @return {?proto.zitadel.policy.v1.LabelPolicy}
 */
proto.zitadel.auth.v1.GetMyLabelPolicyResponse.prototype.getPolicy = function() {
  return /** @type{?proto.zitadel.policy.v1.LabelPolicy} */ (
    jspb.Message.getWrapperField(this, zitadel_policy_pb.LabelPolicy, 1));
};


/**
 * @param {?proto.zitadel.policy.v1.LabelPolicy|undefined} value
 * @return {!proto.zitadel.auth.v1.GetMyLabelPolicyResponse} returns this
*/
proto.zitadel.auth.v1.GetMyLabelPolicyResponse.prototype.setPolicy = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.auth.v1.GetMyLabelPolicyResponse} returns this
 */
proto.zitadel.auth.v1.GetMyLabelPolicyResponse.prototype.clearPolicy = function() {
  return this.setPolicy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.auth.v1.GetMyLabelPolicyResponse.prototype.hasPolicy = function() {
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
proto.zitadel.auth.v1.GetMyPrivacyPolicyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.auth.v1.GetMyPrivacyPolicyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.auth.v1.GetMyPrivacyPolicyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.GetMyPrivacyPolicyRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.auth.v1.GetMyPrivacyPolicyRequest}
 */
proto.zitadel.auth.v1.GetMyPrivacyPolicyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.auth.v1.GetMyPrivacyPolicyRequest;
  return proto.zitadel.auth.v1.GetMyPrivacyPolicyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.auth.v1.GetMyPrivacyPolicyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.auth.v1.GetMyPrivacyPolicyRequest}
 */
proto.zitadel.auth.v1.GetMyPrivacyPolicyRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.auth.v1.GetMyPrivacyPolicyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.auth.v1.GetMyPrivacyPolicyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.auth.v1.GetMyPrivacyPolicyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.GetMyPrivacyPolicyRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.auth.v1.GetMyPrivacyPolicyResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.auth.v1.GetMyPrivacyPolicyResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.auth.v1.GetMyPrivacyPolicyResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.GetMyPrivacyPolicyResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
policy: (f = msg.getPolicy()) && zitadel_policy_pb.PrivacyPolicy.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.auth.v1.GetMyPrivacyPolicyResponse}
 */
proto.zitadel.auth.v1.GetMyPrivacyPolicyResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.auth.v1.GetMyPrivacyPolicyResponse;
  return proto.zitadel.auth.v1.GetMyPrivacyPolicyResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.auth.v1.GetMyPrivacyPolicyResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.auth.v1.GetMyPrivacyPolicyResponse}
 */
proto.zitadel.auth.v1.GetMyPrivacyPolicyResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_policy_pb.PrivacyPolicy;
      reader.readMessage(value,zitadel_policy_pb.PrivacyPolicy.deserializeBinaryFromReader);
      msg.setPolicy(value);
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
proto.zitadel.auth.v1.GetMyPrivacyPolicyResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.auth.v1.GetMyPrivacyPolicyResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.auth.v1.GetMyPrivacyPolicyResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.GetMyPrivacyPolicyResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPolicy();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_policy_pb.PrivacyPolicy.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.policy.v1.PrivacyPolicy policy = 1;
 * @return {?proto.zitadel.policy.v1.PrivacyPolicy}
 */
proto.zitadel.auth.v1.GetMyPrivacyPolicyResponse.prototype.getPolicy = function() {
  return /** @type{?proto.zitadel.policy.v1.PrivacyPolicy} */ (
    jspb.Message.getWrapperField(this, zitadel_policy_pb.PrivacyPolicy, 1));
};


/**
 * @param {?proto.zitadel.policy.v1.PrivacyPolicy|undefined} value
 * @return {!proto.zitadel.auth.v1.GetMyPrivacyPolicyResponse} returns this
*/
proto.zitadel.auth.v1.GetMyPrivacyPolicyResponse.prototype.setPolicy = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.auth.v1.GetMyPrivacyPolicyResponse} returns this
 */
proto.zitadel.auth.v1.GetMyPrivacyPolicyResponse.prototype.clearPolicy = function() {
  return this.setPolicy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.auth.v1.GetMyPrivacyPolicyResponse.prototype.hasPolicy = function() {
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
proto.zitadel.auth.v1.GetMyLoginPolicyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.auth.v1.GetMyLoginPolicyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.auth.v1.GetMyLoginPolicyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.GetMyLoginPolicyRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.auth.v1.GetMyLoginPolicyRequest}
 */
proto.zitadel.auth.v1.GetMyLoginPolicyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.auth.v1.GetMyLoginPolicyRequest;
  return proto.zitadel.auth.v1.GetMyLoginPolicyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.auth.v1.GetMyLoginPolicyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.auth.v1.GetMyLoginPolicyRequest}
 */
proto.zitadel.auth.v1.GetMyLoginPolicyRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.auth.v1.GetMyLoginPolicyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.auth.v1.GetMyLoginPolicyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.auth.v1.GetMyLoginPolicyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.GetMyLoginPolicyRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.auth.v1.GetMyLoginPolicyResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.auth.v1.GetMyLoginPolicyResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.auth.v1.GetMyLoginPolicyResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.GetMyLoginPolicyResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
policy: (f = msg.getPolicy()) && zitadel_policy_pb.LoginPolicy.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.auth.v1.GetMyLoginPolicyResponse}
 */
proto.zitadel.auth.v1.GetMyLoginPolicyResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.auth.v1.GetMyLoginPolicyResponse;
  return proto.zitadel.auth.v1.GetMyLoginPolicyResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.auth.v1.GetMyLoginPolicyResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.auth.v1.GetMyLoginPolicyResponse}
 */
proto.zitadel.auth.v1.GetMyLoginPolicyResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_policy_pb.LoginPolicy;
      reader.readMessage(value,zitadel_policy_pb.LoginPolicy.deserializeBinaryFromReader);
      msg.setPolicy(value);
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
proto.zitadel.auth.v1.GetMyLoginPolicyResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.auth.v1.GetMyLoginPolicyResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.auth.v1.GetMyLoginPolicyResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.auth.v1.GetMyLoginPolicyResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPolicy();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_policy_pb.LoginPolicy.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.policy.v1.LoginPolicy policy = 1;
 * @return {?proto.zitadel.policy.v1.LoginPolicy}
 */
proto.zitadel.auth.v1.GetMyLoginPolicyResponse.prototype.getPolicy = function() {
  return /** @type{?proto.zitadel.policy.v1.LoginPolicy} */ (
    jspb.Message.getWrapperField(this, zitadel_policy_pb.LoginPolicy, 1));
};


/**
 * @param {?proto.zitadel.policy.v1.LoginPolicy|undefined} value
 * @return {!proto.zitadel.auth.v1.GetMyLoginPolicyResponse} returns this
*/
proto.zitadel.auth.v1.GetMyLoginPolicyResponse.prototype.setPolicy = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.auth.v1.GetMyLoginPolicyResponse} returns this
 */
proto.zitadel.auth.v1.GetMyLoginPolicyResponse.prototype.clearPolicy = function() {
  return this.setPolicy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.auth.v1.GetMyLoginPolicyResponse.prototype.hasPolicy = function() {
  return jspb.Message.getField(this, 1) != null;
};


goog.object.extend(exports, proto.zitadel.auth.v1);
