/**
 * create user Performances
 * @class UserPerformances
 */
export default class UserPerformances
{
    /**
     * @property {string|null} data.userId
     * @param { Array.<Object> } data.kind
     * @param { Array.<Object> } data.data
     */
    constructor (data)
    {

        this.userId = data.userId;

        this.kind = data.kind;

        this.data = data.data.map((data) => ({
            value: data.value,
            kind: data.kind,
        }));

    }

}