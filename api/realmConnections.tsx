import axios from 'axios';
import { EJSON } from 'bson';
import { REACT_APP_REALM_URL } from '@env';

// Return all user's data stored in Realm
export const getUser = async (id: any): Promise<any> => {
    let resultData: any;
    await axios
        .get(`${REACT_APP_REALM_URL}/users`, { params: { userId: id } })
        .then((result: any) => {
            try {
                resultData = EJSON.parse(JSON.stringify(result.data[0]));
                // resultData = JSON.stringify(EJSON.parse(result.data[0]));
                console.log(resultData);
            } catch {
                console.log('DB Error');
            }
        });
    return resultData;
};

// Return all user's projects
export const getProjects = async (userId: string): Promise<any> => {
    let retrievedProjects: any;
    await axios
        .get(`${REACT_APP_REALM_URL}/users`, { params: { userId: userId } })
        .then((result: any) => {
            try {
                retrievedProjects = EJSON.parse(
                    JSON.stringify(result.data[0].projects)
                );
                console.log(retrievedProjects);
            } catch {
                console.log('DB Error');
            }
        });
    return retrievedProjects;
};
