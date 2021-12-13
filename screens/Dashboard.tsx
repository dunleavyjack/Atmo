import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getProjects } from '../api/realmConnections';
import Project from '../components/Project';

const Dashboard: React.FC = () => {
    const [projects, setProjects] = useState<any>();

    useEffect(() => {
        getProjects('61b55e13b91c46ea5703dda9').then((result) =>
            setProjects(result)
        );
    }, []);

    let projectList: any[] = [];

    if (projects) {
        projectList = projects.map((project: any, index: number) => {
            return <Project projectName={project.projectName} key={index} />;
        });
    }

    return (
        <View style={styles.container}>
            <Text>:)</Text>
            {projectList}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
});

export default Dashboard;
