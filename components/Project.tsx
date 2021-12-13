import React from 'react';
import { Text } from 'react-native';

interface Props {
    projectName: string;
}

const Project: React.FC<Props> = ({ projectName }) => {
    return (
        <>
            <Text>{projectName}</Text>
        </>
    );
};

export default Project;
