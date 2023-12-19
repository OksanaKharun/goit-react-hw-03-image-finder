import { RotatingLines } from  'react-loader-spinner'


export const Loader = () =>
(
    <RotatingLines
        strokeColor="blue"
        strokeWidth="5"
        animationDuration="0.75"
        width="150"
        visible={true}
    />
);
