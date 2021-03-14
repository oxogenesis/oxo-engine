const TxResultCode = {
  'trcPaymentOK': 'trcPaymentOK',
  'trcSubjectProclaimOK': 'trcSubjectProclaimOK',
  'trcSubjectRevokeOK': 'trcSubjectRevokeOK',
  'trcTrustCreateOK': 'trcTrustCreateOK',
  'trcTrustRemoveOK': 'trcTrustRemoveOK',
  'trcOfferCreateOK': 'trcOfferCreateOK',
  'trcOfferCancelOK': 'trcOfferCancelOK',

  // error code should never happen while using offical client
  'trcUnknownError': 'trcUnknownError',

  'trcAccountNotExist': 'trcAccountNotExist',
  // Payment
  'trcPaySelf': 'trcPaySelf',
  'trcSequenceInvalid': 'trcSequenceInvalid',
  // SM: System Media
  'trcSMIssuerInvalid': 'trcSMIssuerInvalid',
  'trcSMBalanceInsufficient': 'trcSMBalanceInsufficient',
  'trcInsufficientToFundAccount': 'trcInsufficientToFundAccount',

  'trcDestISNotTrust': 'trcDestISNotTrust',
  'trcDestISNotExist': 'trcDestISNotExist',
  'trcSendISNotTrust': 'trcSendISNotTrust',
  // IS: Issuer Subject
  'trcISExceedMax': 'trcISExceedMax',
  'trcISBalanceInsufficient': 'trcISBalanceInsufficient',

  // Subject Proclaim
  'trcISEqualSM': 'trcISEqualSM',
  'trcISAlreadyExist': 'trcISAlreadyExist',
  // Subject Revoke
  'trcISNotExist': 'trcISNotExist',
  'trcOweNotZero': 'trcOweNotZero',
  // Trust Create
  'trcTrustSelf': 'trcTrustSelf',
  'trcHolderAlreadyExist': 'trcHolderAlreadyExist',
  // Trust Remove
  'trcHolderNotExist': 'trcHolderNotExist',
  'trcHoldNotZero': 'trcHoldNotZero',
  'trcOfferNotZero': 'trcOfferNotZero',

  // OfferCreate
  'trcPayISNotTrust': 'trcPayISNotTrust',
  'trcGetISNotTrust': 'trcGetISNotTrust',

  // OfferCancel
  'trcOfferNotExist': 'trcOfferNotExist',

  // Genernal
  'trcOwnerBookFull': 'trcOwnerBookFull'
}

module.exports = {
  TxResultCode
}