import * as React from 'react';
import { ToggleBasicExample } from './examples/Toggle.Basic.Example';
import { DemoPage } from '../../demo/components/DemoPage';
import { IDemoPageProps } from '../../demo/components/DemoPage.types';
import { ToggleAriaLabelExample } from './examples/Toggle.AriaLabel.Example';
import { ToggleStatus } from './Toggle.checklist';

const ToggleBasicExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Toggle/examples/Toggle.Basic.Example.tsx') as string;
const ToggleAriaLabelExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Toggle/examples/Toggle.AriaLabel.Example.tsx') as string;

export const TogglePageProps: IDemoPageProps = {
  title: 'Toggle',
  componentName: 'Toggle',
  componentUrl:
    'https://github.com/OfficeDev/office-ui-fabric-react/tree/master/packages/office-ui-fabric-react/src/components/Toggle',
  componentStatus: ToggleStatus,
  examples: [
    {
      title: 'Default Toggles',
      code: ToggleBasicExampleCode,
      view: <ToggleBasicExample />
    },
    {
      title: 'Toggle with specialized aria labels for the screen-reader to announce when the toggle is on and off',
      code: ToggleAriaLabelExampleCode,
      view: <ToggleAriaLabelExample />
    }
  ],
  propertiesTablesSources: [
    require<string>('!raw-loader!office-ui-fabric-react/src/components/Toggle/Toggle.types.ts')
  ],
  overview: require<string>('!raw-loader!office-ui-fabric-react/src/components/Toggle/docs/ToggleOverview.md'),
  bestPractices: '',
  dos: require<string>('!raw-loader!office-ui-fabric-react/src/components/Toggle/docs/ToggleDos.md'),
  donts: require<string>('!raw-loader!office-ui-fabric-react/src/components/Toggle/docs/ToggleDonts.md'),
  isHeaderVisible: true,
  allowNativeProps: true,
  nativePropsElement: 'input'
};

export const TogglePage = (props: { isHeaderVisible: boolean }) => <DemoPage {...{ ...TogglePageProps, ...props }} />;
