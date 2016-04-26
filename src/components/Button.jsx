import SimpleWrapper from './SimpleWrapper.jsx';
import React from 'react';

/**
 * @original ons-button
 * @category page
 * @description
 * [en] Button component. If you want to place a button in a toolbar, use `<ons-toolbar-button>` or `<ons-back-button>` instead.   Will automatically display as a Material Design button with a ripple effect on Android.
 [/en]
 * [jp][/jp]
 * @example
 * <Button modifier="large--cta">
 *   Tap Me
 * </Button>
 */
class Button extends SimpleWrapper {
  _getDomNodeName() {
    return 'ons-button';
  }
};

Button.propTypes = {
  /**
   * @name modifier
   * @type string
   * @required false
   * @description
   *  [en]The appearance of the button.[/en]
   *  [jp] [/jp]
   */
  modifier: React.PropTypes.string,

  /**
   * @name disabled
   * @type bool
   * @description
   *  [en]
   *  Specifies whether the button is disabled.
   *  [/en]
   *  [jp] [/jp]
   */
  disabled: React.PropTypes.bool,

  /**
   * @name ripple
   * @type bool
   * @description
   *  [en]
   *  Specifies whether the button has a ripple effect.
   *  [/en]
   *  [jp] [/jp]
   */
  ripple: React.PropTypes.bool
};

export default Button;
