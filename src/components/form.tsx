import React from 'react';

interface Props {
  formId?: number;
  buttonText?: string;
}

export const Form: React.FC<Props> = ({ formId = 1, buttonText = 'Get the Catalog' }) => {\
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
        <input className="form-control" id="firstName" name="lastname" />
      </div>
      <div className="form-group">
        <label htmlFor="emailAddress">Email <span className="text-primary">*</span></label>
        <input type="email" className="form-control" id="emailAddress" name="email" required={true} />
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
      <button className="btn btn-primary caps" type="submit">{buttonText}</button>
    </form>
  );
};
