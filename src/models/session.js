/**
 * create user Sessions
 * @class UserSessions
 */
export default class UserSessions
{
    /**
     * @property {string|null} id
     * @param { Array.<Object> } data.session
     */
    constructor (data)
    {

        this.userId = data.userId;
        
        this.sessions = data.sessions.map((session) => ({
            day: session.day,
            sessionLength: session.sessionLength,
        }));

    }
}