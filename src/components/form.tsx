import React, { useState } from 'react';
import Reaptcha from 'reaptcha';

interface Props {
  formId?: number;
  buttonText?: string;
  recaptcha?: string;
}

export const Form: React.FC<Props> = ({ formId = 1, buttonText = 'Get the Catalog', recaptcha }) => {
  const [ disabled, setDisabled ] = useState<boolean>(!!recaptcha);

  const seconds = Math.floor(new Date().getTime() / 1000);
  const rand = Math.floor(Math.random() * 1048576);
  const unique = seconds.toString(16).toUpperCase() + rand.toString(16).toUpperCase();
  return (
    <form method="post" action="https://qccareerschool.activehosted.com/proc.php">
      <input type="hidden" name="u" value={unique} />
      <input type="hidden" name="f" value={formId} />
      <input type="hidden" name="s" />
      <input type="hidden" name="c" value="0" />
      <input type="hidden" name="m" value="0" />
      <input type="hidden" name="act" value="sub" />
      <input type="hidden" name="v" value="2" />
      <div className="form-group">
        <label htmlFor="firstName">First Name</label>
        <input className="form-control" id="firstName" name="firstname" />
      </div>
      <div className="form-group">
        <label htmlFor="lastName">Last Name</label>
        <input className="form-control" id="lastName" name="lastname" />
      </div>
      <div className="form-group">
        <label htmlFor="emailAddress">Email <span className="text-primary">*</span></label>
        <input type="email" className="form-control" id="emailAddress" name="email" required={true} />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone Number</label>
        <input type="tel" className="form-control" id="phone" name="phone" />
      </div>      
      <input type="hidden" name="field[3][]" value="~|" />
      <div className="form-group form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="opt-in"
          name="field[3][]"
          value="I agree to receive additional emails from QC, including promotions, course launches, special offers and more. Unsubscribe anytime!"
        />
        <label className="form-check-label small" htmlFor="opt-in">
          I agree to receive additional emails from QC, including promotions, course launches,
          special offers and more. Unsubscribe anytime!
        </label>
      </div>
      <input type="hidden" name="field[103][]" value="~|" />
      <div className="form-group form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="phone-opt-in"
          name="field[103][]"
          value="I agree to receive phone calls and/or text messages from a QC student advisor. Standard rates apply."
        />
        <label className="form-check-label small" htmlFor="phone-opt-in">
          I agree to receive phone calls and/or text messages from a QC student advisor. Standard rates apply.
        </label>
      </div>
      {recaptcha
        ? (
          <div className="form-group" style={{ minHeight: 78 }}>
            <Reaptcha sitekey={recaptcha} onExpire={() => { setDisabled(true); }} onVerify={() => { setDisabled(false); }} />
          </div>
        ) : null
      }
      <button className="btn btn-primary caps" type="submit">{buttonText}</button>
    </form>
  );
};
