/**
 * create user activity
 * @class UserActivity
 */
export default class UserActivity
{
    /**
     * @property {string|null} userId
     * @param { Array.<Object> } data.sessions
     */
    constructor (data)
    {

        this.userId = data.userId;
        
        this.sessions = data.sessions.map((session, index) => ({
            // day: session.day,
            day: index + 1,
            kilogram: session.kilogram,
            calories: session.calories,
        }));

    }
}