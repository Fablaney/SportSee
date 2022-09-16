/**
 * create user activity
 * @class UserActivity
 */
export default class UserActivity
{
    /**
     * @property {string|null} id
     * 
     */
    constructor (data)
    {

        this.userId = data.userId;
        
        this.sessions = data.session.map(
            [{
                day: data.sessions.day,
                kilogram: data.sessions.kilogram,
                calories: data.sessions.calories,
            }];) 

    }
}