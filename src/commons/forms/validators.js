export const NAME_PATTERN = /^[a-zA-Z\u00C0-\u017F -]+$/;
export const EMAIL_PATTERN = /.+@.+\..+/;
export const PHONE_PATTERN = /^0[12345679][0-9]{8}$/;

export const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined);

// validators
export const required = value => (value ? undefined : 'required');

export const pattern = regexp => value => (new RegExp(regexp).test(value) ? undefined : 'pattern');
