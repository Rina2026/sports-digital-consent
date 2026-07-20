const CONFIG = Object.freeze({
  APP_NAME: 'Sports Digital Consent',
  VERSION: '1.0.0',
  TIMEZONE: 'Asia/Taipei',

  SPREADSHEET_ID: '1AfG0wBR67Cfy7K11K5OiPofFJLJCctp0xzvN-kwo_Jg',

  TEMPLATE_FOLDER_ID: '1BTrVed-qYARlM77TLOJ0YOYeaHbAF6Pf',
  PDF_FOLDER_ID: '1K6zpqDhtYJZTDej9dsuxwtOSuTTVYRv0',
  SIGNATURE_FOLDER_ID: '1laZLdVXWhR_TD6PW2GGHFpHLN7K1bQZw',
  SYSTEM_FOLDER_ID: '1JZSrx1PMzrAy3qS_baJKJpm8815nCqs4',

  TEMPLATE_DOC_ID: '',

  SHEETS: {
    CONSENT_LOG: 'Consent_Log',
    DOCUMENT_TEMPLATE: 'Document_Template',
    SYSTEM_CONFIG: 'System_Config',
    SYSTEM_LOG: 'System_Log'
  },

  CASE_PREFIX: 'CONSENT',
  DATE_FORMAT: 'yyyy-MM-dd',
  DATETIME_FORMAT: 'yyyy-MM-dd HH:mm:ss',

  MAX_SIGNATURE_SIZE_MB: 5,

  PLACEHOLDERS: {
    CASE_ID: '{{CASE_ID}}',
    NAME: '{{NAME}}',
    PHONE: '{{PHONE}}',
    EMAIL: '{{EMAIL}}',
    COURSE: '{{COURSE}}',
    VENUE: '{{VENUE}}',
    DATE: '{{DATE}}',
    SIGNATURE: '{{SIGNATURE}}'
  }
});
