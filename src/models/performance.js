/**
 * create user Performances
 * @class UserPerformances
 */
export default class UserPerformances
{
    /**
     * @property {string|null} id
     * 
     */
    constructor (data)
    {

        this.userId = data.userId;

        this.kind = data.kind;

        this.data = {
            value: data.data.value,
            kind: data.data.kind,
        }

    }
}