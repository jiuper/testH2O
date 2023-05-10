import {Suspense} from 'react';
import {BrowserRouter} from 'react-router-dom';
import {RecoilRoot} from "recoil";

export const withRouter = (component: () => JSX.Element) => (): JSX.Element =>
    (
        <BrowserRouter>
            <RecoilRoot>
                <Suspense fallback="Loader...">{component()}</Suspense>
            </RecoilRoot>
        </BrowserRouter>
    );
