const Ajv = require('ajv').default
const ajv = new Ajv({ allErrors: true })

const DeclareSchema = {
  "type": "object",
  "properties": {
    "Action": {
      "type": "string",
      "pattern": "^Declare$"
    },
    "Timestamp": {
      "type": "number"
    },
    "PublicKey": {
      "type": "string"
    },
    "Signature": {
      "type": "string"
    }
  },
  "required": [
    "Action",
    "Timestamp",
    "PublicKey",
    "Signature"
  ]
}

const vDeclareSchema = ajv.compile(DeclareSchema)

//Tx schema
const PaymentSchema =
{
  "type": "object",
  "properties": {
    "TxType": {
      "type": "string",
      "pattern": "^Payment$"
    },
    "Sequence": {
      "type": "integer",
      "minimum": 1
    },
    "DestAddress": {
      "type": "string"
    },
    "Issuer": {
      "type": "string"
    },
    "Subject": {
      "type": "string"
    },
    "Amount": {
      "type": "integer"
    },
    "PublicKey": {
      "type": "string"
    },
    "Signature": {
      "type": "string"
    }
  },
  "required": [
    "TxType",
    "Sequence",
    "DestAddress",
    "Issuer",
    "Subject",
    "Amount",
    "PublicKey",
    "Signature"
  ]
}

const SubjectProclaimSchema =
{
  "type": "object",
  "properties": {
    "TxType": {
      "type": "string",
      "pattern": "^SubjectProclaim$"
    },
    "Sequence": {
      "type": "integer",
      "minimum": 1
    },
    "Subject": {
      "type": "string",
      "pattern": "^[A-Z][A-Z0-9]{2,8}$"
    },
    "Rate": {
      "type": "integer",
      "minimum": 1,
      "maximum": 1000000
    },
    "PublicKey": {
      "type": "string"
    },
    "Signature": {
      "type": "string"
    }
  },
  "required": [
    "TxType",
    "Sequence",
    "Subject",
    "Rate",
    "PublicKey",
    "Signature"
  ]
}

const SubjectRevokeSchema =
{
  "type": "object",
  "properties": {
    "TxType": {
      "type": "string",
      "pattern": "^SubjectRevoke$"
    },
    "Sequence": {
      "type": "integer",
      "minimum": 1
    },
    "Subject": {
      "type": "string",
      "pattern": "^[A-Z][A-Z0-9]{2,8}$"
    },
    "PublicKey": {
      "type": "string"
    },
    "Signature": {
      "type": "string"
    }
  },
  "required": [
    "TxType",
    "Sequence",
    "Subject",
    "PublicKey",
    "Signature"
  ]
}

const TrustCreateSchema =
{
  "type": "object",
  "properties": {
    "TxType": {
      "type": "string",
      "pattern": "^TrustCreate$"
    },
    "Sequence": {
      "type": "integer",
      "minimum": 1
    },
    "Issuer": {
      "type": "string"
    },
    "Subject": {
      "type": "string"
    },
    "PublicKey": {
      "type": "string"
    },
    "Signature": {
      "type": "string"
    }
  },
  "required": [
    "TxType",
    "Sequence",
    "Issuer",
    "Subject",
    "PublicKey",
    "Signature"
  ]
}

const TrustRemoveSchema =
{
  "type": "object",
  "properties": {
    "TxType": {
      "type": "string",
      "pattern": "^TrustRemove$"
    },
    "Sequence": {
      "type": "integer",
      "minimum": 1
    },
    "Issuer": {
      "type": "string"
    },
    "Subject": {
      "type": "string"
    },
    "PublicKey": {
      "type": "string"
    },
    "Signature": {
      "type": "string"
    }
  },
  "required": [
    "TxType",
    "Sequence",
    "Issuer",
    "Subject",
    "PublicKey",
    "Signature"
  ]
}

const OfferCreateSchema =
{
  "type": "object",
  "properties": {
    "TxType": {
      "type": "string",
      "pattern": "^OfferCreate$"
    },
    "Sequence": {
      "type": "integer",
      "minimum": 1
    },
    "PayIssuer": {
      "type": "string"
    },
    "PaySubject": {
      "type": "string"
    },
    "PayAmount": {
      "type": "integer"
    },
    "GetIssuer": {
      "type": "string"
    },
    "GetSubject": {
      "type": "string"
    },
    "GetAmount": {
      "type": "integer"
    },
    "PublicKey": {
      "type": "string"
    },
    "Signature": {
      "type": "string"
    }
  },
  "required": [
    "TxType",
    "Sequence",
    "PayIssuer",
    "PaySubject",
    "PayAmount",
    "GetIssuer",
    "GetSubject",
    "GetAmount",
    "PublicKey",
    "Signature"
  ]
}

