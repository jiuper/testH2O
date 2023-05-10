import './index.scss';
import {withProviders} from './providers';
import {Routing} from '../pages';

const App = (): JSX.Element => {
    return (
        <>
            <Routing/>
        </>
    );
};
export default withProviders(App);
