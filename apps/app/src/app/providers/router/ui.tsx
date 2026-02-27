import { BrowserRouter, Routes, type RoutesProps } from 'react-router-dom';
import type { ITmplCompProps } from '@/shared';
import type { JSX } from 'react';


function Router({ children }: ITmplCompProps): JSX.Element {
    return (
        <BrowserRouter>
            <Routes>
                { children }
            </Routes>
        </BrowserRouter>
    )
}

export default Router;