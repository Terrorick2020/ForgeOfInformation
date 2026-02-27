import { Outlet } from 'react-router-dom';
import type { JSX } from 'react';
import styles from './layout.module.scss';

export function DefaultLayout(): JSX.Element {
    return (
        <div className={ styles["default-layout"] }>
            <div className={ styles["dl-box"] }>
                <Outlet />
            </div>
        </div>
    )
}