const OfferCancelSchema =
{
  "type": "object",
  "properties": {
    "TxType": {
      "type": "string",
      "pattern": "^OfferCancel$"
    },
    "Sequence": {
      "type": "integer",
      "minimum": 1
    },
    "OfferSequence": {
      "type": "integer",
      "minimum": 1
    },
    "PublicKey": {
      "type": "string"
    },
    "Signature": {
      "type": "string"
    }
  },
  "required": [
    "TxType",
    "Sequence",
    "OfferSequence",
    "PublicKey",
    "Signature"
  ]
}

const vPaymentSchema = ajv.compile(PaymentSchema)
const vSubjectProclaimSchema = ajv.compile(SubjectProclaimSchema)
const vSubjectRevokeSchema = ajv.compile(SubjectRevokeSchema)
const vTrustCreateSchema = ajv.compile(TrustCreateSchema)
const vTrustRemoveSchema = ajv.compile(TrustRemoveSchema)
const vOfferCreateSchema = ajv.compile(OfferCreateSchema)
const vOfferCancelSchema = ajv.compile(OfferCancelSchema)
//end Tx schema

//Inquire schema
const InquireAccountSchema =
{
  "type": "object",
  "properties": {
    "Inquire": {
      "type": "string",
      "pattern": "^Account$"
    },
    "Address": {
      "type": "string"
    },
    "Timestamp": {
      "type": "number"
    },
    "PublicKey": {
      "type": "string"
    },
    "Signature": {
      "type": "string"
    }
  },
  "required": [
    "Inquire",
    "Address",
    "Timestamp",
    "PublicKey",
    "Signature"
  ]
}

const InquireAccountRootSchema =
{
  "type": "object",
  "properties": {
    "Inquire": {
      "type": "string",
      "pattern": "^AccountRoot$"
    },
    "Address": {
      "type": "string"
    },
    "Timestamp": {
      "type": "number"
    },
    "PublicKey": {
      "type": "string"
    },
    "Signature": {
      "type": "string"
    }
  },
  "required": [
    "Inquire",
    "Address",
    "Timestamp",
    "PublicKey",
    "Signature"
  ]
}

const InquireIssuerSubjectSchema =
{
  "type": "object",
  "properties": {
    "Inquire": {
      "type": "string",
      "pattern": "^IssuerSubject$"
    },
    "Issuer": {
      "type": "string"
    },
    "Subject": {
      "type": "string"
    },
    "Timestamp": {
      "type": "number"
    },
    "PublicKey": {
      "type": "string"
    },
    "Signature": {
      "type": "string"
    }
  },
  "required": [
    "Inquire",
    "Issuer",
    "Subject",
    "Timestamp",
    "PublicKey",
    "Signature"
  ]
}

const InquireHolderSchema =
{
  "type": "object",
  "properties": {
    "Inquire": {
      "type": "string",
      "pattern": "^Holder$"
    },
    "Address": {
      "type": "string"
    },
    "Issuer": {
      "type": "string"
    },
    "Subject": {
      "type": "string"
    },
    "Timestamp": {
      "type": "number"
    },
    "PublicKey": {
      "type": "string"
    },
    "Signature": {
      "type": "string"
    }
  },
  "required": [
    "Inquire",
    "Address",
    "Issuer",
    "Subject",
    "Timestamp",
    "PublicKey",
    "Signature"
  ]
}

const InquireOfferSchema =
{
  "type": "object",
  "properties": {
    "Inquire": {
      "type": "string",
      "pattern": "^Offer$"
    },
    "Address": {
      "type": "string"
    },
    "Sequence": {
      "type": "integer",
      "minimum": 1
    },
    "Timestamp": {
      "type": "number"
    },
    "PublicKey": {
      "type": "string"
    },
    "Signature": {
      "type": "string"
    }
  },
  "required": [
    "Inquire",
    "Address",
    "Sequence",
    "Timestamp",
    "PublicKey",
    "Signature"
  ]
}

const InquireOfferBookSchema =
{
  "type": "object",
  "properties": {
    "Inquire": {
      "type": "string",
      "pattern": "^OfferBook$"
    },
    "PayIssuer": {
      "type": "string"
    },
    "PaySubject": {
      "type": "string"
    },
    "GetIssuer": {
      "type": "string"
    },
    "GetSubject": {
      "type": "string"
    },
    "Timestamp": {
      "type": "number"
    },
    "PublicKey": {
      "type": "string"
    },
    "Signature": {
      "type": "string"
    }
  },
  "required": [
    "Inquire",
    "PayIssuer",
    "PaySubject",
    "GetIssuer",
    "GetSubject",
    "Timestamp",
    "PublicKey",
    "Signature"
  ]
}

