/**
 * create user datas
 * @class User
 */
export default class User
{
    /**
     * @property {string|null} id
     * @param { Object } data.userInfos
     * @param { Number } data.todayScore
     * @param { Number } data.score 
     * @param { Object } data.keyData
     */
    constructor (data)
    {

        this.id = data.id;

        this.userInfos = { 
            firstName: data.userInfos.firstName,
            lastName: data.userInfos.lastName,
            age: data.userInfos.age,
        };

        this.todayScore = data.todayScore;

        this.score = data.score;

        this.keyData = {
            calorieCount: data.keyData.calorieCount,
            proteinCount: data.keyData.proteinCount,
            carbohydrateCount: data.keyData.carbohydrateCount,
            lipidCount: data.keyData.lipidCount
        }

    }
}