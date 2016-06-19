/**
 * Created by Franz on 5/14/2016.
 */

// TODO:  Need to review this for Synergy
const ALPHANUMERIC_REGEX: RegExp = /^[A-Z0-9]*$/i;
const SYNERGY_TEXT_REGEX: RegExp = ALPHANUMERIC_REGEX;
const EMAIL_REGEX: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,64}$/i;
const PASSWORD_REGEX: RegExp = /^(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Z\d$@$!%*#?&]{8,64}$/i;
const TOKEN_REGEX: RegExp = /^[A-Z0-9\-]*$/i;
const USERNAME_REGEX: RegExp = /^[A-Z0-9._%+-@]{4,64}$/i;
const CURRENCY_REGEX: RegExp = /^([0-9]{1,3},([0-9]{3},)*[0-9]{3}|[0-9]+)(.[0-9][0-9])?$/i;

export {
  ALPHANUMERIC_REGEX,
  SYNERGY_TEXT_REGEX,
  EMAIL_REGEX,
  PASSWORD_REGEX,
  TOKEN_REGEX,
  USERNAME_REGEX,
  CURRENCY_REGEX
}