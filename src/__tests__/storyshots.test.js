// @flow
import initStoryshots, {
  getSnapshotFileName,
} from '@storybook/addon-storyshots';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

initStoryshots({
  test: ({ story, context }) => {
    const snapshotFileName = getSnapshotFileName(context);
    const storyElement = story.render(context);
    const tree = mount(storyElement);
    const json = toJson(tree);

    if (snapshotFileName) {
      // Remind: property `toMatchSpecificSnapshot`. Property not found in Jest flowtype
      (expect(json): any).toMatchSpecificSnapshot(snapshotFileName);
    }
  },
});
