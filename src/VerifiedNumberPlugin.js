import { FlexPlugin } from 'flex-plugin';

const PLUGIN_NAME = 'VerifiedNumberPlugin';

export default class VerifiedNumberPlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof import('@twilio/flex-ui') }
   * @param manager { import('@twilio/flex-ui').Manager }
   */
  init(flex) {

    flex.Actions.addListener("beforeAcceptTask", async (payload) => {
      
      const attributes = payload.task.attributes;
      const { REACT_APP_VERIFIED_PHONE_NUMBER } = process.env;

      if(attributes.to.match(/sip:.*/) && REACT_APP_VERIFIED_PHONE_NUMBER) {

        await payload.task.setAttributes({ 
          ...attributes,
          to: REACT_APP_VERIFIED_PHONE_NUMBER
        })

      }

    });
  }
}
