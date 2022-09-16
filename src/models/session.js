/**
 * create user Sessions
 * @class UserSessions
 */
export default class UserSessions
{
    /**
     * @property {string|null} id
     * 
     */
    constructor (data)
    {

        this.userId = data.userId;
        
        this.sessions = { 
            day: data.sessions.day,
            sessionLength: data.sessions.sessionLength,
        };

    }
}