// source: zitadel/user/v2/user_service.proto
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

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
var google_api_field_behavior_pb = require('../../../google/api/field_behavior_pb.js');
goog.object.extend(proto, google_api_field_behavior_pb);
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
goog.object.extend(proto, google_protobuf_duration_pb);
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
goog.object.extend(proto, google_protobuf_struct_pb);
var protoc$gen$openapiv2_options_annotations_pb = require('../../../protoc-gen-openapiv2/options/annotations_pb.js');
goog.object.extend(proto, protoc$gen$openapiv2_options_annotations_pb);
var validate_validate_pb = require('../../../validate/validate_pb.js');
goog.object.extend(proto, validate_validate_pb);
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
var zitadel_user_v2_key_pb = require('../../../zitadel/user/v2/key_pb.js');
goog.object.extend(proto, zitadel_user_v2_key_pb);
var zitadel_user_v2_pat_pb = require('../../../zitadel/user/v2/pat_pb.js');
goog.object.extend(proto, zitadel_user_v2_pat_pb);
var zitadel_user_v2_query_pb = require('../../../zitadel/user/v2/query_pb.js');
goog.object.extend(proto, zitadel_user_v2_query_pb);
var zitadel_filter_v2_filter_pb = require('../../../zitadel/filter/v2/filter_pb.js');
goog.object.extend(proto, zitadel_filter_v2_filter_pb);
var zitadel_metadata_v2_metadata_pb = require('../../../zitadel/metadata/v2/metadata_pb.js');
goog.object.extend(proto, zitadel_metadata_v2_metadata_pb);
goog.exportSymbol('proto.zitadel.user.v2.AddHumanUserRequest', null, global);
goog.exportSymbol('proto.zitadel.user.v2.AddHumanUserRequest.PasswordTypeCase', null, global);
goog.exportSymbol('proto.zitadel.user.v2.AddHumanUserResponse', null, global);
goog.exportSymbol('proto.zitadel.user.v2.AddIDPLinkRequest', null, global);
goog.exportSymbol('proto.zitadel.user.v2.AddIDPLinkResponse', null, global);
goog.exportSymbol('proto.zitadel.user.v2.AddKeyRequest', null, global);
goog.exportSymbol('proto.zitadel.user.v2.AddKeyResponse', null, global);
goog.exportSymbol('proto.zitadel.user.v2.AddOTPEmailRequest', null, global);
goog.exportSymbol('proto.zitadel.user.v2.AddOTPEmailResponse', null, global);
goog.exportSymbol('proto.zitadel.user.v2.AddOTPSMSRequest', null, global);
goog.exportSymbol('proto.zitadel.user.v2.AddOTPSMSResponse', null, global);
goog.exportSymbol('proto.zitadel.user.v2.AddPersonalAccessTokenRequest', null, global);
goog.exportSymbol('proto.zitadel.user.v2.AddPersonalAccessTokenResponse', null, global);
goog.exportSymbol('proto.zitadel.user.v2.AddSecretRequest', null, global);
goog.exportSymbol('proto.zitadel.user.v2.AddSecretResponse', null, global);
goog.exportSymbol('proto.zitadel.user.v2.AuthFactors', null, global);
goog.exportSymbol('proto.zitadel.user.v2.AuthenticationMethodType', null, global);
goog.exportSymbol('proto.zitadel.user.v2.CreateInviteCodeRequest', null, global);
goog.exportSymbol('proto.zitadel.user.v2.CreateInviteCodeRequest.VerificationCase', null, global);
goog.exportSymbol('proto.zitadel.user.v2.CreateInviteCodeResponse', null, global);
goog.exportSymbol('proto.zitadel.user.v2.CreatePasskeyRegistrationLinkRequest', null, global);
goog.exportSymbol('proto.zitadel.user.v2.CreatePasskeyRegistrationLinkRequest.MediumCase', null, global);
goog.exportSymbol('proto.zitadel.user.v2.CreatePasskeyRegistrationLinkResponse', null, global);
goog.exportSymbol('proto.zitadel.user.v2.CreateUserRequest', null, global);
goog.exportSymbol('proto.zitadel.user.v2.CreateUserRequest.Human', null, global);
goog.exportSymbol('proto.zitadel.user.v2.CreateUserRequest.Human.PasswordTypeCase', null, global);
goog.exportSymbol('proto.zitadel.user.v2.CreateUserRequest.Machine', null, global);
goog.exportSymbol('proto.zitadel.user.v2.CreateUserRequest.UserTypeCase', null, global);
goog.exportSymbol('proto.zitadel.user.v2.CreateUserResponse', null, global);
goog.exportSymbol('proto.zitadel.user.v2.DeactivateUserRequest', null, global);
goog.exportSymbol('proto.zitadel.user.v2.DeactivateUserResponse', null, global);
goog.exportSymbol('proto.zitadel.user.v2.DeleteUserMetadataRequest', null, global);
goog.exportSymbol('proto.zitadel.user.v2.DeleteUserMetadataResponse', null, global);
goog.exportSymbol('proto.zitadel.user.v2.DeleteUserRequest', null, global);
goog.exportSymbol('proto.zitadel.user.v2.DeleteUserResponse', null, global);
goog.exportSymbol('proto.zitadel.user.v2.DomainQuery', null, global);
goog.exportSymbol('proto.zitadel.user.v2.GenerateRecoveryCodesRequest', null, global);
goog.exportSymbol('proto.zitadel.user.v2.GenerateRecoveryCodesResponse', null, global);
goog.exportSymbol('proto.zitadel.user.v2.GetUserByIDRequest', null, global);
goog.exportSymbol('proto.zitadel.user.v2.GetUserByIDResponse', null, global);
goog.exportSymbol('proto.zitadel.user.v2.HumanMFAInitSkippedRequest', null, global);
goog.exportSymbol('proto.zitadel.user.v2.HumanMFAInitSkippedResponse', null, global);
goog.exportSymbol('proto.zitadel.user.v2.ListAuthenticationFactorsRequest', null, global);
goog.exportSymbol('proto.zitadel.user.v2.ListAuthenticationFactorsResponse', null, global);
goog.exportSymbol('proto.zitadel.user.v2.ListAuthenticationMethodTypesRequest', null, global);
goog.exportSymbol('proto.zitadel.user.v2.ListAuthenticationMethodTypesResponse', null, global);
goog.exportSymbol('proto.zitadel.user.v2.ListIDPLinksRequest', null, global);
goog.exportSymbol('proto.zitadel.user.v2.ListIDPLinksResponse', null, global);
goog.exportSymbol('proto.zitadel.user.v2.ListKeysRequest', null, global);
goog.exportSymbol('proto.zitadel.user.v2.ListKeysResponse', null, global);
goog.exportSymbol('proto.zitadel.user.v2.ListPasskeysRequest', null, global);
goog.exportSymbol('proto.zitadel.user.v2.ListPasskeysResponse', null, global);
goog.exportSymbol('proto.zitadel.user.v2.ListPersonalAccessTokensRequest', null, global);
goog.exportSymbol('proto.zitadel.user.v2.ListPersonalAccessTokensResponse', null, global);
goog.exportSymbol('proto.zitadel.user.v2.ListUserMetadataRequest', null, global);
goog.exportSymbol('proto.zitadel.user.v2.ListUserMetadataResponse', null, global);
goog.exportSymbol('proto.zitadel.user.v2.ListUsersRequest', null, global);
goog.exportSymbol('proto.zitadel.user.v2.ListUsersResponse', null, global);
goog.exportSymbol('proto.zitadel.user.v2.LockUserRequest', null, global);
goog.exportSymbol('proto.zitadel.user.v2.LockUserResponse', null, global);
goog.exportSymbol('proto.zitadel.user.v2.Metadata', null, global);
goog.exportSymbol('proto.zitadel.user.v2.PasswordResetRequest', null, global);
goog.exportSymbol('proto.zitadel.user.v2.PasswordResetRequest.MediumCase', null, global);
goog.exportSymbol('proto.zitadel.user.v2.PasswordResetResponse', null, global);
goog.exportSymbol('proto.zitadel.user.v2.ReactivateUserRequest', null, global);
goog.exportSymbol('proto.zitadel.user.v2.ReactivateUserResponse', null, global);
goog.exportSymbol('proto.zitadel.user.v2.RegisterPasskeyRequest', null, global);
goog.exportSymbol('proto.zitadel.user.v2.RegisterPasskeyResponse', null, global);
goog.exportSymbol('proto.zitadel.user.v2.RegisterTOTPRequest', null, global);
goog.exportSymbol('proto.zitadel.user.v2.RegisterTOTPResponse', null, global);
goog.exportSymbol('proto.zitadel.user.v2.RegisterU2FRequest', null, global);
goog.exportSymbol('proto.zitadel.user.v2.RegisterU2FResponse', null, global);
goog.exportSymbol('proto.zitadel.user.v2.RemoveIDPLinkRequest', null, global);
goog.exportSymbol('proto.zitadel.user.v2.RemoveIDPLinkResponse', null, global);
goog.exportSymbol('proto.zitadel.user.v2.RemoveKeyRequest', null, global);
goog.exportSymbol('proto.zitadel.user.v2.RemoveKeyResponse', null, global);
goog.exportSymbol('proto.zitadel.user.v2.RemoveOTPEmailRequest', null, global);
goog.exportSymbol('proto.zitadel.user.v2.RemoveOTPEmailResponse', null, global);
goog.exportSymbol('proto.zitadel.user.v2.RemoveOTPSMSRequest', null, global);
goog.exportSymbol('proto.zitadel.user.v2.RemoveOTPSMSResponse', null, global);
goog.exportSymbol('proto.zitadel.user.v2.RemovePasskeyRequest', null, global);
goog.exportSymbol('proto.zitadel.user.v2.RemovePasskeyResponse', null, global);
goog.exportSymbol('proto.zitadel.user.v2.RemovePersonalAccessTokenRequest', null, global);
goog.exportSymbol('proto.zitadel.user.v2.RemovePersonalAccessTokenResponse', null, global);
goog.exportSymbol('proto.zitadel.user.v2.RemovePhoneRequest', null, global);
goog.exportSymbol('proto.zitadel.user.v2.RemovePhoneResponse', null, global);
goog.exportSymbol('proto.zitadel.user.v2.RemoveRecoveryCodesRequest', null, global);
goog.exportSymbol('proto.zitadel.user.v2.RemoveRecoveryCodesResponse', null, global);
goog.exportSymbol('proto.zitadel.user.v2.RemoveSecretRequest', null, global);
goog.exportSymbol('proto.zitadel.user.v2.RemoveSecretResponse', null, global);
goog.exportSymbol('proto.zitadel.user.v2.RemoveTOTPRequest', null, global);
goog.exportSymbol('proto.zitadel.user.v2.RemoveTOTPResponse', null, global);
goog.exportSymbol('proto.zitadel.user.v2.RemoveU2FRequest', null, global);
goog.exportSymbol('proto.zitadel.user.v2.RemoveU2FResponse', null, global);
goog.exportSymbol('proto.zitadel.user.v2.ResendEmailCodeRequest', null, global);
goog.exportSymbol('proto.zitadel.user.v2.ResendEmailCodeRequest.VerificationCase', null, global);
goog.exportSymbol('proto.zitadel.user.v2.ResendEmailCodeResponse', null, global);
goog.exportSymbol('proto.zitadel.user.v2.ResendInviteCodeRequest', null, global);
goog.exportSymbol('proto.zitadel.user.v2.ResendInviteCodeResponse', null, global);
goog.exportSymbol('proto.zitadel.user.v2.ResendPhoneCodeRequest', null, global);
goog.exportSymbol('proto.zitadel.user.v2.ResendPhoneCodeRequest.VerificationCase', null, global);
goog.exportSymbol('proto.zitadel.user.v2.ResendPhoneCodeResponse', null, global);
goog.exportSymbol('proto.zitadel.user.v2.RetrieveIdentityProviderIntentRequest', null, global);
goog.exportSymbol('proto.zitadel.user.v2.RetrieveIdentityProviderIntentResponse', null, global);
goog.exportSymbol('proto.zitadel.user.v2.SendEmailCodeRequest', null, global);
goog.exportSymbol('proto.zitadel.user.v2.SendEmailCodeRequest.VerificationCase', null, global);
goog.exportSymbol('proto.zitadel.user.v2.SendEmailCodeResponse', null, global);
goog.exportSymbol('proto.zitadel.user.v2.SetEmailRequest', null, global);
goog.exportSymbol('proto.zitadel.user.v2.SetEmailRequest.VerificationCase', null, global);
goog.exportSymbol('proto.zitadel.user.v2.SetEmailResponse', null, global);
goog.exportSymbol('proto.zitadel.user.v2.SetPasswordRequest', null, global);
goog.exportSymbol('proto.zitadel.user.v2.SetPasswordRequest.VerificationCase', null, global);
goog.exportSymbol('proto.zitadel.user.v2.SetPasswordResponse', null, global);
goog.exportSymbol('proto.zitadel.user.v2.SetPhoneRequest', null, global);
goog.exportSymbol('proto.zitadel.user.v2.SetPhoneRequest.VerificationCase', null, global);
goog.exportSymbol('proto.zitadel.user.v2.SetPhoneResponse', null, global);
goog.exportSymbol('proto.zitadel.user.v2.SetUserMetadataRequest', null, global);
goog.exportSymbol('proto.zitadel.user.v2.SetUserMetadataResponse', null, global);
goog.exportSymbol('proto.zitadel.user.v2.StartIdentityProviderIntentRequest', null, global);
goog.exportSymbol('proto.zitadel.user.v2.StartIdentityProviderIntentRequest.ContentCase', null, global);
goog.exportSymbol('proto.zitadel.user.v2.StartIdentityProviderIntentResponse', null, global);
goog.exportSymbol('proto.zitadel.user.v2.StartIdentityProviderIntentResponse.NextStepCase', null, global);
goog.exportSymbol('proto.zitadel.user.v2.UnlockUserRequest', null, global);
goog.exportSymbol('proto.zitadel.user.v2.UnlockUserResponse', null, global);
goog.exportSymbol('proto.zitadel.user.v2.UpdateHumanUserRequest', null, global);
goog.exportSymbol('proto.zitadel.user.v2.UpdateHumanUserResponse', null, global);
goog.exportSymbol('proto.zitadel.user.v2.UpdateUserRequest', null, global);
goog.exportSymbol('proto.zitadel.user.v2.UpdateUserRequest.Human', null, global);
goog.exportSymbol('proto.zitadel.user.v2.UpdateUserRequest.Human.Profile', null, global);
goog.exportSymbol('proto.zitadel.user.v2.UpdateUserRequest.Machine', null, global);
goog.exportSymbol('proto.zitadel.user.v2.UpdateUserRequest.UserTypeCase', null, global);
goog.exportSymbol('proto.zitadel.user.v2.UpdateUserResponse', null, global);
goog.exportSymbol('proto.zitadel.user.v2.VerifyEmailRequest', null, global);
goog.exportSymbol('proto.zitadel.user.v2.VerifyEmailResponse', null, global);
goog.exportSymbol('proto.zitadel.user.v2.VerifyInviteCodeRequest', null, global);
goog.exportSymbol('proto.zitadel.user.v2.VerifyInviteCodeResponse', null, global);
goog.exportSymbol('proto.zitadel.user.v2.VerifyPasskeyRegistrationRequest', null, global);
goog.exportSymbol('proto.zitadel.user.v2.VerifyPasskeyRegistrationResponse', null, global);
goog.exportSymbol('proto.zitadel.user.v2.VerifyPhoneRequest', null, global);
goog.exportSymbol('proto.zitadel.user.v2.VerifyPhoneResponse', null, global);
goog.exportSymbol('proto.zitadel.user.v2.VerifyTOTPRegistrationRequest', null, global);
goog.exportSymbol('proto.zitadel.user.v2.VerifyTOTPRegistrationResponse', null, global);
goog.exportSymbol('proto.zitadel.user.v2.VerifyU2FRegistrationRequest', null, global);
goog.exportSymbol('proto.zitadel.user.v2.VerifyU2FRegistrationResponse', null, global);
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
proto.zitadel.user.v2.AddHumanUserRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.user.v2.AddHumanUserRequest.repeatedFields_, proto.zitadel.user.v2.AddHumanUserRequest.oneofGroups_);
};
goog.inherits(proto.zitadel.user.v2.AddHumanUserRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.AddHumanUserRequest.displayName = 'proto.zitadel.user.v2.AddHumanUserRequest';
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
proto.zitadel.user.v2.AddHumanUserResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2.AddHumanUserResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.AddHumanUserResponse.displayName = 'proto.zitadel.user.v2.AddHumanUserResponse';
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
proto.zitadel.user.v2.CreateUserRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.zitadel.user.v2.CreateUserRequest.oneofGroups_);
};
goog.inherits(proto.zitadel.user.v2.CreateUserRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.CreateUserRequest.displayName = 'proto.zitadel.user.v2.CreateUserRequest';
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
proto.zitadel.user.v2.CreateUserRequest.Human = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.user.v2.CreateUserRequest.Human.repeatedFields_, proto.zitadel.user.v2.CreateUserRequest.Human.oneofGroups_);
};
goog.inherits(proto.zitadel.user.v2.CreateUserRequest.Human, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.CreateUserRequest.Human.displayName = 'proto.zitadel.user.v2.CreateUserRequest.Human';
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
proto.zitadel.user.v2.CreateUserRequest.Machine = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2.CreateUserRequest.Machine, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.CreateUserRequest.Machine.displayName = 'proto.zitadel.user.v2.CreateUserRequest.Machine';
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
proto.zitadel.user.v2.CreateUserResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2.CreateUserResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.CreateUserResponse.displayName = 'proto.zitadel.user.v2.CreateUserResponse';
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
proto.zitadel.user.v2.GetUserByIDRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2.GetUserByIDRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.GetUserByIDRequest.displayName = 'proto.zitadel.user.v2.GetUserByIDRequest';
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
proto.zitadel.user.v2.GetUserByIDResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2.GetUserByIDResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.GetUserByIDResponse.displayName = 'proto.zitadel.user.v2.GetUserByIDResponse';
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
proto.zitadel.user.v2.ListUsersRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.user.v2.ListUsersRequest.repeatedFields_, null);
};
goog.inherits(proto.zitadel.user.v2.ListUsersRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.ListUsersRequest.displayName = 'proto.zitadel.user.v2.ListUsersRequest';
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
proto.zitadel.user.v2.ListUsersResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.user.v2.ListUsersResponse.repeatedFields_, null);
};
goog.inherits(proto.zitadel.user.v2.ListUsersResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.ListUsersResponse.displayName = 'proto.zitadel.user.v2.ListUsersResponse';
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
proto.zitadel.user.v2.SetEmailRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.zitadel.user.v2.SetEmailRequest.oneofGroups_);
};
goog.inherits(proto.zitadel.user.v2.SetEmailRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.SetEmailRequest.displayName = 'proto.zitadel.user.v2.SetEmailRequest';
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
proto.zitadel.user.v2.SetEmailResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2.SetEmailResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.SetEmailResponse.displayName = 'proto.zitadel.user.v2.SetEmailResponse';
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
proto.zitadel.user.v2.ResendEmailCodeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.zitadel.user.v2.ResendEmailCodeRequest.oneofGroups_);
};
goog.inherits(proto.zitadel.user.v2.ResendEmailCodeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.ResendEmailCodeRequest.displayName = 'proto.zitadel.user.v2.ResendEmailCodeRequest';
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
proto.zitadel.user.v2.ResendEmailCodeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2.ResendEmailCodeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.ResendEmailCodeResponse.displayName = 'proto.zitadel.user.v2.ResendEmailCodeResponse';
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
proto.zitadel.user.v2.SendEmailCodeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.zitadel.user.v2.SendEmailCodeRequest.oneofGroups_);
};
goog.inherits(proto.zitadel.user.v2.SendEmailCodeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.SendEmailCodeRequest.displayName = 'proto.zitadel.user.v2.SendEmailCodeRequest';
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
proto.zitadel.user.v2.SendEmailCodeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2.SendEmailCodeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.SendEmailCodeResponse.displayName = 'proto.zitadel.user.v2.SendEmailCodeResponse';
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
proto.zitadel.user.v2.VerifyEmailRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2.VerifyEmailRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.VerifyEmailRequest.displayName = 'proto.zitadel.user.v2.VerifyEmailRequest';
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
proto.zitadel.user.v2.VerifyEmailResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2.VerifyEmailResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.VerifyEmailResponse.displayName = 'proto.zitadel.user.v2.VerifyEmailResponse';
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
proto.zitadel.user.v2.SetPhoneRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.zitadel.user.v2.SetPhoneRequest.oneofGroups_);
};
goog.inherits(proto.zitadel.user.v2.SetPhoneRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.SetPhoneRequest.displayName = 'proto.zitadel.user.v2.SetPhoneRequest';
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
proto.zitadel.user.v2.SetPhoneResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2.SetPhoneResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.SetPhoneResponse.displayName = 'proto.zitadel.user.v2.SetPhoneResponse';
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
proto.zitadel.user.v2.RemovePhoneRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2.RemovePhoneRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.RemovePhoneRequest.displayName = 'proto.zitadel.user.v2.RemovePhoneRequest';
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
proto.zitadel.user.v2.RemovePhoneResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2.RemovePhoneResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.RemovePhoneResponse.displayName = 'proto.zitadel.user.v2.RemovePhoneResponse';
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
proto.zitadel.user.v2.ResendPhoneCodeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.zitadel.user.v2.ResendPhoneCodeRequest.oneofGroups_);
};
goog.inherits(proto.zitadel.user.v2.ResendPhoneCodeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.ResendPhoneCodeRequest.displayName = 'proto.zitadel.user.v2.ResendPhoneCodeRequest';
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
proto.zitadel.user.v2.ResendPhoneCodeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2.ResendPhoneCodeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.ResendPhoneCodeResponse.displayName = 'proto.zitadel.user.v2.ResendPhoneCodeResponse';
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
proto.zitadel.user.v2.VerifyPhoneRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2.VerifyPhoneRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.VerifyPhoneRequest.displayName = 'proto.zitadel.user.v2.VerifyPhoneRequest';
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
proto.zitadel.user.v2.VerifyPhoneResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2.VerifyPhoneResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.VerifyPhoneResponse.displayName = 'proto.zitadel.user.v2.VerifyPhoneResponse';
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
proto.zitadel.user.v2.DeleteUserRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2.DeleteUserRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.DeleteUserRequest.displayName = 'proto.zitadel.user.v2.DeleteUserRequest';
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
proto.zitadel.user.v2.DeleteUserResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2.DeleteUserResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.DeleteUserResponse.displayName = 'proto.zitadel.user.v2.DeleteUserResponse';
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
proto.zitadel.user.v2.UpdateUserRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.zitadel.user.v2.UpdateUserRequest.oneofGroups_);
};
goog.inherits(proto.zitadel.user.v2.UpdateUserRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.UpdateUserRequest.displayName = 'proto.zitadel.user.v2.UpdateUserRequest';
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
proto.zitadel.user.v2.UpdateUserRequest.Human = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2.UpdateUserRequest.Human, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.UpdateUserRequest.Human.displayName = 'proto.zitadel.user.v2.UpdateUserRequest.Human';
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
proto.zitadel.user.v2.UpdateUserRequest.Human.Profile = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2.UpdateUserRequest.Human.Profile, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.UpdateUserRequest.Human.Profile.displayName = 'proto.zitadel.user.v2.UpdateUserRequest.Human.Profile';
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
proto.zitadel.user.v2.UpdateUserRequest.Machine = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2.UpdateUserRequest.Machine, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.UpdateUserRequest.Machine.displayName = 'proto.zitadel.user.v2.UpdateUserRequest.Machine';
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
proto.zitadel.user.v2.UpdateUserResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2.UpdateUserResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.UpdateUserResponse.displayName = 'proto.zitadel.user.v2.UpdateUserResponse';
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
proto.zitadel.user.v2.UpdateHumanUserRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2.UpdateHumanUserRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.UpdateHumanUserRequest.displayName = 'proto.zitadel.user.v2.UpdateHumanUserRequest';
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
proto.zitadel.user.v2.UpdateHumanUserResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2.UpdateHumanUserResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.UpdateHumanUserResponse.displayName = 'proto.zitadel.user.v2.UpdateHumanUserResponse';
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
proto.zitadel.user.v2.DeactivateUserRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2.DeactivateUserRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.DeactivateUserRequest.displayName = 'proto.zitadel.user.v2.DeactivateUserRequest';
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
proto.zitadel.user.v2.DeactivateUserResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2.DeactivateUserResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.DeactivateUserResponse.displayName = 'proto.zitadel.user.v2.DeactivateUserResponse';
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
proto.zitadel.user.v2.ReactivateUserRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2.ReactivateUserRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.ReactivateUserRequest.displayName = 'proto.zitadel.user.v2.ReactivateUserRequest';
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
proto.zitadel.user.v2.ReactivateUserResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2.ReactivateUserResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.ReactivateUserResponse.displayName = 'proto.zitadel.user.v2.ReactivateUserResponse';
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
proto.zitadel.user.v2.LockUserRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2.LockUserRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.LockUserRequest.displayName = 'proto.zitadel.user.v2.LockUserRequest';
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
proto.zitadel.user.v2.LockUserResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2.LockUserResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.LockUserResponse.displayName = 'proto.zitadel.user.v2.LockUserResponse';
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
proto.zitadel.user.v2.UnlockUserRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2.UnlockUserRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.UnlockUserRequest.displayName = 'proto.zitadel.user.v2.UnlockUserRequest';
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
proto.zitadel.user.v2.UnlockUserResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2.UnlockUserResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.UnlockUserResponse.displayName = 'proto.zitadel.user.v2.UnlockUserResponse';
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
proto.zitadel.user.v2.RegisterPasskeyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2.RegisterPasskeyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.RegisterPasskeyRequest.displayName = 'proto.zitadel.user.v2.RegisterPasskeyRequest';
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
proto.zitadel.user.v2.RegisterPasskeyResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2.RegisterPasskeyResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.RegisterPasskeyResponse.displayName = 'proto.zitadel.user.v2.RegisterPasskeyResponse';
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
proto.zitadel.user.v2.VerifyPasskeyRegistrationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2.VerifyPasskeyRegistrationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.VerifyPasskeyRegistrationRequest.displayName = 'proto.zitadel.user.v2.VerifyPasskeyRegistrationRequest';
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
proto.zitadel.user.v2.VerifyPasskeyRegistrationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2.VerifyPasskeyRegistrationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.VerifyPasskeyRegistrationResponse.displayName = 'proto.zitadel.user.v2.VerifyPasskeyRegistrationResponse';
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
proto.zitadel.user.v2.RegisterU2FRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2.RegisterU2FRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.RegisterU2FRequest.displayName = 'proto.zitadel.user.v2.RegisterU2FRequest';
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
proto.zitadel.user.v2.RegisterU2FResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2.RegisterU2FResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.RegisterU2FResponse.displayName = 'proto.zitadel.user.v2.RegisterU2FResponse';
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
proto.zitadel.user.v2.VerifyU2FRegistrationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2.VerifyU2FRegistrationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.VerifyU2FRegistrationRequest.displayName = 'proto.zitadel.user.v2.VerifyU2FRegistrationRequest';
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
proto.zitadel.user.v2.VerifyU2FRegistrationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2.VerifyU2FRegistrationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.VerifyU2FRegistrationResponse.displayName = 'proto.zitadel.user.v2.VerifyU2FRegistrationResponse';
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
proto.zitadel.user.v2.RemoveU2FRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2.RemoveU2FRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.RemoveU2FRequest.displayName = 'proto.zitadel.user.v2.RemoveU2FRequest';
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
proto.zitadel.user.v2.RemoveU2FResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2.RemoveU2FResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.RemoveU2FResponse.displayName = 'proto.zitadel.user.v2.RemoveU2FResponse';
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
proto.zitadel.user.v2.RegisterTOTPRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2.RegisterTOTPRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.RegisterTOTPRequest.displayName = 'proto.zitadel.user.v2.RegisterTOTPRequest';
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
proto.zitadel.user.v2.RegisterTOTPResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2.RegisterTOTPResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.RegisterTOTPResponse.displayName = 'proto.zitadel.user.v2.RegisterTOTPResponse';
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
proto.zitadel.user.v2.VerifyTOTPRegistrationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2.VerifyTOTPRegistrationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.VerifyTOTPRegistrationRequest.displayName = 'proto.zitadel.user.v2.VerifyTOTPRegistrationRequest';
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
proto.zitadel.user.v2.VerifyTOTPRegistrationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2.VerifyTOTPRegistrationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.VerifyTOTPRegistrationResponse.displayName = 'proto.zitadel.user.v2.VerifyTOTPRegistrationResponse';
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
proto.zitadel.user.v2.RemoveTOTPRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2.RemoveTOTPRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.RemoveTOTPRequest.displayName = 'proto.zitadel.user.v2.RemoveTOTPRequest';
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
proto.zitadel.user.v2.RemoveTOTPResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2.RemoveTOTPResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.RemoveTOTPResponse.displayName = 'proto.zitadel.user.v2.RemoveTOTPResponse';
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
proto.zitadel.user.v2.GenerateRecoveryCodesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2.GenerateRecoveryCodesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.GenerateRecoveryCodesRequest.displayName = 'proto.zitadel.user.v2.GenerateRecoveryCodesRequest';
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
proto.zitadel.user.v2.GenerateRecoveryCodesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.user.v2.GenerateRecoveryCodesResponse.repeatedFields_, null);
};
goog.inherits(proto.zitadel.user.v2.GenerateRecoveryCodesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.GenerateRecoveryCodesResponse.displayName = 'proto.zitadel.user.v2.GenerateRecoveryCodesResponse';
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
proto.zitadel.user.v2.RemoveRecoveryCodesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2.RemoveRecoveryCodesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.RemoveRecoveryCodesRequest.displayName = 'proto.zitadel.user.v2.RemoveRecoveryCodesRequest';
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
proto.zitadel.user.v2.RemoveRecoveryCodesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2.RemoveRecoveryCodesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.RemoveRecoveryCodesResponse.displayName = 'proto.zitadel.user.v2.RemoveRecoveryCodesResponse';
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
proto.zitadel.user.v2.AddOTPSMSRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2.AddOTPSMSRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.AddOTPSMSRequest.displayName = 'proto.zitadel.user.v2.AddOTPSMSRequest';
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
proto.zitadel.user.v2.AddOTPSMSResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2.AddOTPSMSResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.AddOTPSMSResponse.displayName = 'proto.zitadel.user.v2.AddOTPSMSResponse';
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
proto.zitadel.user.v2.RemoveOTPSMSRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2.RemoveOTPSMSRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.RemoveOTPSMSRequest.displayName = 'proto.zitadel.user.v2.RemoveOTPSMSRequest';
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
proto.zitadel.user.v2.RemoveOTPSMSResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2.RemoveOTPSMSResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.RemoveOTPSMSResponse.displayName = 'proto.zitadel.user.v2.RemoveOTPSMSResponse';
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
proto.zitadel.user.v2.AddOTPEmailRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2.AddOTPEmailRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.AddOTPEmailRequest.displayName = 'proto.zitadel.user.v2.AddOTPEmailRequest';
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
proto.zitadel.user.v2.AddOTPEmailResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2.AddOTPEmailResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.AddOTPEmailResponse.displayName = 'proto.zitadel.user.v2.AddOTPEmailResponse';
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
proto.zitadel.user.v2.RemoveOTPEmailRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2.RemoveOTPEmailRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.RemoveOTPEmailRequest.displayName = 'proto.zitadel.user.v2.RemoveOTPEmailRequest';
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
proto.zitadel.user.v2.RemoveOTPEmailResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2.RemoveOTPEmailResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.RemoveOTPEmailResponse.displayName = 'proto.zitadel.user.v2.RemoveOTPEmailResponse';
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
proto.zitadel.user.v2.CreatePasskeyRegistrationLinkRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.zitadel.user.v2.CreatePasskeyRegistrationLinkRequest.oneofGroups_);
};
goog.inherits(proto.zitadel.user.v2.CreatePasskeyRegistrationLinkRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.CreatePasskeyRegistrationLinkRequest.displayName = 'proto.zitadel.user.v2.CreatePasskeyRegistrationLinkRequest';
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
proto.zitadel.user.v2.CreatePasskeyRegistrationLinkResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2.CreatePasskeyRegistrationLinkResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.CreatePasskeyRegistrationLinkResponse.displayName = 'proto.zitadel.user.v2.CreatePasskeyRegistrationLinkResponse';
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
proto.zitadel.user.v2.ListPasskeysRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2.ListPasskeysRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.ListPasskeysRequest.displayName = 'proto.zitadel.user.v2.ListPasskeysRequest';
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
proto.zitadel.user.v2.ListPasskeysResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.user.v2.ListPasskeysResponse.repeatedFields_, null);
};
goog.inherits(proto.zitadel.user.v2.ListPasskeysResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.ListPasskeysResponse.displayName = 'proto.zitadel.user.v2.ListPasskeysResponse';
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
proto.zitadel.user.v2.RemovePasskeyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2.RemovePasskeyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.RemovePasskeyRequest.displayName = 'proto.zitadel.user.v2.RemovePasskeyRequest';
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
proto.zitadel.user.v2.RemovePasskeyResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2.RemovePasskeyResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.RemovePasskeyResponse.displayName = 'proto.zitadel.user.v2.RemovePasskeyResponse';
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
proto.zitadel.user.v2.StartIdentityProviderIntentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.zitadel.user.v2.StartIdentityProviderIntentRequest.oneofGroups_);
};
goog.inherits(proto.zitadel.user.v2.StartIdentityProviderIntentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.StartIdentityProviderIntentRequest.displayName = 'proto.zitadel.user.v2.StartIdentityProviderIntentRequest';
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
proto.zitadel.user.v2.StartIdentityProviderIntentResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.zitadel.user.v2.StartIdentityProviderIntentResponse.oneofGroups_);
};
goog.inherits(proto.zitadel.user.v2.StartIdentityProviderIntentResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.StartIdentityProviderIntentResponse.displayName = 'proto.zitadel.user.v2.StartIdentityProviderIntentResponse';
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
proto.zitadel.user.v2.RetrieveIdentityProviderIntentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2.RetrieveIdentityProviderIntentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.RetrieveIdentityProviderIntentRequest.displayName = 'proto.zitadel.user.v2.RetrieveIdentityProviderIntentRequest';
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
proto.zitadel.user.v2.RetrieveIdentityProviderIntentResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2.RetrieveIdentityProviderIntentResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.RetrieveIdentityProviderIntentResponse.displayName = 'proto.zitadel.user.v2.RetrieveIdentityProviderIntentResponse';
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
proto.zitadel.user.v2.AddIDPLinkRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2.AddIDPLinkRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.AddIDPLinkRequest.displayName = 'proto.zitadel.user.v2.AddIDPLinkRequest';
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
proto.zitadel.user.v2.AddIDPLinkResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2.AddIDPLinkResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.AddIDPLinkResponse.displayName = 'proto.zitadel.user.v2.AddIDPLinkResponse';
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
proto.zitadel.user.v2.ListIDPLinksRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2.ListIDPLinksRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.ListIDPLinksRequest.displayName = 'proto.zitadel.user.v2.ListIDPLinksRequest';
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
proto.zitadel.user.v2.ListIDPLinksResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.user.v2.ListIDPLinksResponse.repeatedFields_, null);
};
goog.inherits(proto.zitadel.user.v2.ListIDPLinksResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.ListIDPLinksResponse.displayName = 'proto.zitadel.user.v2.ListIDPLinksResponse';
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
proto.zitadel.user.v2.RemoveIDPLinkRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2.RemoveIDPLinkRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.RemoveIDPLinkRequest.displayName = 'proto.zitadel.user.v2.RemoveIDPLinkRequest';
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
proto.zitadel.user.v2.RemoveIDPLinkResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2.RemoveIDPLinkResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.RemoveIDPLinkResponse.displayName = 'proto.zitadel.user.v2.RemoveIDPLinkResponse';
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
proto.zitadel.user.v2.PasswordResetRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.zitadel.user.v2.PasswordResetRequest.oneofGroups_);
};
goog.inherits(proto.zitadel.user.v2.PasswordResetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.PasswordResetRequest.displayName = 'proto.zitadel.user.v2.PasswordResetRequest';
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
proto.zitadel.user.v2.PasswordResetResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2.PasswordResetResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.PasswordResetResponse.displayName = 'proto.zitadel.user.v2.PasswordResetResponse';
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
proto.zitadel.user.v2.SetPasswordRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.zitadel.user.v2.SetPasswordRequest.oneofGroups_);
};
goog.inherits(proto.zitadel.user.v2.SetPasswordRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.SetPasswordRequest.displayName = 'proto.zitadel.user.v2.SetPasswordRequest';
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
proto.zitadel.user.v2.SetPasswordResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2.SetPasswordResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.SetPasswordResponse.displayName = 'proto.zitadel.user.v2.SetPasswordResponse';
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
proto.zitadel.user.v2.ListAuthenticationMethodTypesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2.ListAuthenticationMethodTypesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.ListAuthenticationMethodTypesRequest.displayName = 'proto.zitadel.user.v2.ListAuthenticationMethodTypesRequest';
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
proto.zitadel.user.v2.DomainQuery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2.DomainQuery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.DomainQuery.displayName = 'proto.zitadel.user.v2.DomainQuery';
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
proto.zitadel.user.v2.ListAuthenticationMethodTypesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.user.v2.ListAuthenticationMethodTypesResponse.repeatedFields_, null);
};
goog.inherits(proto.zitadel.user.v2.ListAuthenticationMethodTypesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.ListAuthenticationMethodTypesResponse.displayName = 'proto.zitadel.user.v2.ListAuthenticationMethodTypesResponse';
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
proto.zitadel.user.v2.ListAuthenticationFactorsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.user.v2.ListAuthenticationFactorsRequest.repeatedFields_, null);
};
goog.inherits(proto.zitadel.user.v2.ListAuthenticationFactorsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.ListAuthenticationFactorsRequest.displayName = 'proto.zitadel.user.v2.ListAuthenticationFactorsRequest';
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
proto.zitadel.user.v2.ListAuthenticationFactorsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.user.v2.ListAuthenticationFactorsResponse.repeatedFields_, null);
};
goog.inherits(proto.zitadel.user.v2.ListAuthenticationFactorsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.ListAuthenticationFactorsResponse.displayName = 'proto.zitadel.user.v2.ListAuthenticationFactorsResponse';
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
proto.zitadel.user.v2.CreateInviteCodeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.zitadel.user.v2.CreateInviteCodeRequest.oneofGroups_);
};
goog.inherits(proto.zitadel.user.v2.CreateInviteCodeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.CreateInviteCodeRequest.displayName = 'proto.zitadel.user.v2.CreateInviteCodeRequest';
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
proto.zitadel.user.v2.CreateInviteCodeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2.CreateInviteCodeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.CreateInviteCodeResponse.displayName = 'proto.zitadel.user.v2.CreateInviteCodeResponse';
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
proto.zitadel.user.v2.ResendInviteCodeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2.ResendInviteCodeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.ResendInviteCodeRequest.displayName = 'proto.zitadel.user.v2.ResendInviteCodeRequest';
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
proto.zitadel.user.v2.ResendInviteCodeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2.ResendInviteCodeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.ResendInviteCodeResponse.displayName = 'proto.zitadel.user.v2.ResendInviteCodeResponse';
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
proto.zitadel.user.v2.VerifyInviteCodeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2.VerifyInviteCodeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.VerifyInviteCodeRequest.displayName = 'proto.zitadel.user.v2.VerifyInviteCodeRequest';
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
proto.zitadel.user.v2.VerifyInviteCodeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2.VerifyInviteCodeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.VerifyInviteCodeResponse.displayName = 'proto.zitadel.user.v2.VerifyInviteCodeResponse';
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
proto.zitadel.user.v2.HumanMFAInitSkippedRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2.HumanMFAInitSkippedRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.HumanMFAInitSkippedRequest.displayName = 'proto.zitadel.user.v2.HumanMFAInitSkippedRequest';
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
proto.zitadel.user.v2.HumanMFAInitSkippedResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2.HumanMFAInitSkippedResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.HumanMFAInitSkippedResponse.displayName = 'proto.zitadel.user.v2.HumanMFAInitSkippedResponse';
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
proto.zitadel.user.v2.AddSecretRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2.AddSecretRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.AddSecretRequest.displayName = 'proto.zitadel.user.v2.AddSecretRequest';
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
proto.zitadel.user.v2.AddSecretResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2.AddSecretResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.AddSecretResponse.displayName = 'proto.zitadel.user.v2.AddSecretResponse';
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
proto.zitadel.user.v2.RemoveSecretRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2.RemoveSecretRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.RemoveSecretRequest.displayName = 'proto.zitadel.user.v2.RemoveSecretRequest';
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
proto.zitadel.user.v2.RemoveSecretResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2.RemoveSecretResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.RemoveSecretResponse.displayName = 'proto.zitadel.user.v2.RemoveSecretResponse';
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
proto.zitadel.user.v2.AddKeyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2.AddKeyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.AddKeyRequest.displayName = 'proto.zitadel.user.v2.AddKeyRequest';
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
proto.zitadel.user.v2.AddKeyResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2.AddKeyResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.AddKeyResponse.displayName = 'proto.zitadel.user.v2.AddKeyResponse';
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
proto.zitadel.user.v2.RemoveKeyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2.RemoveKeyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.RemoveKeyRequest.displayName = 'proto.zitadel.user.v2.RemoveKeyRequest';
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
proto.zitadel.user.v2.RemoveKeyResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2.RemoveKeyResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.RemoveKeyResponse.displayName = 'proto.zitadel.user.v2.RemoveKeyResponse';
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
proto.zitadel.user.v2.ListKeysRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.user.v2.ListKeysRequest.repeatedFields_, null);
};
goog.inherits(proto.zitadel.user.v2.ListKeysRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.ListKeysRequest.displayName = 'proto.zitadel.user.v2.ListKeysRequest';
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
proto.zitadel.user.v2.ListKeysResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.user.v2.ListKeysResponse.repeatedFields_, null);
};
goog.inherits(proto.zitadel.user.v2.ListKeysResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.ListKeysResponse.displayName = 'proto.zitadel.user.v2.ListKeysResponse';
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
proto.zitadel.user.v2.AddPersonalAccessTokenRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2.AddPersonalAccessTokenRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.AddPersonalAccessTokenRequest.displayName = 'proto.zitadel.user.v2.AddPersonalAccessTokenRequest';
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
proto.zitadel.user.v2.AddPersonalAccessTokenResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2.AddPersonalAccessTokenResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.AddPersonalAccessTokenResponse.displayName = 'proto.zitadel.user.v2.AddPersonalAccessTokenResponse';
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
proto.zitadel.user.v2.RemovePersonalAccessTokenRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2.RemovePersonalAccessTokenRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.RemovePersonalAccessTokenRequest.displayName = 'proto.zitadel.user.v2.RemovePersonalAccessTokenRequest';
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
proto.zitadel.user.v2.RemovePersonalAccessTokenResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2.RemovePersonalAccessTokenResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.RemovePersonalAccessTokenResponse.displayName = 'proto.zitadel.user.v2.RemovePersonalAccessTokenResponse';
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
proto.zitadel.user.v2.ListPersonalAccessTokensRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.user.v2.ListPersonalAccessTokensRequest.repeatedFields_, null);
};
goog.inherits(proto.zitadel.user.v2.ListPersonalAccessTokensRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.ListPersonalAccessTokensRequest.displayName = 'proto.zitadel.user.v2.ListPersonalAccessTokensRequest';
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
proto.zitadel.user.v2.ListPersonalAccessTokensResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.user.v2.ListPersonalAccessTokensResponse.repeatedFields_, null);
};
goog.inherits(proto.zitadel.user.v2.ListPersonalAccessTokensResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.ListPersonalAccessTokensResponse.displayName = 'proto.zitadel.user.v2.ListPersonalAccessTokensResponse';
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
proto.zitadel.user.v2.Metadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2.Metadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.Metadata.displayName = 'proto.zitadel.user.v2.Metadata';
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
proto.zitadel.user.v2.SetUserMetadataRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.user.v2.SetUserMetadataRequest.repeatedFields_, null);
};
goog.inherits(proto.zitadel.user.v2.SetUserMetadataRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.SetUserMetadataRequest.displayName = 'proto.zitadel.user.v2.SetUserMetadataRequest';
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
proto.zitadel.user.v2.SetUserMetadataResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2.SetUserMetadataResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.SetUserMetadataResponse.displayName = 'proto.zitadel.user.v2.SetUserMetadataResponse';
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
proto.zitadel.user.v2.ListUserMetadataRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.user.v2.ListUserMetadataRequest.repeatedFields_, null);
};
goog.inherits(proto.zitadel.user.v2.ListUserMetadataRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.ListUserMetadataRequest.displayName = 'proto.zitadel.user.v2.ListUserMetadataRequest';
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
proto.zitadel.user.v2.ListUserMetadataResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.user.v2.ListUserMetadataResponse.repeatedFields_, null);
};
goog.inherits(proto.zitadel.user.v2.ListUserMetadataResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.ListUserMetadataResponse.displayName = 'proto.zitadel.user.v2.ListUserMetadataResponse';
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
proto.zitadel.user.v2.DeleteUserMetadataRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.user.v2.DeleteUserMetadataRequest.repeatedFields_, null);
};
goog.inherits(proto.zitadel.user.v2.DeleteUserMetadataRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.DeleteUserMetadataRequest.displayName = 'proto.zitadel.user.v2.DeleteUserMetadataRequest';
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
proto.zitadel.user.v2.DeleteUserMetadataResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v2.DeleteUserMetadataResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v2.DeleteUserMetadataResponse.displayName = 'proto.zitadel.user.v2.DeleteUserMetadataResponse';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.user.v2.AddHumanUserRequest.repeatedFields_ = [6,9];

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.zitadel.user.v2.AddHumanUserRequest.oneofGroups_ = [[7,8]];

/**
 * @enum {number}
 */
proto.zitadel.user.v2.AddHumanUserRequest.PasswordTypeCase = {
  PASSWORD_TYPE_NOT_SET: 0,
  PASSWORD: 7,
  HASHED_PASSWORD: 8
};

/**
 * @return {proto.zitadel.user.v2.AddHumanUserRequest.PasswordTypeCase}
 */
proto.zitadel.user.v2.AddHumanUserRequest.prototype.getPasswordTypeCase = function() {
  return /** @type {proto.zitadel.user.v2.AddHumanUserRequest.PasswordTypeCase} */(jspb.Message.computeOneofCase(this, proto.zitadel.user.v2.AddHumanUserRequest.oneofGroups_[0]));
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
proto.zitadel.user.v2.AddHumanUserRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.AddHumanUserRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.AddHumanUserRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.AddHumanUserRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
userId: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
username: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
organization: (f = msg.getOrganization()) && zitadel_object_v2_object_pb.Organization.toObject(includeInstance, f),
profile: (f = msg.getProfile()) && zitadel_user_v2_user_pb.SetHumanProfile.toObject(includeInstance, f),
email: (f = msg.getEmail()) && zitadel_user_v2_email_pb.SetHumanEmail.toObject(includeInstance, f),
phone: (f = msg.getPhone()) && zitadel_user_v2_phone_pb.SetHumanPhone.toObject(includeInstance, f),
metadataList: jspb.Message.toObjectList(msg.getMetadataList(),
    zitadel_user_v2_user_pb.SetMetadataEntry.toObject, includeInstance),
password: (f = msg.getPassword()) && zitadel_user_v2_password_pb.Password.toObject(includeInstance, f),
hashedPassword: (f = msg.getHashedPassword()) && zitadel_user_v2_password_pb.HashedPassword.toObject(includeInstance, f),
idpLinksList: jspb.Message.toObjectList(msg.getIdpLinksList(),
    zitadel_user_v2_idp_pb.IDPLink.toObject, includeInstance),
totpSecret: (f = jspb.Message.getField(msg, 12)) == null ? undefined : f
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
 * @return {!proto.zitadel.user.v2.AddHumanUserRequest}
 */
proto.zitadel.user.v2.AddHumanUserRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.AddHumanUserRequest;
  return proto.zitadel.user.v2.AddHumanUserRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.AddHumanUserRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.AddHumanUserRequest}
 */
proto.zitadel.user.v2.AddHumanUserRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setUsername(value);
      break;
    case 11:
      var value = new zitadel_object_v2_object_pb.Organization;
      reader.readMessage(value,zitadel_object_v2_object_pb.Organization.deserializeBinaryFromReader);
      msg.setOrganization(value);
      break;
    case 4:
      var value = new zitadel_user_v2_user_pb.SetHumanProfile;
      reader.readMessage(value,zitadel_user_v2_user_pb.SetHumanProfile.deserializeBinaryFromReader);
      msg.setProfile(value);
      break;
    case 5:
      var value = new zitadel_user_v2_email_pb.SetHumanEmail;
      reader.readMessage(value,zitadel_user_v2_email_pb.SetHumanEmail.deserializeBinaryFromReader);
      msg.setEmail(value);
      break;
    case 10:
      var value = new zitadel_user_v2_phone_pb.SetHumanPhone;
      reader.readMessage(value,zitadel_user_v2_phone_pb.SetHumanPhone.deserializeBinaryFromReader);
      msg.setPhone(value);
      break;
    case 6:
      var value = new zitadel_user_v2_user_pb.SetMetadataEntry;
      reader.readMessage(value,zitadel_user_v2_user_pb.SetMetadataEntry.deserializeBinaryFromReader);
      msg.addMetadata(value);
      break;
    case 7:
      var value = new zitadel_user_v2_password_pb.Password;
      reader.readMessage(value,zitadel_user_v2_password_pb.Password.deserializeBinaryFromReader);
      msg.setPassword(value);
      break;
    case 8:
      var value = new zitadel_user_v2_password_pb.HashedPassword;
      reader.readMessage(value,zitadel_user_v2_password_pb.HashedPassword.deserializeBinaryFromReader);
      msg.setHashedPassword(value);
      break;
    case 9:
      var value = new zitadel_user_v2_idp_pb.IDPLink;
      reader.readMessage(value,zitadel_user_v2_idp_pb.IDPLink.deserializeBinaryFromReader);
      msg.addIdpLinks(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setTotpSecret(value);
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
proto.zitadel.user.v2.AddHumanUserRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.AddHumanUserRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.AddHumanUserRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.AddHumanUserRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
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
  f = message.getOrganization();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      zitadel_object_v2_object_pb.Organization.serializeBinaryToWriter
    );
  }
  f = message.getProfile();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      zitadel_user_v2_user_pb.SetHumanProfile.serializeBinaryToWriter
    );
  }
  f = message.getEmail();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      zitadel_user_v2_email_pb.SetHumanEmail.serializeBinaryToWriter
    );
  }
  f = message.getPhone();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      zitadel_user_v2_phone_pb.SetHumanPhone.serializeBinaryToWriter
    );
  }
  f = message.getMetadataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      zitadel_user_v2_user_pb.SetMetadataEntry.serializeBinaryToWriter
    );
  }
  f = message.getPassword();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      zitadel_user_v2_password_pb.Password.serializeBinaryToWriter
    );
  }
  f = message.getHashedPassword();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      zitadel_user_v2_password_pb.HashedPassword.serializeBinaryToWriter
    );
  }
  f = message.getIdpLinksList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      zitadel_user_v2_idp_pb.IDPLink.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 12));
  if (f != null) {
    writer.writeString(
      12,
      f
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.zitadel.user.v2.AddHumanUserRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2.AddHumanUserRequest} returns this
 */
proto.zitadel.user.v2.AddHumanUserRequest.prototype.setUserId = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.user.v2.AddHumanUserRequest} returns this
 */
proto.zitadel.user.v2.AddHumanUserRequest.prototype.clearUserId = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.AddHumanUserRequest.prototype.hasUserId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string username = 2;
 * @return {string}
 */
proto.zitadel.user.v2.AddHumanUserRequest.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2.AddHumanUserRequest} returns this
 */
proto.zitadel.user.v2.AddHumanUserRequest.prototype.setUsername = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.user.v2.AddHumanUserRequest} returns this
 */
proto.zitadel.user.v2.AddHumanUserRequest.prototype.clearUsername = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.AddHumanUserRequest.prototype.hasUsername = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional zitadel.object.v2.Organization organization = 11;
 * @return {?proto.zitadel.object.v2.Organization}
 */
proto.zitadel.user.v2.AddHumanUserRequest.prototype.getOrganization = function() {
  return /** @type{?proto.zitadel.object.v2.Organization} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2_object_pb.Organization, 11));
};


/**
 * @param {?proto.zitadel.object.v2.Organization|undefined} value
 * @return {!proto.zitadel.user.v2.AddHumanUserRequest} returns this
*/
proto.zitadel.user.v2.AddHumanUserRequest.prototype.setOrganization = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2.AddHumanUserRequest} returns this
 */
proto.zitadel.user.v2.AddHumanUserRequest.prototype.clearOrganization = function() {
  return this.setOrganization(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.AddHumanUserRequest.prototype.hasOrganization = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional SetHumanProfile profile = 4;
 * @return {?proto.zitadel.user.v2.SetHumanProfile}
 */
proto.zitadel.user.v2.AddHumanUserRequest.prototype.getProfile = function() {
  return /** @type{?proto.zitadel.user.v2.SetHumanProfile} */ (
    jspb.Message.getWrapperField(this, zitadel_user_v2_user_pb.SetHumanProfile, 4));
};


/**
 * @param {?proto.zitadel.user.v2.SetHumanProfile|undefined} value
 * @return {!proto.zitadel.user.v2.AddHumanUserRequest} returns this
*/
proto.zitadel.user.v2.AddHumanUserRequest.prototype.setProfile = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2.AddHumanUserRequest} returns this
 */
proto.zitadel.user.v2.AddHumanUserRequest.prototype.clearProfile = function() {
  return this.setProfile(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.AddHumanUserRequest.prototype.hasProfile = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional SetHumanEmail email = 5;
 * @return {?proto.zitadel.user.v2.SetHumanEmail}
 */
proto.zitadel.user.v2.AddHumanUserRequest.prototype.getEmail = function() {
  return /** @type{?proto.zitadel.user.v2.SetHumanEmail} */ (
    jspb.Message.getWrapperField(this, zitadel_user_v2_email_pb.SetHumanEmail, 5));
};


/**
 * @param {?proto.zitadel.user.v2.SetHumanEmail|undefined} value
 * @return {!proto.zitadel.user.v2.AddHumanUserRequest} returns this
*/
proto.zitadel.user.v2.AddHumanUserRequest.prototype.setEmail = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2.AddHumanUserRequest} returns this
 */
proto.zitadel.user.v2.AddHumanUserRequest.prototype.clearEmail = function() {
  return this.setEmail(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.AddHumanUserRequest.prototype.hasEmail = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional SetHumanPhone phone = 10;
 * @return {?proto.zitadel.user.v2.SetHumanPhone}
 */
proto.zitadel.user.v2.AddHumanUserRequest.prototype.getPhone = function() {
  return /** @type{?proto.zitadel.user.v2.SetHumanPhone} */ (
    jspb.Message.getWrapperField(this, zitadel_user_v2_phone_pb.SetHumanPhone, 10));
};


/**
 * @param {?proto.zitadel.user.v2.SetHumanPhone|undefined} value
 * @return {!proto.zitadel.user.v2.AddHumanUserRequest} returns this
*/
proto.zitadel.user.v2.AddHumanUserRequest.prototype.setPhone = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2.AddHumanUserRequest} returns this
 */
proto.zitadel.user.v2.AddHumanUserRequest.prototype.clearPhone = function() {
  return this.setPhone(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.AddHumanUserRequest.prototype.hasPhone = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * repeated SetMetadataEntry metadata = 6;
 * @return {!Array<!proto.zitadel.user.v2.SetMetadataEntry>}
 */
proto.zitadel.user.v2.AddHumanUserRequest.prototype.getMetadataList = function() {
  return /** @type{!Array<!proto.zitadel.user.v2.SetMetadataEntry>} */ (
    jspb.Message.getRepeatedWrapperField(this, zitadel_user_v2_user_pb.SetMetadataEntry, 6));
};


/**
 * @param {!Array<!proto.zitadel.user.v2.SetMetadataEntry>} value
 * @return {!proto.zitadel.user.v2.AddHumanUserRequest} returns this
*/
proto.zitadel.user.v2.AddHumanUserRequest.prototype.setMetadataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.zitadel.user.v2.SetMetadataEntry=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zitadel.user.v2.SetMetadataEntry}
 */
proto.zitadel.user.v2.AddHumanUserRequest.prototype.addMetadata = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.zitadel.user.v2.SetMetadataEntry, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.user.v2.AddHumanUserRequest} returns this
 */
proto.zitadel.user.v2.AddHumanUserRequest.prototype.clearMetadataList = function() {
  return this.setMetadataList([]);
};


/**
 * optional Password password = 7;
 * @return {?proto.zitadel.user.v2.Password}
 */
proto.zitadel.user.v2.AddHumanUserRequest.prototype.getPassword = function() {
  return /** @type{?proto.zitadel.user.v2.Password} */ (
    jspb.Message.getWrapperField(this, zitadel_user_v2_password_pb.Password, 7));
};


/**
 * @param {?proto.zitadel.user.v2.Password|undefined} value
 * @return {!proto.zitadel.user.v2.AddHumanUserRequest} returns this
*/
proto.zitadel.user.v2.AddHumanUserRequest.prototype.setPassword = function(value) {
  return jspb.Message.setOneofWrapperField(this, 7, proto.zitadel.user.v2.AddHumanUserRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2.AddHumanUserRequest} returns this
 */
proto.zitadel.user.v2.AddHumanUserRequest.prototype.clearPassword = function() {
  return this.setPassword(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.AddHumanUserRequest.prototype.hasPassword = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional HashedPassword hashed_password = 8;
 * @return {?proto.zitadel.user.v2.HashedPassword}
 */
proto.zitadel.user.v2.AddHumanUserRequest.prototype.getHashedPassword = function() {
  return /** @type{?proto.zitadel.user.v2.HashedPassword} */ (
    jspb.Message.getWrapperField(this, zitadel_user_v2_password_pb.HashedPassword, 8));
};


/**
 * @param {?proto.zitadel.user.v2.HashedPassword|undefined} value
 * @return {!proto.zitadel.user.v2.AddHumanUserRequest} returns this
*/
proto.zitadel.user.v2.AddHumanUserRequest.prototype.setHashedPassword = function(value) {
  return jspb.Message.setOneofWrapperField(this, 8, proto.zitadel.user.v2.AddHumanUserRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2.AddHumanUserRequest} returns this
 */
proto.zitadel.user.v2.AddHumanUserRequest.prototype.clearHashedPassword = function() {
  return this.setHashedPassword(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.AddHumanUserRequest.prototype.hasHashedPassword = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * repeated IDPLink idp_links = 9;
 * @return {!Array<!proto.zitadel.user.v2.IDPLink>}
 */
proto.zitadel.user.v2.AddHumanUserRequest.prototype.getIdpLinksList = function() {
  return /** @type{!Array<!proto.zitadel.user.v2.IDPLink>} */ (
    jspb.Message.getRepeatedWrapperField(this, zitadel_user_v2_idp_pb.IDPLink, 9));
};


/**
 * @param {!Array<!proto.zitadel.user.v2.IDPLink>} value
 * @return {!proto.zitadel.user.v2.AddHumanUserRequest} returns this
*/
proto.zitadel.user.v2.AddHumanUserRequest.prototype.setIdpLinksList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.zitadel.user.v2.IDPLink=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zitadel.user.v2.IDPLink}
 */
proto.zitadel.user.v2.AddHumanUserRequest.prototype.addIdpLinks = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.zitadel.user.v2.IDPLink, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.user.v2.AddHumanUserRequest} returns this
 */
proto.zitadel.user.v2.AddHumanUserRequest.prototype.clearIdpLinksList = function() {
  return this.setIdpLinksList([]);
};


/**
 * optional string totp_secret = 12;
 * @return {string}
 */
proto.zitadel.user.v2.AddHumanUserRequest.prototype.getTotpSecret = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2.AddHumanUserRequest} returns this
 */
proto.zitadel.user.v2.AddHumanUserRequest.prototype.setTotpSecret = function(value) {
  return jspb.Message.setField(this, 12, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.user.v2.AddHumanUserRequest} returns this
 */
proto.zitadel.user.v2.AddHumanUserRequest.prototype.clearTotpSecret = function() {
  return jspb.Message.setField(this, 12, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.AddHumanUserRequest.prototype.hasTotpSecret = function() {
  return jspb.Message.getField(this, 12) != null;
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
proto.zitadel.user.v2.AddHumanUserResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.AddHumanUserResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.AddHumanUserResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.AddHumanUserResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
userId: jspb.Message.getFieldWithDefault(msg, 1, ""),
details: (f = msg.getDetails()) && zitadel_object_v2_object_pb.Details.toObject(includeInstance, f),
emailCode: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
phoneCode: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f
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
 * @return {!proto.zitadel.user.v2.AddHumanUserResponse}
 */
proto.zitadel.user.v2.AddHumanUserResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.AddHumanUserResponse;
  return proto.zitadel.user.v2.AddHumanUserResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.AddHumanUserResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.AddHumanUserResponse}
 */
proto.zitadel.user.v2.AddHumanUserResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new zitadel_object_v2_object_pb.Details;
      reader.readMessage(value,zitadel_object_v2_object_pb.Details.deserializeBinaryFromReader);
      msg.setDetails(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmailCode(value);
      break;
    case 4:
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
proto.zitadel.user.v2.AddHumanUserResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.AddHumanUserResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.AddHumanUserResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.AddHumanUserResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
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
      zitadel_object_v2_object_pb.Details.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.zitadel.user.v2.AddHumanUserResponse.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2.AddHumanUserResponse} returns this
 */
proto.zitadel.user.v2.AddHumanUserResponse.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional zitadel.object.v2.Details details = 2;
 * @return {?proto.zitadel.object.v2.Details}
 */
proto.zitadel.user.v2.AddHumanUserResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.object.v2.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2_object_pb.Details, 2));
};


/**
 * @param {?proto.zitadel.object.v2.Details|undefined} value
 * @return {!proto.zitadel.user.v2.AddHumanUserResponse} returns this
*/
proto.zitadel.user.v2.AddHumanUserResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2.AddHumanUserResponse} returns this
 */
proto.zitadel.user.v2.AddHumanUserResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.AddHumanUserResponse.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string email_code = 3;
 * @return {string}
 */
proto.zitadel.user.v2.AddHumanUserResponse.prototype.getEmailCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2.AddHumanUserResponse} returns this
 */
proto.zitadel.user.v2.AddHumanUserResponse.prototype.setEmailCode = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.user.v2.AddHumanUserResponse} returns this
 */
proto.zitadel.user.v2.AddHumanUserResponse.prototype.clearEmailCode = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.AddHumanUserResponse.prototype.hasEmailCode = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string phone_code = 4;
 * @return {string}
 */
proto.zitadel.user.v2.AddHumanUserResponse.prototype.getPhoneCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2.AddHumanUserResponse} returns this
 */
proto.zitadel.user.v2.AddHumanUserResponse.prototype.setPhoneCode = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.user.v2.AddHumanUserResponse} returns this
 */
proto.zitadel.user.v2.AddHumanUserResponse.prototype.clearPhoneCode = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.AddHumanUserResponse.prototype.hasPhoneCode = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.zitadel.user.v2.CreateUserRequest.oneofGroups_ = [[4,5]];

/**
 * @enum {number}
 */
proto.zitadel.user.v2.CreateUserRequest.UserTypeCase = {
  USER_TYPE_NOT_SET: 0,
  HUMAN: 4,
  MACHINE: 5
};

/**
 * @return {proto.zitadel.user.v2.CreateUserRequest.UserTypeCase}
 */
proto.zitadel.user.v2.CreateUserRequest.prototype.getUserTypeCase = function() {
  return /** @type {proto.zitadel.user.v2.CreateUserRequest.UserTypeCase} */(jspb.Message.computeOneofCase(this, proto.zitadel.user.v2.CreateUserRequest.oneofGroups_[0]));
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
proto.zitadel.user.v2.CreateUserRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.CreateUserRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.CreateUserRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.CreateUserRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
organizationId: jspb.Message.getFieldWithDefault(msg, 1, ""),
userId: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
username: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
human: (f = msg.getHuman()) && proto.zitadel.user.v2.CreateUserRequest.Human.toObject(includeInstance, f),
machine: (f = msg.getMachine()) && proto.zitadel.user.v2.CreateUserRequest.Machine.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.user.v2.CreateUserRequest}
 */
proto.zitadel.user.v2.CreateUserRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.CreateUserRequest;
  return proto.zitadel.user.v2.CreateUserRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.CreateUserRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.CreateUserRequest}
 */
proto.zitadel.user.v2.CreateUserRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setUserId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    case 4:
      var value = new proto.zitadel.user.v2.CreateUserRequest.Human;
      reader.readMessage(value,proto.zitadel.user.v2.CreateUserRequest.Human.deserializeBinaryFromReader);
      msg.setHuman(value);
      break;
    case 5:
      var value = new proto.zitadel.user.v2.CreateUserRequest.Machine;
      reader.readMessage(value,proto.zitadel.user.v2.CreateUserRequest.Machine.deserializeBinaryFromReader);
      msg.setMachine(value);
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
proto.zitadel.user.v2.CreateUserRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.CreateUserRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.CreateUserRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.CreateUserRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrganizationId();
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
  f = message.getHuman();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.zitadel.user.v2.CreateUserRequest.Human.serializeBinaryToWriter
    );
  }
  f = message.getMachine();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.zitadel.user.v2.CreateUserRequest.Machine.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.user.v2.CreateUserRequest.Human.repeatedFields_ = [7,9];

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.zitadel.user.v2.CreateUserRequest.Human.oneofGroups_ = [[4,5]];

/**
 * @enum {number}
 */
proto.zitadel.user.v2.CreateUserRequest.Human.PasswordTypeCase = {
  PASSWORD_TYPE_NOT_SET: 0,
  PASSWORD: 4,
  HASHED_PASSWORD: 5
};

/**
 * @return {proto.zitadel.user.v2.CreateUserRequest.Human.PasswordTypeCase}
 */
proto.zitadel.user.v2.CreateUserRequest.Human.prototype.getPasswordTypeCase = function() {
  return /** @type {proto.zitadel.user.v2.CreateUserRequest.Human.PasswordTypeCase} */(jspb.Message.computeOneofCase(this, proto.zitadel.user.v2.CreateUserRequest.Human.oneofGroups_[0]));
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
proto.zitadel.user.v2.CreateUserRequest.Human.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.CreateUserRequest.Human.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.CreateUserRequest.Human} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.CreateUserRequest.Human.toObject = function(includeInstance, msg) {
  var f, obj = {
profile: (f = msg.getProfile()) && zitadel_user_v2_user_pb.SetHumanProfile.toObject(includeInstance, f),
email: (f = msg.getEmail()) && zitadel_user_v2_email_pb.SetHumanEmail.toObject(includeInstance, f),
phone: (f = msg.getPhone()) && zitadel_user_v2_phone_pb.SetHumanPhone.toObject(includeInstance, f),
password: (f = msg.getPassword()) && zitadel_user_v2_password_pb.Password.toObject(includeInstance, f),
hashedPassword: (f = msg.getHashedPassword()) && zitadel_user_v2_password_pb.HashedPassword.toObject(includeInstance, f),
idpLinksList: jspb.Message.toObjectList(msg.getIdpLinksList(),
    zitadel_user_v2_idp_pb.IDPLink.toObject, includeInstance),
totpSecret: (f = jspb.Message.getField(msg, 8)) == null ? undefined : f,
metadataList: jspb.Message.toObjectList(msg.getMetadataList(),
    proto.zitadel.user.v2.Metadata.toObject, includeInstance)
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
 * @return {!proto.zitadel.user.v2.CreateUserRequest.Human}
 */
proto.zitadel.user.v2.CreateUserRequest.Human.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.CreateUserRequest.Human;
  return proto.zitadel.user.v2.CreateUserRequest.Human.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.CreateUserRequest.Human} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.CreateUserRequest.Human}
 */
proto.zitadel.user.v2.CreateUserRequest.Human.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_user_v2_user_pb.SetHumanProfile;
      reader.readMessage(value,zitadel_user_v2_user_pb.SetHumanProfile.deserializeBinaryFromReader);
      msg.setProfile(value);
      break;
    case 2:
      var value = new zitadel_user_v2_email_pb.SetHumanEmail;
      reader.readMessage(value,zitadel_user_v2_email_pb.SetHumanEmail.deserializeBinaryFromReader);
      msg.setEmail(value);
      break;
    case 3:
      var value = new zitadel_user_v2_phone_pb.SetHumanPhone;
      reader.readMessage(value,zitadel_user_v2_phone_pb.SetHumanPhone.deserializeBinaryFromReader);
      msg.setPhone(value);
      break;
    case 4:
      var value = new zitadel_user_v2_password_pb.Password;
      reader.readMessage(value,zitadel_user_v2_password_pb.Password.deserializeBinaryFromReader);
      msg.setPassword(value);
      break;
    case 5:
      var value = new zitadel_user_v2_password_pb.HashedPassword;
      reader.readMessage(value,zitadel_user_v2_password_pb.HashedPassword.deserializeBinaryFromReader);
      msg.setHashedPassword(value);
      break;
    case 7:
      var value = new zitadel_user_v2_idp_pb.IDPLink;
      reader.readMessage(value,zitadel_user_v2_idp_pb.IDPLink.deserializeBinaryFromReader);
      msg.addIdpLinks(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setTotpSecret(value);
      break;
    case 9:
      var value = new proto.zitadel.user.v2.Metadata;
      reader.readMessage(value,proto.zitadel.user.v2.Metadata.deserializeBinaryFromReader);
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
proto.zitadel.user.v2.CreateUserRequest.Human.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.CreateUserRequest.Human.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.CreateUserRequest.Human} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.CreateUserRequest.Human.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProfile();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_user_v2_user_pb.SetHumanProfile.serializeBinaryToWriter
    );
  }
  f = message.getEmail();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      zitadel_user_v2_email_pb.SetHumanEmail.serializeBinaryToWriter
    );
  }
  f = message.getPhone();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      zitadel_user_v2_phone_pb.SetHumanPhone.serializeBinaryToWriter
    );
  }
  f = message.getPassword();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      zitadel_user_v2_password_pb.Password.serializeBinaryToWriter
    );
  }
  f = message.getHashedPassword();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      zitadel_user_v2_password_pb.HashedPassword.serializeBinaryToWriter
    );
  }
  f = message.getIdpLinksList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      zitadel_user_v2_idp_pb.IDPLink.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getMetadataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      proto.zitadel.user.v2.Metadata.serializeBinaryToWriter
    );
  }
};


/**
 * optional SetHumanProfile profile = 1;
 * @return {?proto.zitadel.user.v2.SetHumanProfile}
 */
proto.zitadel.user.v2.CreateUserRequest.Human.prototype.getProfile = function() {
  return /** @type{?proto.zitadel.user.v2.SetHumanProfile} */ (
    jspb.Message.getWrapperField(this, zitadel_user_v2_user_pb.SetHumanProfile, 1));
};


/**
 * @param {?proto.zitadel.user.v2.SetHumanProfile|undefined} value
 * @return {!proto.zitadel.user.v2.CreateUserRequest.Human} returns this
*/
proto.zitadel.user.v2.CreateUserRequest.Human.prototype.setProfile = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2.CreateUserRequest.Human} returns this
 */
proto.zitadel.user.v2.CreateUserRequest.Human.prototype.clearProfile = function() {
  return this.setProfile(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.CreateUserRequest.Human.prototype.hasProfile = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional SetHumanEmail email = 2;
 * @return {?proto.zitadel.user.v2.SetHumanEmail}
 */
proto.zitadel.user.v2.CreateUserRequest.Human.prototype.getEmail = function() {
  return /** @type{?proto.zitadel.user.v2.SetHumanEmail} */ (
    jspb.Message.getWrapperField(this, zitadel_user_v2_email_pb.SetHumanEmail, 2));
};


/**
 * @param {?proto.zitadel.user.v2.SetHumanEmail|undefined} value
 * @return {!proto.zitadel.user.v2.CreateUserRequest.Human} returns this
*/
proto.zitadel.user.v2.CreateUserRequest.Human.prototype.setEmail = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2.CreateUserRequest.Human} returns this
 */
proto.zitadel.user.v2.CreateUserRequest.Human.prototype.clearEmail = function() {
  return this.setEmail(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.CreateUserRequest.Human.prototype.hasEmail = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional SetHumanPhone phone = 3;
 * @return {?proto.zitadel.user.v2.SetHumanPhone}
 */
proto.zitadel.user.v2.CreateUserRequest.Human.prototype.getPhone = function() {
  return /** @type{?proto.zitadel.user.v2.SetHumanPhone} */ (
    jspb.Message.getWrapperField(this, zitadel_user_v2_phone_pb.SetHumanPhone, 3));
};


/**
 * @param {?proto.zitadel.user.v2.SetHumanPhone|undefined} value
 * @return {!proto.zitadel.user.v2.CreateUserRequest.Human} returns this
*/
proto.zitadel.user.v2.CreateUserRequest.Human.prototype.setPhone = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2.CreateUserRequest.Human} returns this
 */
proto.zitadel.user.v2.CreateUserRequest.Human.prototype.clearPhone = function() {
  return this.setPhone(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.CreateUserRequest.Human.prototype.hasPhone = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Password password = 4;
 * @return {?proto.zitadel.user.v2.Password}
 */
proto.zitadel.user.v2.CreateUserRequest.Human.prototype.getPassword = function() {
  return /** @type{?proto.zitadel.user.v2.Password} */ (
    jspb.Message.getWrapperField(this, zitadel_user_v2_password_pb.Password, 4));
};


/**
 * @param {?proto.zitadel.user.v2.Password|undefined} value
 * @return {!proto.zitadel.user.v2.CreateUserRequest.Human} returns this
*/
proto.zitadel.user.v2.CreateUserRequest.Human.prototype.setPassword = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.zitadel.user.v2.CreateUserRequest.Human.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2.CreateUserRequest.Human} returns this
 */
proto.zitadel.user.v2.CreateUserRequest.Human.prototype.clearPassword = function() {
  return this.setPassword(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.CreateUserRequest.Human.prototype.hasPassword = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional HashedPassword hashed_password = 5;
 * @return {?proto.zitadel.user.v2.HashedPassword}
 */
proto.zitadel.user.v2.CreateUserRequest.Human.prototype.getHashedPassword = function() {
  return /** @type{?proto.zitadel.user.v2.HashedPassword} */ (
    jspb.Message.getWrapperField(this, zitadel_user_v2_password_pb.HashedPassword, 5));
};


/**
 * @param {?proto.zitadel.user.v2.HashedPassword|undefined} value
 * @return {!proto.zitadel.user.v2.CreateUserRequest.Human} returns this
*/
proto.zitadel.user.v2.CreateUserRequest.Human.prototype.setHashedPassword = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.zitadel.user.v2.CreateUserRequest.Human.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2.CreateUserRequest.Human} returns this
 */
proto.zitadel.user.v2.CreateUserRequest.Human.prototype.clearHashedPassword = function() {
  return this.setHashedPassword(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.CreateUserRequest.Human.prototype.hasHashedPassword = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * repeated IDPLink idp_links = 7;
 * @return {!Array<!proto.zitadel.user.v2.IDPLink>}
 */
proto.zitadel.user.v2.CreateUserRequest.Human.prototype.getIdpLinksList = function() {
  return /** @type{!Array<!proto.zitadel.user.v2.IDPLink>} */ (
    jspb.Message.getRepeatedWrapperField(this, zitadel_user_v2_idp_pb.IDPLink, 7));
};


/**
 * @param {!Array<!proto.zitadel.user.v2.IDPLink>} value
 * @return {!proto.zitadel.user.v2.CreateUserRequest.Human} returns this
*/
proto.zitadel.user.v2.CreateUserRequest.Human.prototype.setIdpLinksList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.zitadel.user.v2.IDPLink=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zitadel.user.v2.IDPLink}
 */
proto.zitadel.user.v2.CreateUserRequest.Human.prototype.addIdpLinks = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.zitadel.user.v2.IDPLink, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.user.v2.CreateUserRequest.Human} returns this
 */
proto.zitadel.user.v2.CreateUserRequest.Human.prototype.clearIdpLinksList = function() {
  return this.setIdpLinksList([]);
};


/**
 * optional string totp_secret = 8;
 * @return {string}
 */
proto.zitadel.user.v2.CreateUserRequest.Human.prototype.getTotpSecret = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2.CreateUserRequest.Human} returns this
 */
proto.zitadel.user.v2.CreateUserRequest.Human.prototype.setTotpSecret = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.user.v2.CreateUserRequest.Human} returns this
 */
proto.zitadel.user.v2.CreateUserRequest.Human.prototype.clearTotpSecret = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.CreateUserRequest.Human.prototype.hasTotpSecret = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * repeated Metadata metadata = 9;
 * @return {!Array<!proto.zitadel.user.v2.Metadata>}
 */
proto.zitadel.user.v2.CreateUserRequest.Human.prototype.getMetadataList = function() {
  return /** @type{!Array<!proto.zitadel.user.v2.Metadata>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.zitadel.user.v2.Metadata, 9));
};


/**
 * @param {!Array<!proto.zitadel.user.v2.Metadata>} value
 * @return {!proto.zitadel.user.v2.CreateUserRequest.Human} returns this
*/
proto.zitadel.user.v2.CreateUserRequest.Human.prototype.setMetadataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.zitadel.user.v2.Metadata=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zitadel.user.v2.Metadata}
 */
proto.zitadel.user.v2.CreateUserRequest.Human.prototype.addMetadata = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.zitadel.user.v2.Metadata, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.user.v2.CreateUserRequest.Human} returns this
 */
proto.zitadel.user.v2.CreateUserRequest.Human.prototype.clearMetadataList = function() {
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
proto.zitadel.user.v2.CreateUserRequest.Machine.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.CreateUserRequest.Machine.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.CreateUserRequest.Machine} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.CreateUserRequest.Machine.toObject = function(includeInstance, msg) {
  var f, obj = {
name: jspb.Message.getFieldWithDefault(msg, 1, ""),
description: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.zitadel.user.v2.CreateUserRequest.Machine}
 */
proto.zitadel.user.v2.CreateUserRequest.Machine.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.CreateUserRequest.Machine;
  return proto.zitadel.user.v2.CreateUserRequest.Machine.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.CreateUserRequest.Machine} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.CreateUserRequest.Machine}
 */
proto.zitadel.user.v2.CreateUserRequest.Machine.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setDescription(value);
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
proto.zitadel.user.v2.CreateUserRequest.Machine.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.CreateUserRequest.Machine.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.CreateUserRequest.Machine} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.CreateUserRequest.Machine.serializeBinaryToWriter = function(message, writer) {
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
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.zitadel.user.v2.CreateUserRequest.Machine.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2.CreateUserRequest.Machine} returns this
 */
proto.zitadel.user.v2.CreateUserRequest.Machine.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.zitadel.user.v2.CreateUserRequest.Machine.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2.CreateUserRequest.Machine} returns this
 */
proto.zitadel.user.v2.CreateUserRequest.Machine.prototype.setDescription = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.user.v2.CreateUserRequest.Machine} returns this
 */
proto.zitadel.user.v2.CreateUserRequest.Machine.prototype.clearDescription = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.CreateUserRequest.Machine.prototype.hasDescription = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string organization_id = 1;
 * @return {string}
 */
proto.zitadel.user.v2.CreateUserRequest.prototype.getOrganizationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2.CreateUserRequest} returns this
 */
proto.zitadel.user.v2.CreateUserRequest.prototype.setOrganizationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string user_id = 2;
 * @return {string}
 */
proto.zitadel.user.v2.CreateUserRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2.CreateUserRequest} returns this
 */
proto.zitadel.user.v2.CreateUserRequest.prototype.setUserId = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.user.v2.CreateUserRequest} returns this
 */
proto.zitadel.user.v2.CreateUserRequest.prototype.clearUserId = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.CreateUserRequest.prototype.hasUserId = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string username = 3;
 * @return {string}
 */
proto.zitadel.user.v2.CreateUserRequest.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2.CreateUserRequest} returns this
 */
proto.zitadel.user.v2.CreateUserRequest.prototype.setUsername = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.user.v2.CreateUserRequest} returns this
 */
proto.zitadel.user.v2.CreateUserRequest.prototype.clearUsername = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.CreateUserRequest.prototype.hasUsername = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Human human = 4;
 * @return {?proto.zitadel.user.v2.CreateUserRequest.Human}
 */
proto.zitadel.user.v2.CreateUserRequest.prototype.getHuman = function() {
  return /** @type{?proto.zitadel.user.v2.CreateUserRequest.Human} */ (
    jspb.Message.getWrapperField(this, proto.zitadel.user.v2.CreateUserRequest.Human, 4));
};


/**
 * @param {?proto.zitadel.user.v2.CreateUserRequest.Human|undefined} value
 * @return {!proto.zitadel.user.v2.CreateUserRequest} returns this
*/
proto.zitadel.user.v2.CreateUserRequest.prototype.setHuman = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.zitadel.user.v2.CreateUserRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2.CreateUserRequest} returns this
 */
proto.zitadel.user.v2.CreateUserRequest.prototype.clearHuman = function() {
  return this.setHuman(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.CreateUserRequest.prototype.hasHuman = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Machine machine = 5;
 * @return {?proto.zitadel.user.v2.CreateUserRequest.Machine}
 */
proto.zitadel.user.v2.CreateUserRequest.prototype.getMachine = function() {
  return /** @type{?proto.zitadel.user.v2.CreateUserRequest.Machine} */ (
    jspb.Message.getWrapperField(this, proto.zitadel.user.v2.CreateUserRequest.Machine, 5));
};


/**
 * @param {?proto.zitadel.user.v2.CreateUserRequest.Machine|undefined} value
 * @return {!proto.zitadel.user.v2.CreateUserRequest} returns this
*/
proto.zitadel.user.v2.CreateUserRequest.prototype.setMachine = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.zitadel.user.v2.CreateUserRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2.CreateUserRequest} returns this
 */
proto.zitadel.user.v2.CreateUserRequest.prototype.clearMachine = function() {
  return this.setMachine(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.CreateUserRequest.prototype.hasMachine = function() {
  return jspb.Message.getField(this, 5) != null;
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
proto.zitadel.user.v2.CreateUserResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.CreateUserResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.CreateUserResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.CreateUserResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 1, ""),
creationDate: (f = msg.getCreationDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
emailCode: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
phoneCode: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f
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
 * @return {!proto.zitadel.user.v2.CreateUserResponse}
 */
proto.zitadel.user.v2.CreateUserResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.CreateUserResponse;
  return proto.zitadel.user.v2.CreateUserResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.CreateUserResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.CreateUserResponse}
 */
proto.zitadel.user.v2.CreateUserResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreationDate(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmailCode(value);
      break;
    case 4:
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
proto.zitadel.user.v2.CreateUserResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.CreateUserResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.CreateUserResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.CreateUserResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCreationDate();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.zitadel.user.v2.CreateUserResponse.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2.CreateUserResponse} returns this
 */
proto.zitadel.user.v2.CreateUserResponse.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp creation_date = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.zitadel.user.v2.CreateUserResponse.prototype.getCreationDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.zitadel.user.v2.CreateUserResponse} returns this
*/
proto.zitadel.user.v2.CreateUserResponse.prototype.setCreationDate = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2.CreateUserResponse} returns this
 */
proto.zitadel.user.v2.CreateUserResponse.prototype.clearCreationDate = function() {
  return this.setCreationDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.CreateUserResponse.prototype.hasCreationDate = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string email_code = 3;
 * @return {string}
 */
proto.zitadel.user.v2.CreateUserResponse.prototype.getEmailCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2.CreateUserResponse} returns this
 */
proto.zitadel.user.v2.CreateUserResponse.prototype.setEmailCode = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.user.v2.CreateUserResponse} returns this
 */
proto.zitadel.user.v2.CreateUserResponse.prototype.clearEmailCode = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.CreateUserResponse.prototype.hasEmailCode = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string phone_code = 4;
 * @return {string}
 */
proto.zitadel.user.v2.CreateUserResponse.prototype.getPhoneCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2.CreateUserResponse} returns this
 */
proto.zitadel.user.v2.CreateUserResponse.prototype.setPhoneCode = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.user.v2.CreateUserResponse} returns this
 */
proto.zitadel.user.v2.CreateUserResponse.prototype.clearPhoneCode = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.CreateUserResponse.prototype.hasPhoneCode = function() {
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
proto.zitadel.user.v2.GetUserByIDRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.GetUserByIDRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.GetUserByIDRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.GetUserByIDRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.user.v2.GetUserByIDRequest}
 */
proto.zitadel.user.v2.GetUserByIDRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.GetUserByIDRequest;
  return proto.zitadel.user.v2.GetUserByIDRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.GetUserByIDRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.GetUserByIDRequest}
 */
proto.zitadel.user.v2.GetUserByIDRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.user.v2.GetUserByIDRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.GetUserByIDRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.GetUserByIDRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.GetUserByIDRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.user.v2.GetUserByIDRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2.GetUserByIDRequest} returns this
 */
proto.zitadel.user.v2.GetUserByIDRequest.prototype.setUserId = function(value) {
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
proto.zitadel.user.v2.GetUserByIDResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.GetUserByIDResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.GetUserByIDResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.GetUserByIDResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_v2_object_pb.Details.toObject(includeInstance, f),
user: (f = msg.getUser()) && zitadel_user_v2_user_pb.User.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.user.v2.GetUserByIDResponse}
 */
proto.zitadel.user.v2.GetUserByIDResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.GetUserByIDResponse;
  return proto.zitadel.user.v2.GetUserByIDResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.GetUserByIDResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.GetUserByIDResponse}
 */
proto.zitadel.user.v2.GetUserByIDResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new zitadel_user_v2_user_pb.User;
      reader.readMessage(value,zitadel_user_v2_user_pb.User.deserializeBinaryFromReader);
      msg.setUser(value);
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
proto.zitadel.user.v2.GetUserByIDResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.GetUserByIDResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.GetUserByIDResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.GetUserByIDResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v2_object_pb.Details.serializeBinaryToWriter
    );
  }
  f = message.getUser();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      zitadel_user_v2_user_pb.User.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.object.v2.Details details = 1;
 * @return {?proto.zitadel.object.v2.Details}
 */
proto.zitadel.user.v2.GetUserByIDResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.object.v2.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.object.v2.Details|undefined} value
 * @return {!proto.zitadel.user.v2.GetUserByIDResponse} returns this
*/
proto.zitadel.user.v2.GetUserByIDResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2.GetUserByIDResponse} returns this
 */
proto.zitadel.user.v2.GetUserByIDResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.GetUserByIDResponse.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional User user = 2;
 * @return {?proto.zitadel.user.v2.User}
 */
proto.zitadel.user.v2.GetUserByIDResponse.prototype.getUser = function() {
  return /** @type{?proto.zitadel.user.v2.User} */ (
    jspb.Message.getWrapperField(this, zitadel_user_v2_user_pb.User, 2));
};


/**
 * @param {?proto.zitadel.user.v2.User|undefined} value
 * @return {!proto.zitadel.user.v2.GetUserByIDResponse} returns this
*/
proto.zitadel.user.v2.GetUserByIDResponse.prototype.setUser = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2.GetUserByIDResponse} returns this
 */
proto.zitadel.user.v2.GetUserByIDResponse.prototype.clearUser = function() {
  return this.setUser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.GetUserByIDResponse.prototype.hasUser = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.user.v2.ListUsersRequest.repeatedFields_ = [3];



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
proto.zitadel.user.v2.ListUsersRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.ListUsersRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.ListUsersRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.ListUsersRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
query: (f = msg.getQuery()) && zitadel_object_v2_object_pb.ListQuery.toObject(includeInstance, f),
sortingColumn: jspb.Message.getFieldWithDefault(msg, 2, 0),
queriesList: jspb.Message.toObjectList(msg.getQueriesList(),
    zitadel_user_v2_query_pb.SearchQuery.toObject, includeInstance)
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
 * @return {!proto.zitadel.user.v2.ListUsersRequest}
 */
proto.zitadel.user.v2.ListUsersRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.ListUsersRequest;
  return proto.zitadel.user.v2.ListUsersRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.ListUsersRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.ListUsersRequest}
 */
proto.zitadel.user.v2.ListUsersRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.zitadel.user.v2.UserFieldName} */ (reader.readEnum());
      msg.setSortingColumn(value);
      break;
    case 3:
      var value = new zitadel_user_v2_query_pb.SearchQuery;
      reader.readMessage(value,zitadel_user_v2_query_pb.SearchQuery.deserializeBinaryFromReader);
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
proto.zitadel.user.v2.ListUsersRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.ListUsersRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.ListUsersRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.ListUsersRequest.serializeBinaryToWriter = function(message, writer) {
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
      zitadel_user_v2_query_pb.SearchQuery.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.object.v2.ListQuery query = 1;
 * @return {?proto.zitadel.object.v2.ListQuery}
 */
proto.zitadel.user.v2.ListUsersRequest.prototype.getQuery = function() {
  return /** @type{?proto.zitadel.object.v2.ListQuery} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2_object_pb.ListQuery, 1));
};


/**
 * @param {?proto.zitadel.object.v2.ListQuery|undefined} value
 * @return {!proto.zitadel.user.v2.ListUsersRequest} returns this
*/
proto.zitadel.user.v2.ListUsersRequest.prototype.setQuery = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2.ListUsersRequest} returns this
 */
proto.zitadel.user.v2.ListUsersRequest.prototype.clearQuery = function() {
  return this.setQuery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.ListUsersRequest.prototype.hasQuery = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional UserFieldName sorting_column = 2;
 * @return {!proto.zitadel.user.v2.UserFieldName}
 */
proto.zitadel.user.v2.ListUsersRequest.prototype.getSortingColumn = function() {
  return /** @type {!proto.zitadel.user.v2.UserFieldName} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.zitadel.user.v2.UserFieldName} value
 * @return {!proto.zitadel.user.v2.ListUsersRequest} returns this
 */
proto.zitadel.user.v2.ListUsersRequest.prototype.setSortingColumn = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * repeated SearchQuery queries = 3;
 * @return {!Array<!proto.zitadel.user.v2.SearchQuery>}
 */
proto.zitadel.user.v2.ListUsersRequest.prototype.getQueriesList = function() {
  return /** @type{!Array<!proto.zitadel.user.v2.SearchQuery>} */ (
    jspb.Message.getRepeatedWrapperField(this, zitadel_user_v2_query_pb.SearchQuery, 3));
};


/**
 * @param {!Array<!proto.zitadel.user.v2.SearchQuery>} value
 * @return {!proto.zitadel.user.v2.ListUsersRequest} returns this
*/
proto.zitadel.user.v2.ListUsersRequest.prototype.setQueriesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.zitadel.user.v2.SearchQuery=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zitadel.user.v2.SearchQuery}
 */
proto.zitadel.user.v2.ListUsersRequest.prototype.addQueries = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.zitadel.user.v2.SearchQuery, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.user.v2.ListUsersRequest} returns this
 */
proto.zitadel.user.v2.ListUsersRequest.prototype.clearQueriesList = function() {
  return this.setQueriesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.user.v2.ListUsersResponse.repeatedFields_ = [3];



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
proto.zitadel.user.v2.ListUsersResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.ListUsersResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.ListUsersResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.ListUsersResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_v2_object_pb.ListDetails.toObject(includeInstance, f),
sortingColumn: jspb.Message.getFieldWithDefault(msg, 2, 0),
resultList: jspb.Message.toObjectList(msg.getResultList(),
    zitadel_user_v2_user_pb.User.toObject, includeInstance)
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
 * @return {!proto.zitadel.user.v2.ListUsersResponse}
 */
proto.zitadel.user.v2.ListUsersResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.ListUsersResponse;
  return proto.zitadel.user.v2.ListUsersResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.ListUsersResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.ListUsersResponse}
 */
proto.zitadel.user.v2.ListUsersResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.zitadel.user.v2.UserFieldName} */ (reader.readEnum());
      msg.setSortingColumn(value);
      break;
    case 3:
      var value = new zitadel_user_v2_user_pb.User;
      reader.readMessage(value,zitadel_user_v2_user_pb.User.deserializeBinaryFromReader);
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
proto.zitadel.user.v2.ListUsersResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.ListUsersResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.ListUsersResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.ListUsersResponse.serializeBinaryToWriter = function(message, writer) {
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
      zitadel_user_v2_user_pb.User.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.object.v2.ListDetails details = 1;
 * @return {?proto.zitadel.object.v2.ListDetails}
 */
proto.zitadel.user.v2.ListUsersResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.object.v2.ListDetails} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2_object_pb.ListDetails, 1));
};


/**
 * @param {?proto.zitadel.object.v2.ListDetails|undefined} value
 * @return {!proto.zitadel.user.v2.ListUsersResponse} returns this
*/
proto.zitadel.user.v2.ListUsersResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2.ListUsersResponse} returns this
 */
proto.zitadel.user.v2.ListUsersResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.ListUsersResponse.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional UserFieldName sorting_column = 2;
 * @return {!proto.zitadel.user.v2.UserFieldName}
 */
proto.zitadel.user.v2.ListUsersResponse.prototype.getSortingColumn = function() {
  return /** @type {!proto.zitadel.user.v2.UserFieldName} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.zitadel.user.v2.UserFieldName} value
 * @return {!proto.zitadel.user.v2.ListUsersResponse} returns this
 */
proto.zitadel.user.v2.ListUsersResponse.prototype.setSortingColumn = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * repeated User result = 3;
 * @return {!Array<!proto.zitadel.user.v2.User>}
 */
proto.zitadel.user.v2.ListUsersResponse.prototype.getResultList = function() {
  return /** @type{!Array<!proto.zitadel.user.v2.User>} */ (
    jspb.Message.getRepeatedWrapperField(this, zitadel_user_v2_user_pb.User, 3));
};


/**
 * @param {!Array<!proto.zitadel.user.v2.User>} value
 * @return {!proto.zitadel.user.v2.ListUsersResponse} returns this
*/
proto.zitadel.user.v2.ListUsersResponse.prototype.setResultList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.zitadel.user.v2.User=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zitadel.user.v2.User}
 */
proto.zitadel.user.v2.ListUsersResponse.prototype.addResult = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.zitadel.user.v2.User, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.user.v2.ListUsersResponse} returns this
 */
proto.zitadel.user.v2.ListUsersResponse.prototype.clearResultList = function() {
  return this.setResultList([]);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.zitadel.user.v2.SetEmailRequest.oneofGroups_ = [[3,4,5]];

/**
 * @enum {number}
 */
proto.zitadel.user.v2.SetEmailRequest.VerificationCase = {
  VERIFICATION_NOT_SET: 0,
  SEND_CODE: 3,
  RETURN_CODE: 4,
  IS_VERIFIED: 5
};

/**
 * @return {proto.zitadel.user.v2.SetEmailRequest.VerificationCase}
 */
proto.zitadel.user.v2.SetEmailRequest.prototype.getVerificationCase = function() {
  return /** @type {proto.zitadel.user.v2.SetEmailRequest.VerificationCase} */(jspb.Message.computeOneofCase(this, proto.zitadel.user.v2.SetEmailRequest.oneofGroups_[0]));
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
proto.zitadel.user.v2.SetEmailRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.SetEmailRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.SetEmailRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.SetEmailRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
userId: jspb.Message.getFieldWithDefault(msg, 1, ""),
email: jspb.Message.getFieldWithDefault(msg, 2, ""),
sendCode: (f = msg.getSendCode()) && zitadel_user_v2_email_pb.SendEmailVerificationCode.toObject(includeInstance, f),
returnCode: (f = msg.getReturnCode()) && zitadel_user_v2_email_pb.ReturnEmailVerificationCode.toObject(includeInstance, f),
isVerified: (f = jspb.Message.getBooleanField(msg, 5)) == null ? undefined : f
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
 * @return {!proto.zitadel.user.v2.SetEmailRequest}
 */
proto.zitadel.user.v2.SetEmailRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.SetEmailRequest;
  return proto.zitadel.user.v2.SetEmailRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.SetEmailRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.SetEmailRequest}
 */
proto.zitadel.user.v2.SetEmailRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setEmail(value);
      break;
    case 3:
      var value = new zitadel_user_v2_email_pb.SendEmailVerificationCode;
      reader.readMessage(value,zitadel_user_v2_email_pb.SendEmailVerificationCode.deserializeBinaryFromReader);
      msg.setSendCode(value);
      break;
    case 4:
      var value = new zitadel_user_v2_email_pb.ReturnEmailVerificationCode;
      reader.readMessage(value,zitadel_user_v2_email_pb.ReturnEmailVerificationCode.deserializeBinaryFromReader);
      msg.setReturnCode(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsVerified(value);
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
proto.zitadel.user.v2.SetEmailRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.SetEmailRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.SetEmailRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.SetEmailRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSendCode();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      zitadel_user_v2_email_pb.SendEmailVerificationCode.serializeBinaryToWriter
    );
  }
  f = message.getReturnCode();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      zitadel_user_v2_email_pb.ReturnEmailVerificationCode.serializeBinaryToWriter
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeBool(
      5,
      f
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.zitadel.user.v2.SetEmailRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2.SetEmailRequest} returns this
 */
proto.zitadel.user.v2.SetEmailRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string email = 2;
 * @return {string}
 */
proto.zitadel.user.v2.SetEmailRequest.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2.SetEmailRequest} returns this
 */
proto.zitadel.user.v2.SetEmailRequest.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional SendEmailVerificationCode send_code = 3;
 * @return {?proto.zitadel.user.v2.SendEmailVerificationCode}
 */
proto.zitadel.user.v2.SetEmailRequest.prototype.getSendCode = function() {
  return /** @type{?proto.zitadel.user.v2.SendEmailVerificationCode} */ (
    jspb.Message.getWrapperField(this, zitadel_user_v2_email_pb.SendEmailVerificationCode, 3));
};


/**
 * @param {?proto.zitadel.user.v2.SendEmailVerificationCode|undefined} value
 * @return {!proto.zitadel.user.v2.SetEmailRequest} returns this
*/
proto.zitadel.user.v2.SetEmailRequest.prototype.setSendCode = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.zitadel.user.v2.SetEmailRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2.SetEmailRequest} returns this
 */
proto.zitadel.user.v2.SetEmailRequest.prototype.clearSendCode = function() {
  return this.setSendCode(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.SetEmailRequest.prototype.hasSendCode = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional ReturnEmailVerificationCode return_code = 4;
 * @return {?proto.zitadel.user.v2.ReturnEmailVerificationCode}
 */
proto.zitadel.user.v2.SetEmailRequest.prototype.getReturnCode = function() {
  return /** @type{?proto.zitadel.user.v2.ReturnEmailVerificationCode} */ (
    jspb.Message.getWrapperField(this, zitadel_user_v2_email_pb.ReturnEmailVerificationCode, 4));
};


/**
 * @param {?proto.zitadel.user.v2.ReturnEmailVerificationCode|undefined} value
 * @return {!proto.zitadel.user.v2.SetEmailRequest} returns this
*/
proto.zitadel.user.v2.SetEmailRequest.prototype.setReturnCode = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.zitadel.user.v2.SetEmailRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2.SetEmailRequest} returns this
 */
proto.zitadel.user.v2.SetEmailRequest.prototype.clearReturnCode = function() {
  return this.setReturnCode(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.SetEmailRequest.prototype.hasReturnCode = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool is_verified = 5;
 * @return {boolean}
 */
proto.zitadel.user.v2.SetEmailRequest.prototype.getIsVerified = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.zitadel.user.v2.SetEmailRequest} returns this
 */
proto.zitadel.user.v2.SetEmailRequest.prototype.setIsVerified = function(value) {
  return jspb.Message.setOneofField(this, 5, proto.zitadel.user.v2.SetEmailRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.user.v2.SetEmailRequest} returns this
 */
proto.zitadel.user.v2.SetEmailRequest.prototype.clearIsVerified = function() {
  return jspb.Message.setOneofField(this, 5, proto.zitadel.user.v2.SetEmailRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.SetEmailRequest.prototype.hasIsVerified = function() {
  return jspb.Message.getField(this, 5) != null;
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
proto.zitadel.user.v2.SetEmailResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.SetEmailResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.SetEmailResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.SetEmailResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_v2_object_pb.Details.toObject(includeInstance, f),
verificationCode: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.zitadel.user.v2.SetEmailResponse}
 */
proto.zitadel.user.v2.SetEmailResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.SetEmailResponse;
  return proto.zitadel.user.v2.SetEmailResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.SetEmailResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.SetEmailResponse}
 */
proto.zitadel.user.v2.SetEmailResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setVerificationCode(value);
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
proto.zitadel.user.v2.SetEmailResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.SetEmailResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.SetEmailResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.SetEmailResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v2_object_pb.Details.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional zitadel.object.v2.Details details = 1;
 * @return {?proto.zitadel.object.v2.Details}
 */
proto.zitadel.user.v2.SetEmailResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.object.v2.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.object.v2.Details|undefined} value
 * @return {!proto.zitadel.user.v2.SetEmailResponse} returns this
*/
proto.zitadel.user.v2.SetEmailResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2.SetEmailResponse} returns this
 */
proto.zitadel.user.v2.SetEmailResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.SetEmailResponse.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string verification_code = 2;
 * @return {string}
 */
proto.zitadel.user.v2.SetEmailResponse.prototype.getVerificationCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2.SetEmailResponse} returns this
 */
proto.zitadel.user.v2.SetEmailResponse.prototype.setVerificationCode = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.user.v2.SetEmailResponse} returns this
 */
proto.zitadel.user.v2.SetEmailResponse.prototype.clearVerificationCode = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.SetEmailResponse.prototype.hasVerificationCode = function() {
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
proto.zitadel.user.v2.ResendEmailCodeRequest.oneofGroups_ = [[2,3]];

/**
 * @enum {number}
 */
proto.zitadel.user.v2.ResendEmailCodeRequest.VerificationCase = {
  VERIFICATION_NOT_SET: 0,
  SEND_CODE: 2,
  RETURN_CODE: 3
};

/**
 * @return {proto.zitadel.user.v2.ResendEmailCodeRequest.VerificationCase}
 */
proto.zitadel.user.v2.ResendEmailCodeRequest.prototype.getVerificationCase = function() {
  return /** @type {proto.zitadel.user.v2.ResendEmailCodeRequest.VerificationCase} */(jspb.Message.computeOneofCase(this, proto.zitadel.user.v2.ResendEmailCodeRequest.oneofGroups_[0]));
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
proto.zitadel.user.v2.ResendEmailCodeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.ResendEmailCodeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.ResendEmailCodeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.ResendEmailCodeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
userId: jspb.Message.getFieldWithDefault(msg, 1, ""),
sendCode: (f = msg.getSendCode()) && zitadel_user_v2_email_pb.SendEmailVerificationCode.toObject(includeInstance, f),
returnCode: (f = msg.getReturnCode()) && zitadel_user_v2_email_pb.ReturnEmailVerificationCode.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.user.v2.ResendEmailCodeRequest}
 */
proto.zitadel.user.v2.ResendEmailCodeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.ResendEmailCodeRequest;
  return proto.zitadel.user.v2.ResendEmailCodeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.ResendEmailCodeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.ResendEmailCodeRequest}
 */
proto.zitadel.user.v2.ResendEmailCodeRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new zitadel_user_v2_email_pb.SendEmailVerificationCode;
      reader.readMessage(value,zitadel_user_v2_email_pb.SendEmailVerificationCode.deserializeBinaryFromReader);
      msg.setSendCode(value);
      break;
    case 3:
      var value = new zitadel_user_v2_email_pb.ReturnEmailVerificationCode;
      reader.readMessage(value,zitadel_user_v2_email_pb.ReturnEmailVerificationCode.deserializeBinaryFromReader);
      msg.setReturnCode(value);
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
proto.zitadel.user.v2.ResendEmailCodeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.ResendEmailCodeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.ResendEmailCodeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.ResendEmailCodeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSendCode();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      zitadel_user_v2_email_pb.SendEmailVerificationCode.serializeBinaryToWriter
    );
  }
  f = message.getReturnCode();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      zitadel_user_v2_email_pb.ReturnEmailVerificationCode.serializeBinaryToWriter
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.zitadel.user.v2.ResendEmailCodeRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2.ResendEmailCodeRequest} returns this
 */
proto.zitadel.user.v2.ResendEmailCodeRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional SendEmailVerificationCode send_code = 2;
 * @return {?proto.zitadel.user.v2.SendEmailVerificationCode}
 */
proto.zitadel.user.v2.ResendEmailCodeRequest.prototype.getSendCode = function() {
  return /** @type{?proto.zitadel.user.v2.SendEmailVerificationCode} */ (
    jspb.Message.getWrapperField(this, zitadel_user_v2_email_pb.SendEmailVerificationCode, 2));
};


/**
 * @param {?proto.zitadel.user.v2.SendEmailVerificationCode|undefined} value
 * @return {!proto.zitadel.user.v2.ResendEmailCodeRequest} returns this
*/
proto.zitadel.user.v2.ResendEmailCodeRequest.prototype.setSendCode = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.zitadel.user.v2.ResendEmailCodeRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2.ResendEmailCodeRequest} returns this
 */
proto.zitadel.user.v2.ResendEmailCodeRequest.prototype.clearSendCode = function() {
  return this.setSendCode(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.ResendEmailCodeRequest.prototype.hasSendCode = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ReturnEmailVerificationCode return_code = 3;
 * @return {?proto.zitadel.user.v2.ReturnEmailVerificationCode}
 */
proto.zitadel.user.v2.ResendEmailCodeRequest.prototype.getReturnCode = function() {
  return /** @type{?proto.zitadel.user.v2.ReturnEmailVerificationCode} */ (
    jspb.Message.getWrapperField(this, zitadel_user_v2_email_pb.ReturnEmailVerificationCode, 3));
};


/**
 * @param {?proto.zitadel.user.v2.ReturnEmailVerificationCode|undefined} value
 * @return {!proto.zitadel.user.v2.ResendEmailCodeRequest} returns this
*/
proto.zitadel.user.v2.ResendEmailCodeRequest.prototype.setReturnCode = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.zitadel.user.v2.ResendEmailCodeRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2.ResendEmailCodeRequest} returns this
 */
proto.zitadel.user.v2.ResendEmailCodeRequest.prototype.clearReturnCode = function() {
  return this.setReturnCode(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.ResendEmailCodeRequest.prototype.hasReturnCode = function() {
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
proto.zitadel.user.v2.ResendEmailCodeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.ResendEmailCodeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.ResendEmailCodeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.ResendEmailCodeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_v2_object_pb.Details.toObject(includeInstance, f),
verificationCode: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.zitadel.user.v2.ResendEmailCodeResponse}
 */
proto.zitadel.user.v2.ResendEmailCodeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.ResendEmailCodeResponse;
  return proto.zitadel.user.v2.ResendEmailCodeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.ResendEmailCodeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.ResendEmailCodeResponse}
 */
proto.zitadel.user.v2.ResendEmailCodeResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setVerificationCode(value);
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
proto.zitadel.user.v2.ResendEmailCodeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.ResendEmailCodeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.ResendEmailCodeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.ResendEmailCodeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v2_object_pb.Details.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional zitadel.object.v2.Details details = 1;
 * @return {?proto.zitadel.object.v2.Details}
 */
proto.zitadel.user.v2.ResendEmailCodeResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.object.v2.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.object.v2.Details|undefined} value
 * @return {!proto.zitadel.user.v2.ResendEmailCodeResponse} returns this
*/
proto.zitadel.user.v2.ResendEmailCodeResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2.ResendEmailCodeResponse} returns this
 */
proto.zitadel.user.v2.ResendEmailCodeResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.ResendEmailCodeResponse.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string verification_code = 2;
 * @return {string}
 */
proto.zitadel.user.v2.ResendEmailCodeResponse.prototype.getVerificationCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2.ResendEmailCodeResponse} returns this
 */
proto.zitadel.user.v2.ResendEmailCodeResponse.prototype.setVerificationCode = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.user.v2.ResendEmailCodeResponse} returns this
 */
proto.zitadel.user.v2.ResendEmailCodeResponse.prototype.clearVerificationCode = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.ResendEmailCodeResponse.prototype.hasVerificationCode = function() {
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
proto.zitadel.user.v2.SendEmailCodeRequest.oneofGroups_ = [[2,3]];

/**
 * @enum {number}
 */
proto.zitadel.user.v2.SendEmailCodeRequest.VerificationCase = {
  VERIFICATION_NOT_SET: 0,
  SEND_CODE: 2,
  RETURN_CODE: 3
};

/**
 * @return {proto.zitadel.user.v2.SendEmailCodeRequest.VerificationCase}
 */
proto.zitadel.user.v2.SendEmailCodeRequest.prototype.getVerificationCase = function() {
  return /** @type {proto.zitadel.user.v2.SendEmailCodeRequest.VerificationCase} */(jspb.Message.computeOneofCase(this, proto.zitadel.user.v2.SendEmailCodeRequest.oneofGroups_[0]));
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
proto.zitadel.user.v2.SendEmailCodeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.SendEmailCodeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.SendEmailCodeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.SendEmailCodeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
userId: jspb.Message.getFieldWithDefault(msg, 1, ""),
sendCode: (f = msg.getSendCode()) && zitadel_user_v2_email_pb.SendEmailVerificationCode.toObject(includeInstance, f),
returnCode: (f = msg.getReturnCode()) && zitadel_user_v2_email_pb.ReturnEmailVerificationCode.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.user.v2.SendEmailCodeRequest}
 */
proto.zitadel.user.v2.SendEmailCodeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.SendEmailCodeRequest;
  return proto.zitadel.user.v2.SendEmailCodeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.SendEmailCodeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.SendEmailCodeRequest}
 */
proto.zitadel.user.v2.SendEmailCodeRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new zitadel_user_v2_email_pb.SendEmailVerificationCode;
      reader.readMessage(value,zitadel_user_v2_email_pb.SendEmailVerificationCode.deserializeBinaryFromReader);
      msg.setSendCode(value);
      break;
    case 3:
      var value = new zitadel_user_v2_email_pb.ReturnEmailVerificationCode;
      reader.readMessage(value,zitadel_user_v2_email_pb.ReturnEmailVerificationCode.deserializeBinaryFromReader);
      msg.setReturnCode(value);
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
proto.zitadel.user.v2.SendEmailCodeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.SendEmailCodeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.SendEmailCodeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.SendEmailCodeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSendCode();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      zitadel_user_v2_email_pb.SendEmailVerificationCode.serializeBinaryToWriter
    );
  }
  f = message.getReturnCode();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      zitadel_user_v2_email_pb.ReturnEmailVerificationCode.serializeBinaryToWriter
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.zitadel.user.v2.SendEmailCodeRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2.SendEmailCodeRequest} returns this
 */
proto.zitadel.user.v2.SendEmailCodeRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional SendEmailVerificationCode send_code = 2;
 * @return {?proto.zitadel.user.v2.SendEmailVerificationCode}
 */
proto.zitadel.user.v2.SendEmailCodeRequest.prototype.getSendCode = function() {
  return /** @type{?proto.zitadel.user.v2.SendEmailVerificationCode} */ (
    jspb.Message.getWrapperField(this, zitadel_user_v2_email_pb.SendEmailVerificationCode, 2));
};


/**
 * @param {?proto.zitadel.user.v2.SendEmailVerificationCode|undefined} value
 * @return {!proto.zitadel.user.v2.SendEmailCodeRequest} returns this
*/
proto.zitadel.user.v2.SendEmailCodeRequest.prototype.setSendCode = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.zitadel.user.v2.SendEmailCodeRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2.SendEmailCodeRequest} returns this
 */
proto.zitadel.user.v2.SendEmailCodeRequest.prototype.clearSendCode = function() {
  return this.setSendCode(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.SendEmailCodeRequest.prototype.hasSendCode = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ReturnEmailVerificationCode return_code = 3;
 * @return {?proto.zitadel.user.v2.ReturnEmailVerificationCode}
 */
proto.zitadel.user.v2.SendEmailCodeRequest.prototype.getReturnCode = function() {
  return /** @type{?proto.zitadel.user.v2.ReturnEmailVerificationCode} */ (
    jspb.Message.getWrapperField(this, zitadel_user_v2_email_pb.ReturnEmailVerificationCode, 3));
};


/**
 * @param {?proto.zitadel.user.v2.ReturnEmailVerificationCode|undefined} value
 * @return {!proto.zitadel.user.v2.SendEmailCodeRequest} returns this
*/
proto.zitadel.user.v2.SendEmailCodeRequest.prototype.setReturnCode = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.zitadel.user.v2.SendEmailCodeRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2.SendEmailCodeRequest} returns this
 */
proto.zitadel.user.v2.SendEmailCodeRequest.prototype.clearReturnCode = function() {
  return this.setReturnCode(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.SendEmailCodeRequest.prototype.hasReturnCode = function() {
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
proto.zitadel.user.v2.SendEmailCodeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.SendEmailCodeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.SendEmailCodeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.SendEmailCodeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_v2_object_pb.Details.toObject(includeInstance, f),
verificationCode: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.zitadel.user.v2.SendEmailCodeResponse}
 */
proto.zitadel.user.v2.SendEmailCodeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.SendEmailCodeResponse;
  return proto.zitadel.user.v2.SendEmailCodeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.SendEmailCodeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.SendEmailCodeResponse}
 */
proto.zitadel.user.v2.SendEmailCodeResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setVerificationCode(value);
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
proto.zitadel.user.v2.SendEmailCodeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.SendEmailCodeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.SendEmailCodeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.SendEmailCodeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v2_object_pb.Details.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional zitadel.object.v2.Details details = 1;
 * @return {?proto.zitadel.object.v2.Details}
 */
proto.zitadel.user.v2.SendEmailCodeResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.object.v2.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.object.v2.Details|undefined} value
 * @return {!proto.zitadel.user.v2.SendEmailCodeResponse} returns this
*/
proto.zitadel.user.v2.SendEmailCodeResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2.SendEmailCodeResponse} returns this
 */
proto.zitadel.user.v2.SendEmailCodeResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.SendEmailCodeResponse.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string verification_code = 2;
 * @return {string}
 */
proto.zitadel.user.v2.SendEmailCodeResponse.prototype.getVerificationCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2.SendEmailCodeResponse} returns this
 */
proto.zitadel.user.v2.SendEmailCodeResponse.prototype.setVerificationCode = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.user.v2.SendEmailCodeResponse} returns this
 */
proto.zitadel.user.v2.SendEmailCodeResponse.prototype.clearVerificationCode = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.SendEmailCodeResponse.prototype.hasVerificationCode = function() {
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
proto.zitadel.user.v2.VerifyEmailRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.VerifyEmailRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.VerifyEmailRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.VerifyEmailRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
userId: jspb.Message.getFieldWithDefault(msg, 1, ""),
verificationCode: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.zitadel.user.v2.VerifyEmailRequest}
 */
proto.zitadel.user.v2.VerifyEmailRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.VerifyEmailRequest;
  return proto.zitadel.user.v2.VerifyEmailRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.VerifyEmailRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.VerifyEmailRequest}
 */
proto.zitadel.user.v2.VerifyEmailRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setVerificationCode(value);
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
proto.zitadel.user.v2.VerifyEmailRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.VerifyEmailRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.VerifyEmailRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.VerifyEmailRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getVerificationCode();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.zitadel.user.v2.VerifyEmailRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2.VerifyEmailRequest} returns this
 */
proto.zitadel.user.v2.VerifyEmailRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string verification_code = 2;
 * @return {string}
 */
proto.zitadel.user.v2.VerifyEmailRequest.prototype.getVerificationCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2.VerifyEmailRequest} returns this
 */
proto.zitadel.user.v2.VerifyEmailRequest.prototype.setVerificationCode = function(value) {
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
proto.zitadel.user.v2.VerifyEmailResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.VerifyEmailResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.VerifyEmailResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.VerifyEmailResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_v2_object_pb.Details.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.user.v2.VerifyEmailResponse}
 */
proto.zitadel.user.v2.VerifyEmailResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.VerifyEmailResponse;
  return proto.zitadel.user.v2.VerifyEmailResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.VerifyEmailResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.VerifyEmailResponse}
 */
proto.zitadel.user.v2.VerifyEmailResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.user.v2.VerifyEmailResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.VerifyEmailResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.VerifyEmailResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.VerifyEmailResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v2_object_pb.Details.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.object.v2.Details details = 1;
 * @return {?proto.zitadel.object.v2.Details}
 */
proto.zitadel.user.v2.VerifyEmailResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.object.v2.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.object.v2.Details|undefined} value
 * @return {!proto.zitadel.user.v2.VerifyEmailResponse} returns this
*/
proto.zitadel.user.v2.VerifyEmailResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2.VerifyEmailResponse} returns this
 */
proto.zitadel.user.v2.VerifyEmailResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.VerifyEmailResponse.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.zitadel.user.v2.SetPhoneRequest.oneofGroups_ = [[3,4,5]];

/**
 * @enum {number}
 */
proto.zitadel.user.v2.SetPhoneRequest.VerificationCase = {
  VERIFICATION_NOT_SET: 0,
  SEND_CODE: 3,
  RETURN_CODE: 4,
  IS_VERIFIED: 5
};

/**
 * @return {proto.zitadel.user.v2.SetPhoneRequest.VerificationCase}
 */
proto.zitadel.user.v2.SetPhoneRequest.prototype.getVerificationCase = function() {
  return /** @type {proto.zitadel.user.v2.SetPhoneRequest.VerificationCase} */(jspb.Message.computeOneofCase(this, proto.zitadel.user.v2.SetPhoneRequest.oneofGroups_[0]));
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
proto.zitadel.user.v2.SetPhoneRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.SetPhoneRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.SetPhoneRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.SetPhoneRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
userId: jspb.Message.getFieldWithDefault(msg, 1, ""),
phone: jspb.Message.getFieldWithDefault(msg, 2, ""),
sendCode: (f = msg.getSendCode()) && zitadel_user_v2_phone_pb.SendPhoneVerificationCode.toObject(includeInstance, f),
returnCode: (f = msg.getReturnCode()) && zitadel_user_v2_phone_pb.ReturnPhoneVerificationCode.toObject(includeInstance, f),
isVerified: (f = jspb.Message.getBooleanField(msg, 5)) == null ? undefined : f
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
 * @return {!proto.zitadel.user.v2.SetPhoneRequest}
 */
proto.zitadel.user.v2.SetPhoneRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.SetPhoneRequest;
  return proto.zitadel.user.v2.SetPhoneRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.SetPhoneRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.SetPhoneRequest}
 */
proto.zitadel.user.v2.SetPhoneRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setPhone(value);
      break;
    case 3:
      var value = new zitadel_user_v2_phone_pb.SendPhoneVerificationCode;
      reader.readMessage(value,zitadel_user_v2_phone_pb.SendPhoneVerificationCode.deserializeBinaryFromReader);
      msg.setSendCode(value);
      break;
    case 4:
      var value = new zitadel_user_v2_phone_pb.ReturnPhoneVerificationCode;
      reader.readMessage(value,zitadel_user_v2_phone_pb.ReturnPhoneVerificationCode.deserializeBinaryFromReader);
      msg.setReturnCode(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsVerified(value);
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
proto.zitadel.user.v2.SetPhoneRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.SetPhoneRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.SetPhoneRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.SetPhoneRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPhone();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSendCode();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      zitadel_user_v2_phone_pb.SendPhoneVerificationCode.serializeBinaryToWriter
    );
  }
  f = message.getReturnCode();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      zitadel_user_v2_phone_pb.ReturnPhoneVerificationCode.serializeBinaryToWriter
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeBool(
      5,
      f
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.zitadel.user.v2.SetPhoneRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2.SetPhoneRequest} returns this
 */
proto.zitadel.user.v2.SetPhoneRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string phone = 2;
 * @return {string}
 */
proto.zitadel.user.v2.SetPhoneRequest.prototype.getPhone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2.SetPhoneRequest} returns this
 */
proto.zitadel.user.v2.SetPhoneRequest.prototype.setPhone = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional SendPhoneVerificationCode send_code = 3;
 * @return {?proto.zitadel.user.v2.SendPhoneVerificationCode}
 */
proto.zitadel.user.v2.SetPhoneRequest.prototype.getSendCode = function() {
  return /** @type{?proto.zitadel.user.v2.SendPhoneVerificationCode} */ (
    jspb.Message.getWrapperField(this, zitadel_user_v2_phone_pb.SendPhoneVerificationCode, 3));
};


/**
 * @param {?proto.zitadel.user.v2.SendPhoneVerificationCode|undefined} value
 * @return {!proto.zitadel.user.v2.SetPhoneRequest} returns this
*/
proto.zitadel.user.v2.SetPhoneRequest.prototype.setSendCode = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.zitadel.user.v2.SetPhoneRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2.SetPhoneRequest} returns this
 */
proto.zitadel.user.v2.SetPhoneRequest.prototype.clearSendCode = function() {
  return this.setSendCode(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.SetPhoneRequest.prototype.hasSendCode = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional ReturnPhoneVerificationCode return_code = 4;
 * @return {?proto.zitadel.user.v2.ReturnPhoneVerificationCode}
 */
proto.zitadel.user.v2.SetPhoneRequest.prototype.getReturnCode = function() {
  return /** @type{?proto.zitadel.user.v2.ReturnPhoneVerificationCode} */ (
    jspb.Message.getWrapperField(this, zitadel_user_v2_phone_pb.ReturnPhoneVerificationCode, 4));
};


/**
 * @param {?proto.zitadel.user.v2.ReturnPhoneVerificationCode|undefined} value
 * @return {!proto.zitadel.user.v2.SetPhoneRequest} returns this
*/
proto.zitadel.user.v2.SetPhoneRequest.prototype.setReturnCode = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.zitadel.user.v2.SetPhoneRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2.SetPhoneRequest} returns this
 */
proto.zitadel.user.v2.SetPhoneRequest.prototype.clearReturnCode = function() {
  return this.setReturnCode(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.SetPhoneRequest.prototype.hasReturnCode = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool is_verified = 5;
 * @return {boolean}
 */
proto.zitadel.user.v2.SetPhoneRequest.prototype.getIsVerified = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.zitadel.user.v2.SetPhoneRequest} returns this
 */
proto.zitadel.user.v2.SetPhoneRequest.prototype.setIsVerified = function(value) {
  return jspb.Message.setOneofField(this, 5, proto.zitadel.user.v2.SetPhoneRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.user.v2.SetPhoneRequest} returns this
 */
proto.zitadel.user.v2.SetPhoneRequest.prototype.clearIsVerified = function() {
  return jspb.Message.setOneofField(this, 5, proto.zitadel.user.v2.SetPhoneRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.SetPhoneRequest.prototype.hasIsVerified = function() {
  return jspb.Message.getField(this, 5) != null;
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
proto.zitadel.user.v2.SetPhoneResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.SetPhoneResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.SetPhoneResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.SetPhoneResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_v2_object_pb.Details.toObject(includeInstance, f),
verificationCode: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.zitadel.user.v2.SetPhoneResponse}
 */
proto.zitadel.user.v2.SetPhoneResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.SetPhoneResponse;
  return proto.zitadel.user.v2.SetPhoneResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.SetPhoneResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.SetPhoneResponse}
 */
proto.zitadel.user.v2.SetPhoneResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setVerificationCode(value);
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
proto.zitadel.user.v2.SetPhoneResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.SetPhoneResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.SetPhoneResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.SetPhoneResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v2_object_pb.Details.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional zitadel.object.v2.Details details = 1;
 * @return {?proto.zitadel.object.v2.Details}
 */
proto.zitadel.user.v2.SetPhoneResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.object.v2.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.object.v2.Details|undefined} value
 * @return {!proto.zitadel.user.v2.SetPhoneResponse} returns this
*/
proto.zitadel.user.v2.SetPhoneResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2.SetPhoneResponse} returns this
 */
proto.zitadel.user.v2.SetPhoneResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.SetPhoneResponse.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string verification_code = 2;
 * @return {string}
 */
proto.zitadel.user.v2.SetPhoneResponse.prototype.getVerificationCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2.SetPhoneResponse} returns this
 */
proto.zitadel.user.v2.SetPhoneResponse.prototype.setVerificationCode = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.user.v2.SetPhoneResponse} returns this
 */
proto.zitadel.user.v2.SetPhoneResponse.prototype.clearVerificationCode = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.SetPhoneResponse.prototype.hasVerificationCode = function() {
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
proto.zitadel.user.v2.RemovePhoneRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.RemovePhoneRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.RemovePhoneRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.RemovePhoneRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.user.v2.RemovePhoneRequest}
 */
proto.zitadel.user.v2.RemovePhoneRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.RemovePhoneRequest;
  return proto.zitadel.user.v2.RemovePhoneRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.RemovePhoneRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.RemovePhoneRequest}
 */
proto.zitadel.user.v2.RemovePhoneRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.user.v2.RemovePhoneRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.RemovePhoneRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.RemovePhoneRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.RemovePhoneRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.user.v2.RemovePhoneRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2.RemovePhoneRequest} returns this
 */
proto.zitadel.user.v2.RemovePhoneRequest.prototype.setUserId = function(value) {
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
proto.zitadel.user.v2.RemovePhoneResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.RemovePhoneResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.RemovePhoneResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.RemovePhoneResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_v2_object_pb.Details.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.user.v2.RemovePhoneResponse}
 */
proto.zitadel.user.v2.RemovePhoneResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.RemovePhoneResponse;
  return proto.zitadel.user.v2.RemovePhoneResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.RemovePhoneResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.RemovePhoneResponse}
 */
proto.zitadel.user.v2.RemovePhoneResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.user.v2.RemovePhoneResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.RemovePhoneResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.RemovePhoneResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.RemovePhoneResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v2_object_pb.Details.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.object.v2.Details details = 1;
 * @return {?proto.zitadel.object.v2.Details}
 */
proto.zitadel.user.v2.RemovePhoneResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.object.v2.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.object.v2.Details|undefined} value
 * @return {!proto.zitadel.user.v2.RemovePhoneResponse} returns this
*/
proto.zitadel.user.v2.RemovePhoneResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2.RemovePhoneResponse} returns this
 */
proto.zitadel.user.v2.RemovePhoneResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.RemovePhoneResponse.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.zitadel.user.v2.ResendPhoneCodeRequest.oneofGroups_ = [[3,4]];

/**
 * @enum {number}
 */
proto.zitadel.user.v2.ResendPhoneCodeRequest.VerificationCase = {
  VERIFICATION_NOT_SET: 0,
  SEND_CODE: 3,
  RETURN_CODE: 4
};

/**
 * @return {proto.zitadel.user.v2.ResendPhoneCodeRequest.VerificationCase}
 */
proto.zitadel.user.v2.ResendPhoneCodeRequest.prototype.getVerificationCase = function() {
  return /** @type {proto.zitadel.user.v2.ResendPhoneCodeRequest.VerificationCase} */(jspb.Message.computeOneofCase(this, proto.zitadel.user.v2.ResendPhoneCodeRequest.oneofGroups_[0]));
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
proto.zitadel.user.v2.ResendPhoneCodeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.ResendPhoneCodeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.ResendPhoneCodeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.ResendPhoneCodeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
userId: jspb.Message.getFieldWithDefault(msg, 1, ""),
sendCode: (f = msg.getSendCode()) && zitadel_user_v2_phone_pb.SendPhoneVerificationCode.toObject(includeInstance, f),
returnCode: (f = msg.getReturnCode()) && zitadel_user_v2_phone_pb.ReturnPhoneVerificationCode.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.user.v2.ResendPhoneCodeRequest}
 */
proto.zitadel.user.v2.ResendPhoneCodeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.ResendPhoneCodeRequest;
  return proto.zitadel.user.v2.ResendPhoneCodeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.ResendPhoneCodeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.ResendPhoneCodeRequest}
 */
proto.zitadel.user.v2.ResendPhoneCodeRequest.deserializeBinaryFromReader = function(msg, reader) {
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
    case 3:
      var value = new zitadel_user_v2_phone_pb.SendPhoneVerificationCode;
      reader.readMessage(value,zitadel_user_v2_phone_pb.SendPhoneVerificationCode.deserializeBinaryFromReader);
      msg.setSendCode(value);
      break;
    case 4:
      var value = new zitadel_user_v2_phone_pb.ReturnPhoneVerificationCode;
      reader.readMessage(value,zitadel_user_v2_phone_pb.ReturnPhoneVerificationCode.deserializeBinaryFromReader);
      msg.setReturnCode(value);
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
proto.zitadel.user.v2.ResendPhoneCodeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.ResendPhoneCodeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.ResendPhoneCodeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.ResendPhoneCodeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSendCode();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      zitadel_user_v2_phone_pb.SendPhoneVerificationCode.serializeBinaryToWriter
    );
  }
  f = message.getReturnCode();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      zitadel_user_v2_phone_pb.ReturnPhoneVerificationCode.serializeBinaryToWriter
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.zitadel.user.v2.ResendPhoneCodeRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2.ResendPhoneCodeRequest} returns this
 */
proto.zitadel.user.v2.ResendPhoneCodeRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional SendPhoneVerificationCode send_code = 3;
 * @return {?proto.zitadel.user.v2.SendPhoneVerificationCode}
 */
proto.zitadel.user.v2.ResendPhoneCodeRequest.prototype.getSendCode = function() {
  return /** @type{?proto.zitadel.user.v2.SendPhoneVerificationCode} */ (
    jspb.Message.getWrapperField(this, zitadel_user_v2_phone_pb.SendPhoneVerificationCode, 3));
};


/**
 * @param {?proto.zitadel.user.v2.SendPhoneVerificationCode|undefined} value
 * @return {!proto.zitadel.user.v2.ResendPhoneCodeRequest} returns this
*/
proto.zitadel.user.v2.ResendPhoneCodeRequest.prototype.setSendCode = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.zitadel.user.v2.ResendPhoneCodeRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2.ResendPhoneCodeRequest} returns this
 */
proto.zitadel.user.v2.ResendPhoneCodeRequest.prototype.clearSendCode = function() {
  return this.setSendCode(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.ResendPhoneCodeRequest.prototype.hasSendCode = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional ReturnPhoneVerificationCode return_code = 4;
 * @return {?proto.zitadel.user.v2.ReturnPhoneVerificationCode}
 */
proto.zitadel.user.v2.ResendPhoneCodeRequest.prototype.getReturnCode = function() {
  return /** @type{?proto.zitadel.user.v2.ReturnPhoneVerificationCode} */ (
    jspb.Message.getWrapperField(this, zitadel_user_v2_phone_pb.ReturnPhoneVerificationCode, 4));
};


/**
 * @param {?proto.zitadel.user.v2.ReturnPhoneVerificationCode|undefined} value
 * @return {!proto.zitadel.user.v2.ResendPhoneCodeRequest} returns this
*/
proto.zitadel.user.v2.ResendPhoneCodeRequest.prototype.setReturnCode = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.zitadel.user.v2.ResendPhoneCodeRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2.ResendPhoneCodeRequest} returns this
 */
proto.zitadel.user.v2.ResendPhoneCodeRequest.prototype.clearReturnCode = function() {
  return this.setReturnCode(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.ResendPhoneCodeRequest.prototype.hasReturnCode = function() {
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
proto.zitadel.user.v2.ResendPhoneCodeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.ResendPhoneCodeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.ResendPhoneCodeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.ResendPhoneCodeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_v2_object_pb.Details.toObject(includeInstance, f),
verificationCode: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.zitadel.user.v2.ResendPhoneCodeResponse}
 */
proto.zitadel.user.v2.ResendPhoneCodeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.ResendPhoneCodeResponse;
  return proto.zitadel.user.v2.ResendPhoneCodeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.ResendPhoneCodeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.ResendPhoneCodeResponse}
 */
proto.zitadel.user.v2.ResendPhoneCodeResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setVerificationCode(value);
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
proto.zitadel.user.v2.ResendPhoneCodeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.ResendPhoneCodeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.ResendPhoneCodeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.ResendPhoneCodeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v2_object_pb.Details.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional zitadel.object.v2.Details details = 1;
 * @return {?proto.zitadel.object.v2.Details}
 */
proto.zitadel.user.v2.ResendPhoneCodeResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.object.v2.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.object.v2.Details|undefined} value
 * @return {!proto.zitadel.user.v2.ResendPhoneCodeResponse} returns this
*/
proto.zitadel.user.v2.ResendPhoneCodeResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2.ResendPhoneCodeResponse} returns this
 */
proto.zitadel.user.v2.ResendPhoneCodeResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.ResendPhoneCodeResponse.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string verification_code = 2;
 * @return {string}
 */
proto.zitadel.user.v2.ResendPhoneCodeResponse.prototype.getVerificationCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2.ResendPhoneCodeResponse} returns this
 */
proto.zitadel.user.v2.ResendPhoneCodeResponse.prototype.setVerificationCode = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.user.v2.ResendPhoneCodeResponse} returns this
 */
proto.zitadel.user.v2.ResendPhoneCodeResponse.prototype.clearVerificationCode = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.ResendPhoneCodeResponse.prototype.hasVerificationCode = function() {
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
proto.zitadel.user.v2.VerifyPhoneRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.VerifyPhoneRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.VerifyPhoneRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.VerifyPhoneRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
userId: jspb.Message.getFieldWithDefault(msg, 1, ""),
verificationCode: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.zitadel.user.v2.VerifyPhoneRequest}
 */
proto.zitadel.user.v2.VerifyPhoneRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.VerifyPhoneRequest;
  return proto.zitadel.user.v2.VerifyPhoneRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.VerifyPhoneRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.VerifyPhoneRequest}
 */
proto.zitadel.user.v2.VerifyPhoneRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setVerificationCode(value);
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
proto.zitadel.user.v2.VerifyPhoneRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.VerifyPhoneRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.VerifyPhoneRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.VerifyPhoneRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getVerificationCode();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.zitadel.user.v2.VerifyPhoneRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2.VerifyPhoneRequest} returns this
 */
proto.zitadel.user.v2.VerifyPhoneRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string verification_code = 2;
 * @return {string}
 */
proto.zitadel.user.v2.VerifyPhoneRequest.prototype.getVerificationCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2.VerifyPhoneRequest} returns this
 */
proto.zitadel.user.v2.VerifyPhoneRequest.prototype.setVerificationCode = function(value) {
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
proto.zitadel.user.v2.VerifyPhoneResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.VerifyPhoneResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.VerifyPhoneResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.VerifyPhoneResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_v2_object_pb.Details.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.user.v2.VerifyPhoneResponse}
 */
proto.zitadel.user.v2.VerifyPhoneResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.VerifyPhoneResponse;
  return proto.zitadel.user.v2.VerifyPhoneResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.VerifyPhoneResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.VerifyPhoneResponse}
 */
proto.zitadel.user.v2.VerifyPhoneResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.user.v2.VerifyPhoneResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.VerifyPhoneResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.VerifyPhoneResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.VerifyPhoneResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v2_object_pb.Details.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.object.v2.Details details = 1;
 * @return {?proto.zitadel.object.v2.Details}
 */
proto.zitadel.user.v2.VerifyPhoneResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.object.v2.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.object.v2.Details|undefined} value
 * @return {!proto.zitadel.user.v2.VerifyPhoneResponse} returns this
*/
proto.zitadel.user.v2.VerifyPhoneResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2.VerifyPhoneResponse} returns this
 */
proto.zitadel.user.v2.VerifyPhoneResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.VerifyPhoneResponse.prototype.hasDetails = function() {
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
proto.zitadel.user.v2.DeleteUserRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.DeleteUserRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.DeleteUserRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.DeleteUserRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.user.v2.DeleteUserRequest}
 */
proto.zitadel.user.v2.DeleteUserRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.DeleteUserRequest;
  return proto.zitadel.user.v2.DeleteUserRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.DeleteUserRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.DeleteUserRequest}
 */
proto.zitadel.user.v2.DeleteUserRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.user.v2.DeleteUserRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.DeleteUserRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.DeleteUserRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.DeleteUserRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.user.v2.DeleteUserRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2.DeleteUserRequest} returns this
 */
proto.zitadel.user.v2.DeleteUserRequest.prototype.setUserId = function(value) {
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
proto.zitadel.user.v2.DeleteUserResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.DeleteUserResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.DeleteUserResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.DeleteUserResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_v2_object_pb.Details.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.user.v2.DeleteUserResponse}
 */
proto.zitadel.user.v2.DeleteUserResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.DeleteUserResponse;
  return proto.zitadel.user.v2.DeleteUserResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.DeleteUserResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.DeleteUserResponse}
 */
proto.zitadel.user.v2.DeleteUserResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.user.v2.DeleteUserResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.DeleteUserResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.DeleteUserResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.DeleteUserResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v2_object_pb.Details.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.object.v2.Details details = 1;
 * @return {?proto.zitadel.object.v2.Details}
 */
proto.zitadel.user.v2.DeleteUserResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.object.v2.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.object.v2.Details|undefined} value
 * @return {!proto.zitadel.user.v2.DeleteUserResponse} returns this
*/
proto.zitadel.user.v2.DeleteUserResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2.DeleteUserResponse} returns this
 */
proto.zitadel.user.v2.DeleteUserResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.DeleteUserResponse.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.zitadel.user.v2.UpdateUserRequest.oneofGroups_ = [[3,4]];

/**
 * @enum {number}
 */
proto.zitadel.user.v2.UpdateUserRequest.UserTypeCase = {
  USER_TYPE_NOT_SET: 0,
  HUMAN: 3,
  MACHINE: 4
};

/**
 * @return {proto.zitadel.user.v2.UpdateUserRequest.UserTypeCase}
 */
proto.zitadel.user.v2.UpdateUserRequest.prototype.getUserTypeCase = function() {
  return /** @type {proto.zitadel.user.v2.UpdateUserRequest.UserTypeCase} */(jspb.Message.computeOneofCase(this, proto.zitadel.user.v2.UpdateUserRequest.oneofGroups_[0]));
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
proto.zitadel.user.v2.UpdateUserRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.UpdateUserRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.UpdateUserRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.UpdateUserRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
userId: jspb.Message.getFieldWithDefault(msg, 1, ""),
username: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
human: (f = msg.getHuman()) && proto.zitadel.user.v2.UpdateUserRequest.Human.toObject(includeInstance, f),
machine: (f = msg.getMachine()) && proto.zitadel.user.v2.UpdateUserRequest.Machine.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.user.v2.UpdateUserRequest}
 */
proto.zitadel.user.v2.UpdateUserRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.UpdateUserRequest;
  return proto.zitadel.user.v2.UpdateUserRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.UpdateUserRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.UpdateUserRequest}
 */
proto.zitadel.user.v2.UpdateUserRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setUsername(value);
      break;
    case 3:
      var value = new proto.zitadel.user.v2.UpdateUserRequest.Human;
      reader.readMessage(value,proto.zitadel.user.v2.UpdateUserRequest.Human.deserializeBinaryFromReader);
      msg.setHuman(value);
      break;
    case 4:
      var value = new proto.zitadel.user.v2.UpdateUserRequest.Machine;
      reader.readMessage(value,proto.zitadel.user.v2.UpdateUserRequest.Machine.deserializeBinaryFromReader);
      msg.setMachine(value);
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
proto.zitadel.user.v2.UpdateUserRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.UpdateUserRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.UpdateUserRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.UpdateUserRequest.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getHuman();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.zitadel.user.v2.UpdateUserRequest.Human.serializeBinaryToWriter
    );
  }
  f = message.getMachine();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.zitadel.user.v2.UpdateUserRequest.Machine.serializeBinaryToWriter
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
proto.zitadel.user.v2.UpdateUserRequest.Human.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.UpdateUserRequest.Human.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.UpdateUserRequest.Human} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.UpdateUserRequest.Human.toObject = function(includeInstance, msg) {
  var f, obj = {
profile: (f = msg.getProfile()) && proto.zitadel.user.v2.UpdateUserRequest.Human.Profile.toObject(includeInstance, f),
email: (f = msg.getEmail()) && zitadel_user_v2_email_pb.SetHumanEmail.toObject(includeInstance, f),
phone: (f = msg.getPhone()) && zitadel_user_v2_phone_pb.SetHumanPhone.toObject(includeInstance, f),
password: (f = msg.getPassword()) && zitadel_user_v2_password_pb.SetPassword.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.user.v2.UpdateUserRequest.Human}
 */
proto.zitadel.user.v2.UpdateUserRequest.Human.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.UpdateUserRequest.Human;
  return proto.zitadel.user.v2.UpdateUserRequest.Human.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.UpdateUserRequest.Human} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.UpdateUserRequest.Human}
 */
proto.zitadel.user.v2.UpdateUserRequest.Human.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.zitadel.user.v2.UpdateUserRequest.Human.Profile;
      reader.readMessage(value,proto.zitadel.user.v2.UpdateUserRequest.Human.Profile.deserializeBinaryFromReader);
      msg.setProfile(value);
      break;
    case 2:
      var value = new zitadel_user_v2_email_pb.SetHumanEmail;
      reader.readMessage(value,zitadel_user_v2_email_pb.SetHumanEmail.deserializeBinaryFromReader);
      msg.setEmail(value);
      break;
    case 3:
      var value = new zitadel_user_v2_phone_pb.SetHumanPhone;
      reader.readMessage(value,zitadel_user_v2_phone_pb.SetHumanPhone.deserializeBinaryFromReader);
      msg.setPhone(value);
      break;
    case 4:
      var value = new zitadel_user_v2_password_pb.SetPassword;
      reader.readMessage(value,zitadel_user_v2_password_pb.SetPassword.deserializeBinaryFromReader);
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
proto.zitadel.user.v2.UpdateUserRequest.Human.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.UpdateUserRequest.Human.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.UpdateUserRequest.Human} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.UpdateUserRequest.Human.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProfile();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.zitadel.user.v2.UpdateUserRequest.Human.Profile.serializeBinaryToWriter
    );
  }
  f = message.getEmail();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      zitadel_user_v2_email_pb.SetHumanEmail.serializeBinaryToWriter
    );
  }
  f = message.getPhone();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      zitadel_user_v2_phone_pb.SetHumanPhone.serializeBinaryToWriter
    );
  }
  f = message.getPassword();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      zitadel_user_v2_password_pb.SetPassword.serializeBinaryToWriter
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
proto.zitadel.user.v2.UpdateUserRequest.Human.Profile.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.UpdateUserRequest.Human.Profile.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.UpdateUserRequest.Human.Profile} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.UpdateUserRequest.Human.Profile.toObject = function(includeInstance, msg) {
  var f, obj = {
givenName: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
familyName: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
nickName: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
displayName: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
preferredLanguage: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
gender: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f
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
 * @return {!proto.zitadel.user.v2.UpdateUserRequest.Human.Profile}
 */
proto.zitadel.user.v2.UpdateUserRequest.Human.Profile.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.UpdateUserRequest.Human.Profile;
  return proto.zitadel.user.v2.UpdateUserRequest.Human.Profile.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.UpdateUserRequest.Human.Profile} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.UpdateUserRequest.Human.Profile}
 */
proto.zitadel.user.v2.UpdateUserRequest.Human.Profile.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setGivenName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFamilyName(value);
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
      var value = /** @type {!proto.zitadel.user.v2.Gender} */ (reader.readEnum());
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
proto.zitadel.user.v2.UpdateUserRequest.Human.Profile.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.UpdateUserRequest.Human.Profile.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.UpdateUserRequest.Human.Profile} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.UpdateUserRequest.Human.Profile.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
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
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
  f = /** @type {!proto.zitadel.user.v2.Gender} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeEnum(
      6,
      f
    );
  }
};


/**
 * optional string given_name = 1;
 * @return {string}
 */
proto.zitadel.user.v2.UpdateUserRequest.Human.Profile.prototype.getGivenName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2.UpdateUserRequest.Human.Profile} returns this
 */
proto.zitadel.user.v2.UpdateUserRequest.Human.Profile.prototype.setGivenName = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.user.v2.UpdateUserRequest.Human.Profile} returns this
 */
proto.zitadel.user.v2.UpdateUserRequest.Human.Profile.prototype.clearGivenName = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.UpdateUserRequest.Human.Profile.prototype.hasGivenName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string family_name = 2;
 * @return {string}
 */
proto.zitadel.user.v2.UpdateUserRequest.Human.Profile.prototype.getFamilyName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2.UpdateUserRequest.Human.Profile} returns this
 */
proto.zitadel.user.v2.UpdateUserRequest.Human.Profile.prototype.setFamilyName = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.user.v2.UpdateUserRequest.Human.Profile} returns this
 */
proto.zitadel.user.v2.UpdateUserRequest.Human.Profile.prototype.clearFamilyName = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.UpdateUserRequest.Human.Profile.prototype.hasFamilyName = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string nick_name = 3;
 * @return {string}
 */
proto.zitadel.user.v2.UpdateUserRequest.Human.Profile.prototype.getNickName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2.UpdateUserRequest.Human.Profile} returns this
 */
proto.zitadel.user.v2.UpdateUserRequest.Human.Profile.prototype.setNickName = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.user.v2.UpdateUserRequest.Human.Profile} returns this
 */
proto.zitadel.user.v2.UpdateUserRequest.Human.Profile.prototype.clearNickName = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.UpdateUserRequest.Human.Profile.prototype.hasNickName = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string display_name = 4;
 * @return {string}
 */
proto.zitadel.user.v2.UpdateUserRequest.Human.Profile.prototype.getDisplayName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2.UpdateUserRequest.Human.Profile} returns this
 */
proto.zitadel.user.v2.UpdateUserRequest.Human.Profile.prototype.setDisplayName = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.user.v2.UpdateUserRequest.Human.Profile} returns this
 */
proto.zitadel.user.v2.UpdateUserRequest.Human.Profile.prototype.clearDisplayName = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.UpdateUserRequest.Human.Profile.prototype.hasDisplayName = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string preferred_language = 5;
 * @return {string}
 */
proto.zitadel.user.v2.UpdateUserRequest.Human.Profile.prototype.getPreferredLanguage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2.UpdateUserRequest.Human.Profile} returns this
 */
proto.zitadel.user.v2.UpdateUserRequest.Human.Profile.prototype.setPreferredLanguage = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.user.v2.UpdateUserRequest.Human.Profile} returns this
 */
proto.zitadel.user.v2.UpdateUserRequest.Human.Profile.prototype.clearPreferredLanguage = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.UpdateUserRequest.Human.Profile.prototype.hasPreferredLanguage = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional Gender gender = 6;
 * @return {!proto.zitadel.user.v2.Gender}
 */
proto.zitadel.user.v2.UpdateUserRequest.Human.Profile.prototype.getGender = function() {
  return /** @type {!proto.zitadel.user.v2.Gender} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.zitadel.user.v2.Gender} value
 * @return {!proto.zitadel.user.v2.UpdateUserRequest.Human.Profile} returns this
 */
proto.zitadel.user.v2.UpdateUserRequest.Human.Profile.prototype.setGender = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.user.v2.UpdateUserRequest.Human.Profile} returns this
 */
proto.zitadel.user.v2.UpdateUserRequest.Human.Profile.prototype.clearGender = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.UpdateUserRequest.Human.Profile.prototype.hasGender = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional Profile profile = 1;
 * @return {?proto.zitadel.user.v2.UpdateUserRequest.Human.Profile}
 */
proto.zitadel.user.v2.UpdateUserRequest.Human.prototype.getProfile = function() {
  return /** @type{?proto.zitadel.user.v2.UpdateUserRequest.Human.Profile} */ (
    jspb.Message.getWrapperField(this, proto.zitadel.user.v2.UpdateUserRequest.Human.Profile, 1));
};


/**
 * @param {?proto.zitadel.user.v2.UpdateUserRequest.Human.Profile|undefined} value
 * @return {!proto.zitadel.user.v2.UpdateUserRequest.Human} returns this
*/
proto.zitadel.user.v2.UpdateUserRequest.Human.prototype.setProfile = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2.UpdateUserRequest.Human} returns this
 */
proto.zitadel.user.v2.UpdateUserRequest.Human.prototype.clearProfile = function() {
  return this.setProfile(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.UpdateUserRequest.Human.prototype.hasProfile = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional SetHumanEmail email = 2;
 * @return {?proto.zitadel.user.v2.SetHumanEmail}
 */
proto.zitadel.user.v2.UpdateUserRequest.Human.prototype.getEmail = function() {
  return /** @type{?proto.zitadel.user.v2.SetHumanEmail} */ (
    jspb.Message.getWrapperField(this, zitadel_user_v2_email_pb.SetHumanEmail, 2));
};


/**
 * @param {?proto.zitadel.user.v2.SetHumanEmail|undefined} value
 * @return {!proto.zitadel.user.v2.UpdateUserRequest.Human} returns this
*/
proto.zitadel.user.v2.UpdateUserRequest.Human.prototype.setEmail = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2.UpdateUserRequest.Human} returns this
 */
proto.zitadel.user.v2.UpdateUserRequest.Human.prototype.clearEmail = function() {
  return this.setEmail(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.UpdateUserRequest.Human.prototype.hasEmail = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional SetHumanPhone phone = 3;
 * @return {?proto.zitadel.user.v2.SetHumanPhone}
 */
proto.zitadel.user.v2.UpdateUserRequest.Human.prototype.getPhone = function() {
  return /** @type{?proto.zitadel.user.v2.SetHumanPhone} */ (
    jspb.Message.getWrapperField(this, zitadel_user_v2_phone_pb.SetHumanPhone, 3));
};


/**
 * @param {?proto.zitadel.user.v2.SetHumanPhone|undefined} value
 * @return {!proto.zitadel.user.v2.UpdateUserRequest.Human} returns this
*/
proto.zitadel.user.v2.UpdateUserRequest.Human.prototype.setPhone = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2.UpdateUserRequest.Human} returns this
 */
proto.zitadel.user.v2.UpdateUserRequest.Human.prototype.clearPhone = function() {
  return this.setPhone(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.UpdateUserRequest.Human.prototype.hasPhone = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional SetPassword password = 4;
 * @return {?proto.zitadel.user.v2.SetPassword}
 */
proto.zitadel.user.v2.UpdateUserRequest.Human.prototype.getPassword = function() {
  return /** @type{?proto.zitadel.user.v2.SetPassword} */ (
    jspb.Message.getWrapperField(this, zitadel_user_v2_password_pb.SetPassword, 4));
};


/**
 * @param {?proto.zitadel.user.v2.SetPassword|undefined} value
 * @return {!proto.zitadel.user.v2.UpdateUserRequest.Human} returns this
*/
proto.zitadel.user.v2.UpdateUserRequest.Human.prototype.setPassword = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2.UpdateUserRequest.Human} returns this
 */
proto.zitadel.user.v2.UpdateUserRequest.Human.prototype.clearPassword = function() {
  return this.setPassword(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.UpdateUserRequest.Human.prototype.hasPassword = function() {
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
proto.zitadel.user.v2.UpdateUserRequest.Machine.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.UpdateUserRequest.Machine.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.UpdateUserRequest.Machine} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.UpdateUserRequest.Machine.toObject = function(includeInstance, msg) {
  var f, obj = {
name: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
description: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.zitadel.user.v2.UpdateUserRequest.Machine}
 */
proto.zitadel.user.v2.UpdateUserRequest.Machine.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.UpdateUserRequest.Machine;
  return proto.zitadel.user.v2.UpdateUserRequest.Machine.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.UpdateUserRequest.Machine} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.UpdateUserRequest.Machine}
 */
proto.zitadel.user.v2.UpdateUserRequest.Machine.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setDescription(value);
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
proto.zitadel.user.v2.UpdateUserRequest.Machine.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.UpdateUserRequest.Machine.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.UpdateUserRequest.Machine} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.UpdateUserRequest.Machine.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
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
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.zitadel.user.v2.UpdateUserRequest.Machine.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2.UpdateUserRequest.Machine} returns this
 */
proto.zitadel.user.v2.UpdateUserRequest.Machine.prototype.setName = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.user.v2.UpdateUserRequest.Machine} returns this
 */
proto.zitadel.user.v2.UpdateUserRequest.Machine.prototype.clearName = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.UpdateUserRequest.Machine.prototype.hasName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.zitadel.user.v2.UpdateUserRequest.Machine.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2.UpdateUserRequest.Machine} returns this
 */
proto.zitadel.user.v2.UpdateUserRequest.Machine.prototype.setDescription = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.user.v2.UpdateUserRequest.Machine} returns this
 */
proto.zitadel.user.v2.UpdateUserRequest.Machine.prototype.clearDescription = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.UpdateUserRequest.Machine.prototype.hasDescription = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.zitadel.user.v2.UpdateUserRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2.UpdateUserRequest} returns this
 */
proto.zitadel.user.v2.UpdateUserRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string username = 2;
 * @return {string}
 */
proto.zitadel.user.v2.UpdateUserRequest.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2.UpdateUserRequest} returns this
 */
proto.zitadel.user.v2.UpdateUserRequest.prototype.setUsername = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.user.v2.UpdateUserRequest} returns this
 */
proto.zitadel.user.v2.UpdateUserRequest.prototype.clearUsername = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.UpdateUserRequest.prototype.hasUsername = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Human human = 3;
 * @return {?proto.zitadel.user.v2.UpdateUserRequest.Human}
 */
proto.zitadel.user.v2.UpdateUserRequest.prototype.getHuman = function() {
  return /** @type{?proto.zitadel.user.v2.UpdateUserRequest.Human} */ (
    jspb.Message.getWrapperField(this, proto.zitadel.user.v2.UpdateUserRequest.Human, 3));
};


/**
 * @param {?proto.zitadel.user.v2.UpdateUserRequest.Human|undefined} value
 * @return {!proto.zitadel.user.v2.UpdateUserRequest} returns this
*/
proto.zitadel.user.v2.UpdateUserRequest.prototype.setHuman = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.zitadel.user.v2.UpdateUserRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2.UpdateUserRequest} returns this
 */
proto.zitadel.user.v2.UpdateUserRequest.prototype.clearHuman = function() {
  return this.setHuman(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.UpdateUserRequest.prototype.hasHuman = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Machine machine = 4;
 * @return {?proto.zitadel.user.v2.UpdateUserRequest.Machine}
 */
proto.zitadel.user.v2.UpdateUserRequest.prototype.getMachine = function() {
  return /** @type{?proto.zitadel.user.v2.UpdateUserRequest.Machine} */ (
    jspb.Message.getWrapperField(this, proto.zitadel.user.v2.UpdateUserRequest.Machine, 4));
};


/**
 * @param {?proto.zitadel.user.v2.UpdateUserRequest.Machine|undefined} value
 * @return {!proto.zitadel.user.v2.UpdateUserRequest} returns this
*/
proto.zitadel.user.v2.UpdateUserRequest.prototype.setMachine = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.zitadel.user.v2.UpdateUserRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2.UpdateUserRequest} returns this
 */
proto.zitadel.user.v2.UpdateUserRequest.prototype.clearMachine = function() {
  return this.setMachine(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.UpdateUserRequest.prototype.hasMachine = function() {
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
proto.zitadel.user.v2.UpdateUserResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.UpdateUserResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.UpdateUserResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.UpdateUserResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
changeDate: (f = msg.getChangeDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
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
 * @return {!proto.zitadel.user.v2.UpdateUserResponse}
 */
proto.zitadel.user.v2.UpdateUserResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.UpdateUserResponse;
  return proto.zitadel.user.v2.UpdateUserResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.UpdateUserResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.UpdateUserResponse}
 */
proto.zitadel.user.v2.UpdateUserResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.user.v2.UpdateUserResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.UpdateUserResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.UpdateUserResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.UpdateUserResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChangeDate();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
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
 * optional google.protobuf.Timestamp change_date = 1;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.zitadel.user.v2.UpdateUserResponse.prototype.getChangeDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.zitadel.user.v2.UpdateUserResponse} returns this
*/
proto.zitadel.user.v2.UpdateUserResponse.prototype.setChangeDate = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2.UpdateUserResponse} returns this
 */
proto.zitadel.user.v2.UpdateUserResponse.prototype.clearChangeDate = function() {
  return this.setChangeDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.UpdateUserResponse.prototype.hasChangeDate = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string email_code = 2;
 * @return {string}
 */
proto.zitadel.user.v2.UpdateUserResponse.prototype.getEmailCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2.UpdateUserResponse} returns this
 */
proto.zitadel.user.v2.UpdateUserResponse.prototype.setEmailCode = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.user.v2.UpdateUserResponse} returns this
 */
proto.zitadel.user.v2.UpdateUserResponse.prototype.clearEmailCode = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.UpdateUserResponse.prototype.hasEmailCode = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string phone_code = 3;
 * @return {string}
 */
proto.zitadel.user.v2.UpdateUserResponse.prototype.getPhoneCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2.UpdateUserResponse} returns this
 */
proto.zitadel.user.v2.UpdateUserResponse.prototype.setPhoneCode = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.user.v2.UpdateUserResponse} returns this
 */
proto.zitadel.user.v2.UpdateUserResponse.prototype.clearPhoneCode = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.UpdateUserResponse.prototype.hasPhoneCode = function() {
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
proto.zitadel.user.v2.UpdateHumanUserRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.UpdateHumanUserRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.UpdateHumanUserRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.UpdateHumanUserRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
userId: jspb.Message.getFieldWithDefault(msg, 1, ""),
username: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
profile: (f = msg.getProfile()) && zitadel_user_v2_user_pb.SetHumanProfile.toObject(includeInstance, f),
email: (f = msg.getEmail()) && zitadel_user_v2_email_pb.SetHumanEmail.toObject(includeInstance, f),
phone: (f = msg.getPhone()) && zitadel_user_v2_phone_pb.SetHumanPhone.toObject(includeInstance, f),
password: (f = msg.getPassword()) && zitadel_user_v2_password_pb.SetPassword.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.user.v2.UpdateHumanUserRequest}
 */
proto.zitadel.user.v2.UpdateHumanUserRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.UpdateHumanUserRequest;
  return proto.zitadel.user.v2.UpdateHumanUserRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.UpdateHumanUserRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.UpdateHumanUserRequest}
 */
proto.zitadel.user.v2.UpdateHumanUserRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setUsername(value);
      break;
    case 3:
      var value = new zitadel_user_v2_user_pb.SetHumanProfile;
      reader.readMessage(value,zitadel_user_v2_user_pb.SetHumanProfile.deserializeBinaryFromReader);
      msg.setProfile(value);
      break;
    case 4:
      var value = new zitadel_user_v2_email_pb.SetHumanEmail;
      reader.readMessage(value,zitadel_user_v2_email_pb.SetHumanEmail.deserializeBinaryFromReader);
      msg.setEmail(value);
      break;
    case 5:
      var value = new zitadel_user_v2_phone_pb.SetHumanPhone;
      reader.readMessage(value,zitadel_user_v2_phone_pb.SetHumanPhone.deserializeBinaryFromReader);
      msg.setPhone(value);
      break;
    case 6:
      var value = new zitadel_user_v2_password_pb.SetPassword;
      reader.readMessage(value,zitadel_user_v2_password_pb.SetPassword.deserializeBinaryFromReader);
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
proto.zitadel.user.v2.UpdateHumanUserRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.UpdateHumanUserRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.UpdateHumanUserRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.UpdateHumanUserRequest.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getProfile();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      zitadel_user_v2_user_pb.SetHumanProfile.serializeBinaryToWriter
    );
  }
  f = message.getEmail();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      zitadel_user_v2_email_pb.SetHumanEmail.serializeBinaryToWriter
    );
  }
  f = message.getPhone();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      zitadel_user_v2_phone_pb.SetHumanPhone.serializeBinaryToWriter
    );
  }
  f = message.getPassword();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      zitadel_user_v2_password_pb.SetPassword.serializeBinaryToWriter
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.zitadel.user.v2.UpdateHumanUserRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2.UpdateHumanUserRequest} returns this
 */
proto.zitadel.user.v2.UpdateHumanUserRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string username = 2;
 * @return {string}
 */
proto.zitadel.user.v2.UpdateHumanUserRequest.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2.UpdateHumanUserRequest} returns this
 */
proto.zitadel.user.v2.UpdateHumanUserRequest.prototype.setUsername = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.user.v2.UpdateHumanUserRequest} returns this
 */
proto.zitadel.user.v2.UpdateHumanUserRequest.prototype.clearUsername = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.UpdateHumanUserRequest.prototype.hasUsername = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional SetHumanProfile profile = 3;
 * @return {?proto.zitadel.user.v2.SetHumanProfile}
 */
proto.zitadel.user.v2.UpdateHumanUserRequest.prototype.getProfile = function() {
  return /** @type{?proto.zitadel.user.v2.SetHumanProfile} */ (
    jspb.Message.getWrapperField(this, zitadel_user_v2_user_pb.SetHumanProfile, 3));
};


/**
 * @param {?proto.zitadel.user.v2.SetHumanProfile|undefined} value
 * @return {!proto.zitadel.user.v2.UpdateHumanUserRequest} returns this
*/
proto.zitadel.user.v2.UpdateHumanUserRequest.prototype.setProfile = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2.UpdateHumanUserRequest} returns this
 */
proto.zitadel.user.v2.UpdateHumanUserRequest.prototype.clearProfile = function() {
  return this.setProfile(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.UpdateHumanUserRequest.prototype.hasProfile = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional SetHumanEmail email = 4;
 * @return {?proto.zitadel.user.v2.SetHumanEmail}
 */
proto.zitadel.user.v2.UpdateHumanUserRequest.prototype.getEmail = function() {
  return /** @type{?proto.zitadel.user.v2.SetHumanEmail} */ (
    jspb.Message.getWrapperField(this, zitadel_user_v2_email_pb.SetHumanEmail, 4));
};


/**
 * @param {?proto.zitadel.user.v2.SetHumanEmail|undefined} value
 * @return {!proto.zitadel.user.v2.UpdateHumanUserRequest} returns this
*/
proto.zitadel.user.v2.UpdateHumanUserRequest.prototype.setEmail = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2.UpdateHumanUserRequest} returns this
 */
proto.zitadel.user.v2.UpdateHumanUserRequest.prototype.clearEmail = function() {
  return this.setEmail(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.UpdateHumanUserRequest.prototype.hasEmail = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional SetHumanPhone phone = 5;
 * @return {?proto.zitadel.user.v2.SetHumanPhone}
 */
proto.zitadel.user.v2.UpdateHumanUserRequest.prototype.getPhone = function() {
  return /** @type{?proto.zitadel.user.v2.SetHumanPhone} */ (
    jspb.Message.getWrapperField(this, zitadel_user_v2_phone_pb.SetHumanPhone, 5));
};


/**
 * @param {?proto.zitadel.user.v2.SetHumanPhone|undefined} value
 * @return {!proto.zitadel.user.v2.UpdateHumanUserRequest} returns this
*/
proto.zitadel.user.v2.UpdateHumanUserRequest.prototype.setPhone = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2.UpdateHumanUserRequest} returns this
 */
proto.zitadel.user.v2.UpdateHumanUserRequest.prototype.clearPhone = function() {
  return this.setPhone(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.UpdateHumanUserRequest.prototype.hasPhone = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional SetPassword password = 6;
 * @return {?proto.zitadel.user.v2.SetPassword}
 */
proto.zitadel.user.v2.UpdateHumanUserRequest.prototype.getPassword = function() {
  return /** @type{?proto.zitadel.user.v2.SetPassword} */ (
    jspb.Message.getWrapperField(this, zitadel_user_v2_password_pb.SetPassword, 6));
};


/**
 * @param {?proto.zitadel.user.v2.SetPassword|undefined} value
 * @return {!proto.zitadel.user.v2.UpdateHumanUserRequest} returns this
*/
proto.zitadel.user.v2.UpdateHumanUserRequest.prototype.setPassword = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2.UpdateHumanUserRequest} returns this
 */
proto.zitadel.user.v2.UpdateHumanUserRequest.prototype.clearPassword = function() {
  return this.setPassword(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.UpdateHumanUserRequest.prototype.hasPassword = function() {
  return jspb.Message.getField(this, 6) != null;
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
proto.zitadel.user.v2.UpdateHumanUserResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.UpdateHumanUserResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.UpdateHumanUserResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.UpdateHumanUserResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_v2_object_pb.Details.toObject(includeInstance, f),
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
 * @return {!proto.zitadel.user.v2.UpdateHumanUserResponse}
 */
proto.zitadel.user.v2.UpdateHumanUserResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.UpdateHumanUserResponse;
  return proto.zitadel.user.v2.UpdateHumanUserResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.UpdateHumanUserResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.UpdateHumanUserResponse}
 */
proto.zitadel.user.v2.UpdateHumanUserResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.user.v2.UpdateHumanUserResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.UpdateHumanUserResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.UpdateHumanUserResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.UpdateHumanUserResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v2_object_pb.Details.serializeBinaryToWriter
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
 * optional zitadel.object.v2.Details details = 1;
 * @return {?proto.zitadel.object.v2.Details}
 */
proto.zitadel.user.v2.UpdateHumanUserResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.object.v2.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.object.v2.Details|undefined} value
 * @return {!proto.zitadel.user.v2.UpdateHumanUserResponse} returns this
*/
proto.zitadel.user.v2.UpdateHumanUserResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2.UpdateHumanUserResponse} returns this
 */
proto.zitadel.user.v2.UpdateHumanUserResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.UpdateHumanUserResponse.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string email_code = 2;
 * @return {string}
 */
proto.zitadel.user.v2.UpdateHumanUserResponse.prototype.getEmailCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2.UpdateHumanUserResponse} returns this
 */
proto.zitadel.user.v2.UpdateHumanUserResponse.prototype.setEmailCode = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.user.v2.UpdateHumanUserResponse} returns this
 */
proto.zitadel.user.v2.UpdateHumanUserResponse.prototype.clearEmailCode = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.UpdateHumanUserResponse.prototype.hasEmailCode = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string phone_code = 3;
 * @return {string}
 */
proto.zitadel.user.v2.UpdateHumanUserResponse.prototype.getPhoneCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2.UpdateHumanUserResponse} returns this
 */
proto.zitadel.user.v2.UpdateHumanUserResponse.prototype.setPhoneCode = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.user.v2.UpdateHumanUserResponse} returns this
 */
proto.zitadel.user.v2.UpdateHumanUserResponse.prototype.clearPhoneCode = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.UpdateHumanUserResponse.prototype.hasPhoneCode = function() {
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
proto.zitadel.user.v2.DeactivateUserRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.DeactivateUserRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.DeactivateUserRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.DeactivateUserRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.user.v2.DeactivateUserRequest}
 */
proto.zitadel.user.v2.DeactivateUserRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.DeactivateUserRequest;
  return proto.zitadel.user.v2.DeactivateUserRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.DeactivateUserRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.DeactivateUserRequest}
 */
proto.zitadel.user.v2.DeactivateUserRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.user.v2.DeactivateUserRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.DeactivateUserRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.DeactivateUserRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.DeactivateUserRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.user.v2.DeactivateUserRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2.DeactivateUserRequest} returns this
 */
proto.zitadel.user.v2.DeactivateUserRequest.prototype.setUserId = function(value) {
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
proto.zitadel.user.v2.DeactivateUserResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.DeactivateUserResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.DeactivateUserResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.DeactivateUserResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_v2_object_pb.Details.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.user.v2.DeactivateUserResponse}
 */
proto.zitadel.user.v2.DeactivateUserResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.DeactivateUserResponse;
  return proto.zitadel.user.v2.DeactivateUserResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.DeactivateUserResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.DeactivateUserResponse}
 */
proto.zitadel.user.v2.DeactivateUserResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.user.v2.DeactivateUserResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.DeactivateUserResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.DeactivateUserResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.DeactivateUserResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v2_object_pb.Details.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.object.v2.Details details = 1;
 * @return {?proto.zitadel.object.v2.Details}
 */
proto.zitadel.user.v2.DeactivateUserResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.object.v2.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.object.v2.Details|undefined} value
 * @return {!proto.zitadel.user.v2.DeactivateUserResponse} returns this
*/
proto.zitadel.user.v2.DeactivateUserResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2.DeactivateUserResponse} returns this
 */
proto.zitadel.user.v2.DeactivateUserResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.DeactivateUserResponse.prototype.hasDetails = function() {
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
proto.zitadel.user.v2.ReactivateUserRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.ReactivateUserRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.ReactivateUserRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.ReactivateUserRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.user.v2.ReactivateUserRequest}
 */
proto.zitadel.user.v2.ReactivateUserRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.ReactivateUserRequest;
  return proto.zitadel.user.v2.ReactivateUserRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.ReactivateUserRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.ReactivateUserRequest}
 */
proto.zitadel.user.v2.ReactivateUserRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.user.v2.ReactivateUserRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.ReactivateUserRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.ReactivateUserRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.ReactivateUserRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.user.v2.ReactivateUserRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2.ReactivateUserRequest} returns this
 */
proto.zitadel.user.v2.ReactivateUserRequest.prototype.setUserId = function(value) {
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
proto.zitadel.user.v2.ReactivateUserResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.ReactivateUserResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.ReactivateUserResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.ReactivateUserResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_v2_object_pb.Details.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.user.v2.ReactivateUserResponse}
 */
proto.zitadel.user.v2.ReactivateUserResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.ReactivateUserResponse;
  return proto.zitadel.user.v2.ReactivateUserResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.ReactivateUserResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.ReactivateUserResponse}
 */
proto.zitadel.user.v2.ReactivateUserResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.user.v2.ReactivateUserResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.ReactivateUserResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.ReactivateUserResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.ReactivateUserResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v2_object_pb.Details.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.object.v2.Details details = 1;
 * @return {?proto.zitadel.object.v2.Details}
 */
proto.zitadel.user.v2.ReactivateUserResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.object.v2.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.object.v2.Details|undefined} value
 * @return {!proto.zitadel.user.v2.ReactivateUserResponse} returns this
*/
proto.zitadel.user.v2.ReactivateUserResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2.ReactivateUserResponse} returns this
 */
proto.zitadel.user.v2.ReactivateUserResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.ReactivateUserResponse.prototype.hasDetails = function() {
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
proto.zitadel.user.v2.LockUserRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.LockUserRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.LockUserRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.LockUserRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.user.v2.LockUserRequest}
 */
proto.zitadel.user.v2.LockUserRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.LockUserRequest;
  return proto.zitadel.user.v2.LockUserRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.LockUserRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.LockUserRequest}
 */
proto.zitadel.user.v2.LockUserRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.user.v2.LockUserRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.LockUserRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.LockUserRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.LockUserRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.user.v2.LockUserRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2.LockUserRequest} returns this
 */
proto.zitadel.user.v2.LockUserRequest.prototype.setUserId = function(value) {
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
proto.zitadel.user.v2.LockUserResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.LockUserResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.LockUserResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.LockUserResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_v2_object_pb.Details.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.user.v2.LockUserResponse}
 */
proto.zitadel.user.v2.LockUserResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.LockUserResponse;
  return proto.zitadel.user.v2.LockUserResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.LockUserResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.LockUserResponse}
 */
proto.zitadel.user.v2.LockUserResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.user.v2.LockUserResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.LockUserResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.LockUserResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.LockUserResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v2_object_pb.Details.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.object.v2.Details details = 1;
 * @return {?proto.zitadel.object.v2.Details}
 */
proto.zitadel.user.v2.LockUserResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.object.v2.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.object.v2.Details|undefined} value
 * @return {!proto.zitadel.user.v2.LockUserResponse} returns this
*/
proto.zitadel.user.v2.LockUserResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2.LockUserResponse} returns this
 */
proto.zitadel.user.v2.LockUserResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.LockUserResponse.prototype.hasDetails = function() {
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
proto.zitadel.user.v2.UnlockUserRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.UnlockUserRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.UnlockUserRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.UnlockUserRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.user.v2.UnlockUserRequest}
 */
proto.zitadel.user.v2.UnlockUserRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.UnlockUserRequest;
  return proto.zitadel.user.v2.UnlockUserRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.UnlockUserRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.UnlockUserRequest}
 */
proto.zitadel.user.v2.UnlockUserRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.user.v2.UnlockUserRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.UnlockUserRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.UnlockUserRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.UnlockUserRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.user.v2.UnlockUserRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2.UnlockUserRequest} returns this
 */
proto.zitadel.user.v2.UnlockUserRequest.prototype.setUserId = function(value) {
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
proto.zitadel.user.v2.UnlockUserResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.UnlockUserResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.UnlockUserResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.UnlockUserResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_v2_object_pb.Details.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.user.v2.UnlockUserResponse}
 */
proto.zitadel.user.v2.UnlockUserResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.UnlockUserResponse;
  return proto.zitadel.user.v2.UnlockUserResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.UnlockUserResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.UnlockUserResponse}
 */
proto.zitadel.user.v2.UnlockUserResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.user.v2.UnlockUserResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.UnlockUserResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.UnlockUserResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.UnlockUserResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v2_object_pb.Details.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.object.v2.Details details = 1;
 * @return {?proto.zitadel.object.v2.Details}
 */
proto.zitadel.user.v2.UnlockUserResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.object.v2.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.object.v2.Details|undefined} value
 * @return {!proto.zitadel.user.v2.UnlockUserResponse} returns this
*/
proto.zitadel.user.v2.UnlockUserResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2.UnlockUserResponse} returns this
 */
proto.zitadel.user.v2.UnlockUserResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.UnlockUserResponse.prototype.hasDetails = function() {
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
proto.zitadel.user.v2.RegisterPasskeyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.RegisterPasskeyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.RegisterPasskeyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.RegisterPasskeyRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
userId: jspb.Message.getFieldWithDefault(msg, 1, ""),
code: (f = msg.getCode()) && zitadel_user_v2_auth_pb.PasskeyRegistrationCode.toObject(includeInstance, f),
authenticator: jspb.Message.getFieldWithDefault(msg, 3, 0),
domain: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.zitadel.user.v2.RegisterPasskeyRequest}
 */
proto.zitadel.user.v2.RegisterPasskeyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.RegisterPasskeyRequest;
  return proto.zitadel.user.v2.RegisterPasskeyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.RegisterPasskeyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.RegisterPasskeyRequest}
 */
proto.zitadel.user.v2.RegisterPasskeyRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new zitadel_user_v2_auth_pb.PasskeyRegistrationCode;
      reader.readMessage(value,zitadel_user_v2_auth_pb.PasskeyRegistrationCode.deserializeBinaryFromReader);
      msg.setCode(value);
      break;
    case 3:
      var value = /** @type {!proto.zitadel.user.v2.PasskeyAuthenticator} */ (reader.readEnum());
      msg.setAuthenticator(value);
      break;
    case 4:
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
proto.zitadel.user.v2.RegisterPasskeyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.RegisterPasskeyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.RegisterPasskeyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.RegisterPasskeyRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCode();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      zitadel_user_v2_auth_pb.PasskeyRegistrationCode.serializeBinaryToWriter
    );
  }
  f = message.getAuthenticator();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getDomain();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.zitadel.user.v2.RegisterPasskeyRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2.RegisterPasskeyRequest} returns this
 */
proto.zitadel.user.v2.RegisterPasskeyRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional PasskeyRegistrationCode code = 2;
 * @return {?proto.zitadel.user.v2.PasskeyRegistrationCode}
 */
proto.zitadel.user.v2.RegisterPasskeyRequest.prototype.getCode = function() {
  return /** @type{?proto.zitadel.user.v2.PasskeyRegistrationCode} */ (
    jspb.Message.getWrapperField(this, zitadel_user_v2_auth_pb.PasskeyRegistrationCode, 2));
};


/**
 * @param {?proto.zitadel.user.v2.PasskeyRegistrationCode|undefined} value
 * @return {!proto.zitadel.user.v2.RegisterPasskeyRequest} returns this
*/
proto.zitadel.user.v2.RegisterPasskeyRequest.prototype.setCode = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2.RegisterPasskeyRequest} returns this
 */
proto.zitadel.user.v2.RegisterPasskeyRequest.prototype.clearCode = function() {
  return this.setCode(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.RegisterPasskeyRequest.prototype.hasCode = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional PasskeyAuthenticator authenticator = 3;
 * @return {!proto.zitadel.user.v2.PasskeyAuthenticator}
 */
proto.zitadel.user.v2.RegisterPasskeyRequest.prototype.getAuthenticator = function() {
  return /** @type {!proto.zitadel.user.v2.PasskeyAuthenticator} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.zitadel.user.v2.PasskeyAuthenticator} value
 * @return {!proto.zitadel.user.v2.RegisterPasskeyRequest} returns this
 */
proto.zitadel.user.v2.RegisterPasskeyRequest.prototype.setAuthenticator = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional string domain = 4;
 * @return {string}
 */
proto.zitadel.user.v2.RegisterPasskeyRequest.prototype.getDomain = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2.RegisterPasskeyRequest} returns this
 */
proto.zitadel.user.v2.RegisterPasskeyRequest.prototype.setDomain = function(value) {
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
proto.zitadel.user.v2.RegisterPasskeyResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.RegisterPasskeyResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.RegisterPasskeyResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.RegisterPasskeyResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_v2_object_pb.Details.toObject(includeInstance, f),
passkeyId: jspb.Message.getFieldWithDefault(msg, 2, ""),
publicKeyCredentialCreationOptions: (f = msg.getPublicKeyCredentialCreationOptions()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.user.v2.RegisterPasskeyResponse}
 */
proto.zitadel.user.v2.RegisterPasskeyResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.RegisterPasskeyResponse;
  return proto.zitadel.user.v2.RegisterPasskeyResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.RegisterPasskeyResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.RegisterPasskeyResponse}
 */
proto.zitadel.user.v2.RegisterPasskeyResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setPasskeyId(value);
      break;
    case 3:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setPublicKeyCredentialCreationOptions(value);
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
proto.zitadel.user.v2.RegisterPasskeyResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.RegisterPasskeyResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.RegisterPasskeyResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.RegisterPasskeyResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v2_object_pb.Details.serializeBinaryToWriter
    );
  }
  f = message.getPasskeyId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPublicKeyCredentialCreationOptions();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.object.v2.Details details = 1;
 * @return {?proto.zitadel.object.v2.Details}
 */
proto.zitadel.user.v2.RegisterPasskeyResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.object.v2.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.object.v2.Details|undefined} value
 * @return {!proto.zitadel.user.v2.RegisterPasskeyResponse} returns this
*/
proto.zitadel.user.v2.RegisterPasskeyResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2.RegisterPasskeyResponse} returns this
 */
proto.zitadel.user.v2.RegisterPasskeyResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.RegisterPasskeyResponse.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string passkey_id = 2;
 * @return {string}
 */
proto.zitadel.user.v2.RegisterPasskeyResponse.prototype.getPasskeyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2.RegisterPasskeyResponse} returns this
 */
proto.zitadel.user.v2.RegisterPasskeyResponse.prototype.setPasskeyId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.Struct public_key_credential_creation_options = 3;
 * @return {?proto.google.protobuf.Struct}
 */
proto.zitadel.user.v2.RegisterPasskeyResponse.prototype.getPublicKeyCredentialCreationOptions = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 3));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.zitadel.user.v2.RegisterPasskeyResponse} returns this
*/
proto.zitadel.user.v2.RegisterPasskeyResponse.prototype.setPublicKeyCredentialCreationOptions = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2.RegisterPasskeyResponse} returns this
 */
proto.zitadel.user.v2.RegisterPasskeyResponse.prototype.clearPublicKeyCredentialCreationOptions = function() {
  return this.setPublicKeyCredentialCreationOptions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.RegisterPasskeyResponse.prototype.hasPublicKeyCredentialCreationOptions = function() {
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
proto.zitadel.user.v2.VerifyPasskeyRegistrationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.VerifyPasskeyRegistrationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.VerifyPasskeyRegistrationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.VerifyPasskeyRegistrationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
userId: jspb.Message.getFieldWithDefault(msg, 1, ""),
passkeyId: jspb.Message.getFieldWithDefault(msg, 2, ""),
publicKeyCredential: (f = msg.getPublicKeyCredential()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f),
passkeyName: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.zitadel.user.v2.VerifyPasskeyRegistrationRequest}
 */
proto.zitadel.user.v2.VerifyPasskeyRegistrationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.VerifyPasskeyRegistrationRequest;
  return proto.zitadel.user.v2.VerifyPasskeyRegistrationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.VerifyPasskeyRegistrationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.VerifyPasskeyRegistrationRequest}
 */
proto.zitadel.user.v2.VerifyPasskeyRegistrationRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setPasskeyId(value);
      break;
    case 3:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setPublicKeyCredential(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPasskeyName(value);
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
proto.zitadel.user.v2.VerifyPasskeyRegistrationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.VerifyPasskeyRegistrationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.VerifyPasskeyRegistrationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.VerifyPasskeyRegistrationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPasskeyId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPublicKeyCredential();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
  f = message.getPasskeyName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.zitadel.user.v2.VerifyPasskeyRegistrationRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2.VerifyPasskeyRegistrationRequest} returns this
 */
proto.zitadel.user.v2.VerifyPasskeyRegistrationRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string passkey_id = 2;
 * @return {string}
 */
proto.zitadel.user.v2.VerifyPasskeyRegistrationRequest.prototype.getPasskeyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2.VerifyPasskeyRegistrationRequest} returns this
 */
proto.zitadel.user.v2.VerifyPasskeyRegistrationRequest.prototype.setPasskeyId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.Struct public_key_credential = 3;
 * @return {?proto.google.protobuf.Struct}
 */
proto.zitadel.user.v2.VerifyPasskeyRegistrationRequest.prototype.getPublicKeyCredential = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 3));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.zitadel.user.v2.VerifyPasskeyRegistrationRequest} returns this
*/
proto.zitadel.user.v2.VerifyPasskeyRegistrationRequest.prototype.setPublicKeyCredential = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2.VerifyPasskeyRegistrationRequest} returns this
 */
proto.zitadel.user.v2.VerifyPasskeyRegistrationRequest.prototype.clearPublicKeyCredential = function() {
  return this.setPublicKeyCredential(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.VerifyPasskeyRegistrationRequest.prototype.hasPublicKeyCredential = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string passkey_name = 4;
 * @return {string}
 */
proto.zitadel.user.v2.VerifyPasskeyRegistrationRequest.prototype.getPasskeyName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2.VerifyPasskeyRegistrationRequest} returns this
 */
proto.zitadel.user.v2.VerifyPasskeyRegistrationRequest.prototype.setPasskeyName = function(value) {
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
proto.zitadel.user.v2.VerifyPasskeyRegistrationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.VerifyPasskeyRegistrationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.VerifyPasskeyRegistrationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.VerifyPasskeyRegistrationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_v2_object_pb.Details.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.user.v2.VerifyPasskeyRegistrationResponse}
 */
proto.zitadel.user.v2.VerifyPasskeyRegistrationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.VerifyPasskeyRegistrationResponse;
  return proto.zitadel.user.v2.VerifyPasskeyRegistrationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.VerifyPasskeyRegistrationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.VerifyPasskeyRegistrationResponse}
 */
proto.zitadel.user.v2.VerifyPasskeyRegistrationResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.user.v2.VerifyPasskeyRegistrationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.VerifyPasskeyRegistrationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.VerifyPasskeyRegistrationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.VerifyPasskeyRegistrationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v2_object_pb.Details.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.object.v2.Details details = 1;
 * @return {?proto.zitadel.object.v2.Details}
 */
proto.zitadel.user.v2.VerifyPasskeyRegistrationResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.object.v2.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.object.v2.Details|undefined} value
 * @return {!proto.zitadel.user.v2.VerifyPasskeyRegistrationResponse} returns this
*/
proto.zitadel.user.v2.VerifyPasskeyRegistrationResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2.VerifyPasskeyRegistrationResponse} returns this
 */
proto.zitadel.user.v2.VerifyPasskeyRegistrationResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.VerifyPasskeyRegistrationResponse.prototype.hasDetails = function() {
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
proto.zitadel.user.v2.RegisterU2FRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.RegisterU2FRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.RegisterU2FRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.RegisterU2FRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
userId: jspb.Message.getFieldWithDefault(msg, 1, ""),
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
 * @return {!proto.zitadel.user.v2.RegisterU2FRequest}
 */
proto.zitadel.user.v2.RegisterU2FRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.RegisterU2FRequest;
  return proto.zitadel.user.v2.RegisterU2FRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.RegisterU2FRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.RegisterU2FRequest}
 */
proto.zitadel.user.v2.RegisterU2FRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.user.v2.RegisterU2FRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.RegisterU2FRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.RegisterU2FRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.RegisterU2FRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
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
 * optional string user_id = 1;
 * @return {string}
 */
proto.zitadel.user.v2.RegisterU2FRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2.RegisterU2FRequest} returns this
 */
proto.zitadel.user.v2.RegisterU2FRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string domain = 2;
 * @return {string}
 */
proto.zitadel.user.v2.RegisterU2FRequest.prototype.getDomain = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2.RegisterU2FRequest} returns this
 */
proto.zitadel.user.v2.RegisterU2FRequest.prototype.setDomain = function(value) {
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
proto.zitadel.user.v2.RegisterU2FResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.RegisterU2FResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.RegisterU2FResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.RegisterU2FResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_v2_object_pb.Details.toObject(includeInstance, f),
u2fId: jspb.Message.getFieldWithDefault(msg, 2, ""),
publicKeyCredentialCreationOptions: (f = msg.getPublicKeyCredentialCreationOptions()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.user.v2.RegisterU2FResponse}
 */
proto.zitadel.user.v2.RegisterU2FResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.RegisterU2FResponse;
  return proto.zitadel.user.v2.RegisterU2FResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.RegisterU2FResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.RegisterU2FResponse}
 */
proto.zitadel.user.v2.RegisterU2FResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setU2fId(value);
      break;
    case 3:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setPublicKeyCredentialCreationOptions(value);
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
proto.zitadel.user.v2.RegisterU2FResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.RegisterU2FResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.RegisterU2FResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.RegisterU2FResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v2_object_pb.Details.serializeBinaryToWriter
    );
  }
  f = message.getU2fId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPublicKeyCredentialCreationOptions();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.object.v2.Details details = 1;
 * @return {?proto.zitadel.object.v2.Details}
 */
proto.zitadel.user.v2.RegisterU2FResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.object.v2.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.object.v2.Details|undefined} value
 * @return {!proto.zitadel.user.v2.RegisterU2FResponse} returns this
*/
proto.zitadel.user.v2.RegisterU2FResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2.RegisterU2FResponse} returns this
 */
proto.zitadel.user.v2.RegisterU2FResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.RegisterU2FResponse.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string u2f_id = 2;
 * @return {string}
 */
proto.zitadel.user.v2.RegisterU2FResponse.prototype.getU2fId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2.RegisterU2FResponse} returns this
 */
proto.zitadel.user.v2.RegisterU2FResponse.prototype.setU2fId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.Struct public_key_credential_creation_options = 3;
 * @return {?proto.google.protobuf.Struct}
 */
proto.zitadel.user.v2.RegisterU2FResponse.prototype.getPublicKeyCredentialCreationOptions = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 3));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.zitadel.user.v2.RegisterU2FResponse} returns this
*/
proto.zitadel.user.v2.RegisterU2FResponse.prototype.setPublicKeyCredentialCreationOptions = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2.RegisterU2FResponse} returns this
 */
proto.zitadel.user.v2.RegisterU2FResponse.prototype.clearPublicKeyCredentialCreationOptions = function() {
  return this.setPublicKeyCredentialCreationOptions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.RegisterU2FResponse.prototype.hasPublicKeyCredentialCreationOptions = function() {
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
proto.zitadel.user.v2.VerifyU2FRegistrationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.VerifyU2FRegistrationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.VerifyU2FRegistrationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.VerifyU2FRegistrationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
userId: jspb.Message.getFieldWithDefault(msg, 1, ""),
u2fId: jspb.Message.getFieldWithDefault(msg, 2, ""),
publicKeyCredential: (f = msg.getPublicKeyCredential()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f),
tokenName: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.zitadel.user.v2.VerifyU2FRegistrationRequest}
 */
proto.zitadel.user.v2.VerifyU2FRegistrationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.VerifyU2FRegistrationRequest;
  return proto.zitadel.user.v2.VerifyU2FRegistrationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.VerifyU2FRegistrationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.VerifyU2FRegistrationRequest}
 */
proto.zitadel.user.v2.VerifyU2FRegistrationRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setU2fId(value);
      break;
    case 3:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setPublicKeyCredential(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTokenName(value);
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
proto.zitadel.user.v2.VerifyU2FRegistrationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.VerifyU2FRegistrationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.VerifyU2FRegistrationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.VerifyU2FRegistrationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getU2fId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPublicKeyCredential();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
  f = message.getTokenName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.zitadel.user.v2.VerifyU2FRegistrationRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2.VerifyU2FRegistrationRequest} returns this
 */
proto.zitadel.user.v2.VerifyU2FRegistrationRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string u2f_id = 2;
 * @return {string}
 */
proto.zitadel.user.v2.VerifyU2FRegistrationRequest.prototype.getU2fId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2.VerifyU2FRegistrationRequest} returns this
 */
proto.zitadel.user.v2.VerifyU2FRegistrationRequest.prototype.setU2fId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.Struct public_key_credential = 3;
 * @return {?proto.google.protobuf.Struct}
 */
proto.zitadel.user.v2.VerifyU2FRegistrationRequest.prototype.getPublicKeyCredential = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 3));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.zitadel.user.v2.VerifyU2FRegistrationRequest} returns this
*/
proto.zitadel.user.v2.VerifyU2FRegistrationRequest.prototype.setPublicKeyCredential = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2.VerifyU2FRegistrationRequest} returns this
 */
proto.zitadel.user.v2.VerifyU2FRegistrationRequest.prototype.clearPublicKeyCredential = function() {
  return this.setPublicKeyCredential(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.VerifyU2FRegistrationRequest.prototype.hasPublicKeyCredential = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string token_name = 4;
 * @return {string}
 */
proto.zitadel.user.v2.VerifyU2FRegistrationRequest.prototype.getTokenName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2.VerifyU2FRegistrationRequest} returns this
 */
proto.zitadel.user.v2.VerifyU2FRegistrationRequest.prototype.setTokenName = function(value) {
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
proto.zitadel.user.v2.VerifyU2FRegistrationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.VerifyU2FRegistrationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.VerifyU2FRegistrationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.VerifyU2FRegistrationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_v2_object_pb.Details.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.user.v2.VerifyU2FRegistrationResponse}
 */
proto.zitadel.user.v2.VerifyU2FRegistrationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.VerifyU2FRegistrationResponse;
  return proto.zitadel.user.v2.VerifyU2FRegistrationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.VerifyU2FRegistrationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.VerifyU2FRegistrationResponse}
 */
proto.zitadel.user.v2.VerifyU2FRegistrationResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.user.v2.VerifyU2FRegistrationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.VerifyU2FRegistrationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.VerifyU2FRegistrationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.VerifyU2FRegistrationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v2_object_pb.Details.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.object.v2.Details details = 1;
 * @return {?proto.zitadel.object.v2.Details}
 */
proto.zitadel.user.v2.VerifyU2FRegistrationResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.object.v2.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.object.v2.Details|undefined} value
 * @return {!proto.zitadel.user.v2.VerifyU2FRegistrationResponse} returns this
*/
proto.zitadel.user.v2.VerifyU2FRegistrationResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2.VerifyU2FRegistrationResponse} returns this
 */
proto.zitadel.user.v2.VerifyU2FRegistrationResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.VerifyU2FRegistrationResponse.prototype.hasDetails = function() {
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
proto.zitadel.user.v2.RemoveU2FRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.RemoveU2FRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.RemoveU2FRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.RemoveU2FRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
userId: jspb.Message.getFieldWithDefault(msg, 1, ""),
u2fId: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.zitadel.user.v2.RemoveU2FRequest}
 */
proto.zitadel.user.v2.RemoveU2FRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.RemoveU2FRequest;
  return proto.zitadel.user.v2.RemoveU2FRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.RemoveU2FRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.RemoveU2FRequest}
 */
proto.zitadel.user.v2.RemoveU2FRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setU2fId(value);
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
proto.zitadel.user.v2.RemoveU2FRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.RemoveU2FRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.RemoveU2FRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.RemoveU2FRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getU2fId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.zitadel.user.v2.RemoveU2FRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2.RemoveU2FRequest} returns this
 */
proto.zitadel.user.v2.RemoveU2FRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string u2f_id = 2;
 * @return {string}
 */
proto.zitadel.user.v2.RemoveU2FRequest.prototype.getU2fId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2.RemoveU2FRequest} returns this
 */
proto.zitadel.user.v2.RemoveU2FRequest.prototype.setU2fId = function(value) {
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
proto.zitadel.user.v2.RemoveU2FResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.RemoveU2FResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.RemoveU2FResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.RemoveU2FResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_v2_object_pb.Details.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.user.v2.RemoveU2FResponse}
 */
proto.zitadel.user.v2.RemoveU2FResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.RemoveU2FResponse;
  return proto.zitadel.user.v2.RemoveU2FResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.RemoveU2FResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.RemoveU2FResponse}
 */
proto.zitadel.user.v2.RemoveU2FResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.user.v2.RemoveU2FResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.RemoveU2FResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.RemoveU2FResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.RemoveU2FResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v2_object_pb.Details.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.object.v2.Details details = 1;
 * @return {?proto.zitadel.object.v2.Details}
 */
proto.zitadel.user.v2.RemoveU2FResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.object.v2.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.object.v2.Details|undefined} value
 * @return {!proto.zitadel.user.v2.RemoveU2FResponse} returns this
*/
proto.zitadel.user.v2.RemoveU2FResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2.RemoveU2FResponse} returns this
 */
proto.zitadel.user.v2.RemoveU2FResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.RemoveU2FResponse.prototype.hasDetails = function() {
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
proto.zitadel.user.v2.RegisterTOTPRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.RegisterTOTPRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.RegisterTOTPRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.RegisterTOTPRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.user.v2.RegisterTOTPRequest}
 */
proto.zitadel.user.v2.RegisterTOTPRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.RegisterTOTPRequest;
  return proto.zitadel.user.v2.RegisterTOTPRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.RegisterTOTPRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.RegisterTOTPRequest}
 */
proto.zitadel.user.v2.RegisterTOTPRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.user.v2.RegisterTOTPRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.RegisterTOTPRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.RegisterTOTPRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.RegisterTOTPRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.user.v2.RegisterTOTPRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2.RegisterTOTPRequest} returns this
 */
proto.zitadel.user.v2.RegisterTOTPRequest.prototype.setUserId = function(value) {
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
proto.zitadel.user.v2.RegisterTOTPResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.RegisterTOTPResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.RegisterTOTPResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.RegisterTOTPResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_v2_object_pb.Details.toObject(includeInstance, f),
uri: jspb.Message.getFieldWithDefault(msg, 2, ""),
secret: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.zitadel.user.v2.RegisterTOTPResponse}
 */
proto.zitadel.user.v2.RegisterTOTPResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.RegisterTOTPResponse;
  return proto.zitadel.user.v2.RegisterTOTPResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.RegisterTOTPResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.RegisterTOTPResponse}
 */
proto.zitadel.user.v2.RegisterTOTPResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setUri(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSecret(value);
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
proto.zitadel.user.v2.RegisterTOTPResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.RegisterTOTPResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.RegisterTOTPResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.RegisterTOTPResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v2_object_pb.Details.serializeBinaryToWriter
    );
  }
  f = message.getUri();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSecret();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional zitadel.object.v2.Details details = 1;
 * @return {?proto.zitadel.object.v2.Details}
 */
proto.zitadel.user.v2.RegisterTOTPResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.object.v2.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.object.v2.Details|undefined} value
 * @return {!proto.zitadel.user.v2.RegisterTOTPResponse} returns this
*/
proto.zitadel.user.v2.RegisterTOTPResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2.RegisterTOTPResponse} returns this
 */
proto.zitadel.user.v2.RegisterTOTPResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.RegisterTOTPResponse.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string uri = 2;
 * @return {string}
 */
proto.zitadel.user.v2.RegisterTOTPResponse.prototype.getUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2.RegisterTOTPResponse} returns this
 */
proto.zitadel.user.v2.RegisterTOTPResponse.prototype.setUri = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string secret = 3;
 * @return {string}
 */
proto.zitadel.user.v2.RegisterTOTPResponse.prototype.getSecret = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2.RegisterTOTPResponse} returns this
 */
proto.zitadel.user.v2.RegisterTOTPResponse.prototype.setSecret = function(value) {
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
proto.zitadel.user.v2.VerifyTOTPRegistrationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.VerifyTOTPRegistrationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.VerifyTOTPRegistrationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.VerifyTOTPRegistrationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
userId: jspb.Message.getFieldWithDefault(msg, 1, ""),
code: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.zitadel.user.v2.VerifyTOTPRegistrationRequest}
 */
proto.zitadel.user.v2.VerifyTOTPRegistrationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.VerifyTOTPRegistrationRequest;
  return proto.zitadel.user.v2.VerifyTOTPRegistrationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.VerifyTOTPRegistrationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.VerifyTOTPRegistrationRequest}
 */
proto.zitadel.user.v2.VerifyTOTPRegistrationRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.user.v2.VerifyTOTPRegistrationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.VerifyTOTPRegistrationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.VerifyTOTPRegistrationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.VerifyTOTPRegistrationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCode();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.zitadel.user.v2.VerifyTOTPRegistrationRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2.VerifyTOTPRegistrationRequest} returns this
 */
proto.zitadel.user.v2.VerifyTOTPRegistrationRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string code = 2;
 * @return {string}
 */
proto.zitadel.user.v2.VerifyTOTPRegistrationRequest.prototype.getCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2.VerifyTOTPRegistrationRequest} returns this
 */
proto.zitadel.user.v2.VerifyTOTPRegistrationRequest.prototype.setCode = function(value) {
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
proto.zitadel.user.v2.VerifyTOTPRegistrationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.VerifyTOTPRegistrationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.VerifyTOTPRegistrationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.VerifyTOTPRegistrationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_v2_object_pb.Details.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.user.v2.VerifyTOTPRegistrationResponse}
 */
proto.zitadel.user.v2.VerifyTOTPRegistrationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.VerifyTOTPRegistrationResponse;
  return proto.zitadel.user.v2.VerifyTOTPRegistrationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.VerifyTOTPRegistrationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.VerifyTOTPRegistrationResponse}
 */
proto.zitadel.user.v2.VerifyTOTPRegistrationResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.user.v2.VerifyTOTPRegistrationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.VerifyTOTPRegistrationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.VerifyTOTPRegistrationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.VerifyTOTPRegistrationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v2_object_pb.Details.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.object.v2.Details details = 1;
 * @return {?proto.zitadel.object.v2.Details}
 */
proto.zitadel.user.v2.VerifyTOTPRegistrationResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.object.v2.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.object.v2.Details|undefined} value
 * @return {!proto.zitadel.user.v2.VerifyTOTPRegistrationResponse} returns this
*/
proto.zitadel.user.v2.VerifyTOTPRegistrationResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2.VerifyTOTPRegistrationResponse} returns this
 */
proto.zitadel.user.v2.VerifyTOTPRegistrationResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.VerifyTOTPRegistrationResponse.prototype.hasDetails = function() {
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
proto.zitadel.user.v2.RemoveTOTPRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.RemoveTOTPRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.RemoveTOTPRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.RemoveTOTPRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.user.v2.RemoveTOTPRequest}
 */
proto.zitadel.user.v2.RemoveTOTPRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.RemoveTOTPRequest;
  return proto.zitadel.user.v2.RemoveTOTPRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.RemoveTOTPRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.RemoveTOTPRequest}
 */
proto.zitadel.user.v2.RemoveTOTPRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.user.v2.RemoveTOTPRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.RemoveTOTPRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.RemoveTOTPRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.RemoveTOTPRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.user.v2.RemoveTOTPRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2.RemoveTOTPRequest} returns this
 */
proto.zitadel.user.v2.RemoveTOTPRequest.prototype.setUserId = function(value) {
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
proto.zitadel.user.v2.RemoveTOTPResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.RemoveTOTPResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.RemoveTOTPResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.RemoveTOTPResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_v2_object_pb.Details.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.user.v2.RemoveTOTPResponse}
 */
proto.zitadel.user.v2.RemoveTOTPResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.RemoveTOTPResponse;
  return proto.zitadel.user.v2.RemoveTOTPResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.RemoveTOTPResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.RemoveTOTPResponse}
 */
proto.zitadel.user.v2.RemoveTOTPResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.user.v2.RemoveTOTPResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.RemoveTOTPResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.RemoveTOTPResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.RemoveTOTPResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v2_object_pb.Details.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.object.v2.Details details = 1;
 * @return {?proto.zitadel.object.v2.Details}
 */
proto.zitadel.user.v2.RemoveTOTPResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.object.v2.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.object.v2.Details|undefined} value
 * @return {!proto.zitadel.user.v2.RemoveTOTPResponse} returns this
*/
proto.zitadel.user.v2.RemoveTOTPResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2.RemoveTOTPResponse} returns this
 */
proto.zitadel.user.v2.RemoveTOTPResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.RemoveTOTPResponse.prototype.hasDetails = function() {
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
proto.zitadel.user.v2.GenerateRecoveryCodesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.GenerateRecoveryCodesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.GenerateRecoveryCodesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.GenerateRecoveryCodesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
userId: jspb.Message.getFieldWithDefault(msg, 1, ""),
count: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.zitadel.user.v2.GenerateRecoveryCodesRequest}
 */
proto.zitadel.user.v2.GenerateRecoveryCodesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.GenerateRecoveryCodesRequest;
  return proto.zitadel.user.v2.GenerateRecoveryCodesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.GenerateRecoveryCodesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.GenerateRecoveryCodesRequest}
 */
proto.zitadel.user.v2.GenerateRecoveryCodesRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCount(value);
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
proto.zitadel.user.v2.GenerateRecoveryCodesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.GenerateRecoveryCodesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.GenerateRecoveryCodesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.GenerateRecoveryCodesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCount();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.zitadel.user.v2.GenerateRecoveryCodesRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2.GenerateRecoveryCodesRequest} returns this
 */
proto.zitadel.user.v2.GenerateRecoveryCodesRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 count = 2;
 * @return {number}
 */
proto.zitadel.user.v2.GenerateRecoveryCodesRequest.prototype.getCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.zitadel.user.v2.GenerateRecoveryCodesRequest} returns this
 */
proto.zitadel.user.v2.GenerateRecoveryCodesRequest.prototype.setCount = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.user.v2.GenerateRecoveryCodesResponse.repeatedFields_ = [2];



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
proto.zitadel.user.v2.GenerateRecoveryCodesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.GenerateRecoveryCodesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.GenerateRecoveryCodesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.GenerateRecoveryCodesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_v2_object_pb.Details.toObject(includeInstance, f),
recoveryCodesList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.zitadel.user.v2.GenerateRecoveryCodesResponse}
 */
proto.zitadel.user.v2.GenerateRecoveryCodesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.GenerateRecoveryCodesResponse;
  return proto.zitadel.user.v2.GenerateRecoveryCodesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.GenerateRecoveryCodesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.GenerateRecoveryCodesResponse}
 */
proto.zitadel.user.v2.GenerateRecoveryCodesResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.addRecoveryCodes(value);
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
proto.zitadel.user.v2.GenerateRecoveryCodesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.GenerateRecoveryCodesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.GenerateRecoveryCodesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.GenerateRecoveryCodesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v2_object_pb.Details.serializeBinaryToWriter
    );
  }
  f = message.getRecoveryCodesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * optional zitadel.object.v2.Details details = 1;
 * @return {?proto.zitadel.object.v2.Details}
 */
proto.zitadel.user.v2.GenerateRecoveryCodesResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.object.v2.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.object.v2.Details|undefined} value
 * @return {!proto.zitadel.user.v2.GenerateRecoveryCodesResponse} returns this
*/
proto.zitadel.user.v2.GenerateRecoveryCodesResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2.GenerateRecoveryCodesResponse} returns this
 */
proto.zitadel.user.v2.GenerateRecoveryCodesResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.GenerateRecoveryCodesResponse.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated string recovery_codes = 2;
 * @return {!Array<string>}
 */
proto.zitadel.user.v2.GenerateRecoveryCodesResponse.prototype.getRecoveryCodesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.zitadel.user.v2.GenerateRecoveryCodesResponse} returns this
 */
proto.zitadel.user.v2.GenerateRecoveryCodesResponse.prototype.setRecoveryCodesList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.zitadel.user.v2.GenerateRecoveryCodesResponse} returns this
 */
proto.zitadel.user.v2.GenerateRecoveryCodesResponse.prototype.addRecoveryCodes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.user.v2.GenerateRecoveryCodesResponse} returns this
 */
proto.zitadel.user.v2.GenerateRecoveryCodesResponse.prototype.clearRecoveryCodesList = function() {
  return this.setRecoveryCodesList([]);
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
proto.zitadel.user.v2.RemoveRecoveryCodesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.RemoveRecoveryCodesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.RemoveRecoveryCodesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.RemoveRecoveryCodesRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.user.v2.RemoveRecoveryCodesRequest}
 */
proto.zitadel.user.v2.RemoveRecoveryCodesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.RemoveRecoveryCodesRequest;
  return proto.zitadel.user.v2.RemoveRecoveryCodesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.RemoveRecoveryCodesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.RemoveRecoveryCodesRequest}
 */
proto.zitadel.user.v2.RemoveRecoveryCodesRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.user.v2.RemoveRecoveryCodesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.RemoveRecoveryCodesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.RemoveRecoveryCodesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.RemoveRecoveryCodesRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.user.v2.RemoveRecoveryCodesRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2.RemoveRecoveryCodesRequest} returns this
 */
proto.zitadel.user.v2.RemoveRecoveryCodesRequest.prototype.setUserId = function(value) {
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
proto.zitadel.user.v2.RemoveRecoveryCodesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.RemoveRecoveryCodesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.RemoveRecoveryCodesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.RemoveRecoveryCodesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_v2_object_pb.Details.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.user.v2.RemoveRecoveryCodesResponse}
 */
proto.zitadel.user.v2.RemoveRecoveryCodesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.RemoveRecoveryCodesResponse;
  return proto.zitadel.user.v2.RemoveRecoveryCodesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.RemoveRecoveryCodesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.RemoveRecoveryCodesResponse}
 */
proto.zitadel.user.v2.RemoveRecoveryCodesResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.user.v2.RemoveRecoveryCodesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.RemoveRecoveryCodesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.RemoveRecoveryCodesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.RemoveRecoveryCodesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v2_object_pb.Details.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.object.v2.Details details = 1;
 * @return {?proto.zitadel.object.v2.Details}
 */
proto.zitadel.user.v2.RemoveRecoveryCodesResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.object.v2.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.object.v2.Details|undefined} value
 * @return {!proto.zitadel.user.v2.RemoveRecoveryCodesResponse} returns this
*/
proto.zitadel.user.v2.RemoveRecoveryCodesResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2.RemoveRecoveryCodesResponse} returns this
 */
proto.zitadel.user.v2.RemoveRecoveryCodesResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.RemoveRecoveryCodesResponse.prototype.hasDetails = function() {
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
proto.zitadel.user.v2.AddOTPSMSRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.AddOTPSMSRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.AddOTPSMSRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.AddOTPSMSRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.user.v2.AddOTPSMSRequest}
 */
proto.zitadel.user.v2.AddOTPSMSRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.AddOTPSMSRequest;
  return proto.zitadel.user.v2.AddOTPSMSRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.AddOTPSMSRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.AddOTPSMSRequest}
 */
proto.zitadel.user.v2.AddOTPSMSRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.user.v2.AddOTPSMSRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.AddOTPSMSRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.AddOTPSMSRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.AddOTPSMSRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.user.v2.AddOTPSMSRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2.AddOTPSMSRequest} returns this
 */
proto.zitadel.user.v2.AddOTPSMSRequest.prototype.setUserId = function(value) {
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
proto.zitadel.user.v2.AddOTPSMSResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.AddOTPSMSResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.AddOTPSMSResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.AddOTPSMSResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_v2_object_pb.Details.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.user.v2.AddOTPSMSResponse}
 */
proto.zitadel.user.v2.AddOTPSMSResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.AddOTPSMSResponse;
  return proto.zitadel.user.v2.AddOTPSMSResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.AddOTPSMSResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.AddOTPSMSResponse}
 */
proto.zitadel.user.v2.AddOTPSMSResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.user.v2.AddOTPSMSResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.AddOTPSMSResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.AddOTPSMSResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.AddOTPSMSResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v2_object_pb.Details.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.object.v2.Details details = 1;
 * @return {?proto.zitadel.object.v2.Details}
 */
proto.zitadel.user.v2.AddOTPSMSResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.object.v2.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.object.v2.Details|undefined} value
 * @return {!proto.zitadel.user.v2.AddOTPSMSResponse} returns this
*/
proto.zitadel.user.v2.AddOTPSMSResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2.AddOTPSMSResponse} returns this
 */
proto.zitadel.user.v2.AddOTPSMSResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.AddOTPSMSResponse.prototype.hasDetails = function() {
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
proto.zitadel.user.v2.RemoveOTPSMSRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.RemoveOTPSMSRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.RemoveOTPSMSRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.RemoveOTPSMSRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.user.v2.RemoveOTPSMSRequest}
 */
proto.zitadel.user.v2.RemoveOTPSMSRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.RemoveOTPSMSRequest;
  return proto.zitadel.user.v2.RemoveOTPSMSRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.RemoveOTPSMSRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.RemoveOTPSMSRequest}
 */
proto.zitadel.user.v2.RemoveOTPSMSRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.user.v2.RemoveOTPSMSRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.RemoveOTPSMSRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.RemoveOTPSMSRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.RemoveOTPSMSRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.user.v2.RemoveOTPSMSRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2.RemoveOTPSMSRequest} returns this
 */
proto.zitadel.user.v2.RemoveOTPSMSRequest.prototype.setUserId = function(value) {
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
proto.zitadel.user.v2.RemoveOTPSMSResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.RemoveOTPSMSResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.RemoveOTPSMSResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.RemoveOTPSMSResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_v2_object_pb.Details.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.user.v2.RemoveOTPSMSResponse}
 */
proto.zitadel.user.v2.RemoveOTPSMSResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.RemoveOTPSMSResponse;
  return proto.zitadel.user.v2.RemoveOTPSMSResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.RemoveOTPSMSResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.RemoveOTPSMSResponse}
 */
proto.zitadel.user.v2.RemoveOTPSMSResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.user.v2.RemoveOTPSMSResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.RemoveOTPSMSResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.RemoveOTPSMSResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.RemoveOTPSMSResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v2_object_pb.Details.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.object.v2.Details details = 1;
 * @return {?proto.zitadel.object.v2.Details}
 */
proto.zitadel.user.v2.RemoveOTPSMSResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.object.v2.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.object.v2.Details|undefined} value
 * @return {!proto.zitadel.user.v2.RemoveOTPSMSResponse} returns this
*/
proto.zitadel.user.v2.RemoveOTPSMSResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2.RemoveOTPSMSResponse} returns this
 */
proto.zitadel.user.v2.RemoveOTPSMSResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.RemoveOTPSMSResponse.prototype.hasDetails = function() {
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
proto.zitadel.user.v2.AddOTPEmailRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.AddOTPEmailRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.AddOTPEmailRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.AddOTPEmailRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.user.v2.AddOTPEmailRequest}
 */
proto.zitadel.user.v2.AddOTPEmailRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.AddOTPEmailRequest;
  return proto.zitadel.user.v2.AddOTPEmailRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.AddOTPEmailRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.AddOTPEmailRequest}
 */
proto.zitadel.user.v2.AddOTPEmailRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.user.v2.AddOTPEmailRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.AddOTPEmailRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.AddOTPEmailRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.AddOTPEmailRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.user.v2.AddOTPEmailRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2.AddOTPEmailRequest} returns this
 */
proto.zitadel.user.v2.AddOTPEmailRequest.prototype.setUserId = function(value) {
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
proto.zitadel.user.v2.AddOTPEmailResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.AddOTPEmailResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.AddOTPEmailResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.AddOTPEmailResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_v2_object_pb.Details.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.user.v2.AddOTPEmailResponse}
 */
proto.zitadel.user.v2.AddOTPEmailResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.AddOTPEmailResponse;
  return proto.zitadel.user.v2.AddOTPEmailResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.AddOTPEmailResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.AddOTPEmailResponse}
 */
proto.zitadel.user.v2.AddOTPEmailResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.user.v2.AddOTPEmailResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.AddOTPEmailResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.AddOTPEmailResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.AddOTPEmailResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v2_object_pb.Details.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.object.v2.Details details = 1;
 * @return {?proto.zitadel.object.v2.Details}
 */
proto.zitadel.user.v2.AddOTPEmailResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.object.v2.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.object.v2.Details|undefined} value
 * @return {!proto.zitadel.user.v2.AddOTPEmailResponse} returns this
*/
proto.zitadel.user.v2.AddOTPEmailResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2.AddOTPEmailResponse} returns this
 */
proto.zitadel.user.v2.AddOTPEmailResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.AddOTPEmailResponse.prototype.hasDetails = function() {
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
proto.zitadel.user.v2.RemoveOTPEmailRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.RemoveOTPEmailRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.RemoveOTPEmailRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.RemoveOTPEmailRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.user.v2.RemoveOTPEmailRequest}
 */
proto.zitadel.user.v2.RemoveOTPEmailRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.RemoveOTPEmailRequest;
  return proto.zitadel.user.v2.RemoveOTPEmailRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.RemoveOTPEmailRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.RemoveOTPEmailRequest}
 */
proto.zitadel.user.v2.RemoveOTPEmailRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.user.v2.RemoveOTPEmailRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.RemoveOTPEmailRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.RemoveOTPEmailRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.RemoveOTPEmailRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.user.v2.RemoveOTPEmailRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2.RemoveOTPEmailRequest} returns this
 */
proto.zitadel.user.v2.RemoveOTPEmailRequest.prototype.setUserId = function(value) {
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
proto.zitadel.user.v2.RemoveOTPEmailResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.RemoveOTPEmailResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.RemoveOTPEmailResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.RemoveOTPEmailResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_v2_object_pb.Details.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.user.v2.RemoveOTPEmailResponse}
 */
proto.zitadel.user.v2.RemoveOTPEmailResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.RemoveOTPEmailResponse;
  return proto.zitadel.user.v2.RemoveOTPEmailResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.RemoveOTPEmailResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.RemoveOTPEmailResponse}
 */
proto.zitadel.user.v2.RemoveOTPEmailResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.user.v2.RemoveOTPEmailResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.RemoveOTPEmailResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.RemoveOTPEmailResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.RemoveOTPEmailResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v2_object_pb.Details.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.object.v2.Details details = 1;
 * @return {?proto.zitadel.object.v2.Details}
 */
proto.zitadel.user.v2.RemoveOTPEmailResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.object.v2.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.object.v2.Details|undefined} value
 * @return {!proto.zitadel.user.v2.RemoveOTPEmailResponse} returns this
*/
proto.zitadel.user.v2.RemoveOTPEmailResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2.RemoveOTPEmailResponse} returns this
 */
proto.zitadel.user.v2.RemoveOTPEmailResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.RemoveOTPEmailResponse.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.zitadel.user.v2.CreatePasskeyRegistrationLinkRequest.oneofGroups_ = [[2,3]];

/**
 * @enum {number}
 */
proto.zitadel.user.v2.CreatePasskeyRegistrationLinkRequest.MediumCase = {
  MEDIUM_NOT_SET: 0,
  SEND_LINK: 2,
  RETURN_CODE: 3
};

/**
 * @return {proto.zitadel.user.v2.CreatePasskeyRegistrationLinkRequest.MediumCase}
 */
proto.zitadel.user.v2.CreatePasskeyRegistrationLinkRequest.prototype.getMediumCase = function() {
  return /** @type {proto.zitadel.user.v2.CreatePasskeyRegistrationLinkRequest.MediumCase} */(jspb.Message.computeOneofCase(this, proto.zitadel.user.v2.CreatePasskeyRegistrationLinkRequest.oneofGroups_[0]));
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
proto.zitadel.user.v2.CreatePasskeyRegistrationLinkRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.CreatePasskeyRegistrationLinkRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.CreatePasskeyRegistrationLinkRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.CreatePasskeyRegistrationLinkRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
userId: jspb.Message.getFieldWithDefault(msg, 1, ""),
sendLink: (f = msg.getSendLink()) && zitadel_user_v2_auth_pb.SendPasskeyRegistrationLink.toObject(includeInstance, f),
returnCode: (f = msg.getReturnCode()) && zitadel_user_v2_auth_pb.ReturnPasskeyRegistrationCode.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.user.v2.CreatePasskeyRegistrationLinkRequest}
 */
proto.zitadel.user.v2.CreatePasskeyRegistrationLinkRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.CreatePasskeyRegistrationLinkRequest;
  return proto.zitadel.user.v2.CreatePasskeyRegistrationLinkRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.CreatePasskeyRegistrationLinkRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.CreatePasskeyRegistrationLinkRequest}
 */
proto.zitadel.user.v2.CreatePasskeyRegistrationLinkRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new zitadel_user_v2_auth_pb.SendPasskeyRegistrationLink;
      reader.readMessage(value,zitadel_user_v2_auth_pb.SendPasskeyRegistrationLink.deserializeBinaryFromReader);
      msg.setSendLink(value);
      break;
    case 3:
      var value = new zitadel_user_v2_auth_pb.ReturnPasskeyRegistrationCode;
      reader.readMessage(value,zitadel_user_v2_auth_pb.ReturnPasskeyRegistrationCode.deserializeBinaryFromReader);
      msg.setReturnCode(value);
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
proto.zitadel.user.v2.CreatePasskeyRegistrationLinkRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.CreatePasskeyRegistrationLinkRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.CreatePasskeyRegistrationLinkRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.CreatePasskeyRegistrationLinkRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSendLink();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      zitadel_user_v2_auth_pb.SendPasskeyRegistrationLink.serializeBinaryToWriter
    );
  }
  f = message.getReturnCode();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      zitadel_user_v2_auth_pb.ReturnPasskeyRegistrationCode.serializeBinaryToWriter
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.zitadel.user.v2.CreatePasskeyRegistrationLinkRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2.CreatePasskeyRegistrationLinkRequest} returns this
 */
proto.zitadel.user.v2.CreatePasskeyRegistrationLinkRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional SendPasskeyRegistrationLink send_link = 2;
 * @return {?proto.zitadel.user.v2.SendPasskeyRegistrationLink}
 */
proto.zitadel.user.v2.CreatePasskeyRegistrationLinkRequest.prototype.getSendLink = function() {
  return /** @type{?proto.zitadel.user.v2.SendPasskeyRegistrationLink} */ (
    jspb.Message.getWrapperField(this, zitadel_user_v2_auth_pb.SendPasskeyRegistrationLink, 2));
};


/**
 * @param {?proto.zitadel.user.v2.SendPasskeyRegistrationLink|undefined} value
 * @return {!proto.zitadel.user.v2.CreatePasskeyRegistrationLinkRequest} returns this
*/
proto.zitadel.user.v2.CreatePasskeyRegistrationLinkRequest.prototype.setSendLink = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.zitadel.user.v2.CreatePasskeyRegistrationLinkRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2.CreatePasskeyRegistrationLinkRequest} returns this
 */
proto.zitadel.user.v2.CreatePasskeyRegistrationLinkRequest.prototype.clearSendLink = function() {
  return this.setSendLink(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.CreatePasskeyRegistrationLinkRequest.prototype.hasSendLink = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ReturnPasskeyRegistrationCode return_code = 3;
 * @return {?proto.zitadel.user.v2.ReturnPasskeyRegistrationCode}
 */
proto.zitadel.user.v2.CreatePasskeyRegistrationLinkRequest.prototype.getReturnCode = function() {
  return /** @type{?proto.zitadel.user.v2.ReturnPasskeyRegistrationCode} */ (
    jspb.Message.getWrapperField(this, zitadel_user_v2_auth_pb.ReturnPasskeyRegistrationCode, 3));
};


/**
 * @param {?proto.zitadel.user.v2.ReturnPasskeyRegistrationCode|undefined} value
 * @return {!proto.zitadel.user.v2.CreatePasskeyRegistrationLinkRequest} returns this
*/
proto.zitadel.user.v2.CreatePasskeyRegistrationLinkRequest.prototype.setReturnCode = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.zitadel.user.v2.CreatePasskeyRegistrationLinkRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2.CreatePasskeyRegistrationLinkRequest} returns this
 */
proto.zitadel.user.v2.CreatePasskeyRegistrationLinkRequest.prototype.clearReturnCode = function() {
  return this.setReturnCode(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.CreatePasskeyRegistrationLinkRequest.prototype.hasReturnCode = function() {
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
proto.zitadel.user.v2.CreatePasskeyRegistrationLinkResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.CreatePasskeyRegistrationLinkResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.CreatePasskeyRegistrationLinkResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.CreatePasskeyRegistrationLinkResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_v2_object_pb.Details.toObject(includeInstance, f),
code: (f = msg.getCode()) && zitadel_user_v2_auth_pb.PasskeyRegistrationCode.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.user.v2.CreatePasskeyRegistrationLinkResponse}
 */
proto.zitadel.user.v2.CreatePasskeyRegistrationLinkResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.CreatePasskeyRegistrationLinkResponse;
  return proto.zitadel.user.v2.CreatePasskeyRegistrationLinkResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.CreatePasskeyRegistrationLinkResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.CreatePasskeyRegistrationLinkResponse}
 */
proto.zitadel.user.v2.CreatePasskeyRegistrationLinkResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new zitadel_user_v2_auth_pb.PasskeyRegistrationCode;
      reader.readMessage(value,zitadel_user_v2_auth_pb.PasskeyRegistrationCode.deserializeBinaryFromReader);
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
proto.zitadel.user.v2.CreatePasskeyRegistrationLinkResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.CreatePasskeyRegistrationLinkResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.CreatePasskeyRegistrationLinkResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.CreatePasskeyRegistrationLinkResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v2_object_pb.Details.serializeBinaryToWriter
    );
  }
  f = message.getCode();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      zitadel_user_v2_auth_pb.PasskeyRegistrationCode.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.object.v2.Details details = 1;
 * @return {?proto.zitadel.object.v2.Details}
 */
proto.zitadel.user.v2.CreatePasskeyRegistrationLinkResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.object.v2.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.object.v2.Details|undefined} value
 * @return {!proto.zitadel.user.v2.CreatePasskeyRegistrationLinkResponse} returns this
*/
proto.zitadel.user.v2.CreatePasskeyRegistrationLinkResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2.CreatePasskeyRegistrationLinkResponse} returns this
 */
proto.zitadel.user.v2.CreatePasskeyRegistrationLinkResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.CreatePasskeyRegistrationLinkResponse.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional PasskeyRegistrationCode code = 2;
 * @return {?proto.zitadel.user.v2.PasskeyRegistrationCode}
 */
proto.zitadel.user.v2.CreatePasskeyRegistrationLinkResponse.prototype.getCode = function() {
  return /** @type{?proto.zitadel.user.v2.PasskeyRegistrationCode} */ (
    jspb.Message.getWrapperField(this, zitadel_user_v2_auth_pb.PasskeyRegistrationCode, 2));
};


/**
 * @param {?proto.zitadel.user.v2.PasskeyRegistrationCode|undefined} value
 * @return {!proto.zitadel.user.v2.CreatePasskeyRegistrationLinkResponse} returns this
*/
proto.zitadel.user.v2.CreatePasskeyRegistrationLinkResponse.prototype.setCode = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2.CreatePasskeyRegistrationLinkResponse} returns this
 */
proto.zitadel.user.v2.CreatePasskeyRegistrationLinkResponse.prototype.clearCode = function() {
  return this.setCode(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.CreatePasskeyRegistrationLinkResponse.prototype.hasCode = function() {
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
proto.zitadel.user.v2.ListPasskeysRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.ListPasskeysRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.ListPasskeysRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.ListPasskeysRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.user.v2.ListPasskeysRequest}
 */
proto.zitadel.user.v2.ListPasskeysRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.ListPasskeysRequest;
  return proto.zitadel.user.v2.ListPasskeysRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.ListPasskeysRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.ListPasskeysRequest}
 */
proto.zitadel.user.v2.ListPasskeysRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.user.v2.ListPasskeysRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.ListPasskeysRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.ListPasskeysRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.ListPasskeysRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.user.v2.ListPasskeysRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2.ListPasskeysRequest} returns this
 */
proto.zitadel.user.v2.ListPasskeysRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.user.v2.ListPasskeysResponse.repeatedFields_ = [2];



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
proto.zitadel.user.v2.ListPasskeysResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.ListPasskeysResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.ListPasskeysResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.ListPasskeysResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_v2_object_pb.ListDetails.toObject(includeInstance, f),
resultList: jspb.Message.toObjectList(msg.getResultList(),
    zitadel_user_v2_user_pb.Passkey.toObject, includeInstance)
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
 * @return {!proto.zitadel.user.v2.ListPasskeysResponse}
 */
proto.zitadel.user.v2.ListPasskeysResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.ListPasskeysResponse;
  return proto.zitadel.user.v2.ListPasskeysResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.ListPasskeysResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.ListPasskeysResponse}
 */
proto.zitadel.user.v2.ListPasskeysResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new zitadel_user_v2_user_pb.Passkey;
      reader.readMessage(value,zitadel_user_v2_user_pb.Passkey.deserializeBinaryFromReader);
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
proto.zitadel.user.v2.ListPasskeysResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.ListPasskeysResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.ListPasskeysResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.ListPasskeysResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v2_object_pb.ListDetails.serializeBinaryToWriter
    );
  }
  f = message.getResultList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      zitadel_user_v2_user_pb.Passkey.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.object.v2.ListDetails details = 1;
 * @return {?proto.zitadel.object.v2.ListDetails}
 */
proto.zitadel.user.v2.ListPasskeysResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.object.v2.ListDetails} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2_object_pb.ListDetails, 1));
};


/**
 * @param {?proto.zitadel.object.v2.ListDetails|undefined} value
 * @return {!proto.zitadel.user.v2.ListPasskeysResponse} returns this
*/
proto.zitadel.user.v2.ListPasskeysResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2.ListPasskeysResponse} returns this
 */
proto.zitadel.user.v2.ListPasskeysResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.ListPasskeysResponse.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Passkey result = 2;
 * @return {!Array<!proto.zitadel.user.v2.Passkey>}
 */
proto.zitadel.user.v2.ListPasskeysResponse.prototype.getResultList = function() {
  return /** @type{!Array<!proto.zitadel.user.v2.Passkey>} */ (
    jspb.Message.getRepeatedWrapperField(this, zitadel_user_v2_user_pb.Passkey, 2));
};


/**
 * @param {!Array<!proto.zitadel.user.v2.Passkey>} value
 * @return {!proto.zitadel.user.v2.ListPasskeysResponse} returns this
*/
proto.zitadel.user.v2.ListPasskeysResponse.prototype.setResultList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.zitadel.user.v2.Passkey=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zitadel.user.v2.Passkey}
 */
proto.zitadel.user.v2.ListPasskeysResponse.prototype.addResult = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.zitadel.user.v2.Passkey, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.user.v2.ListPasskeysResponse} returns this
 */
proto.zitadel.user.v2.ListPasskeysResponse.prototype.clearResultList = function() {
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
proto.zitadel.user.v2.RemovePasskeyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.RemovePasskeyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.RemovePasskeyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.RemovePasskeyRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
userId: jspb.Message.getFieldWithDefault(msg, 1, ""),
passkeyId: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.zitadel.user.v2.RemovePasskeyRequest}
 */
proto.zitadel.user.v2.RemovePasskeyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.RemovePasskeyRequest;
  return proto.zitadel.user.v2.RemovePasskeyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.RemovePasskeyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.RemovePasskeyRequest}
 */
proto.zitadel.user.v2.RemovePasskeyRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setPasskeyId(value);
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
proto.zitadel.user.v2.RemovePasskeyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.RemovePasskeyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.RemovePasskeyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.RemovePasskeyRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPasskeyId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.zitadel.user.v2.RemovePasskeyRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2.RemovePasskeyRequest} returns this
 */
proto.zitadel.user.v2.RemovePasskeyRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string passkey_id = 2;
 * @return {string}
 */
proto.zitadel.user.v2.RemovePasskeyRequest.prototype.getPasskeyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2.RemovePasskeyRequest} returns this
 */
proto.zitadel.user.v2.RemovePasskeyRequest.prototype.setPasskeyId = function(value) {
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
proto.zitadel.user.v2.RemovePasskeyResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.RemovePasskeyResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.RemovePasskeyResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.RemovePasskeyResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_v2_object_pb.Details.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.user.v2.RemovePasskeyResponse}
 */
proto.zitadel.user.v2.RemovePasskeyResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.RemovePasskeyResponse;
  return proto.zitadel.user.v2.RemovePasskeyResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.RemovePasskeyResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.RemovePasskeyResponse}
 */
proto.zitadel.user.v2.RemovePasskeyResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.user.v2.RemovePasskeyResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.RemovePasskeyResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.RemovePasskeyResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.RemovePasskeyResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v2_object_pb.Details.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.object.v2.Details details = 1;
 * @return {?proto.zitadel.object.v2.Details}
 */
proto.zitadel.user.v2.RemovePasskeyResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.object.v2.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.object.v2.Details|undefined} value
 * @return {!proto.zitadel.user.v2.RemovePasskeyResponse} returns this
*/
proto.zitadel.user.v2.RemovePasskeyResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2.RemovePasskeyResponse} returns this
 */
proto.zitadel.user.v2.RemovePasskeyResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.RemovePasskeyResponse.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.zitadel.user.v2.StartIdentityProviderIntentRequest.oneofGroups_ = [[2,3]];

/**
 * @enum {number}
 */
proto.zitadel.user.v2.StartIdentityProviderIntentRequest.ContentCase = {
  CONTENT_NOT_SET: 0,
  URLS: 2,
  LDAP: 3
};

/**
 * @return {proto.zitadel.user.v2.StartIdentityProviderIntentRequest.ContentCase}
 */
proto.zitadel.user.v2.StartIdentityProviderIntentRequest.prototype.getContentCase = function() {
  return /** @type {proto.zitadel.user.v2.StartIdentityProviderIntentRequest.ContentCase} */(jspb.Message.computeOneofCase(this, proto.zitadel.user.v2.StartIdentityProviderIntentRequest.oneofGroups_[0]));
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
proto.zitadel.user.v2.StartIdentityProviderIntentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.StartIdentityProviderIntentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.StartIdentityProviderIntentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.StartIdentityProviderIntentRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
idpId: jspb.Message.getFieldWithDefault(msg, 1, ""),
urls: (f = msg.getUrls()) && zitadel_user_v2_idp_pb.RedirectURLs.toObject(includeInstance, f),
ldap: (f = msg.getLdap()) && zitadel_user_v2_idp_pb.LDAPCredentials.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.user.v2.StartIdentityProviderIntentRequest}
 */
proto.zitadel.user.v2.StartIdentityProviderIntentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.StartIdentityProviderIntentRequest;
  return proto.zitadel.user.v2.StartIdentityProviderIntentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.StartIdentityProviderIntentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.StartIdentityProviderIntentRequest}
 */
proto.zitadel.user.v2.StartIdentityProviderIntentRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new zitadel_user_v2_idp_pb.RedirectURLs;
      reader.readMessage(value,zitadel_user_v2_idp_pb.RedirectURLs.deserializeBinaryFromReader);
      msg.setUrls(value);
      break;
    case 3:
      var value = new zitadel_user_v2_idp_pb.LDAPCredentials;
      reader.readMessage(value,zitadel_user_v2_idp_pb.LDAPCredentials.deserializeBinaryFromReader);
      msg.setLdap(value);
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
proto.zitadel.user.v2.StartIdentityProviderIntentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.StartIdentityProviderIntentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.StartIdentityProviderIntentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.StartIdentityProviderIntentRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIdpId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUrls();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      zitadel_user_v2_idp_pb.RedirectURLs.serializeBinaryToWriter
    );
  }
  f = message.getLdap();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      zitadel_user_v2_idp_pb.LDAPCredentials.serializeBinaryToWriter
    );
  }
};


/**
 * optional string idp_id = 1;
 * @return {string}
 */
proto.zitadel.user.v2.StartIdentityProviderIntentRequest.prototype.getIdpId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2.StartIdentityProviderIntentRequest} returns this
 */
proto.zitadel.user.v2.StartIdentityProviderIntentRequest.prototype.setIdpId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional RedirectURLs urls = 2;
 * @return {?proto.zitadel.user.v2.RedirectURLs}
 */
proto.zitadel.user.v2.StartIdentityProviderIntentRequest.prototype.getUrls = function() {
  return /** @type{?proto.zitadel.user.v2.RedirectURLs} */ (
    jspb.Message.getWrapperField(this, zitadel_user_v2_idp_pb.RedirectURLs, 2));
};


/**
 * @param {?proto.zitadel.user.v2.RedirectURLs|undefined} value
 * @return {!proto.zitadel.user.v2.StartIdentityProviderIntentRequest} returns this
*/
proto.zitadel.user.v2.StartIdentityProviderIntentRequest.prototype.setUrls = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.zitadel.user.v2.StartIdentityProviderIntentRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2.StartIdentityProviderIntentRequest} returns this
 */
proto.zitadel.user.v2.StartIdentityProviderIntentRequest.prototype.clearUrls = function() {
  return this.setUrls(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.StartIdentityProviderIntentRequest.prototype.hasUrls = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional LDAPCredentials ldap = 3;
 * @return {?proto.zitadel.user.v2.LDAPCredentials}
 */
proto.zitadel.user.v2.StartIdentityProviderIntentRequest.prototype.getLdap = function() {
  return /** @type{?proto.zitadel.user.v2.LDAPCredentials} */ (
    jspb.Message.getWrapperField(this, zitadel_user_v2_idp_pb.LDAPCredentials, 3));
};


/**
 * @param {?proto.zitadel.user.v2.LDAPCredentials|undefined} value
 * @return {!proto.zitadel.user.v2.StartIdentityProviderIntentRequest} returns this
*/
proto.zitadel.user.v2.StartIdentityProviderIntentRequest.prototype.setLdap = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.zitadel.user.v2.StartIdentityProviderIntentRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2.StartIdentityProviderIntentRequest} returns this
 */
proto.zitadel.user.v2.StartIdentityProviderIntentRequest.prototype.clearLdap = function() {
  return this.setLdap(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.StartIdentityProviderIntentRequest.prototype.hasLdap = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.zitadel.user.v2.StartIdentityProviderIntentResponse.oneofGroups_ = [[2,3,4,5]];

/**
 * @enum {number}
 */
proto.zitadel.user.v2.StartIdentityProviderIntentResponse.NextStepCase = {
  NEXT_STEP_NOT_SET: 0,
  AUTH_URL: 2,
  IDP_INTENT: 3,
  POST_FORM: 4,
  FORM_DATA: 5
};

/**
 * @return {proto.zitadel.user.v2.StartIdentityProviderIntentResponse.NextStepCase}
 */
proto.zitadel.user.v2.StartIdentityProviderIntentResponse.prototype.getNextStepCase = function() {
  return /** @type {proto.zitadel.user.v2.StartIdentityProviderIntentResponse.NextStepCase} */(jspb.Message.computeOneofCase(this, proto.zitadel.user.v2.StartIdentityProviderIntentResponse.oneofGroups_[0]));
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
proto.zitadel.user.v2.StartIdentityProviderIntentResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.StartIdentityProviderIntentResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.StartIdentityProviderIntentResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.StartIdentityProviderIntentResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_v2_object_pb.Details.toObject(includeInstance, f),
authUrl: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
idpIntent: (f = msg.getIdpIntent()) && zitadel_user_v2_idp_pb.IDPIntent.toObject(includeInstance, f),
postForm: msg.getPostForm_asB64(),
formData: (f = msg.getFormData()) && zitadel_user_v2_idp_pb.FormData.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.user.v2.StartIdentityProviderIntentResponse}
 */
proto.zitadel.user.v2.StartIdentityProviderIntentResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.StartIdentityProviderIntentResponse;
  return proto.zitadel.user.v2.StartIdentityProviderIntentResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.StartIdentityProviderIntentResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.StartIdentityProviderIntentResponse}
 */
proto.zitadel.user.v2.StartIdentityProviderIntentResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setAuthUrl(value);
      break;
    case 3:
      var value = new zitadel_user_v2_idp_pb.IDPIntent;
      reader.readMessage(value,zitadel_user_v2_idp_pb.IDPIntent.deserializeBinaryFromReader);
      msg.setIdpIntent(value);
      break;
    case 4:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPostForm(value);
      break;
    case 5:
      var value = new zitadel_user_v2_idp_pb.FormData;
      reader.readMessage(value,zitadel_user_v2_idp_pb.FormData.deserializeBinaryFromReader);
      msg.setFormData(value);
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
proto.zitadel.user.v2.StartIdentityProviderIntentResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.StartIdentityProviderIntentResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.StartIdentityProviderIntentResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.StartIdentityProviderIntentResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v2_object_pb.Details.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getIdpIntent();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      zitadel_user_v2_idp_pb.IDPIntent.serializeBinaryToWriter
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeBytes(
      4,
      f
    );
  }
  f = message.getFormData();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      zitadel_user_v2_idp_pb.FormData.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.object.v2.Details details = 1;
 * @return {?proto.zitadel.object.v2.Details}
 */
proto.zitadel.user.v2.StartIdentityProviderIntentResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.object.v2.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.object.v2.Details|undefined} value
 * @return {!proto.zitadel.user.v2.StartIdentityProviderIntentResponse} returns this
*/
proto.zitadel.user.v2.StartIdentityProviderIntentResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2.StartIdentityProviderIntentResponse} returns this
 */
proto.zitadel.user.v2.StartIdentityProviderIntentResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.StartIdentityProviderIntentResponse.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string auth_url = 2;
 * @return {string}
 */
proto.zitadel.user.v2.StartIdentityProviderIntentResponse.prototype.getAuthUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2.StartIdentityProviderIntentResponse} returns this
 */
proto.zitadel.user.v2.StartIdentityProviderIntentResponse.prototype.setAuthUrl = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.zitadel.user.v2.StartIdentityProviderIntentResponse.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.user.v2.StartIdentityProviderIntentResponse} returns this
 */
proto.zitadel.user.v2.StartIdentityProviderIntentResponse.prototype.clearAuthUrl = function() {
  return jspb.Message.setOneofField(this, 2, proto.zitadel.user.v2.StartIdentityProviderIntentResponse.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.StartIdentityProviderIntentResponse.prototype.hasAuthUrl = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional IDPIntent idp_intent = 3;
 * @return {?proto.zitadel.user.v2.IDPIntent}
 */
proto.zitadel.user.v2.StartIdentityProviderIntentResponse.prototype.getIdpIntent = function() {
  return /** @type{?proto.zitadel.user.v2.IDPIntent} */ (
    jspb.Message.getWrapperField(this, zitadel_user_v2_idp_pb.IDPIntent, 3));
};


/**
 * @param {?proto.zitadel.user.v2.IDPIntent|undefined} value
 * @return {!proto.zitadel.user.v2.StartIdentityProviderIntentResponse} returns this
*/
proto.zitadel.user.v2.StartIdentityProviderIntentResponse.prototype.setIdpIntent = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.zitadel.user.v2.StartIdentityProviderIntentResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2.StartIdentityProviderIntentResponse} returns this
 */
proto.zitadel.user.v2.StartIdentityProviderIntentResponse.prototype.clearIdpIntent = function() {
  return this.setIdpIntent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.StartIdentityProviderIntentResponse.prototype.hasIdpIntent = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bytes post_form = 4;
 * @return {!(string|Uint8Array)}
 */
proto.zitadel.user.v2.StartIdentityProviderIntentResponse.prototype.getPostForm = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * optional bytes post_form = 4;
 * This is a type-conversion wrapper around `getPostForm()`
 * @return {string}
 */
proto.zitadel.user.v2.StartIdentityProviderIntentResponse.prototype.getPostForm_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPostForm()));
};


/**
 * optional bytes post_form = 4;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPostForm()`
 * @return {!Uint8Array}
 */
proto.zitadel.user.v2.StartIdentityProviderIntentResponse.prototype.getPostForm_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPostForm()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.zitadel.user.v2.StartIdentityProviderIntentResponse} returns this
 */
proto.zitadel.user.v2.StartIdentityProviderIntentResponse.prototype.setPostForm = function(value) {
  return jspb.Message.setOneofField(this, 4, proto.zitadel.user.v2.StartIdentityProviderIntentResponse.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.user.v2.StartIdentityProviderIntentResponse} returns this
 */
proto.zitadel.user.v2.StartIdentityProviderIntentResponse.prototype.clearPostForm = function() {
  return jspb.Message.setOneofField(this, 4, proto.zitadel.user.v2.StartIdentityProviderIntentResponse.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.StartIdentityProviderIntentResponse.prototype.hasPostForm = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional FormData form_data = 5;
 * @return {?proto.zitadel.user.v2.FormData}
 */
proto.zitadel.user.v2.StartIdentityProviderIntentResponse.prototype.getFormData = function() {
  return /** @type{?proto.zitadel.user.v2.FormData} */ (
    jspb.Message.getWrapperField(this, zitadel_user_v2_idp_pb.FormData, 5));
};


/**
 * @param {?proto.zitadel.user.v2.FormData|undefined} value
 * @return {!proto.zitadel.user.v2.StartIdentityProviderIntentResponse} returns this
*/
proto.zitadel.user.v2.StartIdentityProviderIntentResponse.prototype.setFormData = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.zitadel.user.v2.StartIdentityProviderIntentResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2.StartIdentityProviderIntentResponse} returns this
 */
proto.zitadel.user.v2.StartIdentityProviderIntentResponse.prototype.clearFormData = function() {
  return this.setFormData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.StartIdentityProviderIntentResponse.prototype.hasFormData = function() {
  return jspb.Message.getField(this, 5) != null;
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
proto.zitadel.user.v2.RetrieveIdentityProviderIntentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.RetrieveIdentityProviderIntentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.RetrieveIdentityProviderIntentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.RetrieveIdentityProviderIntentRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
idpIntentId: jspb.Message.getFieldWithDefault(msg, 1, ""),
idpIntentToken: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.zitadel.user.v2.RetrieveIdentityProviderIntentRequest}
 */
proto.zitadel.user.v2.RetrieveIdentityProviderIntentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.RetrieveIdentityProviderIntentRequest;
  return proto.zitadel.user.v2.RetrieveIdentityProviderIntentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.RetrieveIdentityProviderIntentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.RetrieveIdentityProviderIntentRequest}
 */
proto.zitadel.user.v2.RetrieveIdentityProviderIntentRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setIdpIntentId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setIdpIntentToken(value);
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
proto.zitadel.user.v2.RetrieveIdentityProviderIntentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.RetrieveIdentityProviderIntentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.RetrieveIdentityProviderIntentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.RetrieveIdentityProviderIntentRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIdpIntentId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getIdpIntentToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string idp_intent_id = 1;
 * @return {string}
 */
proto.zitadel.user.v2.RetrieveIdentityProviderIntentRequest.prototype.getIdpIntentId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2.RetrieveIdentityProviderIntentRequest} returns this
 */
proto.zitadel.user.v2.RetrieveIdentityProviderIntentRequest.prototype.setIdpIntentId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string idp_intent_token = 2;
 * @return {string}
 */
proto.zitadel.user.v2.RetrieveIdentityProviderIntentRequest.prototype.getIdpIntentToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2.RetrieveIdentityProviderIntentRequest} returns this
 */
proto.zitadel.user.v2.RetrieveIdentityProviderIntentRequest.prototype.setIdpIntentToken = function(value) {
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
proto.zitadel.user.v2.RetrieveIdentityProviderIntentResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.RetrieveIdentityProviderIntentResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.RetrieveIdentityProviderIntentResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.RetrieveIdentityProviderIntentResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_v2_object_pb.Details.toObject(includeInstance, f),
idpInformation: (f = msg.getIdpInformation()) && zitadel_user_v2_idp_pb.IDPInformation.toObject(includeInstance, f),
userId: jspb.Message.getFieldWithDefault(msg, 3, ""),
addHumanUser: (f = msg.getAddHumanUser()) && proto.zitadel.user.v2.AddHumanUserRequest.toObject(includeInstance, f),
updateHumanUser: (f = msg.getUpdateHumanUser()) && proto.zitadel.user.v2.UpdateHumanUserRequest.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.user.v2.RetrieveIdentityProviderIntentResponse}
 */
proto.zitadel.user.v2.RetrieveIdentityProviderIntentResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.RetrieveIdentityProviderIntentResponse;
  return proto.zitadel.user.v2.RetrieveIdentityProviderIntentResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.RetrieveIdentityProviderIntentResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.RetrieveIdentityProviderIntentResponse}
 */
proto.zitadel.user.v2.RetrieveIdentityProviderIntentResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new zitadel_user_v2_idp_pb.IDPInformation;
      reader.readMessage(value,zitadel_user_v2_idp_pb.IDPInformation.deserializeBinaryFromReader);
      msg.setIdpInformation(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 4:
      var value = new proto.zitadel.user.v2.AddHumanUserRequest;
      reader.readMessage(value,proto.zitadel.user.v2.AddHumanUserRequest.deserializeBinaryFromReader);
      msg.setAddHumanUser(value);
      break;
    case 5:
      var value = new proto.zitadel.user.v2.UpdateHumanUserRequest;
      reader.readMessage(value,proto.zitadel.user.v2.UpdateHumanUserRequest.deserializeBinaryFromReader);
      msg.setUpdateHumanUser(value);
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
proto.zitadel.user.v2.RetrieveIdentityProviderIntentResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.RetrieveIdentityProviderIntentResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.RetrieveIdentityProviderIntentResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.RetrieveIdentityProviderIntentResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v2_object_pb.Details.serializeBinaryToWriter
    );
  }
  f = message.getIdpInformation();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      zitadel_user_v2_idp_pb.IDPInformation.serializeBinaryToWriter
    );
  }
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getAddHumanUser();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.zitadel.user.v2.AddHumanUserRequest.serializeBinaryToWriter
    );
  }
  f = message.getUpdateHumanUser();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.zitadel.user.v2.UpdateHumanUserRequest.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.object.v2.Details details = 1;
 * @return {?proto.zitadel.object.v2.Details}
 */
proto.zitadel.user.v2.RetrieveIdentityProviderIntentResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.object.v2.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.object.v2.Details|undefined} value
 * @return {!proto.zitadel.user.v2.RetrieveIdentityProviderIntentResponse} returns this
*/
proto.zitadel.user.v2.RetrieveIdentityProviderIntentResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2.RetrieveIdentityProviderIntentResponse} returns this
 */
proto.zitadel.user.v2.RetrieveIdentityProviderIntentResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.RetrieveIdentityProviderIntentResponse.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional IDPInformation idp_information = 2;
 * @return {?proto.zitadel.user.v2.IDPInformation}
 */
proto.zitadel.user.v2.RetrieveIdentityProviderIntentResponse.prototype.getIdpInformation = function() {
  return /** @type{?proto.zitadel.user.v2.IDPInformation} */ (
    jspb.Message.getWrapperField(this, zitadel_user_v2_idp_pb.IDPInformation, 2));
};


/**
 * @param {?proto.zitadel.user.v2.IDPInformation|undefined} value
 * @return {!proto.zitadel.user.v2.RetrieveIdentityProviderIntentResponse} returns this
*/
proto.zitadel.user.v2.RetrieveIdentityProviderIntentResponse.prototype.setIdpInformation = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2.RetrieveIdentityProviderIntentResponse} returns this
 */
proto.zitadel.user.v2.RetrieveIdentityProviderIntentResponse.prototype.clearIdpInformation = function() {
  return this.setIdpInformation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.RetrieveIdentityProviderIntentResponse.prototype.hasIdpInformation = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string user_id = 3;
 * @return {string}
 */
proto.zitadel.user.v2.RetrieveIdentityProviderIntentResponse.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2.RetrieveIdentityProviderIntentResponse} returns this
 */
proto.zitadel.user.v2.RetrieveIdentityProviderIntentResponse.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional AddHumanUserRequest add_human_user = 4;
 * @return {?proto.zitadel.user.v2.AddHumanUserRequest}
 */
proto.zitadel.user.v2.RetrieveIdentityProviderIntentResponse.prototype.getAddHumanUser = function() {
  return /** @type{?proto.zitadel.user.v2.AddHumanUserRequest} */ (
    jspb.Message.getWrapperField(this, proto.zitadel.user.v2.AddHumanUserRequest, 4));
};


/**
 * @param {?proto.zitadel.user.v2.AddHumanUserRequest|undefined} value
 * @return {!proto.zitadel.user.v2.RetrieveIdentityProviderIntentResponse} returns this
*/
proto.zitadel.user.v2.RetrieveIdentityProviderIntentResponse.prototype.setAddHumanUser = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2.RetrieveIdentityProviderIntentResponse} returns this
 */
proto.zitadel.user.v2.RetrieveIdentityProviderIntentResponse.prototype.clearAddHumanUser = function() {
  return this.setAddHumanUser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.RetrieveIdentityProviderIntentResponse.prototype.hasAddHumanUser = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional UpdateHumanUserRequest update_human_user = 5;
 * @return {?proto.zitadel.user.v2.UpdateHumanUserRequest}
 */
proto.zitadel.user.v2.RetrieveIdentityProviderIntentResponse.prototype.getUpdateHumanUser = function() {
  return /** @type{?proto.zitadel.user.v2.UpdateHumanUserRequest} */ (
    jspb.Message.getWrapperField(this, proto.zitadel.user.v2.UpdateHumanUserRequest, 5));
};


/**
 * @param {?proto.zitadel.user.v2.UpdateHumanUserRequest|undefined} value
 * @return {!proto.zitadel.user.v2.RetrieveIdentityProviderIntentResponse} returns this
*/
proto.zitadel.user.v2.RetrieveIdentityProviderIntentResponse.prototype.setUpdateHumanUser = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2.RetrieveIdentityProviderIntentResponse} returns this
 */
proto.zitadel.user.v2.RetrieveIdentityProviderIntentResponse.prototype.clearUpdateHumanUser = function() {
  return this.setUpdateHumanUser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.RetrieveIdentityProviderIntentResponse.prototype.hasUpdateHumanUser = function() {
  return jspb.Message.getField(this, 5) != null;
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
proto.zitadel.user.v2.AddIDPLinkRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.AddIDPLinkRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.AddIDPLinkRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.AddIDPLinkRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
userId: jspb.Message.getFieldWithDefault(msg, 1, ""),
idpLink: (f = msg.getIdpLink()) && zitadel_user_v2_idp_pb.IDPLink.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.user.v2.AddIDPLinkRequest}
 */
proto.zitadel.user.v2.AddIDPLinkRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.AddIDPLinkRequest;
  return proto.zitadel.user.v2.AddIDPLinkRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.AddIDPLinkRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.AddIDPLinkRequest}
 */
proto.zitadel.user.v2.AddIDPLinkRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new zitadel_user_v2_idp_pb.IDPLink;
      reader.readMessage(value,zitadel_user_v2_idp_pb.IDPLink.deserializeBinaryFromReader);
      msg.setIdpLink(value);
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
proto.zitadel.user.v2.AddIDPLinkRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.AddIDPLinkRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.AddIDPLinkRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.AddIDPLinkRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getIdpLink();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      zitadel_user_v2_idp_pb.IDPLink.serializeBinaryToWriter
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.zitadel.user.v2.AddIDPLinkRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2.AddIDPLinkRequest} returns this
 */
proto.zitadel.user.v2.AddIDPLinkRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional IDPLink idp_link = 2;
 * @return {?proto.zitadel.user.v2.IDPLink}
 */
proto.zitadel.user.v2.AddIDPLinkRequest.prototype.getIdpLink = function() {
  return /** @type{?proto.zitadel.user.v2.IDPLink} */ (
    jspb.Message.getWrapperField(this, zitadel_user_v2_idp_pb.IDPLink, 2));
};


/**
 * @param {?proto.zitadel.user.v2.IDPLink|undefined} value
 * @return {!proto.zitadel.user.v2.AddIDPLinkRequest} returns this
*/
proto.zitadel.user.v2.AddIDPLinkRequest.prototype.setIdpLink = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2.AddIDPLinkRequest} returns this
 */
proto.zitadel.user.v2.AddIDPLinkRequest.prototype.clearIdpLink = function() {
  return this.setIdpLink(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.AddIDPLinkRequest.prototype.hasIdpLink = function() {
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
proto.zitadel.user.v2.AddIDPLinkResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.AddIDPLinkResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.AddIDPLinkResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.AddIDPLinkResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_v2_object_pb.Details.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.user.v2.AddIDPLinkResponse}
 */
proto.zitadel.user.v2.AddIDPLinkResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.AddIDPLinkResponse;
  return proto.zitadel.user.v2.AddIDPLinkResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.AddIDPLinkResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.AddIDPLinkResponse}
 */
proto.zitadel.user.v2.AddIDPLinkResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.user.v2.AddIDPLinkResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.AddIDPLinkResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.AddIDPLinkResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.AddIDPLinkResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v2_object_pb.Details.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.object.v2.Details details = 1;
 * @return {?proto.zitadel.object.v2.Details}
 */
proto.zitadel.user.v2.AddIDPLinkResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.object.v2.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.object.v2.Details|undefined} value
 * @return {!proto.zitadel.user.v2.AddIDPLinkResponse} returns this
*/
proto.zitadel.user.v2.AddIDPLinkResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2.AddIDPLinkResponse} returns this
 */
proto.zitadel.user.v2.AddIDPLinkResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.AddIDPLinkResponse.prototype.hasDetails = function() {
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
proto.zitadel.user.v2.ListIDPLinksRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.ListIDPLinksRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.ListIDPLinksRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.ListIDPLinksRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
userId: jspb.Message.getFieldWithDefault(msg, 1, ""),
query: (f = msg.getQuery()) && zitadel_object_v2_object_pb.ListQuery.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.user.v2.ListIDPLinksRequest}
 */
proto.zitadel.user.v2.ListIDPLinksRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.ListIDPLinksRequest;
  return proto.zitadel.user.v2.ListIDPLinksRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.ListIDPLinksRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.ListIDPLinksRequest}
 */
proto.zitadel.user.v2.ListIDPLinksRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new zitadel_object_v2_object_pb.ListQuery;
      reader.readMessage(value,zitadel_object_v2_object_pb.ListQuery.deserializeBinaryFromReader);
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
proto.zitadel.user.v2.ListIDPLinksRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.ListIDPLinksRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.ListIDPLinksRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.ListIDPLinksRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
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
      zitadel_object_v2_object_pb.ListQuery.serializeBinaryToWriter
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.zitadel.user.v2.ListIDPLinksRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2.ListIDPLinksRequest} returns this
 */
proto.zitadel.user.v2.ListIDPLinksRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional zitadel.object.v2.ListQuery query = 2;
 * @return {?proto.zitadel.object.v2.ListQuery}
 */
proto.zitadel.user.v2.ListIDPLinksRequest.prototype.getQuery = function() {
  return /** @type{?proto.zitadel.object.v2.ListQuery} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2_object_pb.ListQuery, 2));
};


/**
 * @param {?proto.zitadel.object.v2.ListQuery|undefined} value
 * @return {!proto.zitadel.user.v2.ListIDPLinksRequest} returns this
*/
proto.zitadel.user.v2.ListIDPLinksRequest.prototype.setQuery = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2.ListIDPLinksRequest} returns this
 */
proto.zitadel.user.v2.ListIDPLinksRequest.prototype.clearQuery = function() {
  return this.setQuery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.ListIDPLinksRequest.prototype.hasQuery = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.user.v2.ListIDPLinksResponse.repeatedFields_ = [2];



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
proto.zitadel.user.v2.ListIDPLinksResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.ListIDPLinksResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.ListIDPLinksResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.ListIDPLinksResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_v2_object_pb.ListDetails.toObject(includeInstance, f),
resultList: jspb.Message.toObjectList(msg.getResultList(),
    zitadel_user_v2_idp_pb.IDPLink.toObject, includeInstance)
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
 * @return {!proto.zitadel.user.v2.ListIDPLinksResponse}
 */
proto.zitadel.user.v2.ListIDPLinksResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.ListIDPLinksResponse;
  return proto.zitadel.user.v2.ListIDPLinksResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.ListIDPLinksResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.ListIDPLinksResponse}
 */
proto.zitadel.user.v2.ListIDPLinksResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new zitadel_user_v2_idp_pb.IDPLink;
      reader.readMessage(value,zitadel_user_v2_idp_pb.IDPLink.deserializeBinaryFromReader);
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
proto.zitadel.user.v2.ListIDPLinksResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.ListIDPLinksResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.ListIDPLinksResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.ListIDPLinksResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v2_object_pb.ListDetails.serializeBinaryToWriter
    );
  }
  f = message.getResultList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      zitadel_user_v2_idp_pb.IDPLink.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.object.v2.ListDetails details = 1;
 * @return {?proto.zitadel.object.v2.ListDetails}
 */
proto.zitadel.user.v2.ListIDPLinksResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.object.v2.ListDetails} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2_object_pb.ListDetails, 1));
};


/**
 * @param {?proto.zitadel.object.v2.ListDetails|undefined} value
 * @return {!proto.zitadel.user.v2.ListIDPLinksResponse} returns this
*/
proto.zitadel.user.v2.ListIDPLinksResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2.ListIDPLinksResponse} returns this
 */
proto.zitadel.user.v2.ListIDPLinksResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.ListIDPLinksResponse.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated IDPLink result = 2;
 * @return {!Array<!proto.zitadel.user.v2.IDPLink>}
 */
proto.zitadel.user.v2.ListIDPLinksResponse.prototype.getResultList = function() {
  return /** @type{!Array<!proto.zitadel.user.v2.IDPLink>} */ (
    jspb.Message.getRepeatedWrapperField(this, zitadel_user_v2_idp_pb.IDPLink, 2));
};


/**
 * @param {!Array<!proto.zitadel.user.v2.IDPLink>} value
 * @return {!proto.zitadel.user.v2.ListIDPLinksResponse} returns this
*/
proto.zitadel.user.v2.ListIDPLinksResponse.prototype.setResultList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.zitadel.user.v2.IDPLink=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zitadel.user.v2.IDPLink}
 */
proto.zitadel.user.v2.ListIDPLinksResponse.prototype.addResult = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.zitadel.user.v2.IDPLink, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.user.v2.ListIDPLinksResponse} returns this
 */
proto.zitadel.user.v2.ListIDPLinksResponse.prototype.clearResultList = function() {
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
proto.zitadel.user.v2.RemoveIDPLinkRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.RemoveIDPLinkRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.RemoveIDPLinkRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.RemoveIDPLinkRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
userId: jspb.Message.getFieldWithDefault(msg, 1, ""),
idpId: jspb.Message.getFieldWithDefault(msg, 2, ""),
linkedUserId: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.zitadel.user.v2.RemoveIDPLinkRequest}
 */
proto.zitadel.user.v2.RemoveIDPLinkRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.RemoveIDPLinkRequest;
  return proto.zitadel.user.v2.RemoveIDPLinkRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.RemoveIDPLinkRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.RemoveIDPLinkRequest}
 */
proto.zitadel.user.v2.RemoveIDPLinkRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setIdpId(value);
      break;
    case 3:
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
proto.zitadel.user.v2.RemoveIDPLinkRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.RemoveIDPLinkRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.RemoveIDPLinkRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.RemoveIDPLinkRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getIdpId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLinkedUserId();
  if (f.length > 0) {
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
proto.zitadel.user.v2.RemoveIDPLinkRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2.RemoveIDPLinkRequest} returns this
 */
proto.zitadel.user.v2.RemoveIDPLinkRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string idp_id = 2;
 * @return {string}
 */
proto.zitadel.user.v2.RemoveIDPLinkRequest.prototype.getIdpId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2.RemoveIDPLinkRequest} returns this
 */
proto.zitadel.user.v2.RemoveIDPLinkRequest.prototype.setIdpId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string linked_user_id = 3;
 * @return {string}
 */
proto.zitadel.user.v2.RemoveIDPLinkRequest.prototype.getLinkedUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2.RemoveIDPLinkRequest} returns this
 */
proto.zitadel.user.v2.RemoveIDPLinkRequest.prototype.setLinkedUserId = function(value) {
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
proto.zitadel.user.v2.RemoveIDPLinkResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.RemoveIDPLinkResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.RemoveIDPLinkResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.RemoveIDPLinkResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_v2_object_pb.Details.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.user.v2.RemoveIDPLinkResponse}
 */
proto.zitadel.user.v2.RemoveIDPLinkResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.RemoveIDPLinkResponse;
  return proto.zitadel.user.v2.RemoveIDPLinkResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.RemoveIDPLinkResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.RemoveIDPLinkResponse}
 */
proto.zitadel.user.v2.RemoveIDPLinkResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.user.v2.RemoveIDPLinkResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.RemoveIDPLinkResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.RemoveIDPLinkResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.RemoveIDPLinkResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v2_object_pb.Details.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.object.v2.Details details = 1;
 * @return {?proto.zitadel.object.v2.Details}
 */
proto.zitadel.user.v2.RemoveIDPLinkResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.object.v2.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.object.v2.Details|undefined} value
 * @return {!proto.zitadel.user.v2.RemoveIDPLinkResponse} returns this
*/
proto.zitadel.user.v2.RemoveIDPLinkResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2.RemoveIDPLinkResponse} returns this
 */
proto.zitadel.user.v2.RemoveIDPLinkResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.RemoveIDPLinkResponse.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.zitadel.user.v2.PasswordResetRequest.oneofGroups_ = [[2,3]];

/**
 * @enum {number}
 */
proto.zitadel.user.v2.PasswordResetRequest.MediumCase = {
  MEDIUM_NOT_SET: 0,
  SEND_LINK: 2,
  RETURN_CODE: 3
};

/**
 * @return {proto.zitadel.user.v2.PasswordResetRequest.MediumCase}
 */
proto.zitadel.user.v2.PasswordResetRequest.prototype.getMediumCase = function() {
  return /** @type {proto.zitadel.user.v2.PasswordResetRequest.MediumCase} */(jspb.Message.computeOneofCase(this, proto.zitadel.user.v2.PasswordResetRequest.oneofGroups_[0]));
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
proto.zitadel.user.v2.PasswordResetRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.PasswordResetRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.PasswordResetRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.PasswordResetRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
userId: jspb.Message.getFieldWithDefault(msg, 1, ""),
sendLink: (f = msg.getSendLink()) && zitadel_user_v2_password_pb.SendPasswordResetLink.toObject(includeInstance, f),
returnCode: (f = msg.getReturnCode()) && zitadel_user_v2_password_pb.ReturnPasswordResetCode.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.user.v2.PasswordResetRequest}
 */
proto.zitadel.user.v2.PasswordResetRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.PasswordResetRequest;
  return proto.zitadel.user.v2.PasswordResetRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.PasswordResetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.PasswordResetRequest}
 */
proto.zitadel.user.v2.PasswordResetRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new zitadel_user_v2_password_pb.SendPasswordResetLink;
      reader.readMessage(value,zitadel_user_v2_password_pb.SendPasswordResetLink.deserializeBinaryFromReader);
      msg.setSendLink(value);
      break;
    case 3:
      var value = new zitadel_user_v2_password_pb.ReturnPasswordResetCode;
      reader.readMessage(value,zitadel_user_v2_password_pb.ReturnPasswordResetCode.deserializeBinaryFromReader);
      msg.setReturnCode(value);
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
proto.zitadel.user.v2.PasswordResetRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.PasswordResetRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.PasswordResetRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.PasswordResetRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSendLink();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      zitadel_user_v2_password_pb.SendPasswordResetLink.serializeBinaryToWriter
    );
  }
  f = message.getReturnCode();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      zitadel_user_v2_password_pb.ReturnPasswordResetCode.serializeBinaryToWriter
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.zitadel.user.v2.PasswordResetRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2.PasswordResetRequest} returns this
 */
proto.zitadel.user.v2.PasswordResetRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional SendPasswordResetLink send_link = 2;
 * @return {?proto.zitadel.user.v2.SendPasswordResetLink}
 */
proto.zitadel.user.v2.PasswordResetRequest.prototype.getSendLink = function() {
  return /** @type{?proto.zitadel.user.v2.SendPasswordResetLink} */ (
    jspb.Message.getWrapperField(this, zitadel_user_v2_password_pb.SendPasswordResetLink, 2));
};


/**
 * @param {?proto.zitadel.user.v2.SendPasswordResetLink|undefined} value
 * @return {!proto.zitadel.user.v2.PasswordResetRequest} returns this
*/
proto.zitadel.user.v2.PasswordResetRequest.prototype.setSendLink = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.zitadel.user.v2.PasswordResetRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2.PasswordResetRequest} returns this
 */
proto.zitadel.user.v2.PasswordResetRequest.prototype.clearSendLink = function() {
  return this.setSendLink(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.PasswordResetRequest.prototype.hasSendLink = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ReturnPasswordResetCode return_code = 3;
 * @return {?proto.zitadel.user.v2.ReturnPasswordResetCode}
 */
proto.zitadel.user.v2.PasswordResetRequest.prototype.getReturnCode = function() {
  return /** @type{?proto.zitadel.user.v2.ReturnPasswordResetCode} */ (
    jspb.Message.getWrapperField(this, zitadel_user_v2_password_pb.ReturnPasswordResetCode, 3));
};


/**
 * @param {?proto.zitadel.user.v2.ReturnPasswordResetCode|undefined} value
 * @return {!proto.zitadel.user.v2.PasswordResetRequest} returns this
*/
proto.zitadel.user.v2.PasswordResetRequest.prototype.setReturnCode = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.zitadel.user.v2.PasswordResetRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2.PasswordResetRequest} returns this
 */
proto.zitadel.user.v2.PasswordResetRequest.prototype.clearReturnCode = function() {
  return this.setReturnCode(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.PasswordResetRequest.prototype.hasReturnCode = function() {
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
proto.zitadel.user.v2.PasswordResetResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.PasswordResetResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.PasswordResetResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.PasswordResetResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_v2_object_pb.Details.toObject(includeInstance, f),
verificationCode: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.zitadel.user.v2.PasswordResetResponse}
 */
proto.zitadel.user.v2.PasswordResetResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.PasswordResetResponse;
  return proto.zitadel.user.v2.PasswordResetResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.PasswordResetResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.PasswordResetResponse}
 */
proto.zitadel.user.v2.PasswordResetResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setVerificationCode(value);
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
proto.zitadel.user.v2.PasswordResetResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.PasswordResetResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.PasswordResetResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.PasswordResetResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v2_object_pb.Details.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional zitadel.object.v2.Details details = 1;
 * @return {?proto.zitadel.object.v2.Details}
 */
proto.zitadel.user.v2.PasswordResetResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.object.v2.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.object.v2.Details|undefined} value
 * @return {!proto.zitadel.user.v2.PasswordResetResponse} returns this
*/
proto.zitadel.user.v2.PasswordResetResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2.PasswordResetResponse} returns this
 */
proto.zitadel.user.v2.PasswordResetResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.PasswordResetResponse.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string verification_code = 2;
 * @return {string}
 */
proto.zitadel.user.v2.PasswordResetResponse.prototype.getVerificationCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2.PasswordResetResponse} returns this
 */
proto.zitadel.user.v2.PasswordResetResponse.prototype.setVerificationCode = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.user.v2.PasswordResetResponse} returns this
 */
proto.zitadel.user.v2.PasswordResetResponse.prototype.clearVerificationCode = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.PasswordResetResponse.prototype.hasVerificationCode = function() {
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
proto.zitadel.user.v2.SetPasswordRequest.oneofGroups_ = [[3,4]];

/**
 * @enum {number}
 */
proto.zitadel.user.v2.SetPasswordRequest.VerificationCase = {
  VERIFICATION_NOT_SET: 0,
  CURRENT_PASSWORD: 3,
  VERIFICATION_CODE: 4
};

/**
 * @return {proto.zitadel.user.v2.SetPasswordRequest.VerificationCase}
 */
proto.zitadel.user.v2.SetPasswordRequest.prototype.getVerificationCase = function() {
  return /** @type {proto.zitadel.user.v2.SetPasswordRequest.VerificationCase} */(jspb.Message.computeOneofCase(this, proto.zitadel.user.v2.SetPasswordRequest.oneofGroups_[0]));
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
proto.zitadel.user.v2.SetPasswordRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.SetPasswordRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.SetPasswordRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.SetPasswordRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
userId: jspb.Message.getFieldWithDefault(msg, 1, ""),
newPassword: (f = msg.getNewPassword()) && zitadel_user_v2_password_pb.Password.toObject(includeInstance, f),
currentPassword: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
verificationCode: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f
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
 * @return {!proto.zitadel.user.v2.SetPasswordRequest}
 */
proto.zitadel.user.v2.SetPasswordRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.SetPasswordRequest;
  return proto.zitadel.user.v2.SetPasswordRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.SetPasswordRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.SetPasswordRequest}
 */
proto.zitadel.user.v2.SetPasswordRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new zitadel_user_v2_password_pb.Password;
      reader.readMessage(value,zitadel_user_v2_password_pb.Password.deserializeBinaryFromReader);
      msg.setNewPassword(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrentPassword(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setVerificationCode(value);
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
proto.zitadel.user.v2.SetPasswordRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.SetPasswordRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.SetPasswordRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.SetPasswordRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getNewPassword();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      zitadel_user_v2_password_pb.Password.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.zitadel.user.v2.SetPasswordRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2.SetPasswordRequest} returns this
 */
proto.zitadel.user.v2.SetPasswordRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Password new_password = 2;
 * @return {?proto.zitadel.user.v2.Password}
 */
proto.zitadel.user.v2.SetPasswordRequest.prototype.getNewPassword = function() {
  return /** @type{?proto.zitadel.user.v2.Password} */ (
    jspb.Message.getWrapperField(this, zitadel_user_v2_password_pb.Password, 2));
};


/**
 * @param {?proto.zitadel.user.v2.Password|undefined} value
 * @return {!proto.zitadel.user.v2.SetPasswordRequest} returns this
*/
proto.zitadel.user.v2.SetPasswordRequest.prototype.setNewPassword = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2.SetPasswordRequest} returns this
 */
proto.zitadel.user.v2.SetPasswordRequest.prototype.clearNewPassword = function() {
  return this.setNewPassword(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.SetPasswordRequest.prototype.hasNewPassword = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string current_password = 3;
 * @return {string}
 */
proto.zitadel.user.v2.SetPasswordRequest.prototype.getCurrentPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2.SetPasswordRequest} returns this
 */
proto.zitadel.user.v2.SetPasswordRequest.prototype.setCurrentPassword = function(value) {
  return jspb.Message.setOneofField(this, 3, proto.zitadel.user.v2.SetPasswordRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.user.v2.SetPasswordRequest} returns this
 */
proto.zitadel.user.v2.SetPasswordRequest.prototype.clearCurrentPassword = function() {
  return jspb.Message.setOneofField(this, 3, proto.zitadel.user.v2.SetPasswordRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.SetPasswordRequest.prototype.hasCurrentPassword = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string verification_code = 4;
 * @return {string}
 */
proto.zitadel.user.v2.SetPasswordRequest.prototype.getVerificationCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2.SetPasswordRequest} returns this
 */
proto.zitadel.user.v2.SetPasswordRequest.prototype.setVerificationCode = function(value) {
  return jspb.Message.setOneofField(this, 4, proto.zitadel.user.v2.SetPasswordRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.user.v2.SetPasswordRequest} returns this
 */
proto.zitadel.user.v2.SetPasswordRequest.prototype.clearVerificationCode = function() {
  return jspb.Message.setOneofField(this, 4, proto.zitadel.user.v2.SetPasswordRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.SetPasswordRequest.prototype.hasVerificationCode = function() {
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
proto.zitadel.user.v2.SetPasswordResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.SetPasswordResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.SetPasswordResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.SetPasswordResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_v2_object_pb.Details.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.user.v2.SetPasswordResponse}
 */
proto.zitadel.user.v2.SetPasswordResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.SetPasswordResponse;
  return proto.zitadel.user.v2.SetPasswordResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.SetPasswordResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.SetPasswordResponse}
 */
proto.zitadel.user.v2.SetPasswordResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.user.v2.SetPasswordResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.SetPasswordResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.SetPasswordResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.SetPasswordResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v2_object_pb.Details.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.object.v2.Details details = 1;
 * @return {?proto.zitadel.object.v2.Details}
 */
proto.zitadel.user.v2.SetPasswordResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.object.v2.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.object.v2.Details|undefined} value
 * @return {!proto.zitadel.user.v2.SetPasswordResponse} returns this
*/
proto.zitadel.user.v2.SetPasswordResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2.SetPasswordResponse} returns this
 */
proto.zitadel.user.v2.SetPasswordResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.SetPasswordResponse.prototype.hasDetails = function() {
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
proto.zitadel.user.v2.ListAuthenticationMethodTypesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.ListAuthenticationMethodTypesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.ListAuthenticationMethodTypesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.ListAuthenticationMethodTypesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
userId: jspb.Message.getFieldWithDefault(msg, 1, ""),
domainQuery: (f = msg.getDomainQuery()) && proto.zitadel.user.v2.DomainQuery.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.user.v2.ListAuthenticationMethodTypesRequest}
 */
proto.zitadel.user.v2.ListAuthenticationMethodTypesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.ListAuthenticationMethodTypesRequest;
  return proto.zitadel.user.v2.ListAuthenticationMethodTypesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.ListAuthenticationMethodTypesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.ListAuthenticationMethodTypesRequest}
 */
proto.zitadel.user.v2.ListAuthenticationMethodTypesRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.zitadel.user.v2.DomainQuery;
      reader.readMessage(value,proto.zitadel.user.v2.DomainQuery.deserializeBinaryFromReader);
      msg.setDomainQuery(value);
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
proto.zitadel.user.v2.ListAuthenticationMethodTypesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.ListAuthenticationMethodTypesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.ListAuthenticationMethodTypesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.ListAuthenticationMethodTypesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDomainQuery();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.zitadel.user.v2.DomainQuery.serializeBinaryToWriter
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.zitadel.user.v2.ListAuthenticationMethodTypesRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2.ListAuthenticationMethodTypesRequest} returns this
 */
proto.zitadel.user.v2.ListAuthenticationMethodTypesRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional DomainQuery domain_query = 2;
 * @return {?proto.zitadel.user.v2.DomainQuery}
 */
proto.zitadel.user.v2.ListAuthenticationMethodTypesRequest.prototype.getDomainQuery = function() {
  return /** @type{?proto.zitadel.user.v2.DomainQuery} */ (
    jspb.Message.getWrapperField(this, proto.zitadel.user.v2.DomainQuery, 2));
};


/**
 * @param {?proto.zitadel.user.v2.DomainQuery|undefined} value
 * @return {!proto.zitadel.user.v2.ListAuthenticationMethodTypesRequest} returns this
*/
proto.zitadel.user.v2.ListAuthenticationMethodTypesRequest.prototype.setDomainQuery = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2.ListAuthenticationMethodTypesRequest} returns this
 */
proto.zitadel.user.v2.ListAuthenticationMethodTypesRequest.prototype.clearDomainQuery = function() {
  return this.setDomainQuery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.ListAuthenticationMethodTypesRequest.prototype.hasDomainQuery = function() {
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
proto.zitadel.user.v2.DomainQuery.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.DomainQuery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.DomainQuery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.DomainQuery.toObject = function(includeInstance, msg) {
  var f, obj = {
includeWithoutDomain: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
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
 * @return {!proto.zitadel.user.v2.DomainQuery}
 */
proto.zitadel.user.v2.DomainQuery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.DomainQuery;
  return proto.zitadel.user.v2.DomainQuery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.DomainQuery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.DomainQuery}
 */
proto.zitadel.user.v2.DomainQuery.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludeWithoutDomain(value);
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
proto.zitadel.user.v2.DomainQuery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.DomainQuery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.DomainQuery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.DomainQuery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIncludeWithoutDomain();
  if (f) {
    writer.writeBool(
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
 * optional bool include_without_domain = 1;
 * @return {boolean}
 */
proto.zitadel.user.v2.DomainQuery.prototype.getIncludeWithoutDomain = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.zitadel.user.v2.DomainQuery} returns this
 */
proto.zitadel.user.v2.DomainQuery.prototype.setIncludeWithoutDomain = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional string domain = 2;
 * @return {string}
 */
proto.zitadel.user.v2.DomainQuery.prototype.getDomain = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2.DomainQuery} returns this
 */
proto.zitadel.user.v2.DomainQuery.prototype.setDomain = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.user.v2.ListAuthenticationMethodTypesResponse.repeatedFields_ = [2];



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
proto.zitadel.user.v2.ListAuthenticationMethodTypesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.ListAuthenticationMethodTypesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.ListAuthenticationMethodTypesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.ListAuthenticationMethodTypesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_v2_object_pb.ListDetails.toObject(includeInstance, f),
authMethodTypesList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.zitadel.user.v2.ListAuthenticationMethodTypesResponse}
 */
proto.zitadel.user.v2.ListAuthenticationMethodTypesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.ListAuthenticationMethodTypesResponse;
  return proto.zitadel.user.v2.ListAuthenticationMethodTypesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.ListAuthenticationMethodTypesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.ListAuthenticationMethodTypesResponse}
 */
proto.zitadel.user.v2.ListAuthenticationMethodTypesResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var values = /** @type {!Array<!proto.zitadel.user.v2.AuthenticationMethodType>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addAuthMethodTypes(values[i]);
      }
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
proto.zitadel.user.v2.ListAuthenticationMethodTypesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.ListAuthenticationMethodTypesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.ListAuthenticationMethodTypesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.ListAuthenticationMethodTypesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v2_object_pb.ListDetails.serializeBinaryToWriter
    );
  }
  f = message.getAuthMethodTypesList();
  if (f.length > 0) {
    writer.writePackedEnum(
      2,
      f
    );
  }
};


/**
 * optional zitadel.object.v2.ListDetails details = 1;
 * @return {?proto.zitadel.object.v2.ListDetails}
 */
proto.zitadel.user.v2.ListAuthenticationMethodTypesResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.object.v2.ListDetails} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2_object_pb.ListDetails, 1));
};


/**
 * @param {?proto.zitadel.object.v2.ListDetails|undefined} value
 * @return {!proto.zitadel.user.v2.ListAuthenticationMethodTypesResponse} returns this
*/
proto.zitadel.user.v2.ListAuthenticationMethodTypesResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2.ListAuthenticationMethodTypesResponse} returns this
 */
proto.zitadel.user.v2.ListAuthenticationMethodTypesResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.ListAuthenticationMethodTypesResponse.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated AuthenticationMethodType auth_method_types = 2;
 * @return {!Array<!proto.zitadel.user.v2.AuthenticationMethodType>}
 */
proto.zitadel.user.v2.ListAuthenticationMethodTypesResponse.prototype.getAuthMethodTypesList = function() {
  return /** @type {!Array<!proto.zitadel.user.v2.AuthenticationMethodType>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<!proto.zitadel.user.v2.AuthenticationMethodType>} value
 * @return {!proto.zitadel.user.v2.ListAuthenticationMethodTypesResponse} returns this
 */
proto.zitadel.user.v2.ListAuthenticationMethodTypesResponse.prototype.setAuthMethodTypesList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {!proto.zitadel.user.v2.AuthenticationMethodType} value
 * @param {number=} opt_index
 * @return {!proto.zitadel.user.v2.ListAuthenticationMethodTypesResponse} returns this
 */
proto.zitadel.user.v2.ListAuthenticationMethodTypesResponse.prototype.addAuthMethodTypes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.user.v2.ListAuthenticationMethodTypesResponse} returns this
 */
proto.zitadel.user.v2.ListAuthenticationMethodTypesResponse.prototype.clearAuthMethodTypesList = function() {
  return this.setAuthMethodTypesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.user.v2.ListAuthenticationFactorsRequest.repeatedFields_ = [2,3];



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
proto.zitadel.user.v2.ListAuthenticationFactorsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.ListAuthenticationFactorsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.ListAuthenticationFactorsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.ListAuthenticationFactorsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
userId: jspb.Message.getFieldWithDefault(msg, 1, ""),
authFactorsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
statesList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
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
 * @return {!proto.zitadel.user.v2.ListAuthenticationFactorsRequest}
 */
proto.zitadel.user.v2.ListAuthenticationFactorsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.ListAuthenticationFactorsRequest;
  return proto.zitadel.user.v2.ListAuthenticationFactorsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.ListAuthenticationFactorsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.ListAuthenticationFactorsRequest}
 */
proto.zitadel.user.v2.ListAuthenticationFactorsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var values = /** @type {!Array<!proto.zitadel.user.v2.AuthFactors>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addAuthFactors(values[i]);
      }
      break;
    case 3:
      var values = /** @type {!Array<!proto.zitadel.user.v2.AuthFactorState>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addStates(values[i]);
      }
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
proto.zitadel.user.v2.ListAuthenticationFactorsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.ListAuthenticationFactorsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.ListAuthenticationFactorsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.ListAuthenticationFactorsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAuthFactorsList();
  if (f.length > 0) {
    writer.writePackedEnum(
      2,
      f
    );
  }
  f = message.getStatesList();
  if (f.length > 0) {
    writer.writePackedEnum(
      3,
      f
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.zitadel.user.v2.ListAuthenticationFactorsRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2.ListAuthenticationFactorsRequest} returns this
 */
proto.zitadel.user.v2.ListAuthenticationFactorsRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated AuthFactors auth_factors = 2;
 * @return {!Array<!proto.zitadel.user.v2.AuthFactors>}
 */
proto.zitadel.user.v2.ListAuthenticationFactorsRequest.prototype.getAuthFactorsList = function() {
  return /** @type {!Array<!proto.zitadel.user.v2.AuthFactors>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<!proto.zitadel.user.v2.AuthFactors>} value
 * @return {!proto.zitadel.user.v2.ListAuthenticationFactorsRequest} returns this
 */
proto.zitadel.user.v2.ListAuthenticationFactorsRequest.prototype.setAuthFactorsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {!proto.zitadel.user.v2.AuthFactors} value
 * @param {number=} opt_index
 * @return {!proto.zitadel.user.v2.ListAuthenticationFactorsRequest} returns this
 */
proto.zitadel.user.v2.ListAuthenticationFactorsRequest.prototype.addAuthFactors = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.user.v2.ListAuthenticationFactorsRequest} returns this
 */
proto.zitadel.user.v2.ListAuthenticationFactorsRequest.prototype.clearAuthFactorsList = function() {
  return this.setAuthFactorsList([]);
};


/**
 * repeated AuthFactorState states = 3;
 * @return {!Array<!proto.zitadel.user.v2.AuthFactorState>}
 */
proto.zitadel.user.v2.ListAuthenticationFactorsRequest.prototype.getStatesList = function() {
  return /** @type {!Array<!proto.zitadel.user.v2.AuthFactorState>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<!proto.zitadel.user.v2.AuthFactorState>} value
 * @return {!proto.zitadel.user.v2.ListAuthenticationFactorsRequest} returns this
 */
proto.zitadel.user.v2.ListAuthenticationFactorsRequest.prototype.setStatesList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {!proto.zitadel.user.v2.AuthFactorState} value
 * @param {number=} opt_index
 * @return {!proto.zitadel.user.v2.ListAuthenticationFactorsRequest} returns this
 */
proto.zitadel.user.v2.ListAuthenticationFactorsRequest.prototype.addStates = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.user.v2.ListAuthenticationFactorsRequest} returns this
 */
proto.zitadel.user.v2.ListAuthenticationFactorsRequest.prototype.clearStatesList = function() {
  return this.setStatesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.user.v2.ListAuthenticationFactorsResponse.repeatedFields_ = [1];



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
proto.zitadel.user.v2.ListAuthenticationFactorsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.ListAuthenticationFactorsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.ListAuthenticationFactorsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.ListAuthenticationFactorsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
resultList: jspb.Message.toObjectList(msg.getResultList(),
    zitadel_user_v2_user_pb.AuthFactor.toObject, includeInstance)
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
 * @return {!proto.zitadel.user.v2.ListAuthenticationFactorsResponse}
 */
proto.zitadel.user.v2.ListAuthenticationFactorsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.ListAuthenticationFactorsResponse;
  return proto.zitadel.user.v2.ListAuthenticationFactorsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.ListAuthenticationFactorsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.ListAuthenticationFactorsResponse}
 */
proto.zitadel.user.v2.ListAuthenticationFactorsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_user_v2_user_pb.AuthFactor;
      reader.readMessage(value,zitadel_user_v2_user_pb.AuthFactor.deserializeBinaryFromReader);
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
proto.zitadel.user.v2.ListAuthenticationFactorsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.ListAuthenticationFactorsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.ListAuthenticationFactorsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.ListAuthenticationFactorsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResultList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      zitadel_user_v2_user_pb.AuthFactor.serializeBinaryToWriter
    );
  }
};


/**
 * repeated AuthFactor result = 1;
 * @return {!Array<!proto.zitadel.user.v2.AuthFactor>}
 */
proto.zitadel.user.v2.ListAuthenticationFactorsResponse.prototype.getResultList = function() {
  return /** @type{!Array<!proto.zitadel.user.v2.AuthFactor>} */ (
    jspb.Message.getRepeatedWrapperField(this, zitadel_user_v2_user_pb.AuthFactor, 1));
};


/**
 * @param {!Array<!proto.zitadel.user.v2.AuthFactor>} value
 * @return {!proto.zitadel.user.v2.ListAuthenticationFactorsResponse} returns this
*/
proto.zitadel.user.v2.ListAuthenticationFactorsResponse.prototype.setResultList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.zitadel.user.v2.AuthFactor=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zitadel.user.v2.AuthFactor}
 */
proto.zitadel.user.v2.ListAuthenticationFactorsResponse.prototype.addResult = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.zitadel.user.v2.AuthFactor, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.user.v2.ListAuthenticationFactorsResponse} returns this
 */
proto.zitadel.user.v2.ListAuthenticationFactorsResponse.prototype.clearResultList = function() {
  return this.setResultList([]);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.zitadel.user.v2.CreateInviteCodeRequest.oneofGroups_ = [[2,3]];

/**
 * @enum {number}
 */
proto.zitadel.user.v2.CreateInviteCodeRequest.VerificationCase = {
  VERIFICATION_NOT_SET: 0,
  SEND_CODE: 2,
  RETURN_CODE: 3
};

/**
 * @return {proto.zitadel.user.v2.CreateInviteCodeRequest.VerificationCase}
 */
proto.zitadel.user.v2.CreateInviteCodeRequest.prototype.getVerificationCase = function() {
  return /** @type {proto.zitadel.user.v2.CreateInviteCodeRequest.VerificationCase} */(jspb.Message.computeOneofCase(this, proto.zitadel.user.v2.CreateInviteCodeRequest.oneofGroups_[0]));
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
proto.zitadel.user.v2.CreateInviteCodeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.CreateInviteCodeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.CreateInviteCodeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.CreateInviteCodeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
userId: jspb.Message.getFieldWithDefault(msg, 1, ""),
sendCode: (f = msg.getSendCode()) && zitadel_user_v2_user_pb.SendInviteCode.toObject(includeInstance, f),
returnCode: (f = msg.getReturnCode()) && zitadel_user_v2_user_pb.ReturnInviteCode.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.user.v2.CreateInviteCodeRequest}
 */
proto.zitadel.user.v2.CreateInviteCodeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.CreateInviteCodeRequest;
  return proto.zitadel.user.v2.CreateInviteCodeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.CreateInviteCodeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.CreateInviteCodeRequest}
 */
proto.zitadel.user.v2.CreateInviteCodeRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new zitadel_user_v2_user_pb.SendInviteCode;
      reader.readMessage(value,zitadel_user_v2_user_pb.SendInviteCode.deserializeBinaryFromReader);
      msg.setSendCode(value);
      break;
    case 3:
      var value = new zitadel_user_v2_user_pb.ReturnInviteCode;
      reader.readMessage(value,zitadel_user_v2_user_pb.ReturnInviteCode.deserializeBinaryFromReader);
      msg.setReturnCode(value);
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
proto.zitadel.user.v2.CreateInviteCodeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.CreateInviteCodeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.CreateInviteCodeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.CreateInviteCodeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSendCode();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      zitadel_user_v2_user_pb.SendInviteCode.serializeBinaryToWriter
    );
  }
  f = message.getReturnCode();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      zitadel_user_v2_user_pb.ReturnInviteCode.serializeBinaryToWriter
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.zitadel.user.v2.CreateInviteCodeRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2.CreateInviteCodeRequest} returns this
 */
proto.zitadel.user.v2.CreateInviteCodeRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional SendInviteCode send_code = 2;
 * @return {?proto.zitadel.user.v2.SendInviteCode}
 */
proto.zitadel.user.v2.CreateInviteCodeRequest.prototype.getSendCode = function() {
  return /** @type{?proto.zitadel.user.v2.SendInviteCode} */ (
    jspb.Message.getWrapperField(this, zitadel_user_v2_user_pb.SendInviteCode, 2));
};


/**
 * @param {?proto.zitadel.user.v2.SendInviteCode|undefined} value
 * @return {!proto.zitadel.user.v2.CreateInviteCodeRequest} returns this
*/
proto.zitadel.user.v2.CreateInviteCodeRequest.prototype.setSendCode = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.zitadel.user.v2.CreateInviteCodeRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2.CreateInviteCodeRequest} returns this
 */
proto.zitadel.user.v2.CreateInviteCodeRequest.prototype.clearSendCode = function() {
  return this.setSendCode(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.CreateInviteCodeRequest.prototype.hasSendCode = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ReturnInviteCode return_code = 3;
 * @return {?proto.zitadel.user.v2.ReturnInviteCode}
 */
proto.zitadel.user.v2.CreateInviteCodeRequest.prototype.getReturnCode = function() {
  return /** @type{?proto.zitadel.user.v2.ReturnInviteCode} */ (
    jspb.Message.getWrapperField(this, zitadel_user_v2_user_pb.ReturnInviteCode, 3));
};


/**
 * @param {?proto.zitadel.user.v2.ReturnInviteCode|undefined} value
 * @return {!proto.zitadel.user.v2.CreateInviteCodeRequest} returns this
*/
proto.zitadel.user.v2.CreateInviteCodeRequest.prototype.setReturnCode = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.zitadel.user.v2.CreateInviteCodeRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2.CreateInviteCodeRequest} returns this
 */
proto.zitadel.user.v2.CreateInviteCodeRequest.prototype.clearReturnCode = function() {
  return this.setReturnCode(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.CreateInviteCodeRequest.prototype.hasReturnCode = function() {
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
proto.zitadel.user.v2.CreateInviteCodeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.CreateInviteCodeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.CreateInviteCodeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.CreateInviteCodeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_v2_object_pb.Details.toObject(includeInstance, f),
inviteCode: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.zitadel.user.v2.CreateInviteCodeResponse}
 */
proto.zitadel.user.v2.CreateInviteCodeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.CreateInviteCodeResponse;
  return proto.zitadel.user.v2.CreateInviteCodeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.CreateInviteCodeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.CreateInviteCodeResponse}
 */
proto.zitadel.user.v2.CreateInviteCodeResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setInviteCode(value);
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
proto.zitadel.user.v2.CreateInviteCodeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.CreateInviteCodeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.CreateInviteCodeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.CreateInviteCodeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v2_object_pb.Details.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional zitadel.object.v2.Details details = 1;
 * @return {?proto.zitadel.object.v2.Details}
 */
proto.zitadel.user.v2.CreateInviteCodeResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.object.v2.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.object.v2.Details|undefined} value
 * @return {!proto.zitadel.user.v2.CreateInviteCodeResponse} returns this
*/
proto.zitadel.user.v2.CreateInviteCodeResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2.CreateInviteCodeResponse} returns this
 */
proto.zitadel.user.v2.CreateInviteCodeResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.CreateInviteCodeResponse.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string invite_code = 2;
 * @return {string}
 */
proto.zitadel.user.v2.CreateInviteCodeResponse.prototype.getInviteCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2.CreateInviteCodeResponse} returns this
 */
proto.zitadel.user.v2.CreateInviteCodeResponse.prototype.setInviteCode = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.user.v2.CreateInviteCodeResponse} returns this
 */
proto.zitadel.user.v2.CreateInviteCodeResponse.prototype.clearInviteCode = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.CreateInviteCodeResponse.prototype.hasInviteCode = function() {
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
proto.zitadel.user.v2.ResendInviteCodeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.ResendInviteCodeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.ResendInviteCodeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.ResendInviteCodeRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.user.v2.ResendInviteCodeRequest}
 */
proto.zitadel.user.v2.ResendInviteCodeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.ResendInviteCodeRequest;
  return proto.zitadel.user.v2.ResendInviteCodeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.ResendInviteCodeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.ResendInviteCodeRequest}
 */
proto.zitadel.user.v2.ResendInviteCodeRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.user.v2.ResendInviteCodeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.ResendInviteCodeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.ResendInviteCodeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.ResendInviteCodeRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.user.v2.ResendInviteCodeRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2.ResendInviteCodeRequest} returns this
 */
proto.zitadel.user.v2.ResendInviteCodeRequest.prototype.setUserId = function(value) {
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
proto.zitadel.user.v2.ResendInviteCodeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.ResendInviteCodeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.ResendInviteCodeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.ResendInviteCodeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_v2_object_pb.Details.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.user.v2.ResendInviteCodeResponse}
 */
proto.zitadel.user.v2.ResendInviteCodeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.ResendInviteCodeResponse;
  return proto.zitadel.user.v2.ResendInviteCodeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.ResendInviteCodeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.ResendInviteCodeResponse}
 */
proto.zitadel.user.v2.ResendInviteCodeResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.user.v2.ResendInviteCodeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.ResendInviteCodeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.ResendInviteCodeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.ResendInviteCodeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v2_object_pb.Details.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.object.v2.Details details = 1;
 * @return {?proto.zitadel.object.v2.Details}
 */
proto.zitadel.user.v2.ResendInviteCodeResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.object.v2.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.object.v2.Details|undefined} value
 * @return {!proto.zitadel.user.v2.ResendInviteCodeResponse} returns this
*/
proto.zitadel.user.v2.ResendInviteCodeResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2.ResendInviteCodeResponse} returns this
 */
proto.zitadel.user.v2.ResendInviteCodeResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.ResendInviteCodeResponse.prototype.hasDetails = function() {
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
proto.zitadel.user.v2.VerifyInviteCodeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.VerifyInviteCodeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.VerifyInviteCodeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.VerifyInviteCodeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
userId: jspb.Message.getFieldWithDefault(msg, 1, ""),
verificationCode: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.zitadel.user.v2.VerifyInviteCodeRequest}
 */
proto.zitadel.user.v2.VerifyInviteCodeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.VerifyInviteCodeRequest;
  return proto.zitadel.user.v2.VerifyInviteCodeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.VerifyInviteCodeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.VerifyInviteCodeRequest}
 */
proto.zitadel.user.v2.VerifyInviteCodeRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setVerificationCode(value);
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
proto.zitadel.user.v2.VerifyInviteCodeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.VerifyInviteCodeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.VerifyInviteCodeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.VerifyInviteCodeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getVerificationCode();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.zitadel.user.v2.VerifyInviteCodeRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2.VerifyInviteCodeRequest} returns this
 */
proto.zitadel.user.v2.VerifyInviteCodeRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string verification_code = 2;
 * @return {string}
 */
proto.zitadel.user.v2.VerifyInviteCodeRequest.prototype.getVerificationCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2.VerifyInviteCodeRequest} returns this
 */
proto.zitadel.user.v2.VerifyInviteCodeRequest.prototype.setVerificationCode = function(value) {
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
proto.zitadel.user.v2.VerifyInviteCodeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.VerifyInviteCodeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.VerifyInviteCodeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.VerifyInviteCodeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_v2_object_pb.Details.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.user.v2.VerifyInviteCodeResponse}
 */
proto.zitadel.user.v2.VerifyInviteCodeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.VerifyInviteCodeResponse;
  return proto.zitadel.user.v2.VerifyInviteCodeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.VerifyInviteCodeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.VerifyInviteCodeResponse}
 */
proto.zitadel.user.v2.VerifyInviteCodeResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.user.v2.VerifyInviteCodeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.VerifyInviteCodeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.VerifyInviteCodeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.VerifyInviteCodeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v2_object_pb.Details.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.object.v2.Details details = 1;
 * @return {?proto.zitadel.object.v2.Details}
 */
proto.zitadel.user.v2.VerifyInviteCodeResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.object.v2.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.object.v2.Details|undefined} value
 * @return {!proto.zitadel.user.v2.VerifyInviteCodeResponse} returns this
*/
proto.zitadel.user.v2.VerifyInviteCodeResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2.VerifyInviteCodeResponse} returns this
 */
proto.zitadel.user.v2.VerifyInviteCodeResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.VerifyInviteCodeResponse.prototype.hasDetails = function() {
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
proto.zitadel.user.v2.HumanMFAInitSkippedRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.HumanMFAInitSkippedRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.HumanMFAInitSkippedRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.HumanMFAInitSkippedRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.user.v2.HumanMFAInitSkippedRequest}
 */
proto.zitadel.user.v2.HumanMFAInitSkippedRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.HumanMFAInitSkippedRequest;
  return proto.zitadel.user.v2.HumanMFAInitSkippedRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.HumanMFAInitSkippedRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.HumanMFAInitSkippedRequest}
 */
proto.zitadel.user.v2.HumanMFAInitSkippedRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.user.v2.HumanMFAInitSkippedRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.HumanMFAInitSkippedRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.HumanMFAInitSkippedRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.HumanMFAInitSkippedRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.user.v2.HumanMFAInitSkippedRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2.HumanMFAInitSkippedRequest} returns this
 */
proto.zitadel.user.v2.HumanMFAInitSkippedRequest.prototype.setUserId = function(value) {
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
proto.zitadel.user.v2.HumanMFAInitSkippedResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.HumanMFAInitSkippedResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.HumanMFAInitSkippedResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.HumanMFAInitSkippedResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_v2_object_pb.Details.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.user.v2.HumanMFAInitSkippedResponse}
 */
proto.zitadel.user.v2.HumanMFAInitSkippedResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.HumanMFAInitSkippedResponse;
  return proto.zitadel.user.v2.HumanMFAInitSkippedResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.HumanMFAInitSkippedResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.HumanMFAInitSkippedResponse}
 */
proto.zitadel.user.v2.HumanMFAInitSkippedResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.user.v2.HumanMFAInitSkippedResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.HumanMFAInitSkippedResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.HumanMFAInitSkippedResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.HumanMFAInitSkippedResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v2_object_pb.Details.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.object.v2.Details details = 1;
 * @return {?proto.zitadel.object.v2.Details}
 */
proto.zitadel.user.v2.HumanMFAInitSkippedResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.object.v2.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.object.v2.Details|undefined} value
 * @return {!proto.zitadel.user.v2.HumanMFAInitSkippedResponse} returns this
*/
proto.zitadel.user.v2.HumanMFAInitSkippedResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2.HumanMFAInitSkippedResponse} returns this
 */
proto.zitadel.user.v2.HumanMFAInitSkippedResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.HumanMFAInitSkippedResponse.prototype.hasDetails = function() {
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
proto.zitadel.user.v2.AddSecretRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.AddSecretRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.AddSecretRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.AddSecretRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.user.v2.AddSecretRequest}
 */
proto.zitadel.user.v2.AddSecretRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.AddSecretRequest;
  return proto.zitadel.user.v2.AddSecretRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.AddSecretRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.AddSecretRequest}
 */
proto.zitadel.user.v2.AddSecretRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.user.v2.AddSecretRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.AddSecretRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.AddSecretRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.AddSecretRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.user.v2.AddSecretRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2.AddSecretRequest} returns this
 */
proto.zitadel.user.v2.AddSecretRequest.prototype.setUserId = function(value) {
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
proto.zitadel.user.v2.AddSecretResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.AddSecretResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.AddSecretResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.AddSecretResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
creationDate: (f = msg.getCreationDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
clientSecret: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.zitadel.user.v2.AddSecretResponse}
 */
proto.zitadel.user.v2.AddSecretResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.AddSecretResponse;
  return proto.zitadel.user.v2.AddSecretResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.AddSecretResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.AddSecretResponse}
 */
proto.zitadel.user.v2.AddSecretResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setClientSecret(value);
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
proto.zitadel.user.v2.AddSecretResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.AddSecretResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.AddSecretResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.AddSecretResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCreationDate();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getClientSecret();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional google.protobuf.Timestamp creation_date = 1;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.zitadel.user.v2.AddSecretResponse.prototype.getCreationDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.zitadel.user.v2.AddSecretResponse} returns this
*/
proto.zitadel.user.v2.AddSecretResponse.prototype.setCreationDate = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2.AddSecretResponse} returns this
 */
proto.zitadel.user.v2.AddSecretResponse.prototype.clearCreationDate = function() {
  return this.setCreationDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.AddSecretResponse.prototype.hasCreationDate = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string client_secret = 2;
 * @return {string}
 */
proto.zitadel.user.v2.AddSecretResponse.prototype.getClientSecret = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2.AddSecretResponse} returns this
 */
proto.zitadel.user.v2.AddSecretResponse.prototype.setClientSecret = function(value) {
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
proto.zitadel.user.v2.RemoveSecretRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.RemoveSecretRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.RemoveSecretRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.RemoveSecretRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.user.v2.RemoveSecretRequest}
 */
proto.zitadel.user.v2.RemoveSecretRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.RemoveSecretRequest;
  return proto.zitadel.user.v2.RemoveSecretRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.RemoveSecretRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.RemoveSecretRequest}
 */
proto.zitadel.user.v2.RemoveSecretRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.user.v2.RemoveSecretRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.RemoveSecretRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.RemoveSecretRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.RemoveSecretRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.user.v2.RemoveSecretRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2.RemoveSecretRequest} returns this
 */
proto.zitadel.user.v2.RemoveSecretRequest.prototype.setUserId = function(value) {
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
proto.zitadel.user.v2.RemoveSecretResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.RemoveSecretResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.RemoveSecretResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.RemoveSecretResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.user.v2.RemoveSecretResponse}
 */
proto.zitadel.user.v2.RemoveSecretResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.RemoveSecretResponse;
  return proto.zitadel.user.v2.RemoveSecretResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.RemoveSecretResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.RemoveSecretResponse}
 */
proto.zitadel.user.v2.RemoveSecretResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.user.v2.RemoveSecretResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.RemoveSecretResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.RemoveSecretResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.RemoveSecretResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.user.v2.RemoveSecretResponse.prototype.getDeletionDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.zitadel.user.v2.RemoveSecretResponse} returns this
*/
proto.zitadel.user.v2.RemoveSecretResponse.prototype.setDeletionDate = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2.RemoveSecretResponse} returns this
 */
proto.zitadel.user.v2.RemoveSecretResponse.prototype.clearDeletionDate = function() {
  return this.setDeletionDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.RemoveSecretResponse.prototype.hasDeletionDate = function() {
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
proto.zitadel.user.v2.AddKeyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.AddKeyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.AddKeyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.AddKeyRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
userId: jspb.Message.getFieldWithDefault(msg, 1, ""),
expirationDate: (f = msg.getExpirationDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
publicKey: msg.getPublicKey_asB64()
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
 * @return {!proto.zitadel.user.v2.AddKeyRequest}
 */
proto.zitadel.user.v2.AddKeyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.AddKeyRequest;
  return proto.zitadel.user.v2.AddKeyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.AddKeyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.AddKeyRequest}
 */
proto.zitadel.user.v2.AddKeyRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setExpirationDate(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPublicKey(value);
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
proto.zitadel.user.v2.AddKeyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.AddKeyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.AddKeyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.AddKeyRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
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
  f = message.getPublicKey_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.zitadel.user.v2.AddKeyRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2.AddKeyRequest} returns this
 */
proto.zitadel.user.v2.AddKeyRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp expiration_date = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.zitadel.user.v2.AddKeyRequest.prototype.getExpirationDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.zitadel.user.v2.AddKeyRequest} returns this
*/
proto.zitadel.user.v2.AddKeyRequest.prototype.setExpirationDate = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2.AddKeyRequest} returns this
 */
proto.zitadel.user.v2.AddKeyRequest.prototype.clearExpirationDate = function() {
  return this.setExpirationDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.AddKeyRequest.prototype.hasExpirationDate = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bytes public_key = 3;
 * @return {!(string|Uint8Array)}
 */
proto.zitadel.user.v2.AddKeyRequest.prototype.getPublicKey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes public_key = 3;
 * This is a type-conversion wrapper around `getPublicKey()`
 * @return {string}
 */
proto.zitadel.user.v2.AddKeyRequest.prototype.getPublicKey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPublicKey()));
};


/**
 * optional bytes public_key = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPublicKey()`
 * @return {!Uint8Array}
 */
proto.zitadel.user.v2.AddKeyRequest.prototype.getPublicKey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPublicKey()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.zitadel.user.v2.AddKeyRequest} returns this
 */
proto.zitadel.user.v2.AddKeyRequest.prototype.setPublicKey = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
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
proto.zitadel.user.v2.AddKeyResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.AddKeyResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.AddKeyResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.AddKeyResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
creationDate: (f = msg.getCreationDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
keyId: jspb.Message.getFieldWithDefault(msg, 2, ""),
keyContent: msg.getKeyContent_asB64()
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
 * @return {!proto.zitadel.user.v2.AddKeyResponse}
 */
proto.zitadel.user.v2.AddKeyResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.AddKeyResponse;
  return proto.zitadel.user.v2.AddKeyResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.AddKeyResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.AddKeyResponse}
 */
proto.zitadel.user.v2.AddKeyResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setKeyId(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setKeyContent(value);
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
proto.zitadel.user.v2.AddKeyResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.AddKeyResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.AddKeyResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.AddKeyResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCreationDate();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getKeyId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getKeyContent_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
};


/**
 * optional google.protobuf.Timestamp creation_date = 1;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.zitadel.user.v2.AddKeyResponse.prototype.getCreationDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.zitadel.user.v2.AddKeyResponse} returns this
*/
proto.zitadel.user.v2.AddKeyResponse.prototype.setCreationDate = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2.AddKeyResponse} returns this
 */
proto.zitadel.user.v2.AddKeyResponse.prototype.clearCreationDate = function() {
  return this.setCreationDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.AddKeyResponse.prototype.hasCreationDate = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string key_id = 2;
 * @return {string}
 */
proto.zitadel.user.v2.AddKeyResponse.prototype.getKeyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2.AddKeyResponse} returns this
 */
proto.zitadel.user.v2.AddKeyResponse.prototype.setKeyId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bytes key_content = 3;
 * @return {!(string|Uint8Array)}
 */
proto.zitadel.user.v2.AddKeyResponse.prototype.getKeyContent = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes key_content = 3;
 * This is a type-conversion wrapper around `getKeyContent()`
 * @return {string}
 */
proto.zitadel.user.v2.AddKeyResponse.prototype.getKeyContent_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getKeyContent()));
};


/**
 * optional bytes key_content = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getKeyContent()`
 * @return {!Uint8Array}
 */
proto.zitadel.user.v2.AddKeyResponse.prototype.getKeyContent_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getKeyContent()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.zitadel.user.v2.AddKeyResponse} returns this
 */
proto.zitadel.user.v2.AddKeyResponse.prototype.setKeyContent = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
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
proto.zitadel.user.v2.RemoveKeyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.RemoveKeyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.RemoveKeyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.RemoveKeyRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
userId: jspb.Message.getFieldWithDefault(msg, 1, ""),
keyId: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.zitadel.user.v2.RemoveKeyRequest}
 */
proto.zitadel.user.v2.RemoveKeyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.RemoveKeyRequest;
  return proto.zitadel.user.v2.RemoveKeyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.RemoveKeyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.RemoveKeyRequest}
 */
proto.zitadel.user.v2.RemoveKeyRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setKeyId(value);
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
proto.zitadel.user.v2.RemoveKeyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.RemoveKeyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.RemoveKeyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.RemoveKeyRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getKeyId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.zitadel.user.v2.RemoveKeyRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2.RemoveKeyRequest} returns this
 */
proto.zitadel.user.v2.RemoveKeyRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string key_id = 2;
 * @return {string}
 */
proto.zitadel.user.v2.RemoveKeyRequest.prototype.getKeyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2.RemoveKeyRequest} returns this
 */
proto.zitadel.user.v2.RemoveKeyRequest.prototype.setKeyId = function(value) {
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
proto.zitadel.user.v2.RemoveKeyResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.RemoveKeyResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.RemoveKeyResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.RemoveKeyResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.user.v2.RemoveKeyResponse}
 */
proto.zitadel.user.v2.RemoveKeyResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.RemoveKeyResponse;
  return proto.zitadel.user.v2.RemoveKeyResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.RemoveKeyResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.RemoveKeyResponse}
 */
proto.zitadel.user.v2.RemoveKeyResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.user.v2.RemoveKeyResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.RemoveKeyResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.RemoveKeyResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.RemoveKeyResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.user.v2.RemoveKeyResponse.prototype.getDeletionDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.zitadel.user.v2.RemoveKeyResponse} returns this
*/
proto.zitadel.user.v2.RemoveKeyResponse.prototype.setDeletionDate = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2.RemoveKeyResponse} returns this
 */
proto.zitadel.user.v2.RemoveKeyResponse.prototype.clearDeletionDate = function() {
  return this.setDeletionDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.RemoveKeyResponse.prototype.hasDeletionDate = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.user.v2.ListKeysRequest.repeatedFields_ = [3];



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
proto.zitadel.user.v2.ListKeysRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.ListKeysRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.ListKeysRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.ListKeysRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
pagination: (f = msg.getPagination()) && zitadel_filter_v2_filter_pb.PaginationRequest.toObject(includeInstance, f),
sortingColumn: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
filtersList: jspb.Message.toObjectList(msg.getFiltersList(),
    zitadel_user_v2_key_pb.KeysSearchFilter.toObject, includeInstance)
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
 * @return {!proto.zitadel.user.v2.ListKeysRequest}
 */
proto.zitadel.user.v2.ListKeysRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.ListKeysRequest;
  return proto.zitadel.user.v2.ListKeysRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.ListKeysRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.ListKeysRequest}
 */
proto.zitadel.user.v2.ListKeysRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_filter_v2_filter_pb.PaginationRequest;
      reader.readMessage(value,zitadel_filter_v2_filter_pb.PaginationRequest.deserializeBinaryFromReader);
      msg.setPagination(value);
      break;
    case 2:
      var value = /** @type {!proto.zitadel.user.v2.KeyFieldName} */ (reader.readEnum());
      msg.setSortingColumn(value);
      break;
    case 3:
      var value = new zitadel_user_v2_key_pb.KeysSearchFilter;
      reader.readMessage(value,zitadel_user_v2_key_pb.KeysSearchFilter.deserializeBinaryFromReader);
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
proto.zitadel.user.v2.ListKeysRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.ListKeysRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.ListKeysRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.ListKeysRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_filter_v2_filter_pb.PaginationRequest.serializeBinaryToWriter
    );
  }
  f = /** @type {!proto.zitadel.user.v2.KeyFieldName} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getFiltersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      zitadel_user_v2_key_pb.KeysSearchFilter.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.filter.v2.PaginationRequest pagination = 1;
 * @return {?proto.zitadel.filter.v2.PaginationRequest}
 */
proto.zitadel.user.v2.ListKeysRequest.prototype.getPagination = function() {
  return /** @type{?proto.zitadel.filter.v2.PaginationRequest} */ (
    jspb.Message.getWrapperField(this, zitadel_filter_v2_filter_pb.PaginationRequest, 1));
};


/**
 * @param {?proto.zitadel.filter.v2.PaginationRequest|undefined} value
 * @return {!proto.zitadel.user.v2.ListKeysRequest} returns this
*/
proto.zitadel.user.v2.ListKeysRequest.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2.ListKeysRequest} returns this
 */
proto.zitadel.user.v2.ListKeysRequest.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.ListKeysRequest.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional KeyFieldName sorting_column = 2;
 * @return {!proto.zitadel.user.v2.KeyFieldName}
 */
proto.zitadel.user.v2.ListKeysRequest.prototype.getSortingColumn = function() {
  return /** @type {!proto.zitadel.user.v2.KeyFieldName} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.zitadel.user.v2.KeyFieldName} value
 * @return {!proto.zitadel.user.v2.ListKeysRequest} returns this
 */
proto.zitadel.user.v2.ListKeysRequest.prototype.setSortingColumn = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.user.v2.ListKeysRequest} returns this
 */
proto.zitadel.user.v2.ListKeysRequest.prototype.clearSortingColumn = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.ListKeysRequest.prototype.hasSortingColumn = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated KeysSearchFilter filters = 3;
 * @return {!Array<!proto.zitadel.user.v2.KeysSearchFilter>}
 */
proto.zitadel.user.v2.ListKeysRequest.prototype.getFiltersList = function() {
  return /** @type{!Array<!proto.zitadel.user.v2.KeysSearchFilter>} */ (
    jspb.Message.getRepeatedWrapperField(this, zitadel_user_v2_key_pb.KeysSearchFilter, 3));
};


/**
 * @param {!Array<!proto.zitadel.user.v2.KeysSearchFilter>} value
 * @return {!proto.zitadel.user.v2.ListKeysRequest} returns this
*/
proto.zitadel.user.v2.ListKeysRequest.prototype.setFiltersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.zitadel.user.v2.KeysSearchFilter=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zitadel.user.v2.KeysSearchFilter}
 */
proto.zitadel.user.v2.ListKeysRequest.prototype.addFilters = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.zitadel.user.v2.KeysSearchFilter, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.user.v2.ListKeysRequest} returns this
 */
proto.zitadel.user.v2.ListKeysRequest.prototype.clearFiltersList = function() {
  return this.setFiltersList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.user.v2.ListKeysResponse.repeatedFields_ = [2];



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
proto.zitadel.user.v2.ListKeysResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.ListKeysResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.ListKeysResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.ListKeysResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
pagination: (f = msg.getPagination()) && zitadel_filter_v2_filter_pb.PaginationResponse.toObject(includeInstance, f),
resultList: jspb.Message.toObjectList(msg.getResultList(),
    zitadel_user_v2_key_pb.Key.toObject, includeInstance)
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
 * @return {!proto.zitadel.user.v2.ListKeysResponse}
 */
proto.zitadel.user.v2.ListKeysResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.ListKeysResponse;
  return proto.zitadel.user.v2.ListKeysResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.ListKeysResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.ListKeysResponse}
 */
proto.zitadel.user.v2.ListKeysResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new zitadel_user_v2_key_pb.Key;
      reader.readMessage(value,zitadel_user_v2_key_pb.Key.deserializeBinaryFromReader);
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
proto.zitadel.user.v2.ListKeysResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.ListKeysResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.ListKeysResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.ListKeysResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_filter_v2_filter_pb.PaginationResponse.serializeBinaryToWriter
    );
  }
  f = message.getResultList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      zitadel_user_v2_key_pb.Key.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.filter.v2.PaginationResponse pagination = 1;
 * @return {?proto.zitadel.filter.v2.PaginationResponse}
 */
proto.zitadel.user.v2.ListKeysResponse.prototype.getPagination = function() {
  return /** @type{?proto.zitadel.filter.v2.PaginationResponse} */ (
    jspb.Message.getWrapperField(this, zitadel_filter_v2_filter_pb.PaginationResponse, 1));
};


/**
 * @param {?proto.zitadel.filter.v2.PaginationResponse|undefined} value
 * @return {!proto.zitadel.user.v2.ListKeysResponse} returns this
*/
proto.zitadel.user.v2.ListKeysResponse.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2.ListKeysResponse} returns this
 */
proto.zitadel.user.v2.ListKeysResponse.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.ListKeysResponse.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Key result = 2;
 * @return {!Array<!proto.zitadel.user.v2.Key>}
 */
proto.zitadel.user.v2.ListKeysResponse.prototype.getResultList = function() {
  return /** @type{!Array<!proto.zitadel.user.v2.Key>} */ (
    jspb.Message.getRepeatedWrapperField(this, zitadel_user_v2_key_pb.Key, 2));
};


/**
 * @param {!Array<!proto.zitadel.user.v2.Key>} value
 * @return {!proto.zitadel.user.v2.ListKeysResponse} returns this
*/
proto.zitadel.user.v2.ListKeysResponse.prototype.setResultList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.zitadel.user.v2.Key=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zitadel.user.v2.Key}
 */
proto.zitadel.user.v2.ListKeysResponse.prototype.addResult = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.zitadel.user.v2.Key, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.user.v2.ListKeysResponse} returns this
 */
proto.zitadel.user.v2.ListKeysResponse.prototype.clearResultList = function() {
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
proto.zitadel.user.v2.AddPersonalAccessTokenRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.AddPersonalAccessTokenRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.AddPersonalAccessTokenRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.AddPersonalAccessTokenRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
userId: jspb.Message.getFieldWithDefault(msg, 1, ""),
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
 * @return {!proto.zitadel.user.v2.AddPersonalAccessTokenRequest}
 */
proto.zitadel.user.v2.AddPersonalAccessTokenRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.AddPersonalAccessTokenRequest;
  return proto.zitadel.user.v2.AddPersonalAccessTokenRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.AddPersonalAccessTokenRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.AddPersonalAccessTokenRequest}
 */
proto.zitadel.user.v2.AddPersonalAccessTokenRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.user.v2.AddPersonalAccessTokenRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.AddPersonalAccessTokenRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.AddPersonalAccessTokenRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.AddPersonalAccessTokenRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
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
 * optional string user_id = 1;
 * @return {string}
 */
proto.zitadel.user.v2.AddPersonalAccessTokenRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2.AddPersonalAccessTokenRequest} returns this
 */
proto.zitadel.user.v2.AddPersonalAccessTokenRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp expiration_date = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.zitadel.user.v2.AddPersonalAccessTokenRequest.prototype.getExpirationDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.zitadel.user.v2.AddPersonalAccessTokenRequest} returns this
*/
proto.zitadel.user.v2.AddPersonalAccessTokenRequest.prototype.setExpirationDate = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2.AddPersonalAccessTokenRequest} returns this
 */
proto.zitadel.user.v2.AddPersonalAccessTokenRequest.prototype.clearExpirationDate = function() {
  return this.setExpirationDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.AddPersonalAccessTokenRequest.prototype.hasExpirationDate = function() {
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
proto.zitadel.user.v2.AddPersonalAccessTokenResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.AddPersonalAccessTokenResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.AddPersonalAccessTokenResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.AddPersonalAccessTokenResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
creationDate: (f = msg.getCreationDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
tokenId: jspb.Message.getFieldWithDefault(msg, 2, ""),
token: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.zitadel.user.v2.AddPersonalAccessTokenResponse}
 */
proto.zitadel.user.v2.AddPersonalAccessTokenResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.AddPersonalAccessTokenResponse;
  return proto.zitadel.user.v2.AddPersonalAccessTokenResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.AddPersonalAccessTokenResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.AddPersonalAccessTokenResponse}
 */
proto.zitadel.user.v2.AddPersonalAccessTokenResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setTokenId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
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
proto.zitadel.user.v2.AddPersonalAccessTokenResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.AddPersonalAccessTokenResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.AddPersonalAccessTokenResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.AddPersonalAccessTokenResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCreationDate();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getTokenId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional google.protobuf.Timestamp creation_date = 1;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.zitadel.user.v2.AddPersonalAccessTokenResponse.prototype.getCreationDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.zitadel.user.v2.AddPersonalAccessTokenResponse} returns this
*/
proto.zitadel.user.v2.AddPersonalAccessTokenResponse.prototype.setCreationDate = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2.AddPersonalAccessTokenResponse} returns this
 */
proto.zitadel.user.v2.AddPersonalAccessTokenResponse.prototype.clearCreationDate = function() {
  return this.setCreationDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.AddPersonalAccessTokenResponse.prototype.hasCreationDate = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string token_id = 2;
 * @return {string}
 */
proto.zitadel.user.v2.AddPersonalAccessTokenResponse.prototype.getTokenId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2.AddPersonalAccessTokenResponse} returns this
 */
proto.zitadel.user.v2.AddPersonalAccessTokenResponse.prototype.setTokenId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string token = 3;
 * @return {string}
 */
proto.zitadel.user.v2.AddPersonalAccessTokenResponse.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2.AddPersonalAccessTokenResponse} returns this
 */
proto.zitadel.user.v2.AddPersonalAccessTokenResponse.prototype.setToken = function(value) {
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
proto.zitadel.user.v2.RemovePersonalAccessTokenRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.RemovePersonalAccessTokenRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.RemovePersonalAccessTokenRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.RemovePersonalAccessTokenRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
userId: jspb.Message.getFieldWithDefault(msg, 1, ""),
tokenId: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.zitadel.user.v2.RemovePersonalAccessTokenRequest}
 */
proto.zitadel.user.v2.RemovePersonalAccessTokenRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.RemovePersonalAccessTokenRequest;
  return proto.zitadel.user.v2.RemovePersonalAccessTokenRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.RemovePersonalAccessTokenRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.RemovePersonalAccessTokenRequest}
 */
proto.zitadel.user.v2.RemovePersonalAccessTokenRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.user.v2.RemovePersonalAccessTokenRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.RemovePersonalAccessTokenRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.RemovePersonalAccessTokenRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.RemovePersonalAccessTokenRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTokenId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.zitadel.user.v2.RemovePersonalAccessTokenRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2.RemovePersonalAccessTokenRequest} returns this
 */
proto.zitadel.user.v2.RemovePersonalAccessTokenRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string token_id = 2;
 * @return {string}
 */
proto.zitadel.user.v2.RemovePersonalAccessTokenRequest.prototype.getTokenId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2.RemovePersonalAccessTokenRequest} returns this
 */
proto.zitadel.user.v2.RemovePersonalAccessTokenRequest.prototype.setTokenId = function(value) {
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
proto.zitadel.user.v2.RemovePersonalAccessTokenResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.RemovePersonalAccessTokenResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.RemovePersonalAccessTokenResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.RemovePersonalAccessTokenResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.user.v2.RemovePersonalAccessTokenResponse}
 */
proto.zitadel.user.v2.RemovePersonalAccessTokenResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.RemovePersonalAccessTokenResponse;
  return proto.zitadel.user.v2.RemovePersonalAccessTokenResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.RemovePersonalAccessTokenResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.RemovePersonalAccessTokenResponse}
 */
proto.zitadel.user.v2.RemovePersonalAccessTokenResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.user.v2.RemovePersonalAccessTokenResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.RemovePersonalAccessTokenResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.RemovePersonalAccessTokenResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.RemovePersonalAccessTokenResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.user.v2.RemovePersonalAccessTokenResponse.prototype.getDeletionDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.zitadel.user.v2.RemovePersonalAccessTokenResponse} returns this
*/
proto.zitadel.user.v2.RemovePersonalAccessTokenResponse.prototype.setDeletionDate = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2.RemovePersonalAccessTokenResponse} returns this
 */
proto.zitadel.user.v2.RemovePersonalAccessTokenResponse.prototype.clearDeletionDate = function() {
  return this.setDeletionDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.RemovePersonalAccessTokenResponse.prototype.hasDeletionDate = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.user.v2.ListPersonalAccessTokensRequest.repeatedFields_ = [3];



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
proto.zitadel.user.v2.ListPersonalAccessTokensRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.ListPersonalAccessTokensRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.ListPersonalAccessTokensRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.ListPersonalAccessTokensRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
pagination: (f = msg.getPagination()) && zitadel_filter_v2_filter_pb.PaginationRequest.toObject(includeInstance, f),
sortingColumn: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
filtersList: jspb.Message.toObjectList(msg.getFiltersList(),
    zitadel_user_v2_pat_pb.PersonalAccessTokensSearchFilter.toObject, includeInstance)
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
 * @return {!proto.zitadel.user.v2.ListPersonalAccessTokensRequest}
 */
proto.zitadel.user.v2.ListPersonalAccessTokensRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.ListPersonalAccessTokensRequest;
  return proto.zitadel.user.v2.ListPersonalAccessTokensRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.ListPersonalAccessTokensRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.ListPersonalAccessTokensRequest}
 */
proto.zitadel.user.v2.ListPersonalAccessTokensRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_filter_v2_filter_pb.PaginationRequest;
      reader.readMessage(value,zitadel_filter_v2_filter_pb.PaginationRequest.deserializeBinaryFromReader);
      msg.setPagination(value);
      break;
    case 2:
      var value = /** @type {!proto.zitadel.user.v2.PersonalAccessTokenFieldName} */ (reader.readEnum());
      msg.setSortingColumn(value);
      break;
    case 3:
      var value = new zitadel_user_v2_pat_pb.PersonalAccessTokensSearchFilter;
      reader.readMessage(value,zitadel_user_v2_pat_pb.PersonalAccessTokensSearchFilter.deserializeBinaryFromReader);
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
proto.zitadel.user.v2.ListPersonalAccessTokensRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.ListPersonalAccessTokensRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.ListPersonalAccessTokensRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.ListPersonalAccessTokensRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_filter_v2_filter_pb.PaginationRequest.serializeBinaryToWriter
    );
  }
  f = /** @type {!proto.zitadel.user.v2.PersonalAccessTokenFieldName} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getFiltersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      zitadel_user_v2_pat_pb.PersonalAccessTokensSearchFilter.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.filter.v2.PaginationRequest pagination = 1;
 * @return {?proto.zitadel.filter.v2.PaginationRequest}
 */
proto.zitadel.user.v2.ListPersonalAccessTokensRequest.prototype.getPagination = function() {
  return /** @type{?proto.zitadel.filter.v2.PaginationRequest} */ (
    jspb.Message.getWrapperField(this, zitadel_filter_v2_filter_pb.PaginationRequest, 1));
};


/**
 * @param {?proto.zitadel.filter.v2.PaginationRequest|undefined} value
 * @return {!proto.zitadel.user.v2.ListPersonalAccessTokensRequest} returns this
*/
proto.zitadel.user.v2.ListPersonalAccessTokensRequest.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2.ListPersonalAccessTokensRequest} returns this
 */
proto.zitadel.user.v2.ListPersonalAccessTokensRequest.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.ListPersonalAccessTokensRequest.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional PersonalAccessTokenFieldName sorting_column = 2;
 * @return {!proto.zitadel.user.v2.PersonalAccessTokenFieldName}
 */
proto.zitadel.user.v2.ListPersonalAccessTokensRequest.prototype.getSortingColumn = function() {
  return /** @type {!proto.zitadel.user.v2.PersonalAccessTokenFieldName} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.zitadel.user.v2.PersonalAccessTokenFieldName} value
 * @return {!proto.zitadel.user.v2.ListPersonalAccessTokensRequest} returns this
 */
proto.zitadel.user.v2.ListPersonalAccessTokensRequest.prototype.setSortingColumn = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.user.v2.ListPersonalAccessTokensRequest} returns this
 */
proto.zitadel.user.v2.ListPersonalAccessTokensRequest.prototype.clearSortingColumn = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.ListPersonalAccessTokensRequest.prototype.hasSortingColumn = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated PersonalAccessTokensSearchFilter filters = 3;
 * @return {!Array<!proto.zitadel.user.v2.PersonalAccessTokensSearchFilter>}
 */
proto.zitadel.user.v2.ListPersonalAccessTokensRequest.prototype.getFiltersList = function() {
  return /** @type{!Array<!proto.zitadel.user.v2.PersonalAccessTokensSearchFilter>} */ (
    jspb.Message.getRepeatedWrapperField(this, zitadel_user_v2_pat_pb.PersonalAccessTokensSearchFilter, 3));
};


/**
 * @param {!Array<!proto.zitadel.user.v2.PersonalAccessTokensSearchFilter>} value
 * @return {!proto.zitadel.user.v2.ListPersonalAccessTokensRequest} returns this
*/
proto.zitadel.user.v2.ListPersonalAccessTokensRequest.prototype.setFiltersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.zitadel.user.v2.PersonalAccessTokensSearchFilter=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zitadel.user.v2.PersonalAccessTokensSearchFilter}
 */
proto.zitadel.user.v2.ListPersonalAccessTokensRequest.prototype.addFilters = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.zitadel.user.v2.PersonalAccessTokensSearchFilter, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.user.v2.ListPersonalAccessTokensRequest} returns this
 */
proto.zitadel.user.v2.ListPersonalAccessTokensRequest.prototype.clearFiltersList = function() {
  return this.setFiltersList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.user.v2.ListPersonalAccessTokensResponse.repeatedFields_ = [2];



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
proto.zitadel.user.v2.ListPersonalAccessTokensResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.ListPersonalAccessTokensResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.ListPersonalAccessTokensResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.ListPersonalAccessTokensResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
pagination: (f = msg.getPagination()) && zitadel_filter_v2_filter_pb.PaginationResponse.toObject(includeInstance, f),
resultList: jspb.Message.toObjectList(msg.getResultList(),
    zitadel_user_v2_pat_pb.PersonalAccessToken.toObject, includeInstance)
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
 * @return {!proto.zitadel.user.v2.ListPersonalAccessTokensResponse}
 */
proto.zitadel.user.v2.ListPersonalAccessTokensResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.ListPersonalAccessTokensResponse;
  return proto.zitadel.user.v2.ListPersonalAccessTokensResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.ListPersonalAccessTokensResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.ListPersonalAccessTokensResponse}
 */
proto.zitadel.user.v2.ListPersonalAccessTokensResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new zitadel_user_v2_pat_pb.PersonalAccessToken;
      reader.readMessage(value,zitadel_user_v2_pat_pb.PersonalAccessToken.deserializeBinaryFromReader);
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
proto.zitadel.user.v2.ListPersonalAccessTokensResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.ListPersonalAccessTokensResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.ListPersonalAccessTokensResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.ListPersonalAccessTokensResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_filter_v2_filter_pb.PaginationResponse.serializeBinaryToWriter
    );
  }
  f = message.getResultList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      zitadel_user_v2_pat_pb.PersonalAccessToken.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.filter.v2.PaginationResponse pagination = 1;
 * @return {?proto.zitadel.filter.v2.PaginationResponse}
 */
proto.zitadel.user.v2.ListPersonalAccessTokensResponse.prototype.getPagination = function() {
  return /** @type{?proto.zitadel.filter.v2.PaginationResponse} */ (
    jspb.Message.getWrapperField(this, zitadel_filter_v2_filter_pb.PaginationResponse, 1));
};


/**
 * @param {?proto.zitadel.filter.v2.PaginationResponse|undefined} value
 * @return {!proto.zitadel.user.v2.ListPersonalAccessTokensResponse} returns this
*/
proto.zitadel.user.v2.ListPersonalAccessTokensResponse.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2.ListPersonalAccessTokensResponse} returns this
 */
proto.zitadel.user.v2.ListPersonalAccessTokensResponse.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.ListPersonalAccessTokensResponse.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated PersonalAccessToken result = 2;
 * @return {!Array<!proto.zitadel.user.v2.PersonalAccessToken>}
 */
proto.zitadel.user.v2.ListPersonalAccessTokensResponse.prototype.getResultList = function() {
  return /** @type{!Array<!proto.zitadel.user.v2.PersonalAccessToken>} */ (
    jspb.Message.getRepeatedWrapperField(this, zitadel_user_v2_pat_pb.PersonalAccessToken, 2));
};


/**
 * @param {!Array<!proto.zitadel.user.v2.PersonalAccessToken>} value
 * @return {!proto.zitadel.user.v2.ListPersonalAccessTokensResponse} returns this
*/
proto.zitadel.user.v2.ListPersonalAccessTokensResponse.prototype.setResultList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.zitadel.user.v2.PersonalAccessToken=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zitadel.user.v2.PersonalAccessToken}
 */
proto.zitadel.user.v2.ListPersonalAccessTokensResponse.prototype.addResult = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.zitadel.user.v2.PersonalAccessToken, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.user.v2.ListPersonalAccessTokensResponse} returns this
 */
proto.zitadel.user.v2.ListPersonalAccessTokensResponse.prototype.clearResultList = function() {
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
proto.zitadel.user.v2.Metadata.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.Metadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.Metadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.Metadata.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.user.v2.Metadata}
 */
proto.zitadel.user.v2.Metadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.Metadata;
  return proto.zitadel.user.v2.Metadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.Metadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.Metadata}
 */
proto.zitadel.user.v2.Metadata.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.user.v2.Metadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.Metadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.Metadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.Metadata.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.user.v2.Metadata.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2.Metadata} returns this
 */
proto.zitadel.user.v2.Metadata.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bytes value = 2;
 * @return {!(string|Uint8Array)}
 */
proto.zitadel.user.v2.Metadata.prototype.getValue = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes value = 2;
 * This is a type-conversion wrapper around `getValue()`
 * @return {string}
 */
proto.zitadel.user.v2.Metadata.prototype.getValue_asB64 = function() {
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
proto.zitadel.user.v2.Metadata.prototype.getValue_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getValue()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.zitadel.user.v2.Metadata} returns this
 */
proto.zitadel.user.v2.Metadata.prototype.setValue = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.user.v2.SetUserMetadataRequest.repeatedFields_ = [2];



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
proto.zitadel.user.v2.SetUserMetadataRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.SetUserMetadataRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.SetUserMetadataRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.SetUserMetadataRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
userId: jspb.Message.getFieldWithDefault(msg, 1, ""),
metadataList: jspb.Message.toObjectList(msg.getMetadataList(),
    proto.zitadel.user.v2.Metadata.toObject, includeInstance)
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
 * @return {!proto.zitadel.user.v2.SetUserMetadataRequest}
 */
proto.zitadel.user.v2.SetUserMetadataRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.SetUserMetadataRequest;
  return proto.zitadel.user.v2.SetUserMetadataRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.SetUserMetadataRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.SetUserMetadataRequest}
 */
proto.zitadel.user.v2.SetUserMetadataRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.zitadel.user.v2.Metadata;
      reader.readMessage(value,proto.zitadel.user.v2.Metadata.deserializeBinaryFromReader);
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
proto.zitadel.user.v2.SetUserMetadataRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.SetUserMetadataRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.SetUserMetadataRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.SetUserMetadataRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
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
      proto.zitadel.user.v2.Metadata.serializeBinaryToWriter
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.zitadel.user.v2.SetUserMetadataRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2.SetUserMetadataRequest} returns this
 */
proto.zitadel.user.v2.SetUserMetadataRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated Metadata metadata = 2;
 * @return {!Array<!proto.zitadel.user.v2.Metadata>}
 */
proto.zitadel.user.v2.SetUserMetadataRequest.prototype.getMetadataList = function() {
  return /** @type{!Array<!proto.zitadel.user.v2.Metadata>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.zitadel.user.v2.Metadata, 2));
};


/**
 * @param {!Array<!proto.zitadel.user.v2.Metadata>} value
 * @return {!proto.zitadel.user.v2.SetUserMetadataRequest} returns this
*/
proto.zitadel.user.v2.SetUserMetadataRequest.prototype.setMetadataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.zitadel.user.v2.Metadata=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zitadel.user.v2.Metadata}
 */
proto.zitadel.user.v2.SetUserMetadataRequest.prototype.addMetadata = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.zitadel.user.v2.Metadata, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.user.v2.SetUserMetadataRequest} returns this
 */
proto.zitadel.user.v2.SetUserMetadataRequest.prototype.clearMetadataList = function() {
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
proto.zitadel.user.v2.SetUserMetadataResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.SetUserMetadataResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.SetUserMetadataResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.SetUserMetadataResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.user.v2.SetUserMetadataResponse}
 */
proto.zitadel.user.v2.SetUserMetadataResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.SetUserMetadataResponse;
  return proto.zitadel.user.v2.SetUserMetadataResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.SetUserMetadataResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.SetUserMetadataResponse}
 */
proto.zitadel.user.v2.SetUserMetadataResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.user.v2.SetUserMetadataResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.SetUserMetadataResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.SetUserMetadataResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.SetUserMetadataResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.user.v2.SetUserMetadataResponse.prototype.getSetDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.zitadel.user.v2.SetUserMetadataResponse} returns this
*/
proto.zitadel.user.v2.SetUserMetadataResponse.prototype.setSetDate = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2.SetUserMetadataResponse} returns this
 */
proto.zitadel.user.v2.SetUserMetadataResponse.prototype.clearSetDate = function() {
  return this.setSetDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.SetUserMetadataResponse.prototype.hasSetDate = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.user.v2.ListUserMetadataRequest.repeatedFields_ = [3];



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
proto.zitadel.user.v2.ListUserMetadataRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.ListUserMetadataRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.ListUserMetadataRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.ListUserMetadataRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
userId: jspb.Message.getFieldWithDefault(msg, 1, ""),
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
 * @return {!proto.zitadel.user.v2.ListUserMetadataRequest}
 */
proto.zitadel.user.v2.ListUserMetadataRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.ListUserMetadataRequest;
  return proto.zitadel.user.v2.ListUserMetadataRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.ListUserMetadataRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.ListUserMetadataRequest}
 */
proto.zitadel.user.v2.ListUserMetadataRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.user.v2.ListUserMetadataRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.ListUserMetadataRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.ListUserMetadataRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.ListUserMetadataRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
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
 * optional string user_id = 1;
 * @return {string}
 */
proto.zitadel.user.v2.ListUserMetadataRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2.ListUserMetadataRequest} returns this
 */
proto.zitadel.user.v2.ListUserMetadataRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional zitadel.filter.v2.PaginationRequest pagination = 2;
 * @return {?proto.zitadel.filter.v2.PaginationRequest}
 */
proto.zitadel.user.v2.ListUserMetadataRequest.prototype.getPagination = function() {
  return /** @type{?proto.zitadel.filter.v2.PaginationRequest} */ (
    jspb.Message.getWrapperField(this, zitadel_filter_v2_filter_pb.PaginationRequest, 2));
};


/**
 * @param {?proto.zitadel.filter.v2.PaginationRequest|undefined} value
 * @return {!proto.zitadel.user.v2.ListUserMetadataRequest} returns this
*/
proto.zitadel.user.v2.ListUserMetadataRequest.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2.ListUserMetadataRequest} returns this
 */
proto.zitadel.user.v2.ListUserMetadataRequest.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.ListUserMetadataRequest.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated zitadel.metadata.v2.MetadataSearchFilter filters = 3;
 * @return {!Array<!proto.zitadel.metadata.v2.MetadataSearchFilter>}
 */
proto.zitadel.user.v2.ListUserMetadataRequest.prototype.getFiltersList = function() {
  return /** @type{!Array<!proto.zitadel.metadata.v2.MetadataSearchFilter>} */ (
    jspb.Message.getRepeatedWrapperField(this, zitadel_metadata_v2_metadata_pb.MetadataSearchFilter, 3));
};


/**
 * @param {!Array<!proto.zitadel.metadata.v2.MetadataSearchFilter>} value
 * @return {!proto.zitadel.user.v2.ListUserMetadataRequest} returns this
*/
proto.zitadel.user.v2.ListUserMetadataRequest.prototype.setFiltersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.zitadel.metadata.v2.MetadataSearchFilter=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zitadel.metadata.v2.MetadataSearchFilter}
 */
proto.zitadel.user.v2.ListUserMetadataRequest.prototype.addFilters = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.zitadel.metadata.v2.MetadataSearchFilter, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.user.v2.ListUserMetadataRequest} returns this
 */
proto.zitadel.user.v2.ListUserMetadataRequest.prototype.clearFiltersList = function() {
  return this.setFiltersList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.user.v2.ListUserMetadataResponse.repeatedFields_ = [2];



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
proto.zitadel.user.v2.ListUserMetadataResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.ListUserMetadataResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.ListUserMetadataResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.ListUserMetadataResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.user.v2.ListUserMetadataResponse}
 */
proto.zitadel.user.v2.ListUserMetadataResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.ListUserMetadataResponse;
  return proto.zitadel.user.v2.ListUserMetadataResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.ListUserMetadataResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.ListUserMetadataResponse}
 */
proto.zitadel.user.v2.ListUserMetadataResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.user.v2.ListUserMetadataResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.ListUserMetadataResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.ListUserMetadataResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.ListUserMetadataResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.user.v2.ListUserMetadataResponse.prototype.getPagination = function() {
  return /** @type{?proto.zitadel.filter.v2.PaginationResponse} */ (
    jspb.Message.getWrapperField(this, zitadel_filter_v2_filter_pb.PaginationResponse, 1));
};


/**
 * @param {?proto.zitadel.filter.v2.PaginationResponse|undefined} value
 * @return {!proto.zitadel.user.v2.ListUserMetadataResponse} returns this
*/
proto.zitadel.user.v2.ListUserMetadataResponse.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2.ListUserMetadataResponse} returns this
 */
proto.zitadel.user.v2.ListUserMetadataResponse.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.ListUserMetadataResponse.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated zitadel.metadata.v2.Metadata metadata = 2;
 * @return {!Array<!proto.zitadel.metadata.v2.Metadata>}
 */
proto.zitadel.user.v2.ListUserMetadataResponse.prototype.getMetadataList = function() {
  return /** @type{!Array<!proto.zitadel.metadata.v2.Metadata>} */ (
    jspb.Message.getRepeatedWrapperField(this, zitadel_metadata_v2_metadata_pb.Metadata, 2));
};


/**
 * @param {!Array<!proto.zitadel.metadata.v2.Metadata>} value
 * @return {!proto.zitadel.user.v2.ListUserMetadataResponse} returns this
*/
proto.zitadel.user.v2.ListUserMetadataResponse.prototype.setMetadataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.zitadel.metadata.v2.Metadata=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zitadel.metadata.v2.Metadata}
 */
proto.zitadel.user.v2.ListUserMetadataResponse.prototype.addMetadata = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.zitadel.metadata.v2.Metadata, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.user.v2.ListUserMetadataResponse} returns this
 */
proto.zitadel.user.v2.ListUserMetadataResponse.prototype.clearMetadataList = function() {
  return this.setMetadataList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.user.v2.DeleteUserMetadataRequest.repeatedFields_ = [2];



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
proto.zitadel.user.v2.DeleteUserMetadataRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.DeleteUserMetadataRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.DeleteUserMetadataRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.DeleteUserMetadataRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
userId: jspb.Message.getFieldWithDefault(msg, 1, ""),
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
 * @return {!proto.zitadel.user.v2.DeleteUserMetadataRequest}
 */
proto.zitadel.user.v2.DeleteUserMetadataRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.DeleteUserMetadataRequest;
  return proto.zitadel.user.v2.DeleteUserMetadataRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.DeleteUserMetadataRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.DeleteUserMetadataRequest}
 */
proto.zitadel.user.v2.DeleteUserMetadataRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.user.v2.DeleteUserMetadataRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.DeleteUserMetadataRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.DeleteUserMetadataRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.DeleteUserMetadataRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
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
 * optional string user_id = 1;
 * @return {string}
 */
proto.zitadel.user.v2.DeleteUserMetadataRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v2.DeleteUserMetadataRequest} returns this
 */
proto.zitadel.user.v2.DeleteUserMetadataRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string keys = 2;
 * @return {!Array<string>}
 */
proto.zitadel.user.v2.DeleteUserMetadataRequest.prototype.getKeysList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.zitadel.user.v2.DeleteUserMetadataRequest} returns this
 */
proto.zitadel.user.v2.DeleteUserMetadataRequest.prototype.setKeysList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.zitadel.user.v2.DeleteUserMetadataRequest} returns this
 */
proto.zitadel.user.v2.DeleteUserMetadataRequest.prototype.addKeys = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.user.v2.DeleteUserMetadataRequest} returns this
 */
proto.zitadel.user.v2.DeleteUserMetadataRequest.prototype.clearKeysList = function() {
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
proto.zitadel.user.v2.DeleteUserMetadataResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v2.DeleteUserMetadataResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v2.DeleteUserMetadataResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.DeleteUserMetadataResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.user.v2.DeleteUserMetadataResponse}
 */
proto.zitadel.user.v2.DeleteUserMetadataResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v2.DeleteUserMetadataResponse;
  return proto.zitadel.user.v2.DeleteUserMetadataResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v2.DeleteUserMetadataResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v2.DeleteUserMetadataResponse}
 */
proto.zitadel.user.v2.DeleteUserMetadataResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.user.v2.DeleteUserMetadataResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v2.DeleteUserMetadataResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v2.DeleteUserMetadataResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v2.DeleteUserMetadataResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.user.v2.DeleteUserMetadataResponse.prototype.getDeletionDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.zitadel.user.v2.DeleteUserMetadataResponse} returns this
*/
proto.zitadel.user.v2.DeleteUserMetadataResponse.prototype.setDeletionDate = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v2.DeleteUserMetadataResponse} returns this
 */
proto.zitadel.user.v2.DeleteUserMetadataResponse.prototype.clearDeletionDate = function() {
  return this.setDeletionDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v2.DeleteUserMetadataResponse.prototype.hasDeletionDate = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * @enum {number}
 */
proto.zitadel.user.v2.AuthenticationMethodType = {
  AUTHENTICATION_METHOD_TYPE_UNSPECIFIED: 0,
  AUTHENTICATION_METHOD_TYPE_PASSWORD: 1,
  AUTHENTICATION_METHOD_TYPE_PASSKEY: 2,
  AUTHENTICATION_METHOD_TYPE_IDP: 3,
  AUTHENTICATION_METHOD_TYPE_TOTP: 4,
  AUTHENTICATION_METHOD_TYPE_U2F: 5,
  AUTHENTICATION_METHOD_TYPE_OTP_SMS: 6,
  AUTHENTICATION_METHOD_TYPE_OTP_EMAIL: 7,
  AUTHENTICATION_METHOD_TYPE_RECOVERY_CODE: 8
};

/**
 * @enum {number}
 */
proto.zitadel.user.v2.AuthFactors = {
  OTP: 0,
  OTP_SMS: 1,
  OTP_EMAIL: 2,
  U2F: 3
};

goog.object.extend(exports, proto.zitadel.user.v2);
