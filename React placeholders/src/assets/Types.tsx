export interface userProfileType {
    id: number;
    username: string;
    email: string;
    adress: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        }
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    }
}

export interface ProfileProps{
    profiles: userProfileType[];
}