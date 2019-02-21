import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
 
let specContext = require.context('../../src', true, /(\.spec)\.js$/);
specContext.keys().forEach(specContext);

Enzyme.configure({ adapter: new Adapter() });