const InquireUserSchema =
{
  "type": "object",
  "properties": {
    "Inquire": {
      "type": "string",
      "pattern": "^User$"
    },
    "Address": {
      "type": "string"
    },
    "Timestamp": {
      "type": "number"
    },
    "PublicKey": {
      "type": "string"
    },
    "Signature": {
      "type": "string"
    }
  },
  "required": [
    "Inquire",
    "Address",
    "Timestamp",
    "PublicKey",
    "Signature"
  ]
}

const vInquireAccountRootSchema = ajv.compile(InquireAccountRootSchema)
const vInquireAccountSchema = ajv.compile(InquireAccountSchema)
const vInquireIssuerSubjectSchema = ajv.compile(InquireIssuerSubjectSchema)
const vInquireHolderSchema = ajv.compile(InquireHolderSchema)
const vInquireOfferSchema = ajv.compile(InquireOfferSchema)
const vInquireOfferBookSchema = ajv.compile(InquireOfferBookSchema)
const vInquireUserSchema = ajv.compile(InquireUserSchema)
//end Inquire schema

//Verify schema
const VerifySchema = {
  "type": "object",
  "properties": {
    "Action": {
      "type": "string",
      "pattern": "^Verify$"
    },
    "ID": {
      "type": "string"
    },
    "Name": {
      "type": "string"
    },
    "Phone": {
      "type": "string"
    },
    "Code": {
      "type": "string"
    },
    "Ref": {
      "type": "string"
    },
    "Timestamp": {
      "type": "number"
    },
    "PublicKey": {
      "type": "string"
    },
    "Signature": {
      "type": "string"
    }
  },
  "required": [
    "Action",
    "ID",
    "Name",
    "Phone",
    "Code",
    "Ref",
    "Timestamp",
    "PublicKey",
    "Signature"
  ]
}

const vVerifySchema = ajv.compile(VerifySchema)
//end Verify schema

// Admin schema
const AdminAuthSchema = {
  "type": "object",
  "properties": {
    "Action": {
      "type": "string",
      "pattern": "^AdminAuth$"
    },
    "Address": {
      "type": "string"
    },
    "Duration": {
      "type": "number"
    },
    "Timestamp": {
      "type": "number"
    },
    "PublicKey": {
      "type": "string"
    },
    "Signature": {
      "type": "string"
    }
  },
  "required": [
    "Action",
    "Address",
    "Duration",
    "Timestamp",
    "PublicKey",
    "Signature"
  ]
}

const BackupTxSchema = {
  "type": "object",
  "properties": {
    "Action": {
      "type": "string",
      "pattern": "^BackupTx$"
    },
    "CurrentTxHash": {
      "type": "string"
    },
    "Timestamp": {
      "type": "number"
    },
    "PublicKey": {
      "type": "string"
    },
    "Signature": {
      "type": "string"
    }
  },
  "required": [
    "Action",
    "CurrentTxHash",
    "Timestamp",
    "PublicKey",
    "Signature"
  ]
}

const VerifyUserSchema = {
  "type": "object",
  "properties": {
    "Action": {
      "type": "string",
      "pattern": "^VerifyUser$"
    },
    "Address": {
      "type": "string"
    },
    "Ref": {
      "type": "string"
    },
    "Level": {
      "type": "number"
    },
    "IsOnline": {
      "type": "boolean"
    },
    "IsVerify": {
      "type": "boolean"
    },
    "Timestamp": {
      "type": "number"
    },
    "PublicKey": {
      "type": "string"
    },
    "Signature": {
      "type": "string"
    }
  },
  "required": [
    "Action",
    "Address",
    "Ref",
    "Level",
    "IsOnline",
    "IsVerify",
    "Timestamp",
    "PublicKey",
    "Signature"
  ]
}

const vAdminAuthSchema = ajv.compile(AdminAuthSchema)
const vBackupTxSchema = ajv.compile(BackupTxSchema)
const vVerifyUserSchema = ajv.compile(VerifyUserSchema)
// end Admin schema

function checkClientSchema(strJson) {
  if (typeof strJson == "string") {
    try {
      let json = JSON.parse(strJson)
      if (vInquireAccountRootSchema(json) || vInquireAccountSchema(json) || vInquireIssuerSubjectSchema(json) || vInquireHolderSchema(json) || vInquireOfferSchema(json) || vInquireOfferBookSchema(json) || vInquireUserSchema(json) || vPaymentSchema(json) || vSubjectProclaimSchema(json) || vSubjectRevokeSchema(json) || vTrustCreateSchema(json) || vTrustRemoveSchema(json) || vOfferCreateSchema(json) || vOfferCancelSchema(json) || vDeclareSchema(json) || vVerifySchema(json) || vBackupTxSchema(json) || vVerifyUserSchema(json) || vAdminAuthSchema(json)) {
        return json
      } else {
        return false
      }
    } catch (e) {
      return false
    }
  }
  else {
    return false
  }
}

module.exports = {
  checkClientSchema
}
