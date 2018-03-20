// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import ImageOnLoad from '.';

storiesOf('ImageOnLoad', module)
  .add(
    'Basic',
    withInfo({
      text: `API: https://github.com/evenchange4/ImageOnLoad#api`,
      inline: true,
    })(() => (
      <ImageOnLoad
        src="http://via.placeholder.com/350x150"
        onLoad={action('onLoad')}
      />
    )),
  )
  .add(
    'With two images',
    withInfo({
      text: `API: https://github.com/evenchange4/ImageOnLoad#api`,
      inline: true,
      propTables: [ImageOnLoad],
    })(() => (
      <React.Fragment>
        <ImageOnLoad
          src="http://via.placeholder.com/350x150"
          onLoad={action('onLoad 1')}
        />
        <ImageOnLoad
          src="http://via.placeholder.com/350x150"
          onLoad={action('onLoad 2')}
        />
      </React.Fragment>
    )),
  );
