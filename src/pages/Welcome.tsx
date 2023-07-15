import {useSearchParams} from 'react-router-dom';

export const Welcome = () => {
    let [searchParams] = useSearchParams();

    const id = searchParams.get('id');

    return (
        <div>
            <h1>
                id = {id}
            </h1>
            <h1>
                Welcome PAGE
            </h1>
        </div>

    );
};

