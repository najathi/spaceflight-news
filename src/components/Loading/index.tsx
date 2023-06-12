import React from 'react'
import { SyncLoader } from 'react-spinners';

interface LoadingProps {
}

const Loading: React.FC<LoadingProps> = ({  }) => {
    return (
        <SyncLoader
            color="#570df8"
            loading={true}
            size={15}
        />
    );
}

export default Loading;